---
title: Verifying Contracts with Blockscout
---

Verifying your deployed contract is always a good idea!

Once verified, a smart contract or token contract's source code becomes publicly available and verifiable. This creates transparency and trust.

Contracts can be verified on the [Elastos block explorers](/api/providers), which are based on the Blockscout UI.

:::tip
To learn more about the smart contract verification Rust microservice and verification algorithm [see this page for developers](https://docs.blockscout.com/for-developers/information-and-settings/smart-contract-verification).
:::

:::info
👷🏻‍♂️ If preferred you can choose the following methods to verify directly from your Hardhat dev environment.

- [Hardhat Verification Plugin](https://docs.blockscout.com/for-users/verifying-a-smart-contract/hardhat-verification-plugin)
- [Sourcify Plugin for Hardhat](https://docs.blockscout.com/for-users/verifying-a-smart-contract/sourcify-plugin-for-hardhat)

:::
​

## Verification via Flattened Source Code

On contract creation, you will receive an address to check a pending transaction. If it does not direct you to the explorer automatically, go to [esc.elastos.io](https://esc.elastos.io/) and copy the contract's address into the search bar. Your contract details should come up.

![image](/docs/assets/develop/smart-contracts/verify/contract-creation-transaction.png)
_The contract address is shown in contract creation details_

![image](/docs/assets/develop/smart-contracts/verify/verify-and-publish-button.png)
_On the contract page, select the Code tab to view the bytecode, and click the Verify & Publish button_

![image](/docs/assets/develop/smart-contracts/verify/verify-smart-contract.png)

## Form Details

1. Contract Address: The 0x address supplied on contract creation.

2. Contract Name: Name of the class whose constructor was called in the .sol file. For example, in contract MyContract {.. MyContract is the contract name.

3. Include Nightly Builds: Yes if you want to show nightly builds.

4. Compiler: derived from the first line in the contract pragma solidity X.X.X. Use the corresponding compiler version rather than the nightly build.

5. EVM Version: ​[See EVM version information](https://docs.blockscout.com/for-developers/evm-version-information).

6. Optimization: If you enabled optimization during compilation, check yes.

7. Optimization Runs: 200 is the Solidity Compiler default value. Only change if you changed this value while compiling.

8. Enter the Solidity Contract Code: You may need to flatten your solidity code if it utilizes a library or inherits dependencies from another contract. We recommend the [POA solidity flattener](https://github.com/poanetwork/solidity-flattener) or the [truffle flattener](https://www.npmjs.com/package/truffle-flattener).

9. Try to fetch constructor arguments automatically: If similar contracts exist these may be available.

10. ABI-encoded Constructor Arguments: [See this page for more info](https://docs.blockscout.com/for-users/abi-encoded-constructor-arguments).

11. Add Contract Libraries: Enter the name and 0x address for any required libraries called in the called in the .sol file.

Finally, Click the Verify and Publish button. If all goes well, you will see a checkmark ✅ next to Code in the code tab, and an additional tab called Read Contract. The contract name will now appear in BlockScout with any transactions related to your contract.

## Troubleshooting

If you receive the dreaded `There was an error compiling your contract` message this means the bytecode doesn't match the supplied sourcecode. Unfortunately, there are many reasons this may be the case. Here are a few things to try:

1. Double check the compiler version is correct.

Check all version digits - for example 0.6.6 is different from 0.6.12

2. Check that an extra space has not been added to the end of the contract. When pasting in, an extra space may be added. Delete this and attempt to recompile.

3. Copy, paste and verify your source code in Remix. You may find some exceptions here.

### Verification in a dev environment

The [Hardhat verification plugin](https://docs.blockscout.com/for-users/verifying-a-smart-contract/hardhat-verification-plugin) supports BlockScout. You can also choose to use the to verify with Sourcify from your Hardhat environment.
