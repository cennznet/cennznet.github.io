[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ApiRx](../classes/_plugnet.apirx.md)

# Class: ApiRx

@plugnet/api/rx
===============

Overview
--------

*__name__*: ApiRx

*__description__*: ApiRx is a powerfull RxJS Observable wrapper around the RPC and interfaces on the Plugnet network. As a full Observable API, all interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion and subscription-based methods return long-running Observables that update with the latest values.

The API is well suited to real-time applications where the latest state is needed, unlocking the subscription-based features of Plugnet (and Substrate) clients. Some familiarity with RxJS is a requirement to use the API, however just understanding `.subscribe` and `.pipe` on Observables will unlock full-scale use thereof.

*__see__*: [ApiPromise](_plugnet.apipromise.md)

Usage
-----

Making rpc calls -  

```javascript
import ApiRx from '@plugnet/api/rx';

// initialise via Promise & static create
const api = await ApiRx.create().toPromise();

// make a call to retrieve the current network head
api.rpc.chain.subscribeNewHead().subscribe((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```

  

Subscribing to chain state -  

```javascript
import { combineLatest } from 'rxjs';
import { pairwise, switchMap } from 'rxjs/operators';
import { ApiRx, WsProvider } from '@plugnet/api';

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
new ApiRx(provider)
  .isReady
  .pipe(
    switchMap((api) =>
      combineLatest([
        api.query.timestamp.blockPeriod(),
        api.query.timestamp.now().pipe(pairwise())
      ])
    )
  )
  .subscribe(([blockPeriod, timestamp]) => {
     const elapsed = timestamp[1].toNumber() - timestamp[0].toNumber();
     console.log(`timestamp ${timestamp[1]} \nelapsed ${elapsed} \n(${blockPeriod}s target)`);
  });
```

  

Submitting a transaction -  

```javascript
import { first, switchMap } from 'rxjs/operators';
import ApiRx from '@plugnet/api/rx';

// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
import testingPairs from '@plugnet/keyring/testingPairs';
const keyring = testingPairs();

// get api via Promise
const api = await ApiRx.create().toPromise();

// retrieve nonce for the account
api.query.system
  .accountNonce(keyring.alice.address())
  .pipe(
     first(),
     // pipe nonce into transfer
     switchMap((nonce) =>
       api.tx.balances
         // create transfer
         .transfer(keyring.bob.address(), 12345)
         // sign the transcation
         .sign(keyring.alice, { nonce })
         // send the transaction
         .send()
     )
  )
  // subscribe to overall result
  .subscribe(({ status }) => {
    if (status.isFinalized) {
      console.log('Completed at block hash', status.asFinalized.toHex());
    }
  });
```

## Hierarchy

 [ApiBase](_plugnet.apibase.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>

**↳ ApiRx**

↳  [ApiRx](_cennznet_api.apirx.md)

↳  [ApiRx](_cennznet_api.apirx-1.md)

## Implements

* [ApiBaseInterface](../interfaces/_plugnet.apibaseinterface.md)<[RxResult](../modules/_plugnet.md#rxresult), [RxResult](../modules/_plugnet.md#rxresult)>
* [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md)

## Index

### Constructors

* [constructor](_plugnet.apirx.md#constructor)

### Properties

* [derive](_plugnet.apirx.md#derive)
* [genesisHash](_plugnet.apirx.md#genesishash)
* [hasSubscriptions](_plugnet.apirx.md#hassubscriptions)
* [isConnected](_plugnet.apirx.md#isconnected)
* [isReady](_plugnet.apirx.md#isready)
* [libraryInfo](_plugnet.apirx.md#libraryinfo)
* [query](_plugnet.apirx.md#query)
* [rpc](_plugnet.apirx.md#rpc)
* [runtimeMetadata](_plugnet.apirx.md#runtimemetadata)
* [runtimeVersion](_plugnet.apirx.md#runtimeversion)
* [tx](_plugnet.apirx.md#tx)
* [type](_plugnet.apirx.md#type)

### Methods

* [clone](_plugnet.apirx.md#clone)
* [disconnect](_plugnet.apirx.md#disconnect)
* [on](_plugnet.apirx.md#on)
* [once](_plugnet.apirx.md#once)
* [registerTypes](_plugnet.apirx.md#registertypes)
* [setSigner](_plugnet.apirx.md#setsigner)
* [create](_plugnet.apirx.md#create)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ApiRx**(provider?: *[ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): [ApiRx](_plugnet.apirx.md)

*Overrides [ApiBase](_plugnet.apibase.md).[constructor](_plugnet.apibase.md#constructor)*

*Defined in node_modules/@plugnet/api/rx/Api.d.ts:131*

*__description__*: Create an instance of the ApiRx class

*__example__*:   

```javascript
import { switchMap } from 'rxjs/operators';
import Api from '@plugnet/api/rx';

new Api().isReady
  .pipe(
    switchMap((api) =>
      api.rpc.chain.subscribeNewHead()
  ))
  .subscribe((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` provider | [ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |

**Returns:** [ApiRx](_plugnet.apirx.md)

___

## Properties

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

*Defined in node_modules/@plugnet/api/rx/Api.d.ts:158*

*__description__*: Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.

___
<a id="isready"></a>

###  isReady

**● isReady**: *`Observable`<[ApiRx](_plugnet.apirx.md)>*

*Implementation of [ApiRxInterface](../interfaces/_plugnet.apirxinterface.md).[isReady](../interfaces/_plugnet.apirxinterface.md#isready)*

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

▸ **create**(options?: *[ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): `Observable`<[ApiRx](_plugnet.apirx.md)>

*Defined in node_modules/@plugnet/api/rx/Api.d.ts:131*

*__description__*: Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.

*__example__*:   

```javascript
import { switchMap } from 'rxjs/operators';
import Api from '@plugnet/api/rx';

Api.create()
  .pipe(
    switchMap((api) =>
      api.rpc.chain.subscribeNewHead()
  ))
  .subscribe((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [ApiOptions](../interfaces/_plugnet.apioptions.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |  options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_plugnet.apioptions.md) or [WsProvider](_plugnet.wsprovider.md) |

**Returns:** `Observable`<[ApiRx](_plugnet.apirx.md)>

___

