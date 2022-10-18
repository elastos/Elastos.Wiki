---
title: Requirements
---

# Requirements

Generally, a new Linux operation system is required to run an Elastos node.

## User Requirements

This guide is mostly intended for the user who:

- Feels **comfortable with Linux** or similar **POSIX shell environment**
- Has the budgets to access a **cloud computing**: [Amazon EC2](https://aws.amazon.com/ec2/), [Microsoft Azure VM](https://azure.microsoft.com/en-us/services/virtual-machines/), [Google Cloud Compute Engine](https://cloud.google.com/compute/)
- or has space to place a server

## Public Network Requirements

- Use the **non-metered connection** to prevent a high usage billing
- A Public IP

## Server Hardware Requirements

If you install all the components of the Elastos blockchain:

- **CPU**: **2 cores** or more
- **RAM**: **16 GB** or more
- **HDD**: **200 GB** or more
  - A solid-state drive (SSD) is a plus but not a must. A hard drive (HDD) should be OK.
  - The disk usage will always increase because blockchains are growing. You should keep an eye on your disk to make sure it is big enough to hold all the programs.

A single chain may require fewer resources, for example, you only install the mainchain as a normal verification node.

## Server Software Requirements

- **OS**: **Ubuntu 20.04 LTS** 64 Bit (Intel x86_64) or newer
  - Use **Ubuntu** because the Elastos blockchain developers use macOS and Ubuntu to do the development and testing. But it is your freedom of choice of other distributions.
  - **LTS** is better because LTS has a longer product life than the **non-LTS** version. (See [Ubuntu Releases](https://wiki.ubuntu.com/Releases))
  - The script prefers a **freshly installed** OS because it reduces conflicts with the old setup. It is time-consuming to debug such conflicts and do the related support work.

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
