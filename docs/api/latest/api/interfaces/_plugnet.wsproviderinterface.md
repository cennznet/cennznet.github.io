[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md)

# Interface: WSProviderInterface

## Hierarchy

 [ProviderInterface](_plugnet.providerinterface.md)

**↳ WSProviderInterface**

## Implemented by

* [WsProvider](../classes/_plugnet.wsprovider.md)

## Index

### Properties

* [hasSubscriptions](_plugnet.wsproviderinterface.md#hassubscriptions)

### Methods

* [clone](_plugnet.wsproviderinterface.md#clone)
* [connect](_plugnet.wsproviderinterface.md#connect)
* [disconnect](_plugnet.wsproviderinterface.md#disconnect)
* [isConnected](_plugnet.wsproviderinterface.md#isconnected)
* [on](_plugnet.wsproviderinterface.md#on)
* [send](_plugnet.wsproviderinterface.md#send)
* [subscribe](_plugnet.wsproviderinterface.md#subscribe)
* [unsubscribe](_plugnet.wsproviderinterface.md#unsubscribe)

---

## Properties

<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[hasSubscriptions](_plugnet.providerinterface.md#hassubscriptions)*

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:32*

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [ProviderInterface](_plugnet.providerinterface.md)

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[clone](_plugnet.providerinterface.md#clone)*

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:33*

**Returns:** [ProviderInterface](_plugnet.providerinterface.md)

___
<a id="connect"></a>

###  connect

▸ **connect**(): `void`

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:9*

**Returns:** `void`

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[disconnect](_plugnet.providerinterface.md#disconnect)*

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:34*

**Returns:** `void`

___
<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `boolean`

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[isConnected](_plugnet.providerinterface.md#isconnected)*

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:35*

**Returns:** `boolean`

___
<a id="on"></a>

###  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_plugnet.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_plugnet.md#providerinterface_emitcb)*): `void`

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[on](_plugnet.providerinterface.md#on)*

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

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[send](_plugnet.providerinterface.md#send)*

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

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[subscribe](_plugnet.providerinterface.md#subscribe)*

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

*Inherited from [ProviderInterface](_plugnet.providerinterface.md).[unsubscribe](_plugnet.providerinterface.md#unsubscribe)*

*Defined in node_modules/@plugnet/rpc-provider/types.d.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

