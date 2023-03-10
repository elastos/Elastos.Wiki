---
title: Validator Requirements
---

Elastos Supernodes are responsible for validating blocks produced by [Bitcoin merge miners](/learn/mainchain/auxpow) via the [bonded proof-of-stake (BPoS)](/learn/mainchain/bpos) consensus model, as part of the mainchains overarching [Elastic Consensus](/learn/mainchain/intro/#elastic-consensus) design.

For a detailed description of BPoS mechanics, please visit [here](/learn/mainchain/bpos).

For a better understanding of Elastos' economics, please visit the [economics](/start/economics) page.

:::warning Attention!
Only [Cyber Republic Council](/start/governance/#council) members are required to run all services! Regular [BPoS](/learn/mainchain/bpos) operators can simply run the mainchain, which requires far fewer computational resources. Check the hardware [requirements](/nodes/requirements/#minimum-hardware-configuration) for more information.
:::

## User Requirements

This guide is mostly intended for the user who:

- Feels **comfortable with Linux** or similar **POSIX shell environment**
- Has the budget to access **cloud computing** or **virtual private server** resources, or has the ability to stand up their own server

## Minimum Hardware Configuration

If you are a **normal validator**, only the ELA (mainchain) service needs to be installed:

- **CPU**: **2 cores** or more
- **RAM**: **4 GB** or more
- **Storage**: **100 GB** or more (total size as of March 2023 is ~50 GB)

If you are a **CR Council member**, all services (ELA, ESC, EID, oracles, and arbiter) must be installed:

- **CPU**: **4 cores** or more
- **RAM**: **16 GB** or more
- **Storage**: **400 GB** or more (total size as of March 2023 is ~200 GB)

A solid-state drive (SSD) is generally preferred but not a must. A hard drive (HDD) should be OK, especially to just run the mainchain.

:::tip
The disk usage will always increase because the blockchains are growing. You should keep an eye on your disk to make sure it is big enough to hold all the programs.
:::

### Reference Configurations

There are many options to choose from when selecting a hosting provider. Several instance options along with hardware specs and rough pricing estimates are tabulated below. These lists are intended only as a means of comparison and are not inteded to be an exhaustive index of all possible server solutions.

#### Mainchain Only (Normal Validators)

| Provider      | Type  | Model                                                                                                                                                                                                                                     | CPUs | RAM (GB) | SSD Storage (GB) | Price (Month) USD |
| ------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | -------- | ---------------- | ----------------- |
| AWS           | Cloud | [t3.medium](https://aws.amazon.com/ec2/instance-types/t3/)                                                                                                                                                                                | 2    | 4        | 100\*            | ~$50              |
| Alibaba       | Cloud | [ecs.g7a.large](https://www.alibabacloud.com/product/ecs?spm=a3c0i.7938564.8215766810.6.7781441eAKGfKr)                                                                                                                                   | 2    | 8        | 100              | ~$60              |
| Tencent       | Cloud | [S6.MEDIUM4](https://www.tencentcloud.com/pricing/cvm?devPayMode=hourly&regionId=33&zoneId=330001&instanceType=S6.MEDIUM2&imageType=linux&systemDiskType=CLOUD_BSSD&systemDiskSize=50&bandwidthType=TRAFFIC_POSTPAID_BY_HOUR&bandwidth=5) | 2    | 4        | 100              | ~$60              |
| Digital Ocean | Cloud | [Basic Droplet](https://www.digitalocean.com/pricing/droplets)                                                                                                                                                                            | 2    | 4        | 80               | ~$25              |
| Hetzner       | VPS   | [CPX21](https://www.hetzner.com/cloud)                                                                                                                                                                                                    | 3    | 4        | 80               | ~$10              |
| Netcup        | VPS   | [VPS 500 G10](https://www.netcup.eu/bestellen/produkt.php?produkt=2992)                                                                                                                                                                   | 4    | 4        | 80               | ~$7               |
| Contabo       | VPS   | [Cloud VPS S](https://contabo.com/en/vps/vps-s-ssd/?image=ubuntu.267&qty=1&contract=1&storage-type=vps-s-200-gb-ssd)                                                                                                                      | 4    | 8        | 200              | ~$6               |

#### All Services (Only CR Council Members)

| Provider | Type      | Model                                                                                                                                                                                                                                     | CPUs | RAM (GB) | SSD Storage (GB) | Price (Month) USD |
| -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | -------- | ---------------- | ----------------- |
| AWS      | Cloud     | [t3.xlarge](https://aws.amazon.com/ec2/instance-types/t3/)                                                                                                                                                                                | 4    | 16       | 400\*            | ~$175             |
| Tencent  | Cloud     | [S6.LARGE16](https://www.tencentcloud.com/pricing/cvm?devPayMode=hourly&regionId=33&zoneId=330001&instanceType=S6.MEDIUM2&imageType=linux&systemDiskType=CLOUD_BSSD&systemDiskSize=50&bandwidthType=TRAFFIC_POSTPAID_BY_HOUR&bandwidth=5) | 4    | 16       | 400\*            | ~$180             |
| Alibaba  | Cloud     | [ecs.g7a.xlarge](https://www.alibabacloud.com/product/ecs?spm=a3c0i.7938564.8215766810.6.7781441eAKGfKr)                                                                                                                                  | 4    | 16       | 400\*            | ~$150             |
| OVH      | Dedicated | [Rise-1](https://www.ovhcloud.com/en/bare-metal/rise/rise-1/)                                                                                                                                                                             | 6    | 32       | 1000\*           | ~$85              |
| Hetzner  | VPS       | [CPX41](https://www.hetzner.com/cloud)                                                                                                                                                                                                    | 8    | 16       | 500\*            | ~$60              |
| Netcup   | VPS       | [VPS 4000 G10](https://www.netcup.eu/vserver/vps.php)                                                                                                                                                                                     | 12   | 24       | 960              | ~$30              |
| Contabo  | VPS       | [Cloud VPS L](https://contabo.com/en/vps/vps-l-ssd/?image=ubuntu.267&qty=1&contract=1&storage-type=vps-m-400-gb-ssd)                                                                                                                      | 8    | 30       | 800              | ~$20              |

_\* Additional storage needs to be configured when ordering_

## Server Software Requirements

- **OS**: **Ubuntu 20.04 LTS** 64 Bit (Intel x86_64) or newer
  - **Ubuntu** is the recommended as the Elastos blockchain developers use macOS and Ubuntu to do the development and testing, but the nodes should run on other distributions as well.
  - **LTS** is better because LTS has a longer product life than the **non-LTS** version. (See [Ubuntu Releases](https://wiki.ubuntu.com/Releases))
  - The script prefers a **freshly installed** OS because it reduces conflicts with the old setup. It is time-consuming to debug such conflicts and do the related support work.

## Public Network Requirements

- Use the **non-metered connection** to prevent a high usage billing
- A Public IP

## Server Security Rules

The following ports need to be publicly accessible from anywhere (0.0.0.0/0). For a cloud server, please modify the inbound rules.

If you do not need all the chains, please find a required subset by the chain name.

| Chain or Program Name | Protocol and Port Range | Purpose           |
| --------------------- | ----------------------- | ----------------- |
| ELA                   | TCP 20338               | ELA P2P           |
| ELA                   | TCP 20339               | ELA DPoS          |
| DID                   | TCP 20608               | DID P2P           |
| ESC                   | TCP+UDP 20638           | ESC P2P           |
| ESC                   | TCP 20639               | ESC DPoS          |
| EID                   | TCP+UDP 20648           | EID P2P           |
| EID                   | TCP 20649               | EID DPoS          |
| Arbiter               | TCP 20538               | Arbiter P2P       |
| Carrier               | UDP 3478                | Carrier P2P       |
| Carrier               | TCP 33445               | Carrier TCP Relay |
| Carrier               | UDP 33445               | Carrier P2P       |
