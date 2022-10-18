---
title: Consensus
---

## What is consensus?

Consensus is a method for coming to agreement over a shared state. In order for the state of the blockchain to continue to build and move forward, all nodes in the network must agree and come to consensus. It is the way that the nodes in a decentralized network are able to stay synced with each other. Without consensus for the decentralized network of nodes in a blockchain, there is no way to ensure that the state one node believes is true will be shared by the other nodes. Consensus aims to provide the objective view of the state amid participants who each have their own subjective views of the network. It is the process by which these nodes communicate and come to agreement, and are able to build new blocks.

## Delegated Proof of Stake

Delegated proof of stake is a type of blockchain consensus protocol that allows users to spend their coins to vote for various delegates. Once these delegates have been elected, they’re able to make critical decisions that apply to the whole network. For instance, the elected delegates can set protocol rules or validate transactions.

In general, delegated proof of stake has proven to be one of the most effective consensus mechanisms available and has helped to ensure that blockchain protocols remain sustainable and scalable.

:::info DPoS forms one half of Elastos' hybrid consensus model along with AuxPoW Bitcoin merge mining.
:::

The evolution of Elastos' DPoS consensus can be divided into the following five stages:

### Stage 1: 12 Fixed CR Nodes Block Generation on Consensus

In config.json, you can use CRCOnlyDPOSHeight to configure the starting height of the first stage, and the default height of the main network is 343400. In this stage, the 12 CRCArbiters specified in the configuration file generate blocks on consensus.

### Stage 2: 12 Fixed CR+24 Voted DPoS Nodes Generate Blocks on Consensus

Support the registration of DPoS nodes and voting. In config.json, you can use PublicDPOSHeight to configure the starting height of the second stage, and the default height of the main network is 402680. In this stage, the 12 CRCArbiters specified in the configuration file and 24 DPoS nodes registered and voted together to generate blocks on consensus.

### Stage 3: 12 DPoS Nodes Claimed by CR +24 Voted for DPoS Nodes Generate Blocks on Consensus

CR members are supported in order to claim the DPoS nodes. In config.json, the starting height of the third stage can be configured with CRClaimDPOSNodeStartHeight, and the default height of the main network is 751400. At this stage, the DPoS nodes claimed by 12 CR members and 24 registered and voted DPoS nodes generate blocks on consensus. During the period from the change of CR to the unclaimed DPoS nodes, the CR of unclaimed DPoS nodes is temporarily replaced by the voting DPoS nodes.

### Stage 4: 12 DPoS Nodes Claimed by CR +23 Voting for DPoS Nodes Generate Blocks on Consensus +1 Randomly Selected Candidate Node

In order to improve the community nodes participation degree, a random candidate DPoS node is added. The top 108 candidate nodes with the same probability are selected as the duty nodes to participate in generating block on consensus and gain voting and block generation profits. NoCRCDPOSNodeHeight can be used to configure the starting height of the fourth stage in config.json. The default height of the main network is 932530.

:::tip
Elastos DPoS is at this stage currently!
:::

### Stage 5: Change to Staking Mining. All 36 nodes Participating in Consensus are Randomly Selected from 12 CR and Nodes Meeting the Staking Mining Threshold

:::info The fifth stage is still under development, and the detailed design can be seen in the CRC DPoS 2.0 [detailed proposal](https://www.cyberrepublic.org/proposals/61cdad4cb5d3b6007833e15e).
:::

## Main Consensus Actors

### Validators

Validators, if elected to the validator set, produce blocks on the mainchain. They also accept proofs of valid state transition the sidechains. In return, they receive staking rewards.

### Nominators

Nominators bond their stake to particular validators in order to help them get into the active validator set and thus produce blocks for the chain. In return, nominators are generally rewarded with a portion of the staking rewards from that validator.

### Arbiters

The arbitors are elected anually through on-chain governance and are responsible for collecting sidechain transactions and producing state transition proofs for the validators on the mainchain.
