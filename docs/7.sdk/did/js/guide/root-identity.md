---
title: RootIdentity
---

## Create RootIdentity

As the foundation of the DID system, RootIdentity provides three generation methods:

1. First, generate the RootIdentity object according to mnemonic and passphrase.
2. Second, generate the RootIdentity object per the extended root private key.
3. Third, generate the RootIdentity object according to that derived root public key.

#### Example

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
... ... ... ...
let mnemonic = "pact reject sick voyage foster fence warm luggage cabbage any subject carbon";
let rootKey = "xprv9s21ZrQH143K4biiQbUq8369meTb1R8KnstYFAKtfwk3vF8uvFd1EC2s49bMQsbdbmdJxUWRkuC48CXPutFfynYFVGnoeq8LJZhfd9QjvUt";
let derivedPubKey = "xpub6BmohzsffkuPQHqRNqksqvnef6c3wKarsRAmBjRHZgkLrT91xzH3HnkkJv48oursb6CxdzwuDecozwCXF5t9ropBqpPVz4hw2foivZxsmVs";
let passphrase = "helloworld";

//the first method
let identity = RootIdentity.createFromMnemonic(mnemonic, passphrase, store, "pwd");
if (identity) {
    let id1 = identity.getId();
    identity = RootIdentity.createFromPrivateKey(rootKey, store, "pwd");
    if (identity) {
        let id2 = identity.getId();
        identity = createFromPreDerivedPublicKey(derivedPubKey, 0);
        if (identity) {
            let id3 = identity.getId();
            if (id1 === id2 && id2 === id3) {
                console.log("three ids are same.");
            else
                console.log("three ids are same.");
        }
    }
}
... ... ... ...
store.close();
```

#### Usage

```ts

public static createFromMnemonic(
    mnemonic: string,
    passphrase: string,
    store: DIDStore,
    storepass: string,
    overwrite = false
): RootIdentity;
public static createFromPrivateKey(
    extentedPrivateKey: string,
    store: DIDStore,
    storepass: string,
    overwrite = false
): RootIdentity;
public static createFromPreDerivedPublicKey(
    preDerivedPublicKey: string,
    index: number
): RootIdentity;
```

Mnemonic currently supports mnemonics in nine languages, namely Simplified Chinese, Traditional Chinese, English, French, Italian, Korean, Japanese, Spanish, and Czech.

ExtendedPrivateKey is the base58 string of 82-bit extended root private key, which is convenient for processing without having to expose the private key.

PreDerivedPublicKey is a base58 string of 82-bit derived root public key.

Overwrite indicates whether it's necessary to overwrite the RootIdentity that is already on the local machine. When overwrite is true, then overwrite the existing RootIdentity and return the newly generated RootIdentity object; when overwrite is false, if RootIdentity already exists, throw an exception and return NULL.

## Create DIDs from the RootIdentity

#### Example

```ts

let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
... ... ... ...
let mnemonic = "pact reject sick voyage foster fence warm luggage cabbage any subject carbon";
let passphrase = "helloworld";
let identity = RootIdentity.createFromMnemonic(mnemonic, passphrase, store, "pwd");
let doc = await identity.newDid("pwd");
let did = identity.getDid(0);
if (doc && did) {
    console.log("new did {} successfully.", doc.getSubject());
    loadDoc = store.loadDid(doc.getSubject());
    if (loadDoc)
        console.log("new did {} is in the DID store.", doc.getSubject());
    else
        console.log("new did {} isn't in the DID store.", doc.getSubject());
    if (did.equals(doc.getSubject()))
        console.log("two dids are same.");
    else
        console.log("two dids aren't same");
} else if (doc == null) {
    console.log("new did failed.");
} else {
    console.log("get did failed.");
}
... ... ... ...
store.close();
```

#### Usage

```ts
public async newDid(
    storepass: string,
    index: number = undefined,
    overwrite = false
): Promise<DIDDocument>;
```

RootIdentity generates a new DID, saves its DID document in the DID store, and returns DID document. It should be noted that this function does not need to provide a DID Store, which is provided by RootIdentity (generating RootIdentity is equivalent to recording its associated DID Store).

Overwrite indicates whether the existing DID needs to be overwritten. When overwrite is true, overwrite the existing DID and return the newly generated DID object; when overwrite is false, if the DID already exists, throw an exception and return NULL.

```ts
public getDid(
    index: number
): DID；
```

GetDid is used to get DID objects, which will neither generate nor save DID document in the process. It's mainly used for users to obtain DID objects to perform other DID operations.

## Backup and Synchronize

RootIdentity provides a method to get DIDs on all chains derived from it, then save the corresponding DID documents to the DID Store. This method enables the user to update multiple DIDs under the root identity at one time, get the latest document, and initialize the user’s new DID Store.

If the RootIdentity is generated based on mnemonic, then we can export this mnemonic for backup.

:::info
The root identity created with the extended root private key cannot export mnemonics.
:::

### Export Mnemonic

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
... ... ... ...
let mnemonic = "pact reject sick voyage foster fence warm luggage cabbage any subject carbon";
let rootIdentity = RootIdentity.createFromMnemonic(mnemonic,
    "", store, "pwd", true);
let exportedMnemonic = rootIdentity.exportMnemonic("pwd");
... ... ... ...
store.close();
```

#### Restore RootIdentity

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
... ... ... ...
let mnemonic = "pact reject sick voyage foster fence warm luggage cabbage any subject carbon";
let rootIdentity = RootIdentity.createFromMnemonic(mnemonic,
    "", store, "pwd", true);
console.log("Synchronizing from IDChain...");
//synchronize
await rootIdentity.synchronize();
let duration = (Date.now() - start + 500) / 1000;
console.log("Synchronize from IDChain...OK({}s)", duration);
... ... ... ...
//to check DID object
... ... ... ...
store.close();
```

### Usage

```ts
public async synchronize(
    handle: ConflictHandle = null
): Promise<void>；
```

Handle is a solution provided by users when locally acquired DID document and that acquired from the chain conflict with each other. The default solution provided by the SDK is to keep locally acquired DID document and ignore the version obtained from the chain. To apply different solutions, users need to set this parameter.

```ts
public async synchronizeIndex(
    index: number,
    handle: ConflictHandle = null
): Promise<boolean>;
```

Index indicates the nth DID derived from the root identity; the meaning of handle is the same as above.
