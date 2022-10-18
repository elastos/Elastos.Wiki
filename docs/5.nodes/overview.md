---
title: Nodes Overview
---

# Consensus Nodes

The Elastos blockchain consists of the main chain and multiple sidechains.

Types of Elastos blockchain networks:

- Mainnet - The real blockchain and network, monetary value, and all the real transactions take place.
- Testnet - Testnet is a parallel blockchain to mainnet, used only for testing and development.
- Regtest - A regression test network is almost identical to the mainnet, but it is for private development. External connections are not enabled.

The Elastos blockchain network is comprised of several of node services.

Types of Elastos nodes, by common features:

- Pure verification nodes
- Mining nodes
- Supernodes
- Full nodes
- Light nodes

Types of Elastos nodes by features:

- Normal nodes
- DPoS **Supernodes** (Normal) - ELA
- DPoS **Supernodes** (CR Council Member) - ELA, DID, ESC, EID, Arbiter

Types of Elastos nodes, by who might operate them:

- Mining Pools
- Crypto Exchanges
- Developers
- Community Members
- CR Council Members

So we may conclude:

- An Elastos node may contain one or more components, which consists of blockchain daemons or services and the supporting programs.
- And different people or roles may need different Elastos nodes.

---

## Elastos Node Serivces

The Elastos platform architecture consists of several components that are necessary for the continued operation of its blockchains. These components may be described as chains, daemons, services, or programs in these documents.

Although not all users need to host all of them. Some users may need to setup at least one of them.

Check their respective project pages for more information.

| Chain/Program     | Description                                                               | Build Repository                                                                                                     |
| ----------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ELA               | Mainchain service                                                         | [https://github.com/elastos/Elastos.ELA](https://github.com/elastos/Elastos.ELA)                                     |
| ESC               | Elastos smart contract chain service                                      | [https://github.com/elastos/Elastos.ELA.SideChain.ESC](https://github.com/elastos/Elastos.ELA.SideChain.ESC)         |
| ESC-Oracle        |                                                                           | [https://github.com/elastos/Elastos.ELA.SideChain.ESC](https://github.com/elastos/Elastos.ELA.SideChain.ESC)         |
| EID               | Elastos identity chain service                                            | [https://github.com/elastos/Elastos.ELA.SideChain.EID](https://github.com/elastos/Elastos.ELA.SideChain.EID)         |
| EID-Oracle        |                                                                           | [https://github.com/elastos/Elastos.ELA.SideChain.EID](https://github.com/elastos/Elastos.ELA.SideChain.EID)         |
| Arbiter           | A service that monitors for failure of parent-sidechain transfer failures | [https://github.com/elastos/Elastos.ELA.Arbiter](https://github.com/elastos/Elastos.ELA.Arbiter)                     |
| Carrier Bootstrap | A service to help new nodes to join the Elastos Carrier network           | [https://github.com/elastos/Elastos.NET.Carrier.Bootstrap](https://github.com/elastos/Elastos.NET.Carrier.Bootstrap) |
