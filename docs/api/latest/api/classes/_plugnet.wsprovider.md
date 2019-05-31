[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [WsProvider](../classes/_plugnet.wsprovider.md)

# Class: WsProvider

@polkadot/rpc-provider/ws
=========================

*__name__*: WsProvider

*__description__*: The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [HttpProvider](_plugnet.httpprovider.md), it does support subscriptions and allows listening to events such as new blocks or balance changes.

*__example__*:   

```javascript
import Api from '@plugnet/api/promise';
import WsProvider from '@plugnet/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

*__see__*: [HttpProvider](_plugnet.httpprovider.md)

## Hierarchy

**WsProvider**

## Implements

* [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md)

## Index

### Constructors

* [constructor](_plugnet.wsprovider.md#constructor)

### Properties

* [hasSubscriptions](_plugnet.wsprovider.md#hassubscriptions)

### Methods

* [clone](_plugnet.wsprovider.md#clone)
* [connect](_plugnet.wsprovider.md#connect)
* [disconnect](_plugnet.wsprovider.md#disconnect)
* [isConnected](_plugnet.wsprovider.md#isconnected)
* [on](_plugnet.wsprovider.md#on)
* [send](_plugnet.wsprovider.md#send)
* [subscribe](_plugnet.wsprovider.md#subscribe)
* [unsubscribe](_plugnet.wsprovider.md#unsubscribe)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WsProvider**(endpoint?: *`string`*, autoConnect?: *`boolean`*): [WsProvider](_plugnet.wsprovider.md)

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:41*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` endpoint | `string` |  The endpoint url. Usually \`ws://ip:9944\` or \`wss://ip:9944\` |
| `Optional` autoConnect | `boolean` |  Whether to connect automatically or not. |

**Returns:** [WsProvider](_plugnet.wsprovider.md)

___

## Properties

<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[hasSubscriptions](../interfaces/_plugnet.wsproviderinterface.md#hassubscriptions)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:50*

*__summary__*: `true` when this provider supports subscriptions

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): [WsProvider](_plugnet.wsprovider.md)

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[clone](../interfaces/_plugnet.wsproviderinterface.md#clone)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:54*

*__description__*: Returns a clone of the object

**Returns:** [WsProvider](_plugnet.wsprovider.md)

___
<a id="connect"></a>

###  connect

▸ **connect**(): `void`

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[connect](../interfaces/_plugnet.wsproviderinterface.md#connect)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:60*

*__summary__*: Manually connect

*__description__*: The [WsProvider](_plugnet.wsprovider.md) connects automatically by default, however if you decided otherwise, you may connect manually using this method.

**Returns:** `void`

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[disconnect](../interfaces/_plugnet.wsproviderinterface.md#disconnect)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:64*

*__description__*: Manually disconnect from the connection, clearing autoconnect logic

**Returns:** `void`

___
<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[isConnected](../interfaces/_plugnet.wsproviderinterface.md#isconnected)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:69*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

###  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_plugnet.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_plugnet.md#providerinterface_emitcb)*): `void`

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[on](../interfaces/_plugnet.wsproviderinterface.md#on)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:75*

*__summary__*: Listens on events after having subscribed using the [subscribe](_plugnet.wsprovider.md#subscribe) function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_plugnet.md#providerinterface_emitted) |  Event |
| sub | [ProviderInterface$EmitCb](../modules/_plugnet.md#providerinterface_emitcb) |  Callback |

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*, subscription?: *[SubscriptionHandler](../modules/_plugnet.md#subscriptionhandler)*): `Promise`<`any`>

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:82*

*__summary__*: Send JSON data using WebSockets to configured HTTP Endpoint or queue.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | `string` |  The RPC methods to execute |
| params | `Array`<`any`> |  Encoded paramaters as appliucable for the method |
| `Optional` subscription | [SubscriptionHandler](../modules/_plugnet.md#subscriptionhandler) |  Subscription details (internally used) |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, callback: *[ProviderInterface$Callback](../modules/_plugnet.md#providerinterface_callback)*): `Promise`<`number`>

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[subscribe](../interfaces/_plugnet.wsproviderinterface.md#subscribe)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:106*

*__name__*: subscribe

*__summary__*: Allows subscribing to a specific event.

*__example__*:   

```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const rpc = new Rpc(provider);

rpc.state.subscribeStorage([[storage.balances.freeBalance, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  Subscription type |
| method | `string` |  Subscription method |
| params | `Array`<`any`> |  Parameters |
| callback | [ProviderInterface$Callback](../modules/_plugnet.md#providerinterface_callback) |  Callback |

**Returns:** `Promise`<`number`>
Promise resolving to the dd of the subscription you can use with [[unsubscribe]].

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [WSProviderInterface](../interfaces/_plugnet.wsproviderinterface.md).[unsubscribe](../interfaces/_plugnet.wsproviderinterface.md#unsubscribe)*

*Defined in node_modules/@plugnet/rpc-provider/ws/Provider.d.ts:110*

*__summary__*: Allows unsubscribing to subscriptions made with [subscribe](_plugnet.wsprovider.md#subscribe).

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

