[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ProviderInterface](../interfaces/_plugnet.providerinterface.md)

# Interface: ProviderInterface

## Hierarchy

**ProviderInterface**

↳  [WSProviderInterface](_plugnet.wsproviderinterface.md)

## Implemented by

* [HttpProvider](../classes/_plugnet.httpprovider.md)
* [Mock](../classes/_plugnet.mock.md)

## Index

### Properties

* [hasSubscriptions](_plugnet.providerinterface.md#hassubscriptions)

### Methods

* [clone](_plugnet.providerinterface.md#clone)
* [disconnect](_plugnet.providerinterface.md#disconnect)
* [isConnected](_plugnet.providerinterface.md#isconnected)
* [on](_plugnet.providerinterface.md#on)
* [send](_plugnet.providerinterface.md#send)
* [subscribe](_plugnet.providerinterface.md#subscribe)
* [unsubscribe](_plugnet.providerinterface.md#unsubscribe)

---

## Properties

<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:32*

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [ProviderInterface](_plugnet.providerinterface.md)

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:33*

**Returns:** [ProviderInterface](_plugnet.providerinterface.md)

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:34*

**Returns:** `void`

___
<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `boolean`

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:35*

**Returns:** `boolean`

___
<a id="on"></a>

###  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_plugnet.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_plugnet.md#providerinterface_emitcb)*): `void`

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:36*

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

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:37*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_plugnet.md#providerinterface_callback)*): `Promise`<`number`>

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:38*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_plugnet.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

