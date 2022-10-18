---
title: Elastos Mainchain
---

The mainchain is a completely open-source and sovereign blockchain protocol that stores cryptographic proofs and establishes **a secure foundation for the ecosystem** through Bitcoin’s hashrate power.

This is done by merged-mining with Bitcoin to ensure the trustworthiness of data being exchanged. The mainchain uses a PoW consensus mechanism based on SHA256. Blocks are set at ~2 minute block times and 8 MB size limits, compared to BTC at ~10 minutes and 1 MB.

:::info
As the mainchain only functions as a root of trust, transaction throughput is not a key consideration. By virtue of its design, Elastos’ scalability is derived from sidechains.
:::

In addition, the mainchain uses Delegated Proof of Stake (DPoS) supernodes to achieve consensus by providing finality for PoW-solved blocks. Combined these two mechanisms make tampering with the mainchain extremely difficult as an attack would need to both possess a significant portion of Bitcoin's hashpower and simultaneously compromise Elastos' DPoS validator set.
