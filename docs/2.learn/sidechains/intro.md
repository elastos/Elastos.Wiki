---
title: Elastos Sidechains
---

To reduce thepressure on the main chain and provide a better experience for DApps, Elastos adopts a mainchain and sidechain hierarchical structure. The main chain isonly responsible for the circulationof ELA. DApps runs onSidechains, and throughthe Elastos main chain+Sidechain transfer mechanism,
the secure transferofvaluebetween the main chain and the theSidechain is completed.
The Elastos main chain uses the arbitrator's joint signature andSPV (SimplifiedPayment Verification) mechanism to guarantee the security of the transfer
withtheSidechain, and the main chain token holders jointlyelect a certain numberof arbitrators. The arbitrator is responsible for signing the token
withdrawals from theSidechain to the main chain. Most of arbitrator signatures can unlock on the main chain a token withdrawal transfer from the
representativeSidechain’s account to theordinary account.SPV ensures the security of recharging operations from the main chain to theSidechain. Each
Sidechain node synchronizes all of theblock headersof the main chain. Along withthe merkle proofpath and transaction information, a decentralized
consensus can be completed on the transfer transaction withthehelp ofdata structure and algorithm.
The ElastosSidechain can use any consensus mechanism. At present, the Elastos team has already developedaPOW consensusbasedSidechain that can
connect withthe main chain to completeSPV and DPOSbased deposit and withdrawal operations. ThisPOW-basedSidechain can use the computing
powerof the main chain to ensure itsown security. The right to use the main chain's computing power ispassed to the "arbitrator" elected by the DPOSbased consensus. Each arbitrator takes turnsdoing block packing for theSidechain.

Elastos sidechain is realized by a two-way anchoring mechanism, which supports the protocol of asset transfer between mainchain and sidechain. The main purpose is to expand the function of the Elastos mainchain, which provides the trust root, and different sidechains can carry different applications. At present, the online sidechains include DID, EID. and ESC.

The Elastos Smart Contract Chain (ESC) lets developers code and run smart contracts on Ethereum Virtual Machines (EVMs), while also leveraging a DPoS consensus mechanism to optimize scalability and speed. Developers are also able to build smart contracts written in Solidity, one of the most popular and simple coding languages available for ease of use.
