---
title: Introduction
---

The [Hive](/learn/hive/intro) node service node is the service node of Hive decentralized memory network and needs to run consistently around the clock, providing rich data memory services to users and applications through frontend SDKs. Hive node is an open-source project where any community member or institution can deploy and run according to the installation guide.

All the running Hive nodes constitute the whole Hive memory network. The functional characteristics provided by any Hive memory structure are consistent, but the quality of service provided should be different due to different resource configurations during deployment.

## Internal Services

The [Hive node](/learn/hive/intro) background operation consists of the following sub-services:

- HTTP service
- IPFS node
- MongoDB service

HTTP service is responsible for responding to data memory requests with frontend Hive SDKs through the HTTP protocol. Hive node will save the file data to the local IPFS node, while the unstructured data will be saved by MongoDB service.

This chapter mainly guides community personnel and users how to build and deploy Hive nodes:

- [Node configuration](/nodes/hive/docker-deploy/)
- [Node deployment](/nodes/hive/config/)

And provide HTTP Restful APIs interface specification, expecting community personnel to realize more language versions of frontend SDKs library, and even different language versions of Hive node.

- [HTTP API Reference](https://apidocs.trinity-tech.io/hive-node-https-apis/)

:::info
The Hive node is fully open sourced and can be found at https://github.com/elastos/Elastos.Hive.Node
:::
