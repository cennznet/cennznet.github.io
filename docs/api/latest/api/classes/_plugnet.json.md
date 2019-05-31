[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Json](../classes/_plugnet.json.md)

# Class: Json

*__name__*: Json

*__description__*: Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it implements a Codec, it is limited in that it can only be used with input objects via RPC, i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys

## Hierarchy

 `Map`<`string`, `any`>

**↳ Json**

↳  [ChainProperties](_plugnet.chainproperties.md)

↳  [NetworkState](_plugnet.networkstate.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.json.md#constructor)

### Properties

* [encodedLength](_plugnet.json.md#encodedlength)
* [isEmpty](_plugnet.json.md#isempty)
* [Map](_plugnet.json.md#map)

### Methods

* [eq](_plugnet.json.md#eq)
* [toHex](_plugnet.json.md#tohex)
* [toJSON](_plugnet.json.md#tojson)
* [toString](_plugnet.json.md#tostring)
* [toU8a](_plugnet.json.md#tou8a)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Json**(value?: *`object` \| `null`*): [Json](_plugnet.json.md)

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `object` \| `null` |

**Returns:** [Json](_plugnet.json.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:18*

*__description__*: Always 0, never encodes as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:22*

*__description__*: Checks if the value is an empty value

___
<a id="map"></a>

### `<Static>` Map

**● Map**: *`MapConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:36*

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:26*

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

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:30*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:34*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:38*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/rpc/Json.d.ts:42*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare | `boolean` |

**Returns:** `Uint8Array`

___

