---
title: Quick Setup
---

:::info
This quick setup guide is intended for regular validator nodes. If you're a CR council member, please follow the [detailed setup](/nodes/advanced) as you will need to run all services.
:::

### 1. Preparation

Configure your server according to the [requirements](/nodes/requirements/#minimum-hardware-configuration).

:::caution
If you opt to use the minimum hardware requirements (i.e. 8GB RAM), it may be helpful to add some swap space to your machine to handle any activity spikes that could cause your memory to hit capacity and result in a node crash. 'Swap space' allocates some of your normal HDD/SDD to be used as RAM as a safety buffer.

The following script is an example of how you could add 8 GB of swap space to your machine.

```bash
sudo fallocate -l 8G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo cp /etc/fstab /etc/fstab.bak
echo '/swapfile swap swap defaults 0 0' | sudo tee -a /etc/fstab
```

:::

### 2. Download the Automatic Script

The following shell command will **download** the current version of the **script** and make it **executable**.

```bash
$ mkdir ~/node
$ cd ~/node
$ curl -O https://raw.githubusercontent.com/elastos/Elastos.Node/master/build/skeleton/node.sh
$ chmod a+x node.sh
```

### 3. Initialize the ELA Program

The **init** command will do the following jobs automatically:

1. Downloads and extract the prebuilt package
2. Prompts the user to enter the initial parameters (choose a strong password)
3. Writes the config files required

```bash
$ ~/node/node.sh ela init
```

```
Please input a password (ENTER to use a random one)
? Password:
Generating random password...
Saving ela keystore password...
Checking ela keystore...
ADDRESS                            PUBLIC KEY
---------------------------------- ---------------------------------------------------------
EUX2Zz1r9bc6GtCHCD1qWfGEKzuY...... 03af7417cfef028a8138394c5fecb708b40b7dd512381a56a96......
---------------------------------- ---------------------------------------------------------
```

:::info
You must update the nodepublickey through the [Essentials App](/start/essentials/#essential-links), and complete the binding of the registered node in your wallet to the server node. This is necessary to participate as a validator and to gain rewards
:::

```
INFO: ela config file: /home/ubuntu/node/ela/config.json
INFO: ela keystore file: /home/ubuntu/node/ela/keystore.dat
INFO: ela keystore password file: /home/ubuntu/.config/elastos/ela.txt
OK: ela initialized
```

The `init` command will try to find the server's public IP automatically, and record the result in ela config file. You can check it by running:

```bash
$ cat ~/node/ela/config.json | jq .Configuration.DPoSConfiguration.IPAddress
```

### 4. Start the ELA Program

The **start** command will start the `ELA` program in the background. This will begin synchronizing block data on the mainchain. This may take several hours to complete.

```bash
$ ~/node/node.sh ela start
```

### 5. Check the Status

The **status** command will show all programs (chains) that are currently running. Watch the **height** to make sure the chain(s) is synchronized.

```bash
$ ~/node/node.sh status
```

To check the **status** of only the mainchain, use:

```bash
$ ~/node/node.sh ela status
```

Now the initial **setup is complete**.

For a more detailed setup and usage, please refer to [the longer edition](/nodes/advanced).

### Upgrade Tools

Use [Elastos.ELA.MiscTools](https://github.com/elastos/Elastos.ELA.MiscTools) to quickly complete node upgrades. Instructions will generally be provided when major releases are announced.
