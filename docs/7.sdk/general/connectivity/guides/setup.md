---
title: Setup
---

The following guides describe **interactive operations** that can occur within the Elastos decentralized world, in addition to several ways to **customize** the Connectivity SDK according to your needs.

## Connectivity SDK Setup

### Setup the SDK

Start by installing the SDK for your platform.

Because **the Connectivity SDK requires at least one connector to work with**, we'll use the Elastos Essentials connector for this guide. For more information about this connector, refer to the [Elastos Essentials documentation](https://essentials-docs.trinity-tech.io/).

```
# Connectivity SDK
npm install @elastosfoundation/elastos-connectivity-sdk-js

# Use at least one connector
npm install @elastosfoundation/essentials-connector-client-browser

# Use the DID SDK as it's needed for most interactive operations
npm install @elastosfoundation/did-js-sdk
```

### Register at Least One Connector

Let's register the Elastos Essentials Connector as an initial example. You can choose to use one or more connectors in your application.

```ts
import { connectivity } from "@elastosfoundation/elastos-connectivity-sdk-js";

let essentialsConnector = new EssentialsConnector();

// Let the connectivity SDK know that we are willing to use this connector.
connectivity.registerConnector(essentialsConnector);
```

:::tip Note on using multiple connectors
In case multiple connectors are registered, interactive operations first prompt users to choose their preferred connector to execute the operation.
:::
