[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [SubmittableExtrinsicFunction](../interfaces/_plugnet.submittableextrinsicfunction.md)

# Interface: SubmittableExtrinsicFunction

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

 [MethodFunction](_plugnet.methodfunction.md)

**↳ SubmittableExtrinsicFunction**

## Callable
▸ **__call**(...params: *`Array`<[CodecArg](../modules/_plugnet.md#codecarg)>*): [SubmittableExtrinsic](_plugnet.submittableextrinsic.md)<`CodecResult`, `SubscriptionResult`>

▸ **__call**(...args: *`any`[]*): [Method](../classes/_plugnet.method.md)

*Defined in node_modules/@plugnet/api/types.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` params | `Array`<[CodecArg](../modules/_plugnet.md#codecarg)> |

**Returns:** [SubmittableExtrinsic](_plugnet.submittableextrinsic.md)<`CodecResult`, `SubscriptionResult`>

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** [Method](../classes/_plugnet.method.md)

## Index

### Properties

* [callIndex](_plugnet.submittableextrinsicfunction.md#callindex)
* [meta](_plugnet.submittableextrinsicfunction.md#meta)
* [method](_plugnet.submittableextrinsicfunction.md#method)
* [section](_plugnet.submittableextrinsicfunction.md#section)
* [toJSON](_plugnet.submittableextrinsicfunction.md#tojson)

---

## Properties

<a id="callindex"></a>

###  callIndex

**● callIndex**: *`Uint8Array`*

*Inherited from [MethodFunction](_plugnet.methodfunction.md).[callIndex](_plugnet.methodfunction.md#callindex)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:7*

___
<a id="meta"></a>

###  meta

**● meta**: *[FunctionMetadata](../classes/_plugnet.functionmetadata.md)*

*Inherited from [MethodFunction](_plugnet.methodfunction.md).[meta](_plugnet.methodfunction.md#meta)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:8*

___
<a id="method"></a>

###  method

**● method**: *`string`*

*Inherited from [MethodFunction](_plugnet.methodfunction.md).[method](_plugnet.methodfunction.md#method)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:9*

___
<a id="section"></a>

###  section

**● section**: *`string`*

*Inherited from [MethodFunction](_plugnet.methodfunction.md).[section](_plugnet.methodfunction.md#section)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:10*

___
<a id="tojson"></a>

###  toJSON

**● toJSON**: *`function`*

*Inherited from [MethodFunction](_plugnet.methodfunction.md).[toJSON](_plugnet.methodfunction.md#tojson)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:11*

#### Type declaration
▸(): `any`

**Returns:** `any`

___

