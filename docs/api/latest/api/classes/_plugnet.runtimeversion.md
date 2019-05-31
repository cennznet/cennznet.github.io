[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [RuntimeVersion](../classes/_plugnet.runtimeversion.md)

# Class: RuntimeVersion

*__name__*: RuntimeVersion

*__description__*: A defintion of the runtime and the associated versions thereof

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

↳  [Struct](_plugnet.struct.md)

**↳ RuntimeVersion**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)
* [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md)

## Index

### Constructors

* [constructor](_plugnet.runtimeversion.md#constructor)

### Properties

* [Type](_plugnet.runtimeversion.md#type)
* [__@toStringTag](_plugnet.runtimeversion.md#___tostringtag)
* [apis](_plugnet.runtimeversion.md#apis)
* [authoringVersion](_plugnet.runtimeversion.md#authoringversion)
* [encodedLength](_plugnet.runtimeversion.md#encodedlength)
* [implName](_plugnet.runtimeversion.md#implname)
* [implVersion](_plugnet.runtimeversion.md#implversion)
* [isEmpty](_plugnet.runtimeversion.md#isempty)
* [size](_plugnet.runtimeversion.md#size)
* [specName](_plugnet.runtimeversion.md#specname)
* [specVersion](_plugnet.runtimeversion.md#specversion)

### Methods

* [__@iterator](_plugnet.runtimeversion.md#___iterator)
* [clear](_plugnet.runtimeversion.md#clear)
* [delete](_plugnet.runtimeversion.md#delete)
* [entries](_plugnet.runtimeversion.md#entries)
* [eq](_plugnet.runtimeversion.md#eq)
* [forEach](_plugnet.runtimeversion.md#foreach)
* [get](_plugnet.runtimeversion.md#get)
* [getAtIndex](_plugnet.runtimeversion.md#getatindex)
* [has](_plugnet.runtimeversion.md#has)
* [keys](_plugnet.runtimeversion.md#keys)
* [set](_plugnet.runtimeversion.md#set)
* [toArray](_plugnet.runtimeversion.md#toarray)
* [toHex](_plugnet.runtimeversion.md#tohex)
* [toJSON](_plugnet.runtimeversion.md#tojson)
* [toString](_plugnet.runtimeversion.md#tostring)
* [toU8a](_plugnet.runtimeversion.md#tou8a)
* [values](_plugnet.runtimeversion.md#values)
* [with](_plugnet.runtimeversion.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RuntimeVersion**(value?: *[RuntimeVersionValue](../modules/_plugnet.md#runtimeversionvalue) \| `Uint8Array`*): [RuntimeVersion](_plugnet.runtimeversion.md)

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in node_modules/@plugnet/types/rpc/RuntimeVersion.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [RuntimeVersionValue](../modules/_plugnet.md#runtimeversionvalue) \| `Uint8Array` |

**Returns:** [RuntimeVersion](_plugnet.runtimeversion.md)

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
<a id="apis"></a>

###  apis

**● apis**: *[Vector](_plugnet.vector.md)<[RuntimeVersionApi](_plugnet.runtimeversionapi.md)>*

*Implementation of [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md).[apis](../interfaces/_plugnet.runtimeversioninterface.md#apis)*

*Defined in node_modules/@plugnet/types/rpc/RuntimeVersion.d.ts:54*

*__description__*: The available APIs as [RuntimeVersionApi](_plugnet.runtimeversionapi.md)

___
<a id="authoringversion"></a>

###  authoringVersion

**● authoringVersion**: *[U32](_plugnet.u32.md)*

*Implementation of [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md).[authoringVersion](../interfaces/_plugnet.runtimeversioninterface.md#authoringversion)*

*Defined in node_modules/@plugnet/types/rpc/RuntimeVersion.d.ts:58*

*__description__*: The authoring version as [U32](_plugnet.u32.md)

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:57*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="implname"></a>

###  implName

**● implName**: *[Text](_plugnet.text.md)*

*Implementation of [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md).[implName](../interfaces/_plugnet.runtimeversioninterface.md#implname)*

*Defined in node_modules/@plugnet/types/rpc/RuntimeVersion.d.ts:62*

*__description__*: The implementation name

___
<a id="implversion"></a>

###  implVersion

**● implVersion**: *[U32](_plugnet.u32.md)*

*Implementation of [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md).[implVersion](../interfaces/_plugnet.runtimeversioninterface.md#implversion)*

*Defined in node_modules/@plugnet/types/rpc/RuntimeVersion.d.ts:66*

*__description__*: The implementation version

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

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
<a id="specname"></a>

###  specName

**● specName**: *[Text](_plugnet.text.md)*

*Implementation of [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md).[specName](../interfaces/_plugnet.runtimeversioninterface.md#specname)*

*Defined in node_modules/@plugnet/types/rpc/RuntimeVersion.d.ts:70*

*__description__*: The specification name

___
<a id="specversion"></a>

###  specVersion

**● specVersion**: *[U32](_plugnet.u32.md)*

*Implementation of [RuntimeVersionInterface](../interfaces/_plugnet.runtimeversioninterface.md).[specVersion](../interfaces/_plugnet.runtimeversioninterface.md#specversion)*

*Defined in node_modules/@plugnet/types/rpc/RuntimeVersion.d.ts:74*

*__description__*: The specification version

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

