[@cennznet/api](../README.md) > [@cennznet/types](../modules/_cennznet_types.md) > [Extrinsic](../classes/_cennznet_types.extrinsic-1.md)

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

* [constructor](_cennznet_types.extrinsic-1.md#constructor)

### Properties

* [Type](_cennznet_types.extrinsic-1.md#type)
* [__@toStringTag](_cennznet_types.extrinsic-1.md#___tostringtag)
* [isEmpty](_cennznet_types.extrinsic-1.md#isempty)
* [size](_cennznet_types.extrinsic-1.md#size)

### Accessors

* [args](_cennznet_types.extrinsic-1.md#args)
* [argsDef](_cennznet_types.extrinsic-1.md#argsdef)
* [callIndex](_cennznet_types.extrinsic-1.md#callindex)
* [data](_cennznet_types.extrinsic-1.md#data)
* [doughnut](_cennznet_types.extrinsic-1.md#doughnut)
* [encodedLength](_cennznet_types.extrinsic-1.md#encodedlength)
* [feeExchange](_cennznet_types.extrinsic-1.md#feeexchange)
* [hasOrigin](_cennznet_types.extrinsic-1.md#hasorigin)
* [hash](_cennznet_types.extrinsic-1.md#hash)
* [isSigned](_cennznet_types.extrinsic-1.md#issigned)
* [length](_cennznet_types.extrinsic-1.md#length)
* [meta](_cennznet_types.extrinsic-1.md#meta)
* [method](_cennznet_types.extrinsic-1.md#method)
* [signature](_cennznet_types.extrinsic-1.md#signature)

### Methods

* [__@iterator](_cennznet_types.extrinsic-1.md#___iterator)
* [addDoughnut](_cennznet_types.extrinsic-1.md#adddoughnut)
* [addFeeExchangeOpt](_cennznet_types.extrinsic-1.md#addfeeexchangeopt)
* [addSignature](_cennznet_types.extrinsic-1.md#addsignature)
* [clear](_cennznet_types.extrinsic-1.md#clear)
* [delete](_cennznet_types.extrinsic-1.md#delete)
* [entries](_cennznet_types.extrinsic-1.md#entries)
* [eq](_cennznet_types.extrinsic-1.md#eq)
* [forEach](_cennznet_types.extrinsic-1.md#foreach)
* [get](_cennznet_types.extrinsic-1.md#get)
* [getAtIndex](_cennznet_types.extrinsic-1.md#getatindex)
* [has](_cennznet_types.extrinsic-1.md#has)
* [keys](_cennznet_types.extrinsic-1.md#keys)
* [set](_cennznet_types.extrinsic-1.md#set)
* [sign](_cennznet_types.extrinsic-1.md#sign)
* [toArray](_cennznet_types.extrinsic-1.md#toarray)
* [toHex](_cennznet_types.extrinsic-1.md#tohex)
* [toJSON](_cennznet_types.extrinsic-1.md#tojson)
* [toPlain](_cennznet_types.extrinsic-1.md#toplain)
* [toString](_cennznet_types.extrinsic-1.md#tostring)
* [toU8a](_cennznet_types.extrinsic-1.md#tou8a)
* [values](_cennznet_types.extrinsic-1.md#values)
* [decodeExtrinsic](_cennznet_types.extrinsic-1.md#decodeextrinsic)
* [with](_cennznet_types.extrinsic-1.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Extrinsic**(value?: *[ExtrinsicValue](../modules/_cennznet_types.md#extrinsicvalue-1) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md)*): [Extrinsic](_cennznet_types.extrinsic-1.md)

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in packages/types/src/extrinsic/Extrinsic.ts:57*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [ExtrinsicValue](../modules/_cennznet_types.md#extrinsicvalue-1) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md) |

**Returns:** [Extrinsic](_cennznet_types.extrinsic-1.md)

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

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[isEmpty](../interfaces/_plugnet.iextrinsic.md#isempty)*

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

<a id="args"></a>

###  args

**get args**(): `Array`<[Codec](../interfaces/_plugnet.codec.md)>

*Defined in packages/types/src/extrinsic/Extrinsic.ts:116*

*__description__*: The arguments passed to for the call, exposes args so it is compatible with [Method](_plugnet.method.md)

**Returns:** `Array`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="argsdef"></a>

###  argsDef

**get argsDef**(): [ArgsDef](../interfaces/_plugnet.argsdef.md)

*Defined in packages/types/src/extrinsic/Extrinsic.ts:123*

*__description__*: Thge argument defintions, compatible with [Method](_plugnet.method.md)

**Returns:** [ArgsDef](../interfaces/_plugnet.argsdef.md)

___
<a id="callindex"></a>

###  callIndex

**get callIndex**(): `Uint8Array`

*Defined in packages/types/src/extrinsic/Extrinsic.ts:130*

*__description__*: The actual `[sectionIndex, methodIndex]` as used in the Method

**Returns:** `Uint8Array`

___
<a id="data"></a>

###  data

**get data**(): `Uint8Array`

*Defined in packages/types/src/extrinsic/Extrinsic.ts:137*

*__description__*: The actual data for the Method

**Returns:** `Uint8Array`

___
<a id="doughnut"></a>

###  doughnut

**get doughnut**(): [Option](_plugnet.option.md)<[Doughnut](_cennznet_types.doughnut.md)>

*Defined in packages/types/src/extrinsic/Extrinsic.ts:199*

**Returns:** [Option](_plugnet.option.md)<[Doughnut](_cennznet_types.doughnut.md)>

___
<a id="encodedlength"></a>

###  encodedLength

**get encodedLength**(): `number`

*Overrides [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in packages/types/src/extrinsic/Extrinsic.ts:144*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="feeexchange"></a>

###  feeExchange

**get feeExchange**(): [Option](_plugnet.option.md)<[FeeExchange](_cennznet_types.feeexchange-1.md)>

*Defined in packages/types/src/extrinsic/Extrinsic.ts:203*

**Returns:** [Option](_plugnet.option.md)<[FeeExchange](_cennznet_types.feeexchange-1.md)>

___
<a id="hasorigin"></a>

###  hasOrigin

**get hasOrigin**(): `boolean`

*Defined in packages/types/src/extrinsic/Extrinsic.ts:160*

*__description__*: `true` is method has `Origin` argument (compatibility with [Method](_plugnet.method.md))

**Returns:** `boolean`

___
<a id="hash"></a>

###  hash

**get hash**(): [Hash](_plugnet.hash.md)

*Defined in packages/types/src/extrinsic/Extrinsic.ts:153*

*__description__*: Convernience function, encodes the extrinsic and returns the actual hash

**Returns:** [Hash](_plugnet.hash.md)

___
<a id="issigned"></a>

###  isSigned

**get isSigned**(): `boolean`

*Defined in packages/types/src/extrinsic/Extrinsic.ts:167*

*__description__*: `true` id the extrinsic is signed

**Returns:** `boolean`

___
<a id="length"></a>

###  length

**get length**(): `number`

*Defined in packages/types/src/extrinsic/Extrinsic.ts:174*

*__description__*: The length of the encoded value

**Returns:** `number`

___
<a id="meta"></a>

###  meta

**get meta**(): [FunctionMetadata](_plugnet.functionmetadata.md)

*Defined in packages/types/src/extrinsic/Extrinsic.ts:181*

*__description__*: The [FunctionMetadata](_plugnet.functionmetadata.md) that describes the extrinsic

**Returns:** [FunctionMetadata](_plugnet.functionmetadata.md)

___
<a id="method"></a>

###  method

**get method**(): [Method](_plugnet.method.md)

*Defined in packages/types/src/extrinsic/Extrinsic.ts:188*

*__description__*: The [Method](_plugnet.method.md) this extrinsic wraps

**Returns:** [Method](_plugnet.method.md)

___
<a id="signature"></a>

###  signature

**get signature**(): [ExtrinsicSignature](_cennznet_types.extrinsicsignature-1.md)

*Defined in packages/types/src/extrinsic/Extrinsic.ts:195*

*__description__*: The [ExtrinsicSignature](_cennznet_types.extrinsicsignature-1.md)

**Returns:** [ExtrinsicSignature](_cennznet_types.extrinsicsignature-1.md)

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
<a id="adddoughnut"></a>

###  addDoughnut

▸ **addDoughnut**(doughnut: *[DoughnutValue](../modules/_cennznet_types.md#doughnutvalue-1)*): [Extrinsic](_cennznet_types.extrinsic-1.md)

*Defined in packages/types/src/extrinsic/Extrinsic.ts:219*

*__description__*: append doughnut to Extrinsic

**Parameters:**

| Name | Type |
| ------ | ------ |
| doughnut | [DoughnutValue](../modules/_cennznet_types.md#doughnutvalue-1) |

**Returns:** [Extrinsic](_cennznet_types.extrinsic-1.md)

___
<a id="addfeeexchangeopt"></a>

###  addFeeExchangeOpt

▸ **addFeeExchangeOpt**(feeExchangeOpt: *[FeeExchangeValue](../modules/_cennznet_types.md#feeexchangevalue-1)*): [Extrinsic](_cennznet_types.extrinsic-1.md)

*Defined in packages/types/src/extrinsic/Extrinsic.ts:229*

*__description__*: append fee exchange options to Extrinsic

**Parameters:**

| Name | Type |
| ------ | ------ |
| feeExchangeOpt | [FeeExchangeValue](../modules/_cennznet_types.md#feeexchangevalue-1) |

**Returns:** [Extrinsic](_cennznet_types.extrinsic-1.md)

___
<a id="addsignature"></a>

###  addSignature

▸ **addSignature**(signer: *[Address](_plugnet.address.md) \| `Uint8Array`*, signature: *`Uint8Array`*, nonce: *[AnyNumber](../modules/_plugnet.md#anynumber)*, era?: *`Uint8Array`*): [Extrinsic](_cennznet_types.extrinsic-1.md)

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[addSignature](../interfaces/_plugnet.iextrinsic.md#addsignature)*

*Defined in packages/types/src/extrinsic/Extrinsic.ts:210*

*__description__*: Add an [ExtrinsicSignature](_cennznet_types.extrinsicsignature-1.md) to the extrinsic (already generated)

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Address](_plugnet.address.md) \| `Uint8Array` |
| signature | `Uint8Array` |
| nonce | [AnyNumber](../modules/_plugnet.md#anynumber) |
| `Optional` era | `Uint8Array` |

**Returns:** [Extrinsic](_cennznet_types.extrinsic-1.md)

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

▸ **sign**(account: *[KeyringPair](../interfaces/_plugnet.keyringpair.md)*, options: *[SignatureOptions](../modules/_plugnet.md#signatureoptions)*): [Extrinsic](_cennznet_types.extrinsic-1.md)

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[sign](../interfaces/_plugnet.iextrinsic.md#sign)*

*Defined in packages/types/src/extrinsic/Extrinsic.ts:239*

*__description__*: Sign the extrinsic with a specific keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [KeyringPair](../interfaces/_plugnet.keyringpair.md) |
| options | [SignatureOptions](../modules/_plugnet.md#signatureoptions) |

**Returns:** [Extrinsic](_cennznet_types.extrinsic-1.md)

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_plugnet.codec.md)>

*Overrides [Struct](_plugnet.struct.md).[toArray](_plugnet.struct.md#toarray)*

*Defined in packages/types/src/extrinsic/Extrinsic.ts:263*

**Returns:** `Array`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[toHex](../interfaces/_plugnet.iextrinsic.md#tohex)*

*Overrides [Struct](_plugnet.struct.md).[toHex](_plugnet.struct.md#tohex)*

*Defined in packages/types/src/extrinsic/Extrinsic.ts:248*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [IExtrinsic](../interfaces/_plugnet.iextrinsic.md).[toJSON](../interfaces/_plugnet.iextrinsic.md#tojson)*

*Overrides [Struct](_plugnet.struct.md).[toJSON](_plugnet.struct.md#tojson)*

*Defined in packages/types/src/extrinsic/Extrinsic.ts:255*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="toplain"></a>

###  toPlain

▸ **toPlain**(): `any`

*Defined in packages/types/src/extrinsic/Extrinsic.ts:259*

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

*Defined in packages/types/src/extrinsic/Extrinsic.ts:279*

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

▸ **decodeExtrinsic**(value: *[ExtrinsicValue](../modules/_cennznet_types.md#extrinsicvalue-1) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md)*): [`any`, [ExtrinsicValue](../modules/_cennznet_types.md#extrinsicvalue-1) \| `Array`<`number`> \| `Uint8Array`]

*Defined in packages/types/src/extrinsic/Extrinsic.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [ExtrinsicValue](../modules/_cennznet_types.md#extrinsicvalue-1) \| [AnyU8a](../modules/_plugnet.md#anyu8a) \| [Method](_plugnet.method.md) |

**Returns:** [`any`, [ExtrinsicValue](../modules/_cennznet_types.md#extrinsicvalue-1) \| `Array`<`number`> \| `Uint8Array`]

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

