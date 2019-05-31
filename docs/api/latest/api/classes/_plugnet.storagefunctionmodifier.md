[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [StorageFunctionModifier](../classes/_plugnet.storagefunctionmodifier.md)

# Class: StorageFunctionModifier

## Hierarchy

↳  [Enum](_plugnet.enum.md)

**↳ StorageFunctionModifier**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.storagefunctionmodifier.md#constructor)

### Properties

* [encodedLength](_plugnet.storagefunctionmodifier.md#encodedlength)
* [index](_plugnet.storagefunctionmodifier.md#index)
* [isEmpty](_plugnet.storagefunctionmodifier.md#isempty)
* [isOptional](_plugnet.storagefunctionmodifier.md#isoptional)

### Methods

* [eq](_plugnet.storagefunctionmodifier.md#eq)
* [toHex](_plugnet.storagefunctionmodifier.md#tohex)
* [toJSON](_plugnet.storagefunctionmodifier.md#tojson)
* [toNumber](_plugnet.storagefunctionmodifier.md#tonumber)
* [toString](_plugnet.storagefunctionmodifier.md#tostring)
* [toU8a](_plugnet.storagefunctionmodifier.md#tou8a)
* [decodeEnum](_plugnet.storagefunctionmodifier.md#decodeenum)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StorageFunctionModifier**(value?: *`any`*): [StorageFunctionModifier](_plugnet.storagefunctionmodifier.md)

*Overrides [Enum](_plugnet.enum.md).[constructor](_plugnet.enum.md#constructor)*

*Defined in node_modules/@plugnet/types/Metadata/v0/Storage.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [StorageFunctionModifier](_plugnet.storagefunctionmodifier.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Enum](_plugnet.enum.md).[encodedLength](_plugnet.enum.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:21*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Inherited from [Enum](_plugnet.enum.md).[index](_plugnet.enum.md#index)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:25*

*__description__*: Returns the index for this value (equivalent to toNumber)

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Enum](_plugnet.enum.md).[isEmpty](_plugnet.enum.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:29*

*__description__*: Checks if the value is an empty value (always false)

___
<a id="isoptional"></a>

###  isOptional

**● isOptional**: *`boolean`*

*Defined in node_modules/@plugnet/types/Metadata/v0/Storage.d.ts:15*

*__description__*: `true` if the storage entry is optional

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Enum](_plugnet.enum.md).[eq](_plugnet.enum.md#eq)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:33*

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

*Inherited from [Enum](_plugnet.enum.md).[toHex](_plugnet.enum.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:37*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Overrides [Enum](_plugnet.enum.md).[toJSON](_plugnet.enum.md#tojson)*

*Defined in node_modules/@plugnet/types/Metadata/v0/Storage.d.ts:16*

**Returns:** `any`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Inherited from [Enum](_plugnet.enum.md).[toNumber](_plugnet.enum.md#tonumber)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:45*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Enum](_plugnet.enum.md).[toString](_plugnet.enum.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:49*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Enum](_plugnet.enum.md).[toU8a](_plugnet.enum.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:54*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeenum"></a>

### `<Static>` decodeEnum

▸ **decodeEnum**(def: *[EnumDef](../modules/_plugnet.md#enumdef)*, value: *[Enum](_plugnet.enum.md) \| `Uint8Array` \| `string` \| `number`*): `number` \| `undefined`

*Inherited from [Enum](_plugnet.enum.md).[decodeEnum](_plugnet.enum.md#decodeenum)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | [EnumDef](../modules/_plugnet.md#enumdef) |
| value | [Enum](_plugnet.enum.md) \| `Uint8Array` \| `string` \| `number` |

**Returns:** `number` \| `undefined`

___

