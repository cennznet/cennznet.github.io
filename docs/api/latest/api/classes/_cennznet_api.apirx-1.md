[@cennznet/api](../README.md) > [@cennznet/api](../modules/_cennznet_api.md) > [ApiRx](../classes/_cennznet_api.apirx-1.md)

# Class: ApiRx

## Hierarchy

↳  [ApiRx](_plugnet.apirx.md)

**↳ ApiRx**

## Implements

* [ApiBaseInterface](../interfaces/_plugnet.apibaseinterface.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>
* [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md)

## Index

### Constructors

* [constructor](_cennznet_api.apirx-1.md#constructor)

### Properties

* [cennzxSpot](_cennznet_api.apirx-1.md#cennzxspot)
* [derive](_cennznet_api.apirx-1.md#derive)
* [genericAsset](_cennznet_api.apirx-1.md#genericasset)
* [genesisHash](_cennznet_api.apirx-1.md#genesishash)
* [hasSubscriptions](_cennznet_api.apirx-1.md#hassubscriptions)
* [isConnected](_cennznet_api.apirx-1.md#isconnected)
* [isReady](_cennznet_api.apirx-1.md#isready)
* [libraryInfo](_cennznet_api.apirx-1.md#libraryinfo)
* [query](_cennznet_api.apirx-1.md#query)
* [rpc](_cennznet_api.apirx-1.md#rpc)
* [runtimeMetadata](_cennznet_api.apirx-1.md#runtimemetadata)
* [runtimeVersion](_cennznet_api.apirx-1.md#runtimeversion)
* [tx](_cennznet_api.apirx-1.md#tx)
* [type](_cennznet_api.apirx-1.md#type)

### Methods

* [clone](_cennznet_api.apirx-1.md#clone)
* [disconnect](_cennznet_api.apirx-1.md#disconnect)
* [on](_cennznet_api.apirx-1.md#on)
* [once](_cennznet_api.apirx-1.md#once)
* [registerTypes](_cennznet_api.apirx-1.md#registertypes)
* [setSigner](_cennznet_api.apirx-1.md#setsigner)
* [create](_cennznet_api.apirx-1.md#create)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ApiRx**(provider?: *[ApiOptions](../interfaces/_cennznet_api.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): [ApiRx](_cennznet_api.apirx-1.md)

*Overrides [ApiRx](_plugnet.apirx.md).[constructor](_plugnet.apirx.md#constructor)*

*Defined in node_modules/@cennznet/api/src/ApiRx.ts:46*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` provider | [ApiOptions](../interfaces/_cennznet_api.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |  {} |

**Returns:** [ApiRx](_cennznet_api.apirx-1.md)

___

## Properties

<a id="cennzxspot"></a>

### `<Optional>` cennzxSpot

**● cennzxSpot**: *[CennzxSpotRx](_cennznet_crml_cennzx_spot.cennzxspotrx.md)*

*Defined in node_modules/@cennznet/api/src/ApiRx.ts:46*

Cennzx Spot CRML extention

___
<a id="derive"></a>

###  derive

**● derive**: *[Derive](../interfaces/_plugnet.derive-1.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[derive](../interfaces/_plugnet.apirxinterface.md#derive)*

*Inherited from [ApiBase](_plugnet.apibase.md).[derive](_plugnet.apibase.md#derive)*

*Defined in node_modules/@plugnet/api/Base.d.ts:82*

*__description__*: Derived results that are injected into the API, allowing for combinations of various query results.

*__example__*:   

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

___
<a id="genericasset"></a>

### `<Optional>` genericAsset

**● genericAsset**: *[GenericAssetRx](_cennznet_crml_generic_asset.genericassetrx.md)*

*Defined in node_modules/@cennznet/api/src/ApiRx.ts:42*

Generic Asset CRML extention

___
<a id="genesishash"></a>

###  genesisHash

**● genesisHash**: *[Hash](_plugnet.hash.md)*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[genesisHash](../interfaces/_plugnet.apirxinterface.md#genesishash)*

*Inherited from [ApiBase](_plugnet.apibase.md).[genesisHash](_plugnet.apibase.md#genesishash)*

*Defined in node_modules/@plugnet/api/Base.d.ts:45*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

___
<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[hasSubscriptions](../interfaces/_plugnet.apirxinterface.md#hassubscriptions)*

*Inherited from [ApiBase](_plugnet.apibase.md).[hasSubscriptions](_plugnet.apibase.md#hassubscriptions)*

*Defined in node_modules/@plugnet/api/Base.d.ts:49*

*__description__*: `true` when subscriptions are supported

___
<a id="isconnected"></a>

###  isConnected

**● isConnected**: *`Observable`<`boolean`>*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[isConnected](../interfaces/_plugnet.apirxinterface.md#isconnected)*

*Inherited from [ApiRx](_plugnet.apirx.md).[isConnected](_plugnet.apirx.md#isconnected)*

*Defined in node_modules/@plugnet/api/rx/Api.d.ts:158*

*__description__*: Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.

___
<a id="isready"></a>

###  isReady

**● isReady**: *`Observable`<[ApiRx](_plugnet.apirx.md)>*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[isReady](../interfaces/_plugnet.apirxinterface.md#isready)*

*Inherited from [ApiRx](_plugnet.apirx.md).[isReady](_plugnet.apirx.md#isready)*

*Defined in node_modules/@plugnet/api/rx/Api.d.ts:162*

*__description__*: Observable that returns the first time we are connected and loaded

___
<a id="libraryinfo"></a>

###  libraryInfo

**● libraryInfo**: *`string`*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[libraryInfo](../interfaces/_plugnet.apirxinterface.md#libraryinfo)*

*Inherited from [ApiBase](_plugnet.apibase.md).[libraryInfo](_plugnet.apibase.md#libraryinfo)*

*Defined in node_modules/@plugnet/api/Base.d.ts:53*

*__description__*: The library information name & version (from package.json)

___
<a id="query"></a>

###  query

**● query**: *[QueryableStorage](../interfaces/_plugnet.queryablestorage.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[query](../interfaces/_plugnet.apirxinterface.md#query)*

*Inherited from [ApiBase](_plugnet.apibase.md).[query](_plugnet.apibase.md#query)*

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

**● rpc**: *[DecoratedRpc](../interfaces/_plugnet.decoratedrpc.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[rpc](../interfaces/_plugnet.apirxinterface.md#rpc)*

*Inherited from [ApiBase](_plugnet.apibase.md).[rpc](_plugnet.apibase.md#rpc)*

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

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[runtimeMetadata](../interfaces/_plugnet.apirxinterface.md#runtimemetadata)*

*Inherited from [ApiBase](_plugnet.apibase.md).[runtimeMetadata](_plugnet.apibase.md#runtimemetadata)*

*Defined in node_modules/@plugnet/api/Base.d.ts:57*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

___
<a id="runtimeversion"></a>

###  runtimeVersion

**● runtimeVersion**: *[RuntimeVersion](_plugnet.runtimeversion.md)*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[runtimeVersion](../interfaces/_plugnet.apirxinterface.md#runtimeversion)*

*Inherited from [ApiBase](_plugnet.apibase.md).[runtimeVersion](_plugnet.apibase.md#runtimeversion)*

*Defined in node_modules/@plugnet/api/Base.d.ts:61*

*__description__*: Contains the version information for the current runtime.

___
<a id="tx"></a>

###  tx

**● tx**: *[SubmittableExtrinsics](../interfaces/_plugnet.submittableextrinsics.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[tx](../interfaces/_plugnet.apirxinterface.md#tx)*

*Inherited from [ApiBase](_plugnet.apibase.md).[tx](_plugnet.apibase.md#tx)*

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

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[type](../interfaces/_plugnet.apirxinterface.md#type)*

*Inherited from [ApiBase](_plugnet.apibase.md).[type](_plugnet.apibase.md#type)*

*Defined in node_modules/@plugnet/api/Base.d.ts:65*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [ApiRx](_plugnet.apirx.md)

*Inherited from [ApiRx](_plugnet.apirx.md).[clone](_plugnet.apirx.md#clone)*

*Defined in node_modules/@plugnet/api/rx/Api.d.ts:166*

*__description__*: Returns a clone of this ApiRx instance (new underlying provider connection)

**Returns:** [ApiRx](_plugnet.apirx.md)

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[disconnect](../interfaces/_plugnet.apirxinterface.md#disconnect)*

*Inherited from [ApiBase](_plugnet.apibase.md).[disconnect](_plugnet.apibase.md#disconnect)*

*Defined in node_modules/@plugnet/api/Base.d.ts:131*

*__description__*: Disconnect from the underlying provider, halting all comms

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(type: *[ApiInterface$Events](../modules/_plugnet.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](_plugnet.apibase.md).[on](_plugnet.apibase.md#on)*

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

*Inherited from [ApiBase](_plugnet.apibase.md).[once](_plugnet.apibase.md#once)*

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

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[registerTypes](../interfaces/_plugnet.apirxinterface.md#registertypes)*

*Inherited from [ApiBase](_plugnet.apibase.md).[registerTypes](_plugnet.apibase.md#registertypes)*

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

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[setSigner](../interfaces/_plugnet.apirxinterface.md#setsigner)*

*Inherited from [ApiBase](_plugnet.apibase.md).[setSigner](_plugnet.apibase.md#setsigner)*

*Defined in node_modules/@plugnet/api/Base.d.ts:69*

*__description__*: Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Signer](../interfaces/_plugnet.signer.md) |

**Returns:** `void`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(options?: *[ApiOptions](../interfaces/_cennznet_api.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): `Observable`<[ApiRx](_cennznet_api.apirx-1.md)>

*Overrides [ApiRx](_plugnet.apirx.md).[create](_plugnet.apirx.md#create)*

*Defined in node_modules/@cennznet/api/src/ApiRx.ts:34*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [ApiOptions](../interfaces/_cennznet_api.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |  {} |

**Returns:** `Observable`<[ApiRx](_cennznet_api.apirx-1.md)>

___

