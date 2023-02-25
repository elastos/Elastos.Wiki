---
title: How to Mint an NFT
---

This tutorial describes how to mint an NFT using the ethers library and the smart contract from the [previous section](/tutorials/nfts/create-nft).

Minting an NFT is the act of publishing a unique instance of an ERC721 token on the blockchain. Now that we have successfully deployed a smart contract to the Elastos Smart Chain (ESC) testnet, let's mint an NFT!

## Creating the Mint NFT Script

### Step 1: Create an Alchemy Provider using ethers

Open the repository from the [previous tutorial](/tutorials/nfts/create-nft) in your favorite code editor (e.g. [VSCode](https://code.visualstudio.com/)), and create a new file in the scripts folder called `mint-nft.js`.

We will be using the same ethers library to connect to the ESC testnet public RPC URL. Add the following code to the file:

```js title="mint-nft.js"
require("dotenv").config();
const ethers = require("ethers");

// Define the provider
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
```

Note that we are using RPC_URL. Make sure you add this to your .env file so that it looks something like this:

```js title=".env"
RPC_URL = "https://api-testnet.elastos.io/esc";
PRIVATE_KEY = "your-metamask-private-key";
```

### Step 2: Load the Contract ABI

The contract ABI (Application Binary Interface) is an interface to interact with our smart contract. You can learn more about Contract ABIs [here](https://docs.alchemyapi.io/alchemy/guides/eth_getlogs#what-are-ab-is). Hardhat automatically generates an ABI for us and saves it in the `MyNFT.json` file. In order to use this we'll need to parse out the contents by adding the following code to the `mint-nft.js` file:

```js title="mint-nft.js"
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
```

If you want to see the ABI you can print it to your console:

```bash
console.log(JSON.stringify(contract.abi));
```

To run and see your ABI printed to the console navigate to your terminal and run:

```bash
node scripts/mint-nft.js
```

### Step 3: Configure the Metadata of your NFT using IPFS

Our mintNFT smart contract function takes in a tokenURI parameter that should resolve to a JSON document describing the NFT's metadata— which is really what brings the NFT to life, allowing it to have configurable properties, such as a name, description, image, and other attributes.

> Interplanetary File System (IPFS) is a decentralized protocol and peer-to-peer network for storing and sharing data in a distributed file system.

We will use [Pinata](https://pinata.cloud/), a convenient IPFS API and toolkit, to store our NFT asset and metadata and ensure that our NFT is truly decentralized. If you don't have a Pinata account, sign up for a free account [here](https://pinata.cloud/signup).

Once you've created an account:

- Navigate to the Pinata Upload button on the top right
- Upload an image to pinata - this will be the image asset for your NFT. Feel free to name the asset whatever you wish
- After you upload, at the top of the page, there should be a green popup that allows you to view the hash of your upload —> Copy that hashcode. You can view your upload at: https://gateway.pinata.cloud/ipfs/{hash-code}
  For the more visual learners, the steps above are summarized here: Now, we're going to want to upload one more document to Pinata. But before we do that, we need to create it!

![image](/docs/assets/tutorials/nfts/pinata-upload-png.gif)

In your root directory, make a new file called `nft-metadata.json` and add the following JSON code:

```json title="nft-metadata.json"
{
  "attributes": [
    {
      "trait_type": "Breed",
      "value": "Maltipoo"
    },
    {
      "trait_type": "Eye color",
      "value": "Mocha"
    }
  ],
  "description": "The world's most adorable and sensitive pup.",
  "image": "https://gateway.pinata.cloud/ipfs/QmWmvTJmJU3pozR9ZHFmQC2DNDwi2XJtf3QGyYiiagFSWb",
  "name": "Ramses"
}
```

Feel free to change the data in the JSON. You can add or remove attributes. Most importantly, make sure the image field points to the location of your IPFS image— otherwise, your NFT will not include a photo of a dog.

Once you're done editing the JSON file, save it and upload it to Pinata, following the same steps we did for uploading the image.

![image](/docs/assets/tutorials/nfts/pinata-upload-json.gif)

### Step 4: Create a Signer and an Instance of the Contract

In order to be able to call the functions on our deployed contract, we need to define an ethers Signer using our wallet's private key. Next, we need to use the contract's deployed address, the contract ABI, and the aforementioned signer to define a contract instance.

In the `mint-nft.js` file, add the following code:

```js title="mint-nft.js"
// Create a signer
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);

// Get contract ABI and address
const abi = contract.abi;
const contractAddress = "0xA4766Ceb9E84a71D282A4CED9fB8Fe93C49b2Ff7";

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer);
```

In the snippet above, you can see that our contract's deployed address is `0xA4766Ceb9E84a71D282A4CED9fB8Fe93C49b2Ff7`. If you don't remember your contract address or can't find it on the [Elastos block explorer](https://esc-testnet.elastos.io/), simply re-deploy the contract from the [previous tutorial](<(/tutorials/nfts/create-nft)>) again and note down the new address.

### Step 5: Call mintNFT Function of the Contract

Remember the metadata.json you uploaded to Pinata? Get its hashcode from Pinata and pass the following into a call to mintNFT https://gateway.pinata.cloud/ipfs/{metadata-hash-code}

Here's how to get the hashcode:

![image](/docs/assets/tutorials/nfts/pinata-hash-code.gif)

:::caution Hashcode
Double check that the hashcode you copied links to your metadata.json by loading https://gateway.pinata.cloud/ipfs/{metadata-hash-code} into a separate window. The page should look similar to the screenshot below:

![image](/docs/assets/tutorials/nfts/metadata-hash-code.png)
:::

Now add the following piece of code to mint-nft.js to call the mintNFT function:

```js title="mint-nft.js"
// Get the NFT Metadata IPFS URL
const tokenUri =
  "https://gateway.pinata.cloud/ipfs/QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP";

// Call mintNFT function
const mintNFT = async () => {
  let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri);
  await nftTxn.wait();
  console.log(
    `NFT Minted! Check it out at: https://esc-testnet.elastos.io/tx/${nftTxn.hash}`
  );
};

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

The final `mint-nft.js` file should look something like this:

```js title="mint-nft.js"
require("dotenv").config();
const ethers = require("ethers");

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider(RPC_URL);

// Get contract ABI file
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);

// Get contract ABI and address
const abi = contract.abi;
const contractAddress = "0xA4766Ceb9E84a71D282A4CED9fB8Fe93C49b2Ff7";

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPFS URL
const tokenUri =
  "https://gateway.pinata.cloud/ipfs/QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP";

// Call mintNFT function
const mintNFT = async () => {
  let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri);
  await nftTxn.wait();
  console.log(
    `NFT Minted! Check it out at: https://esc-testnet.elastos.io/tx/${nftTxn.hash}`
  );
};

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Now, Let's mint our NFT by running the following command:

```bash
node scripts/mint-nft.js
```

You should get an output that looks something like this:

```bash
NFT Minted! Check it out at:
https://esc-testnet.elastos.io/tx/0x06a7a06aea5d55eb6e7a0f0f17bfeaad2fb4e310de55f5a884e1b623a3fab239
```

You can check out your NFT mint on the explorer by following the URL above.

Use `mint-nft.js` to mint as many NFTs as you want! Just be sure to pass in a new tokenURI describing the NFT metadata, otherwise, you'll just end up making a bunch of identical ones with different IDs.
