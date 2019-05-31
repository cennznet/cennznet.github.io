[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Bool](../classes/_plugnet.bool.md)

# Class: Bool

*__name__*: Bool

*__description__*: Representation for a boolean value in the system. It extends the base JS `Boolean` class

## Hierarchy

 `Boolean`

**↳ Bool**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.bool.md#constructor)

### Properties

* [encodedLength](_plugnet.bool.md#encodedlength)
* [isEmpty](_plugnet.bool.md#isempty)
* [Boolean](_plugnet.bool.md#boolean)

### Methods

* [eq](_plugnet.bool.md#eq)
* [toHex](_plugnet.bool.md#tohex)
* [toJSON](_plugnet.bool.md#tojson)
* [toString](_plugnet.bool.md#tostring)
* [toU8a](_plugnet.bool.md#tou8a)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Bool**(value?: *[Bool](_plugnet.bool.md) \| `Boolean` \| `Uint8Array` \| `boolean` \| `number`*): [Bool](_plugnet.bool.md)

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:8*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Bool](_plugnet.bool.md) \| `Boolean` \| `Uint8Array` \| `boolean` \| `number` |

**Returns:** [Bool](_plugnet.bool.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:14*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:18*

*__description__*: Checks if the value is an empty value (always false)

___
<a id="boolean"></a>

### `<Static>` Boolean

**● Boolean**: *`BooleanConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:530*

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:22*

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

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:26*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:30*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:34*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/primitive/Bool.d.ts:39*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

