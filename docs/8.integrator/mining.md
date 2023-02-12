---
title: Merged Mining Guide
---

Elastos implements the same merged mining specification as namecoin. Normally, the miner who could mining namecoin could easily mining ela. As a auxiliary chain, the chain id of ela is **1224**.

The merged mining of ela node is mainly implemented through the following two interfaces:

- [createauxblock](https://github.com/elastos/Elastos.ELA/blob/master/docs/jsonrpc_apis.md#createauxblock)
- [submitauxblock](https://github.com/elastos/Elastos.ELA/blob/master/docs/jsonrpc_apis.md#submitauxblock)

## Instructions

1. Get the auxblock hash and chain id through createauxblock interface.

2. Write the auxblock hash into the coinbase of bitcoin. if there are multiple auxiliary chains, write the merkle root which generated with their auxblock hashes instead. Refer to the merged mining specification.

3. Check if the bitcoin block header which contains the auxblock hash meets the ela difficulty.

4. Send the proof of work (auxpow) to ela node which meets the ela difficulty through submitauxblock interface.

The Elastos node does not implement a real-time notification of the task updates by ZMQ, so createauxblock needs to be periodically rotated from the mine pool, such as every 10 seconds.

:::info
Find the merged mining specification [here](https://en.bitcoin.it/wiki/Merged_mining_specification).
:::
