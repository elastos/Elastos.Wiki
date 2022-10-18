---
title: Quick Start
---

:::caution Updating the wiki docs
The docs are being updated, enhanced, and improved. They are subject to change.
Please feel free to raise an issue or pull request if you have any queries or suggestions.
:::

## **Building on Elastos**

If you are an Ethereum developer, you are already know the basics of developing on Elastos blockchains. Simply switch to the [ESC RPC](https://api.elastos.io/esc) and get started. All the tools you are familiar with on the Ethereum blockchain are supported on Polygon by default, such as Hardhat, Remix, and EthersJS.

You can deploy decentralized applications to either the [Elastos Smart Chain (ESC)](/api/providers) or [ESC Testnet](/api/providers). You can find all the connection details in the [network documentation](/api/providers).

:::tip
Use [Chainlist](https://chainlist.org/chain/20) ID 20 to quick connect to ESC
:::

## **Deploying to the Elastos Network**

### **Wallets**

To interact with the Elastos Network, you need to have an Ethereum-based wallet because ESC runs on Ethereum Virtual Machine (EVM). You can choose to set up a full Elastos account via [Essentials](https://elastos.info/essentials-the-super-wallet/), or simply use [Metamask](https://github.com/maticnetwork/matic-docs/blob/master/docs/develop/metamask/overview.md). More compatible wallets can be found in our [wallet documentation](/start/wallets).

### **Smart Contracts**

ESC supports many services you can use to test, compile, debug, and deploy decentralized applications onto the ELastos Network. These include deployment using [Remix](https://remix.ethereum.org/), [Hardhat](https://hardhat.org/), and [Truffle](https://trufflesuite.com/).

### **Connecting to ESC**

In order to connect with the Elastos network to read blockchain information, we recommend using the [Ethers](https://docs.ethers.io/v5/getting-started/) node package.

```js
const { ethers } = require("ethers");

// If you don't specify a //url//, Ethers connects to the default
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider(
  "https://api.elastos.io/esc"
);

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner();
```

### **Building a new dApp on ESC?**

Decentralized applications (dApps) act as the bridge between users and their data privacy on the blockchain. The increasing number of dApps validates their usefulness within the blockchain ecosystem, solving challenges like executing transactions between two participants without the need for central authority via smart contracts.

Suppose you have no prior experience building decentralized applications (dApps). In that case, the below-mentioned resources will give you a head start on the tools required to build, debug, and deploy dApps on the network.

- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)
- [The Web3 Development Stack](https://www.quicknode.com/guides/web3-sdks/the-web3-developer-stack)
- [Full Stack dApp: Tutorial Series](https://kauri.io/full-stack-dapp-tutorial-series/5b8e401ee727370001c942e3/c)
- [Web3.js](https://www.dappuniversity.com/articles/web3-js-intro)
- [Ethers.js](https://docs.ethers.io/v5/)

### **Already have a dApp?**

If you already have a decentralized application (dApp) and are looking for a platform to help you scale efficiently, then you are at the right place because Elastos allows you to easily migrate from any Ethereum Virtual Machine (EVM) based chain. You don't have to worry about the underlying architecture while moving or deploying your dApps to ESC as long as it is EVM-compatible.

## **Other Tools**

While smart contracts are often the starting point for dApp creation, Elastos also offers other solutions that can make them even more powerful. Create unique user interactions with Elastos [Decentralized Identifiers (DIDs)](/learn/dids/intro) or save user data directly to personal storage vaults with [Elastos Hive](/learn/hive/intro).

## **Side Note**

If this is overwhelming, that’s alright! You can jump right into the action and start hacking. You’ve got this! Here are some notes before you start diving into resources, repositories, and docs:

1. **Beware the cost of being on the bleeding edge**: Like typical niche programming, dApps and blockchain development moves very quickly. While researching, you may find complex code repositories, 404s on a documentation site, or even no documentation. Use that opportunity to reach out to us via any social media channel.
2. **The learning curve may be daunting, but the barrier to entry is low**: The community is very open and welcoming! Projects welcome pull requests from outsiders and resolve any blockers actively. We’re working on creating a better world and contribution in any form is appreciated. We’ll be grateful to onboard you into this amazing Web3 ecosystem.
