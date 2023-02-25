---
title: Explanation of config.json
---

:::tip
The config.json file is optional, you can run an Elastos node without a config.json file.
:::

## Change Network

To switch networks, simply modify the ActiveNet parameter in the config.json file.

```js
{
  "Configuration": {
    "ActiveNet": "testnet"
  }
}
```

## Inline Details

```js
{
"Configuration": {
"ActiveNet": "mainnet", // Network type. Choices: mainnet testnet and regnet
WalletPath:"keystore.dat",// WalletPath defines the wallet path used by DPoS arbiters and CR members.
"Magic": 2017001, // Magic Number：Segregation for different subnet. No matter the port number, as long as the magic number not matching, nodes cannot talk to each others
"DNSSeeds": [ // DNSSeeds. DNSSeeds defines a list of DNS seeds for the network that are used to discover peers.
"node-mainnet-001.elastos.io:20338"
],
"DisableDNS": false, // DisableDNS. Disable the DNS seeding function.
"CoinbaseMaturity": "", // CoinbaseMaturity is the number of blocks required before newly mined coins (coinbase transactions) can be spent.
"CheckAddressHeight": "",
"MinTransactionFee": "", // MinTransactionFee defines the minimum fee of a transaction.
"PowLimit": "", // PowLimit defines the highest allowed proof of work value for a block as a uint256.
"PowLimitBits": "", // PowLimitBits defines the highest allowed proof of work value for a block in compact form.
"TargetTimespan": "", // TargetTimespan is the desired amount of time that should elapse before the block difficulty requirement is examined to determine how it should be changed in order to maintain the desired block generation rate.
"TargetTimePerBlock": "",// TargetTimePerBlock is the desired amount of time to generate each block.
"AdjustmentFactor": "", // AdjustmentFactor is the adjustment factor used to limit the minimum and maximum amount of adjustment that can occur between difficulty retargets.
"RewardPerBlock": "", // RewardPerBlock is the reward amount per block.
"PermanentPeers": [ // PermanentPeers. Other nodes will look up this seed list to connect to any of those seed in order to get all nodes addresses, if lost connection will try to connect again
"127.0.0.1:20338"
],
MaxNodePerHost: 72,//MaxNodePerHost defines max nodes that one host can establish.
"HttpInfoPort": 20333, // Local web portal port number. User can go to http://127.0.0.1:10333/info to access the web UI
"HttpInfoStart": true, // Whether to enable the HTTPInfo service
"HttpRestPort": 20334, // Restful port number
"HttpRestStart": true, // Whether to enable the REST service
"HttpWsPort": 20335, // Websocket port number
"HttpWsStart": true, // Whether to enable the WebSocket service
"HttpJsonPort": 20336, // RPC port number
"EnableRPC": true, // Enable the RPC service
"NodePort": 20338, // P2P port number
"PrintLevel": 0, // Log level. Level 0 is the highest, 5 is the lowest
"MaxLogsSize": 0, // Max total logs size in MB
"MaxPerLogSize": 0, // Max per log file size in MB
"MinCrossChainTxFee": 10000, // Minimal cross-chain transaction fee
"Foundation": "", //Foundation defines the foundation address which receiving mining
"PowConfiguration": {
"PayToAddr": "", // Pay bonus to this address. Cannot be empty if AutoMining set to "true"
"AutoMining": true, // Start mining automatically? true or false
"MinerInfo": "ELA", // No need to change
"MinTxFee": 100, // Minimal mining fee
"InstantBlock": false // false: high difficulty to mine block true: low difficulty to mine block
},
"RpcConfiguration": {
"User": "ElaUser", // Check the username when use rpc interface, null will not check
"Pass": "Ela123", // Check the password when use rpc interface, null will not check
"WhiteIPList": [ // Check if ip in list when use rpc interface, "0.0.0.0" will not check
"127.0.0.1"
]
},
"DPoSConfiguration": {
"EnableArbiter": false, // EnableArbiter enables the arbiter service.
"Magic": 2019000, // The magic number of DPoS network
"IPAddress": "192.168.0.1", // The public network IP address of the node.
"DPoSPort": 20339, // The node prot of DPoS network
"SignTolerance": 5, // The time interval of consensus in seconds
"OriginArbiters": [ // The publickey list of arbiters before CRCOnlyDPOSHeight
"02f3876d0973210d5af7eb44cc11029eb63a102e424f0dc235c60adb80265e426e",
"03c96f2469b43dd8d0e6fa3041a6cee727e0a3a6658a9c28d91e547d11ba8014a1",
"036d25d54fb7a40bc7c3e836a26c9e30d5294bc46f6918ad61d0937960f13307bc",
"0248ddc9ac60f1e5b9e9a26719a8a20e1447e6f2bbb0d31597646f1feb9704f291",
"02e34e47a06955ef1ec0d325c9edada34a0df6e519530344cc85f5942d061223b3"
],
"CRCArbiters": [ // The crc arbiters after CRCOnlyDPOSHeight
"02eae9164bd143eb988fcd4b7a3c9c04a44eb9a009f73e7615e80a5e8ce1e748b8",
"0294d85959f746b8e6e579458b41eea05afeae50f5a37a037de601673cb24133d9",
"03b0a3a16edfba8d9c1fed9094431c9f24c78b8ceb04b4b6eeb7706f1686b83499",
"0222461ae6c9671cad288f10469f9fd759912f257c64524367dc12c40c2bb4046d"
],
"NormalArbitratorsCount": 24, // The count of voted arbiters
"CandidatesCount": 72, // The count of candidates
"EmergencyInactivePenalty": 50000000000, // EmergencyInactivePenalty defines the penalty amount the emergency producer takes.
"MaxInactiveRounds": 1440, // MaxInactiveRounds defines the maximum inactive rounds before producer takes penalty.
"InactivePenalty": 10000000000, // InactivePenalty defines the penalty amount the producer takes.
"PreConnectOffset": 360 // PreConnectOffset defines the offset blocks to pre-connect to the block producers.
},
"CRCAddress": "", // CRCAddress defines the CRC address which receiving mining rewards.
"CRAssetsAddress": "", // CRAssetsAddress defines the CR assets address address.
"CRExpensesAddress": "", // CRExpensesAddress defines the CR committee address which receiving appropriation from CR assets address.
"DestroyELAAddress": "", // DestroyELAAddress defines address which receiving destroyed ELA.
"GenesisBlock": "", // GenesisBlock defines the first block of the chain.
"DPoSMagic": "", // DPoSMagic defines the magic number used in the DPoS network.
"SecretaryGeneral": "", // SecretaryGeneral defines the secretary general of CR by public key.
"CRConfiguration": {
"MemberCount": 12, // The count of CR committee members
"VotingPeriod": 21600, // CRVotingStartHeight defines the height of CR voting started
"DutyPeriod": 262800 // CRDutyPeriod defines the duration of a normal duty period which measured by block height
},
"MaxProposalTrackingCount": "",// MaxProposalTrackingCount defines the max count of CRC proposal tracking transaction
"CheckAddressHeight": 88812, // Before the height will not check that if address is ela address
"VoteStartHeight": 88812, // Starting height of statistical voting
"CRCOnlyDPOSHeight": 1008812, // The height start DPOS by CRC producers
"PublicDPOSHeight": 1108812, // The height start DPOS by CRCProducers and voted producers
"CRVotingStartHeight": 1800000,// CRVotingStartHeight defines the height of CR voting started
"CRCommitteeStartHeight": 2000000, // CRCommitteeStartHeight defines the height of CR Committee started
"EnableActivateIllegalHeight": 439000, // The start height to enable activate illegal producer though activate tx
"EnableUtxoDB": true, //Whether the db is enabled to store the UTXO
"CRClaimDPOSNodeStartHeight": 751400,// CRClaimDPOSNodeStartHeight defines the height of CR claim DPOS node started.
"CRClaimDPOSNodePeriod": 720 _ 14, // CRClaimDPOSNodePeriod defines the period of CR claim DPOS node.
CheckRewardHeight: 436812, // CheckRewardHeight defines the height to check reward in coin base with new check function.
VoteStatisticsHeight: 512881, // VoteStatisticsHeight defines the height to deal with block with vote
RegisterCRByDIDHeight: 598000, // RegisterCRByDIDHeight defines the height to support register and update CR by CID and CID.
ToleranceDuration: 5, // ToleranceDuration defines the tolerance duration of the DPoS consensus.
IllegalPenalty: 0, // InactivePenalty defines the penalty amount the producer takes.
GeneralArbiters: 24, // GeneralArbiters defines the number of general(no-CRC) arbiters.
CandidateArbiters: 72, // andidateArbiters defines the number of needed candidate arbiters.
CRDepositLockupBlocks: 2160, // DepositLockupBlocks indicates how many blocks need to wait when cancel producer or CRC was triggered, and can submit return deposit coin request
ProposalCRVotingPeriod: 7 _ 720, // ProposalCRVotingPeriod defines the duration of CR voting about a proposal
ProposalPublicVotingPeriod: 7 _ 720, // ProposalPublicVotingPeriod defines the duration of all voters send reject vote about a proposal
CRAgreementCount: 8, // CRAgreementCount defines minimum count to let a registered proposal transfer to CRAgreed state.
VoterRejectPercentage: 10, // VoterRejectPercentage defines percentage about voters reject a proposal.
CRCAppropriatePercentage: 10, // CRCAppropriatePercentage defines percentage about CRC appropriation.
MaxCommitteeProposalCount: 128,// MaxCommitteeProposalCount defines per committee max proposal count.
EnableCORS: false,// Enable cors for http server.
TxCacheVolume: 100000,// TxCacheVolume defines the default volume of the transaction cache.
CheckVoteCRCountHeight: 658930,// CheckVoteCRCountHeight defines the height to check count of vote CR.
MaxCRAssetsAddressUTXOCount: 800,// MaxCRAssetsAddressUTXOCount defines the max UTXOs count of CRFoundation address
MinCRAssetsAddressUTXOCount: 720, // MinCRAssetsAddressUTXOCount defines the min UTXOs count of CRFoundation
CRAssetsRectifyTransactionHeight:751400, // CRAssetsRectifyTransactionHeight defines the CR rectify transaction start height
CRCProposalWithdrawPayloadV1Height: 751400,// CRCProposalWithdrawPayloadV1Height defines the CRC proposal withdraw payload height
CRCProposalV1Height: 751400,// CRCProposalV1Height defines the height to support ChangeProposalOwner, CloseProposal and SecretaryGeneral proposal.
RectifyTxFee: 10000,// RectifyTxFee defines the fee of cr rectify transaction.
RealWithdrawSingleFee: 10000,// RealWithdrawSingleFee defines the single fee of cr real proposal withdraw transaction.
NewP2PProtocolVersionHeight: 751400,// NewP2PProtocolVersionHeight defines the new p2p protocol version message height.
ChangeCommitteeNewCRHeight: 932530,// ChangeCommitteeNewCRHeight defines the new arbiter logic after change committee.
CustomIDProposalStartHeight: 932530,// CustomIDProposalStartHeight defines the height to allow custom ID related transaction.
NoCRCDPOSNodeHeight: 932530,// NoCRCDPOSNodeHeight indicates the height when there is no DPOS node of CRC.
RevertToPOWStartHeight: 932530,// RevertToPOWStartHeight defines the start height to allow to revert to POW mode.
RandomCandidatePeriod: 36 _ 10,// RandomCandidatePeriod defines the period to get a candidate as DPOS node at random.
MaxInactiveRoundsOfRandomNode: 36 _ 8,// MaxInactiveRoundsOfRandomNode defines the maximum inactive rounds before the producer at random takes penalty.
MaxReservedCustomIDLength: 255,// MaxReservedCustomIDLength defines the max length of reserved custom id.
CRCProposalDraftDataStartHeight: 1056600,// CRCProposalDraftDataStartHeight defines the proposal draft data start height.
DPOSNodeCrossChainHeight: 2000000,// DPOSNodeCrossChainHeight defines the height at which not only CR members are responsible for working across the chain.
RevertToPOWNoBlockTime: 12 _ 3600,// RevertToPOWInterval defines how long time does it take to revert to POW mode.
StopConfirmBlockTime: 11 \* 3600,// StopConfirmBlockTime defines how long time dose it take before stop confirm block.
HalvingRewardHeight: 1051200,// HalvingRewardHeight represents the height of halving reward
HalvingRewardInterval: 1051200, // HalvingRewardInterval represents the interval of halving reward
NewELAIssuanceHeight: 919800, // NewELAIssuanceHeight represents the new issuance ELA amount after proposal
SmallCrossTransferThreshold: 100000000,// SMALLCrossTransferThreshold indicates the minimum amount consider as Small transfer
ReturnDepositCoinFee: 100, // ReturnDepositCoinFee indicates the fee the
NewCrossChainStartHeight: 1032840,// NewCrossChainStartHeight defines the height of new cross chain transaction started.
ReturnCrossChainCoinStartHeight: 1032840,// ReturnCrossChainCoinStartHeight indeicates the start height of ReturnCroossChainDepositCoin transaction
ProhibitTransferToDIDHeight: 1032840, // Prohibit transfers to did height
}
}
```

### Mainnet Base Config

```js
{
  "Configuration": {
    "PrintLevel": 0,
    "PowConfiguration": {
      "PayToAddr": "8VYXVxKKSAxkmRrfmGpQR2Kc66XhG6m3ta",
      "MinerInfo": "ELA",
      "MinTxFee": 100
    },
    "EnableRPC": true,
    "RpcConfiguration": {
      "User": "User",
      "Pass": "Password",
      "WhiteIPList": [
        "127.0.0.1"
      ]
    }
  }
}
```

### Testnet Base Config

```js
{
  "Configuration": {
    "ActiveNet": "testnet",
    "Magic": 2018111,
    "PowConfiguration": {
      "PayToAddr": "8ZNizBf4KhhPjeJRGpox6rPcHE5Np6tFx3",
      "MinerInfo": "ELA",
      "MinTxFee": 100
    },
    "EnableRPC": true,
    "RpcConfiguration": {
      "User": "User",
      "Pass": "Password",
      "WhiteIPList": [
        "127.0.0.1"
      ]
    }
  }
}
```
