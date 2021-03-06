[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [HttpProvider](../classes/_plugnet.httpprovider.md)

# Class: HttpProvider

@polkadot/rpc-provider/https
============================

*__name__*: HttpProvider

*__description__*: The HTTP Provider allows sending requests using HTTP to a HTTP RPC server TCP port. It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [WsProvider](_plugnet.wsprovider.md).

*__example__*:   

```javascript
import Api from '@plugnet/api/promise';
import HttpProvider from '@plugnet/rpc-provider/http';

const provider = new HttpProvider('http://127.0.0.1:9933');
const api = new Api(provider);
```

*__see__*: [WsProvider](_plugnet.wsprovider.md)

## Hierarchy

**HttpProvider**

## Implements

* [ProviderInterface](../interfaces/_plugnet.providerinterface.md)

## Index

### Constructors

* [constructor](_plugnet.httpprovider.md#constructor)

### Properties

* [hasSubscriptions](_plugnet.httpprovider.md#hassubscriptions)

### Methods

* [clone](_plugnet.httpprovider.md#clone)
* [disconnect](_plugnet.httpprovider.md#disconnect)
* [isConnected](_plugnet.httpprovider.md#isconnected)
* [on](_plugnet.httpprovider.md#on)
* [send](_plugnet.httpprovider.md#send)
* [subscribe](_plugnet.httpprovider.md#subscribe)
* [unsubscribe](_plugnet.httpprovider.md#unsubscribe)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HttpProvider**(endpoint?: *`string`*): [HttpProvider](_plugnet.httpprovider.md)

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:25*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` endpoint | `string` |  The endpoint url starting with http:// |

**Returns:** [HttpProvider](_plugnet.httpprovider.md)

___

## Properties

<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[hasSubscriptions](../interfaces/_plugnet.providerinterface.md#hassubscriptions)*

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:33*

*__summary__*: `true` when this provider supports subscriptions

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [HttpProvider](_plugnet.httpprovider.md)

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[clone](../interfaces/_plugnet.providerinterface.md#clone)*

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:37*

*__description__*: Returns a clone of the object

**Returns:** [HttpProvider](_plugnet.httpprovider.md)

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[disconnect](../interfaces/_plugnet.providerinterface.md#disconnect)*

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:41*

*__description__*: Manually disconnect from the connection

**Returns:** `void`

___
<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[isConnected](../interfaces/_plugnet.providerinterface.md#isconnected)*

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:46*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

###  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_plugnet.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_plugnet.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[on](../interfaces/_plugnet.providerinterface.md#on)*

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:51*

*__summary__*: Events are not supported with the HttpProvider, see [WsProvider](_plugnet.wsprovider.md).

*__description__*: HTTP Provider does not have 'on' emitters. WebSockets should be used instead.

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

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:55*

*__summary__*: Send HTTP POST Request with Body to configured HTTP Endpoint.

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(types: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_plugnet.md#providerinterface_callback)*): `Promise`<`number`>

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[subscribe](../interfaces/_plugnet.providerinterface.md#subscribe)*

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:59*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_plugnet.wsprovider.md).

**Parameters:**

| Name | Type |
| ------ | ------ |
| types | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_plugnet.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [ProviderInterface](../interfaces/_plugnet.providerinterface.md).[unsubscribe](../interfaces/_plugnet.providerinterface.md#unsubscribe)*

*Defined in node_modules/@plugnet/rpc-provider/http/index.d.ts:63*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_plugnet.wsprovider.md).

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

