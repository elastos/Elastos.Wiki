---
title: The Essentials Connector
---

The Elastos Essentials connector allows your dApp to communicate with the Essentials wallet to do identity and other operations (in addition to crypto operations).

### Quick start:

```js
npm i @elastosfoundation/essentials-connector-client-browser

import { connectivity } from "@elastosfoundation/elastos-connectivity-sdk-js";
import { EssentialsConnector } from '@elastosfoundation/essentials-connector-client-browser';

const essentialsConnector = new EssentialsConnector();
connectivity.registerConnector(essentialsConnector);
```

:::tip
For more information, please refer to the [Essentials documentation](https://essentials-docs.trinity-tech.io/).
:::
