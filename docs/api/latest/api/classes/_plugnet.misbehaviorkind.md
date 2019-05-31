[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [MisbehaviorKind](../classes/_plugnet.misbehaviorkind.md)

# Class: MisbehaviorKind

*__name__*: MisbehaviorKind

*__description__*: An [EnumType](_plugnet.enumtype.md) containing a Bft misbehaviour

## Hierarchy

↳  [EnumType](_plugnet.enumtype.md)<[BftProposeOutOfTurn](_plugnet.bftproposeoutofturn.md) \| [BftDoublePropose](_plugnet.bftdoublepropose.md) \| [BftDoublePrepare](_plugnet.bftdoubleprepare.md) \| [BftDoubleCommit](_plugnet.bftdoublecommit.md)>

**↳ MisbehaviorKind**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.misbehaviorkind.md#constructor)

### Properties

* [asBftDoubleCommit](_plugnet.misbehaviorkind.md#asbftdoublecommit)
* [asBftDoublePrepare](_plugnet.misbehaviorkind.md#asbftdoubleprepare)
* [asBftDoublePropose](_plugnet.misbehaviorkind.md#asbftdoublepropose)
* [asBftProposeOutOfTurn](_plugnet.misbehaviorkind.md#asbftproposeoutofturn)
* [encodedLength](_plugnet.misbehaviorkind.md#encodedlength)
* [index](_plugnet.misbehaviorkind.md#index)
* [isBftDoubleCommit](_plugnet.misbehaviorkind.md#isbftdoublecommit)
* [isBftDoublePrepare](_plugnet.misbehaviorkind.md#isbftdoubleprepare)
* [isBftDoublePropose](_plugnet.misbehaviorkind.md#isbftdoublepropose)
* [isBftProposeOutOfTurn](_plugnet.misbehaviorkind.md#isbftproposeoutofturn)
* [isEmpty](_plugnet.misbehaviorkind.md#isempty)
* [isNone](_plugnet.misbehaviorkind.md#isnone)
* [isNull](_plugnet.misbehaviorkind.md#isnull)
* [type](_plugnet.misbehaviorkind.md#type)
* [value](_plugnet.misbehaviorkind.md#value)

### Methods

* [eq](_plugnet.misbehaviorkind.md#eq)
* [toHex](_plugnet.misbehaviorkind.md#tohex)
* [toJSON](_plugnet.misbehaviorkind.md#tojson)
* [toNumber](_plugnet.misbehaviorkind.md#tonumber)
* [toString](_plugnet.misbehaviorkind.md#tostring)
* [toU8a](_plugnet.misbehaviorkind.md#tou8a)
* [with](_plugnet.misbehaviorkind.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MisbehaviorKind**(value?: *[BftAtReportValue](../modules/_plugnet.md#bftatreportvalue) \| `Uint8Array`*, index?: *`number`*): [MisbehaviorKind](_plugnet.misbehaviorkind.md)

*Overrides [EnumType](_plugnet.enumtype.md).[constructor](_plugnet.enumtype.md#constructor)*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:79*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [BftAtReportValue](../modules/_plugnet.md#bftatreportvalue) \| `Uint8Array` |
| `Optional` index | `number` |

**Returns:** [MisbehaviorKind](_plugnet.misbehaviorkind.md)

___

## Properties

<a id="asbftdoublecommit"></a>

###  asBftDoubleCommit

**● asBftDoubleCommit**: *[BftDoubleCommit](_plugnet.bftdoublecommit.md)*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:84*

*__description__*: Returns the item as a [BftDoubleCommit](_plugnet.bftdoublecommit.md)

___
<a id="asbftdoubleprepare"></a>

###  asBftDoublePrepare

**● asBftDoublePrepare**: *[BftDoublePrepare](_plugnet.bftdoubleprepare.md)*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:88*

*__description__*: Returns the item as a [BftDoublePrepare](_plugnet.bftdoubleprepare.md)

___
<a id="asbftdoublepropose"></a>

###  asBftDoublePropose

**● asBftDoublePropose**: *[BftDoublePropose](_plugnet.bftdoublepropose.md)*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:92*

*__description__*: Returns the item as a [BftDoublePropose](_plugnet.bftdoublepropose.md)

___
<a id="asbftproposeoutofturn"></a>

###  asBftProposeOutOfTurn

**● asBftProposeOutOfTurn**: *[BftProposeOutOfTurn](_plugnet.bftproposeoutofturn.md)*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:96*

*__description__*: Returns the item as a [BftProposeOutOfTurn](_plugnet.bftproposeoutofturn.md)

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
<a id="isbftdoublecommit"></a>

###  isBftDoubleCommit

**● isBftDoubleCommit**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:100*

*__description__*: true when this is a BftDoubleCommit

___
<a id="isbftdoubleprepare"></a>

###  isBftDoublePrepare

**● isBftDoublePrepare**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:104*

*__description__*: true when this is a BftDoublePrepare

___
<a id="isbftdoublepropose"></a>

###  isBftDoublePropose

**● isBftDoublePropose**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:108*

*__description__*: true when this is a BftDoublePropose

___
<a id="isbftproposeoutofturn"></a>

###  isBftProposeOutOfTurn

**● isBftProposeOutOfTurn**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/MisbehaviorReport.d.ts:112*

*__description__*: true when this is a BftProposeOutOfTurn

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [EnumType](_plugnet.enumtype.md).[isEmpty](_plugnet.enumtype.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/EnumType.d.ts:39*

*__description__*: Checks if the value is an empty value

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

