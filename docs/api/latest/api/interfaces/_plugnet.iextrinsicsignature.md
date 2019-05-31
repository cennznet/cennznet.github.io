[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md)

# Interface: IExtrinsicSignature

## Hierarchy

 [Codec](_plugnet.codec.md)

**↳ IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignature](../classes/_plugnet.extrinsicsignature.md)
* [ExtrinsicSignature](../classes/_cennznet_types.extrinsicsignature-1.md)
* [ExtrinsicSignature](../classes/_cennznet_types.extrinsicsignature.md)

## Index

### Properties

* [encodedLength](_plugnet.iextrinsicsignature.md#encodedlength)
* [isEmpty](_plugnet.iextrinsicsignature.md#isempty)
* [isSigned](_plugnet.iextrinsicsignature.md#issigned)

### Methods

* [eq](_plugnet.iextrinsicsignature.md#eq)
* [toHex](_plugnet.iextrinsicsignature.md#tohex)
* [toJSON](_plugnet.iextrinsicsignature.md#tojson)
* [toString](_plugnet.iextrinsicsignature.md#tostring)
* [toU8a](_plugnet.iextrinsicsignature.md#tou8a)

---

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_plugnet.codec.md).[encodedLength](_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/types.d.ts:28*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_plugnet.codec.md).[isEmpty](_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/types.d.ts:32*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

###  isSigned

**● isSigned**: *`boolean`*

*Defined in node_modules/@plugnet/types/types.d.ts:98*

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

