---
title: Metadata
---

## DID Metadata

DID metadata refers to the other DID-related information stored in the background that cannot be put into the DID document, such as nickname, chain status, and latest transaction records.

The attributes of DID metadata are divided into default and customized attributes.

The default attributes of DID metadata can be divided into two types: read-write and read-only. The read-write attributes can be realized by getting and setting corresponding attributes, which mainly include alias; read-only attributes can be achieved by getting corresponding attributes, mainly including root identity ID (that is, which root identity this DID is derived from), index (as an DID derived from the root identity, where the DID ranks), transaction ID (the locally saved transaction ID obtained by the last resolve - this ID isn't necessarily the latest transaction ID on the chain, which depends on the time of the last DID resolve), published time (the time when the local data is published to the chain for the last time - this isn't necessarily the time when the last transaction is published to the chain, which depends on whether the transaction is updated locally or whether the last publishing is completed locally), and deactivated status. Hence, it's suggested that the latest transaction on the chain be updated locally before obtaining DID metadata attributes, which will be more accurate. Refer to the API document for specifics.

The customized attributes of DID metadata can be read and written by getExtra and setExtra. See the API document for details.

#### Example

```ts
let did = doc.getSubject();
let resolved = did.resolve();
let metadata = resolved.getMetadata();
metadata.setExtra("usage", "for signing in");
... ... ...
let published = metadata.getPublished();
let txId = metadata.getTransactionId();
let usage = metadata.getExtra("usage");
... ... ...
```

## Credential Metadata

Credential metadata refers to the other credential-related information stored in the background that cannot be put into the credential, e.g. nickname, chain status, and latest transaction records.

The attributes of credential metadata are divided into default and customized attributes.

The default attributes of credential metadata can be divided into two types: read-write and read-only. The read-write attributes can be realized by getting and setting corresponding attributes, which mainly include alias; read-only attributes can be achieved by getting corresponding attributes, which mainly include transaction ID (the locally saved transaction ID obtained by the last resolve - this ID isn't necessarily the latest transaction ID on the chain, which depends on the time of the last credential resolve), published time (the time when the credential is declared locally for the last time - this isn't necessarily the time when the last transaction is published to the chain, which depends on whether the transaction is updated locally or whether the last publishing is completed locally) and revoked status. Therefore, it's suggested that the latest transaction on the chain be updated locally before obtaining credential metadata attributes, which will be more accurate. Refer to the API document for specifics.

The customized attributes of credential metadata can be read and written by getExtra and setExtra. See the API document for details.

#### Example

```ts
let resolved = await VerifiableCredential.resolve(id);
let metadata = resolved.getMetadata();
metadata.setExtra("usage", "for school");
... ... ...
let published = metadata.getPublished();
let txId = metadata.getTransactionId();
let usage = metadata.getExtra("usage");
... ... ...
```
