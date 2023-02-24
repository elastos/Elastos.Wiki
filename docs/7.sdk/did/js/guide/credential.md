---
title: Credential and Presentation
---

## Issue a Credential

The issuer generates and issues credentials based on subject data provided by the owner. According to the relationship between the issuer and the owner, credentials can be divided into self-proclaimed and third-party credentials. The issuer of a self-proclaimed credential is its owner, that is, individuals issue credentials encapsulated with individual information for themselves; a third-party credential is issued by a DID other than the owner - that is, the credential is encapsulated by a third party, such as a trusted institution, according to the data provided by the owner.

#### Example

An example of a self-proclaimed credential:

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let mnemonic = "pact reject sick voyage foster fence warm luggage cabbage any subject carbon";
let passphrase = "helloworld";
let identity = RootIdentity.createFromMnemonic(mnemonic, passphrase, store, "pwd");
let doc = await identity.newDid("pwd");
​
let props = {
	name: "Testing Issuer",
	nation: "Singapore",
	language: "English",
	email: "issuer@example.com"
};
//create Issuer
let issuer = new Issuer(doc);
let cb = issuer.issueFor(doc.getSubject());
//create self-claimed credential
let vc = await cb.id("#myCredential")
	.type("BasicProfileCredential",
	"SelfProclaimedCredential")
	.properties(props)
	.seal(storePass);
... ... ... ...
store.close();
```

An example of a third-party credential:

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let mnemonic = "pact reject sick voyage foster fence warm luggage cabbage any subject carbon";
let passphrase = "helloworld";
let identity = RootIdentity.createFromMnemonic(mnemonic, passphrase, store, "pwd");
let doc = await identity.newDid("pwd");
let issuerDoc = await identity.newDid("pwd");
​
let props = {
	name: "John",
	gender: "Male",
	nation: "Singapore",
	language: "English",
	email: "john@example.com",
	twitter: "@john"
};
​
//create Issuer
let issuer = new Issuer(issuerDoc);
let cb = issuer.issueFor(doc.getSubject());
//create kyc credential
let vc =  await cb.id("#testCredential")
	.type("BasicProfileCredential", "InternetAccountCredential")
	.properties(props)
	.seal(storePass);

... ... ... ...
store.close();
```

#### Usage

```ts
export class Issuer {
	... ... ... ...
	constructor(doc: DIDDocument, signKey?: DIDURL);
	... ... ... ...
}
```

The constructor generates the issuer, with doc as the DID document of the issuer and signKey as the authentication key used by the DID to sign the credential. If not specified, the default key is used by default.

```ts
public issueFor(did: DID | string): VerifiableCredential.Builder;
```

The issuer specifies for whom the credential should be issued. After the VerifiableCredential.Builder object is obtained, more attributes of the credential are set according to various methods provided by VerifiableCredential.Builder.

DID is the owner of the credential to be issued.

```ts
public async seal(storepass: string): Promise<VerifiableCredential>;
```

VerifiableCredential.Builder provides a method to encapsulate the content of the credential, and storepass refers to the storepass in the DID store of the issuer.

## Verify the Integrity of Credential

For security, it's necessary to verify the availability of the credential by checking whether the content of the credential is valid, expired, or revoked.

#### Usage

```ts
public async isGenuine(
	listener: VerificationEventListener = null
): Promise<boolean>；
```

Credential provides a method to check whether the credential is complete, each element of the credential is qualified, it's verifiable, and has not been tampered with.

Listener obtains the error information set in the verification process and locates the points of failure of specific deep calls.

```ts
public async isExpired(): Promise<boolean>；
```

Credential offers a method of checking if the credential expires. The validity period of the credential cannot be greater than that of the document of the DID.

```ts
public async isRevoked(): Promise<boolean>；
```

Credential offers a method of checking whether the credential is revoked.

```ts
public async isValid(
	listener: VerificationEventListener = null
): Promise<boolean>；
```

Credential offers a method of comprehensively verifying whether the credential is valid, which includes the above three rules.

## Declare and revoke credential

The Elastos ID chain supports publishing the credential to the chain, which is used for the DID credential information to be declared. Besides, whether the credential has been declared or not, it can be revoked to publicly inform that the credential is invalid and can no longer be trusted.

#### Example

Declaring the credential:

```ts
let vc =  await selfIssuer.issueFor(did)
	.id("#test")
	.type("SelfProclaimedCredential")
	.properties({"name": "littlefish"})
	.seal(storePass);
​
vc.getMetadata().attachStore(doc.getStore());
//declare self-claimed credential
await vc.declare(null, storePass);
if (await vc.wasDeclared())
	console.log("declare credential successfully.");
else
	console.log("declare credential failed.");
Example of revoking the credential:
//declare by owner
await credential.declare(signKey, storePass);
let id = credential.getId();
//resolve credential
let resolved = await VerifiableCredential.resolve(id);
if (await resolved.isRevoked())
	console.log("credential is revoked.");
else
	console.log("credential isn't revoked.");
... ... ... ...
//revoke credential by owner
await credential.revoke(signKey, null, storePass);
```

#### Usage

```ts
public async declare(
	signKey: DIDURL,
	storepass: string,
	adapter: DIDTransactionAdapter = null
): Promise<void>;
```

The credential provides a method to publish the current credential to the chain (i.e. declaration). It should be noted that all credentials that have not been declared or revoked by the owner or issuer can be declared, and the same credential can only be declared once. The declaration can only be initiated by the owner of verifiable credentials.

> signKey is the key of the declarant, that is, the owner of the verifiable credential, which is used to sign the published content of the declared credential; storepass refers to the storepass of the DID store that contains the private key used by the declarant for signature.

```ts
public async revoke(
	signKey: DIDURL | string,
	signer: DIDDocument = null,
	storepass: string = null,
	adapter: DIDTransactionAdapter = null
): void;
```

Credential provides a method to revoke credentials. It should be noted that whether the credential has been declared or not, it can be revoked, but if the credential has been revoked by its owner or issuer, it cannot be revoked again. To revoke the verifiable credential, the credential owner or issuer needs to initiate the corresponding transaction.

> signKey is the key of the revoker, that is, the owner or issuer of the verifiable credential; signer denotes the DID document of the revoker who is the owner of signKey by default.

## List the Declared Credentials

Credential list is a method to obtain all the credentials declared by the specified DID.

#### Example

```ts
//if did has 6 credentials, ids.length == 6
let ids = await VerifiableCredential.list(did);
//if did has 200 declared credentials, ids1.length == 128, ids2.length == 72
let ids1 = await VerifiableCredential.list(did);
let ids2 = await VerifiableCredential.list(did, ids1.length);
//if did has 1028 declared credentials, ids1.length == 512, ids2.length == 512, ids3.length == 4
ids1 = await VerifiableCredential.list(did, 0, 1028);
ids2 = await VerifiableCredential.list(did, 512, 516);
let ids3 = await VerifiableCredential.list(did, 1024, 4);
```

#### Usage

```ts
public static list(
	did: DID, // the owner who needs to list all the declared credentials
	skip = 0, // ignore the first {number} credentials
	limit = 0 // limit indicates the maximum number of credentials that can be listed
): Promise<DIDURL[]>;
```

If limit is the default value and the actual number of declared credentials in the chain surpasses 128, only 128 credentials will be returned. Set skip to get the remaining credentials. If limit > 512 and there are more than 512 declared credentials in the chain, only 512 credentials will be returned. Set skip to get the remaining credentials.

## Resolve the Declared Credential

Resolve credential is different from resolve DID. Resolve DID only requires the specified DID to get the latest content on the chain; resolve credential may return different results, which depends on whether the issuer is provided or not. The specific situation is analyzed as follows:

- If the credential has not been operated, no matter whether the request contains the issuer parameter or not, non-presence status is returned, and the result does not include any transaction.
- If the credential has only been declared, no matter whether the request contains the issuer parameter or not, the declared status is returned, and the result includes a declared transaction.
- If the credential has been declared and revoked by its owner or issuer, no matter whether the request contains the issuer parameter or not, the revoked status is returned. The result includes two transactions, namely the declared transaction and the valid transaction revoked by the owner or issuer.
- If the credential has not been declared or it is revoked by the owner, no matter whether the request contains the issuer parameter or not, the revoked status is returned, and the result includes a valid transaction revoked by the owner.
- If the credential has not been declared or it is revoked by the issuer, no matter whether the request contains the issuer parameter or not, the revoked status is returned, and the result includes a valid transaction revoked by the issuer. If the request contains no issuer parameter, non-presence status is returned, and the result does not include any transaction.

#### Example

```ts
//declare by owner
await credential.declare(signKey, storePass);
let id = credential.getId();
//resolve credential
let resolved = await VerifiableCredential.resolve(id);
if (await resolved.isRevoked())
	console.log("credential is revoked.");
else
	console.log("credential isn't revoked.");
... ... ... ...
//revoke credential by owner
await credential.revoke(signKey, null, storePass);
let bio = await VerifiableCredential.resolveBiography(id, credential.getIssuer());
//get information from CredentialBiography
... ... ... ...
```

#### Usage

```ts
public static async resolve(
	id: DIDURL | string,
	issuer: DID | string = null,
	force = false
): Promise<VerifiableCredential>;
```

The SDK offers a method to resolve credentials, and only declared credentials can be resolved.

id refers to the ID of the credential to be resolved; issuer represents the issuer of the credential, which is mainly used for the third-party KYC credential to inquire whether there is a valid transaction revoked by the issuer. Without this field, the analysis result will not include the transaction revoked by the issuer.

Force denotes whether to resolve the credential on the chain or get the credential from the cache within its validity period.

```ts
public static resolveBiography(
	id: DIDURL,
	issuer: DID
): Promise<CredentialBiography>;
```

The SDK provides a method to resolve all the transaction records of the specified credential.

id is the identifier of the credential; issuer is the issuer of the credential, and the CredentialBiography object is returned. CredentialBiography provides a method to obtain the status and all transaction records of the credential on the chain. Refer to “API document” for specifics.

## Package the Credentials as Presentation for the Selective Disclosure Request

Verifiable presentation refers to a data set containing a subset of verifiable credentials and countersign of an entity, which is used to show the identity to a third party.

Verifiable presentation can also be an empty presentation entity rather than include any verifiable credential.

#### Example

```ts
//DID has two 'TwitterCredential' and 'PassportCredential' credentials to package
let pb = await VerifiablePresentation.createFor(doc.getSubject(), null, store);
let vp = await pb
	.credentials(doc.getCredential("#profile"))
	.credentials(doc.getCredential("#email"))
	.credentials(TwitterCredential)
	.credentials(PassportCredential)
	.realm("https://example.com/")
	.nonce("873172f58701a9ee686f0630204fee59")
	.seal(TestConfig.storePass);
// to use presentation
... ... ... ...
```

#### Usage

```ts
public static async createFor(
	did: DID | string,
	signKey: DIDURL | string | null,
	store: DIDStore
): Promise<VerifiablePresentation.Builder>;
```

This method gets the builder object to generate the presentation of the specified DID.

did is the owner of the presentation; signKey is the authentication key for the owner of the presentation to sign and encapsulate the presentation.

```ts
public credentials(...credentials: VerifiableCredential[]): Builder;
```

This method applies to adding VerifiableCredential.

```ts
public realm(realm: string): Builder;
```

VerifiablePresentation.Builder provides a method to set realm, which indicates the applicable domain and address of this presentation.

```ts
public nonce(nonce: string): Builder;
```

VerifiablePresentation.Builder provides a method to set nonce, which is a random value used by the sign action.

```ts
public async seal(storepass: string): Promise<VerifiablePresentation>;
```

VerifiablePresentation.Builder provides the encapsulation method, which finally obtains the VerifiablePresentation.

## How to Use and Verify Presentation

Presentation offers various methods to get internal elements, e.g. id, holder, number of credentials, and different credentials. See “API document” for specifics.

Presentation also provides a method of checking integrity and validity, which not only checks the correctness of each element of the presentation itself but also verifies the validity of internal elements such as holder and credential.

#### Usage

```ts
public isGenuine(
	listener: VerificationEventListener = null
): boolean；
```

Presentation offers a method to check the integrity of the presentation and its various elements, e.g. the integrity of the presentation holder and the encapsulated credentials.

Listener obtains the error information set in the verification process, and locates the points of failure of specific deep calls.

```ts
public isValid(
	listener: VerificationEventListener = null
): boolean ；
```

Presentation offers a method to verify the validity of the presentation and its various elements, e.g. the validity of the presentation holder and the encapsulated credentials. Validity includes integrity.
