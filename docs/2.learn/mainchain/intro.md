---
title: Elastos Mainchain
---

The mainchain is a completely open-source and sovereign blockchain protocol that stores cryptographic proofs and establishes a secure foundation for the ecosystem through Bitcoin’s hashrate power - this is done by using Bitcoin’s Proof of Work (PoW) consensus mechanism, leveraging merged-mining to ensure the trustworthiness of data being exchanged. With its technology, it can complete transactions and payment transfers.

It uses its Delegated Proof of Stake (DPoS) supernodes to achieve consensus by providing finality for solved network blocks. Furthermore, comes complete with sidechain support, which developers can customize select from a variety of consensus mechanisms.

## Consensus

### Main Actors

#### Validators

Validators, if elected to the validator set, produce blocks on the Relay Chain. They also accept proofs of valid state transition from collators. In return, they will receive staking rewards.

#### Nominators

Nominators bond their stake to particular validators in order to help them get into the active validator set and thus produce blocks for the chain. In return, nominators are generally rewarded with a portion of the staking rewards from that validator.

#### Collators

Collators are full nodes on both a parachain and the Relay Chain. They collect parachain transactions and produce state transition proofs for the validators on the Relay Chain. They can also send and receive messages from other parachains using XCMP.
