# Nodes
A full node maintains the data from a blockchain, which is important for chain security. A full node would synchronise the chain data and verify the new signatures and transaction fees before broadcasting transactions to the network. People may want to maintain their full node as a trusted data source and for performance reasons for their applications. Developers may spin up their own full node, or use the UNfrastructure service (CENNZNet node in the cloud) for decentralised application development. Another example is [UNcover](www.uncoverexplorer.com) which maintains its own full nodes as data source for data mining and serving services, like block explorer.

## Validator Node
A validator node is a full node that participates in the validation and consensus process - it executes the chain business logic, producing new blocks and validating transactions. To turn a full node into a validator node, the blockchain data needs to be fully synchronised to the node and a staking account key needs to be provided to the node for staking fund management. 

A full node runs the CENNZnet-node WebAssembly runtime program (in Rust). You can run a node to connect to CENNZnet network, or locally using the docker image of an implementation, or using the node software, rUN, with its friendly user interface available on Mac, Windows and Linux [download here](https://runanode.io/).

