---
title: Detailed Setup
---

## Install node.sh

**node.sh** is a wrapper script to help you manage your Elastos supernode relatively easily.

Setting up, operating and maintaining a supernode can involve a lot of work, especially considering the Elastos platform includes multiple blockcahins, components and modes.

**node.sh** simplies this process and provides users with a simple and effective methodology to manage their supernode.

:::info
node.sh integrates some frequently-used operations and provides a command-line interface in an all-in-one, intuitive, and consistent way.
:::

node.sh supports:

- **Operating System**: Ubuntu Linux x86_64 18.04 or higher
- **Elastos Network**: Mainnet
- [**Chains**](overview/programs-supported-by-node.sh.md): Elastos mainchain, sidechains, oracles, and the arbitrator

To begin, create a folder in your $HOME to hold executable files, config files, and data files.

```bash
$ mkdir ~/node
$ cd ~/node
```

Download the current version of the script and make it executable.

```bash
$ curl -O https://raw.githubusercontent.com/elastos/Elastos.Node/master/build/skeleton/node.sh
$ chmod a+x node.sh
```

## Run node.sh

Run the script without any arguments to display the usage.

```bash
$ ~/node/node.sh
```

If the output is similar to the following, then the installation is good.

```bash
Usage: node.sh [CHAIN] COMMAND [OPTIONS]
Manage Elastos Node (/home/ubuntu/node) [mainnet]

Available Chains:

  ela             N/A
  did             N/A
  esc             N/A
  esc-oracle      N/A
  eid             N/A
  eid-oracle      N/A
  arbiter         N/A
  carrier         N/A

Available Commands:

  start           Start chain daemon
  stop            Stop chain daemon
  status          Print chain daemon status
  client          Run chain client
  jsonrpc         Call JSON-RPC API
  update          Install or update chain
  init            Install and configure chain
  compress_log    Compress log files to save disk space
```

Currently, the only supported Elastos network is mainnet.

The first argument **CHAIN** specifies the chain (program) name.

The second one, **COMMAND** specifies the action to perform.

The N/A means a chain has not been installed.

:::info
Please be notified that the CHAIN argument is optional. If it is absent, all chains will be issued COMMAND.
:::

## Installing nodes

The `init` command will download the prebuilt binary package, extract and place the executables in the right place, and write the config files required.

The binary releases are listed for reference. Normally you don't need to manually download them, because `init` commands will download them automatically.

| Chain                     | Binary Packages                                |
| ------------------------- | ---------------------------------------------- |
| Elastos ELA Mainchain     | https://download.elastos.io/elastos-ela        |
| Elastos DID Sidechain     | https://download.elastos.io/elastos-did        |
| Elastos ESC Sidechain     | https://download.elastos.io/elastos-esc        |
| Elastos ESC Oracle        | https://download.elastos.io/elastos-esc-oracle |
| Elastos EID Sidechain     | https://download.elastos.io/elastos-eid        |
| Elastos EID Oracle        | https://download.elastos.io/elastos-eid-oracle |
| Elastos Arbiter           | https://download.elastos.io/elastos-arbiter    |
| Elastos Carrier Bootstrap | https://download.elastos.io/elastos-carrier    |

The `init` command without specifying the chain program name will process the following programs (chains) in one go.

```bash
$ ~/node/node.sh init
```

As an alternative, you can also run the init command one by one.

## Starting individual nodes

Starting a single program.

```bash
$ ~/node/node.sh ela start
Starting ela...
ela         v0.8.3          Running
...
```

Please note that it takes some time to validate the database.

Checking program status.

```bash
$ ~/node/node.sh ela status
ela         v0.8.3          Running
Disk:       360M
PID:        120480
RAM:        1486252K
Uptime:     15:38
#Files:     83
TCP Ports:  IPv4_*:20338 IPv6_*:20338 IPv4_*:20339 IPv6_*:20339 IPv4_*:20336
#TCP:       14
#Peers:     8
Height:     173154
```

| Status Item | Description                                         |
| ----------- | --------------------------------------------------- |
| Disk        | The disk usage in human-readable format             |
| PID         | Process id                                          |
| RAM         | The memory usage in human-readable format           |
| Uptime      | How long the program has been running               |
| #Files      | How many file descriptors opened                    |
| TCP Ports   | The TCP ports listened                              |
| #TCP        | How to many tcp connections                         |
| #Peers      | How many peers connected                            |
| Height      | The height of the chain                             |
| Address     | The ELA address of the first account in keystore    |
| Public Key  | The ELA public key of the first account in keystore |

:::info
Please note that not all chains/programs have the same set of status items. For example, if some programs don't open a TCP port, its status output will not have TCP-related metrics. If some program is not a chain, for example, ESC-Oracle, the status will not have Peer and Height related.
:::

## Starting all nodes

By running the **start** command without chain/program name. All installed chains/programs will be started in a predefined order.

```bash
$ ~/node/node.sh start
[ ... many messages follow ... ]
```

If you wish to check processes status, the resources usage and other metrics.

```
$ ~/node/node.sh status
[ ... many messages follow ... ]
```

## Check node version and status

Now you can check all chain **versions** under Available Chains.

```bash
$ ~/node/node.sh status
```

```bash
ela         v0.8.3          Running
Disk:       20G
Address:    8MjraAMbw6skAPTtBQtEmBo4GrN4qSvko3
Public Key: 036c579f8a7ed991cdfea81ad8dfbce6456bafead163a4697554ea4e28315a1f2e
Balance:    0.00400000
PID:        2021
RAM:        3.9G
Uptime:     8-22:30:20
#Files:     674
TCP Ports:  IPv4_*:20338 IPv6_*:20338 IPv4_*:20339 IPv6_*:20339 IPv4_*:20336 IPv6_*:20334 IPv6_*:20333
#TCP:       151
#Peers:     30
Height:     1276881
DPoS Name:  N/A
DPoS State: N/A
CRC Name:   N/A
CRC State:  N/A

did         v0.3.2          Stopped
Disk:       9.3G

esc         acf34fd         Running
Disk:       57G
Address:    bf66b1bd13295a8e66afc8d6743dc19ae01db603
Balance:    4.982691949257692738
PID:        2347
RAM:        7.5G
Uptime:     8-22:30:17
#Files:     2128
TCP Ports:  IPv4_*:20639 IPv6_*:20639 IPv6_*:20638
#TCP:       69
UDP Ports:  IPv6_*:20638
#Peers:     0
Height:     0

esc-oracle  0cd7ce2         Running
Disk:       3.4G
PID:        2471
RAM:        621M
Uptime:     8-22:30:14
#Files:     35
TCP Ports:  IPv6_*:20632
#TCP:       3

eid         cd3d90f         Running
Disk:       54G
Address:    90cd00e04de2b4a6e73a05866fb79b96335c222e
Balance:    0
PID:        2544
RAM:        5.1G
Uptime:     8-22:30:13
#Files:     866
TCP Ports:  IPv4_*:20649 IPv6_*:20649 IPv6_*:20648 IPv6_*:20646
#TCP:       54
UDP Ports:  IPv6_*:20648
#Peers:     3
Height:     6269178

eid-oracle  1320eba         Running
Disk:       6.1G
PID:        2668
RAM:        621M
Uptime:     8-22:30:07
#Files:     36
TCP Ports:  IPv6_*:20642
#TCP:       4

arbiter     v0.3.1          Running
Disk:       2.1G
PID:        2772
RAM:        851M
Uptime:     8-22:29:49
#Files:     558
TCP Ports:  IPv4_*:20538 IPv6_*:20538 IPv4_*:20536
#TCP:       35
SPV Height: 1276881
DID Height: 597163
ESC Height: 14888619
EID Height: 6937337

carrier     6.0(20210525)   Stopped
Disk:       5.2M

```

## Auto-start when OS Reboot

Enter the command to open the user-level crontab editor. You may be asked to select an editing program.&#x20;

```bash
$ crontab -e
```

Append the following entry to the existing crontab, save and exit.

```bash
@reboot ~/node/node.sh start
```

You may prefer to add multiple start commands if you have not install all the components of Elastos blockchain.

```
@reboot ~/node/node.sh esc start
@reboot ~/node/node.sh eid start
```

Checking the current crontab by running:

```bash
$ crontab -l
```

## Stopping nodes

Stopping a single chain or programs:

```bash
$ ~/node/node.sh esc stop
esc         84b1c5e         Stopped
```

Some chains, especially a busy ESC node, may take a pretty long time to fully exist. Issuing multiple stop commands (more than 10 times) to a running ESC node will force it to stop, this may leave a broken database.

Stopping all programs or chains have been installed.

```bash
$ ~/node/node.sh stop
[ ... many messages follow ... ]
```

Different chains and programs share similar output formats after being stopped. So long output omitted.

## Directory structure

Installing **tree** utility to list contents of directories in a tree-like format.

```bash
$ sudo apt-get install -y tree
[ ... many outputs ... ]
```

If all things work well, you should have the following directory.

```bash
$ tree -L 2 ~/node
~/node                              # root
├── arbiter                         # arbiter folder
│   ├── arbiter                     # arbiter program
│   ├── config.json                 # arbiter config file
│   ├── ela-cli -> ../ela/ela-cli   # link to ela client program
│   ├── elastos_arbiter             # running data and logs (*)
│   └── keystore.dat                # keystore file, copied from ela
│
├── carrier                         # carrier bootstrap folder
│   ├── bootstrapd.conf             # config file
│   ├── ela-bootstrapd              # daemon program
│   └── var                         # running data (*)
│
├── did                             # did folder
│   ├── config.json                 # config file
│   ├── did                         # daemon program
│   └── elastos_did                 # chain data and log (*)
│
├── eid                             # eid folder
│   ├── data                        # running data and logs (*)
│   ├── eid                         # daemon and client program
│   └── logs                        # log files (*)
│
├── eid-oracle                      # eid-oracle folder
│   └── *.js
│
├── ela                             # ela folder
│   ├── config.json                 # config file
│   ├── ela                         # daemon program
│   ├── ela-cli                     # client program, to send commands to ela chain
│   ├── elastos                     # chain data and log (*)
│   └── keystore.dat                # keystore file, the wallet
│
├── esc                             # esc folder
│   ├── data                        # running data and logs (*)
│   ├── esc                         # daemon and client program
│   └── logs                        # log files (*)
│
├── esc-oracle                      # esc-oracle folder
│   └── *.js
│
├── extern
│   └── node-v14.17.0-linux-x64     # nodejs required by esc-oracle and eid-oracle
│
└── node.sh                         # the operating script
```

Please some directories marked with asterisks are running data and logs files, which will be generated during the program running.

## Updating node.sh

If you had already installed the script several weeks ago, it is better to update to get the latest fixes or features.

```bash
$ ~/node/node.sh script_update
```

It will fetch the latest script from the repository, overwrite the old file, and make it executable.

```bash
Downloading https://raw.githubusercontent.com/elastos/Elastos.Node/master/build/skeleton/node.sh...
###################################################################### 100.0%
OK: $HOME/node/node.sh updated
```

Run the new node.sh to see if there are any updates on command-line options.

```bash
$ ~/node/node.sh
```

## Updating an individual node

We can **update a single program** (chain). For example, to update Elastos ELA, please run the following command.

```bash
$ ~/node/node.sh ela update
```

Step 1: The script will contact the [download server](https://download.elastos.io/elastos-ela/) to find the **latest version**.

```bash
Finding the latest ela release...
INFO: Latest version: v0.8.3
```

Step 2: If you wish to continue, please answer the case-sensitive **Yes**. Any other answers will cancel the operation.

```bash
Proceed update (No/Yes)? Yes
Downloading https://download.elastos.io/elastos-ela/elastos-ela-v0.8.3/elastos-ela-v0.8.3-linux-x86_64.tgz...
###################################################################### 100.0%
Extracting elastos-ela-v0.8.3-linux-x86_64.tgz...
```

Step 3: The script will **stop a running program** automatically.

```bash
Stopping ela...
...
ela         v0.8.3          Stopped
```

Step 4: And replace the files with the updated versions.

```bash
'/home/ubuntu/node/.node-upload/ela/ela' -> '/home/ubuntu/node/ela/ela'
'/home/ubuntu/node/.node-upload/ela/ela-cli' -> '/home/ubuntu/node/ela/ela-cli'
```

Step 5: If the script has stopped the program before the file replacement, it will **restart the program** automatically.

```bash
ela         v0.8.3          Running
Disk:       61M
PID:        120480
RAM:        710168K
Uptime:     00:01
#Files:     41
TCP Ports:  IPv4_*:20338 IPv6_*:20338 IPv4_*:20339 IPv6_*:20339 IPv4_*:20336
#TCP:       14
#Peers:     3
Height:     18313
```

Please check the **version** to make sure of a successful program update.

## Compress log files

The **compress_log** will gzip the old log files to save disk space. It will not touch the latest log files, because they are opened by the corresponding daemon programs.

```
$ ./node/node.sh esc compress_log
Compressing log files in /home/ubuntu/node/esc/data/geth/logs/dpos...
Compressing log files in /home/ubuntu/node/esc/data/logs-spv...
Compressing log files in /home/ubuntu/node/esc/logs...
```

If **compress_log** without specifying chain name, it will do gzip to log files of the installed chains.
