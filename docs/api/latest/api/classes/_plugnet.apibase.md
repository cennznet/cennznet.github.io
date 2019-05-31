[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ApiBase](../classes/_plugnet.apibase.md)

# Class: ApiBase

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

**ApiBase**

↳  [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md)

↳  [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md)

↳  [ApiPromise](_plugnet.apipromise.md)

↳  [ApiRx](_plugnet.apirx.md)

## Implements

* [ApiBaseInterface](../interfaces/_plugnet.apibaseinterface.md)<`CodecResult`, `SubscriptionResult`>

## Index

### Constructors

* [constructor](_plugnet.apibase.md#constructor)

### Properties

* [derive](_plugnet.apibase.md#derive)
* [genesisHash](_plugnet.apibase.md#genesishash)
* [hasSubscriptions](_plugnet.apibase.md#hassubscriptions)
* [libraryInfo](_plugnet.apibase.md#libraryinfo)
* [query](_plugnet.apibase.md#query)
* [rpc](_plugnet.apibase.md#rpc)
* [runtimeMetadata](_plugnet.apibase.md#runtimemetadata)
* [runtimeVersion](_plugnet.apibase.md#runtimeversion)
* [tx](_plugnet.apibase.md#tx)
* [type](_plugnet.apibase.md#type)

### Methods

* [disconnect](_plugnet.apibase.md#disconnect)
* [on](_plugnet.apibase.md#on)
* [once](_plugnet.apibase.md#once)
* [registerTypes](_plugnet.apibase.md#registertypes)
* [setSigner](_plugnet.apibase.md#setsigner)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ApiBase**(provider: *[ProviderInterface](../interfaces/_plugnet.providerinterface.md) \| [ApiOptions](../interfaces/_plugnet.apioptions.md) \| `undefined`*, type: *[ApiType](../modules/_plugnet.md#apitype)*): [ApiBase](_plugnet.apibase.md)

*Defined in node_modules/@plugnet/api/Base.d.ts:22*

*__description__*: Create an instance of the class

*__example__*:   

```javascript
import Api from '@plugnet/api/promise';

const api = new Api().isReady();

api.rpc.subscribeNewHead((header) => {
  console.log(`new block #${header.blockNumber.toNumber()}`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| provider | [ProviderInterface](../interfaces/_plugnet.providerinterface.md) \| [ApiOptions](../interfaces/_plugnet.apioptions.md) \| `undefined` |
| type | [ApiType](../modules/_plugnet.md#apitype) |

**Returns:** [ApiBase](_plugnet.apibase.md)

___

## Properties

<a id="derive"></a>

###  derive

**● derive**: *[Derive](../interfaces/_plugnet.derive-1.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/Base.d.ts:82*

*__description__*: Derived results that are injected into the API, allowing for combinations of various query results.

*__example__*:   

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

___
<a id="genesishash"></a>

###  genesisHash

**● genesisHash**: *[Hash](_plugnet.hash.md)*

*Defined in node_modules/@plugnet/api/Base.d.ts:45*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

___
<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Defined in node_modules/@plugnet/api/Base.d.ts:49*

*__description__*: `true` when subscriptions are supported

___
<a id="libraryinfo"></a>

###  libraryInfo

**● libraryInfo**: *`string`*

*Defined in node_modules/@plugnet/api/Base.d.ts:53*

*__description__*: The library information name & version (from package.json)

___
<a id="query"></a>

###  query

**● query**: *[QueryableStorage](../interfaces/_plugnet.queryablestorage.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/Base.d.ts:97*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

___
<a id="rpc"></a>

###  rpc

**● rpc**: *[DecoratedRpc](../interfaces/_plugnet.decoratedrpc.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/Base.d.ts:112*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

___
<a id="runtimemetadata"></a>

###  runtimeMetadata

**● runtimeMetadata**: *[Metadata](_plugnet.metadata.md)*

*Defined in node_modules/@plugnet/api/Base.d.ts:57*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

___
<a id="runtimeversion"></a>

###  runtimeVersion

**● runtimeVersion**: *[RuntimeVersion](_plugnet.runtimeversion.md)*

*Defined in node_modules/@plugnet/api/Base.d.ts:61*

*__description__*: Contains the version information for the current runtime.

___
<a id="tx"></a>

###  tx

**● tx**: *[SubmittableExtrinsics](../interfaces/_plugnet.submittableextrinsics.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/Base.d.ts:127*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalized.toHex());
  });
```

___
<a id="type"></a>

###  type

**● type**: *[ApiType](../modules/_plugnet.md#apitype)*

*Implementation of [ApiBaseInterface](../interfaces/_plugnet.apibaseinterface.md).[type](../interfaces/_plugnet.apibaseinterface.md#type)*

*Defined in node_modules/@plugnet/api/Base.d.ts:65*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

___

## Methods

<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Defined in node_modules/@plugnet/api/Base.d.ts:131*

*__description__*: Disconnect from the underlying provider, halting all comms

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(type: *[ApiInterface$Events](../modules/_plugnet.md#apiinterface_events)*, handler: *`function`*): `this`

*Defined in node_modules/@plugnet/api/Base.d.ts:151*

*__description__*: Attach an eventemitter handler to listen to a specific event

*__example__*:   

```javascript
api.on('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ApiInterface$Events](../modules/_plugnet.md#apiinterface_events) |  The type of event to listen to. Available events are \`connected\`, \`disconnected\`, \`ready\` and \`error\` |
| handler | `function` |  The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments. |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(type: *[ApiInterface$Events](../modules/_plugnet.md#apiinterface_events)*, handler: *`function`*): `this`

*Defined in node_modules/@plugnet/api/Base.d.ts:171*

*__description__*: Attach an one-time eventemitter handler to listen to a specific event

*__example__*:   

```javascript
api.once('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ApiInterface$Events](../modules/_plugnet.md#apiinterface_events) |  The type of event to listen to. Available events are \`connected\`, \`disconnected\`, \`ready\` and \`error\` |
| handler | `function` |  The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments. |

**Returns:** `this`

___
<a id="registertypes"></a>

###  registerTypes

▸ **registerTypes**(types?: *[RegistryTypes](../modules/_plugnet.md#registrytypes)*): `void`

*Defined in node_modules/@plugnet/api/Base.d.ts:175*

*__description__*: Register additional user-defined of chain-specific types in the type registry

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` types | [RegistryTypes](../modules/_plugnet.md#registrytypes) |

**Returns:** `void`

___
<a id="setsigner"></a>

###  setSigner

▸ **setSigner**(signer: *[Signer](../interfaces/_plugnet.signer.md)*): `void`

*Defined in node_modules/@plugnet/api/Base.d.ts:69*

*__description__*: Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Signer](../interfaces/_plugnet.signer.md) |

**Returns:** `void`

___

