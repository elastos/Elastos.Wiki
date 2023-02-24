---
title: Using the Essentials DID Toolkit
---

A decentralized identifier (DID) adapter is required to publish transactions to the DID chain.

The easiest way to work with DIDs on the [EID chain](/learn/sidechains/eid) is to use the [Elastos Essentials connector](/sdk/general/connectivity/guides/setup), which provides a DID adapter over [WalletConnect](https://walletconnect.com/).

This abstracts most of the logic for developers and lets the wallet handle all transaction signing.

### Setup

Start by installing the packages:

```bash
# Connectivity SDK
npm install @elastosfoundation/elastos-connectivity-sdk-js

# Use at least one connector
npm install @elastosfoundation/essentials-connector-client-browser

# Use the DID SDK as it's needed for most interactive operations
npm install @elastosfoundation/did-js-sdk
```

### Register the Connector

```ts
import { connectivity } from "@elastosfoundation/elastos-connectivity-sdk-js";

let essentialsConnector = new EssentialsConnector();

// Let the connectivity SDK know that we are willing to use this connector.
connectivity.registerConnector(essentialsConnector);
```

### Instantiate the DID Access Helper

The DID access helper makes it easy to execute remote operations in the wallet in just a few lines of code. All of the below examples use an instance of this helper tool that are created as follows:

```ts
// Connectivity SDK classes
import { DID as ConnDID } from "@elastosfoundation/elastos-connectivity-sdk-js";

// DID SDK classes, used to manipulate inputs/outputs to the connectivity SDK
import {
  DID,
  DIDBackend,
  DIDStore,
  Issuer,
  Mnemonic,
  RootIdentity,
  VerifiableCredential,
} from "@elastosfoundation/did-js-sdk";

let didAccess = new ConnDID.DIDAccess();
```

### Fetch User DID credentials

In order for a third party application to get a user's "DID string" (DID identifier) or email, it can request the identity wallet to "get some credentials". Here's how it works:

```ts
// Request credentials from the wallet
let presentation = await didAccess.getCredentials({
  claims: {
    name: true, // Mandatory
    avatar: {
      required: false, // Optional
      reason: "Show who you are to others"
    }
});

// The returned information is a Verifiable Presentation that contains
// one or more credentials. The DID SDK can then be used to manipulate
// those credentials.
let nameCredential = presentation.getCredentials().find((c) => {
  // Find the "name" credential
  return c.getId().getFragment() === "name";
});

console.log("Thank you for joining " + nameCredential.getSubject().getProperty("name"));
```

:::tip
For more operations and complete instructions on using the Essentials connector, visit the [Connectivity SDK guide](/sdk/general/connectivity/guides/setup).
:::
