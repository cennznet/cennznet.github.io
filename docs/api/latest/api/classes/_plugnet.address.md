[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Address](../classes/_plugnet.address.md)

# Class: Address

*__name__*: Address

*__description__*: A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix. Since we are dealing with underlying publicKeys (or shorter encoded addresses), we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec

## Hierarchy

 [Base](_plugnet.base.md)<[AccountId](_plugnet.accountid.md) \| [AccountIndex](_plugnet.accountindex.md)>

**↳ Address**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.address.md#constructor)

### Properties

* [encodedLength](_plugnet.address.md#encodedlength)
* [isEmpty](_plugnet.address.md#isempty)
* [rawLength](_plugnet.address.md#rawlength)

### Methods

* [eq](_plugnet.address.md#eq)
* [toHex](_plugnet.address.md#tohex)
* [toJSON](_plugnet.address.md#tojson)
* [toString](_plugnet.address.md#tostring)
* [toU8a](_plugnet.address.md#tou8a)
* [decodeAddress](_plugnet.address.md#decodeaddress)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Address**(value?: *[AnyAddress](../modules/_plugnet.md#anyaddress)*): [Address](_plugnet.address.md)

*Overrides [Base](_plugnet.base.md).[constructor](_plugnet.base.md#constructor)*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyAddress](../modules/_plugnet.md#anyaddress) |

**Returns:** [Address](_plugnet.address.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:22*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:26*

*__description__*: Checks if the value is an empty value

___
<a id="rawlength"></a>

###  rawLength

**● rawLength**: *`number`*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:30*

*__description__*: The length of the raw value, either AccountIndex or AccountId

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:34*

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

*Defined in node_modules/@plugnet/types/type/Address.d.ts:38*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:42*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:46*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/type/Address.d.ts:51*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeaddress"></a>

### `<Static>` decodeAddress

▸ **decodeAddress**(value: *[AnyAddress](../modules/_plugnet.md#anyaddress)*): [AccountId](_plugnet.accountid.md) \| [AccountIndex](_plugnet.accountindex.md)

*Defined in node_modules/@plugnet/types/type/Address.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [AnyAddress](../modules/_plugnet.md#anyaddress) |

**Returns:** [AccountId](_plugnet.accountid.md) \| [AccountIndex](_plugnet.accountindex.md)

___

