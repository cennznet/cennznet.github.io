[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Rpc](../classes/_plugnet.rpc.md)

# Class: Rpc

*__name__*: Rpc

*__summary__*: The API may use a HTTP or WebSockets provider.

*__description__*: It allows for querying a Plugnet Client Node. WebSockets provider is recommended since HTTP provider only supports basic querying.

```mermaid
graph LR;
  A[Api] --> \|WebSockets\| B[WsProvider];
  B --> \|endpoint\| C[ws://127.0.0.1:9944]
```

*__example__*:   

```javascript
import Api from '@plugnet/rpc-core';
import WsProvider from '@plugnet/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

## Hierarchy

**Rpc**

## Implements

* [RpcInterface](../interfaces/_plugnet.rpcinterface.md)

## Index

### Constructors

* [constructor](_plugnet.rpc.md#constructor)

### Properties

* [_provider](_plugnet.rpc.md#_provider)
* [author](_plugnet.rpc.md#author)
* [chain](_plugnet.rpc.md#chain)
* [state](_plugnet.rpc.md#state)
* [system](_plugnet.rpc.md#system)

### Methods

* [disconnect](_plugnet.rpc.md#disconnect)
* [signature](_plugnet.rpc.md#signature)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Rpc**(provider?: *[ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): [Rpc](_plugnet.rpc.md)

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:32*

*__constructor__*: Default constructor for the Api Object

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` provider | [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |  An API provider using HTTP or WebSocket |

**Returns:** [Rpc](_plugnet.rpc.md)

___

## Properties

<a id="_provider"></a>

###  _provider

**● _provider**: *[ProviderInterface](../interfaces/_plugnet.providerinterface.md)*

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:28*

___
<a id="author"></a>

###  author

**● author**: *[RpcInterface$Section](../modules/_plugnet.md#rpcinterface_section)*

*Implementation of [RpcInterface](../interfaces/_plugnet.rpcinterface.md).[author](../interfaces/_plugnet.rpcinterface.md#author)*

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:29*

___
<a id="chain"></a>

###  chain

**● chain**: *[RpcInterface$Section](../modules/_plugnet.md#rpcinterface_section)*

*Implementation of [RpcInterface](../interfaces/_plugnet.rpcinterface.md).[chain](../interfaces/_plugnet.rpcinterface.md#chain)*

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:30*

___
<a id="state"></a>

###  state

**● state**: *[RpcInterface$Section](../modules/_plugnet.md#rpcinterface_section)*

*Implementation of [RpcInterface](../interfaces/_plugnet.rpcinterface.md).[state](../interfaces/_plugnet.rpcinterface.md#state)*

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:31*

___
<a id="system"></a>

###  system

**● system**: *[RpcInterface$Section](../modules/_plugnet.md#rpcinterface_section)*

*Implementation of [RpcInterface](../interfaces/_plugnet.rpcinterface.md).[system](../interfaces/_plugnet.rpcinterface.md#system)*

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:32*

___

## Methods

<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:58*

*__description__*: Manually disconnect from the attached provider

**Returns:** `void`

___
<a id="signature"></a>

### `<Static>` signature

▸ **signature**(__namedParameters: *`object`*): `string`

*Defined in node_modules/@plugnet/rpc-core/index.d.ts:54*

*__name__*: signature

*__summary__*: Returns a string representation of the method with inputs and outputs.

*__description__*: Formats the name, inputs and outputs into a human-readable string. This contains the input parameter names input types and output type.

*__example__*:   

```javascript
import Api from '@plugnet/rpc-core';

Api.signature({ name: 'test_method', params: [ { name: 'dest', type: 'Address' } ], type: 'Address' }); // => test_method (dest: Address): Address
```

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `object`[] |
| type | "Metadata" \| "Bool" \| "bool" \| "Bytes" \| "Data" \| "H160" \| "H256" \| "H512" \| "I8" \| "i8" \| "I16" \| "i16" \| "I32" \| "i32" \| "I64" \| "i64" \| "I128" \| "i128" \| "I256" \| "i256" \| "Method" \| "Moment" \| "MomentOf" \| "Null" \| "StorageData" \| "StorageKey" \| "Text" \| "Type" \| "U8" \| "u8" \| "U16" \| "u16" \| "U32" \| "u32" \| "U64" \| "u64" \| "U128" \| "u128" \| "U256" \| "u256" \| "USize" \| "usize" \| "ChainProperties" \| "ExtrinsicStatus" \| "Health" \| "Json" \| "NetworkState" \| "PeerInfo" \| "PendingExtrinsics" \| "RuntimeVersion" \| "SignedBlock" \| "StorageChangeSet" \| "AccountId" \| "AccountIdOf" \| "AccountIndex" \| "AccountInfo" \| "Address" \| "Amount" \| "AssetOf" \| "AttestedCandidate" \| "AuthorityId" \| "Balance" \| "BalanceOf" \| "BalanceLock" \| "Block" \| "BlockNumber" \| "CodeHash" \| "ContractInfo" \| "Digest" \| "DigestItem" \| "Event" \| "EventRecord" \| "Exposure" \| "Extrinsic" \| "ExtrinsicEra" \| "ExtrinsicSignature" \| "Gas" \| "Hash" \| "Header" \| "HeaderExtended" \| "IndividualExposure" \| "InherentOfflineReport" \| "Key" \| "KeyValue" \| "LockIdentifier" \| "LockPeriods" \| "MisbehaviorReport" \| "NewAccountOutcome" \| "Index" \| "IndexCompact" \| "Justification" \| "Origin" \| "ParaId" \| "Permill" \| "Perbill" \| "PrefabWasmModule" \| "PropIndex" \| "Proposal" \| "ProposalIndex" \| "ReferendumIndex" \| "ReferendumInfo" \| "RewardDestination" \| "Schedule" \| "SeedOf" \| "SessionKey" \| "Signature" \| "Ed25519Signature" \| "Sr25519Signature" \| "StakingLedger" \| "StoredPendingChange" \| "TreasuryProposal" \| "UnlockChunk" \| "ValidatorPrefs" \| "VestingSchedule" \| "Vote" \| "VoteThreshold" \| "VoteIndex" \| "WithdrawReasons" |

**Returns:** `string`

___

