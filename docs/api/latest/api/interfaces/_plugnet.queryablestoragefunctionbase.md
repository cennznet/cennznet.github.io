[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [QueryableStorageFunctionBase](../interfaces/_plugnet.queryablestoragefunctionbase.md)

# Interface: QueryableStorageFunctionBase

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

 [StorageFunction](_plugnet.storagefunction.md)

**↳ QueryableStorageFunctionBase**

↳  [QueryableStorageFunctionPromise](_plugnet.queryablestoragefunctionpromise.md)

## Callable
▸ **__call**(arg?: *[CodecArg](../modules/_plugnet.md#codecarg)*): `CodecResult`

▸ **__call**(arg?: *`any`*): `Uint8Array`

*Defined in node_modules/@plugnet/api/types.d.ts:30*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | [CodecArg](../modules/_plugnet.md#codecarg) |

**Returns:** `CodecResult`

*Defined in node_modules/@plugnet/types/primitive/StorageKey.d.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Uint8Array`

## Index

### Properties

* [at](_plugnet.queryablestoragefunctionbase.md#at)
* [hash](_plugnet.queryablestoragefunctionbase.md#hash)
* [headKey](_plugnet.queryablestoragefunctionbase.md#headkey)
* [key](_plugnet.queryablestoragefunctionbase.md#key)
* [meta](_plugnet.queryablestoragefunctionbase.md#meta)
* [method](_plugnet.queryablestoragefunctionbase.md#method)
* [multi](_plugnet.queryablestoragefunctionbase.md#multi)
* [section](_plugnet.queryablestoragefunctionbase.md#section)
* [size](_plugnet.queryablestoragefunctionbase.md#size)
* [toJSON](_plugnet.queryablestoragefunctionbase.md#tojson)

---

## Properties

<a id="at"></a>

###  at

**● at**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:32*

#### Type declaration
▸(hash: *[Hash](../classes/_plugnet.hash.md) \| `Uint8Array` \| `string`*, arg?: *[CodecArg](../modules/_plugnet.md#codecarg)*): `CodecResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | [Hash](../classes/_plugnet.hash.md) \| `Uint8Array` \| `string` |
| `Optional` arg | [CodecArg](../modules/_plugnet.md#codecarg) |

**Returns:** `CodecResult`

___
<a id="hash"></a>

###  hash

**● hash**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:33*

#### Type declaration
▸(arg?: *[CodecArg](../modules/_plugnet.md#codecarg)*): [HashResult](../modules/_plugnet.md#hashresult)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | [CodecArg](../modules/_plugnet.md#codecarg) |

**Returns:** [HashResult](../modules/_plugnet.md#hashresult)<`CodecResult`, `SubscriptionResult`>

___
<a id="headkey"></a>

### `<Optional>` headKey

**● headKey**: *`Uint8Array`*

*Inherited from [StorageFunction](_plugnet.storagefunction.md).[headKey](_plugnet.storagefunction.md#headkey)*

*Defined in node_modules/@plugnet/types/primitive/StorageKey.d.ts:11*

___
<a id="key"></a>

###  key

**● key**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:34*

#### Type declaration
▸(arg?: *[CodecArg](../modules/_plugnet.md#codecarg)*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | [CodecArg](../modules/_plugnet.md#codecarg) |

**Returns:** `string`

___
<a id="meta"></a>

###  meta

**● meta**: *`MetaV0` \| `MetaV4`*

*Inherited from [StorageFunction](_plugnet.storagefunction.md).[meta](_plugnet.storagefunction.md#meta)*

*Defined in node_modules/@plugnet/types/primitive/StorageKey.d.ts:7*

___
<a id="method"></a>

###  method

**● method**: *`string`*

*Inherited from [StorageFunction](_plugnet.storagefunction.md).[method](_plugnet.storagefunction.md#method)*

*Defined in node_modules/@plugnet/types/primitive/StorageKey.d.ts:8*

___
<a id="multi"></a>

###  multi

**● multi**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:35*

#### Type declaration
▸(args: *`Array`<[CodecArg](../modules/_plugnet.md#codecarg)>*, callback?: *[CodecCallback](../modules/_plugnet.md#codeccallback)*): `SubscriptionResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `Array`<[CodecArg](../modules/_plugnet.md#codecarg)> |
| `Optional` callback | [CodecCallback](../modules/_plugnet.md#codeccallback) |

**Returns:** `SubscriptionResult`

___
<a id="section"></a>

###  section

**● section**: *`string`*

*Inherited from [StorageFunction](_plugnet.storagefunction.md).[section](_plugnet.storagefunction.md#section)*

*Defined in node_modules/@plugnet/types/primitive/StorageKey.d.ts:9*

___
<a id="size"></a>

###  size

**● size**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:36*

#### Type declaration
▸(arg?: *[CodecArg](../modules/_plugnet.md#codecarg)*): [U64Result](../modules/_plugnet.md#u64result)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | [CodecArg](../modules/_plugnet.md#codecarg) |

**Returns:** [U64Result](../modules/_plugnet.md#u64result)<`CodecResult`, `SubscriptionResult`>

___
<a id="tojson"></a>

###  toJSON

**● toJSON**: *`function`*

*Inherited from [StorageFunction](_plugnet.storagefunction.md).[toJSON](_plugnet.storagefunction.md#tojson)*

*Defined in node_modules/@plugnet/types/primitive/StorageKey.d.ts:10*

#### Type declaration
▸(): `any`

**Returns:** `any`

___

