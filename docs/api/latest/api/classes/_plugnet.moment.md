[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Moment](../classes/_plugnet.moment.md)

# Class: Moment

*__name__*: Moment

*__description__*: A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust), so any numbers passed an/out are always per-second. For any encoding/decoding the 1000 multiplier would be applied to get it in line with JavaScript formats. It extends the base JS `Date` object and has all the methods available that are applicable to any `Date`

## Hierarchy

 `Date`

**↳ Moment**

↳  [MomentOf](_plugnet.momentof.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.moment.md#constructor)

### Properties

* [encodedLength](_plugnet.moment.md#encodedlength)
* [isEmpty](_plugnet.moment.md#isempty)
* [Date](_plugnet.moment.md#date)

### Methods

* [bitLength](_plugnet.moment.md#bitlength)
* [eq](_plugnet.moment.md#eq)
* [toBn](_plugnet.moment.md#tobn)
* [toHex](_plugnet.moment.md#tohex)
* [toJSON](_plugnet.moment.md#tojson)
* [toNumber](_plugnet.moment.md#tonumber)
* [toString](_plugnet.moment.md#tostring)
* [toU8a](_plugnet.moment.md#tou8a)
* [decodeMoment](_plugnet.moment.md#decodemoment)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Moment**(value?: *[Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber)*): [Moment](_plugnet.moment.md)

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [Moment](_plugnet.moment.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:21*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:25*

*__description__*: Checks if the value is an empty value

___
<a id="date"></a>

### `<Static>` Date

**● Date**: *`DateConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:897*

___

## Methods

<a id="bitlength"></a>

###  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_plugnet.md#uintbitlength)

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:33*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_plugnet.md#uintbitlength)

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:29*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tobn"></a>

###  toBn

▸ **toBn**(): `BN`

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:37*

*__description__*: Returns the BN representation of the timestamp

**Returns:** `BN`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:41*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Overrides Date.toJSON*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:45*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:49*

*__description__*: Returns the number representation for the timestamp

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Overrides Date.toString*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:53*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:58*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodemoment"></a>

### `<Static>` decodeMoment

▸ **decodeMoment**(value: *[Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber)*): `Date`

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** `Date`

___

