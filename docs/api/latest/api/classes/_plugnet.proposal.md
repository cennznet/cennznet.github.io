[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Proposal](../classes/_plugnet.proposal.md)

# Class: Proposal

*__name__*: Proposal

*__description__*: A proposal in the system. It just extends [Method](_plugnet.method.md) (Proposal = Call in Rust)

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

↳  [Method](_plugnet.method.md)

**↳ Proposal**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)
* [IMethod](../interfaces/_plugnet.imethod.md)

## Index

### Constructors

* [constructor](_plugnet.proposal.md#constructor)

### Properties

* [Type](_plugnet.proposal.md#type)
* [__@toStringTag](_plugnet.proposal.md#___tostringtag)
* [args](_plugnet.proposal.md#args)
* [argsDef](_plugnet.proposal.md#argsdef)
* [callIndex](_plugnet.proposal.md#callindex)
* [data](_plugnet.proposal.md#data)
* [encodedLength](_plugnet.proposal.md#encodedlength)
* [hasOrigin](_plugnet.proposal.md#hasorigin)
* [isEmpty](_plugnet.proposal.md#isempty)
* [meta](_plugnet.proposal.md#meta)
* [size](_plugnet.proposal.md#size)

### Methods

* [__@iterator](_plugnet.proposal.md#___iterator)
* [clear](_plugnet.proposal.md#clear)
* [delete](_plugnet.proposal.md#delete)
* [entries](_plugnet.proposal.md#entries)
* [eq](_plugnet.proposal.md#eq)
* [forEach](_plugnet.proposal.md#foreach)
* [get](_plugnet.proposal.md#get)
* [getAtIndex](_plugnet.proposal.md#getatindex)
* [has](_plugnet.proposal.md#has)
* [keys](_plugnet.proposal.md#keys)
* [set](_plugnet.proposal.md#set)
* [toArray](_plugnet.proposal.md#toarray)
* [toHex](_plugnet.proposal.md#tohex)
* [toJSON](_plugnet.proposal.md#tojson)
* [toString](_plugnet.proposal.md#tostring)
* [toU8a](_plugnet.proposal.md#tou8a)
* [values](_plugnet.proposal.md#values)
* [filterOrigin](_plugnet.proposal.md#filterorigin)
* [findFunction](_plugnet.proposal.md#findfunction)
* [injectMethods](_plugnet.proposal.md#injectmethods)
* [with](_plugnet.proposal.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Proposal**(value: *`any`*, meta?: *[FunctionMetadata](_plugnet.functionmetadata.md)*): [Proposal](_plugnet.proposal.md)

*Inherited from [Method](_plugnet.method.md).[constructor](_plugnet.method.md#constructor)*

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` meta | [FunctionMetadata](_plugnet.functionmetadata.md) |

**Returns:** [Proposal](_plugnet.proposal.md)

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

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[args](../interfaces/_plugnet.imethod.md#args)*

*Inherited from [Method](_plugnet.method.md).[args](_plugnet.method.md#args)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:60*

*__description__*: The arguments for the function call

___
<a id="argsdef"></a>

###  argsDef

**● argsDef**: *[ArgsDef](../interfaces/_plugnet.argsdef.md)*

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[argsDef](../interfaces/_plugnet.imethod.md#argsdef)*

*Inherited from [Method](_plugnet.method.md).[argsDef](_plugnet.method.md#argsdef)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:64*

*__description__*: Thge argument defintions

___
<a id="callindex"></a>

###  callIndex

**● callIndex**: *`Uint8Array`*

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[callIndex](../interfaces/_plugnet.imethod.md#callindex)*

*Inherited from [Method](_plugnet.method.md).[callIndex](_plugnet.method.md#callindex)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:68*

*__description__*: The encoded `[sectionIndex, methodIndex]` identifier

___
<a id="data"></a>

###  data

**● data**: *`Uint8Array`*

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[data](../interfaces/_plugnet.imethod.md#data)*

*Inherited from [Method](_plugnet.method.md).[data](_plugnet.method.md#data)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:72*

*__description__*: The encoded data

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[encodedLength](../interfaces/_plugnet.imethod.md#encodedlength)*

*Inherited from [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:57*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

###  hasOrigin

**● hasOrigin**: *`boolean`*

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[hasOrigin](../interfaces/_plugnet.imethod.md#hasorigin)*

*Inherited from [Method](_plugnet.method.md).[hasOrigin](_plugnet.method.md#hasorigin)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:76*

*__description__*: `true` if the `Origin` type is on the method (extrinsic method)

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[isEmpty](../interfaces/_plugnet.imethod.md#isempty)*

*Inherited from [Struct](_plugnet.struct.md).[isEmpty](_plugnet.struct.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="meta"></a>

###  meta

**● meta**: *[FunctionMetadata](_plugnet.functionmetadata.md)*

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[meta](../interfaces/_plugnet.imethod.md#meta)*

*Inherited from [Method](_plugnet.method.md).[meta](_plugnet.method.md#meta)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:80*

*__description__*: The [FunctionMetadata](_plugnet.functionmetadata.md)

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

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[eq](../interfaces/_plugnet.imethod.md#eq)*

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

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[toHex](../interfaces/_plugnet.imethod.md#tohex)*

*Inherited from [Struct](_plugnet.struct.md).[toHex](_plugnet.struct.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:78*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[toJSON](../interfaces/_plugnet.imethod.md#tojson)*

*Inherited from [Struct](_plugnet.struct.md).[toJSON](_plugnet.struct.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:82*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[toString](../interfaces/_plugnet.imethod.md#tostring)*

*Inherited from [Struct](_plugnet.struct.md).[toString](_plugnet.struct.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:86*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [IMethod](../interfaces/_plugnet.imethod.md).[toU8a](../interfaces/_plugnet.imethod.md#tou8a)*

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
<a id="filterorigin"></a>

### `<Static>` filterOrigin

▸ **filterOrigin**(meta?: *[FunctionMetadata](_plugnet.functionmetadata.md)*): `Array`<[FunctionArgumentMetadata](_plugnet.functionargumentmetadata.md)>

*Inherited from [Method](_plugnet.method.md).[filterOrigin](_plugnet.method.md#filterorigin)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:47*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` meta | [FunctionMetadata](_plugnet.functionmetadata.md) |

**Returns:** `Array`<[FunctionArgumentMetadata](_plugnet.functionargumentmetadata.md)>

___
<a id="findfunction"></a>

### `<Static>` findFunction

▸ **findFunction**(callIndex: *`Uint8Array`*): [MethodFunction](../interfaces/_plugnet.methodfunction.md)

*Inherited from [Method](_plugnet.method.md).[findFunction](_plugnet.method.md#findfunction)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callIndex | `Uint8Array` |

**Returns:** [MethodFunction](../interfaces/_plugnet.methodfunction.md)

___
<a id="injectmethods"></a>

### `<Static>` injectMethods

▸ **injectMethods**(moduleMethods: *[ModulesWithMethods](../interfaces/_plugnet.moduleswithmethods.md)*): `void`

*Inherited from [Method](_plugnet.method.md).[injectMethods](_plugnet.method.md#injectmethods)*

*Defined in node_modules/@plugnet/types/primitive/Method.d.ts:56*

**Parameters:**

| Name | Type |
| ------ | ------ |
| moduleMethods | [ModulesWithMethods](../interfaces/_plugnet.moduleswithmethods.md) |

**Returns:** `void`

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

