---
title: Elastos Identity Chain (EID)
---

The **Elastos Identity Chain (EID)** is a crucial component of the Elastos ecosystem, providing a decentralized solution for digital identity and assets. EID supports the issuance of [DIDs](/learn/dids/intro) for key stakeholders and applications on Web3 - it provides DIDs for free, where each identity comes with a public private key pair and unique ELA address.

### Decentralized Identifiers (DIDs)

A DID is a unique identifier that allows users to claim and manage their online identity in a secure and decentralized way. The EID chain implements the [W3C DID standard](https://www.w3.org/TR/did-core/), ensuring interoperability with other blockchain networks.

By storing DIDs on the blockchain, the EID chain provides users with full control over their digital identity and assets, ensuring their privacy and security.

### Smart Contracts

The EID chain is also an [EVM-compatible](https://ethereum.org/en/developers/docs/evm/) platform also supports the development of smart contracts, enabling the creation of a wide range of dApps and digital content that can extend the utility of DIDs.

The secure and scalable infrastructure provided by the EID chain allows for the development of innovative and user-friendly solutions, improving the overall experience for users in the Elastos ecosystem.

:::tip
Visit the [identity](/learn/dids/intro/#elastos-did-framework) section for a deep dive into Elastos DIDs
:::

---

### Implementation

The EID Chain is a specialized version of the ESC Chain. Although it shares the same underlying mechanics, the EID Chain has its own built-in native layer written in Golang that complies with [W3C specifications](https://www.w3.org/TR/did-core/), such as the ability to invalidate a DID if compromised.

This W3C layer is executed by each EID node individually, and is referred to as the native smart contract for the EID Chain. Upper-level Solidity smart contracts can also access this native layer.

For third-party Solidity dApps running on the EID Chain, there is a single Solidity smart contract with less than 10 APIs that provide DID-related services, such as adding a DID.

The DID data is stored on the EID blockchain, and because past blockchain data is immutable, each node maintains a local database (levelDB) to speed up EID queries. In other words, even if a DID is invalidated, the data trace remains on the blockchain, but a newer block would indicate that the DID has been depleted. The level

## Relevant Links

| Resource                                                                                                  | Description                                |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [Demo](/develop/dids/create)                                                                              | DID creation tutorial                      |
| [Public Endpoints](/api/providers)                                                                        | Interact with the EID chain                |
| [Explorer](https://eid.elastos.io/)                                                                       | EID block explorer                         |
| [DID Addresses](/api/providers/#miscellaneous)                                                            | Public contract addresses for EID DIDs     |
| [DID Contract Code](https://github.com/elastos/Elastos.ELA.SideChain.EID/blob/master/core/vm/did/did.sol) | Implementation for DID written in Solidity |
| [JSON-RPI API](/api/sidechains/eid/rpc)                                                                   | Extended RPC interfaces for EID            |
| [EID Source Code](https://docs.elastos.net/guides/v/eid/source-code)                                      | Chain implementation based on Go Ethereum  |
