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

<h1 class="text-center big-title" > Browse the Docs By Topic </h1>

<FeatureList>
  <Column title="Understanding Elastos" size="3">
    <Feature url="/concepts/basics/protocol" title="What is Elastos?" subtitle="Learn the Basics about Elastos" image="near-logo.png" />
    <Feature url="/concepts/basics/accounts/account-id" title="Named Accounts" subtitle="Elastos uses human-readable accounts" image="user.png" />
    <Feature url="/concepts/basics/accounts/access-keys" title="Multiple Access Keys" subtitle="More keys means more security" image="key.png" />
    <Feature url="/concepts/basics/smartcontracts/smartcontracts" title="Smart Contracts" subtitle="Learn about our contract technology" image="contract.png" />
    <Feature url="/concepts/basics/tokens" title="Token" subtitle="Learn about the ELA token" image="ft.png" />
    <Feature url="/concepts/basics/transactions/overview" title="Transactions" subtitle="Fast and Inexpensive" image="transaction.png" />
    <Feature url="/concepts/basics/validators" title="Validators" subtitle="Learn how the network stays safe" image="validation.png" />
  </Column>
  <Column title="Developer Documentation" size="3">
    <Feature url="/develop/quickstart-guide" title="Quickstart" subtitle="Spin-up your first dApp" image="quickstart.png" />
    <Feature url="/tutorials/welcome" title="Tutorials & Examples" subtitle="Check-out a bast library of examples" image="tutorials.png" />
    <Feature url="/develop/contracts/introduction" title="Build a Contract" subtitle="Learn how to write smart contracts" image="smartcontract.png" />
    <Feature url="/develop/testing/introduction" title="Test the Contract" subtitle="Write unit & integration tests" image="test.png" />
    <Feature url="/develop/integrate/frontend" title="Build a Web Frontend" subtitle="Learn how to make a web dApp" image="frontend.png" />
    <Feature url="/tools/realtime" title="Monitor your App" subtitle="Learn how to track the Blockchain" image="monitor.png" />
  </Column>
  <Column title="Developer Tools" size="3">
    <Feature url="/tools/near-sdk-js" title="Javascript SDK" subtitle="Write Contracts in Javascript" image="smartcontract-js.png" />
    <Feature url="/tools/near-sdk-rs" title="Rust SDK" subtitle="Write Contracts in Rust" image="smartcontract-rust.png" />
    <Feature url="/tools/near-cli" title="NEAR CLI" subtitle="Use NEAR from the Terminal" image="near-cli.png" />
    <Feature url="/tools/near-api-js/quick-reference" title="NEAR API JS" subtitle="Interact with NEAR from JS" image="near-api-js.png" />
    <Feature url="/api/rpc/introduction" title="RPC API" subtitle="Interact with the NEAR RPC API" image="rpc.png" />
  </Column>
  <Column title="Examples & Tutorials" size="3">
    <Feature url="/develop/relevant-contracts/ft" title="Fungible Tokens" subtitle="Learn how to use and make FT" image="ft.png" />
    <Feature url="/develop/relevant-contracts/nft" title="Non-Fungible Tokens" subtitle="Enter the NFT space" image="nft.png" />
    <Feature url="/develop/relevant-contracts/dao" title="Autonomous Organizations" subtitle="Understand DAOs" image="dao.png" />
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
          src={require("@site/static/docs/assets/home/twitter.png").default} />
        <div class="avatar__intro">
          <div class="avatar__name">Twitter</div>
          <small class="avatar__subtitle"><a href="https://twitter.com/@elastosinfo">elastosinfo</a></small>
        </div>
      </div>
    </div>
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
  </div>
</div>
