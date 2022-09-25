---
id: consensus
title: Consensus Mechanism
sidebar_label: Consensus Mechanism
---
Consensus is the process where nodes on a blockchain network help determine which transactions are valid or invalid, where the mechanisms begind this process help participants reach this agreement. Therefore, blockchain consensus is a basis of rules that help protect networks from bad behavior and attacks, providing the baseline security needed.

Below are the most common and well-known blockchain consensus mechanisms:

## Proof of Work (PoW)
This is the most common, reliable, and secure of all consensus types. Across this system, miners look to solve very complex computational formulas using powerful computers. The first miner to solve the puzzle receives the ability to create a new block and confirm network transactions, while receiving a reward in the native crypto (i.e. BTC, ETH) in exchange for their efforts. While noted for its high security, PoW has been deemed extremely energy inefficient and high-cost.

## Proof of Stake (PoS)
With PoS, miners stake (or lock) their digital assets within the network for the opportunity to be selected as a validator. When validators confirm and verify transactions, they're rewarded in transaction fees, denominated in the network's native token (i.e. ETH). This consensus mechanism is much more efficient, environmentally-friendly, and easier to participate in than its PoW counterpart.

## Delegated Proof of Stake (DPoS)
DPoS is a modified version of PoS, which uses a voting system based on reputation. Participants within the network vote to choose withnesses, or block producers, to help secure the network on their behalf. In this system, only the witnesses who have the most amount of votes receive the ablity to validate transactions, making the entire process more based on initial selection.

Users deposit their tokens into staking pools to cast their votes, which are weighted based on the amount of stake per voter (larger deposits equal more voting power). 

## Proof of Activity (PoA)
The PoA consensus mechansim is a blend between PoW and PoS, where the mining process is similar to PoW. When blocks are minted, the consensus type moves to PoS, where a group of validators are randomly chosen to sign off on the transaction hash and validate the new block. If a validator has a higher amount of tokens invested, their chances of being chosen dramatically increase. All blocks rewards earned are distributed amongst the miners and validators.

The initial mining process still suffers from the inefficiencies associated with the standard PoW system and favors users with a larger stake in the game (depoisted tokens in PoS).

## Proof of Authority (PoA)
The PoA system chooses validators based on their reputation, where they have to put their reputation on the line in order to receive the ability to validate blocks (tokens aren't staked). No computer power is required to run this system, making it much more energy efficient, but it's known for being less decentralized given that a select few actors can become participants. 

## Proof of History (PoH)
A PoH consensus mechanism provides proof of historical events that occur on the chain. Timestamps are built into the blockchain that help verify the history between transactions without the need for other nodes. These timestampts use the output of one transaction as input for the next hash, allowing all network participants to view events that took place in a  particular order. This method is extremely transparent and far more energy efficient.
