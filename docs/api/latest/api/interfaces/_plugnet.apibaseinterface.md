[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ApiBaseInterface](../interfaces/_plugnet.apibaseinterface.md)

# Interface: ApiBaseInterface

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

 `object`

**↳ ApiBaseInterface**

## Implemented by

* [Api](../classes/_cennznet_api.api-1.md)
* [Api](../classes/_cennznet_api.api.md)
* [ApiBase](../classes/_plugnet.apibase.md)
* [ApiPromise](../classes/_plugnet.apipromise.md)
* [ApiPromiseInterface](_plugnet.apipromiseinterface.md)
* [ApiRx](../classes/_plugnet.apirx.md)
* [ApiRx](../classes/_cennznet_api.apirx.md)
* [ApiRx](../classes/_cennznet_api.apirx-1.md)
* [ApiRxInterface](_plugnet.apirxinterface.md)

## Index

### Properties

* [on](_plugnet.apibaseinterface.md#on)
* [once](_plugnet.apibaseinterface.md#once)
* [type](_plugnet.apibaseinterface.md#type)

---

## Properties

<a id="on"></a>

###  on

**● on**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:121*

#### Type declaration
▸(type: *[ApiInterface$Events](../modules/_plugnet.md#apiinterface_events)*, handler: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ApiInterface$Events](../modules/_plugnet.md#apiinterface_events) |
| handler | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

**● once**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:122*

#### Type declaration
▸(type: *[ApiInterface$Events](../modules/_plugnet.md#apiinterface_events)*, handler: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ApiInterface$Events](../modules/_plugnet.md#apiinterface_events) |
| handler | `function` |

**Returns:** `this`

___
<a id="type"></a>

###  type

**● type**: *[ApiType](../modules/_plugnet.md#apitype)*

*Defined in node_modules/@plugnet/api/types.d.ts:120*

___

