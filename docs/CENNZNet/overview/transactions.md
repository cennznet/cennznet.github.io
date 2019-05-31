# Transactions

A transaction on CENNZnet is a signed data package that contains a message sent from an account to a node, which is then broadcast to the network. The message could be for value transfer from one account to another, or it could be an operation that an account wants to perform on chain. For example exchanging one asset to another via CENNZX. 

CENNZnet transaction is based on [substrate extrinsic](https://docs.substrate.dev/docs/extrinsics) with additional CENNZnet specific properties.

## Transaction Format
Transaction includes

- A version byte indicate the format version
- An operation descriptor that specifies the protocol (module), the method and inputs for the operation.
  - For example, to transfer 10 CENNZ from accountA to accountB, you would specify the protocol as `Generic Asset`, the method as `transfer` and input as `accountB` for amount of `10` in `CENNZ` asset. 
- A nonce value to prevent replay attack.
- An optional transaction era to limit the lifetime of this transaction.
- An optional permission document.
- An optional CENNZX operation to allow fees to be paid in any of the supported tokens.
- A signature signed by the transition creator covers all the above payload.

[TODO] link to extrinsic format 
Refer to [CENNZnet-js](https://github.com/cennznet/cennznet-js) for creating and sending transactions.

## Transaction Fee
CENNZnet is a network of participating nodes that runs the CENNZnet-node WebAssembly runtime (aka the CENNZnet business logic). Transactions are broadcasted and saved by every node on the network. This has a cost, which can be measured in resource units and on CENNZnet it can be expressed as a spend token (aka CentraPay as transaction fee). 

The purpose of transaction fee is to ensure the sender pays for at least the cost for the network to process this transaction. It also acts as a security gateway to ensure the cost to spam the network is high.

Transaction fee is the total amount of fee deducted from signer account in order to have the transaction included in the confirming block. This includes transaction payment as well as any other addition fees.

Transaction payment is strictly the minimal payment required for the inclusion of the transaction on-chain to be valid, i.e. to *not panic*. Once the transaction is included on-chain it *must* be dispatched. (link to substrate doc) (original source: https://github.com/paritytech/substrate/issues/1993#issuecomment-472815054)

`TransactionPayment = BaseFee + ByteFee * TransactionByteSize`

`TransactionFee = TransactionPayment + AdditionalFee`

Additional fee may also be charged ensures the resource usage (CPU & storage) for the transaction is direct proportional the total fee charged. Example of additional fees are transfer fee charged by generic asset transfer method, and gas fee charged by of smart contract invocation.

[TODO] link to fee module spec

The transaction fee model is under review and subject to change. 