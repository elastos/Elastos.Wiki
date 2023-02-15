---
title: The Built-in Connector Standard
---

## The Javascript window.elastos instance

In javascript environments (using the Connectivity SDK JS), **mobile wallets** supporting Elastos features - such as Elastos Essentials - define the global window.elastos instance in their in-app browser, similarly to window.ethereum used to inject Ethereum Web3 providers.

**_Window.elastos replaces other connectors_**

When window.elastos is defined (injected by the parent native browser or plugin), **the connectivity SDK uses it automatically**. Other connectors added by dApps are not used in such case.

:::warning
window.elastos is not window.ethereum
:::

If you are used to write Ethereum web3 apps, you may have used window.ethereum as a web3 instance to execute Ethereum requests.

Elastos' window.elastos is similar, but used to pass Elastos specific commands such as DID credential requests (eg: requestCredentials(), to "sign in with DID")
When a dApp is running inside a mobile wallet application such as Elastos Essentials, both window.ethereum and window.elastos are defined.

### How to detect if we are in a specific built-in browser?

```js
// We are in the "Essentials" browser
if (window.elastos.name === "essentialsiab") {
 ...
}
```
