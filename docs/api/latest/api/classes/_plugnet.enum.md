[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Enum](../classes/_plugnet.enum.md)

# Class: Enum

*__name__*: Enum

*__description__*: A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value. This class allows you to retrieve the value either by `toNumber()` exposing the actual raw index, or `toString()` returning a string representation (as provided as part of the constructor)

## Hierarchy

 [Base](_plugnet.base.md)<`number`>

**↳ Enum**

↳  [StorageHasher](_plugnet.storagehasher.md)

↳  [StorageFunctionModifier](_plugnet.storagefunctionmodifier.md)

↳  [NewAccountOutcome](_plugnet.newaccountoutcome.md)

↳  [VoteThreshold](_plugnet.votethreshold.md)

↳  [RewardDestination](_plugnet.rewarddestination.md)

↳  [FeesFee](_cennznet_types.feesfee-1.md)

↳  [GenericAssetFee](_cennznet_types.genericassetfee-1.md)

↳  [FeesFee](_cennznet_types.feesfee.md)

↳  [GenericAssetFee](_cennznet_types.genericassetfee.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.enum.md#constructor)

### Properties

* [encodedLength](_plugnet.enum.md#encodedlength)
* [index](_plugnet.enum.md#index)
* [isEmpty](_plugnet.enum.md#isempty)

### Methods

* [eq](_plugnet.enum.md#eq)
* [toHex](_plugnet.enum.md#tohex)
* [toJSON](_plugnet.enum.md#tojson)
* [toNumber](_plugnet.enum.md#tonumber)
* [toString](_plugnet.enum.md#tostring)
* [toU8a](_plugnet.enum.md#tou8a)
* [decodeEnum](_plugnet.enum.md#decodeenum)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Enum**(def: *[EnumDef](../modules/_plugnet.md#enumdef)*, value?: *[Enum](_plugnet.enum.md) \| `Uint8Array` \| `string` \| `number`*): [Enum](_plugnet.enum.md)

*Overrides [Base](_plugnet.base.md).[constructor](_plugnet.base.md#constructor)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | [EnumDef](../modules/_plugnet.md#enumdef) |
| `Optional` value | [Enum](_plugnet.enum.md) \| `Uint8Array` \| `string` \| `number` |

**Returns:** [Enum](_plugnet.enum.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:21*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:25*

*__description__*: Returns the index for this value (equivalent to toNumber)

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:29*

*__description__*: Checks if the value is an empty value (always false)

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

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

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:37*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:41*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:45*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:49*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

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

*Defined in node_modules/@plugnet/types/codec/Enum.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | [EnumDef](../modules/_plugnet.md#enumdef) |
| value | [Enum](_plugnet.enum.md) \| `Uint8Array` \| `string` \| `number` |

**Returns:** `number` \| `undefined`

___

