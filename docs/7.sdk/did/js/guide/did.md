---
title: DID
---

## Access the DID Document

The DID document provides the method to get the number and individuals of internal objects, i.e. Subject, Controller, Multisig, Public Key, Authentication Key, Authorization Key, Verifiable Credential, and Service. It's relatively simple to understand and use these APIs, and users can refer to the API document directly.

This section mentions the method provided by the DID document to acquire DID Metadata and Default Key.

#### Usage

```ts
public getDefaultPublicKeyId(): DIDURL；
```

This method is the main key to get DID document.

```ts
public getMetadata(): DIDMetadata；
```

This method gets DIDMetadata, which contains the information that the DID cannot put into DID document.

## Create DID

DID provides three methods to create DID objects based on DID strings. The DID string is roughly divided into three parts: schema, method, and methodSpecificId, which are separated by “:”, for example:

`did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN`

#### Example

```ts
let did1 = new DID("did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN");
let did2 = new DID("elastos", "abc");
let did3 = DID.createFrom("did:elastos:littlefish", 0, 22);
let did4 = DID.From("did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN");
let did5 = DID.From(did2);
```

#### Usage

```ts
public constructor(
    methodOrDID: string,
    methodSpecificId: string | null = null,
    start?: number, limit?: number
)；
```

```ts
public static createFrom(
    methodOrDID: string,
    start: number,
    limit: number
): DID；
```

```ts
public static from(
    did: DID | string | null
): DID | null；
```

## Create DIDDocument

DID documents are divided into ordinary and customized DIDs, and everything explained here is applicable to ordinary ones. The customized DID document will be described in detail in the following sections.

Generate the DID document by newDid. This DID document is the most basic, containing only the default key. Users can modify the content of DID document via DID document Builder, and can terminate the modification by the seal method to get a new DID document.

The DID document contains five elements: public key, authentication key, authorization key, verifiable credential, and service. The document can be correspondingly modified by adding or removing methods. Please refer to API doc for specific methods.

#### Example

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let rootidentity = await store.loadRootIdentity();
//create did
let doc = await rootidentity.newDid(storePass);
//edit builder
let db = DIDDocument.Builder.newFromDocument(doc).edit();

//add authentication key
let id = DIDURL.from("#test1", db.getSubject());
let key = HDKey.deriveWithPath(HDKey.DERIVE_PATH_PREFIX + 5);
db.addAuthenticationKey(id, doc.getSubject(), key.getPublicKeyBase58());//
//to add/delete other elem
... ... ... ...
//seal DID Document
let doc = await db.seal(storePass);
doc.publish(storePass);
... ... ... ...
store.close();
```

#### Usage

The newDid method has been introduced in the chapter of RootIdentity, so it's unnecessary to go into details here.

```ts
public static newFromDocument(
    doc: DIDDocument,
    controller?: DIDDocument
): Builder;
```

```ts
public edit(
    controller?: DIDDocument
): Builder;
```

newFromDocument is used together with the edit method, as shown in the example.

NewFromDocument copies the original DID document to prevent subsequent modification from affecting the original DID document, and edit checks whether the document signed by DID document subject meets the requirements.

Controller parameter is modified for the customized DID document, which will be explained in detail in the following sections. For ordinary DID document, there is no need to provide parameters.

```ts
public async seal(
    storepass: string
): Promise<DIDDocument>;
```

The seal method encapsulates and gets a new DID document. Storepass is the password of the DID Store, which is used to sign the main content of the modified DID document via the private key of the master key.

```ts
public createAndAddPublicKey(
    id: DIDURL | string,
    pk: string,
    controller?: DID | string,
    type = "ECDSAsecp256r1"
): Builder;
```

If this method adds the public key that already exists (with id or pk being the same), an error is returned.

```ts
public removePublicKey(
    id: DIDURL | string,
    force = false
): Builder；
```

It should be noted that the default key cannot be removed; when you want to remove the authentication or authorization key, decide whether to remove it according to the force parameter. If force is true and removal is supported, an error is returned.

```ts
public addExistingAuthenticationKey(
    id: DIDURL | string
): Builder；
```

The method is to add the public key that already exists but meets the authentication key as the authentication key. If it doesn't exist or its type does not meet the requirements, errors are returned.

```ts
public addAuthenticationKey(
    id: DIDURL | string,
    pk: string
): Builder；
```

This method is to add the new authentication key. If it already exists, an error is returned.

> Pk is the base58 string of the public key.

```ts
public removeAuthenticationKey(
    id: DIDURL | string
): Builder；
```

This method removes the authentication key that already exists. If no authentication key exists, an error is returned.

```ts
public addExistingAuthorizationKey(
    id: DIDURL | string
): Builder；
```

This method adds the public key that already exists as the authorization key. The following conditions should be met:

1. The public key already exists.
2. It's neither an authentication key nor an authorization key.
3. The controller is not a DID document subject. If these conditions are not met, an error is returned.

```ts
public addAuthorizationKey(
	id: DIDURL | string,
	controller: DID | string,
	pk: string
): Builder；
```

This method adds a new authorization key. If it already exists, an error is returned.

> Pk is the base58 string of the public key; the controller refers to the owner of the key.

```ts
public async authorizeDid(
	id: DIDURL,
	controller: DID,
	key: DIDURL
): Promise<Builder>；
```

This method is to add the specified key to be an Authorization key - this specified key is the key of specified controller. Authentication is the mechanism by which the controller(s) of a DID can cryptographically prove that they are associated with that DID. A DID Document must include an authentication key.

```ts
public removeAuthorizationKey(
	inputId: DIDURL | string
): Builder；
```

This method removes the specified authorization key. If this key does not exist or it is not an authorization key, an error is returned.

```ts
public addCredential(
	vc: VerifiableCredential
): Builder；
```

This method adds the verifiable credential provided by users. If the ID of this credential already exists in the DID document, an error is returned.

```ts
public async createAndAddCredential(
	storepass: string,
	id: DIDURL | string,
	subject: JSONObject | string = null, // Subject refers to the theme of the credential, that is, the primary content of the json credential
	types: string[] = null,
	expirationDate: Date = null // expirationDate is the validity period, which cannot be greater than that of the document of the DID.
): Promise<Builder>；
```

This method is used to directly add the self-proclaimed credential, without having to creating the credential and then adding it to the DID document.

Types refer to the types of credentials. The SDK supports the following five types:

- SelfProclaimedCredential
- EmailCredential
- ProfileCredential
- SocialCredential
- WalletCredential

Users can choose the type according to their needs, or add customized types using corresponding methods.

```ts
public removeCredential(
	id: DIDURL | string
): Builder；
```

This method removes the specified credential. If it does not exist, an error is returned.

```ts
public addService(
	id: DIDURL | string,
	type: string,
	endpoint: string, // the address of the service point
	properties?: JSONObject // the content customized by users
): Builder；
```

This method adds the service. If the specified ID already exists, an error is returned.

```ts
public removeService(
	id: DIDURL | string
):  Builder；
```

This method removes specified service. If no specified service exists, an error is returned.

```ts
public setExpires(
	expires: Date
): Builder；
```

The validity period of DID Document is five years after its creation by default. If the validity period is customized by users, it's set using this method cannot exceed five years, otherwise an error will be returned.

## Create Customized DID

DIDSDK supports customized DID, which means that the corresponding DID document is needed. There is a cryptographically verifiable key between the subject and the default key in ordinary DID document. When the DID document finally uses this default key to sign the document body, there is a closed-loop verification process to avoid malicious means such as tampering.

However, the customized DID identifier is only an arbitrary string provided by the user, and it's impossible to generate a key cryptographically associated with the DID identifier. If a random key is added and used to sign the principal data in the DID document, then the key can be replaced by the content modified by others at any time, which cannot guarantee that the DID document will not be tampered with maliciously. To solve this problem, the controller and Multisig are introduced. The controller is the actual holder of the customized DID document, and Multisig refers to the multi-signature rule for multiple controllers.

According to the number of controllers, the creation of customized DID involves two cases, namely single-signed and multi-signed. This section provides two single-signed examples.

#### Example

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let rootidentity = store.loadRootidentity();
let controller = await identity.newDid(storePass);
await controller.publish(storePass);
... ... ... ...
resolved = await controller.getSubject().resolve();

// Create customized DID
let did = new DID("did:elastos:helloworld");
//new Customized DID
let doc =  await controller.newCustomized(did, 1, storePass, false);
await doc.publish(storePass);
... ... ... ...
let resolved =  await did.resolve();
... ... ... ...
store.close();
```

#### Usage

```ts
public newCustomized(
	inputDID: DID | string, // the customized DID identifier
	storepass: string,
	force?: boolean // if true, the document is overwritten; if false, the document is not overwritten
): Promise<DIDDocument>；
```

This method is the most classic method to generate single-signed customized DID document. See the above example for details.
inputDID denotes

The newCustomizedDidWithController method in the example is more often used in multi-signed cases, so the detailed introduction is presented in the next section.

```ts
public isCustomizedDid(): boolean；
```

This method can be used to check if the DID document is a customized one.

## Create Multi-signed Customized DID

This section mainly introduces the method of generating and modifying the multi-signed customized DID document, which isn't available in the ordinary document.

The multi-signature (m:n) rule requires n>1. M represents the number of signers, that is, the number of signatures in the proof of document. If the number of signatures is less than m, it means that the document at this time is not really a valid multi-signed document, and the remaining controllers who haven’t signed need to sign the documents.

#### Example

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let rootidentity = store.loadRootidentity();
//get the first controller
let controller1 = await identity.newDid(storePass);
await controller1.publish(storePass);
//get the second controller
let controller2 = await identity.newDid(storePass);
await controller2.publish(storePass);
//get the third controller
let controller3 = await identity.newDid(storePass);
await controller3.publish(storePass);
... ... ... ...
let did = new DID("did:elastos:byeworld");
//new multi-signed Customized DID
//customized document has three controller and multisig is 2:3, so document must be signed by two controllers. controller2 is the first signer.
let doc = await controller2.newCustomizedDidWithController(did, [controller1.getSubject(), controller2.getSubject(), controller3.getSubject()], 2, storePass);
//check signer is enough
if (!doc.isQualified())
	//the second signer, and finished multi-signure.
	await controller1.signWithDocument(doc, storePass);

//check the doc
if (doc.isQualified()) {
	console.log("create multi-signed customized document successfully." );
} else {
	console.log("create multi-signed customized document failed." );
}
... ... ... ...
//modify the document:remove controller1,mutisig 2:2
let db = DIDDocument.Builder.newFromDocument(doc).edit(controller2);
db.removeController(controller1.getSubject());
//do other things
... ... ... ...
let doc = db.seal();
await controller3.signWithDocument(doc, storePass);
if (doc.isValid()) {
	console.log("create multi-signed customized document successfully." );
} else {
	console.log("create multi-signed customized document failed." );
}

doc.setEffectiveController(controller3.getSubject());
await doc.publish(storePass);
... ... ... ...
store.close();
```

#### Usage

The methods of adding and removing elements in the ordinary DID document are also applicable to the customized DID document, and what is described here is the unique content of customized DID document.

```ts
public async newCustomizedDidWithController(
	inputDID: DID | string,
	inputControllers: Array<DID | string>,
	multisig: number,
	storepass: string,
	force?: boolean
): Promise<DIDDocument>；
```

This method generates the initial multi-signed document. At this time, only one controller signs the primary data in the obtained document, and whether the number of signatures accords with the multi-signature rule is verified by the isQualified method.

```ts
public isQualified(): boolean;
```

This method tells whether the number of signatures in the current customized document lives up to the multi-signature rule. If false is returned, the controller who hasn’t signed will continue to complete the signature work to improve the document.

```ts
public async addController(
    controller: DID | string
): Promise<Builder>；
```

```ts
public removeController(
    controller: DID | string
): Builder;
```

The above two methods are apparently exclusive to the customized DID document. If adding and removing controllers is used for the ordinary DID document, an error is returned.

```ts
public setMultiSignature(
    m: number
): Builder;
```

This method resets the over-signature rule.

```ts
public setEffectiveController(controller: DID)：void;
```

Before signing the multi-signed customized DID document, the effective controller should set to specify which controller’s master key is used for signing.

## Sign and Verify Data by DID Document

The DID document can sign the data on behalf of DID, so the DID document offers methods for signing and verifying data.

#### Usage

```ts
public signWithId(
	id: DIDURL | string | null,
	storepass: string,
	...data: Buffer[]
): Promise<string>；
```

This method signs the data with the private key of the specified key, and then return signature.

```ts
public signWithStorePass(
	storepass: string,
	...data: Buffer[]
): Promise<string>；
```

This method uses the default key of the DID document to sign the data, and then return the signature. If the DID document is a multi-signed customized DID document, an error is returned.

```ts
public async signWithTicket(
	ticket: TransferTicket,
	storepass: string
): Promise<TransferTicket>；
```

This method applies to the multi-signing of TransferTicket. According to the multi-signature rule of the customized DID document, this method is used for the second and later controller DID document signature. See “Transfer DID” for specific examples.

```ts
public async signWithDocument(
	doc: DIDDocument,
	storepass: string
): Promise<DIDDocument>；
```

The method is used for the multi-signing of the customized DID Document. According to the multi-signature rule of the customized DID document, it is used for the second and later controller DID document signature. See “Create multi-signed customized DID” for specific examples.

```ts
public verify(
	id: DIDURL | string | null, // the ID of the key
	signature: string, // the string of the results containing a signature
	...data: Buffer[] // the original signed data
): boolean;
```

This method verifies the signature. If the key, signature, and data don't match, the verification fails, which mainly prevents data from being tampered with.

## Verify the Integrity of DIDDocument

For security and the unity of documents on the chain, it's necessary to verify the usability of the DID document by checking whether the DID document itself is valid, expired, or invalid.

#### Usage

```ts
public isGenuine(
	listener: VerificationEventListener = null
): boolean；
```

The DID document provides a method to check whether the document is complete, each element of meets the requirements, whether can be verified and signed, or it's been tampered with. For instance, whether the number of signatures of the customized DID document meets the multi-signature rule is important to understand.

The listener obtains the error information set in the verification process and locates the points of failure of specific deep calls.

```ts
public isExpired(): boolean；
```

The DID document offers a method for checking if it expires.

```ts
public isDeactivated(): boolean；
```

The DID document also provides a method of checking if it's invalid. Invalidity is not equivalent to expiration. In the case of invalidity, the invalid document should be operated by the DID itself or the client. Whether the document expires is determined by whether it is beyond its validity period, and the document that expires can be reset and restored.

```ts
public isValid(
	listener: VerificationEventListener = null
): boolean ；
```

The DID document offers a method of comprehensively verifying whether it's valid, which includes the above three rules.

## Publish DID

The publishing of DID is divided into valid and deactivated publishing. Deactivated publishing is to inform that the DID on the chain has failed and cannot be used again (this part will be introduced in the following section); valid publishing means updating the effective DID information to the chain (relevant instructions will be introduced in this section).

The DID Document stands for the publishing of DID, which provides Publish DID as a method of updating DID to the chain. This method is suitable for effectively updating ordinary DID and customized DID without changing the subject’s information (Controller and Multisig) to the chain.

To prevent the published content from being maliciously tampered with, DID signs the published content with its own authentication key, and the receiver verifies the signature of the content based on the provided information to confirm the reliability of the published content.

#### Example

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let rootidentity = store.loadRootidentity();
let controller = await identity.newDid(storePass);
//publish controller
await controller.publish(storePass);
// Create customized DID
let did = new DID("did:elastos:helloworld");
//new Customized DID
let doc =  await controller.newCustomized(did, 1, storePass, false);
//publish DID
await doc.publish(storePass);
... ... ... ...
let db = DIDDocument.Builder.newFromDocument(doc).edit();
//add authentication key
let id = DIDURL.from("#test1", db.getSubject());
let key = HDKey.deriveWithPath(HDKey.DERIVE_PATH_PREFIX + 5);
db.addAuthenticationKey(id, doc.getSubject(), key.getPublicKeyBase58());
//seal DID Document
let doc = await db.seal(storePass);
doc.publish(storePass);
... ... ... ...
store.close();
```

#### Usage

```ts
export interface DIDTransactionAdapter {
	createIdTransaction(payload: string, memo: string);
}

public async publish(
	storepass: string,
	inputSignKey: DIDURL | string = null,
	force = false,
	adapter: DIDTransactionAdapter = null
): Promise<void>；
```

InputSignKey is the authentication key designated to sign the content updated to the chain. Here, it should be noted that the publishing of ordinary DID only requires a random authentication key. However, the sign key of customized DID can only be its own authentication key or the default key of the controller. When the inputSignKey is null, the default key of the DID document is used for signing the published content, and the ordinary DID document must have the default key. However, for customized DIDs, only the customized DID with single signature has the default key, while the multi-signed customized DID does not have one. Therefore, if the multi-signed customized DID uses the default value null, an error will be reported. Please be sure to assign the specified sign key.

Force indicates whether it's possible to force the publishing of data to the chain when the DID document expires or the local DID document is not modified and updated based on the latest version on the chain. Generally, it's recommended that the local DID Document be modified based on the latest version on the chain, so as to smoothly publish the document. Under special circumstances, by setting force to be true, the publishing can also be forced. If force is true, the documents that have expired can also be updated.

The adapter provides an interface for publishing the data to the chain. Users can implement it on their own or use the default interface provided by Publish DID.

:::info
Whether by modifying the controller or multisig, the customized DID document cannot publish the data to the chain by means of Publish DID.
:::

## Transfer Ownership of the Customized DID

As mentioned in the previous section, Publish DID is used for effectively updating ordinary DID and customized DID without changing the subject’s information (Controller and Multisig) to the chain. This section introduces how to update the DID document to the chain after modifying the information of the controller.

The DID document offers the TransferDID method to complete the transaction of modifying the controller’s information. This transaction should be accomplished using the master key of the original controller of the DID based on the modified document and the transfer ticket.

#### Example

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let identity = store.loadRootidentity();
// Create normal DID first
let controller = await identity.newDid(storePass);
await controller.publish(storePass);
// Create customized DID
let did = new DID("did:elastos:helloworld");
let doc = await controller.newCustomized(did, 1, storePass);
await doc.publish(storePass);
// create new controller
let newController = await identity.newDid(storePass);
await newController.publish(storePass);
// create the transfer ticket from one old Controller
let ticket = await controller.createTransferTicket(newController.getSubject(), storePass, doc.getSubject());
// create new document for customized DID
doc = await newController.newCustomized(did, 1, storePass, true);
// transfer DID
await doc.publishWithTicket(ticket, newController.getDefaultPublicKeyId(), storePass);
... ... ... ...
store.close();
```

#### Usage

```ts
public async createTransferTicket(
	to: DID,
	storepass: string,
	from?: DID
): Promise<TransferTicket>;
```

The DID document provides the method of generating the transfer ticket. CreateTransferTicket was initiated by one of the controllers of the DID document before it's modified, and the transfer ticket is also signed and encapsulated by the initiator.

To is the recipient of the transfer ticket, who must be one of the controllers and signers of the modified DID document - otherwise, the transfer DID fails.

From is the owner of the transfer ticket - that is, the customized DID.

```ts
public async publishWithTicket(
	ticket: TransferTicket,
	inputSignKey: DIDURL | string | null,
	storepass: string,
	adapter: DIDTransactionAdapter = null
): void；
```

inputSignKey is the authentication key of the modified document or the master key of the controller. The other parameters are the same as those of Publish DID.

## Deactivate DID

Both Publish and Transfer DID update valid data to the chain, while Deactivate DID means stopping the use of the DID.

The DID can be deactivated by itself or the client. The ordinary DID can be deactivated by the authentication key and the authorization key. The customized DID can be deactivated by the authentication key and the controller’s default key.

The DID that has not been published to the chain cannot be deactivated.

#### Example

Deactivate self use authentication key:

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let rootidentity = store.loadRootidentity();
let doc = await identity.newDid(storePass);
//publish controller
await doc.publish(storePass);
.. ... ... ...
let resolved = await doc.getSubject().resolve();
if (resolved)
	await doc.deactivate(null, storePass, null);
if (doc.isDeactivated())
	console.log("deactivate did successfully.");
else
	console.log("deactivate did failed.");
... ... ... ...
store.close();
```

Deactivate target DID by the authorizor's DID：

```ts
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);
let storePass = "pwd";
... ... ... ...
let rootidentity = store.loadRootidentity();
let doc =  await identity.newDid(storePass);
let db = DIDDocument.Builder.newFromDocument(doc).edit();

let id =  DIDURL.from("#key-2", doc.getSubject());
let key = HDKey.deriveWithPath(HDKey.DERIVE_PATH_PREFIX  +  5);
db.addAuthenticationKey(id, key.getPublicKeyBase58());
store.storePrivateKey(id, key.serialize(), storePass);
doc = await db.seal(storePass);
await store.storeDid(doc);
await doc.publish(storePass);
let resolved =  await doc.getSubject().resolve();
... ... ... ...
let target = await identity.newDid(storePass);
db = DIDDocument.Builder.newFromDocument(target).edit();
db.addAuthorizationKey("#recovery", doc.getSubject().toString(), key.getPublicKeyBase58());
target =  await db.seal(storePass);
await store.storeDid(target);
await target.publish(TestConfig.storePass);
resolved =  await target.getSubject().resolve();
if (resolved)
	console.log();

await doc.deactivateTargetDID(target.getSubject(), null, storePass, null);
target =  await target.getSubject().resolve();
if (target.isDeactivated())
	console.log("deactivate did successfully.");
else
	console.log("deactivate did failed.");
... ... ... ...
store.close();
```

#### Usage

```ts
public async deactivate(
	signKey: DIDURL = null, // the authentication key designated to sign the deactivated transaction. If signKey is null, the default key will be used
	storepass: string,
	adapter: DIDTransactionAdapter = null
): void；
```

This method is initiated by the deactivated DID itself. The DID deactivates does this using its own authentication key.

```ts
public async deactivateTargetDID(
	target: DID, // the DID to be deactivated
	signKey: DIDURL = null,
	storepass: string,
	adapter: DIDTransactionAdapter = null
): void；
```

This method is a deactivation operation initiated by the client.

> signKey parameter: The deactivation of ordinary DID is initiated by the authorizer DID document, which provides the authorizer authentication key. This key must exist as authorization key in the DID document of the target. The customized DID is initiated by the controller DID document, with the controller default key as the sign key.

## Resolve DIDs

The DID provides a method of acquiring the DID document or the historical DID document, and verifying the validity of the DID document.

Resolve has two ways to obtain the DID document. The first is chain resolve, which returns the DID document that exists on the chain; the second way is local resolve. Under certain special circumstances, some DID documents only need to exist rather than to be published to the chain, but in the follow-up work, the resolve function is required to access the DID Document. At this time, local resolve can be used. The DID document that needs to be returned is provided by the user - this method is mainly used for verification.

Only through chain resolve can the historical transactions of DID be obtained.

To enhance flexibility, the DID document obtained through resolve needs to be saved to the DID store and updated locally by users themselves.

### Chain Resolve

Before using the chain resolve method, make sure that DIDBackend has been initialized and the chain address of resolve has been provided; otherwise resolve will fail.

There are three states of DID on the chain:

1. not found (which means that the DID is not published to the chain)
2. valid
3. deactivated.

- Example

```ts
let rpcEndpoint = "testnet";
let contractAddress = "0xF654c3cBBB60D7F4ac7cDA325d51E62f47ACD436";
... ... ... ...
let adapter = new Web3Adapter(rpcEndpoint, contractAddress, null, null);
DIDBackend.initialize(adapter);
... ... ... ...
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);

let did = new DID("did:elastos:iXcRhYB38gMt1phi5JXJMjeXL2TL8cg58y");
if (did) {
    //resolve did
    let doc = did.resolve(true);
    if (doc)
        console.log("resolve did {} successfully.", did);
    else
        cosole.log("resolve did {} failed.", did);
    ... ... ...
    //resolve did history
    let bio = did.resolveBiography();
    if (bio) {
        console.log("resolve did biography: count={}", bio.getTransactionCount());
        ... ... ... ...
    } else {
        console.log("resolve did biography failed.");
    }
}
... ... ... ...
store.close();
```

- Usage

```ts
public async resolve(
    force = false
): Promise<DIDDocument>;
```

Resolve gets the latest DID document on the chain, or the last document published to the chain. If the document exists on the chain and the network normally works, the DID document is verified as valid, and the DIDDocument object is returned; otherwise, null is returned, and the reason of failure can be obtained by exception.

Force indicates whether it's necessary to get the DID document from the chain. The SDK has a cache freshness for the resolved results, which is 10 minutes by default. If force is false and the cache is within its validity period, resolve returns the caching results; if force is false but the cache is in effect, or if force is true, the DID document data will be obtained directly from the chain.

```ts
public resolveBiography(): Promise<DIDBiography>;
```

This method can obtain the historical information of DID. If it fails, null is returned; if it succeeds, DIDBiography object is returned. DIDBiography contains DID status and the content of each transaction. See “API document” for details.

### Local Resolve

##### Example

```ts
let rpcEndpoint = "testnet";
let contractAddress = "0xF654c3cBBB60D7F4ac7cDA325d51E62f47ACD436";
... ... ... ...
let adapter = new Web3Adapter(rpcEndpoint, contractAddress, null, null);
DIDBackend.initialize(adapter);
... ... ... ...
let rootPath = "root/store";
let store = await DIDStore.open(rootPath);

let did = new DID("did:elastos:iXcRhYB38gMt1phi5JXJMjeXL2TL8cg58y");
//set resolve handle
DIDBackend.getInstance().setResolveHandle(new class implements LocalResolveHandle {
    public resolve(d: DID): DIDDocument {
        return store.loadDid(d);
    }
});

if (did) {
    // resolve doc is from line 13
    let doc = did.resolve(true);
    if (doc)
        console.log("resolve did {} successfully.", did);
    else
        cosole.log("resolve did {} failed.", did);
}
... ... ... ...
//if you don't use local chain
DIDBackend.getInstance().setResolveHandle(null);
... ... ... ...
store.close();
```

##### Usage

```ts
export interface LocalResolveHandle {
    resolve(did: DID): DIDDocument;
}
public setResolveHandle(handle: LocalResolveHandle);
```

Handle is null, which means that the DID document is obtained from the chain without using local resolve. When you need to use local resolve, implement LocalResolveHandle.
