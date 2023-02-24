---
title: Introduction
---

The implementation of DID Javascript SDK accords with W3C’s [DID specification](https://www.w3.org/TR/did-core/) and the specification of verifiable credentials, and it mainly implements the following function sets:

- DID and DIDDocument
- Verifiable credential
- Verifiable presentation
- Hierarchical Deterministic DIDs (similar with [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki))
- Secure local DID objects store
- DID and credential publishing mechanism based on Elastos ID side chain

In addition (since [JSON Web Token (JWT)](https://jwt.io/) is widely used), while the key pair of DID can be used for signing and verifying JWT, Elastos DID SDK integrates the support of JWT, which provides applications with a safe and convenient way to use JWT, without any risk of secret key leakage. JWT integrated with JavaScript SDK offers the following support:

- JWT
- JWS (algorithm: ECDSA using P-256 and SHA-256)
- Claims assertions
- Claim POJO marshaling and unmarshaling

:::info
Source code located at https://github.com/elastos/Elastos.DID.JS.SDK.git.
:::
