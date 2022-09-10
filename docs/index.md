---
id: welcome
title: Welcome to Elastos
hide_table_of_contents: true
---

import {FeatureList, Column, Feature} from "@site/components/featurelist"

Welcome! This is the starting point for all Elastos documentation.

<div class="container">
  <div class="row">
    <div class="col col--6">
      <a href="/concepts/welcome">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/understanding.png").default} alt="Learn" />
          </div>
          <div class="card__body">
            <h3>Understanding Elastos</h3>
            Learn what Elastos is, how it works, and why you should build on it.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="/develop/welcome">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/develop.png").default} alt="Develop" />
          </div>
          <div class="card__body">
            <h3>Developer Documentation</h3>
              Learn how to build applications that unleash the power of a smarter web.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<hr class="subsection" />

<h1 class="text-center big-title" > Browse the Wiki by Topic </h1>

<FeatureList>
  <Column title="Understanding Elastos" size="3">
    <Feature url="/learn/basics/protocol" title="What is Elastos?" subtitle="Learn the basics about Elastos" image="elastos-logo.png" />
     <Feature url="/learn/basics/accounts/access-keys" title="Multichain Architecture" subtitle="Learn about our blockchain stack" image="architecture.png" />
    <Feature url="/learn/basics/accounts/account-id" title="Sovereign Identities" subtitle="Learn about decentralized identifiers (DIDs)" image="identity.png" />
    <Feature url="/learn/basics/accounts/access-keys" title="Data Vaults" subtitle="Own your data with off-chain storage vault solutions" image="hive.png" />
    <Feature url="/learn/basics/smartcontracts/smartcontracts" title="P2P Network" subtitle="Safe network for transmitting data" image="carrier.png" />
    <Feature url="/learn/basics/tokens" title="Token" subtitle="Learn about the ELA token" image="ela.png" />
    <Feature url="/learn/basics/validators" title="Validators" subtitle="Learn how the network is secured" image="validation.png" />
  </Column>
  <Column title="Developer Documentation" size="3">
    <Feature url="/develop/quickstart-guide" title="Quickstart" subtitle="Spin-up a simple dApp" image="hello.png" />
    <Feature url="/develop/quickstart-guide" title="Create a DID" subtitle="Issue DIDs for your dApps" image="did-document.png" />
    <Feature url="/develop/contracts/introduction" title="Build a Contract" subtitle="Learn how to write and deploy contracts to the Elastos Smart Chain" image="smartcontract.png" />
    <Feature url="/develop/integrate/frontend" title="Connect a Web Frontend" subtitle="Learn how to build a web dApp" image="frontend.png" />
    <Feature url="/develop/integrate/frontend" title="Store User Data" subtitle="Learn how to access Hive data vaults using DIDs" image="hive-key.png" />
    <Feature url="/tools/realtime" title="Track your dApp" subtitle="Learn how to monitor the blockchain" image="monitor.png" />
  </Column>
  <Column title="Developer Tools" size="3">
    <Feature url="/tools/near-api-js/quick-reference" title="Connectivity SDK" subtitle="Interact with Elastos using Typescript" image="elastos-api-ts.png" />
    <Feature url="/tools/near-cli" title="Mainchain APIs" subtitle="Use the Mainchain CLI or RPC API" image="elastos-cli.png" />
    <Feature url="/api/rpc/introduction" title="Smart Chain APIs" subtitle="Use the ESC CLI or RPC API" image="elastos-rpc.png" />
    <Feature url="/tools/near-sdk-rs" title="Identity SDKs" subtitle="Work with DIDs using JS, C/C++, Java, or Swift" image="did-sdk.png" />
    <Feature url="/tools/near-sdk-rs" title="Hive SDKs" subtitle="Interact with Hive using JS, Java, or Swift" image="hive-sdk.png" />
    <Feature url="/tools/near-sdk-rs" title="Carrier SDKs" subtitle="Interact with Carrier" image="carrier-sdk.png" />
  </Column>
  <Column title="Examples & Tutorials" size="3">
    <Feature url="/develop/relevant-contracts/ft" title="Elastos SmartWeb dApp" subtitle="Combine the power of blockchain, DIDs, Hive, and Carrier to build an unstoppable application" image="web3.png" />
    <Feature url="/develop/relevant-contracts/ft" title="Fungible Tokens" subtitle="Learn how to use and make FT" image="token.png" />
    <Feature url="/develop/relevant-contracts/nft" title="Non-Fungible Tokens" subtitle="Enter the NFT space" image="ticket.png" />
  </Column>
</FeatureList>

---

## Other Resources

Here are more sites from our ecosystem that can help you to learn more about Elastos.

<div class="container">
  <div class="row">
   <div class="col col--6">
      <a href="https://www.elastos.org/">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/elastos-org.png").default} alt="Nomicon" />
          </div>
          <div class="card__body">
            <h3>Explore</h3>
              See the official Elastos Foundation website.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="https://elastos.info/ecosystem/">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/elastos-info.png").default} alt="Discover" />
          </div>
          <div class="card__body">
            <h3>Discover</h3>
            Discover apps in the Elastos ecosystem.
          </div>
        </div>
      </a>
    </div>
     <div class="col col--6">
      <a href="https://www.cyberrepublic.org/">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/cyber-republic.png").default} alt="Discover" />
          </div>
          <div class="card__body">
            <h3>Govern</h3>
            Participate in the policy arm of the Elastos smart web.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="https://github.com/elastos/">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/github.png").default} alt="Validate" />
          </div>
          <div class="card__body">
            <h3>Verify</h3>
            View the official code repositories for all Elastos core technologies.
          </div>
        </div>
      </a>
    </div>
   
  </div>
</div>

<hr class="subsection" />

## Contact us

If you have any questions, or simply would want to chat with us, please do through one of our official channels.

<br/>

<div class="container">
  <div class="row">
   <div class="col col--2">
      <div class="avatar">
        <img
          class="avatar__photo"
          src={require("@site/static/docs/assets/home/discord.png").default} />
        <div class="avatar__intro">
          <div class="avatar__name">Discord</div>
          <small class="avatar__subtitle"><a href="https://discord.gg/elastos">Elastos Official</a></small>
        </div>
      </div>
    </div>
    <div class="col col--2">
      <div class="avatar">
        <img
          class="avatar__photo"
          src={require("@site/static/docs/assets/home/twitter.png").default} />
        <div class="avatar__intro">
          <div class="avatar__name">Twitter</div>
          <small class="avatar__subtitle"><a href="https://twitter.com/@elastosinfo">elastosinfo</a></small>
        </div>
      </div>
    </div>
  </div>
</div>
