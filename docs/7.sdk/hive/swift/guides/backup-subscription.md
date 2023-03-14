---
title: Backup Subscription
---

Considering the redundancy of data on the Hive Node, it's important to keep multiple backups of data in the Vault. In case the corresponding Hive Node fails, other trusted Hive Nodes can be selected to restore and generate the Vault service that can continue to serve. BackupSubscription class is used to subscribe to the trusted Hive Node to create a Backup Service. After creation, it can be used to back up the data in the established Vault service to the Backup service.

BackupSubscription class is used to create a Backup service by subscription, and Hive Node service creates a new Backup service according to the DID identity of the requester. If the Backup service based on the DID identity already exists, the metadata information of the existing Backup service is returned.

## Examples

Use BackupSubscription instance to create a new Backup service in the trusted Hive Node subscription and return a CompletableFuture object containing metadata information of the remote Backup service of the subscription. The actual sample code is as follows:

```js
let subscription = try BackupSubscription(appContext, providerAddress)
subscription!.subscribe()
.done { backup in
   print("Registered backup service successfully.")
   print("service DID ==> \(backup.serviceDid)")
   print("storage quota ==> \(backup.storageQuota)")
   print("price plan ==> \(backup.pricePlan)")
}
.catch { error in
   print("Failed to register backup service")
   print(error)
}
```

After successfully subscribing to the Backup service, the Vault data held by the DID identity can be backed up to the Hive Nodes through the Backup service.

:::info Attention
When you create a subscription Backup service, you must use the same DID identity as the Vault service so that the vault data corresponding to the DID identity can be backed up into the Backup service. To avoid a single point of failure, it's important to create a subscription Backup service with the Hive Node that is no longer the same as the Vault service to be backed up.
:::

## Subscription Management

### Check Subscription

After subscribing to the trusted Hive Node, users can use the backup object to access the data in the application, or view the information of the corresponding Backup service by using the following interface:

```js
subscription!.checkSubscription()
.done { backup in
   print("Dump remote backup service:")
   print("service DID ==> \(backup.serviceDid)")
   print("storage quota ==> \(backup.storageQuota)")
   print("price plan ==> \(backup.pricePlan)")
}
.catch { error in
   print("Failed to check backup subscription")
   print(error)
}
```

### Unsubscribe

After using the Backup service for a period of time, if the user finds that the experience isn't suitable and another trusted Hive Node can provide a better Backup service, the data in the backup can be unsubscribed and destroyed, then another trusted Hive Node can be chosen to subscribe for a new Backup service.

```js
subscription!.unsubscribe()
.done { success in
   print("Unsubscribed from the backup service")
   print("Cleared all data in this backup")
}
.catch { error in
   print(error)
}
```

:::info Attention
After calling this interface to destroy the Backup service, the data held in the backup will be permanently deleted from the corresponding Hive Node, and the Backup service will stop serving as well.
:::
