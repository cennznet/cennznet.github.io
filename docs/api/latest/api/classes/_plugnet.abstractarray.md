[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [AbstractArray](../classes/_plugnet.abstractarray.md)

# Class: AbstractArray

*__name__*: AbstractArray

*__description__*: This manages codec arrays. It is an extension to Array, providing specific encoding/decoding on top of the base type.

## Type parameters
#### T :  [Codec](../interfaces/_plugnet.codec.md)
## Hierarchy

 `Array`<`T`>

**↳ AbstractArray**

↳  [Vector](_plugnet.vector.md)

↳  [Tuple](_plugnet.tuple.md)

↳  [VectorAny](_plugnet.vectorany.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Indexable

\[n: `number`\]:&nbsp;`T`
## Index

### Properties

* [encodedLength](_plugnet.abstractarray.md#encodedlength)
* [isEmpty](_plugnet.abstractarray.md#isempty)
* [length](_plugnet.abstractarray.md#length)
* [Array](_plugnet.abstractarray.md#array)

### Methods

* [eq](_plugnet.abstractarray.md#eq)
* [filter](_plugnet.abstractarray.md#filter)
* [map](_plugnet.abstractarray.md#map)
* [toArray](_plugnet.abstractarray.md#toarray)
* [toHex](_plugnet.abstractarray.md#tohex)
* [toJSON](_plugnet.abstractarray.md#tojson)
* [toString](_plugnet.abstractarray.md#tostring)
* [toU8a](_plugnet.abstractarray.md#tou8a)

---

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:17*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:13*

*__description__*: Checks if the value is an empty value

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Overrides Array.length*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:21*

*__description__*: The length of the value

___
<a id="array"></a>

### `<Static>` Array

**● Array**: *`ArrayConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1358*

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:25*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="filter"></a>

###  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`T`>

*Overrides Array.filter*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:52*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<`T`>

___
<a id="map"></a>

###  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Overrides Array.map*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:58*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(): `Array`<`T`>

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:29*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`T`>

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:33*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:37*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Overrides Array.toString*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:41*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:46*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

