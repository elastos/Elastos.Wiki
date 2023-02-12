---
title: Blockchain Basics
---

## What is a Blockchain?

The blockchain is a distributed database that keeps an ongoing list of records called blocks, which are connected using cryptography. Moreover, it's a decentralized and public ledger that contains a list of transactions executed using cryptocurrencies, setting the foundation for how these digital assets operate and are stored. A blockchain ledger is immutable and therefore cannot be altered, keeping a permanent historical record of all activity.

### Use Cases

So what exactly can the blockchain be used for? There are various use cases that are revolutionizing the way people and businesses use money and data today, such as payment processing, transferring assets, supply chain monitoring, sharing data, healthcare, and much more. The permissionless nature of the blockchain enables transaction execution to be much smoother and faster.

### Types of Blockchains

There are 4 different types of blockchains that exist today - let's take a quick look at each of their characteristics.

#### Public

A public blockchain is the most well-known type of distributed ledger technology, provide a decentralized, permissionless, and secure solution when executing transactions and activities with digital asset. All of the information/data on a public blockchain is disseminated across a P2P (peer-to-peer) network and verified through different consensus mechanisms (either PoW or PoS).

#### Private

A private blockchain operates in a more siloed manner (or is controlled by 1 entity). It's similar to a public blockchain when it comes P2P transactions and decentralization but runs in a smaller environment, typically within a company or enterprise.

#### Hybrid

A hybrid blockchain has a blend of characteristics from public and private blockchains. By implementing a hybrid blockchain model, companies can deploy private and permissioned systems simultaneously with a public permissionless one, restricting access to certain users when it comes to viewership and control of the data.

#### Consortium

A consortium blockchain has a mix of both private and public blockchain features but involves multiple parties within a company working together within a decentralized environment. It's moreso like a private blockchain network but with limited access to certain people or groups, which helps remove risks if only 1 organization has control of the entire network.

---

## What is Consensus?

Consensus is a method for coming to agreement over a shared state. In order for the state of the blockchain to continue to build and move forward, all nodes in the network must agree and come to consensus. It is the way that the nodes in a decentralized network are able to stay synced with each other. Without consensus for the decentralized network of nodes in a blockchain, there is no way to ensure that the state one node believes is true will be shared by the other nodes. Consensus aims to provide the objective view of the state amid participants who each have their own subjective views of the network. It is the process by which these nodes communicate and come to agreement, and are able to build new blocks.

### Main Consensus Actors

#### Validators

Validators, if elected to the validator set, produce blocks on the mainchain. They also accept proofs of valid state transition the sidechains. In return, they receive staking rewards.

#### Nominators

Nominators bond their stake to particular validators in order to help them get into the active validator set and thus produce blocks for the chain. In return, nominators are generally rewarded with a portion of the staking rewards from that validator.

#### Arbiters

In Elastos, arbitors are elected anually through on-chain governance and are responsible for collecting sidechain transactions and producing state transition proofs for the validators on the mainchain.

## Consensus Models

Below are the most common and well-known blockchain consensus mechanisms:

### Proof of Work (PoW)

This is the most common, reliable, and secure of all consensus types. Across this system, miners look to solve very complex computational formulas using powerful computers. The first miner to solve the puzzle receives the ability to create a new block and confirm network transactions, while receiving a reward in the native crypto (i.e. BTC, ETH) in exchange for their efforts. While noted for its high security, PoW has been deemed extremely energy inefficient and high-cost.

### Proof of Stake (PoS)

With PoS, miners stake (or lock) their digital assets within the network for the opportunity to be selected as a validator. When validators confirm and verify transactions, they're rewarded in transaction fees, denominated in the network's native token (i.e. ETH). This consensus mechanism is much more efficient, environmentally-friendly, and easier to participate in than its PoW counterpart.

### Delegated Proof of Stake (DPoS)

DPoS is a modified version of PoS, which uses a voting system based on reputation. Participants within the network vote to choose withnesses, or block producers, to help secure the network on their behalf. In this system, only the witnesses who have the most amount of votes receive the ablity to validate transactions, making the entire process more based on initial selection.

Users deposit their tokens into staking pools to cast their votes, which are weighted based on the amount of stake per voter (larger deposits equal more voting power).

### Proof of Activity (PoA)

The PoA consensus mechansim is a blend between PoW and PoS, where the mining process is similar to PoW. When blocks are minted, the consensus type moves to PoS, where a group of validators are randomly chosen to sign off on the transaction hash and validate the new block. If a validator has a higher amount of tokens invested, their chances of being chosen dramatically increase. All blocks rewards earned are distributed amongst the miners and validators.

The initial mining process still suffers from the inefficiencies associated with the standard PoW system and favors users with a larger stake in the game (deposited tokens in PoS).

### Proof of Authority (PoA)

The PoA system chooses validators based on their reputation, where they have to put their reputation on the line in order to receive the ability to validate blocks (tokens aren't staked). No computer power is required to run this system, making it much more energy efficient, but it's known for being less decentralized given that a select few actors can become participants.

### Proof of History (PoH)

A PoH consensus mechanism provides proof of historical events that occur on the chain. Timestamps are built into the blockchain that help verify the history between transactions without the need for other nodes. These timestampts use the output of one transaction as input for the next hash, allowing all network participants to view events that took place in a particular order. This method is extremely transparent and far more energy efficient.

---

## Smart Contracts

Smart contracts are programs stored on the blockchain that help automate transactions and execute actions based on specific requirements or conditions. They're essentially computer programs that automate the facilitation and execution of network agreements, removing the need for an intermediary or middleman while allowing the chain to become independent.

For example, if a buyer and seller on the Elastos blockchain through code, a smart contract could execute the transaction based on those criteria. By using smart contracts, transactions are transparent, automatic, and irreversible, creating the underlying foundation for what blockchains are meant to do.

<!-- ## Delegated Proof of Stake

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

:::info
The fifth stage is still under development, and the detailed design can be seen in the CRC DPoS 2.0 [detailed proposal](https://www.cyberrepublic.org/proposals/61cdad4cb5d3b6007833e15e).
::: -->
