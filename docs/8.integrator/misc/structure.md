---
title: Structure
---

:::caution
Needs to be transcribed from https://docs.elastos.net/guides/v/mainchain/hello-world-app/transaction-data-structure
:::

| Index | Field   | Type | Description                                                                                                                                                                                                              |
| ----- | ------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Version | byte | Transaction version. May be empty: If Version < 0x09, the first byte of transaction is the second field 'TxType' and the ‘Version’ is empty. If transaction type >= 0x09, must have 'Version' and the value must >= 0x09 |
