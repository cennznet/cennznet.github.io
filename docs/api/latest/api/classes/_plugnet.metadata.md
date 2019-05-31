[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Metadata](../classes/_plugnet.metadata.md)

# Class: Metadata

*__name__*: Metadata

*__description__*: The versioned runtime metadata as a decoded structure

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

↳  [MetadataVersioned](_plugnet.metadataversioned.md)

**↳ Metadata**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)
* [MetadataInterface](../interfaces/_plugnet.metadatainterface.md)

## Index

### Constructors

* [constructor](_plugnet.metadata.md#constructor)

### Properties

* [Type](_plugnet.metadata.md#type)
* [__@toStringTag](_plugnet.metadata.md#___tostringtag)
* [asV0](_plugnet.metadata.md#asv0)
* [asV1](_plugnet.metadata.md#asv1)
* [asV2](_plugnet.metadata.md#asv2)
* [asV3](_plugnet.metadata.md#asv3)
* [asV4](_plugnet.metadata.md#asv4)
* [encodedLength](_plugnet.metadata.md#encodedlength)
* [isEmpty](_plugnet.metadata.md#isempty)
* [magicNumber](_plugnet.metadata.md#magicnumber)
* [size](_plugnet.metadata.md#size)
* [version](_plugnet.metadata.md#version)

### Methods

* [__@iterator](_plugnet.metadata.md#___iterator)
* [clear](_plugnet.metadata.md#clear)
* [delete](_plugnet.metadata.md#delete)
* [entries](_plugnet.metadata.md#entries)
* [eq](_plugnet.metadata.md#eq)
* [forEach](_plugnet.metadata.md#foreach)
* [get](_plugnet.metadata.md#get)
* [getAtIndex](_plugnet.metadata.md#getatindex)
* [getUniqTypes](_plugnet.metadata.md#getuniqtypes)
* [has](_plugnet.metadata.md#has)
* [keys](_plugnet.metadata.md#keys)
* [set](_plugnet.metadata.md#set)
* [toArray](_plugnet.metadata.md#toarray)
* [toHex](_plugnet.metadata.md#tohex)
* [toJSON](_plugnet.metadata.md#tojson)
* [toString](_plugnet.metadata.md#tostring)
* [toU8a](_plugnet.metadata.md#tou8a)
* [values](_plugnet.metadata.md#values)
* [with](_plugnet.metadata.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Metadata**(value?: *`Uint8Array` \| `string`*): [Metadata](_plugnet.metadata.md)

*Overrides [MetadataVersioned](_plugnet.metadataversioned.md).[constructor](_plugnet.metadataversioned.md#constructor)*

*Defined in node_modules/@plugnet/types/Metadata/Metadata.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` \| `string` |

**Returns:** [Metadata](_plugnet.metadata.md)

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
<a id="asv0"></a>

###  asV0

**● asV0**: *[MetadataV0](_plugnet.metadatav0.md)*

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[asV0](_plugnet.metadataversioned.md#asv0)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:35*

*__description__*: Returns the wrapped metadata as a V0 object

___
<a id="asv1"></a>

###  asV1

**● asV1**: *[MetadataV1](_plugnet.metadatav1.md)*

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[asV1](_plugnet.metadataversioned.md#asv1)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:39*

*__description__*: Returns the wrapped values as a V1 object

___
<a id="asv2"></a>

###  asV2

**● asV2**: *[MetadataV2](_plugnet.metadatav2.md)*

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[asV2](_plugnet.metadataversioned.md#asv2)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:43*

*__description__*: Returns the wrapped values as a V2 object

___
<a id="asv3"></a>

###  asV3

**● asV3**: *[MetadataV3](_plugnet.metadatav3.md)*

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[asV3](_plugnet.metadataversioned.md#asv3)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:47*

*__description__*: Returns the wrapped values as a V3 object

___
<a id="asv4"></a>

###  asV4

**● asV4**: *[MetadataV4](_plugnet.metadatav4.md)*

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[asV4](_plugnet.metadataversioned.md#asv4)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:52*

*__description__*: Returns the wrapped values as a V3 object

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:57*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Struct](_plugnet.struct.md).[isEmpty](_plugnet.struct.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="magicnumber"></a>

###  magicNumber

**● magicNumber**: *[MagicNumber](_plugnet.magicnumber.md)*

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[magicNumber](_plugnet.metadataversioned.md#magicnumber)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:23*

*__description__*: 

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

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[version](_plugnet.metadataversioned.md#version)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:31*

*__description__*: the metadata version this structure represents

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

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

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
<a id="getuniqtypes"></a>

###  getUniqTypes

▸ **getUniqTypes**(throwError: *`boolean`*): `Array`<`string`>

*Implementation of [MetadataInterface](../interfaces/_plugnet.metadatainterface.md).[getUniqTypes](../interfaces/_plugnet.metadatainterface.md#getuniqtypes)*

*Inherited from [MetadataVersioned](_plugnet.metadataversioned.md).[getUniqTypes](_plugnet.metadataversioned.md#getuniqtypes)*

*Defined in node_modules/@plugnet/types/Metadata/MetadataVersioned.d.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| throwError | `boolean` |

**Returns:** `Array`<`string`>

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

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Inherited from [Struct](_plugnet.struct.md).[toHex](_plugnet.struct.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:78*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Struct](_plugnet.struct.md).[toJSON](_plugnet.struct.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:82*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Struct](_plugnet.struct.md).[toString](_plugnet.struct.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:86*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Struct](_plugnet.struct.md).[toU8a](_plugnet.struct.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:91*

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

