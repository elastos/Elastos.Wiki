---
title: Working with DIDs in Other Wallets
---

import {CodeTabs, Language, Github} from "@site/components/codetabs"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Developers can also work with decentralized identitiers (DIDs) using any standard interface, such [ethers.js](https://docs.ethers.org/v5/) or [web3.js](https://web3js.readthedocs.io/en/v1.8.2/#) and submit DID payloads through popular wallets such as [MetaMask](https://metamask.io/).

:::caution
W3C-compliant DID transaction payloads are **highly complex!**

In order to generate them, developers can use one of the [identity SDKs](/sdk/welcome).

This method is only recommended for advanced applications; most developers will prefer to use the [Essentials Connector](/develop/dids/essentials) for the user-friendly features.
:::

## Publish DID Transaction

The example code below demonstrates how to publish a [DID](/learn/dids/intro) on the [Elastos Identity (EID)](/learn/sidechains/eid) chain using the [Ethers package](https://docs.ethers.org/v5/) and the [official DID smart contract](https://github.com/elastos/Elastos.ELA.SideChain.EID/blob/master/core/vm/did/did.sol).

:::tip
DID functionality for the EID chain is built directly into the virtual machine, so the [smart contract](https://github.com/elastos/Elastos.ELA.SideChain.EID/blob/master/core/vm/did/did.sol) serves only as a general message passing interface and does not implement the full DID spec.
:::

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">

```js title="index.js"
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://api.elastos.io/eid" // set chain rpc url
);

const contractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "publishDidTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractAddress = "0x46E5936a9bAA167b3368F4197eDce746A66f7a7a"; // set DID contract address

const contract = new ethers.Contract(contractAddress, contractAbi, provider);

const keystore = "..."; // Add keystore
const password = "..."; // Add password

// Decrypt account using the keystore and password
const wallet = ethers.Wallet.fromEncryptedJsonSync(keystore, password);

// Create a DID
const createDID =
  '{"header":{"specification":"elastos/did/1.0","operation":"create"},"payload":"..."}'; // Add DID payload

// Function to publish the DID transaction
async function publishDIDTransaction() {
  try {
    const result = await contract.publishDidTransaction(createDID, {
      from: wallet.address,
    });
    console.log("Transaction successful with transaction hash:", result.hash);
  } catch (err) {
    console.error("Error:", err);
  }
}

publishDIDTransaction();
```

  </Language>
</CodeTabs>

:::tip
Visit the API section for official DID implementation [addresses](/api/contracts) and public [RPC URLs](/api/providers) for the EID chain!
:::
