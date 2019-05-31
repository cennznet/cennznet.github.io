[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Set](../classes/_plugnet.set.md)

# Class: Set

*__name__*: Set

*__description__*: An Set is an array of string values, represented an an encoded type by a bitwise representation of the values.

## Hierarchy

 [Base](_plugnet.base.md)<`Array`<`string`>>

**↳ Set**

↳  [WithdrawReasons](_plugnet.withdrawreasons.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.set.md#constructor)

### Properties

* [encodedLength](_plugnet.set.md#encodedlength)
* [isEmpty](_plugnet.set.md#isempty)
* [valueEncoded](_plugnet.set.md#valueencoded)
* [values](_plugnet.set.md#values)

### Methods

* [eq](_plugnet.set.md#eq)
* [toHex](_plugnet.set.md#tohex)
* [toJSON](_plugnet.set.md#tojson)
* [toString](_plugnet.set.md#tostring)
* [toU8a](_plugnet.set.md#tou8a)
* [decodeSet](_plugnet.set.md#decodeset)
* [encodeSet](_plugnet.set.md#encodeset)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Set**(setValues: *[SetValues](../modules/_plugnet.md#setvalues)*, value?: *`Array`<`string`> \| `Uint8Array` \| `number`*): [Set](_plugnet.set.md)

*Overrides [Base](_plugnet.base.md).[constructor](_plugnet.base.md#constructor)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | [SetValues](../modules/_plugnet.md#setvalues) |
| `Optional` value | `Array`<`string`> \| `Uint8Array` \| `number` |

**Returns:** [Set](_plugnet.set.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:20*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:24*

*__description__*: true is the Set contains no values

___
<a id="valueencoded"></a>

###  valueEncoded

**● valueEncoded**: *`number`*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:32*

*__description__*: The encoded value for the set members

___
<a id="values"></a>

###  values

**● values**: *`Array`<`string`>*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:28*

*__description__*: The actual set values as a Array

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:36*

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

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:40*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:44*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:48*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:53*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeset"></a>

### `<Static>` decodeSet

▸ **decodeSet**(setValues: *[SetValues](../modules/_plugnet.md#setvalues)*, value?: *`Array`<`string`> \| `Uint8Array` \| `number`*): `Array`<`string`>

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | [SetValues](../modules/_plugnet.md#setvalues) |
| `Optional` value | `Array`<`string`> \| `Uint8Array` \| `number` |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

### `<Static>` encodeSet

▸ **encodeSet**(setValues: *[SetValues](../modules/_plugnet.md#setvalues)*, value: *`Array`<`string`>*): `number`

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | [SetValues](../modules/_plugnet.md#setvalues) |
| value | `Array`<`string`> |

**Returns:** `number`

___

