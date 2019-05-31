[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Phase](../classes/_plugnet.phase.md)

# Class: Phase

*__name__*: Phase

*__description__*: An [EnumType](_plugnet.enumtype.md) that indicates the specific phase where the [EventRecord](_plugnet.eventrecord.md) was generated

## Hierarchy

↳  [EnumType](_plugnet.enumtype.md)<[ApplyExtrinsic](_plugnet.applyextrinsic.md) \| [Finalization](_plugnet.finalization.md)>

**↳ Phase**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.phase.md#constructor)

### Properties

* [asApplyExtrinsic](_plugnet.phase.md#asapplyextrinsic)
* [asFinalization](_plugnet.phase.md#asfinalization)
* [encodedLength](_plugnet.phase.md#encodedlength)
* [index](_plugnet.phase.md#index)
* [isApplyExtrinsic](_plugnet.phase.md#isapplyextrinsic)
* [isEmpty](_plugnet.phase.md#isempty)
* [isFinalization](_plugnet.phase.md#isfinalization)
* [isNone](_plugnet.phase.md#isnone)
* [isNull](_plugnet.phase.md#isnull)
* [type](_plugnet.phase.md#type)
* [value](_plugnet.phase.md#value)

### Methods

* [eq](_plugnet.phase.md#eq)
* [toHex](_plugnet.phase.md#tohex)
* [toJSON](_plugnet.phase.md#tojson)
* [toNumber](_plugnet.phase.md#tonumber)
* [toString](_plugnet.phase.md#tostring)
* [toU8a](_plugnet.phase.md#tou8a)
* [with](_plugnet.phase.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Phase**(value: *`any`*, index?: *`number`*): [Phase](_plugnet.phase.md)

*Overrides [EnumType](_plugnet.enumtype.md).[constructor](_plugnet.enumtype.md#constructor)*

*Defined in node_modules/@plugnet/types/type/EventRecord.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` index | `number` |

**Returns:** [Phase](_plugnet.phase.md)

___

## Properties

<a id="asapplyextrinsic"></a>

###  asApplyExtrinsic

**● asApplyExtrinsic**: *[ApplyExtrinsic](_plugnet.applyextrinsic.md)*

*Defined in node_modules/@plugnet/types/type/EventRecord.d.ts:30*

*__description__*: Returns the item as a [ApplyExtrinsic](_plugnet.applyextrinsic.md)

___
<a id="asfinalization"></a>

###  asFinalization

**● asFinalization**: *[Finalization](_plugnet.finalization.md)*

*Defined in node_modules/@plugnet/types/type/EventRecord.d.ts:34*

*__description__*: Returns the item as a [Finalization](_plugnet.finalization.md)

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [EnumType](_plugnet.enumtype.md).[encodedLength](_plugnet.enumtype.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:31*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Inherited from [EnumType](_plugnet.enumtype.md).[index](_plugnet.enumtype.md#index)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:35*

*__description__*: The index of the metadata value

___
<a id="isapplyextrinsic"></a>

###  isApplyExtrinsic

**● isApplyExtrinsic**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/EventRecord.d.ts:38*

*__description__*: true when this is a ApplyExtrinsic

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [EnumType](_plugnet.enumtype.md).[isEmpty](_plugnet.enumtype.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:39*

*__description__*: Checks if the value is an empty value

___
<a id="isfinalization"></a>

###  isFinalization

**● isFinalization**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/EventRecord.d.ts:42*

*__description__*: true when this is a ApplyExtrinsic

___
<a id="isnone"></a>

###  isNone

**● isNone**: *`boolean`*

*Inherited from [EnumType](_plugnet.enumtype.md).[isNone](_plugnet.enumtype.md#isnone)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:43*

*__description__*: Checks if the Enum points to a [Null](_plugnet.null.md) type

___
<a id="isnull"></a>

###  isNull

**● isNull**: *`boolean`*

*Inherited from [EnumType](_plugnet.enumtype.md).[isNull](_plugnet.enumtype.md#isnull)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:47*

*__description__*: Checks if the Enum points to a [Null](_plugnet.null.md) type (deprecated, use isNone)

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from [EnumType](_plugnet.enumtype.md).[type](_plugnet.enumtype.md#type)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:51*

*__description__*: The name of the type this enum value represents

___
<a id="value"></a>

###  value

**● value**: *[Codec](../interfaces/_plugnet.codec.md)*

*Inherited from [EnumType](_plugnet.enumtype.md).[value](_plugnet.enumtype.md#value)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:55*

*__description__*: The value of the enum

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [EnumType](_plugnet.enumtype.md).[eq](_plugnet.enumtype.md#eq)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:59*

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

*Inherited from [EnumType](_plugnet.enumtype.md).[toHex](_plugnet.enumtype.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:63*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [EnumType](_plugnet.enumtype.md).[toJSON](_plugnet.enumtype.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:67*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_plugnet.enumtype.md).[toNumber](_plugnet.enumtype.md#tonumber)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:71*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [EnumType](_plugnet.enumtype.md).[toString](_plugnet.enumtype.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:75*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [EnumType](_plugnet.enumtype.md).[toU8a](_plugnet.enumtype.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:80*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

### `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [EnumConstructor](../modules/_plugnet.md#enumconstructor)<[EnumType](_plugnet.enumtype.md)<`S`>>

*Inherited from [EnumType](_plugnet.enumtype.md).[with](_plugnet.enumtype.md#with)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:27*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [EnumConstructor](../modules/_plugnet.md#enumconstructor)<[EnumType](_plugnet.enumtype.md)<`S`>>

___

