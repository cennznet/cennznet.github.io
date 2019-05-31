[@cennznet/api](../README.md) > [@cennznet/types](../modules/_cennznet_types.md) > [ExtrinsicSignature](../classes/_cennznet_types.extrinsicsignature.md)

# Class: ExtrinsicSignature

*__name__*: ExtrinsicSignature

*__description__*: A container for the [Signature](_plugnet.signature.md) associated with a specific [Extrinsic](_cennznet_types.extrinsic-1.md)

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

* [constructor](_cennznet_types.extrinsicsignature.md#constructor)

### Properties

* [Type](_cennznet_types.extrinsicsignature.md#type)
* [__@toStringTag](_cennznet_types.extrinsicsignature.md#___tostringtag)
* [isEmpty](_cennznet_types.extrinsicsignature.md#isempty)
* [size](_cennznet_types.extrinsicsignature.md#size)

### Accessors

* [encodedLength](_cennznet_types.extrinsicsignature.md#encodedlength)
* [era](_cennznet_types.extrinsicsignature.md#era)
* [isSigned](_cennznet_types.extrinsicsignature.md#issigned)
* [nonce](_cennznet_types.extrinsicsignature.md#nonce)
* [signature](_cennznet_types.extrinsicsignature.md#signature)
* [signer](_cennznet_types.extrinsicsignature.md#signer)
* [version](_cennznet_types.extrinsicsignature.md#version)

### Methods

* [__@iterator](_cennznet_types.extrinsicsignature.md#___iterator)
* [addSignature](_cennznet_types.extrinsicsignature.md#addsignature)
* [clear](_cennznet_types.extrinsicsignature.md#clear)
* [delete](_cennznet_types.extrinsicsignature.md#delete)
* [entries](_cennznet_types.extrinsicsignature.md#entries)
* [eq](_cennznet_types.extrinsicsignature.md#eq)
* [forEach](_cennznet_types.extrinsicsignature.md#foreach)
* [get](_cennznet_types.extrinsicsignature.md#get)
* [getAtIndex](_cennznet_types.extrinsicsignature.md#getatindex)
* [has](_cennznet_types.extrinsicsignature.md#has)
* [keys](_cennznet_types.extrinsicsignature.md#keys)
* [set](_cennznet_types.extrinsicsignature.md#set)
* [sign](_cennznet_types.extrinsicsignature.md#sign)
* [toArray](_cennznet_types.extrinsicsignature.md#toarray)
* [toHex](_cennznet_types.extrinsicsignature.md#tohex)
* [toJSON](_cennznet_types.extrinsicsignature.md#tojson)
* [toString](_cennznet_types.extrinsicsignature.md#tostring)
* [toU8a](_cennznet_types.extrinsicsignature.md#tou8a)
* [values](_cennznet_types.extrinsicsignature.md#values)
* [withDoughnut](_cennznet_types.extrinsicsignature.md#withdoughnut)
* [withFeeExchange](_cennznet_types.extrinsicsignature.md#withfeeexchange)
* [decodeExtrinsicSignature](_cennznet_types.extrinsicsignature.md#decodeextrinsicsignature)
* [with](_cennznet_types.extrinsicsignature.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtrinsicSignature**(value?: *`Uint8Array`*): [ExtrinsicSignature](_cennznet_types.extrinsicsignature.md)

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:112*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` |

**Returns:** [ExtrinsicSignature](_cennznet_types.extrinsicsignature.md)

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
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [IExtrinsicSignature](../interfaces/_plugnet.iextrinsicsignature.md).[isEmpty](../interfaces/_plugnet.iextrinsicsignature.md#isempty)*

*Inherited from [Struct](_plugnet.struct.md).[isEmpty](_plugnet.struct.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="size"></a>

###  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___

## Accessors

<a id="encodedlength"></a>

###  encodedLength

**get encodedLength**(): `number`

*Overrides [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:49*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="era"></a>

###  era

**get era**(): [ExtrinsicEra](_plugnet.extrinsicera.md)

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:63*

*__description__*: The [ExtrinsicEra](_plugnet.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** [ExtrinsicEra](_plugnet.extrinsicera.md)

___
<a id="issigned"></a>

###  isSigned

**get isSigned**(): `boolean`

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:56*

*__description__*: `true` if the signature is valid

**Returns:** `boolean`

___
<a id="nonce"></a>

###  nonce

**get nonce**(): [Nonce](_plugnet.nonce.md)

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:70*

*__description__*: The [Nonce](_plugnet.nonce.md) for the signature

**Returns:** [Nonce](_plugnet.nonce.md)

___
<a id="signature"></a>

###  signature

**get signature**(): [Signature](_plugnet.signature.md)

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:77*

*__description__*: The actuall [Signature](_plugnet.signature.md) hash

**Returns:** [Signature](_plugnet.signature.md)

___
<a id="signer"></a>

###  signer

**get signer**(): [Address](_plugnet.address.md)

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:84*

*__description__*: The [Address](_plugnet.address.md) that signed

**Returns:** [Address](_plugnet.address.md)

___
<a id="version"></a>

###  version

**get version**(): `number`

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:91*

*__description__*: The encoded version for the signature

**Returns:** `number`

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

▸ **addSignature**(_signer: *[Address](_plugnet.address.md) \| `Uint8Array`*, _signature: *`Uint8Array`*, _nonce: *[AnyNumber](../modules/_plugnet.md#anynumber)*, _era?: *`Uint8Array`*): [ExtrinsicSignature](_cennznet_types.extrinsicsignature.md)

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:135*

*__description__*: Adds a raw signature

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _signer | [Address](_plugnet.address.md) \| `Uint8Array` | - |
| _signature | `Uint8Array` | - |
| _nonce | [AnyNumber](../modules/_plugnet.md#anynumber) | - |
| `Default value` _era | `Uint8Array` |  IMMORTAL_ERA |

**Returns:** [ExtrinsicSignature](_cennznet_types.extrinsicsignature.md)

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

▸ **sign**(extrinsic: *[Extrinsic](_cennznet_types.extrinsic.md)*, account: *[KeyringPair](../interfaces/_plugnet.keyringpair.md)*, __namedParameters: *`object`*): [ExtrinsicSignature](_cennznet_types.extrinsicsignature.md)

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:152*

*__description__*: Generate a payload and pplies the signature from a keypair

**Parameters:**

**extrinsic: [Extrinsic](_cennznet_types.extrinsic.md)**

**account: [KeyringPair](../interfaces/_plugnet.keyringpair.md)**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| blockHash | `string` \| `Uint8Array` \| `number`[] |
| era | `Uint8Array` |
| nonce | `string` \| `number` \| `Uint8Array` \| `BN` |
| version | [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md) |

**Returns:** [ExtrinsicSignature](_cennznet_types.extrinsicsignature.md)

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

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:176*

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
<a id="withdoughnut"></a>

###  withDoughnut

▸ **withDoughnut**(): `void`

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:180*

**Returns:** `void`

___
<a id="withfeeexchange"></a>

###  withFeeExchange

▸ **withFeeExchange**(): `void`

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:184*

**Returns:** `void`

___
<a id="decodeextrinsicsignature"></a>

### `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value?: *`Uint8Array`*): `object` \| `Uint8Array`

*Defined in node_modules/@cennznet/types/src/extrinsic/ExtrinsicSignature.ts:99*

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

