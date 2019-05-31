[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Text](../classes/_plugnet.text.md)

# Class: Text

*__name__*: Text

*__description__*: This is a string wrapper, along with the length. It is used both for strings as well as items such as documentation. It simply extends the standard JS `String` built-in object, inheriting all methods exposed from `String`.

## Hierarchy

 `String`

**↳ Text**

↳  [Type](_plugnet.type.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Indexable

\[index: `number`\]:&nbsp;`string`
## Index

### Constructors

* [constructor](_plugnet.text.md#constructor)

### Properties

* [encodedLength](_plugnet.text.md#encodedlength)
* [isEmpty](_plugnet.text.md#isempty)
* [length](_plugnet.text.md#length)
* [String](_plugnet.text.md#string)

### Methods

* [eq](_plugnet.text.md#eq)
* [toHex](_plugnet.text.md#tohex)
* [toJSON](_plugnet.text.md#tojson)
* [toString](_plugnet.text.md#tostring)
* [toU8a](_plugnet.text.md#tou8a)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Text**(value?: *[Text](_plugnet.text.md) \| `string` \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| `object`*): [Text](_plugnet.text.md)

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Text](_plugnet.text.md) \| `string` \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| `object` |

**Returns:** [Text](_plugnet.text.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:18*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:22*

*__description__*: Checks if the value is an empty value

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Overrides String.length*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:26*

*__description__*: The length of the value

___
<a id="string"></a>

### `<Static>` String

**● String**: *`StringConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:517*

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:30*

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

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:34*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:38*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Overrides String.toString*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:42*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:47*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

