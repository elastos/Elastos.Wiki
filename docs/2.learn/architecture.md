---
title: Elastos Architecture
---

Elastos is a complete ecosystem of decentralized services, consisting of every component needed to support decentralized applications (dApps). However, although it was originally conceived as a self-contained and strictly secured ecosystem, the rapid growth of the blockchain space-with numerous new projects advancing decentralized finance, self-sovereign identity, and new use cases for blockchain technology - has required that Elastos rethink its role in an increasingly interoperable and multichain world.

![image](/docs/assets/start/architecture.png)

The Elastos blockchain structure is based on the existing cryptocurrency systems design first introduced by Bitcoin. This includes requirements for block authentication such as the previous block hash, the Merkle tree root hash, a nonce for the consensus algorithm, timestamps, difficulty goals, and more.

Elastos improves on the current digital currency experience and adopts a sidechain design philosophy. The sidechain is the foundation for running Dapps on Elastos, while the Elastos main chain structure provides infrastructure and support for the sidechains and enables convenient asset transfer.

## Elastos Components

Interwoven within our ecosystem are five key platform components, which are unique decentralized service offerings that projects can choose to integrate within their dApps.

| Component                                                   | Description                                                                  |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Elastos Mainchain](/learn/mainchain/intro)                 | The main security zone and transfer hub                                      |
| [Elastos Smart Contract Chain (ESC)](/learn/sidechains/esc) | Specialized EVM-based sidechain for more advanced applications               |
| [Elastos Identity Chain (EID)](/learn/sidechains/eid)       | EVM-based sidechain custom built for issuing and managing digital identities |
| [Decentralized Identity (DID)](/learn/dids/intro)           | Sovereign identities and verifiable credentials                              |
| [Decentralized Storage (Hive)](/learn/hive/intro)           | The personal storage solutions for Elastos DIDs                              |
| [Peer-to-Peer Network (Carrier)](/learn/carrier/intro)      | A P2P messaging protocol for DIDs based on Tor protocol                      |
