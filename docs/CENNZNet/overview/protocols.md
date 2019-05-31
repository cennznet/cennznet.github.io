# CENNZnet Protocols
CENNZnet protocols are built-in runtime modules that define the behaviours of the CENNZnet blockchain. These protocols (as runtime modules) define what data is stored on the chain, how transactions are interpreted and how state transitions are performed. The protocols can interact with each other collectively create the business logic layer of CENNZnet.   

This is different to smart contracts on CENNZnet. Anyone can deploy a smart contract to execute business logic, but it does not impact the in-chain behaviour of CENNZnet and it is executed in a sandbox environment to protect the network. 

CENNZnet is released with a set of protocols that are designed to maximise usability and bootstrapping ability of decentralised applications. These protocols are proposed and documented in the form of a CENNZnet Improvement Proposal (CIP), which are solicited and approved by the community. In the future, the approval of protocols can be incorporated into on-chain governance.

- [Generic Asset] (#GenericAsset) 
- [Attestation] (#Attestation) 
- [Single Sign On] (#SingleSignOn) 
- [Spot Exchange] (#SpotExchange) 

## Generic Asset <a name="GenericAsset"></a>
Generic Asset protocols enables CENNZnet's dual token economy and enables assets being managed and operated natively. Generic Asset protocol defines varied asset types, their properties and operations.

| Asset Type    | AssetID or Range  | Symbol      |     
| ------------- |:-----------------:|:-----------:|
| Staking Token | 0                 | CENNZ       |
| Spending Token| 1                 | CENTRAPAY   |
| Reserved Token| 2 - 16,0000       | e.g. SYLO   |
| User Token    | 17,000 +          |             |
| Test Token    | 16,000 - 17,000   |             |
| Test Staking  | 16,000            | CENNZ-T     |
| Test Spending | 16,001            | CENTRAPAY-T |

CENNZ is the staking token on CENNZnet. CentraPay is the spending token on CENNZnet for paying transaction fees. Refer to [staking](../overview/staking.md) for more details on staking mechanisms on CENNZNet. Refer to [monetary consensus](../overview/monetarypolicy.md) for details of CENNZ as staking token, issuance of CentraPay and how to get CentraPay.

Reserve tokens are tokens required by CENNZnet protocols. Not every protocol requires a token to operate. For example, a Generic Asset does not require an economic model to function, hence there is no token associated with it. However, for protocol that has a token model, reserve tokens are used to manage issuance and permission etc. For example, CENNZnet is released with a communication protocol powered by Sylo and uses the SYLO token to power this service. Again a CIP is required with community support and approval before a reserve token can be created.

User tokens can be created by anyone. Future release will support a smart contract standard for token implementation.

For more details on the CENNZnet token economy, please refer to [monetary consensus](../overview/monetarypolicy.md)

For more details of Generic Asset protocol and specification, please refer to [GA repo](https://github.com/cennznet/cennznet/tree/master/prml/generic-asset).

Refer to [Generic Asset SDK repo](https://github.com/cennznet/cennznet-generic-asset) on how to manage and transfer assets. 

## Attestation <a name="Attestation"></a>
An increasing number of organisations want to reduce the cost of verifying attributes of their customers and the risk of holding their personal information.  The Attestation protocol provides an on-chain claim registry that aims to make sharing attested identity claims simple and cost efficient. 

The protocol provides a registry that holds claims that are made by an **_issuer_** (an address) about a **_holder_** (an address) regarding a **_topic_** (e.g. a passport document) with a **_value_**, which could be a hash of an off-chain attestation document. This makes it possible to verify the document was indeed attested and signed by the **_issuer_** without exposing the user's personal identifiable information. 

Refer to [Attestation protocol repo](https://github.com/cennznet/cennznet/tree/master/prml/attestation) for more details.

Refer to [Attestation SDK](https://github.com/cennznet/crml-identity.js) on how to add claims, remove claims and query claims. 

### Reference Implementation
The SingleSource service is an **_issuer_** implementation and mySingleSource app is an **_holder_** implementation [link]. 
The [18+ app](https://github.com/cennznet/eighteenplusapp) is a demo app that showcases the usage of the entire protocol.

## Single Sign On / Permission <a name="SingleSignOn"></a>
### SingleSource wallet App & SingleSource Extension
The SingleSource wallet App manages your private key and accounts on your device and can be used as a signer for logging into CENNZnet web applications and authoring transactions. The SingleSource web extension can be easily incorporated into any web application to enable this experience. For example, CENNZX Spot excahnge site will integrate with the SingleSource web extension, to enable user seamlessly accessing their SingleSource wallet accounts, and prompts users with QR code to sign with their SingleSource Wallet App when an exchange transaction needs to be signed.

Refer to the [SingleSource Extension Doc](https://cennznetdocs.com/singlesource/gettingStarted) for more details.

MySingleSource Wallet App (Rimu testnet version) can be downloaded from [TestFlight](https://testflight.apple.com/join/gfagbjh7).

SingleSource Extension can be installed from [Chrome Webstore](https://chrome.google.com/webstore/detail/singlesource-extension/ejmefjmgibjjhbfajjipjdimilpndhjl).

Refer to [SingleSource Extension Repo](https://github.com/cennznet/SingleSourceExtension) for more details on incorporating the extension to your web application. 

## Communication
Coming soon...

## Spot Exchange <a name="SpotExchange"></a>
The CENNZX Spot enables seamless fee payment experience on CENNZnet and makes token exchange instant and easy. The CENNZX Spot eliminates rent extraction and centralised services, while prioritising decentralisation, usability and security.

### CENNZX Spot vs Order Book Exchange
Unlike the order book trading exchange model, where there are buy orders and sell orders and the exchange matches up both sides for a trade, CENNZX Spot uses on-chain reserve with automatic pricing and allows users trade directly against its protocol, rather than other traders or market makers. 

As market maker (or liquidity provider) on an order book exchange, you maintain a spread between two assets and slowly accumulate profits, but this usually requires you to have a large amount of initial capital. Whereas on CENNZX Spot, it pulls liquidity from a number of providers, automates pricing and spread and fees are split proportionally to their contribution, hence a much more user friendly and decentralised experience. The protocol does not collect any platform fees. All fees are put back to the pool and collected when liquidity provider exist from the pool. 

### Price Determination
For price determination, it uses constant product market maker, where you lock up reserves of two assets - in CENNZnet it's always CentraPay and one other asset. The protocol keeps the product of two assets constant. For example, if a liquidity provider locks up an initial 1000 CentraPay and 10 CENNZ, then the product 1000x10=10,000 is always kept constant (technically the constant grows slightly as fees get put back to the pool after each trade). This means the price is based of the ratio of the two assets and is set by arbitragers. 

### How to Trade
A user can exchange either direction of the CentraPay-[Asset] pair (via **_assetToCoreSwap_** and **_coreToAssetSwap_** methods); the user can also exchange either direction of the asset-asset pair, provided the CentraPay-[Asset] pools exist for both assets (via **_assetToAssetSwap_** method). If an asset does not yet have an exchange, it can be created and liquidity can be added via the protocol method **_addLiquidity_**. Liquidity providers are required to deposit equivalent value of both CentraPay and relevant asset into the exchange pool.

### Rich Exchange Scenario
Trading in the CENNZX Spot generally revolves around two paradigms:
1. A user wants to **sell** asset on the exchange (**input**), or
2. A user wants to **buy** asset from the exchange (**output**)

When a user is selling, the protocol frequently refers to this as **input**.
In this case, the user must also give a **minimum amount** they are willing to accept for the sale.

When a user is buying an asset this is often referred to as **output**.
The user must give a **maximum amount** they're willing to pay for the assets requested.

### Trading Fee
A fee of 0.3% is charged for trading between CentraPay-[Asset] pair or vice-a-versa. For a Cennz->CentraPay trade, 0.3% fee in Cennz is paid. For CentraPay->Cennz trade, 0.3% fee in CentraPay is paid. All fees are put back to the pool. Based on the liquidity provider's contribution to the pool, the fees are distributed among them. 

### Paying a Merchant in a Different Asset
Apart from exchanging between assets, another common use case is when users need to pay others e.g. merchants in an asset they don't have. With CENNZX Spot you can achieve both in one atomic transaction by specifying recipient address and assets to exchange (via **_assetToAssetTransfer_**, **_assetToCoreTransfer_** and **_coreToAssetTransfer_**).  

### Seamless Fee Payment
Transaction fees can be paid in any asset, provided there's liquidity in the CENNZX Spot. Exchange will then seamlessly convert the asset into CentraPay for fees. This will streamline both onboarding and in-app experience by eliminating the need for learning about and obtaining the fee token. 

The CENNZX Spot is inspired by the Uniswap protocol, for more details please refer to the [CENNZX Spot protocol repo](https://github.com/cennznet/cennznet/tree/master/crml/cennzx-spot).

Refer to the [CENNZX Spot SDK](https://github.com/cennznet/crml-cennzx-spot.js) to start using it.

## Smart Contract
Refer to the [SpinToWin tutorial](../tutorials/spin2win.md) to build and deploy a smart contract in an hour. 