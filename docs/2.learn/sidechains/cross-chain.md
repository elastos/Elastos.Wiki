---
title: Cross Chain Protocol
---

The mainchain and sidechain of Elastos are cross-chains through a bidirectional anchoring mechanism. For cross-chain recharge transactions, the SPV module of the sidechain monitors the mainchain transaction and generates a Coinbase transaction in the sidechain.

For cross-chain withdrawal transactions, [arbiters](/learn/sidechains/cross-chain/#Arbiters) monitor sidechain transactions and create mainchain transactions by means of a 8/12 multi-signature; it then sends the ELA of the frozen address to the user address. Each sidechain has an independent frozen address ([listed here](/api/contracts)) corresponding to the mainchain.

When depositing to a sidechain, users need to send ELA to the frozen address of the corresponding sidechain. When withdrawing to the mainchain, users destroy the assets of the sidechain by sending them to a smart contract.

Transactions are the most important part of the interface between the main and sidechains. The transaction procedure for sending tokens from the main chain to a sidechain is equivalent to sending from a user account on the main chain to a multisignature address corresponding to the sidechain. The process automatically checks that the sidechain can identify the transaction and deposit the equivalent value of sidechain tokens to the sidechain account.

## Mainchain to Sidechain Transaction Procedure:

1. User creates a random secret and its corresponding hash.
2. User constructs a multisignature address on the mainchain. To unlock, both the secret and the user’s private key of the multisignature address must be provided.
3. User sends the transaction and their secret’s hash to the sidechain transaction processing node.
4. The transaction processing node on the sidechain generates the token-sending transaction after authentication by hash and private key of multisignature.
5. User provides the secret to unlock the transaction and receive the tokens from the sidechain.
6. The tokens are deposited to the multisignature address. The transaction procedure for sending ELA from sidechain to mainchain is equivalent to sending ELA from a multisignature address on the mainchain to the user account on mainchain.

## Sidechain to Mainchain Transaction Procedure:

1. User creates a random secret and its corresponding hash.
2. User creates a transaction on the sidechain. To unlock, the secret must be provided.
3. User sends the transaction and the secret’s hash to the mainchain transaction processing nodes.
4. The transaction processing node on the mainchain generates the token-sending transaction after authentication by hash and private key of multisignature.
5. User provides the secret to unlock the transaction and receive the tokens from the mainchain.
6. The multisignature address corresponding to the sidechain unlocks the withdrawal and spends the relevant tokens. To control the security of ELA on a multisignature address, the address can only generate a token withdrawal transaction as outlined above.

## Implementation Details

The Elastos main chain uses the arbitrator's joint signature and SPV (Simplified Payment Verification) mechanism to guarantee the security of the transfer
with sidechains, and the mainchain token holders jointly elect a certain number of arbitrators. SPV ensures the security of recharging operations from the main chain to the sidechain. Each sidechain node acts as a light client for the mainchain by synchronizing all of the block headers of the main chain along with the merkle proof path and transaction information. Arbitrators are responsible for signing the token withdrawals from the sidechains to the mainchain.

### Arbiters

In addition to claiming and running validators nodes, [Cyber Republic](/start/governance) Council members are required to maintain Arbiter nodes that encompass the Elastos mainchain and several sidechains.

At present, the cross-chain transactions are all created by the consensus of 12 CR members - soon, there may be an adjustment to the consensus of 36 nodes, including 12 CR nodes and 24 voting nodes. The cross-chain arbiter code may be found [here](https://github.com/elastos/Elastos.ELA.Arbiter).
