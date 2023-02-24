---
title: Import/Export
---

## RootIdentity

DID Store offers a method of exporting the specified RootIdentity, including the id, mnemonic, private key, derive index, metadata, and more of RootIdentity.

The exported result is a string in the format of json, and the exported content of RootIdentity is stored in json one-by-one in the form of json fields. For security reasons, the private key is encrypted.

DID Store provides a method of importing RootIdentity, which directly saves json data in the imported DID Store as RootIdentity object, thereby accomplishing the migration of RootIdentity.

#### Example

```ts
let rootPath = "root/store";
let restorePath = "root/newStore";
let store = await DIDStore.open(rootPath);
... ... ... ...
let ids = await store.listRootIdentities();
let id = ids[0].getId();
... ... ... ...
//export RootIdentity
let data = await store.exportRootIdentity(id, "password", "pwd");
store.close();
if (data != null && data !== "") {
    console.log("export root identity {} successfully.", id);
    let newStore = await DIDStore.open(restorePath);
    //import RootIdentity
    await newStore.importRootIdentity(data, "password", "newpwd");
    let rootId = newStore.loadRootIdentity(id);
    if (rootId)
        console.log("import root identity {} successfully.", id);
    else
        console.log("import root identity {} failed.", id);
    ... ... ... ...
    newStore.close();
} else {
    console.log("export root identity {} failed.", id);
}
```

#### Usage

```ts
public exportRootIdentity(
    id: string,
    password: string,
    storepass: string
): string;
```

id is the identifier that needs to export RootIdentity; password is the export password used for the encryption of RootIdentity private key, which is required when importing data; storepass is the store password for exporting DID Store, and users obtain the private key from there.

```ts
public importRootIdentity(
    data: string,
    password: string,
    storepass: string
): void;
```

Data refers to information in json format, or the exported data; password is the import password, which is consistent with the export password. If it's incorrect, the import function cannot be completed correctly. Storepass is the store password imported into the DID Store, which is used for the encryption of private key within. There's no need to provide any information about the id identifier of RootIdentity.

## DID

DID Store provides a method to export the specified DID, with the exported content mainly including DID, DID document, verifiable credentials (if any), and private keys (if any).

The exported result is a string in JSON format, and the exported content of DID is orderly stored in JSON by JSON field. For security reasons, the private key is stored encrypted.

DID Store provides the method of importing DID by directly saving JSON data as a DID object in the imported DIDstore, thereby completing the migration of DID.

#### Example

```ts
let rootPath = "root/store";
let restorePath = "root/newStore";
let store = await DIDStore.open(rootPath);
... ... ... ...
let dids = await store.listDids();
let did = dids[0];
... ... ... ...
//export DID
let data = await store.exportDid(did, "password", "pwd");
store.close();

if (data != null && data !== "") {
    console.log("export DID {} successfully.", did);
    let newStore = await DIDStore.open(restorePath);
    //import DID
    await newStore.importDid(data, "password", "newpwd");
    let doc = newStore.loadDid(did);
    if (doc)
        console.log("import DID {} successfully.", did);
    else
        console.log("import DID {} failed.", did);
    newStore.close();
} else {
    console.log("export DID {} failed.", did);
}
```

#### Usage

```ts
public async exportDid(
    did: DID | string,
    password: string,
    storepass: string
): Promise<string>;
```

Password refers to the export password used for the encryption of DID private key, which needs to be used when importing data; storepass is the store password for exporting DID Store, and users get the private key from DID Store.

```ts
public importDid(
    data: string,
    password: string,
    storepass: string
): void;
```

Data refers to information in JSON format, that is, the exported data; password is the import password, which is consistent with the export password. If it is incorrect, the import function cannot be completed correctly. Storepass is the store password imported into the DID Store, which is used for the encryption of private key in the DID Store.

## DIDStore

DID Store provides a method to export the entire DIDStore - RootIdentity and DID are the exported content.

The exported result is a zip file. To get multiple RootIdentities and DIDs from the DID Store, users need to obtain data files according to the export methods in the previous two chapters, then save them in a .zip file.

DID Store provides a method of importing by directly doing so with .zip files and saving them as RootIdentity and DID objects - this completes the migration of the whole DID Store.

#### Example

```ts
let rootPath = "root/store";
let restorePath = "root/newStore";
let store = await DIDStore.open(rootPath);
... ... ... ...
//export DID store
let tempDir = new File(TestConfig.tempDir);
tempDir.createDirectory();
let exportFile = new File(tempDir, "storeexport.zip");
await store.exportStore(exportFile.getAbsolutePath(), "password", "pwd");
store.close();
let newStore = await DIDStore.open(restorePath);
//import DID store
await newStore.importStore(exportFile.getAbsolutePath(), "password", "newpwd");
newStore.close();
```

#### Usage

```ts
public async exportStore(
    zipFile : string,
    password: string,
    storepass: string
): Promise<void>;
```

Password is the export password used for encrypting the private key of DID, which is required when importing data; storepass is the store password for exporting DID Store, and users obtain the private key from the DID Store.

```ts
public async importStore(
    zipFile: string,
    password: string,
    storepass: string
): Promise<void>;
```

zipFile is the zip file path; password is the import password, which is consistent with the export password. If it's incorrect, the import function cannot be completed correctly. Storepass is the store password for importing DID Store, which is used for the encryption of the private key in the DID Store.
