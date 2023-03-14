---
title: Connect
---

:::info
This guide is meant only as an introduction. For an exhaustive list of Hive methods, please visit the [SDK documentation](/sdk/hive/js/introduction).
:::

## Setup

To add the Hive JS SDK dependency to your project, run the following command from your source folder:

```bash
npm i --save @elastosfoundation/hive-js-sdk
```

## Connect to Service

```js
import {
  AppContext,
  AppContextProvider,
  DIDResolverAlreadySetupException,
  Vault as VaultServices,
} from "@elastosfoundation/hive-js-sdk";

let vaultSubscriptionService: VaultSubscriptionService =
  new VaultSubscriptionService(appContext, "[hiveNode address]");
let vaultInfo = await vaultSubscriptionService.subscribe();
```

The same mechanics is used by VaultService, which provides all services to interact with Hive vaults.

```js
let vaultServices = new VaultServices(appContext, "[hiveNode address]");
let scriptingService = vaultServices.getScriptingService();
let filesService = vaultServices.getFilesService();
let databaseService = vaultServices.getDatabaseService();
```

:::tip
There is also an HTTP API available to interact with Hive nodes. Find it [here](https://apidocs.trinity-tech.io/hive-node-https-apis/).
:::

### An Example Authenticiation Setup

```js
import {
  Claims, DIDDocument, JWTHeader, JWTParserBuilder, VerifiableCredential, VerifiablePresentation, Logger,
} from '@elastosfoundation/did-js-sdk';
import { DID as ConnDID, DID } from '@elastosfoundation/elastos-connectivity-sdk-js';
import {
  AppContext, AppContextProvider, DIDResolverAlreadySetupException, Vault as VaultServices,
} from '@elastosfoundation/hive-js-sdk';
import dayjs from 'dayjs';

/**
 * This is a sample hive auth helper that makes everything automatic for apps using hive to
 * authenticate on hive vaults.
 *
 * This authentication flow is for the connectivity SDK.
 */
export class BrowserConnectivitySDKHiveAuthHelper {
  private didAccess: DID.DIDAccess;

  private logger = new Logger('hiveauthhelper');

  private dataDir = '/data/userDir/data/store/user'

  constructor(didResolverUrl: string, protected appDid: string) {
    try {
      AppContext.setupResolver(didResolverUrl, this.dataDir);
    } catch (e) {
      if (e instanceof DIDResolverAlreadySetupException) {
        // silent error, it's ok
      } else {
        this.logger.error('AppContext.setupResolver() exception:', e);
      }
    }

    this.didAccess = new ConnDID.DIDAccess();
  }

  use(didAccess: ConnDID.DIDAccess): BrowserConnectivitySDKHiveAuthHelper {
    this.didAccess = didAccess;

    return this;
  }

  public async getAppContext(userDid: string, onAuthError?: (e: Error) => void): Promise<AppContext> {
    const appInstanceDIDInfo = await this.didAccess.getOrCreateAppInstanceDID();

    this.logger.log('hiveauthhelper', 'Getting app instance DID document');
    const didDocument = await appInstanceDIDInfo.didStore.loadDid(appInstanceDIDInfo.did.toString());
    this.logger.log('hiveauthhelper', 'Got app instance DID document. Now creating the Hive client', didDocument.toJSON());

    const appContextProvider: AppContextProvider = {
      getLocalDataDir: (): string => this.dataDir,
      getAppInstanceDocument: (): Promise<DIDDocument> => Promise.resolve(didDocument),
      getAuthorization: (authenticationChallengeJWtCode: string): Promise<string> => {
        /**
         * Called by the Hive plugin when a hive backend needs to authenticate the user and app.
         * The returned data must be a verifiable presentation, signed by the app instance DID, and
         * including a appid certification credential provided by the identity application.
         */
        this.logger.log('hiveauthhelper', 'Hive client authentication challenge callback is being called with token:', authenticationChallengeJWtCode);
        try {
          return this.handleVaultAuthenticationChallenge(authenticationChallengeJWtCode);
        } catch (e) {
          this.logger.error('hiveauthhelper', 'Exception in authentication handler:', e);
          if (onAuthError) onAuthError(e);
          return null;
        }
      },
    };

    const appContext = await AppContext.build(appContextProvider, userDid, this.appDid);
    return appContext;
  }

  public async getVaultServices(userDid: string, providerAddress: string = null, onAuthError?: (e: Error) => void): Promise<VaultServices> {
    const appContext = await this.getAppContext(userDid, onAuthError);
    if (!providerAddress) { providerAddress = await AppContext.getProviderAddressByUserDid(userDid); } // TODO: cache, don't resolve every time
    return new VaultServices(appContext, providerAddress);
  }

  /*
  - auth challenge: JWT (iss, nonce)
  - hive sdk:
    - verify jwt
    - extract iss and nonce
  - consumer dapp:
    - generate app instance presentation including nonce=nonce, realm=iss, app id credential
    - embed presentation as JWT and return to the hive auth handler
  - server side:
    - verify jwt (using local app instance did public key provided before)
    - generate access token
  */
  public handleVaultAuthenticationChallenge(jwtToken: string): Promise<string> {
    return this.generateAuthPresentationJWT(jwtToken);
  }

  /**
   * Generates a JWT token needed by hive vaults to authenticate users and app.
   * That JWT contains a verifiable presentation that contains server challenge info, and the app id credential
   * issued by the end user earlier.
   */
  private generateAuthPresentationJWT(authChallengeJwttoken: string): Promise<string> {
    this.logger.log('hiveauthhelper', 'Starting process to generate hive auth presentation JWT');

    return new Promise(async (resolve, reject) => {
      // Parse, but verify on chain that this JWT is valid first
      try {
        const claims: Claims = (await new JWTParserBuilder().setAllowedClockSkewSeconds(300).build().parse(authChallengeJwttoken)).getBody();
        if (claims == null) throw new Error('Invalid jwt token as authorization.');

        // The request JWT must contain iss and nonce fields
        if (!claims.getIssuer() || !claims.get('nonce')) {
          reject('The received authentication JWT token does not contain iss or nonce');
          return;
        }

        // Generate a hive authentication presentation and put the credential + back-end info such as nonce inside
        const nonce = claims.get('nonce') as string;
        const realm = claims.getIssuer() as string;

        this.logger.log('hiveauthhelper', 'Getting app instance DID');
        const appInstanceDIDResult = await this.didAccess.getOrCreateAppInstanceDID();
        const appInstanceDID = appInstanceDIDResult.did;

        const appInstanceDIDInfo = await this.didAccess.getExistingAppInstanceDIDInfo();

        this.logger.log('hiveauthhelper', 'Getting app identity credential');
        let appIdCredential = await this.didAccess.getExistingAppIdentityCredential();

        if (!appIdCredential) {
          this.logger.log('hiveauthhelper', 'Empty app id credential. Trying to generate a new one');

          appIdCredential = await this.generateAppIdCredential();
          if (!appIdCredential) {
            this.logger.warn('hiveauthhelper', 'Failed to generate a new App ID credential');
            resolve(null);
            return;
          }
        }

        // Create the presentation that includes hive back end challenge (nonce) and the app id credential.
        this.logger.log('hiveauthhelper', 'Creating DID presentation response for Hive authentication challenge');
        const builder = await VerifiablePresentation.createFor(appInstanceDID.toString(), null, appInstanceDIDResult.didStore);
        const presentation = await builder
          .credentials(appIdCredential)
          .realm(realm)
          .nonce(nonce)
          .seal(appInstanceDIDInfo.storePassword);

        if (presentation) {
          // Generate the hive back end authentication JWT
          this.logger.log('hiveauthhelper', 'Opening DID store to create a JWT for presentation:', presentation.toJSON());
          const didStore = await DID.DIDHelper.openDidStore(appInstanceDIDInfo.storeId);

          this.logger.log('hiveauthhelper', 'Loading DID document');
          try {
            const didDocument = await didStore.loadDid(appInstanceDIDInfo.didString);
            this.logger.log('hiveauthhelper', 'App instance DID document', didDocument.toJSON());
            this.logger.log('hiveauthhelper', 'Creating JWT');

            try {
              // Create JWT token with presentation.
              // let info = await new ConDID.DIDAccess().getExistingAppInstanceDIDInfo();
              const jwtToken = await didDocument.jwtBuilder().addHeader(JWTHeader.TYPE, JWTHeader.JWT_TYPE)
                .addHeader('version', '1.0')
                .setSubject('DIDAuthResponse')
                .setAudience(claims.getIssuer())
                .setIssuedAt(dayjs().unix())
                .setExpiration(dayjs().add(3, 'month').unix())
                .setNotBefore(dayjs().unix())
                .claimsWithJson('presentation', presentation.toString(true))
                .sign(appInstanceDIDInfo.storePassword);

              this.logger.log('hiveauthhelper', 'JWT created for presentation:', jwtToken);
              resolve(jwtToken);
            } catch (err) {
              reject(err);
            }
          } catch (err) {
            reject(err);
          }
        } else {
          reject('No presentation generated');
        }
      } catch (e) {
        // Verification error?
        // Could not verify the received JWT as valid - reject the authentication request by returning a null token
        reject(`The received authentication JWT token signature cannot be verified or failed to verify: ${e.message}. Is the hive back-end DID published? Are you on the right network?`);
      }
    });
  }

  private generateAppIdCredential(): Promise<VerifiableCredential> {
    // eslint-disable-next-line no-async-promise-executor, @typescript-eslint/no-misused-promises
    return new Promise(async (resolve) => {
      const storedAppInstanceDID = await this.didAccess.getOrCreateAppInstanceDID();
      if (!storedAppInstanceDID) {
        resolve(null);
        return;
      }

      // No such credential, so we have to create one. Send an intent to get that from the did app
      this.logger.log('hiveauthhelper', 'Starting to generate a new App ID credential.');

      // Ask the identity wallet (eg: Essentials) to generate an app id credential.
      const didAccess = new ConnDID.DIDAccess();
      const appIdCredential = await didAccess.generateAppIdCredential();

      // Save this issued credential for later use.
      await storedAppInstanceDID.didStore.storeCredential(appIdCredential);

      resolve(appIdCredential);
    });
  }
}
```
