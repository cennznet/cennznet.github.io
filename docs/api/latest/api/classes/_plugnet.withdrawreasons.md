[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [WithdrawReasons](../classes/_plugnet.withdrawreasons.md)

# Class: WithdrawReasons

*__name__*: WithdrawReasons

*__description__*: The Substrate WithdrawReasons for staking

## Hierarchy

↳  [Set](_plugnet.set.md)

**↳ WithdrawReasons**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.withdrawreasons.md#constructor)

### Properties

* [encodedLength](_plugnet.withdrawreasons.md#encodedlength)
* [isEmpty](_plugnet.withdrawreasons.md#isempty)
* [isFee](_plugnet.withdrawreasons.md#isfee)
* [isReserve](_plugnet.withdrawreasons.md#isreserve)
* [isTransactionPayment](_plugnet.withdrawreasons.md#istransactionpayment)
* [isTransfer](_plugnet.withdrawreasons.md#istransfer)
* [valueEncoded](_plugnet.withdrawreasons.md#valueencoded)
* [values](_plugnet.withdrawreasons.md#values)

### Methods

* [eq](_plugnet.withdrawreasons.md#eq)
* [toHex](_plugnet.withdrawreasons.md#tohex)
* [toJSON](_plugnet.withdrawreasons.md#tojson)
* [toString](_plugnet.withdrawreasons.md#tostring)
* [toU8a](_plugnet.withdrawreasons.md#tou8a)
* [decodeSet](_plugnet.withdrawreasons.md#decodeset)
* [encodeSet](_plugnet.withdrawreasons.md#encodeset)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WithdrawReasons**(value?: *`any`*): [WithdrawReasons](_plugnet.withdrawreasons.md)

*Overrides [Set](_plugnet.set.md).[constructor](_plugnet.set.md#constructor)*

*Defined in node_modules/@plugnet/types/type/WithdrawReasons.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [WithdrawReasons](_plugnet.withdrawreasons.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Set](_plugnet.set.md).[encodedLength](_plugnet.set.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:20*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Set](_plugnet.set.md).[isEmpty](_plugnet.set.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:24*

*__description__*: true is the Set contains no values

___
<a id="isfee"></a>

###  isFee

**● isFee**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/WithdrawReasons.d.ts:24*

*__description__*: /// In order to pay some other (higher-level) fees.

___
<a id="isreserve"></a>

###  isReserve

**● isReserve**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/WithdrawReasons.d.ts:12*

*__description__*: In order to reserve some funds for a later return or repatriation

___
<a id="istransactionpayment"></a>

###  isTransactionPayment

**● isTransactionPayment**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/WithdrawReasons.d.ts:16*

*__description__*: In order to pay for (system) transaction costs

___
<a id="istransfer"></a>

###  isTransfer

**● isTransfer**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/WithdrawReasons.d.ts:20*

*__description__*: In order to transfer ownership

___
<a id="valueencoded"></a>

###  valueEncoded

**● valueEncoded**: *`number`*

*Inherited from [Set](_plugnet.set.md).[valueEncoded](_plugnet.set.md#valueencoded)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:32*

*__description__*: The encoded value for the set members

___
<a id="values"></a>

###  values

**● values**: *`Array`<`string`>*

*Inherited from [Set](_plugnet.set.md).[values](_plugnet.set.md#values)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:28*

*__description__*: The actual set values as a Array

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Set](_plugnet.set.md).[eq](_plugnet.set.md#eq)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:36*

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

*Inherited from [Set](_plugnet.set.md).[toHex](_plugnet.set.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:40*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Set](_plugnet.set.md).[toJSON](_plugnet.set.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:44*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Set](_plugnet.set.md).[toString](_plugnet.set.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:48*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Set](_plugnet.set.md).[toU8a](_plugnet.set.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:53*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeset"></a>

### `<Static>` decodeSet

▸ **decodeSet**(setValues: *[SetValues](../modules/_plugnet.md#setvalues)*, value?: *`Array`<`string`> \| `Uint8Array` \| `number`*): `Array`<`string`>

*Inherited from [Set](_plugnet.set.md).[decodeSet](_plugnet.set.md#decodeset)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | [SetValues](../modules/_plugnet.md#setvalues) |
| `Optional` value | `Array`<`string`> \| `Uint8Array` \| `number` |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

### `<Static>` encodeSet

▸ **encodeSet**(setValues: *[SetValues](../modules/_plugnet.md#setvalues)*, value: *`Array`<`string`>*): `number`

*Inherited from [Set](_plugnet.set.md).[encodeSet](_plugnet.set.md#encodeset)*

*Defined in node_modules/@plugnet/types/codec/Set.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | [SetValues](../modules/_plugnet.md#setvalues) |
| value | `Array`<`string`> |

**Returns:** `number`

___

