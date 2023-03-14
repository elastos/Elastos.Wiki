---
title: Vault Subscription
---

Hive SDK needs to interact with the remote Vault service through the Vault instance. Users subscribe to the trusted Hive Node to create Vault service in advance; then they can access the application data to the corresponding Vault.

The VaultSubscription class is used to create a Vault Service by subscription, and the Hive Node service creates a new Vault Service according to the DID identity of the requester. If the Vault Service based on the DID identity already exists, the existing Vault Service metadata will be returned.

## Example

Use the vaultSubscription instance to create a new Vault service in the trusted Hive Node subscription and return a CompletableFuture object containing the metadata information of the subscribed remote Vault Service. The actual sample code is as follows:

```js
let subscription = try VaultSubscription(testData.appContext, testData.providerAddress)
subscription.subscribe()
.done { vault in
   print("Registered vault service successfully.")

   print("service DID ==> \(vaultInfo.serviceDid)")
   print("storage quota ==> " + vaultInfo.getStorageQuota());
   print("price plan ==> \(vaultInfo.pricePlan)")
}
.catch { error in
   print("Failed to register vault service")
   print(error)
}
```

Once the subscription is successful, the instantiation object vault can be used to access the application data.

## Subscription Management

### Check Subscription

After subscribing to the trusted Hive Node, users can use the vault instance to access the data in the application or view the information of the corresponding Vault Service by using the following interface.

```js
subscription.checkSubscription()
.done { vault in
   print("Dump remote vault service:")
   print("service DID ==> \(vaultInfo.serviceDid)")
   print("storage quota ==> \(vaultInfo.storageQuota)")
   print("price plan ==> \(vaultInfo.pricePlan)")
}
.catch { error in
   print("Failed to check vault subscription")
   print(error)
}
```

### Unsubscribe

Users can use the Vault service for a period of time and migrate the already used Vault service to the new Hive Node as needed. After the migration, it's important to stop the Vault service on the original Hive Node and destroy the data within it.

```js
subscription.unsubscribe()
.done { success in
   print("Unsubscribed from the vault service")
   print("Cleared all data in this vault.")
}
.catch { error in
   print("Failed to unsubscribe to vault service")
   print(error)
}
```

:::info Attention
After calling this interface to cancel the Vault service, the data held in the vault will be permanently deleted from the corresponding Hive Node, and the Vault service will stop serving as well. Users must ensure that a new Vault service has been migrated before calling this interface to cancel the Vault service that originally needed to be abandoned.
:::
