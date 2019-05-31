[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ExtrinsicSignature](../classes/_plugnet.extrinsicsignature.md)

# Class: ExtrinsicSignature

*__name__*: ExtrinsicSignature

*__description__*: A container for the [Signature](_plugnet.signature.md) associated with a specific [Extrinsic](_plugnet.extrinsic.md)

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

↳  [Struct](_plugnet.struct.md)

**↳ ExtrinsicSignature**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)
* [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_plugnet.extrinsicsignature.md#constructor)

### Properties

* [Type](_plugnet.extrinsicsignature.md#type)
* [__@toStringTag](_plugnet.extrinsicsignature.md#___tostringtag)
* [encodedLength](_plugnet.extrinsicsignature.md#encodedlength)
* [era](_plugnet.extrinsicsignature.md#era)
* [isEmpty](_plugnet.extrinsicsignature.md#isempty)
* [isSigned](_plugnet.extrinsicsignature.md#issigned)
* [nonce](_plugnet.extrinsicsignature.md#nonce)
* [signature](_plugnet.extrinsicsignature.md#signature)
* [signer](_plugnet.extrinsicsignature.md#signer)
* [size](_plugnet.extrinsicsignature.md#size)
* [version](_plugnet.extrinsicsignature.md#version)

### Methods

* [__@iterator](_plugnet.extrinsicsignature.md#___iterator)
* [addSignature](_plugnet.extrinsicsignature.md#addsignature)
* [clear](_plugnet.extrinsicsignature.md#clear)
* [delete](_plugnet.extrinsicsignature.md#delete)
* [entries](_plugnet.extrinsicsignature.md#entries)
* [eq](_plugnet.extrinsicsignature.md#eq)
* [forEach](_plugnet.extrinsicsignature.md#foreach)
* [get](_plugnet.extrinsicsignature.md#get)
* [getAtIndex](_plugnet.extrinsicsignature.md#getatindex)
* [has](_plugnet.extrinsicsignature.md#has)
* [keys](_plugnet.extrinsicsignature.md#keys)
* [set](_plugnet.extrinsicsignature.md#set)
* [sign](_plugnet.extrinsicsignature.md#sign)
* [toArray](_plugnet.extrinsicsignature.md#toarray)
* [toHex](_plugnet.extrinsicsignature.md#tohex)
* [toJSON](_plugnet.extrinsicsignature.md#tojson)
* [toString](_plugnet.extrinsicsignature.md#tostring)
* [toU8a](_plugnet.extrinsicsignature.md#tou8a)
* [values](_plugnet.extrinsicsignature.md#values)
* [decodeExtrinsicSignature](_plugnet.extrinsicsignature.md#decodeextrinsicsignature)
* [with](_plugnet.extrinsicsignature.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtrinsicSignature**(value?: *`Uint8Array`*): [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` |

**Returns:** [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

___

## Properties

<a id="type"></a>

###  Type

**● Type**: *`E`*

*Inherited from [Struct](_plugnet.struct.md).[Type](_plugnet.struct.md#type)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:53*

*__description__*: Returns the Type description to sthe structure

___
<a id="___tostringtag"></a>

###  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[encodedLength](../interfaces/_plugnet.iextrinsicsignature.md#encodedlength)*

*Overrides [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:21*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="era"></a>

###  era

**● era**: *[ExtrinsicEra](_plugnet.extrinsicera.md)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:29*

*__description__*: The [ExtrinsicEra](_plugnet.extrinsicera.md) (mortal or immortal) this signature applies to

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[isEmpty](../interfaces/_plugnet.iextrinsicsignature.md#isempty)*

*Inherited from [Struct](_plugnet.struct.md).[isEmpty](_plugnet.struct.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

###  isSigned

**● isSigned**: *`boolean`*

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[isSigned](../interfaces/_plugnet.iextrinsicsignature.md#issigned)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:25*

*__description__*: `true` if the signature is valid

___
<a id="nonce"></a>

###  nonce

**● nonce**: *[Nonce](_plugnet.nonce.md)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:33*

*__description__*: The [Nonce](_plugnet.nonce.md) for the signature

___
<a id="signature"></a>

###  signature

**● signature**: *[Signature](_plugnet.signature.md)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:37*

*__description__*: The actuall [Signature](_plugnet.signature.md) hash

___
<a id="signer"></a>

###  signer

**● signer**: *[Address](_plugnet.address.md)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:41*

*__description__*: The [Address](_plugnet.address.md) that signed

___
<a id="size"></a>

###  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___
<a id="version"></a>

###  version

**● version**: *`number`*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:45*

*__description__*: The encoded version for the signature

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_plugnet.codec.md)]>

*Inherited from Map.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_plugnet.codec.md)]>

___
<a id="addsignature"></a>

###  addSignature

▸ **addSignature**(_signer: *[Address](_plugnet.address.md) \| `Uint8Array`*, _signature: *`Uint8Array`*, _nonce: *[AnyNumber](../modules/_plugnet.md#anynumber)*, _era?: *`Uint8Array`*): [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:50*

*__description__*: Adds a raw signature

**Parameters:**

| Name | Type |
| ------ | ------ |
| _signer | [Address](_plugnet.address.md) \| `Uint8Array` |
| _signature | `Uint8Array` |
| _nonce | [AnyNumber](../modules/_plugnet.md#anynumber) |
| `Optional` _era | `Uint8Array` |

**Returns:** [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

___
<a id="clear"></a>

###  clear

▸ **clear**(): `void`

*Inherited from Map.clear*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(key: *`keyof S`*): `boolean`

*Inherited from Map.delete*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="entries"></a>

###  entries

▸ **entries**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_plugnet.codec.md)]>

*Inherited from Map.entries*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_plugnet.codec.md)]>

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[eq](../interfaces/_plugnet.iextrinsicsignature.md#eq)*

*Inherited from [Struct](_plugnet.struct.md).[eq](_plugnet.struct.md#eq)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:61*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

*Inherited from [Struct](_plugnet.struct.md).[get](_plugnet.struct.md#get)*

*Overrides Map.get*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:66*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

___
<a id="getatindex"></a>

###  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_plugnet.codec.md)

*Inherited from [Struct](_plugnet.struct.md).[getAtIndex](_plugnet.struct.md#getatindex)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:70*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

___
<a id="has"></a>

###  has

▸ **has**(key: *`keyof S`*): `boolean`

*Inherited from Map.has*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="keys"></a>

###  keys

▸ **keys**(): `IterableIterator`<`keyof S`>

*Inherited from Map.keys*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`keyof S`>

___
<a id="set"></a>

###  set

▸ **set**(key: *`keyof S`*, value: *[Codec](../interfaces/_plugnet.codec.md)*): `this`

*Inherited from Map.set*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | [Codec](../interfaces/_plugnet.codec.md) |

**Returns:** `this`

___
<a id="sign"></a>

###  sign

▸ **sign**(method: *[Method](_plugnet.method.md)*, account: *[KeyringPair](../interfaces/_plugnet.keyringpair.md)*, __namedParameters: *`object`*): [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:54*

*__description__*: Generate a payload and pplies the signature from a keypair

**Parameters:**

**method: [Method](_plugnet.method.md)**

**account: [KeyringPair](../interfaces/_plugnet.keyringpair.md)**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| blockHash | `string` \| `Uint8Array` \| `number`[] |
| era | `Uint8Array` |
| nonce | `string` \| `number` \| `Uint8Array` \| `BN` |
| version | [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md) |

**Returns:** [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_plugnet.codec.md)>

*Inherited from [Struct](_plugnet.struct.md).[toArray](_plugnet.struct.md#toarray)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:74*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[toHex](../interfaces/_plugnet.iextrinsicsignature.md#tohex)*

*Inherited from [Struct](_plugnet.struct.md).[toHex](_plugnet.struct.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:78*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[toJSON](../interfaces/_plugnet.iextrinsicsignature.md#tojson)*

*Inherited from [Struct](_plugnet.struct.md).[toJSON](_plugnet.struct.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:82*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[toString](../interfaces/_plugnet.iextrinsicsignature.md#tostring)*

*Inherited from [Struct](_plugnet.struct.md).[toString](_plugnet.struct.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:86*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[toU8a](../interfaces/_plugnet.iextrinsicsignature.md#tou8a)*

*Overrides [Struct](_plugnet.struct.md).[toU8a](_plugnet.struct.md#tou8a)*

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:59*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<[Codec](../interfaces/_plugnet.codec.md)>

*Inherited from Map.values*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="decodeextrinsicsignature"></a>

### `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value?: *`Uint8Array`*): `object` \| `Uint8Array`

*Defined in node_modules/@plugnet/types/type/ExtrinsicSignature.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` |

**Returns:** `object` \| `Uint8Array`

___
<a id="with"></a>

### `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_plugnet.constructor.md)<[Struct](_plugnet.struct.md)<`S`>>

*Inherited from [Struct](_plugnet.struct.md).[with](_plugnet.struct.md#with)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:45*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md)<[Struct](_plugnet.struct.md)<`S`>>

___

