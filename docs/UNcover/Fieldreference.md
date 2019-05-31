### Field Reference

| Field name | Type    | Description |
| -------    | ------- | ----------- |
| `number`, `blockNumber`| numeric | Block number                                                 |
| `hash`, `blockHash`, `transactionHash`, `parentHash` | string  | Unique identifier of block or transaction. Parent hash indicates a hash for previous block or transaction.  **Note:** Transaction hash is identical for contract call (type `Contract`) and internal transactions (type `Internal`) triggered by that call |
| `stateRoot`| string  | The root of the final state trie of a block |
| `extrinsicsRoot` |         | Cryptographic digest of this series of extrinsics |
| `timestamp`  | numeric | Unix time & date, always in UTC time zone |
| `transactionCount`, `extrisicsCount` | numeric | Total count of transactions or extrinsic events in a block |
| `baseFee` | string  | Basic fee, expressed in units (10^18)|
| `transferFee`| string  | Transfer fee, expressed in units (10^18)|
| `byteFee`| string  | Byte fee, expressed in units (10^18) |
| `size` | numeric | Transaction size, expressed in bytes                         |
| `fee` | string  | Depending on context it may be a transaction fee calculated using this formula: <br />`fee` = `baseFee` + `size` * `byteFee` + `transferFee`<br />asset creation fee, smart contract deployment fee or attestation fee. Always expressed in units (10^18) |
| `author` | string  | Address of successful block validator |
| `validators` | array   | Addresses of active validators for a particular block|
| `address`, `fromAddress`, `toAddress`, `creator` | string  | Depending on context it may be a transaction sender or receiver, as well as an asset creator |
| `balance`, `fromAddressBalance`, `toAddressBalance`, `reservedBalance`  | string  | Asset balance for a given address |
| `value`  | string | Total value of an asset transfer between addresses |
| `status` | boolean | Indicates whether transaction was successful or not |
| `transactionFlow` | string | Indicates a transfer occurring either from (*Outgoing*) or to (*Incoming*) an address |
| `nonce`  | integer | The number of transactions made by the sender prior to this one |
| `index`  | integer | Integer of transactions index position in a block |
| `gasLimit` | string | The maximum gas allowed in a block, expressed in units (10^18) |
| `type`, `assetType` | string  | Depending on the context it may be transactions type (`Standard`, `Contract`, `Internal`) or asset type (`Staking`, `Spending`, `Reserved`, `Test` or `User-generated`) |
| `data`   | string  | Encoded input data for contract call  |
| `id`, `assetId` | number  | Unique asset identifier  |
| `symbol`, `assetSymbol` | string  | Asset symbol, e.g. CENNZ or SYLO |
| `totalSupply` | string |Total amount of asset created|
| `decimals` | integer |Number of `0`s (zeroes) used to express an asset in proper units (e.g. `decimals` equal to 7 is 10,000,000 or 10^7)|               