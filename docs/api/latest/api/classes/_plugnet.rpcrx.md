[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [RpcRx](../classes/_plugnet.rpcrx.md)

# Class: RpcRx

*__name__*: RpcRx

*__summary__*: The RxJS API is a wrapper around the API.

*__description__*: It allows wrapping API components with observables using RxJS.

*__example__*:   

```javascript
import RpcRx from '@plugnet/rpc-rx';
import WsProvider from '@plugnet/rpc-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const api = new RpcRx(provider);
```

## Hierarchy

**RpcRx**

## Implements

* `object`

## Index

### Constructors

* [constructor](_plugnet.rpcrx.md#constructor)

### Properties

* [author](_plugnet.rpcrx.md#author)
* [chain](_plugnet.rpcrx.md#chain)
* [state](_plugnet.rpcrx.md#state)
* [system](_plugnet.rpcrx.md#system)

### Methods

* [isConnected](_plugnet.rpcrx.md#isconnected)
* [on](_plugnet.rpcrx.md#on)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RpcRx**(providerOrRpc?: *[Rpc](_plugnet.rpc.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md)*): [RpcRx](_plugnet.rpcrx.md)

*Defined in node_modules/@plugnet/rpc-rx/index.d.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` providerOrRpc | [Rpc](_plugnet.rpc.md) \| [ProviderInterface](../interfaces/_plugnet.providerinterface.md) |

**Returns:** [RpcRx](_plugnet.rpcrx.md)

___

## Properties

<a id="author"></a>

###  author

**● author**: *[RpcRxInterface$Section](../modules/_plugnet.md#rpcrxinterface_section)*

*Defined in node_modules/@plugnet/rpc-rx/index.d.ts:25*

___
<a id="chain"></a>

###  chain

**● chain**: *[RpcRxInterface$Section](../modules/_plugnet.md#rpcrxinterface_section)*

*Defined in node_modules/@plugnet/rpc-rx/index.d.ts:26*

___
<a id="state"></a>

###  state

**● state**: *[RpcRxInterface$Section](../modules/_plugnet.md#rpcrxinterface_section)*

*Defined in node_modules/@plugnet/rpc-rx/index.d.ts:27*

___
<a id="system"></a>

###  system

**● system**: *[RpcRxInterface$Section](../modules/_plugnet.md#rpcrxinterface_section)*

*Defined in node_modules/@plugnet/rpc-rx/index.d.ts:28*

___

## Methods

<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in node_modules/@plugnet/rpc-rx/index.d.ts:33*

**Returns:** `BehaviorSubject`<`boolean`>

___
<a id="on"></a>

###  on

▸ **on**(type: *[RpcRxInterface$Events](../modules/_plugnet.md#rpcrxinterface_events)*, handler: *`function`*): `void`

*Defined in node_modules/@plugnet/rpc-rx/index.d.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [RpcRxInterface$Events](../modules/_plugnet.md#rpcrxinterface_events) |
| handler | `function` |

**Returns:** `void`

___

