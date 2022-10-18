---
title: Connect
---

```js
export class ApiServiceContextProvider implements AppContextProvider {
    getLocalDataDir = () : string => {
        ...
    };

    getAppInstanceDocument = async () : Promise<DIDDocument> => {
       ...
    };

    getAuthorization = async (authenticationChallengeJWtCode: string): Promise<string> => {
      ...
    }
}

let vaultSubscriptionService : VaultSubscriptionService = new VaultSubscriptionService(appContext, "[hiveNode address]");
let vaultInfo = await vaultSubscriptionService.subscribe();
The same mechanics is used by VaultService, which provides all services to interact with hive vault

let vaultServices = new VaultServices(appContext, "[hiveNode address]");
let scriptingService = vaultServices.getScriptingService();
let filesService = vaultServices.getFilesService();
let databaseService = vaultServices.getDatabaseService();
```
