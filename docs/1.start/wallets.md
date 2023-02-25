---
title: Custody
---

There are several options available to manage your ELA and Elastos based assets.

As with all blockchains, to receive tokens you will need to generate a keypair which stores your crypto. You can do this directly by using a hardware wallet and the command line or indirectly by using a commercially available web or mobile wallet.

## Security & Recovery

For any applications or hardware wallet you use, the root of the security is in the seed phrase. **No one else in the world should have access to this seed phrase. Anyone who can access the seed will be able to control your account and steal your funds.**

The seed phrase defines the private key managed by the application. This seed phrase can be used to recover access to your account if you lose access to your app/device or there is a software issue. You MUST back it up (store it somewhere securely) and if you lose both seed phrase and the device there is no way to get access to your account.

:::warning
Since the Elastos Smart Chain (ESC) is EVM-compatible, many third-party wallets can be used to with the network. However, users should do their own due diligence in researching and using them. We cannot provide support for issues with these wallets or other non-native wallets.
:::

:::info Note
[Essentials](/start/essentials) is recommended for the majority of users as it contains several important features that are not available elsewhere and supports all three of the core Elastos blockchains.
:::

## Wallets

For wallet inquiries and issues, please visit the support section of the [Discord](https://discord.gg/elastos). For a refresher on the different versions of ELA, check the [type chart](/start/types).

| Wallet                                                          | Custody       | Ledger       | dApp Browser | Platform                 | Mainchain | ESC       | ETH/ERC20 |
| --------------------------------------------------------------- | ------------- | ------------ | ------------ | ------------------------ | --------- | --------- | --------- |
| [Essentials](https://elastos.info/essentials-the-super-wallet/) | non-custodial | yes (Nano X) | yes          | mobile                   | **`yes`** | **`yes`** | **`yes`** |
| [MetaMask](https://metamask.io/)\*                              | non-custodial | yes          | yes          | mobile, browser, api/sdk | no        | yes       | yes       |
| [Coinbase](https://coinbase.com/wallet)\*                       | hybrid        | yes          | yes          | mobile, browser, api/sdk | no        | yes       | yes       |
| [Trust Wallet](https://trustwallet.com/)\*                      | non-custodial | yes          | yes          | mobile                   | no        | yes       | yes       |
| [TokenPocket](https://www.tokenpocket.pro/en)\*                 | non-custodial | yes          | yes          | mobile, browser, api/sdk | no        | yes       | yes       |
| [Coin98](https://coin98.com/wallet)\*                           | non-custodial | yes          | yes          | mobile, browser, api/sdk | no        | yes       | yes       |
| [Brave Wallet](https://brave.com/wallet/)\*                     | non-custodial | yes          | no           | browser                  | no        | yes       | yes       |

:::caution \*NON-NATIVE WALLET SUPPORT
Wallets denoted with \* in the table above are not natively supported with the wallet software and require manual steps to add the Elastos network. Network configuration settings can be found [here](/api/providers).
:::

## Centralized Exchanges

| Exchanges                        | Custody   | Mainchain | ESC | ETH/ERC20 |
| -------------------------------- | --------- | --------- | --- | --------- |
| [Coinbase](https://coinbase.com) | custodial | no        | no  | yes       |
| [Kucoin](https://kucoin.com)     | custodial | yes       | yes | no        |
| [Gate](https://gate.io/)         | custodial | yes       | yes | yes       |
| [Huobi](https://huobi.com)       | custodial | yes       | no  | no        |

:::warning
Store tokens on exchanges at your own risk! Not your keys, not your coins!
:::
