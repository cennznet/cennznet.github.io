[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [StorageFunctionMetadata](../classes/_plugnet.storagefunctionmetadata-1.md)

# Class: StorageFunctionMetadata

*__name__*: StorageFunctionMetadata

*__description__*: The definition of a storage function

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

↳  [Struct](_plugnet.struct.md)

**↳ StorageFunctionMetadata**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.storagefunctionmetadata-1.md#constructor)

### Properties

* [Type](_plugnet.storagefunctionmetadata-1.md#type)
* [__@toStringTag](_plugnet.storagefunctionmetadata-1.md#___tostringtag)
* [default](_plugnet.storagefunctionmetadata-1.md#default)
* [docs](_plugnet.storagefunctionmetadata-1.md#docs)
* [documentation](_plugnet.storagefunctionmetadata-1.md#documentation)
* [encodedLength](_plugnet.storagefunctionmetadata-1.md#encodedlength)
* [fallback](_plugnet.storagefunctionmetadata-1.md#fallback)
* [isEmpty](_plugnet.storagefunctionmetadata-1.md#isempty)
* [modifier](_plugnet.storagefunctionmetadata-1.md#modifier)
* [name](_plugnet.storagefunctionmetadata-1.md#name)
* [size](_plugnet.storagefunctionmetadata-1.md#size)
* [type](_plugnet.storagefunctionmetadata-1.md#type-1)

### Methods

* [__@iterator](_plugnet.storagefunctionmetadata-1.md#___iterator)
* [clear](_plugnet.storagefunctionmetadata-1.md#clear)
* [delete](_plugnet.storagefunctionmetadata-1.md#delete)
* [entries](_plugnet.storagefunctionmetadata-1.md#entries)
* [eq](_plugnet.storagefunctionmetadata-1.md#eq)
* [forEach](_plugnet.storagefunctionmetadata-1.md#foreach)
* [get](_plugnet.storagefunctionmetadata-1.md#get)
* [getAtIndex](_plugnet.storagefunctionmetadata-1.md#getatindex)
* [has](_plugnet.storagefunctionmetadata-1.md#has)
* [keys](_plugnet.storagefunctionmetadata-1.md#keys)
* [set](_plugnet.storagefunctionmetadata-1.md#set)
* [toArray](_plugnet.storagefunctionmetadata-1.md#toarray)
* [toHex](_plugnet.storagefunctionmetadata-1.md#tohex)
* [toJSON](_plugnet.storagefunctionmetadata-1.md#tojson)
* [toString](_plugnet.storagefunctionmetadata-1.md#tostring)
* [toU8a](_plugnet.storagefunctionmetadata-1.md#tou8a)
* [values](_plugnet.storagefunctionmetadata-1.md#values)
* [with](_plugnet.storagefunctionmetadata-1.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StorageFunctionMetadata**(value?: *[StorageFunctionMetadataValue](../modules/_plugnet.md#storagefunctionmetadatavalue-3) \| `Uint8Array`*): [StorageFunctionMetadata](_plugnet.storagefunctionmetadata-1.md)

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:71*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [StorageFunctionMetadataValue](../modules/_plugnet.md#storagefunctionmetadatavalue-3) \| `Uint8Array` |

**Returns:** [StorageFunctionMetadata](_plugnet.storagefunctionmetadata-1.md)

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
<a id="default"></a>

###  default

**● default**: *[Bytes](_plugnet.bytes.md)*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:77*

*__description__*: The default value of the storage function

*__deprecated__*: Use `.fallback` instead.

___
<a id="docs"></a>

###  docs

**● docs**: *[Vector](_plugnet.vector.md)<[Text](_plugnet.text.md)>*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:86*

*__description__*: The [Text](_plugnet.text.md) documentation

*__deprecated__*: Use `.documentation` instead.

___
<a id="documentation"></a>

###  documentation

**● documentation**: *[Vector](_plugnet.vector.md)<[Text](_plugnet.text.md)>*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:81*

*__description__*: The [Text](_plugnet.text.md) documentation

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:57*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="fallback"></a>

###  fallback

**● fallback**: *[Bytes](_plugnet.bytes.md)*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:90*

*__description__*: The [Bytes](_plugnet.bytes.md) fallback default

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Struct](_plugnet.struct.md).[isEmpty](_plugnet.struct.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="modifier"></a>

###  modifier

**● modifier**: *[StorageFunctionModifier](_plugnet.storagefunctionmodifier.md)*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:94*

*__description__*: The \[\[MetadataArgument\]\] for arguments

___
<a id="name"></a>

###  name

**● name**: *[Text](_plugnet.text.md)*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:98*

*__description__*: The call name

___
<a id="size"></a>

###  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___
<a id="type-1"></a>

###  type

**● type**: *[StorageFunctionType](_plugnet.storagefunctiontype-2.md)*

*Defined in node_modules/@plugnet/types/Metadata/v3/Storage.d.ts:102*

*__description__*: The [StorageFunctionType](_plugnet.storagefunctiontype-3.md)

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

