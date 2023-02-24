---
title: Elastos Mainchain
---

# The Mainchain: A Secure Foundation for the Ecosystem

The Elastos mainchain is a completely open-source and sovereign blockchain protocol based on Bitcoin that provides cryptographic proofs and a secure foundation for the ecosystem.

## Elastic Consensus

The mainchain leverages a combination of three consensus mechanisms to ensure robust transaction execution:

### Auxiliary Proof of Work

[Auxiliary Proof of Work (AuXPoW)](/learn/mainchain/auxpow) is a mechanisn wherein Bitcoin miners compete to produce blocks for the Elastos mainchain in return for ELA. The security benefits of Bitcoin are integrated into solutions through merged-mining. The mainchain uses a PoW consensus mechanism based on SHA256, with blocks produced approximately every 2 minutes and 8 MB in size, compared to Bitcoin's 10-minute blocks and 1 MB size limit.

:::info
Note: The mainchain's role is limited to serving as a root of trust, so transaction throughput is not a primary concern. Scalability is achieved through the use of sidechains.
:::

### Bonded Proof of Stake

[Bonded Proof of Stake (BPoS)](/learn/mainchain/bpos) is a hybrid consensus mechanism that blends elements of delegated proof of stake and proof of stake. It offers the following benefits:

- Variable bonding time
- Improved profit share model
- Increased mobility between inactive and active sets
- Secure block finality

On the mainchain, BPoS provides finality for PoW-solved blocks, while on sidechains it is responsible for both block production and validation.

### Proof of Integrity

[Proof of Integrity](/start/governance/#council) is a moniker given to the consensus layer backed by the Cyber Republic, Elastos' decentralized autonomous organization (DAO). Councilors elected on an annual basis are automatically granted a slot in the block production rotation and participate in securing not only the mainchain, but also validate the sidechains and act as arbiters for cross-chain transfers.

:::tip
By combining these three consensus mechanisms, the mainchain provides a secure and efficient foundation for decentralized applications.
:::

## Relevant Links

| Resource                                                                  | Description                           |
| ------------------------------------------------------------------------- | ------------------------------------- |
| [Explorer](https://blockchain.elastos.io/)                                | Mainchain block explorer              |
| [APIs](/api/mainchain/cli)                                                | CLI, JSON-RPC and REST API interfaces |
| [Github](https://github.com/elastos/Elastos.ELA)                          | Mainchain source code                 |
| [Whitepaper](https://www.elastos.org/downloads/elastos_whitepaper_en.pdf) | Original whitepaper                   |
