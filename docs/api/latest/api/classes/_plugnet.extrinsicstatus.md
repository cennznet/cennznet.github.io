[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ExtrinsicStatus](../classes/_plugnet.extrinsicstatus.md)

# Class: ExtrinsicStatus

*__name__*: ExtrinsicStatus

*__description__*: An [EnumType](_plugnet.enumtype.md) that indicates the status of the [Extrinsic](_plugnet.extrinsic.md) as been submitted

## Hierarchy

↳  [EnumType](_plugnet.enumtype.md)<[Future](_plugnet.future.md) \| [Ready](_plugnet.ready.md) \| [Finalized](_plugnet.finalized.md) \| [Usurped](_plugnet.usurped.md) \| [Broadcast](_plugnet.broadcast.md) \| [Dropped](_plugnet.dropped.md) \| [Invalid](_plugnet.invalid.md)>

**↳ ExtrinsicStatus**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.extrinsicstatus.md#constructor)

### Properties

* [asBroadcast](_plugnet.extrinsicstatus.md#asbroadcast)
* [asDropped](_plugnet.extrinsicstatus.md#asdropped)
* [asFinalized](_plugnet.extrinsicstatus.md#asfinalized)
* [asFuture](_plugnet.extrinsicstatus.md#asfuture)
* [asInvalid](_plugnet.extrinsicstatus.md#asinvalid)
* [asReady](_plugnet.extrinsicstatus.md#asready)
* [asUsurped](_plugnet.extrinsicstatus.md#asusurped)
* [encodedLength](_plugnet.extrinsicstatus.md#encodedlength)
* [index](_plugnet.extrinsicstatus.md#index)
* [isBroadcast](_plugnet.extrinsicstatus.md#isbroadcast)
* [isDropped](_plugnet.extrinsicstatus.md#isdropped)
* [isEmpty](_plugnet.extrinsicstatus.md#isempty)
* [isFinalized](_plugnet.extrinsicstatus.md#isfinalized)
* [isFuture](_plugnet.extrinsicstatus.md#isfuture)
* [isInvalid](_plugnet.extrinsicstatus.md#isinvalid)
* [isNone](_plugnet.extrinsicstatus.md#isnone)
* [isNull](_plugnet.extrinsicstatus.md#isnull)
* [isReady](_plugnet.extrinsicstatus.md#isready)
* [isUsurped](_plugnet.extrinsicstatus.md#isusurped)
* [type](_plugnet.extrinsicstatus.md#type)
* [value](_plugnet.extrinsicstatus.md#value)

### Methods

* [eq](_plugnet.extrinsicstatus.md#eq)
* [toHex](_plugnet.extrinsicstatus.md#tohex)
* [toJSON](_plugnet.extrinsicstatus.md#tojson)
* [toNumber](_plugnet.extrinsicstatus.md#tonumber)
* [toString](_plugnet.extrinsicstatus.md#tostring)
* [toU8a](_plugnet.extrinsicstatus.md#tou8a)
* [with](_plugnet.extrinsicstatus.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtrinsicStatus**(value: *`any`*, index?: *`number`*): [ExtrinsicStatus](_plugnet.extrinsicstatus.md)

*Overrides [EnumType](_plugnet.enumtype.md).[constructor](_plugnet.enumtype.md#constructor)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` index | `number` |

**Returns:** [ExtrinsicStatus](_plugnet.extrinsicstatus.md)

___

## Properties

<a id="asbroadcast"></a>

###  asBroadcast

**● asBroadcast**: *[Broadcast](_plugnet.broadcast.md)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:66*

*__description__*: Returns the item as a [Broadcast](_plugnet.broadcast.md)

___
<a id="asdropped"></a>

###  asDropped

**● asDropped**: *[Dropped](_plugnet.dropped.md)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:70*

*__description__*: Returns the item as a [Dropped](_plugnet.dropped.md)

___
<a id="asfinalized"></a>

###  asFinalized

**● asFinalized**: *[Finalized](_plugnet.finalized.md)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:74*

*__description__*: Returns the item as a [Finalized](_plugnet.finalized.md)

___
<a id="asfuture"></a>

###  asFuture

**● asFuture**: *[Future](_plugnet.future.md)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:78*

*__description__*: Returns the item as a [Future](_plugnet.future.md)

___
<a id="asinvalid"></a>

###  asInvalid

**● asInvalid**: *[Invalid](_plugnet.invalid.md)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:82*

*__description__*: Returns the item as a [Invalid](_plugnet.invalid.md)

___
<a id="asready"></a>

###  asReady

**● asReady**: *[Ready](_plugnet.ready.md)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:86*

*__description__*: Returns the item as a [Ready](_plugnet.ready.md)

___
<a id="asusurped"></a>

###  asUsurped

**● asUsurped**: *[Usurped](_plugnet.usurped.md)*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:90*

*__description__*: Returns the item as a [Usurped](_plugnet.usurped.md)

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
<a id="isbroadcast"></a>

###  isBroadcast

**● isBroadcast**: *`boolean`*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:94*

*__description__*: Returns true if the status is boadcast

___
<a id="isdropped"></a>

###  isDropped

**● isDropped**: *`boolean`*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:98*

*__description__*: Returns true if the status is dropped

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [EnumType](_plugnet.enumtype.md).[isEmpty](_plugnet.enumtype.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:39*

*__description__*: Checks if the value is an empty value

___
<a id="isfinalized"></a>

###  isFinalized

**● isFinalized**: *`boolean`*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:102*

*__description__*: Returns true if the status is finalized

___
<a id="isfuture"></a>

###  isFuture

**● isFuture**: *`boolean`*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:106*

*__description__*: Returns true if the status is future

___
<a id="isinvalid"></a>

###  isInvalid

**● isInvalid**: *`boolean`*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:110*

*__description__*: Returns true if the status is invalid

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
<a id="isready"></a>

###  isReady

**● isReady**: *`boolean`*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:114*

*__description__*: Returns true if the status is eady

___
<a id="isusurped"></a>

###  isUsurped

**● isUsurped**: *`boolean`*

*Defined in node_modules/@plugnet/types/rpc/ExtrinsicStatus.d.ts:118*

*__description__*: Returns true if the status is usurped

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

