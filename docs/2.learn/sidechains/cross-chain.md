---
title: Cross Chain Protocol
---

The mainchain and sidechain of Elastos are cross-chains through a bidirectional anchoring mechanism. The arbiter handling cross-chain transactions is run by the CR member node of the mainchain. For cross-chain recharge transactions, the SPV module of the sidechain monitors the mainchain transaction and generates a Coinbase transaction in the sidechain.

For cross-chain withdrawal transactions, the arbiter monitors the sidechain transaction and creates the mainchain transaction by means of a 2/3 multi-signature; it then sends the ELA of the frozen address to the user address. Each sidechain has an independent frozen address corresponding to the mainchain. When recharging the sidechain, the user needs to send ELA to the frozen address of the corresponding sidechain. When implementing the withdrawal from the mainchain, the user needs to destroy the assets of the sidechain.
