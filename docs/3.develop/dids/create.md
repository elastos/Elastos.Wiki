---
title: Create DID
---

The example code below demonstrates how to publish a DID on the Elastos Identity (EID) chain using the Ethers package.

<!-- Alternatively, since DID functionality is built directly into the EID at the virtual machine level, developers can  -->

```js
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://api.elastos.io/eid"
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

const contractAddress = "0x46E5936a9bAA167b3368F4197eDce746A66f7a7a";

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

:::tip
Visit the API section for official DID implementation [addresses](/api/contracts) and public [RPC URLs](/api/providers) for the EID chain!
:::
