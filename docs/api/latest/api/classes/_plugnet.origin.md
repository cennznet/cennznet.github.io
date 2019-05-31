[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Origin](../classes/_plugnet.origin.md)

# Class: Origin

*__name__*: Origin

*__description__*: Where Origin occurs, it should be ignored as an internal-only value, so it should never actually be constructed

## Hierarchy

 [Null](_plugnet.null.md)

**↳ Origin**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.origin.md#constructor)

### Properties

* [encodedLength](_plugnet.origin.md#encodedlength)
* [isEmpty](_plugnet.origin.md#isempty)

### Methods

* [eq](_plugnet.origin.md#eq)
* [toHex](_plugnet.origin.md#tohex)
* [toJSON](_plugnet.origin.md#tojson)
* [toString](_plugnet.origin.md#tostring)
* [toU8a](_plugnet.origin.md#tou8a)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Origin**(): [Origin](_plugnet.origin.md)

*Defined in node_modules/@plugnet/types/type/Origin.d.ts:8*

**Returns:** [Origin](_plugnet.origin.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Null](_plugnet.null.md).[encodedLength](_plugnet.null.md#encodedlength)*

*Defined in node_modules/@plugnet/types/primitive/Null.d.ts:11*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Null](_plugnet.null.md).[isEmpty](_plugnet.null.md#isempty)*

*Defined in node_modules/@plugnet/types/primitive/Null.d.ts:15*

*__description__*: Checks if the value is an empty value (always true)

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Null](_plugnet.null.md).[eq](_plugnet.null.md#eq)*

*Defined in node_modules/@plugnet/types/primitive/Null.d.ts:19*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Inherited from [Null](_plugnet.null.md).[toHex](_plugnet.null.md#tohex)*

*Defined in node_modules/@plugnet/types/primitive/Null.d.ts:23*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Null](_plugnet.null.md).[toJSON](_plugnet.null.md#tojson)*

*Defined in node_modules/@plugnet/types/primitive/Null.d.ts:27*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Null](_plugnet.null.md).[toString](_plugnet.null.md#tostring)*

*Defined in node_modules/@plugnet/types/primitive/Null.d.ts:31*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Null](_plugnet.null.md).[toU8a](_plugnet.null.md#tou8a)*

*Defined in node_modules/@plugnet/types/primitive/Null.d.ts:36*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

