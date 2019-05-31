[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [UInt](../classes/_plugnet.uint.md)

# Class: UInt

*__name__*: UInt

*__description__*: A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded, this handles the encoding and decoding of those numbers. Upon construction the bitLength is provided and any additional use keeps the number to this length. This extends `BN`, so all methods available on a normal `BN` object is available here.

## Hierarchy

 `AbstractInt`

**↳ UInt**

↳  [U16](_plugnet.u16.md)

↳  [U32](_plugnet.u32.md)

↳  [U8](_plugnet.u8.md)

↳  [U64](_plugnet.u64.md)

↳  [U128](_plugnet.u128.md)

↳  [U256](_plugnet.u256.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.uint.md#constructor)

### Methods

* [toHex](_plugnet.uint.md#tohex)
* [toU8a](_plugnet.uint.md#tou8a)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UInt**(value?: *[AnyNumber](../modules/_plugnet.md#anynumber)*, bitLength?: *[UIntBitLength](../modules/_plugnet.md#uintbitlength)*, isHexJson?: *`boolean`*): [UInt](_plugnet.uint.md)

*Overrides AbstractInt.__constructor*

*Defined in node_modules/@plugnet/types/codec/UInt.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_plugnet.md#anynumber) |
| `Optional` bitLength | [UIntBitLength](../modules/_plugnet.md#uintbitlength) |
| `Optional` isHexJson | `boolean` |

**Returns:** [UInt](_plugnet.uint.md)

___

## Methods

<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in node_modules/@plugnet/types/codec/UInt.d.ts:18*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in node_modules/@plugnet/types/codec/UInt.d.ts:23*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

