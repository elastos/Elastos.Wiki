---
title: Deploying an NFT Contract on ESC
---

In this tutorial, we will guide you on how to write and deploy a smart contract for a Non-Fungible Token (NFT) using Ethereum and Inter Planetary File System (IPFS).

You may have heard about the growing popularity of NFTs, which have brought blockchain technology into the mainstream. This presents an excellent opportunity for you to explore by creating and publishing your own NFT (ERC-721 Token) on the Elastos blockchain.

Our tutorial will cover the process of developing and deploying an ERC-721 smart contract on the [Elastos Smart Chain](/learn/sidechains/esc) testnet. We will use various tools such as Metamask, Solidity, Hardhat, and Pinata. Don't worry if these terms are unfamiliar to you; we will provide explanations.

Then in a follow up tutorial, we will demonstrate how to use the smart contract to mint an NFT with the smart contract.

## Creating an NFT

### Prerequisites

Before you begin the steps in this tutorial, ensure you complete the following steps:

- Install both [Node.js](https://nodejs.org/en/) (>14) and [npm](https://www.npmjs.com/) on your local machine. To check your Node version, run the following command in your terminal:
  Shell

```bash
node -v
```

### Step 1: Create a Metamask Wallet

We need an ESC wallet to send and receive transactions. For this tutorial, we’ll use Metamask, a virtual wallet in the browser.

You can download and create a Metamask account for free [here](https://metamask.io/download/). Once you have an account, you'll need to configure the network to use the ESC testnet. This can be accomplished in MetaMask by navigating to `Settings` -> `Network`-> `Add Network` -> `Add a Network Manually` and entering the following information:

- **Network name:** ESC Testnet
- **New RPC URL:** `https://api-testnet.elastos.io/esc`
- **Chain ID:** 21
- **Currency symbol:** tELA
- **Block explorer URL:** `https://esc-testnet.elastos.io/`

![image](/docs/assets/tutorials/nfts/add-esc-testnet-metamask.png)

### Step 2: Get some tELA from the Faucet

In order to deploy our smart contract to the test network, we’ll need some fake ELA. You can acquire some by visiting the [faucet](https://esc-faucet.elastos.io/).

Simply enter your address, verify your humanity and press the 'Request 1 ESC' button.

![image](/docs/assets/tutorials/nfts/esc-testnet-faucet.png)

If all goes well, you should see your tELA balance updated on Metamask.

### Step 3: Create a Node Project

Let's create an empty node project. Navigate to your command line and type:

```bash
mkdir my-nft && cd my-nft
npm init -y
```

We are now in a good position to set up and install Hardhat, the industry standard development environment for Ethereum Virutal Machine (EVM) compatible blockchains (which ESC is).

### Step 4: Create a Hardhat Project

Hardhat is a development environment to compile, deploy, test, and debug smart contracts. It helps developers create dApps locally before deploying them to a live chain.

In your terminal, run the following commands:

```bash
npm install --save-dev hardhat
npx hardhat
```

You should then see a welcome message and options on what you can do. Select Create a JavaScript project:

```sql
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888


👷 Welcome to Hardhat v2.12.2 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```

Agree to all the defaults (project root, adding a .gitignore, and installing all sample project dependencies).

To check if everything works properly, run:

```bash
npx hardhat test
```

We now have our hardhat development environment successfully configured. Let us now install the OpenZeppelin contracts package. This will give us access to ERC721 implementations (the standard for NFTs) on top of which we will build our contract.

```
npm install @openzeppelin/contracts
```

### Step 5: Write the Smart Contract

Open the project in your favorite editor (e.g. [VSCode](https://code.visualstudio.com/)). We will use a language called Solidity to write our contract.

Navigate to the `contracts` folder and create a new file called `MyNFT.sol`. Add the following code to the file.

```js title="MyNFT.sol"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyNFT", "NFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
```

Ensure that the version specified above (^0.8.9) is the same as the version specified in your `hardhat.config.js` file. Now let's break down the code line by line.

In lines 5-7, our code inherits three OpenZeppelin smart contract classes:

- `@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol` contains the implementation of the ERC721 standard, which our NFT smart contract will inherit. To be a valid NFT, your smart contract must implement all the methods of the ERC721 standard. Refer to the interface definition here.
- `@openzeppelin/contracts/utils/Counters.sol` provides counters that can only be incremented or decremented by one. Our smart contract uses a counter to keep track of the total number of NFTs minted and set the unique ID to our new NFT. Each NFT minted using a smart contract must be assigned a unique ID, and here our unique ID is determined by the total number of NFTs in existence. For example, the first NFT we mint with our smart contract has an ID of "1," the second has an ID of "2," and so on.
- `@openzeppelin/contracts/access/Ownable.sol` sets up access control on our smart contract, so only the owner of the smart contract (you) can mint NFTs.

Note that including access control is entirely a preference. If you want anyone to be able to mint an NFT using your smart contract, remove the word `Ownable` on line 9 and `onlyOwner` on line 16.

In lines 9-27, we define our custom NFT smart contract, which is surprisingly short – it only contains a counter, a constructor, and a single function! This is thanks to our inherited OpenZeppelin contracts, which implement most of the methods needed to create an NFT, such as ownerOf (which returns the owner of the NFT) and transferFrom (which transfers ownership of the NFT).

On line 13, we pass two strings, "MyNFT" and "NFT," into the ERC721 constructor. The first variable is the smart contract's `name`, and the second is its `symbol`. You can name each of these variables whatever you want.

Finally, starting on line 15, we have our `mintNFT()` function that allows us to mint an NFT! This function takes two variables:

- `address` recipient specifies the `address` that will receive your freshly minted NFT.
- `string` memory tokenURI is a `string` that should resolve to a JSON document describing the NFT's metadata.

An NFT's metadata is what brings it to life, allowing it to have additional properties such as a name, description, image, and other attributes. In part 2 of this tutorial, we will explain how to configure this metadata.

- `mintNFT()` calls some methods from the inherited ERC721 library and ultimately returns a number that represents the ID of the freshly minted NFT.

### Step 6: Connect Metamask & Elastos to your Project

Now that we've created a Metamask wallet and a smart contract, it’s time to connect them.

Every transaction sent from your virtual wallet requires a signature using your unique private key. To provide our program with this permission, we can safely store our private key in an environment file.

Install the dotenv package in your project directory by running:

```bash
npm install dotenv --save
```

Then, create a `.env` file in the root directory of our project, and add your Metamask private key and HTTP Alchemy API Key (from Step 1) to it.

:::warning NOTE:
Your `.env` file must be named `.env`! Do not change the file name.
:::

Follow [these](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) instructions to export your private key from Metamask

Your .env should look like this:

```
API_URL = https://api-testnet.elastos.io/esc
PRIVATE_KEY = your-metamask-private-key
```

### Step 7: Update hardhat.config.js

We’ve added several dependencies and plugins so far, now we need to update `hardhat.config.js` so that our project knows about all of them.

Replace the contents of `hardhat.config.js` with the following:

```js title="hardhat.config.js"
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "esc_testnet",
  networks: {
    hardhat: {},
    esc_testnet: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
```

### Step 8: Write the Deployment Script

Now that our contract is written and our configuration file is good to go, it’s time to write the contract deploy script.

Navigate to the `scripts/` folder and replace the contents in the file `deploy.js` with the following:

```js title="deploy.js"
async function main() {
  // Grab the contract factory
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy(); // Instance of the contract
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Hardhat does a great job of explaining what each of these lines of code does in their [Contracts tutorial](https://hardhat.org/tutorial/testing-contracts.html#writing-tests).

```js
const MyNFT = await ethers.getContractFactory("MyNFT");
```

A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so MyNFT here is a factory for instances of our NFT contract. When using the hardhat-ethers plugin ContractFactory and Contract instances are connected to the first signer by default.

```js
const myNFT = await MyNFT.deploy();
```

Calling `deploy()` on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract. This is the object that has a method for each of our smart contract functions.

### Step 9: Deploy the Contract

We’re finally ready to deploy our smart contract! Navigate back to the root of your project directory, and in the command line run:

```bash
npx hardhat run scripts/deploy.js --network esc_testnet
```

You should then see something like:

```
Contract deployed to address: 0xA4766Ceb9E84a71D282A4CED9fB8Fe93C49b2Ff7
```

If we go to the [ESC testnet explorer](https://esc-testnet.elastos.io/) and search for our contract address we should be able to see that it has been deployed successfully. The transaction will look something like this:

![image](/docs/assets/tutorials/nfts/contract-creation.png)

The `From` address should match your Metamask account address and the `To` address will say `Contract created`. If we click into the transaction, we’ll see our contract address in the To field:

![image](/docs/assets/tutorials/nfts/contract-creation-details.png)

**Congrats! You just deployed your NFT smart contract to Elastos!**

That’s all for this tutorial. In the next one, we’ll actually interact with our smart contract by minting an NFT.

:::tip
To deploy an NFT contract on the ESC mainnet, simply switch the testnet network details to the live versions which can be found [here](/api/providers).
:::
