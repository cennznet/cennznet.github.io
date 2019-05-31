[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Mock](../classes/_plugnet.mock.md)

# Class: Mock

A mock provider mainly used for testing.

*__returns__*: The mock provider

## Hierarchy

**Mock**

## Implements

* [ProviderInterface](../interfaces/_plugnet.providerinterface.md)

## Index

### Constructors

* [constructor](_plugnet.mock.md#constructor)

### Properties

* [hasSubscriptions](_plugnet.mock.md#hassubscriptions)
* [isUpdating](_plugnet.mock.md#isupdating)
* [subscriptions](_plugnet.mock.md#subscriptions)

### Methods

* [clone](_plugnet.mock.md#clone)
* [disconnect](_plugnet.mock.md#disconnect)
* [isConnected](_plugnet.mock.md#isconnected)
* [on](_plugnet.mock.md#on)
* [send](_plugnet.mock.md#send)
* [subscribe](_plugnet.mock.md#subscribe)
* [unsubscribe](_plugnet.mock.md#unsubscribe)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Mock**(): [Mock](_plugnet.mock.md)

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:14*

**Returns:** [Mock](_plugnet.mock.md)

___

## Properties

<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[hasSubscriptions](../interfaces/_plugnet.providerinterface.md#hassubscriptions)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:16*

___
<a id="isupdating"></a>

###  isUpdating

**● isUpdating**: *`boolean`*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:10*

___
<a id="subscriptions"></a>

###  subscriptions

**● subscriptions**: *[MockState$Subscriptions](../modules/_plugnet.md#mockstate_subscriptions)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:12*

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [Mock](_plugnet.mock.md)

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[clone](../interfaces/_plugnet.providerinterface.md#clone)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:17*

**Returns:** [Mock](_plugnet.mock.md)

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[disconnect](../interfaces/_plugnet.providerinterface.md#disconnect)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:18*

**Returns:** `void`

___
<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[isConnected](../interfaces/_plugnet.providerinterface.md#isconnected)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:19*

**Returns:** `boolean`

___
<a id="on"></a>

###  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_plugnet.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_plugnet.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[on](../interfaces/_plugnet.providerinterface.md#on)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_plugnet.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_plugnet.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[send](../interfaces/_plugnet.providerinterface.md#send)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, ...params: *`Array`<`any`>*): `Promise`<`number`>

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[unsubscribe](../interfaces/_plugnet.providerinterface.md#unsubscribe)*

*Defined in node_modules/@plugnet/rpc-provider/mock/index.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

