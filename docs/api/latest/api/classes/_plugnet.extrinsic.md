[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Extrinsic](../classes/_plugnet.extrinsic.md)

# Class: Extrinsic

*__name__*: Extrinsic

*__description__*: Representation of an Extrinsic in the system. It contains the actual call, (optional) signature and encodes with an actual length prefix

[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

Can be:

*   signed, to create a transaction
*   left as is, to create an inherent

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

↳  [Struct](_plugnet.struct.md)

**↳ Extrinsic**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)
* [IExtrinsic](../interfaces/_plugnet.iextrinsic.md)

## Index

### Constructors

* [constructor](_plugnet.extrinsic.md#constructor)

### Properties

* [Type](_plugnet.extrinsic.md#type)
* [__@toStringTag](_plugnet.extrinsic.md#___tostringtag)
* [args](_plugnet.extrinsic.md#args)
* [argsDef](_plugnet.extrinsic.md#argsdef)
* [callIndex](_plugnet.extrinsic.md#callindex)
* [data](_plugnet.extrinsic.md#data)
* [encodedLength](_plugnet.extrinsic.md#encodedlength)
* [hasOrigin](_plugnet.extrinsic.md#hasorigin)
* [hash](_plugnet.extrinsic.md#hash)
* [isEmpty](_plugnet.extrinsic.md#isempty)
* [isSigned](_plugnet.extrinsic.md#issigned)
* [length](_plugnet.extrinsic.md#length)
* [meta](_plugnet.extrinsic.md#meta)
* [method](_plugnet.extrinsic.md#method)
* [signature](_plugnet.extrinsic.md#signature)
* [size](_plugnet.extrinsic.md#size)

### Methods

* [__@iterator](_plugnet.extrinsic.md#___iterator)
* [addSignature](_plugnet.extrinsic.md#addsignature)
* [clear](_plugnet.extrinsic.md#clear)
* [delete](_plugnet.extrinsic.md#delete)
* [entries](_plugnet.extrinsic.md#entries)
* [eq](_plugnet.extrinsic.md#eq)
* [forEach](_plugnet.extrinsic.md#foreach)
* [get](_plugnet.extrinsic.md#get)
* [getAtIndex](_plugnet.extrinsic.md#getatindex)
* [has](_plugnet.extrinsic.md#has)
* [keys](_plugnet.extrinsic.md#keys)
* [set](_plugnet.extrinsic.md#set)
* [sign](_plugnet.extrinsic.md#sign)
* [toArray](_plugnet.extrinsic.md#toarray)
* [toHex](_plugnet.extrinsic.md#tohex)
* [toJSON](_plugnet.extrinsic.md#tojson)
* [toString](_plugnet.extrinsic.md#tostring)
* [toU8a](_plugnet.extrinsic.md#tou8a)
* [values](_plugnet.extrinsic.md#values)
* [decodeExtrinsic](_plugnet.extrinsic.md#decodeextrinsic)
* [with](_plugnet.extrinsic.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Extrinsic**(value?: *[ExtrinsicValue](../modules/_plugnet.md#extrinsicvalue) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md)*): [Extrinsic](_plugnet.extrinsic.md)

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [ExtrinsicValue](../modules/_plugnet.md#extrinsicvalue) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md) |

**Returns:** [Extrinsic](_plugnet.extrinsic.md)

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
<a id="args"></a>

###  args

**● args**: *`Array`<[Codec](../interfaces/_plugnet.codec.md)>*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[args](../interfaces/_plugnet.iextrinsic.md#args)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:31*

*__description__*: The arguments passed to for the call, exposes args so it is compatible with [Method](_plugnet.method.md)

___
<a id="argsdef"></a>

###  argsDef

**● argsDef**: *[ArgsDef](../interfaces/_plugnet.argsdef.md)*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[argsDef](../interfaces/_plugnet.iextrinsic.md#argsdef)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:35*

*__description__*: Thge argument defintions, compatible with [Method](_plugnet.method.md)

___
<a id="callindex"></a>

###  callIndex

**● callIndex**: *`Uint8Array`*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[callIndex](../interfaces/_plugnet.iextrinsic.md#callindex)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:39*

*__description__*: The actual `[sectionIndex, methodIndex]` as used in the Method

___
<a id="data"></a>

###  data

**● data**: *`Uint8Array`*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[data](../interfaces/_plugnet.iextrinsic.md#data)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:43*

*__description__*: The actual data for the Method

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[encodedLength](../interfaces/_plugnet.iextrinsic.md#encodedlength)*

*Overrides [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:47*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

###  hasOrigin

**● hasOrigin**: *`boolean`*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[hasOrigin](../interfaces/_plugnet.iextrinsic.md#hasorigin)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:55*

*__description__*: `true` is method has `Origin` argument (compatibility with [Method](_plugnet.method.md))

___
<a id="hash"></a>

###  hash

**● hash**: *[Hash](_plugnet.hash.md)*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[hash](../interfaces/_plugnet.iextrinsic.md#hash)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:51*

*__description__*: Convernience function, encodes the extrinsic and returns the actual hash

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[isEmpty](../interfaces/_plugnet.iextrinsic.md#isempty)*

*Inherited from [Struct](_plugnet.struct.md).[isEmpty](_plugnet.struct.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

###  isSigned

**● isSigned**: *`boolean`*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[isSigned](../interfaces/_plugnet.iextrinsic.md#issigned)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:59*

*__description__*: `true` id the extrinsic is signed

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:63*

*__description__*: The length of the encoded value

___
<a id="meta"></a>

###  meta

**● meta**: *[FunctionMetadata](_plugnet.functionmetadata.md)*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[meta](../interfaces/_plugnet.iextrinsic.md#meta)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:67*

*__description__*: The [FunctionMetadata](_plugnet.functionmetadata.md) that describes the extrinsic

___
<a id="method"></a>

###  method

**● method**: *[Method](_plugnet.method.md)*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[method](../interfaces/_plugnet.iextrinsic.md#method)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:71*

*__description__*: The [Method](_plugnet.method.md) this extrinsic wraps

___
<a id="signature"></a>

###  signature

**● signature**: *[ExtrinsicSignature](_plugnet.extrinsicsignature.md)*

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[signature](../interfaces/_plugnet.iextrinsic.md#signature)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:75*

*__description__*: The [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

___
<a id="size"></a>

###  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

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

▸ **addSignature**(signer: *[Address](_plugnet.address.md) \| `Uint8Array`*, signature: *`Uint8Array`*, nonce: *[AnyNumber](../modules/_plugnet.md#anynumber)*, era?: *`Uint8Array`*): [Extrinsic](_plugnet.extrinsic.md)

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[addSignature](../interfaces/_plugnet.iextrinsic.md#addsignature)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:79*

*__description__*: Add an [ExtrinsicSignature](_plugnet.extrinsicsignature.md) to the extrinsic (already generated)

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Address](_plugnet.address.md) \| `Uint8Array` |
| signature | `Uint8Array` |
| nonce | [AnyNumber](../modules/_plugnet.md#anynumber) |
| `Optional` era | `Uint8Array` |

**Returns:** [Extrinsic](_plugnet.extrinsic.md)

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

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[eq](../interfaces/_plugnet.iextrinsic.md#eq)*

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

▸ **sign**(account: *[KeyringPair](../interfaces/_plugnet.keyringpair.md)*, options: *[SignatureOptions](../modules/_plugnet.md#signatureoptions)*): [Extrinsic](_plugnet.extrinsic.md)

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[sign](../interfaces/_plugnet.iextrinsic.md#sign)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:83*

*__description__*: Sign the extrinsic with a specific keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [KeyringPair](../interfaces/_plugnet.keyringpair.md) |
| options | [SignatureOptions](../modules/_plugnet.md#signatureoptions) |

**Returns:** [Extrinsic](_plugnet.extrinsic.md)

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

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[toHex](../interfaces/_plugnet.iextrinsic.md#tohex)*

*Overrides [Struct](_plugnet.struct.md).[toHex](_plugnet.struct.md#tohex)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:87*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[toJSON](../interfaces/_plugnet.iextrinsic.md#tojson)*

*Overrides [Struct](_plugnet.struct.md).[toJSON](_plugnet.struct.md#tojson)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:91*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[toString](../interfaces/_plugnet.iextrinsic.md#tostring)*

*Inherited from [Struct](_plugnet.struct.md).[toString](_plugnet.struct.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:86*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[toU8a](../interfaces/_plugnet.iextrinsic.md#tou8a)*

*Overrides [Struct](_plugnet.struct.md).[toU8a](_plugnet.struct.md#tou8a)*

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:96*

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
<a id="decodeextrinsic"></a>

### `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value: *[ExtrinsicValue](../modules/_plugnet.md#extrinsicvalue) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md)*): [ExtrinsicValue](../modules/_plugnet.md#extrinsicvalue) \| `Array`<`number`> \| `Uint8Array`

*Defined in node_modules/@plugnet/types/type/Extrinsic.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [ExtrinsicValue](../modules/_plugnet.md#extrinsicvalue) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md) |

**Returns:** [ExtrinsicValue](../modules/_plugnet.md#extrinsicvalue) \| `Array`<`number`> \| `Uint8Array`

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

