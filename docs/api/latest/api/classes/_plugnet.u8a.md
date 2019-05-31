[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [U8a](../classes/_plugnet.u8a.md)

# Class: U8a

*__name__*: U8a

*__description__*: A basic wrapper around Uint8Array, with no frills and no fuss. It does differ from other implementations where it will consume the full Uint8Array as passed to it. As such it is meant to be subclassed where the wrapper takes care of the actual lengths instead of used directly.

## Hierarchy

 `Uint8Array`

**↳ U8a**

↳  [U8aFixed](_plugnet.u8afixed.md)

↳  [Bytes](_plugnet.bytes.md)

↳  [IHash](../interfaces/_plugnet.ihash.md)

↳  [Data](_plugnet.data.md)

↳  [ExtrinsicEra](_plugnet.extrinsicera.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Indexable

\[index: `number`\]:&nbsp;`number`
## Index

### Constructors

* [constructor](_plugnet.u8a.md#constructor)

### Properties

* [encodedLength](_plugnet.u8a.md#encodedlength)
* [isEmpty](_plugnet.u8a.md#isempty)
* [length](_plugnet.u8a.md#length)
* [Uint8Array](_plugnet.u8a.md#uint8array)

### Methods

* [eq](_plugnet.u8a.md#eq)
* [subarray](_plugnet.u8a.md#subarray)
* [toHex](_plugnet.u8a.md#tohex)
* [toJSON](_plugnet.u8a.md#tojson)
* [toString](_plugnet.u8a.md#tostring)
* [toU8a](_plugnet.u8a.md#tou8a)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new U8a**(value?: *[AnyU8a](../modules/_plugnet.md#anyu8a)*): [U8a](_plugnet.u8a.md)

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyU8a](../modules/_plugnet.md#anyu8a) |

**Returns:** [U8a](_plugnet.u8a.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:17*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:21*

*__description__*: Returns true if the type wraps an empty/default all-0 value

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Overrides Uint8Array.length*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:25*

*__description__*: The length of the value

___
<a id="uint8array"></a>

### `<Static>` Uint8Array

**● Uint8Array**: *`Uint8ArrayConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2205*

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:29*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="subarray"></a>

###  subarray

▸ **subarray**(begin: *`number`*, end?: *`number`*): `Uint8Array`

*Overrides Uint8Array.subarray*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:35*

*__description__*: Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| begin | `number` |  The position to start at |
| `Optional` end | `number` |  The position to end at |

**Returns:** `Uint8Array`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:39*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:43*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Overrides Uint8Array.toString*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:47*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:52*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

