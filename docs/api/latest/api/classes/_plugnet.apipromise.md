[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ApiPromise](../classes/_plugnet.apipromise.md)

# Class: ApiPromise

@plugnet/api/promise
====================

Overview
--------

*__name__*: ApiPromise

*__description__*: ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Plugnet network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise `(value) => {}` callbacks to pass through the latest values.

The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of the subscription-based features of Plugnet (and Substrate) clients.

*__see__*: [ApiRx](_plugnet.apirx.md)

Usage
-----

Making rpc calls -  

```javascript
import ApiPromise from '@plugnet/api/promise';

// initialise via static create
const api = await ApiPromise.create();

// make a subscription to the network head
api.rpc.chain.subscribeNewHead((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```

  

Subscribing to chain state -  

```javascript
import { ApiPromise, WsProvider } from '@plugnet/api';

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
const api = await new ApiPromise(provider).isReady;

// retrieve the block target time
const blockPeriod = await api.query.timestamp.blockPeriod().toNumber();
let last = 0;

// subscribe to the current block timestamp, updates automatically (callback provided)
api.query.timestamp.now((timestamp) => {
  const elapsed = last
    ? `, ${timestamp.toNumber() - last}s since last`
    : '';

  last = timestamp.toNumber();
  console.log(`timestamp ${timestamp}${elapsed} (${blockPeriod}s target)`);
});
```

  

Submitting a transaction -  

```javascript
import ApiPromise from '@plugnet/api/promise';

ApiPromise.create().then((api) => {
  const nonce = await api.query.system.accountNonce(keyring.alice.address());

  api.tx.balances
    // create transfer
    transfer(keyring.bob.address(), 12345)
    // sign the transcation
    .sign(keyring.alice, { nonce })
    // send the transaction (optional status callback)
    .send((status) => {
      console.log(`current status ${status.type}`);
    })
    // retrieve the submitted extrinsic hash
    .then((hash) => {
      console.log(`submitted with hash ${hash}`);
    });
});
```

## Hierarchy

 [ApiBase](_plugnet.apibase.md)<[CodecResult](../modules/_plugnet.md#codecresult), [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)>

**↳ ApiPromise**

↳  [Api](_cennznet_api.api-1.md)

↳  [Api](_cennznet_api.api.md)

## Implements

* [ApiBaseInterface](../interfaces/_plugnet.apibaseinterface.md)<[CodecResult](../modules/_plugnet.md#codecresult), [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)>
* [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md)

## Index

### Constructors

* [constructor](_plugnet.apipromise.md#constructor)

### Properties

* [derive](_plugnet.apipromise.md#derive)
* [genesisHash](_plugnet.apipromise.md#genesishash)
* [hasSubscriptions](_plugnet.apipromise.md#hassubscriptions)
* [isReady](_plugnet.apipromise.md#isready)
* [libraryInfo](_plugnet.apipromise.md#libraryinfo)
* [query](_plugnet.apipromise.md#query)
* [rpc](_plugnet.apipromise.md#rpc)
* [runtimeMetadata](_plugnet.apipromise.md#runtimemetadata)
* [runtimeVersion](_plugnet.apipromise.md#runtimeversion)
* [tx](_plugnet.apipromise.md#tx)
* [type](_plugnet.apipromise.md#type)

### Methods

* [clone](_plugnet.apipromise.md#clone)
* [combineLatest](_plugnet.apipromise.md#combinelatest)
* [disconnect](_plugnet.apipromise.md#disconnect)
* [on](_plugnet.apipromise.md#on)
* [once](_plugnet.apipromise.md#once)
* [registerTypes](_plugnet.apipromise.md#registertypes)
* [setSigner](_plugnet.apipromise.md#setsigner)
* [create](_plugnet.apipromise.md#create)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ApiPromise**(options?: *[ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): [ApiPromise](_plugnet.apipromise.md)

*Overrides [ApiBase](_plugnet.apibase.md).[constructor](_plugnet.apibase.md#constructor)*

*Defined in node_modules/@plugnet/api/promise/Api.d.ts:114*

*__description__*: Creates an instance of the ApiPromise class

*__example__*:   

```javascript
import Api from '@plugnet/api/promise';

new Api().isReady.then((api) => {
  api.rpc.subscribeNewHead((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |  Options to create an instance. This can be either [ApiOptions](../interfaces/_plugnet.apioptions.md) or an [WsProvider](_plugnet.wsprovider.md). |

**Returns:** [ApiPromise](_plugnet.apipromise.md)

___

## Properties

<a id="derive"></a>

###  derive

**● derive**: *[Derive](../interfaces/_plugnet.derive-1.md)<[CodecResult](../modules/_plugnet.md#codecresult), [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)>*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[derive](../interfaces/_plugnet.apipromiseinterface.md#derive)*

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
<a id="genesishash"></a>

###  genesisHash

**● genesisHash**: *[Hash](_plugnet.hash.md)*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[genesisHash](../interfaces/_plugnet.apipromiseinterface.md#genesishash)*

*Inherited from [ApiBase](_plugnet.apibase.md).[genesisHash](_plugnet.apibase.md#genesishash)*

*Defined in node_modules/@plugnet/api/Base.d.ts:45*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

___
<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[hasSubscriptions](../interfaces/_plugnet.apipromiseinterface.md#hassubscriptions)*

*Inherited from [ApiBase](_plugnet.apibase.md).[hasSubscriptions](_plugnet.apibase.md#hassubscriptions)*

*Defined in node_modules/@plugnet/api/Base.d.ts:49*

*__description__*: `true` when subscriptions are supported

___
<a id="isready"></a>

###  isReady

**● isReady**: *`Promise`<[ApiPromise](_plugnet.apipromise.md)>*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[isReady](../interfaces/_plugnet.apipromiseinterface.md#isready)*

*Defined in node_modules/@plugnet/api/promise/Api.d.ts:138*

*__description__*: Promise that returns the first time we are connected and loaded

___
<a id="libraryinfo"></a>

###  libraryInfo

**● libraryInfo**: *`string`*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[libraryInfo](../interfaces/_plugnet.apipromiseinterface.md#libraryinfo)*

*Inherited from [ApiBase](_plugnet.apibase.md).[libraryInfo](_plugnet.apibase.md#libraryinfo)*

*Defined in node_modules/@plugnet/api/Base.d.ts:53*

*__description__*: The library information name & version (from package.json)

___
<a id="query"></a>

###  query

**● query**: *[QueryableStorage](../interfaces/_plugnet.queryablestorage.md)<[CodecResult](../modules/_plugnet.md#codecresult), [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)>*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[query](../interfaces/_plugnet.apipromiseinterface.md#query)*

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

**● rpc**: *[DecoratedRpc](../interfaces/_plugnet.decoratedrpc.md)<[CodecResult](../modules/_plugnet.md#codecresult), [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)>*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[rpc](../interfaces/_plugnet.apipromiseinterface.md#rpc)*

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

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[runtimeMetadata](../interfaces/_plugnet.apipromiseinterface.md#runtimemetadata)*

*Inherited from [ApiBase](_plugnet.apibase.md).[runtimeMetadata](_plugnet.apibase.md#runtimemetadata)*

*Defined in node_modules/@plugnet/api/Base.d.ts:57*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

___
<a id="runtimeversion"></a>

###  runtimeVersion

**● runtimeVersion**: *[RuntimeVersion](_plugnet.runtimeversion.md)*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[runtimeVersion](../interfaces/_plugnet.apipromiseinterface.md#runtimeversion)*

*Inherited from [ApiBase](_plugnet.apibase.md).[runtimeVersion](_plugnet.apibase.md#runtimeversion)*

*Defined in node_modules/@plugnet/api/Base.d.ts:61*

*__description__*: Contains the version information for the current runtime.

___
<a id="tx"></a>

###  tx

**● tx**: *[SubmittableExtrinsics](../interfaces/_plugnet.submittableextrinsics.md)<[CodecResult](../modules/_plugnet.md#codecresult), [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)>*

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[tx](../interfaces/_plugnet.apipromiseinterface.md#tx)*

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

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[type](../interfaces/_plugnet.apipromiseinterface.md#type)*

*Inherited from [ApiBase](_plugnet.apibase.md).[type](_plugnet.apibase.md#type)*

*Defined in node_modules/@plugnet/api/Base.d.ts:65*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [ApiPromise](_plugnet.apipromise.md)

*Defined in node_modules/@plugnet/api/promise/Api.d.ts:142*

*__description__*: Returns a clone of this ApiPromise instance (new underlying provider connection)

**Returns:** [ApiPromise](_plugnet.apipromise.md)

___
<a id="combinelatest"></a>

###  combineLatest

▸ **combineLatest**(fns: *`Array`<[CombinatorFunction](../modules/_plugnet.md#combinatorfunction) \| [[CombinatorFunction](../modules/_plugnet.md#combinatorfunction), `Array`]>*, callback: *[CombinatorCallback](../modules/_plugnet.md#combinatorcallback)*): [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)

*Defined in node_modules/@plugnet/api/promise/Api.d.ts:163*

*__description__*: Creates a combinator that can be used to combine the latest results from multiple subscriptions

*__example__*:   

```javascript
const address = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7';

// combines values from balance & nonce as it updates
api.combineLatest([
  api.rpc.chain.subscribeNewHead,
  [api.query.balances.freeBalance, address],
  (cb) => api.query.system.accountNonce(address, cb)
], ([head, balance, nonce]) => {
  console.log(`#${head.number}: You have ${balance} units, with ${nonce} transactions sent`);
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fns | `Array`<[CombinatorFunction](../modules/_plugnet.md#combinatorfunction) \| [[CombinatorFunction](../modules/_plugnet.md#combinatorfunction), `Array`]> |  An array of function to combine, each in the form of \`(cb: (value: void)) => void\` |
| callback | [CombinatorCallback](../modules/_plugnet.md#combinatorcallback) |  A callback that will return an Array of all the values this combinator has been applied to |

**Returns:** [SubscriptionResult](../modules/_plugnet.md#subscriptionresult)

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[disconnect](../interfaces/_plugnet.apipromiseinterface.md#disconnect)*

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

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[registerTypes](../interfaces/_plugnet.apipromiseinterface.md#registertypes)*

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

*Implementation of [ApiPromiseInterface](../interfaces/_plugnet.apipromiseinterface.md).[setSigner](../interfaces/_plugnet.apipromiseinterface.md#setsigner)*

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

▸ **create**(options?: *[ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): `Promise`<[ApiPromise](_plugnet.apipromise.md)>

*Defined in node_modules/@plugnet/api/promise/Api.d.ts:114*

*__description__*: Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.

*__example__*:   

```javascript
import Api from '@plugnet/api/promise';

Api.create().then(async (api) => {
  const timestamp = await api.query.timestamp.now();

  console.log(`lastest block timestamp ${timestamp}`);
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |  options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_plugnet.apioptions.md) or a provider (see the constructor arguments) |

**Returns:** `Promise`<[ApiPromise](_plugnet.apipromise.md)>

___

