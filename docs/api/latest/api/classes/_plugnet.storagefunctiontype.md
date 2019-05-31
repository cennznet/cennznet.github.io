[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [StorageFunctionType](../classes/_plugnet.storagefunctiontype.md)

# Class: StorageFunctionType

## Hierarchy

↳  [EnumType](_plugnet.enumtype.md)<[PlainType](_plugnet.plaintype.md) \| [MapType](_plugnet.maptype-1.md) \| [DoubleMapType](_plugnet.doublemaptype.md)>

**↳ StorageFunctionType**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.storagefunctiontype.md#constructor)

### Properties

* [asDoubleMap](_plugnet.storagefunctiontype.md#asdoublemap)
* [asMap](_plugnet.storagefunctiontype.md#asmap)
* [asType](_plugnet.storagefunctiontype.md#astype)
* [encodedLength](_plugnet.storagefunctiontype.md#encodedlength)
* [index](_plugnet.storagefunctiontype.md#index)
* [isDoubleMap](_plugnet.storagefunctiontype.md#isdoublemap)
* [isEmpty](_plugnet.storagefunctiontype.md#isempty)
* [isMap](_plugnet.storagefunctiontype.md#ismap)
* [isNone](_plugnet.storagefunctiontype.md#isnone)
* [isNull](_plugnet.storagefunctiontype.md#isnull)
* [isPlainType](_plugnet.storagefunctiontype.md#isplaintype)
* [type](_plugnet.storagefunctiontype.md#type)
* [value](_plugnet.storagefunctiontype.md#value)

### Methods

* [eq](_plugnet.storagefunctiontype.md#eq)
* [toHex](_plugnet.storagefunctiontype.md#tohex)
* [toJSON](_plugnet.storagefunctiontype.md#tojson)
* [toNumber](_plugnet.storagefunctiontype.md#tonumber)
* [toString](_plugnet.storagefunctiontype.md#tostring)
* [toU8a](_plugnet.storagefunctiontype.md#tou8a)
* [with](_plugnet.storagefunctiontype.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StorageFunctionType**(value?: *`any`*, index?: *`number`*): [StorageFunctionType](_plugnet.storagefunctiontype.md)

*Overrides [EnumType](_plugnet.enumtype.md).[constructor](_plugnet.enumtype.md#constructor)*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |
| `Optional` index | `number` |

**Returns:** [StorageFunctionType](_plugnet.storagefunctiontype.md)

___

## Properties

<a id="asdoublemap"></a>

###  asDoubleMap

**● asDoubleMap**: *[DoubleMapType](_plugnet.doublemaptype.md)*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:35*

*__description__*: The value as a double mapped value

___
<a id="asmap"></a>

###  asMap

**● asMap**: *[MapType](_plugnet.maptype-1.md)*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:39*

*__description__*: The value as a mapped value

___
<a id="astype"></a>

###  asType

**● asType**: *[PlainType](_plugnet.plaintype.md)*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:43*

*__description__*: The value as a [Type](_plugnet.type.md) value

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
<a id="isdoublemap"></a>

###  isDoubleMap

**● isDoubleMap**: *`boolean`*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:31*

*__description__*: `true` if the storage entry is a doublemap

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [EnumType](_plugnet.enumtype.md).[isEmpty](_plugnet.enumtype.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:39*

*__description__*: Checks if the value is an empty value

___
<a id="ismap"></a>

###  isMap

**● isMap**: *`boolean`*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:47*

*__description__*: `true` if the storage entry is a map

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
<a id="isplaintype"></a>

###  isPlainType

**● isPlainType**: *`boolean`*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:51*

*__description__*: `true` if the storage entry is a plain type

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

*Overrides [EnumType](_plugnet.enumtype.md).[toString](_plugnet.enumtype.md#tostring)*

*Defined in node_modules/@plugnet/types/Metadata/v2/Storage.d.ts:55*

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

