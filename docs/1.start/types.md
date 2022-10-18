---
title: Token Types
---

The Elastos mainchain-sidechain architecture is designed in such a way that ELA is the native token on the mainchain and all supported sidechains. ELA can be mapped between the mainchain and its various sidechains at a 1:1 ratio. In addition, wrapped versions of ELA may be available on other public blockchains. The table below lists the different existing versions of ELA.

| Blockchain                   | Type         | Description                                                                                                                                                                                                               |
| ---------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Elastos Mainchain            | Native asset | A UTXO-model chain in which ELA is used to pay transaction fees, stake, register a validator, and participate in governance. The mainchain is the trust zone for the ecosystem on account of it being secured by Bitcoin. |
| Elastos Smart Chain (ESC)    | Native asset | An EVM-compatible chain in which ELA is used to execute smart contracts. ESC is the primary place to deploy dApps (DeFi, NFTs, etc.).                                                                                     |
| Ethereum                     | ERC20 token  | A Wrapped version of ELA available on Ethereum (created by bridging ELA from ESC to the Ethereum blockchain). [[Contract Address](https://etherscan.io/token/0xe6fd75ff38Adca4B97FBCD938c86b98772431867)]                 |
| Elastos Identity Chain (EID) | Native asset | An EVM-compatible chain specifically designed to support W3C compliant decentralized identifiers (DIDs).                                                                                                                  |
