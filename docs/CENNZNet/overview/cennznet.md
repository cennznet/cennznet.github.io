# What is CENNZnet
CENNZnet is a public open blockchain network that allows anyone to build decentralised applications with first-class usability, such as easy bootstrapping for new dApps and seamless onboarding for new users, by leveraging [CENNZnet protocols](../overview/protocols.md). 

## Blockchain 3.0
Blockchain 1.0 is a Bitcoin-like value transfer network. Blockchain 2.0 is Ethereum-like smart contract network. Blockchain 3.0 is the next generation of blockchain and has the ambition to tackle scalability, interoperability and upgradability. 

CENNZnet is an implementation of PL^G, which has been designed to be upgradable without forking interoperable with public, private and consortium blockchains, and is more scalable. The PL^G framework uses Substrate as blockchain infrastructure. It uses WebAssembly for state-transition or runtime (aka the blockchain business logic), which is dynamic and upgradable without forking. PL^G uses [Libp2p](https://github.com/libp2p) for peer discovery and communication between nodes, which is modular and also upgradable.  

## How does CENNZnet work
Different to proof of work type blockchain such as Bitcoin, CENNZnet uses proof of stake to reach consensus and secure the network, which encourages participation and reduces energy consumption. On CENNZnet, user stakes CENNZ to run a node as validator. Validator participates in block production and validation, and receives the CentraPay token as a reward. CentraPay token is a utility token for paying transaction fees on CENNZnet. The CentraPay token is designed to be less volatile and more predictable, with a goal to power activities on CENNZnet. With the dual token model, CENNZnet aims to correlate the value of CENNZ with network activity, while keeping fees stable and reasonable for continue network growth. You can read more about this process in [monetary policy](../overview/monetarypolicy.md). 

Unlike Ethereum, where ether is the native token and all others (such as ERC20) are second class assets, CENNZnet's Generic Asset protocol allows various assets to be managed and operated natively. For example, on CENNZnet it becomes very easy to manage all assets for a given account and it also allows users to pay transactions fees in any assets traded in the CENNZX spot exchange. 

CENNZnet consists of a series of protocols and services that are fundamental for building any commercial-grade applications, such as single-sign on, exchange, communication, storage, token generation, attestation (and KYC services powered by it) etc. 