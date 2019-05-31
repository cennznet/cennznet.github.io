[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [IMethod](../interfaces/_plugnet.imethod.md)

# Interface: IMethod

## Hierarchy

 [Codec](_plugnet.codec.md)

**↳ IMethod**

↳  [IExtrinsic](_plugnet.iextrinsic.md)

## Implemented by

* [Method](../classes/_plugnet.method.md)
* [Proposal](../classes/_plugnet.proposal.md)

## Index

### Properties

* [args](_plugnet.imethod.md#args)
* [argsDef](_plugnet.imethod.md#argsdef)
* [callIndex](_plugnet.imethod.md#callindex)
* [data](_plugnet.imethod.md#data)
* [encodedLength](_plugnet.imethod.md#encodedlength)
* [hasOrigin](_plugnet.imethod.md#hasorigin)
* [isEmpty](_plugnet.imethod.md#isempty)
* [meta](_plugnet.imethod.md#meta)

### Methods

* [eq](_plugnet.imethod.md#eq)
* [toHex](_plugnet.imethod.md#tohex)
* [toJSON](_plugnet.imethod.md#tojson)
* [toString](_plugnet.imethod.md#tostring)
* [toU8a](_plugnet.imethod.md#tou8a)

---

## Properties

<a id="args"></a>

###  args

**● args**: *`Array`<[Codec](_plugnet.codec.md)>*

*Defined in node_modules/@plugnet/types/types.d.ts:90*

___
<a id="argsdef"></a>

###  argsDef

**● argsDef**: *[ArgsDef](_plugnet.argsdef.md)*

*Defined in node_modules/@plugnet/types/types.d.ts:91*

___
<a id="callindex"></a>

###  callIndex

**● callIndex**: *`Uint8Array`*

*Defined in node_modules/@plugnet/types/types.d.ts:92*

___
<a id="data"></a>

###  data

**● data**: *`Uint8Array`*

*Defined in node_modules/@plugnet/types/types.d.ts:93*

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_plugnet.codec.md).[encodedLength](_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/types.d.ts:28*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

###  hasOrigin

**● hasOrigin**: *`boolean`*

*Defined in node_modules/@plugnet/types/types.d.ts:94*

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_plugnet.codec.md).[isEmpty](_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/types.d.ts:32*

*__description__*: Checks if the value is an empty value

___
<a id="meta"></a>

###  meta

**● meta**: *[FunctionMetadata](../classes/_plugnet.functionmetadata.md)*

*Defined in node_modules/@plugnet/types/types.d.ts:95*

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [Codec](_plugnet.codec.md).[eq](_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/types.d.ts:36*

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

*Inherited from [Codec](_plugnet.codec.md).[toHex](_plugnet.codec.md#tohex)*

*Defined in node_modules/@plugnet/types/types.d.ts:40*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Inherited from [Codec](_plugnet.codec.md).[toJSON](_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/types.d.ts:44*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Inherited from [Codec](_plugnet.codec.md).[toString](_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/types.d.ts:48*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Inherited from [Codec](_plugnet.codec.md).[toU8a](_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/types.d.ts:53*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

