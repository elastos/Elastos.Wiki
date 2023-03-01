---
title: What is a Smart Contract?
---

Smart contracts are simple programs that live on an Elastos network. As any modern application, smart contracts store data and expose methods to interact with them.

They are written in human-readable languages, then compiled and deployed to an account where everyone can interact with them.

Do not worry if you don't know how smart-contract blockchains work. As a developer, it is sufficient to understand that smart-contracts:

1. Have **limited** computational resources.
2. Interact with other contracts in an **asynchronous** way.
3. Deal with **real money**, for which security must be a top concern.

:::info HTTP Requests and Smart Contracts
Smart contracts **cannot perform HTTP requests**, meaning they can't retrieve data from outside an Elastos blockchain. However, they can receive data from any outside source. If needed, you can set up a server to regularly feed them data (this is in short how oracles work).
:::

---

## Programming Languages

Smart contracts on the Elastos Smart Chain (ESC) are written in [Solidity](https://docs.soliditylang.org/en/v0.8.17/).
