---
title: Nodes Overview
---

## Consensus Nodes

The Elastos network architecture consists of the [mainchain](/learn/mainchain/intro) and multiple [sidechains](/learn/sidechains/intro), as well as several additional services necessary for them to communicate with each other.

### Types of Elastos nodes, by common features:

- [Supernodes](/nodes/requirements) (Bonded proof-of-stake validator clients)
  - **Normal** - Only mainchain required (ELA)
  - **CR Council Member** - All services required (ELA, DID, ESC, EID, Arbiter)
- [Mining nodes](/integrator/mining) (Bitcoin merge-mining clients)
- Pure verification nodes
- Full nodes
- Light nodes

### Types of Elastos node networks:

- **Mainnet** - The real blockchain and network, monetary value, and all the real transactions take place.
- **Testnet** - Testnet is a parallel blockchain to mainnet, used only for testing and development.
- **Regtest** - A regression test network is almost identical to the mainnet, but it is for private development. External connections are not enabled.

### Types of Elastos nodes, by who might operate them:

- Community Members
- CR Council Members
- Application Developers
- Service Providers
- Mining Pools
- Crypto Exchanges

**So we may conclude:**

- An Elastos node may contain one or more components, which consists of blockchain daemons or services and the supporting programs.
- And different people or roles may need different Elastos nodes.

---

## Source References

The Elastos platform architecture consists of several components that are necessary for the continued operation of its blockchains. These components may be described as chains, daemons, services, or programs in these documents.

Although not all users need to host all of them. Some users may need to setup at least one of them.

Check their respective project pages for more information.

| Chain/Program     | Description                                                               | Build Repository                                                                                                     |
| ----------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ELA               | Mainchain service                                                         | [https://github.com/elastos/Elastos.ELA](https://github.com/elastos/Elastos.ELA)                                     |
| ESC               | Elastos Smart Contract chain service                                      | [https://github.com/elastos/Elastos.ELA.SideChain.ESC](https://github.com/elastos/Elastos.ELA.SideChain.ESC)         |
| ESC-Oracle        |                                                                           | [https://github.com/elastos/Elastos.ELA.SideChain.ESC](https://github.com/elastos/Elastos.ELA.SideChain.ESC)         |
| EID               | Elastos Identity chain service                                            | [https://github.com/elastos/Elastos.ELA.SideChain.EID](https://github.com/elastos/Elastos.ELA.SideChain.EID)         |
| EID-Oracle        |                                                                           | [https://github.com/elastos/Elastos.ELA.SideChain.EID](https://github.com/elastos/Elastos.ELA.SideChain.EID)         |
| Arbiter           | A service that monitors for failure of parent-sidechain transfer failures | [https://github.com/elastos/Elastos.ELA.Arbiter](https://github.com/elastos/Elastos.ELA.Arbiter)                     |
| Hive              | The service node of Hive decentralized memory network                     | [https://github.com/elastos/Elastos.Hive.Node](https://github.com/elastos/Elastos.Hive.Node)                         |
| Carrier Bootstrap | A service to help new nodes to join the Elastos Carrier network           | [https://github.com/elastos/Elastos.NET.Carrier.Bootstrap](https://github.com/elastos/Elastos.NET.Carrier.Bootstrap) |
