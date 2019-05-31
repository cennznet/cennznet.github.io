[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Consensus](../classes/_plugnet.consensus.md)

# Class: Consensus

*__name__*: Consensus

*__description__*: Log item indicating consensus

## Hierarchy

↳  [Tuple](_plugnet.tuple.md)

**↳ Consensus**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Indexable

\[n: `number`\]:&nbsp;[Codec](../interfaces/_plugnet.codec.md)
## Index

### Constructors

* [constructor](_plugnet.consensus.md#constructor)

### Properties

* [Types](_plugnet.consensus.md#types)
* [asAura](_plugnet.consensus.md#asaura)
* [data](_plugnet.consensus.md#data)
* [encodedLength](_plugnet.consensus.md#encodedlength)
* [engine](_plugnet.consensus.md#engine)
* [isAura](_plugnet.consensus.md#isaura)
* [isEmpty](_plugnet.consensus.md#isempty)
* [length](_plugnet.consensus.md#length)

### Methods

* [__@iterator](_plugnet.consensus.md#___iterator)
* [__@unscopables](_plugnet.consensus.md#___unscopables)
* [concat](_plugnet.consensus.md#concat)
* [copyWithin](_plugnet.consensus.md#copywithin)
* [entries](_plugnet.consensus.md#entries)
* [eq](_plugnet.consensus.md#eq)
* [every](_plugnet.consensus.md#every)
* [fill](_plugnet.consensus.md#fill)
* [filter](_plugnet.consensus.md#filter)
* [find](_plugnet.consensus.md#find)
* [findIndex](_plugnet.consensus.md#findindex)
* [forEach](_plugnet.consensus.md#foreach)
* [includes](_plugnet.consensus.md#includes)
* [indexOf](_plugnet.consensus.md#indexof)
* [join](_plugnet.consensus.md#join)
* [keys](_plugnet.consensus.md#keys)
* [lastIndexOf](_plugnet.consensus.md#lastindexof)
* [map](_plugnet.consensus.md#map)
* [pop](_plugnet.consensus.md#pop)
* [push](_plugnet.consensus.md#push)
* [reduce](_plugnet.consensus.md#reduce)
* [reduceRight](_plugnet.consensus.md#reduceright)
* [reverse](_plugnet.consensus.md#reverse)
* [shift](_plugnet.consensus.md#shift)
* [slice](_plugnet.consensus.md#slice)
* [some](_plugnet.consensus.md#some)
* [sort](_plugnet.consensus.md#sort)
* [splice](_plugnet.consensus.md#splice)
* [toArray](_plugnet.consensus.md#toarray)
* [toHex](_plugnet.consensus.md#tohex)
* [toJSON](_plugnet.consensus.md#tojson)
* [toLocaleString](_plugnet.consensus.md#tolocalestring)
* [toString](_plugnet.consensus.md#tostring)
* [toU8a](_plugnet.consensus.md#tou8a)
* [unshift](_plugnet.consensus.md#unshift)
* [values](_plugnet.consensus.md#values)
* [with](_plugnet.consensus.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Consensus**(value: *`any`*): [Consensus](_plugnet.consensus.md)

*Overrides [Tuple](_plugnet.tuple.md).[constructor](_plugnet.tuple.md#constructor)*

*Defined in node_modules/@plugnet/types/type/Digest.d.ts:54*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** [Consensus](_plugnet.consensus.md)

___

## Properties

<a id="types"></a>

###  Types

**● Types**: *`Array`<`string`>*

*Inherited from [Tuple](_plugnet.tuple.md).[Types](_plugnet.tuple.md#types)*

*Defined in node_modules/@plugnet/types/codec/Tuple.d.ts:24*

*__description__*: The types definition of the tuple

___
<a id="asaura"></a>

###  asAura

**● asAura**: *[[U64](_plugnet.u64.md), [Signature](_plugnet.signature.md)]*

*Defined in node_modules/@plugnet/types/type/Digest.d.ts:71*

*__description__*: The slot and signature extracted from the raw data (assuming Aura)

___
<a id="data"></a>

###  data

**● data**: *[Bytes](_plugnet.bytes.md)*

*Defined in node_modules/@plugnet/types/type/Digest.d.ts:67*

*__description__*: The wrapped [Bytes](_plugnet.bytes.md)

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Tuple](_plugnet.tuple.md).[encodedLength](_plugnet.tuple.md#encodedlength)*

*Overrides [AbstractArray](_plugnet.abstractarray.md).[encodedLength](_plugnet.abstractarray.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Tuple.d.ts:20*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="engine"></a>

###  engine

**● engine**: *[U32](_plugnet.u32.md)*

*Defined in node_modules/@plugnet/types/type/Digest.d.ts:63*

*__description__*: The wrapped engine [U32](_plugnet.u32.md)

___
<a id="isaura"></a>

###  isAura

**● isAura**: *`boolean`*

*Defined in node_modules/@plugnet/types/type/Digest.d.ts:59*

*__description__*: `true` if the engine matches aura

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[isEmpty](_plugnet.abstractarray.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:13*

*__description__*: Checks if the value is an empty value

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[length](_plugnet.abstractarray.md#length)*

*Overrides Array.length*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:21*

*__description__*: The length of the value

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<[Codec](../interfaces/_plugnet.codec.md)>

*Inherited from Array.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:52*

Iterator

**Returns:** `IterableIterator`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="___unscopables"></a>

###  __@unscopables

▸ **__@unscopables**(): `object`

*Inherited from Array.[Symbol.unscopables]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94*

Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.

**Returns:** `object`

___
<a id="concat"></a>

###  concat

▸ **concat**(...items: *`ConcatArray`<[Codec](../interfaces/_plugnet.codec.md)>[]*): [Codec](../interfaces/_plugnet.codec.md)[]

▸ **concat**(...items: *(`T` \| `ConcatArray`<`T`>)[]*): [Codec](../interfaces/_plugnet.codec.md)[]

*Inherited from Array.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1221*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | `ConcatArray`<[Codec](../interfaces/_plugnet.codec.md)>[] |  Additional items to add to the end of array1. |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)[]

*Inherited from Array.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1226*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | (`T` \| `ConcatArray`<`T`>)[] |  Additional items to add to the end of array1. |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)[]

___
<a id="copywithin"></a>

###  copyWithin

▸ **copyWithin**(target: *`number`*, start: *`number`*, end?: *`number`*): `this`

*Inherited from Array.copyWithin*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:64*

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | `number` |  If target is negative, it is treated as length+target where length is the length of the array. |
| start | `number` |  If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `Optional` end | `number` |  If not specified, length of the this object is used as its default value. |

**Returns:** `this`

___
<a id="entries"></a>

###  entries

▸ **entries**(): `IterableIterator`<[`number`, [Codec](../interfaces/_plugnet.codec.md)]>

*Inherited from Array.entries*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:57*

Returns an iterable of key, value pairs for every entry in the array

**Returns:** `IterableIterator`<[`number`, [Codec](../interfaces/_plugnet.codec.md)]>

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[eq](_plugnet.abstractarray.md#eq)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:25*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="every"></a>

###  every

▸ **every**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.every*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1286*

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="fill"></a>

###  fill

▸ **fill**(value: *[Codec](../interfaces/_plugnet.codec.md)*, start?: *`number`*, end?: *`number`*): `this`

*Inherited from Array.fill*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:53*

Returns the this object after filling the section identified by start and end with value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | [Codec](../interfaces/_plugnet.codec.md) |  value to fill array section with |
| `Optional` start | `number` |  index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `Optional` end | `number` |  index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** `this`

___
<a id="filter"></a>

###  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<[Codec](../interfaces/_plugnet.codec.md)>

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[filter](_plugnet.abstractarray.md#filter)*

*Overrides Array.filter*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:52*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="find"></a>

###  find

▸ **find**<`S`>(predicate: *`function`*, thisArg?: *`any`*): `S` \| `undefined`

▸ **find**(predicate: *`function`*, thisArg?: *`any`*): [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

*Inherited from Array.find*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:31*

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

**Type parameters:**

#### S :  [Codec](../interfaces/_plugnet.codec.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `S` \| `undefined`

*Inherited from Array.find*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` thisArg | `any` |

**Returns:** [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

___
<a id="findindex"></a>

###  findIndex

▸ **findIndex**(predicate: *`function`*, thisArg?: *`any`*): `number`

*Inherited from Array.findIndex*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:43*

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `number`

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Array.forEach*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1298*

Performs the specified action for each element in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `void`

___
<a id="includes"></a>

###  includes

▸ **includes**(searchElement: *[Codec](../interfaces/_plugnet.codec.md)*, fromIndex?: *`number`*): `boolean`

*Inherited from Array.includes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:27*

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [Codec](../interfaces/_plugnet.codec.md) |  The element to search for. |
| `Optional` fromIndex | `number` |  The position in this array at which to begin searching for searchElement. |

**Returns:** `boolean`

___
<a id="indexof"></a>

###  indexOf

▸ **indexOf**(searchElement: *[Codec](../interfaces/_plugnet.codec.md)*, fromIndex?: *`number`*): `number`

*Inherited from Array.indexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1274*

Returns the index of the first occurrence of a value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [Codec](../interfaces/_plugnet.codec.md) |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** `number`

___
<a id="join"></a>

###  join

▸ **join**(separator?: *`string`*): `string`

*Inherited from Array.join*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1231*

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` separator | `string` |  A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

**Returns:** `string`

___
<a id="keys"></a>

###  keys

▸ **keys**(): `IterableIterator`<`number`>

*Inherited from Array.keys*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:62*

Returns an iterable of keys in the array

**Returns:** `IterableIterator`<`number`>

___
<a id="lastindexof"></a>

###  lastIndexOf

▸ **lastIndexOf**(searchElement: *[Codec](../interfaces/_plugnet.codec.md)*, fromIndex?: *`number`*): `number`

*Inherited from Array.lastIndexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1280*

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [Codec](../interfaces/_plugnet.codec.md) |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** `number`

___
<a id="map"></a>

###  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[map](_plugnet.abstractarray.md#map)*

*Overrides Array.map*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:58*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="pop"></a>

###  pop

▸ **pop**(): [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

*Inherited from Array.pop*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1211*

Removes the last element from an array and returns it.

**Returns:** [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

___
<a id="push"></a>

###  push

▸ **push**(...items: *[Codec](../interfaces/_plugnet.codec.md)[]*): `number`

*Inherited from Array.push*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1216*

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [Codec](../interfaces/_plugnet.codec.md)[] |  New elements of the Array. |

**Returns:** `number`

___
<a id="reduce"></a>

###  reduce

▸ **reduce**(callbackfn: *`function`*): [Codec](../interfaces/_plugnet.codec.md)

▸ **reduce**(callbackfn: *`function`*, initialValue: *[Codec](../interfaces/_plugnet.codec.md)*): [Codec](../interfaces/_plugnet.codec.md)

▸ **reduce**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1322*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1323*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [Codec](../interfaces/_plugnet.codec.md) |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1329*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reduceright"></a>

###  reduceRight

▸ **reduceRight**(callbackfn: *`function`*): [Codec](../interfaces/_plugnet.codec.md)

▸ **reduceRight**(callbackfn: *`function`*, initialValue: *[Codec](../interfaces/_plugnet.codec.md)*): [Codec](../interfaces/_plugnet.codec.md)

▸ **reduceRight**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1335*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1336*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [Codec](../interfaces/_plugnet.codec.md) |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1342*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): [Codec](../interfaces/_plugnet.codec.md)[]

*Inherited from Array.reverse*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1235*

Reverses the elements in an Array.

**Returns:** [Codec](../interfaces/_plugnet.codec.md)[]

___
<a id="shift"></a>

###  shift

▸ **shift**(): [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

*Inherited from Array.shift*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1239*

Removes the first element from an array and returns it.

**Returns:** [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

___
<a id="slice"></a>

###  slice

▸ **slice**(start?: *`number`*, end?: *`number`*): [Codec](../interfaces/_plugnet.codec.md)[]

*Inherited from Array.slice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1245*

Returns a section of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `number` |  The beginning of the specified portion of the array. |
| `Optional` end | `number` |  The end of the specified portion of the array. |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)[]

___
<a id="some"></a>

###  some

▸ **some**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.some*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1292*

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="sort"></a>

###  sort

▸ **sort**(compareFn?: *`function`*): `this`

*Inherited from Array.sort*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1250*

Sorts an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` compareFn | `function` |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

**Returns:** `this`

___
<a id="splice"></a>

###  splice

▸ **splice**(start: *`number`*, deleteCount?: *`number`*): [Codec](../interfaces/_plugnet.codec.md)[]

▸ **splice**(start: *`number`*, deleteCount: *`number`*, ...items: *[Codec](../interfaces/_plugnet.codec.md)[]*): [Codec](../interfaces/_plugnet.codec.md)[]

*Inherited from Array.splice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1256*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| `Optional` deleteCount | `number` |  The number of elements to remove. |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)[]

*Inherited from Array.splice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1263*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number` |  The number of elements to remove. |
| `Rest` items | [Codec](../interfaces/_plugnet.codec.md)[] |  Elements to insert into the array in place of the deleted elements. |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)[]

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_plugnet.codec.md)>

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[toArray](_plugnet.abstractarray.md#toarray)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:29*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[toHex](_plugnet.abstractarray.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:33*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [AbstractArray](_plugnet.abstractarray.md).[toJSON](_plugnet.abstractarray.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/AbstractArray.d.ts:37*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tolocalestring"></a>

###  toLocaleString

▸ **toLocaleString**(): `string`

*Inherited from Array.toLocaleString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1207*

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Tuple](_plugnet.tuple.md).[toString](_plugnet.tuple.md#tostring)*

*Overrides [AbstractArray](_plugnet.abstractarray.md).[toString](_plugnet.abstractarray.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Tuple.d.ts:28*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Tuple](_plugnet.tuple.md).[toU8a](_plugnet.tuple.md#tou8a)*

*Overrides [AbstractArray](_plugnet.abstractarray.md).[toU8a](_plugnet.abstractarray.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Tuple.d.ts:33*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="unshift"></a>

###  unshift

▸ **unshift**(...items: *[Codec](../interfaces/_plugnet.codec.md)[]*): `number`

*Inherited from Array.unshift*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1268*

Inserts new elements at the start of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [Codec](../interfaces/_plugnet.codec.md)[] |  Elements to insert at the start of the Array. |

**Returns:** `number`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<[Codec](../interfaces/_plugnet.codec.md)>

*Inherited from Array.values*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:67*

Returns an iterable of values in the array

**Returns:** `IterableIterator`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="with"></a>

### `<Static>` with

▸ **with**(Types: *[TupleConstructors](../modules/_plugnet.md#tupleconstructors)*): [Constructor](../interfaces/_plugnet.constructor.md)<[Tuple](_plugnet.tuple.md)>

*Inherited from [Tuple](_plugnet.tuple.md).[with](_plugnet.tuple.md#with)*

*Defined in node_modules/@plugnet/types/codec/Tuple.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | [TupleConstructors](../modules/_plugnet.md#tupleconstructors) |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md)<[Tuple](_plugnet.tuple.md)>

___

