[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [QueryableStorageFunctionPromise](../interfaces/_plugnet.queryablestoragefunctionpromise.md)

# Interface: QueryableStorageFunctionPromise

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

↳  [QueryableStorageFunctionBase](_plugnet.queryablestoragefunctionbase.md)<`CodecResult`, `SubscriptionResult`>

**↳ QueryableStorageFunctionPromise**

## Callable
▸ **__call**(callback: *[CodecCallback](../modules/_plugnet.md#codeccallback)*): `SubscriptionResult`

▸ **__call**(arg: *[CodecArg](../modules/_plugnet.md#codecarg)*, callback: *[CodecCallback](../modules/_plugnet.md#codeccallback)*): `SubscriptionResult`

▸ **__call**(arg?: *[CodecArg](../modules/_plugnet.md#codecarg)*): `CodecResult`

▸ **__call**(arg?: *`any`*): `Uint8Array`

*Defined in node_modules/@plugnet/api/types.d.ts:38*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | [CodecCallback](../modules/_plugnet.md#codeccallback) |

**Returns:** `SubscriptionResult`

*Defined in node_modules/@plugnet/api/types.d.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | [CodecArg](../modules/_plugnet.md#codecarg) |
| callback | [CodecCallback](../modules/_plugnet.md#codeccallback) |

**Returns:** `SubscriptionResult`

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

* [at](_plugnet.queryablestoragefunctionpromise.md#at)
* [hash](_plugnet.queryablestoragefunctionpromise.md#hash)
* [headKey](_plugnet.queryablestoragefunctionpromise.md#headkey)
* [key](_plugnet.queryablestoragefunctionpromise.md#key)
* [meta](_plugnet.queryablestoragefunctionpromise.md#meta)
* [method](_plugnet.queryablestoragefunctionpromise.md#method)
* [multi](_plugnet.queryablestoragefunctionpromise.md#multi)
* [section](_plugnet.queryablestoragefunctionpromise.md#section)
* [size](_plugnet.queryablestoragefunctionpromise.md#size)
* [toJSON](_plugnet.queryablestoragefunctionpromise.md#tojson)

---

## Properties

<a id="at"></a>

###  at

**● at**: *`function`*

*Inherited from [QueryableStorageFunctionBase](_plugnet.queryablestoragefunctionbase.md).[at](_plugnet.queryablestoragefunctionbase.md#at)*

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

*Inherited from [QueryableStorageFunctionBase](_plugnet.queryablestoragefunctionbase.md).[hash](_plugnet.queryablestoragefunctionbase.md#hash)*

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

*Inherited from [QueryableStorageFunctionBase](_plugnet.queryablestoragefunctionbase.md).[key](_plugnet.queryablestoragefunctionbase.md#key)*

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

*Inherited from [QueryableStorageFunctionBase](_plugnet.queryablestoragefunctionbase.md).[multi](_plugnet.queryablestoragefunctionbase.md#multi)*

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

*Inherited from [QueryableStorageFunctionBase](_plugnet.queryablestoragefunctionbase.md).[size](_plugnet.queryablestoragefunctionbase.md#size)*

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

