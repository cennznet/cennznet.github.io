[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ChainProperties](../classes/_plugnet.chainproperties.md)

# Class: ChainProperties

*__name__*: ChainProperties

*__description__*: Wraps the properties retrieved from the chain via the `system.properties` RPC call.

## Hierarchy

↳  [Json](_plugnet.json.md)

**↳ ChainProperties**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.chainproperties.md#constructor)

### Properties

* [__@toStringTag](_plugnet.chainproperties.md#___tostringtag)
* [encodedLength](_plugnet.chainproperties.md#encodedlength)
* [isEmpty](_plugnet.chainproperties.md#isempty)
* [size](_plugnet.chainproperties.md#size)
* [tokenDecimals](_plugnet.chainproperties.md#tokendecimals)
* [tokenSymbol](_plugnet.chainproperties.md#tokensymbol)

### Methods

* [__@iterator](_plugnet.chainproperties.md#___iterator)
* [clear](_plugnet.chainproperties.md#clear)
* [delete](_plugnet.chainproperties.md#delete)
* [entries](_plugnet.chainproperties.md#entries)
* [eq](_plugnet.chainproperties.md#eq)
* [forEach](_plugnet.chainproperties.md#foreach)
* [get](_plugnet.chainproperties.md#get)
* [has](_plugnet.chainproperties.md#has)
* [keys](_plugnet.chainproperties.md#keys)
* [set](_plugnet.chainproperties.md#set)
* [toHex](_plugnet.chainproperties.md#tohex)
* [toJSON](_plugnet.chainproperties.md#tojson)
* [toString](_plugnet.chainproperties.md#tostring)
* [toU8a](_plugnet.chainproperties.md#tou8a)
* [values](_plugnet.chainproperties.md#values)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ChainProperties**(value?: *`object` \| `null`*): [ChainProperties](_plugnet.chainproperties.md)

*Inherited from [Json](_plugnet.json.md).[constructor](_plugnet.json.md#constructor)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `object` \| `null` |

**Returns:** [ChainProperties](_plugnet.chainproperties.md)

___

## Properties

<a id="___tostringtag"></a>

###  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Json](_plugnet.json.md).[encodedLength](_plugnet.json.md#encodedlength)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:18*

*__description__*: Always 0, never encodes as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Json](_plugnet.json.md).[isEmpty](_plugnet.json.md#isempty)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:22*

*__description__*: Checks if the value is an empty value

___
<a id="size"></a>

###  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___
<a id="tokendecimals"></a>

###  tokenDecimals

**● tokenDecimals**: *`number` \| `undefined`*

*Defined in node_modules/@plugnet/types/rpc/ChainProperties.d.ts:11*

*__description__*: The token decimals, if defined (de-facto standard only)

___
<a id="tokensymbol"></a>

###  tokenSymbol

**● tokenSymbol**: *`string` \| `undefined`*

*Defined in node_modules/@plugnet/types/rpc/ChainProperties.d.ts:15*

*__description__*: The token system, if defined (de-facto standard only)

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`string`, `any`]>

*Inherited from Map.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`string`, `any`]>

___
<a id="clear"></a>

###  clear

▸ **clear**(): `void`

*Inherited from Map.clear*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(key: *`string`*): `boolean`

*Inherited from Map.delete*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="entries"></a>

###  entries

▸ **entries**(): `IterableIterator`<[`string`, `any`]>

*Inherited from Map.entries*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`string`, `any`]>

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Json](_plugnet.json.md).[eq](_plugnet.json.md#eq)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:26*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(key: *`string`*): `any` \| `undefined`

*Inherited from Map.get*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `any` \| `undefined`

___
<a id="has"></a>

###  has

▸ **has**(key: *`string`*): `boolean`

*Inherited from Map.has*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="keys"></a>

###  keys

▸ **keys**(): `IterableIterator`<`string`>

*Inherited from Map.keys*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`string`>

___
<a id="set"></a>

###  set

▸ **set**(key: *`string`*, value: *`any`*): `this`

*Inherited from Map.set*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |

**Returns:** `this`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Inherited from [Json](_plugnet.json.md).[toHex](_plugnet.json.md#tohex)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:30*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Json](_plugnet.json.md).[toJSON](_plugnet.json.md#tojson)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:34*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Json](_plugnet.json.md).[toString](_plugnet.json.md#tostring)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:38*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Json](_plugnet.json.md).[toU8a](_plugnet.json.md#tou8a)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:42*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare | `boolean` |

**Returns:** `Uint8Array`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<`any`>

*Inherited from Map.values*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<`any`>

___

