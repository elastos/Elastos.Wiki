---
title: Create DID
---

:::info Under Construction
:::

```js
Web3 = require("web3");
web3 = new Web3("https://api-testnet.trinity-tech.cn/eid");
contract = new web3.eth.Contract([
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "string", name: "data", type: "string" }],
    name: "publishDidTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]);

contract.options.address = "0xF654c3cBBB60D7F4ac7cDA325d51E62f47ACD436"; //did合约地址

acc = web3.eth.accounts.decrypt(keystore, password);
createDID =
  '{"header":{"specification":"elastos/did/1.0","operation":"create"},"payload":"ewogICAgICAgICJpZCIgOiAiZGlkOmVsYXN0b3M6aVRXcWFuVW92aDN6SGZuRXhHYWFuNFNKQVhHM0RDWkM2aiIsCiAgICAgICAgInB1YmxpY0tleSI6W3sgImlkIjogImRpZDplbGFzdG9zOmlUV3FhblVvdmgzekhmbkV4R2FhbjRTSkFYRzNEQ1pDNmojZGVmYXVsdCIsCiAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiOiJFQ0RTQXNlY3AyNTZyMSIsCiAgICAgICAgICAgICAgICAgICAgICAgImNvbnRyb2xsZXIiOiJkaWQ6ZWxhc3RvczppY0o0ejJEVUxySEV6WVN2aktOSnBLeWhxRkR4dllWN3BOIiwKICAgICAgICAgICAgICAgICAgICAgICAicHVibGljS2V5QmFzZTU4Ijoienh0Nk55b29yRlVGTVhBOG1EQlVMam51SDN2NmlOZFptNDJQeUc0YzFZZEMiCiAgICAgICAgICAgICAgICAgICAgICB9LAoJCQkJCXsKCQkJCQkgICAiaWQiOiAiZGlkOmVsYXN0b3M6aWNKNHoyRFVMckhFellTdmpLTkpwS3locUZEeHZZVjdwTiNtYXN0ZXIiLAoJCQkJCSAgICJ0eXBlIjoiRUNEU0FzZWNwMjU2cjEiLAoJCQkJCSAgICJjb250cm9sbGVyIjoiZGlkOmVsYXN0b3M6aWNKNHoyRFVMckhFellTdmpLTkpwS3locUZEeHZZVjdwTiIsCgkJCQkJICAgInB1YmxpY0tleUJhc2U1OCI6InpOeG9aYVpMZGFja1pRTk1hczdzQ2tQUkhac0ozQnRkakV2TTJ5NWdOdktKIgoJCQkJICAgfQogICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgImF1dGhlbnRpY2F0aW9uIjpbImRpZDplbGFzdG9zOmlUV3FhblVvdmgzekhmbkV4R2FhbjRTSkFYRzNEQ1pDNmojZGVmYXVsdCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImlkIjogImRpZDplbGFzdG9zOmljSjR6MkRVTHJIRXpZU3ZqS05KcEt5aHFGRHh2WVY3cE4jZGVmYXVsdCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSI6IkVDRFNBc2VjcDI1NnIxIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJjb250cm9sbGVyIjoiZGlkOmVsYXN0b3M6aWNKNHoyRFVMckhFellTdmpLTkpwS3locUZEeHZZVjdwTiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicHVibGljS2V5QmFzZTU4Ijoiek54b1phWkxkYWNrWlFOTWFzN3NDa1BSSFpzSjNCdGRqRXZNMnk1Z052S0oiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgImF1dGhvcml6YXRpb24iOlsiZGlkOmVsYXN0b3M6aWNKNHoyRFVMckhFellTdmpLTkpwS3locUZEeHZZVjdwTiNkZWZhdWx0Il0sCiAgICAgICAgImV4cGlyZXMiIDogIjIwMjMtMDItMTBUMTc6MDA6MDBaIgoJfQ","proof":{"type":"ECDSAsecp256r1","verificationMethod":"did:elastos:iTWqanUovh3zHfnExGaan4SJAXG3DCZC6j#default","signature":"t-GN8QQ62TkWo6BIqh0vYXUoItsU0xYDIzBcEhkko_AFNwPXnEBNrKYJxy34On93VM5PHN_TcSiXeEyKmf0CMQ"},"DIDDoc":{"id":"did:elastos:iTWqanUovh3zHfnExGaan4SJAXG3DCZC6j","publicKey":[{"id":"did:elastos:iTWqanUovh3zHfnExGaan4SJAXG3DCZC6j#default","type":"ECDSAsecp256r1","controller":"did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN","publicKeyBase58":"zxt6NyoorFUFMXA8mDBULjnuH3v6iNdZm42PyG4c1YdC"},{"id":"did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN#master","type":"ECDSAsecp256r1","controller":"did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN","publicKeyBase58":"zNxoZaZLdackZQNMas7sCkPRHZsJ3BtdjEvM2y5gNvKJ"}],"authentication":["did:elastos:iTWqanUovh3zHfnExGaan4SJAXG3DCZC6j#default",{"controller":"did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN","id":"did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN#default","publicKeyBase58":"zNxoZaZLdackZQNMas7sCkPRHZsJ3BtdjEvM2y5gNvKJ","type":"ECDSAsecp256r1"}],"authorization":["did:elastos:icJ4z2DULrHEzYSvjKNJpKyhqFDxvYV7pN#default"],"expires":"2023-02-10T17:00:00Z"},"CredentialDoc":null,"Ticket":null}';

cdata = contract.methods.publishDidTransaction(createDID).encodeABI();
tx = {
  data: cdata,
  to: contract.options.address,
  from: acc.address,
  gas: "305304",
  gasPrice: "1000000000000",
};
acc.signTransaction(tx).then((res) => {
  console.log("coming");
  stx = res;
  console.log(stx.rawTransaction);
  web3.eth.sendSignedTransaction(stx.rawTransaction).then(console.log);
});
```
