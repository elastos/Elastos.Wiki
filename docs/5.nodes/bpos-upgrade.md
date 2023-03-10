---
title: Upgrading Existing DPoS nodes to BPoS
---

[Bonded Proof of Stake (BPoS)](/learn/mainchain/bpos) is a new stake model designed to make the Elastos network more decentralized and improve the security and stability of the network.

## Register the Node

All prospective validators must register their nodes with the system by depositing 2000 ELA for a minimum of 100 days. This is generally done using the [Elastos Essentials](/start/essentials/#essential-links) application. See the BPoS [description](/learn/mainchain/bpos) for more information about the economic incentive design and expectations for validators.

Next, prepare your node by following the [Quick Setup](/nodes/quick-setup) guide.

Once that is done, you can complete the registration process by updating your `nodepublickey` in Essentials. **This will bind your wallet registration to your node server.**

:::info
BPoS nodes can share the `nodepublickey` of the legacy DPoS nodes. Existing DPoS node operators do not need to change server configuration. The mainchain service already includes the logic for both systems and will simply switch to BPoS at a specified block height.

However, existing operators will want to make sure they upgrade to the latest version, and may want to review the [hardware requirements](/nodes/requirements/#minimum-hardware-configuration) if they wish to minimize server expenses.
:::

:::tip Reminder!
Only Council members are required to run all services, regular BPoS operators only need the mainchain (labeled as `ELA` by the `node.sh` program)!
:::
