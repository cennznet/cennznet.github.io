[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md)

# Interface: ApiRxInterface

## Hierarchy

 [ApiBase](../classes/_plugnet.apibase.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>

**↳ ApiRxInterface**

## Implements

* [ApiBaseInterface](_plugnet.apibaseinterface.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>

## Implemented by

* [ApiRx](../classes/_plugnet.apirx.md)
* [ApiRx](../classes/_cennznet_api.apirx.md)
* [ApiRx](../classes/_cennznet_api.apirx-1.md)

## Index

### Constructors

* [constructor](_plugnet.apirxinterface.md#constructor)

### Properties

* [derive](_plugnet.apirxinterface.md#derive)
* [genesisHash](_plugnet.apirxinterface.md#genesishash)
* [hasSubscriptions](_plugnet.apirxinterface.md#hassubscriptions)
* [isConnected](_plugnet.apirxinterface.md#isconnected)
* [isReady](_plugnet.apirxinterface.md#isready)
* [libraryInfo](_plugnet.apirxinterface.md#libraryinfo)
* [query](_plugnet.apirxinterface.md#query)
* [rpc](_plugnet.apirxinterface.md#rpc)
* [runtimeMetadata](_plugnet.apirxinterface.md#runtimemetadata)
* [runtimeVersion](_plugnet.apirxinterface.md#runtimeversion)
* [tx](_plugnet.apirxinterface.md#tx)
* [type](_plugnet.apirxinterface.md#type)

### Methods

* [disconnect](_plugnet.apirxinterface.md#disconnect)
* [on](_plugnet.apirxinterface.md#on)
* [once](_plugnet.apirxinterface.md#once)
* [registerTypes](_plugnet.apirxinterface.md#registertypes)
* [setSigner](_plugnet.apirxinterface.md#setsigner)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ApiRxInterface**(provider: *[ProviderInterface](_plugnet.providerinterface.md) \| [ApiOptions](_plugnet.apioptions.md) \| `undefined`*, type: *[ApiType](../modules/_plugnet.md#apitype)*): [ApiRxInterface](_plugnet.apirxinterface.md)

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[constructor](../classes/_plugnet.apibase.md#constructor)*

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
| provider | [ProviderInterface](_plugnet.providerinterface.md) \| [ApiOptions](_plugnet.apioptions.md) \| `undefined` |
| type | [ApiType](../modules/_plugnet.md#apitype) |

**Returns:** [ApiRxInterface](_plugnet.apirxinterface.md)

___

## Properties

<a id="derive"></a>

###  derive

**● derive**: *[Derive](_plugnet.derive-1.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[derive](../classes/_plugnet.apibase.md#derive)*

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

**● genesisHash**: *[Hash](../classes/_plugnet.hash.md)*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[genesisHash](../classes/_plugnet.apibase.md#genesishash)*

*Defined in node_modules/@plugnet/api/Base.d.ts:45*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

___
<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[hasSubscriptions](../classes/_plugnet.apibase.md#hassubscriptions)*

*Defined in node_modules/@plugnet/api/Base.d.ts:49*

*__description__*: `true` when subscriptions are supported

___
<a id="isconnected"></a>

###  isConnected

**● isConnected**: *`Observable`<`boolean`>*

*Defined in node_modules/@plugnet/api/rx/types.d.ts:6*

___
<a id="isready"></a>

###  isReady

**● isReady**: *`Observable`<[ApiRxInterface](_plugnet.apirxinterface.md)>*

*Defined in node_modules/@plugnet/api/rx/types.d.ts:7*

___
<a id="libraryinfo"></a>

###  libraryInfo

**● libraryInfo**: *`string`*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[libraryInfo](../classes/_plugnet.apibase.md#libraryinfo)*

*Defined in node_modules/@plugnet/api/Base.d.ts:53*

*__description__*: The library information name & version (from package.json)

___
<a id="query"></a>

###  query

**● query**: *[QueryableStorage](_plugnet.queryablestorage.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[query](../classes/_plugnet.apibase.md#query)*

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

**● rpc**: *[DecoratedRpc](_plugnet.decoratedrpc.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[rpc](../classes/_plugnet.apibase.md#rpc)*

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

**● runtimeMetadata**: *[Metadata](../classes/_plugnet.metadata.md)*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[runtimeMetadata](../classes/_plugnet.apibase.md#runtimemetadata)*

*Defined in node_modules/@plugnet/api/Base.d.ts:57*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

___
<a id="runtimeversion"></a>

###  runtimeVersion

**● runtimeVersion**: *[RuntimeVersion](../classes/_plugnet.runtimeversion.md)*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[runtimeVersion](../classes/_plugnet.apibase.md#runtimeversion)*

*Defined in node_modules/@plugnet/api/Base.d.ts:61*

*__description__*: Contains the version information for the current runtime.

___
<a id="tx"></a>

###  tx

**● tx**: *[SubmittableExtrinsics](_plugnet.submittableextrinsics.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[tx](../classes/_plugnet.apibase.md#tx)*

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

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[type](../classes/_plugnet.apibase.md#type)*

*Defined in node_modules/@plugnet/api/Base.d.ts:65*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

___

## Methods

<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[disconnect](../classes/_plugnet.apibase.md#disconnect)*

*Defined in node_modules/@plugnet/api/Base.d.ts:131*

*__description__*: Disconnect from the underlying provider, halting all comms

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(type: *[ApiInterface$Events](../modules/_plugnet.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[on](../classes/_plugnet.apibase.md#on)*

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

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[once](../classes/_plugnet.apibase.md#once)*

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

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[registerTypes](../classes/_plugnet.apibase.md#registertypes)*

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

▸ **setSigner**(signer: *[Signer](_plugnet.signer.md)*): `void`

*Inherited from [ApiBase](../classes/_plugnet.apibase.md).[setSigner](../classes/_plugnet.apibase.md#setsigner)*

*Defined in node_modules/@plugnet/api/Base.d.ts:69*

*__description__*: Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Signer](_plugnet.signer.md) |

**Returns:** `void`

___

