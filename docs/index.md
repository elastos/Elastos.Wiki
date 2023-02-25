---
id: welcome
hide_title: true
hide_table_of_contents: true
---

import {FeatureList, Column, Feature} from "@site/components/featurelist"

<br/>
<br/>

<div class="container">
  <div class="row">
  <h1 style={{fontSize: "4em"}}>The <span style={{color: "#7f2bee"}}>Elastos</span> Wiki</h1>
  <div style={{fontSize: "1.15em", marginBottom: "1.5em"}}>The official source of truth for the Elastos ecosystem, providing comprehensive documentation, community resources, and instructional guides for those interested in learning about or building on Elastos.</div>
</div>
</div>

<div>
  <div class="row">
    <div class="col col--6">
      <a href="/start/introduction">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/understanding2.png").default} alt="Learn" />
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
            <img src={require("@site/static/docs/assets/welcome-pages/develop1.png").default} alt="Develop" />
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

<h1 class="text-center" > Browse the Wiki by Topic </h1>

<FeatureList>
  <Column title="Understanding Elastos" size="4">
    <Feature url="/start/introduction" title="What is Elastos?" subtitle="Learn the basics about Elastos" image="elastos-logo.png" />
     <Feature url="/learn/architecture" title="Multichain Architecture" subtitle="Learn about our blockchain stack" image="architecture.png" />
    <Feature url="/start/dids" title="Sovereign Identities" subtitle="Learn about decentralized identifiers (DIDs)" image="identity.png" />
    <Feature url="/learn/hive/intro" title="Data Vaults" subtitle="Own your data with off-chain storage vault solutions" image="hive.png" />
    <Feature url="/learn/carrier/intro" title="P2P Network" subtitle="Safe network for transmitting data" image="carrier.png" />
    <Feature url="/start/utility" title="Token" subtitle="Learn about the ELA token" image="ela.png" />
    <Feature url="/learn/mainchain/intro" title="Consensus" subtitle="Learn how the network is secured" image="validation.png" />
  </Column>
  <Column title="Developer Documentation" size="4">
    <Feature url="/develop/quick-start" title="Quick Start" subtitle="Creating your first dApp" image="hello.png" />
    <Feature url="/develop/dids/essentials" title="Interact with DIDs" subtitle="Use DIDs for your dApps" image="did-document.png" />
    <Feature url="/develop/contracts/whatisacontract" title="Build a Contract" subtitle="Learn how to write and deploy contracts to the Elastos Smart Chain" image="smartcontract.png" />
    <Feature url="/develop/integrate/frontend" title="Connect a Web Frontend" subtitle="Learn how to build a web dApp" image="frontend.png" />
    <Feature url="/develop/hive/connect" title="Store User Data" subtitle="Learn how to access Hive data vaults" image="hive-key.png" />
    <Feature url="/tutorials/fts/simple-fts" title="Fungible Tokens" subtitle="Learn how to use and make FT" image="token.png" />
    <Feature url="/tutorials/nfts/create-nft" title="Non-Fungible Tokens" subtitle="Enter the NFT space" image="ticket.png" />
  </Column>
  <Column title="Developer Tools" size="4">
    <Feature url="/api/providers" title="Public Endpoints" subtitle="Interact with Elastos blockchains" image="transaction.png" />
    <Feature url="/sdk/general/connectivity/introduction" title="Connectivity SDK" subtitle="Interact with Elastos using Typescript" image="elastos-api-ts.png" />
    <Feature url="/api/mainchain/cli" title="Mainchain APIs" subtitle="Use the Mainchain CLI or RPC API" image="elastos-cli.png" />
    <Feature url="/api/sidechains/esc/cli" title="Smart Chain APIs" subtitle="Use the ESC CLI or RPC API" image="elastos-rpc.png" />
    <Feature url="/sdk/did/js/introduction" title="Identity SDKs" subtitle="Work with DIDs using JS, C/C++, Java, or Swift" image="did-sdk.png" />
    <Feature url="/sdk/hive/js/introduction" title="Hive SDKs" subtitle="Interact with Hive using JS, Java, or Swift" image="hive-sdk.png" />
    <Feature url="/sdk/carrier/js/getting-started" title="Carrier SDKs" subtitle="Interact with Carrier" image="carrier-sdk.png" />
  </Column>

</FeatureList>

---

## Other Resources

Here are more sites from our ecosystem that can help you to learn more about Elastos.

<div>
  <div class="row cards">
   <div class="col col--6">
      <a href="https://www.elastos.org/">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/elastos-org.png").default} alt="Nomicon" />
          </div>
          <div class="card__body">
            <h3>Explore</h3>
              See the official Elastos website.
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

<hr />

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
     <div class="col col--3">
      <div class="avatar">
        <img
          class="avatar__photo"
          src={require("@site/static/docs/assets/home/telegram.png").default} />
        <div class="avatar__intro">
          <div class="avatar__name">Telegram</div>
          <small class="avatar__subtitle"><a href="https://t.me/elastosgroup/1">Elastos Community</a></small>
        </div>
      </div>
    </div>
  </div>
</div>
