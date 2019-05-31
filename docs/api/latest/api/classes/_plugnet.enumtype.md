[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [EnumType](../classes/_plugnet.enumtype.md)

# Class: EnumType

*__name__*: EnumType

*__description__*: This implements an enum, that based on the value wraps a different type. It is effectively an extension to enum where the value type is determined by the actual index.

## Type parameters
#### T 
## Hierarchy

 [Base](_plugnet.base.md)<[Codec](../interfaces/_plugnet.codec.md)>

**↳ EnumType**

↳  [StorageFunctionType](_plugnet.storagefunctiontype.md)

↳  [StorageFunctionType](_plugnet.storagefunctiontype-2.md)

↳  [StorageFunctionType](_plugnet.storagefunctiontype-3.md)

↳  [StorageFunctionType](_plugnet.storagefunctiontype-1.md)

↳  [ExtrinsicStatus](_plugnet.extrinsicstatus.md)

↳  [DigestItem](_plugnet.digestitem.md)

↳  [ValidityAttestation](_plugnet.validityattestation.md)

↳  [ContractInfo](_plugnet.contractinfo.md)

↳  [Phase](_plugnet.phase.md)

↳  [MisbehaviorKind](_plugnet.misbehaviorkind.md)

↳  [PermissionVersions](_cennznet_types.permissionversions.md)

↳  [MemberRoles](_cennznet_types.memberroles-1.md)

↳  [Response](_cennznet_types.response-1.md)

↳  [Fee](_cennznet_types.fee-1.md)

↳  [PermissionVersions](_cennznet_types.permissionversions-1.md)

↳  [MemberRoles](_cennznet_types.memberroles.md)

↳  [Response](_cennznet_types.response.md)

↳  [Fee](_cennznet_types.fee.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.enumtype.md#constructor)

### Properties

* [encodedLength](_plugnet.enumtype.md#encodedlength)
* [index](_plugnet.enumtype.md#index)
* [isEmpty](_plugnet.enumtype.md#isempty)
* [isNone](_plugnet.enumtype.md#isnone)
* [isNull](_plugnet.enumtype.md#isnull)
* [type](_plugnet.enumtype.md#type)
* [value](_plugnet.enumtype.md#value)

### Methods

* [eq](_plugnet.enumtype.md#eq)
* [toHex](_plugnet.enumtype.md#tohex)
* [toJSON](_plugnet.enumtype.md#tojson)
* [toNumber](_plugnet.enumtype.md#tonumber)
* [toString](_plugnet.enumtype.md#tostring)
* [toU8a](_plugnet.enumtype.md#tou8a)
* [with](_plugnet.enumtype.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EnumType**(def: *[TypesDef](../modules/_plugnet.md#typesdef)*, value?: *`any`*, index?: *`number` \| [EnumType](_plugnet.enumtype.md)<`T`>*, aliasses?: *[Aliasses](../modules/_plugnet.md#aliasses)*): [EnumType](_plugnet.enumtype.md)

*Overrides [Base](_plugnet.base.md).[constructor](_plugnet.base.md#constructor)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | [TypesDef](../modules/_plugnet.md#typesdef) |
| `Optional` value | `any` |
| `Optional` index | `number` \| [EnumType](_plugnet.enumtype.md)<`T`> |
| `Optional` aliasses | [Aliasses](../modules/_plugnet.md#aliasses) |

**Returns:** [EnumType](_plugnet.enumtype.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:31*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:35*

*__description__*: The index of the metadata value

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:39*

*__description__*: Checks if the value is an empty value

___
<a id="isnone"></a>

###  isNone

**● isNone**: *`boolean`*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:43*

*__description__*: Checks if the Enum points to a [Null](_plugnet.null.md) type

___
<a id="isnull"></a>

###  isNull

**● isNull**: *`boolean`*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:47*

*__description__*: Checks if the Enum points to a [Null](_plugnet.null.md) type (deprecated, use isNone)

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:51*

*__description__*: The name of the type this enum value represents

___
<a id="value"></a>

###  value

**● value**: *[Codec](../interfaces/_plugnet.codec.md)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:55*

*__description__*: The value of the enum

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

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

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:63*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:67*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:71*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:75*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

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

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:27*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [EnumConstructor](../modules/_plugnet.md#enumconstructor)<[EnumType](_plugnet.enumtype.md)<`S`>>

___

