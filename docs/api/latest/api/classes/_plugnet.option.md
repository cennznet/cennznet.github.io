[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Option](../classes/_plugnet.option.md)

# Class: Option

*__name__*: Option

*__description__*: An Option is an optional field. Basically the first byte indicates that there is is value to follow. If the byte is `1` there is an actual value. So the Option implements that - decodes, checks for optionality and wraps the required structure with a value if/as required/found.

## Type parameters
#### T :  [Codec](../interfaces/_plugnet.codec.md)
## Hierarchy

 [Base](_plugnet.base.md)<`T`>

**↳ Option**

↳  [Owner](_cennznet_types.owner-1.md)

↳  [OptionalDoughnut](_cennznet_types.optionaldoughnut-1.md)

↳  [OptionalFeeExchange](_cennznet_types.optionalfeeexchange.md)

↳  [OptionalDoughnut](_cennznet_types.optionaldoughnut.md)

↳  [OptionalFeeExchange](_cennznet_types.optionalfeeexchange-1.md)

↳  [Owner](_cennznet_types.owner.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.option.md#constructor)

### Properties

* [encodedLength](_plugnet.option.md#encodedlength)
* [isEmpty](_plugnet.option.md#isempty)
* [isNone](_plugnet.option.md#isnone)
* [isSome](_plugnet.option.md#issome)
* [value](_plugnet.option.md#value)

### Methods

* [eq](_plugnet.option.md#eq)
* [toHex](_plugnet.option.md#tohex)
* [toJSON](_plugnet.option.md#tojson)
* [toString](_plugnet.option.md#tostring)
* [toU8a](_plugnet.option.md#tou8a)
* [unwrap](_plugnet.option.md#unwrap)
* [unwrapOr](_plugnet.option.md#unwrapor)
* [decodeOption](_plugnet.option.md#decodeoption)
* [with](_plugnet.option.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Option**(Type: *[Constructor](../interfaces/_plugnet.constructor.md)*, value?: *`any`*): [Option](_plugnet.option.md)

*Overrides [Base](_plugnet.base.md).[constructor](_plugnet.base.md#constructor)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md) |
| `Optional` value | `any` |

**Returns:** [Option](_plugnet.option.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:18*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:22*

*__description__*: Checks if the Option has no value

___
<a id="isnone"></a>

###  isNone

**● isNone**: *`boolean`*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:26*

*__description__*: Checks if the Option has no value

___
<a id="issome"></a>

###  isSome

**● isSome**: *`boolean`*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:30*

*__description__*: Checks if the Option has a value

___
<a id="value"></a>

###  value

**● value**: *[Codec](../interfaces/_plugnet.codec.md)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:34*

*__description__*: The actual value for the Option

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:38*

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

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:42*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:46*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:50*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:55*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="unwrap"></a>

###  unwrap

▸ **unwrap**(): `T`

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:59*

*__description__*: Returns the value that the Option represents (if available), throws if null

**Returns:** `T`

___
<a id="unwrapor"></a>

###  unwrapOr

▸ **unwrapOr**<`O`>(defaultValue: *`O`*): `T` \| `O`

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:64*

*__description__*: Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

#### O 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| defaultValue | `O` |  The value to return if the option isNone |

**Returns:** `T` \| `O`

___
<a id="decodeoption"></a>

### `<Static>` decodeOption

▸ **decodeOption**<`O`>(Type: *[Constructor](../interfaces/_plugnet.constructor.md)*, value?: *`any`*): [Codec](../interfaces/_plugnet.codec.md)

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:13*

**Type parameters:**

#### O 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md) |
| `Optional` value | `any` |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

___
<a id="with"></a>

### `<Static>` with

▸ **with**<`O`>(Type: *[Constructor](../interfaces/_plugnet.constructor.md)*): [Constructor](../interfaces/_plugnet.constructor.md)<[Option](_plugnet.option.md)<`O`>>

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:14*

**Type parameters:**

#### O :  [Codec](../interfaces/_plugnet.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md) |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md)<[Option](_plugnet.option.md)<`O`>>

___

