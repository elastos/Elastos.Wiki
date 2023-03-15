---
title: Bonded Proof of Stake (BPoS)
---

## Abstract

Bonded Proof of Stake is named given to the second iteration of Elastos' original delegated proof of stake model and represents one half of the overarching [Elastic Consensus](/learn/mainchain/intro/#elastic-consensus) mechanism. The new mechanism upgrades the process of simple voting to staking with a pledge time and distributes the staking reward automatically. By linking the time and quantity of staking to the stake mining reward, BPoS consensus is expected to be more decentralized, more secure and more stable.

## Concepts

### Staked Token

The tokens that are staked in the BPoS protocol. To participate, ELA tokens must be exchanged for an equal amount of BPoS equity tokens.

### Staking Right

The staking rights are calculated based on the number of staked tokens and the duration of the stake. A node, token amount, and pledge time must be set when participating in staking. The longer the pledge time, the more staking rights are gained. Tokens are redeemed automatically once the pledge time expires.

### Equity Token

To ensure stability for tokens staked in BPoS, these tokens should also be able to participate in community activities on the mainchain during the staking period, such as electing CR council members, opposing proposals, impeaching CR council members, etc.

Therefore, ELA tokens can be exchanged into several equity tokens of equal value, each of which can participate in specific activities. These equity tokens include: BPoS staking, CR election, proposal opposition, and impeachment. Equity tokens cannot be traded.

One ELA token can be exchanged for all equity tokens, and the exchanged ELA tokens are in an unusable state. The equity tokens can be used for corresponding activities on the mainchain. To exchange back to ELA, all equity tokens must be used. If an equity token is staked, it cannot be exchanged.

---

## Staking

Stakers must follow these rules to participate:

- Stakers specify a BPoS validator, token amount, and pledge time.
- Each equity token can only be staked to one validator, but tokens can be divided across as many validators as the user chooses.
- The pledge time must be at least 7200 block heights (approx. 10 days) to minimize short-term token fluctuation and improve network stability.
- The longer the pledge time, the more staking rights and higher yield rate.
- The pledge time can be extended but not shortened. Staking rights and yield rates are recalculated in real-time when the pledge time is extended.
- Staking rewards are distributed automatically to the node owners and their stakers through blockchain code.

Staking rights are calculated as follows:

- The minimum pledge time is 7200 block heights (approx. 10 days) and the maximum is 720,000 block heights (approx. 1000 days).
- Let E be the number of staked tokens and T be the pledge time of a single stake (counted in blocks, with 7200 <= T <= 720000).
- The formula for calculating staking rights for a single stake is: `N = E \* log(T / 720)`
- Staking rights are directly proportional to the pledge time, with the longer time resulting in higher rights and growth coefficients between 1 to 3 times.

![image](/docs/assets/learn/bpos-1.png)

---

## Validators

The rules for becoming a validator are as follows:

- The node owner pledges 2000 ELA to register as a validator. The pledge time must be at least 72,000 block heights (approx. 100 days) and can be extended. When the pledge expires, the node will automatically become inactive. The maximum pledge time for staking with a validator cannot exceed the expected expiration time of the node.
- After registration, the node is inactive and cannot participate in block consensus, but can start accepting stakers to stake on it. When the total staking rights of all stakers on a single validator reach over 80,000, the node becomes activated and can participate in block consensus.
- Twelve CRC nodes are active by default and stakers cannot stake on them. In the BPoS consensus model, every 36 block heights is an arbitration cycle. At the beginning of each arbitration cycle, 36 nodes are randomly selected from all active validators to serve as arbitrators.
- This ensures that all active nodes have equal opportunities to participate in consensus. As the total staking rights on a validator increases, the yield of staking on the node decreases, which encourages stakers to stake as widely as possible.

The state transition of a validator node is shown in the following figure:

![image](/docs/assets/learn/bpos-2.png)

## Profit Distribution

When an active node becomes an arbitrator node and generates a new block, it receives 35% of the current block reward as its BPoS allocation. The reward distribution rules are as follows:

- All block rewards from CRC nodes go to their owners, as there is no staking on them.
- 25% of the reward for ordinary validator nodes goes to the node owners, and 75% goes to the stakers (distributed according to their staking rights).
- Reward distribution is automated by the blockchain code.

### Penalties

Penalties for arbitrator nodes include:

- **Negligence**: if an arbitrator node fails to generate a block for three consecutive times, both the node and its stakers will be penalized.
- **Doing evil**: if an arbitrator engages in malicious behavior such as double signing, the deposit of 2000 ELA will be confiscated and the node will be marked as invalid. The node's stakers will also be penalized.

Confiscated tokens are burned and cannot be used in circulation. When a node's deposit falls below 2000 ELA or its staking rights fall below 80,000, it becomes inactive.

---

## Tips for Selecting Validators

Stakers should consider the following factors when selecting a validator:

1. **Mining reward**

The higher the total staking rights, the lower the staking return. Stakers should select validators with relatively low staking rights.

2. **Critical value of the validator's total staking rights**

If a validator's staking rights fall below 80,000, it becomes inactive. Therefore, it is unwise to select a validator whose total staking rights are close to this critical value.

3. **Distribution of pledge time of staked tokens**

Stakers should select validator with the same or longer pledge time for most of the staked tokens on the node.

4. **Operation quality of the node**

Mining reward is not the only deciding factor. If a validator engages in malicious behavior, its stakers will not earn any rewards and may even be penalized. Therefore, the signature and block generation rate of the node is another important factor to consider. This helps to ensure that there are more high-quality nodes in the community.
