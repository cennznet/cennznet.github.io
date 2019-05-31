[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Int](../classes/_plugnet.int.md)

# Class: Int

*__name__*: Int

*__description__*: A generic signed integer codec. For Substrate all numbers are Little Endian encoded, this handles the encoding and decoding of those numbers. Upon construction the bitLength is provided and any additional use keeps the number to this length. This extends `BN`, so all methods available on a normal `BN` object is available here.

## Hierarchy

 `AbstractInt`

**↳ Int**

↳  [I8](_plugnet.i8.md)

↳  [I16](_plugnet.i16.md)

↳  [I32](_plugnet.i32.md)

↳  [I64](_plugnet.i64.md)

↳  [I128](_plugnet.i128.md)

↳  [I256](_plugnet.i256.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.int.md#constructor)

### Methods

* [toHex](_plugnet.int.md#tohex)
* [toU8a](_plugnet.int.md#tou8a)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Int**(value?: *[AnyNumber](../modules/_plugnet.md#anynumber)*, bitLength?: *[UIntBitLength](../modules/_plugnet.md#uintbitlength)*, isHexJson?: *`boolean`*): [Int](_plugnet.int.md)

*Overrides AbstractInt.__constructor*

*Defined in node_modules/@plugnet/types/codec/Int.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_plugnet.md#anynumber) |
| `Optional` bitLength | [UIntBitLength](../modules/_plugnet.md#uintbitlength) |
| `Optional` isHexJson | `boolean` |

**Returns:** [Int](_plugnet.int.md)

___

## Methods

<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in node_modules/@plugnet/types/codec/Int.d.ts:18*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in node_modules/@plugnet/types/codec/Int.d.ts:23*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

