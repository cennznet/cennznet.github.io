[@cennznet/api](../README.md) > [@cennznet/types](../modules/_cennznet_types.md) > [Owner](../classes/_cennznet_types.owner-1.md)

# Class: Owner

## Type parameters
#### T :  [Codec](../interfaces/_plugnet.codec.md)
## Hierarchy

↳  [Option](_plugnet.option.md)

**↳ Owner**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_cennznet_types.owner-1.md#constructor)

### Properties

* [encodedLength](_cennznet_types.owner-1.md#encodedlength)
* [isEmpty](_cennznet_types.owner-1.md#isempty)
* [isNone](_cennznet_types.owner-1.md#isnone)
* [isSome](_cennznet_types.owner-1.md#issome)
* [value](_cennznet_types.owner-1.md#value)

### Methods

* [eq](_cennznet_types.owner-1.md#eq)
* [toHex](_cennznet_types.owner-1.md#tohex)
* [toJSON](_cennznet_types.owner-1.md#tojson)
* [toString](_cennznet_types.owner-1.md#tostring)
* [toU8a](_cennznet_types.owner-1.md#tou8a)
* [unwrap](_cennznet_types.owner-1.md#unwrap)
* [unwrapOr](_cennznet_types.owner-1.md#unwrapor)
* [decodeOption](_cennznet_types.owner-1.md#decodeoption)
* [with](_cennznet_types.owner-1.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Owner**(Type: *[Constructor](../interfaces/_plugnet.constructor.md)*, value?: *`any`*): [Owner](_cennznet_types.owner-1.md)

*Inherited from [Option](_plugnet.option.md).[constructor](_plugnet.option.md#constructor)*

*Overrides [Base](_plugnet.base.md).[constructor](_plugnet.base.md#constructor)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md) |
| `Optional` value | `any` |

**Returns:** [Owner](_cennznet_types.owner-1.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Option](_plugnet.option.md).[encodedLength](_plugnet.option.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:18*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Option](_plugnet.option.md).[isEmpty](_plugnet.option.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:22*

*__description__*: Checks if the Option has no value

___
<a id="isnone"></a>

###  isNone

**● isNone**: *`boolean`*

*Inherited from [Option](_plugnet.option.md).[isNone](_plugnet.option.md#isnone)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:26*

*__description__*: Checks if the Option has no value

___
<a id="issome"></a>

###  isSome

**● isSome**: *`boolean`*

*Inherited from [Option](_plugnet.option.md).[isSome](_plugnet.option.md#issome)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:30*

*__description__*: Checks if the Option has a value

___
<a id="value"></a>

###  value

**● value**: *[Codec](../interfaces/_plugnet.codec.md)*

*Inherited from [Option](_plugnet.option.md).[value](_plugnet.option.md#value)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:34*

*__description__*: The actual value for the Option

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Option](_plugnet.option.md).[eq](_plugnet.option.md#eq)*

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

*Inherited from [Option](_plugnet.option.md).[toHex](_plugnet.option.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:42*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Option](_plugnet.option.md).[toJSON](_plugnet.option.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:46*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Option](_plugnet.option.md).[toString](_plugnet.option.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:50*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Option](_plugnet.option.md).[toU8a](_plugnet.option.md#tou8a)*

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

*Inherited from [Option](_plugnet.option.md).[unwrap](_plugnet.option.md#unwrap)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:59*

*__description__*: Returns the value that the Option represents (if available), throws if null

**Returns:** `T`

___
<a id="unwrapor"></a>

###  unwrapOr

▸ **unwrapOr**<`O`>(defaultValue: *`O`*): `T` \| `O`

*Inherited from [Option](_plugnet.option.md).[unwrapOr](_plugnet.option.md#unwrapor)*

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

*Inherited from [Option](_plugnet.option.md).[decodeOption](_plugnet.option.md#decodeoption)*

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

*Inherited from [Option](_plugnet.option.md).[with](_plugnet.option.md#with)*

*Defined in node_modules/@plugnet/types/codec/Option.d.ts:14*

**Type parameters:**

#### O :  [Codec](../interfaces/_plugnet.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md) |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md)<[Option](_plugnet.option.md)<`O`>>

___

