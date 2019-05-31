[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [NonceCompact](../classes/_plugnet.noncecompact.md)

# Class: NonceCompact

*__name__*: Nonce

*__description__*: The Compact or number of transactions sent by a specific account. Generally used with extrinsics to determine the order of execution.

## Hierarchy

↳  [Compact](_plugnet.compact.md)

**↳ NonceCompact**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.noncecompact.md#constructor)

### Properties

* [encodedLength](_plugnet.noncecompact.md#encodedlength)
* [isEmpty](_plugnet.noncecompact.md#isempty)
* [addLengthPrefix](_plugnet.noncecompact.md#addlengthprefix)
* [decodeU8a](_plugnet.noncecompact.md#decodeu8a)
* [encodeU8a](_plugnet.noncecompact.md#encodeu8a)

### Methods

* [bitLength](_plugnet.noncecompact.md#bitlength)
* [eq](_plugnet.noncecompact.md#eq)
* [toBn](_plugnet.noncecompact.md#tobn)
* [toHex](_plugnet.noncecompact.md#tohex)
* [toJSON](_plugnet.noncecompact.md#tojson)
* [toNumber](_plugnet.noncecompact.md#tonumber)
* [toString](_plugnet.noncecompact.md#tostring)
* [toU8a](_plugnet.noncecompact.md#tou8a)
* [unwrap](_plugnet.noncecompact.md#unwrap)
* [decodeCompact](_plugnet.noncecompact.md#decodecompact)
* [stripLengthPrefix](_plugnet.noncecompact.md#striplengthprefix)
* [with](_plugnet.noncecompact.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NonceCompact**(Type: *[Constructor](../interfaces/_plugnet.constructor.md)<[UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)>*, value?: *[Compact](_plugnet.compact.md) \| [AnyNumber](../modules/_plugnet.md#anynumber)*): [NonceCompact](_plugnet.noncecompact.md)

*Inherited from [Compact](_plugnet.compact.md).[constructor](_plugnet.compact.md#constructor)*

*Overrides [Base](_plugnet.base.md).[constructor](_plugnet.base.md#constructor)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md)<[UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)> |
| `Optional` value | [Compact](_plugnet.compact.md) \| [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [NonceCompact](_plugnet.noncecompact.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Compact](_plugnet.compact.md).[encodedLength](_plugnet.compact.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:32*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Compact](_plugnet.compact.md).[isEmpty](_plugnet.compact.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:36*

*__description__*: Checks if the value is an empty value

___
<a id="addlengthprefix"></a>

### `<Static>` addLengthPrefix

**● addLengthPrefix**: *[compactAddLength](../modules/_plugnet.md#compactaddlength)*

*Inherited from [Compact](_plugnet.compact.md).[addLengthPrefix](_plugnet.compact.md#addlengthprefix)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:24*

Prepend a Uint8Array with its compact length.

*__param__*: The Uint8Array to be prefixed

___
<a id="decodeu8a"></a>

### `<Static>` decodeU8a

**● decodeU8a**: *[compactFromU8a](../modules/_plugnet.md#compactfromu8a)*

*Inherited from [Compact](_plugnet.compact.md).[decodeU8a](_plugnet.compact.md#decodeu8a)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:25*

___
<a id="encodeu8a"></a>

### `<Static>` encodeU8a

**● encodeU8a**: *[compactToU8a](../modules/_plugnet.md#compacttou8a)*

*Inherited from [Compact](_plugnet.compact.md).[encodeU8a](_plugnet.compact.md#encodeu8a)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:26*

___

## Methods

<a id="bitlength"></a>

###  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_plugnet.md#uintbitlength)

*Inherited from [Compact](_plugnet.compact.md).[bitLength](_plugnet.compact.md#bitlength)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:40*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_plugnet.md#uintbitlength)

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Compact](_plugnet.compact.md).[eq](_plugnet.compact.md#eq)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:44*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tobn"></a>

###  toBn

▸ **toBn**(): `BN`

*Inherited from [Compact](_plugnet.compact.md).[toBn](_plugnet.compact.md#tobn)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:48*

*__description__*: Returns the BN representation of the number

**Returns:** `BN`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Inherited from [Compact](_plugnet.compact.md).[toHex](_plugnet.compact.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:52*

*__description__*: Returns a hex string representation of the value

**Returns:** `any`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Compact](_plugnet.compact.md).[toJSON](_plugnet.compact.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:56*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Inherited from [Compact](_plugnet.compact.md).[toNumber](_plugnet.compact.md#tonumber)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:60*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Compact](_plugnet.compact.md).[toString](_plugnet.compact.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:64*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Compact](_plugnet.compact.md).[toU8a](_plugnet.compact.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:69*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="unwrap"></a>

###  unwrap

▸ **unwrap**(): [UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)

*Inherited from [Compact](_plugnet.compact.md).[unwrap](_plugnet.compact.md#unwrap)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:73*

*__description__*: Returns the embedded [UInt](_plugnet.uint.md) or [Moment](_plugnet.moment.md) value

**Returns:** [UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)

___
<a id="decodecompact"></a>

### `<Static>` decodeCompact

▸ **decodeCompact**(Type: *[Constructor](../interfaces/_plugnet.constructor.md)<[UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)>*, value: *[Compact](_plugnet.compact.md) \| [AnyNumber](../modules/_plugnet.md#anynumber)*): [Moment](_plugnet.moment.md) \| [UInt](_plugnet.uint.md)

*Inherited from [Compact](_plugnet.compact.md).[decodeCompact](_plugnet.compact.md#decodecompact)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md)<[UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)> |
| value | [Compact](_plugnet.compact.md) \| [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [Moment](_plugnet.moment.md) \| [UInt](_plugnet.uint.md)

___
<a id="striplengthprefix"></a>

### `<Static>` stripLengthPrefix

▸ **stripLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_plugnet.md#uintbitlength)*): `Uint8Array`

*Inherited from [Compact](_plugnet.compact.md).[stripLengthPrefix](_plugnet.compact.md#striplengthprefix)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| u8a | `Uint8Array` |
| `Optional` bitLength | [UIntBitLength](../modules/_plugnet.md#uintbitlength) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

### `<Static>` with

▸ **with**(Type: *[Constructor](../interfaces/_plugnet.constructor.md)<[UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)>*): [Constructor](../interfaces/_plugnet.constructor.md)<[Compact](_plugnet.compact.md)>

*Inherited from [Compact](_plugnet.compact.md).[with](_plugnet.compact.md#with)*

*Defined in node_modules/@plugnet/types/codec/Compact.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_plugnet.constructor.md)<[UInt](_plugnet.uint.md) \| [Moment](_plugnet.moment.md)> |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md)<[Compact](_plugnet.compact.md)>

___

