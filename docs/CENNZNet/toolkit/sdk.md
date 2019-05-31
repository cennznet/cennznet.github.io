# CENNZNet SDK
While there are extensive JSON-RPC API endpoints available to interact with CENNZNet directly, the CENNZNet SDK library set is designed to take care of the underlying plumbing and allow developers easily interact with and build on CENNZNet, as well as leveraging its protocols. The library set is written in javascript, it is derived and extended from [Plugnet SDK library](ttps://github.com/plugblockchain), which is a fork and extension of the [polkadot.js](https://github.com/polkadot-js). Below are select few features of the CENNZNet SDK: 

* Handles binary format encoding and decoding of transactions that interact with CENNZNet protocols and smart contracts
* Provides support for creating and managing accounts, signing transactions, broadcasting transactions and basic fee estimation
* Provides a HD wallet implementation that can be easily used and extended for dApps

The following tables are the SDK libraries available, and will be updated as new protocols or libraries been made available.

| SDK Libraries          | Repo URL                                             | Description                      |     
| ---------------------- | -----------------------------------------------------| -------------------------------- |
| cennznet-js            | (https://github.com/cennznet/cennznet-js)            | Core CENNZNet SDK API            |
| cennznet-generic-asset | (https://github.com/cennznet/crml-generic-asset.js)  | Access generic asset protocol    |
| cennznet-spotx         | (https://github.com/cennznet/crml-cennzx-spot.js)    | CENNZX Spot exchange protocol    |
| cennznet-identity      | (https://github.com/cennznet/crml-identity.js)       | Identity, attestation protocol   |

