[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ReferendumInfo](../classes/_plugnet.referenduminfo.md)

# Class: ReferendumInfo

*__name__*: ReferendumInfo

*__description__*: Info regarding an ongoing referendum

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

↳  [Struct](_plugnet.struct.md)

**↳ ReferendumInfo**

↳  [ReferendumInfoExtended](_plugnet.referenduminfoextended.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.referenduminfo.md#constructor)

### Properties

* [Type](_plugnet.referenduminfo.md#type)
* [__@toStringTag](_plugnet.referenduminfo.md#___tostringtag)
* [delay](_plugnet.referenduminfo.md#delay)
* [encodedLength](_plugnet.referenduminfo.md#encodedlength)
* [end](_plugnet.referenduminfo.md#end)
* [isEmpty](_plugnet.referenduminfo.md#isempty)
* [proposal](_plugnet.referenduminfo.md#proposal)
* [size](_plugnet.referenduminfo.md#size)
* [threshold](_plugnet.referenduminfo.md#threshold)

### Methods

* [__@iterator](_plugnet.referenduminfo.md#___iterator)
* [clear](_plugnet.referenduminfo.md#clear)
* [delete](_plugnet.referenduminfo.md#delete)
* [entries](_plugnet.referenduminfo.md#entries)
* [eq](_plugnet.referenduminfo.md#eq)
* [forEach](_plugnet.referenduminfo.md#foreach)
* [get](_plugnet.referenduminfo.md#get)
* [getAtIndex](_plugnet.referenduminfo.md#getatindex)
* [has](_plugnet.referenduminfo.md#has)
* [keys](_plugnet.referenduminfo.md#keys)
* [set](_plugnet.referenduminfo.md#set)
* [toArray](_plugnet.referenduminfo.md#toarray)
* [toHex](_plugnet.referenduminfo.md#tohex)
* [toJSON](_plugnet.referenduminfo.md#tojson)
* [toString](_plugnet.referenduminfo.md#tostring)
* [toU8a](_plugnet.referenduminfo.md#tou8a)
* [values](_plugnet.referenduminfo.md#values)
* [with](_plugnet.referenduminfo.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ReferendumInfo**(value?: *[ReferendumInfoValue](../modules/_plugnet.md#referenduminfovalue) \| `Uint8Array` \| `Map`<`string`, [Codec](../interfaces/_plugnet.codec.md)>*): [ReferendumInfo](_plugnet.referenduminfo.md)

*Overrides [Struct](_plugnet.struct.md).[constructor](_plugnet.struct.md#constructor)*

*Defined in node_modules/@plugnet/types/type/ReferendumInfo.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [ReferendumInfoValue](../modules/_plugnet.md#referenduminfovalue) \| `Uint8Array` \| `Map`<`string`, [Codec](../interfaces/_plugnet.codec.md)> |

**Returns:** [ReferendumInfo](_plugnet.referenduminfo.md)

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
<a id="delay"></a>

###  delay

**● delay**: *[BlockNumber](_plugnet.blocknumber.md)*

*Defined in node_modules/@plugnet/types/type/ReferendumInfo.d.ts:34*

*__description__*: The delay (in blocks) to wait after a successful referendum before deploying

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Struct](_plugnet.struct.md).[encodedLength](_plugnet.struct.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:57*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="end"></a>

###  end

**● end**: *[BlockNumber](_plugnet.blocknumber.md)*

*Defined in node_modules/@plugnet/types/type/ReferendumInfo.d.ts:22*

*__description__*: When voting on this referendum will end

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Struct](_plugnet.struct.md).[isEmpty](_plugnet.struct.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="proposal"></a>

###  proposal

**● proposal**: *[Proposal](_plugnet.proposal.md)*

*Defined in node_modules/@plugnet/types/type/ReferendumInfo.d.ts:26*

*__description__*: The proposal being voted on

___
<a id="size"></a>

###  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___
<a id="threshold"></a>

###  threshold

**● threshold**: *[VoteThreshold](_plugnet.votethreshold.md)*

*Defined in node_modules/@plugnet/types/type/ReferendumInfo.d.ts:30*

*__description__*: The thresholding mechanism to determine whether it passed

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
