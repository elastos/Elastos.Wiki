---
title: Mainchain-Sidechain Transfer
---

### How to Transfer ELA from Mainchain to ESC

1. Using the [ELA-CLI](/api/mainchain/cli), create a deposit transaction:

```bash
./ela-cli wallet -t create --deposit eth_address(ESC address) --amount recharge_value(amount ela units) --fee recharge_fee(fee ela units)
```

2. Sign transaction:

```bash
./ela-cli wallet -t sign --file to_be_signed.txn -p yourpassword(your keystore password)
```

3. Send transaction:

```bash
./ela-cli wallet -t send --file ready_to_send.txn
```

### How to Withdraw ELA from ESC to Mainchain

Using node.js

<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript" >
  </TabItem>
</Tabs>

```js
const Web3 = require("web3");

// set web3 uri
const web3 = new Web3("http://127.0.0.1:20636");

// set withdraw contract
let contract = new web3.eth.Contract([
  {
    constant: false,
    inputs: [
      { name: "_addr", type: "string" },
      { name: "_amount", type: "uint256" },
      { name: "_fee", type: "uint256" },
    ],
    name: "receivePayload",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "_addr", type: "string" },
      { indexed: false, name: "_amount", type: "uint256" },
      { indexed: false, name: "_crosschainamount", type: "uint256" },
      { indexed: true, name: "_sender", type: "address" },
    ],
    name: "PayloadReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_sender", type: "address" },
      { indexed: false, name: "_amount", type: "uint256" },
      { indexed: true, name: "_black", type: "address" },
    ],
    name: "EtherDeposited",
    type: "event",
  },
]);

// set eth account address
contract.options.address = deploy_contract_address;

// set account contract keystore info
const acc = web3.eth.accounts.decrypt(keystore_content, keystore_password);

// call receivePayload function，params：(ELA main chain address，amount(In ela up to convert wei 10000000000)，fee)
const cdata = contract.methods
  .receivePayload(ELA_address, withdraw_amount, fee)
  .encodeABI();

// gas minimum is 3000000，gasPrice is any value
let tx = {
  data: cdata,
  to: contract.options.address,
  from: acc.address,
  gas: "3000000",
  gasPrice: "20000000000",
};

// send transaction amount(use receivePayload function amount)
tx.value = withdraw_amount;

acc
  .signTransaction(tx)
  .then((res) => {
    console.log("coming");
    stx = res;
    console.log(stx.rawTransaction);
    web3.eth.sendSignedTransaction(stx.rawTransaction);
  })
  .then(console);
```

## Transfer Smart Contracts

| Description          | Address                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ESC Deposit          | [XVbCTM7vqM1qHKsABSFH4xKN1qbp7ijpWf](https://blockchain.elastos.org/address/XVbCTM7vqM1qHKsABSFH4xKN1qbp7ijpWf)                 |
| ESC Withdraw         | [0xC445f9487bF570fF508eA9Ac320b59730e81e503](https://esc.elastos.io/address/0xC445f9487bF570fF508eA9Ac320b59730e81e503)         |
| ESC Testnet Deposit  | [XWCiyXM1bQyGTawoaYKx9PjRkMUGGocWub](https://blockchain-testnet.elastos.org/address/XWCiyXM1bQyGTawoaYKx9PjRkMUGGocWub)         |
| ESC Testnet Withdraw | [0x491bC043672B9286fA02FA7e0d6A3E5A0384A31A](https://esc-testnet.elastos.io/address/0x491bC043672B9286fA02FA7e0d6A3E5A0384A31A) |
