[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [TombstoneContractInfo](../classes/_plugnet.tombstonecontractinfo.md)

# Class: TombstoneContractInfo

## Hierarchy

↳  [Hash](_plugnet.hash.md)

**↳ TombstoneContractInfo**

↳  [Tombstone](_plugnet.tombstone.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)
* [IHash](../interfaces/_plugnet.ihash.md)

## Indexable

\[index: `number`\]:&nbsp;`number`
## Index

### Constructors

* [constructor](_plugnet.tombstonecontractinfo.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](_plugnet.tombstonecontractinfo.md#bytes_per_element)
* [__@toStringTag](_plugnet.tombstonecontractinfo.md#___tostringtag)
* [buffer](_plugnet.tombstonecontractinfo.md#buffer)
* [byteLength](_plugnet.tombstonecontractinfo.md#bytelength)
* [byteOffset](_plugnet.tombstonecontractinfo.md#byteoffset)
* [encodedLength](_plugnet.tombstonecontractinfo.md#encodedlength)
* [isEmpty](_plugnet.tombstonecontractinfo.md#isempty)
* [length](_plugnet.tombstonecontractinfo.md#length)

### Methods

* [__@iterator](_plugnet.tombstonecontractinfo.md#___iterator)
* [bitLength](_plugnet.tombstonecontractinfo.md#bitlength)
* [copyWithin](_plugnet.tombstonecontractinfo.md#copywithin)
* [entries](_plugnet.tombstonecontractinfo.md#entries)
* [eq](_plugnet.tombstonecontractinfo.md#eq)
* [every](_plugnet.tombstonecontractinfo.md#every)
* [fill](_plugnet.tombstonecontractinfo.md#fill)
* [filter](_plugnet.tombstonecontractinfo.md#filter)
* [find](_plugnet.tombstonecontractinfo.md#find)
* [findIndex](_plugnet.tombstonecontractinfo.md#findindex)
* [forEach](_plugnet.tombstonecontractinfo.md#foreach)
* [includes](_plugnet.tombstonecontractinfo.md#includes)
* [indexOf](_plugnet.tombstonecontractinfo.md#indexof)
* [join](_plugnet.tombstonecontractinfo.md#join)
* [keys](_plugnet.tombstonecontractinfo.md#keys)
* [lastIndexOf](_plugnet.tombstonecontractinfo.md#lastindexof)
* [map](_plugnet.tombstonecontractinfo.md#map)
* [reduce](_plugnet.tombstonecontractinfo.md#reduce)
* [reduceRight](_plugnet.tombstonecontractinfo.md#reduceright)
* [reverse](_plugnet.tombstonecontractinfo.md#reverse)
* [set](_plugnet.tombstonecontractinfo.md#set)
* [slice](_plugnet.tombstonecontractinfo.md#slice)
* [some](_plugnet.tombstonecontractinfo.md#some)
* [sort](_plugnet.tombstonecontractinfo.md#sort)
* [subarray](_plugnet.tombstonecontractinfo.md#subarray)
* [toHex](_plugnet.tombstonecontractinfo.md#tohex)
* [toJSON](_plugnet.tombstonecontractinfo.md#tojson)
* [toLocaleString](_plugnet.tombstonecontractinfo.md#tolocalestring)
* [toString](_plugnet.tombstonecontractinfo.md#tostring)
* [toU8a](_plugnet.tombstonecontractinfo.md#tou8a)
* [values](_plugnet.tombstonecontractinfo.md#values)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TombstoneContractInfo**(value?: *[AnyU8a](../modules/_plugnet.md#anyu8a)*): [TombstoneContractInfo](_plugnet.tombstonecontractinfo.md)

*Inherited from [H256](_plugnet.h256.md).[constructor](_plugnet.h256.md#constructor)*

*Overrides [U8aFixed](_plugnet.u8afixed.md).[constructor](_plugnet.u8afixed.md#constructor)*

*Defined in node_modules/@plugnet/types/primitive/H256.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyU8a](../modules/_plugnet.md#anyu8a) |

**Returns:** [TombstoneContractInfo](_plugnet.tombstonecontractinfo.md)

___

## Properties

<a id="bytes_per_element"></a>

###  BYTES_PER_ELEMENT

**● BYTES_PER_ELEMENT**: *`number`*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[BYTES_PER_ELEMENT](../interfaces/_plugnet.ihash.md#bytes_per_element)*

*Inherited from Uint8Array.BYTES_PER_ELEMENT*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1946*

The size in bytes of each element in the array.

___
<a id="___tostringtag"></a>

###  __@toStringTag

**● __@toStringTag**: *"UInt8Array"*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[__@toStringTag](../interfaces/_plugnet.ihash.md#___tostringtag)*

*Inherited from Uint8Array.[Symbol.toStringTag]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:276*

___
<a id="buffer"></a>

###  buffer

**● buffer**: *`ArrayBufferLike`*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[buffer](../interfaces/_plugnet.ihash.md#buffer)*

*Inherited from Uint8Array.buffer*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1951*

The ArrayBuffer instance referenced by the array.

___
<a id="bytelength"></a>

###  byteLength

**● byteLength**: *`number`*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[byteLength](../interfaces/_plugnet.ihash.md#bytelength)*

*Inherited from Uint8Array.byteLength*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1956*

The length in bytes of the array.

___
<a id="byteoffset"></a>

###  byteOffset

**● byteOffset**: *`number`*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[byteOffset](../interfaces/_plugnet.ihash.md#byteoffset)*

*Inherited from Uint8Array.byteOffset*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1961*

The offset in bytes of the array.

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[encodedLength](../interfaces/_plugnet.ihash.md#encodedlength)*

*Inherited from [U8a](_plugnet.u8a.md).[encodedLength](_plugnet.u8a.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:17*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[isEmpty](../interfaces/_plugnet.ihash.md#isempty)*

*Inherited from [U8a](_plugnet.u8a.md).[isEmpty](_plugnet.u8a.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:21*

*__description__*: Returns true if the type wraps an empty/default all-0 value

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[length](../interfaces/_plugnet.ihash.md#length)*

*Inherited from [U8a](_plugnet.u8a.md).[length](_plugnet.u8a.md#length)*

*Overrides Uint8Array.length*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:25*

*__description__*: The length of the value

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`number`>

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[__@iterator](../interfaces/_plugnet.ihash.md#___iterator)*

*Inherited from Uint8Array.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:267*

**Returns:** `IterableIterator`<`number`>

___
<a id="bitlength"></a>

###  bitLength

▸ **bitLength**(): `number`

*Inherited from [U8aFixed](_plugnet.u8afixed.md).[bitLength](_plugnet.u8afixed.md#bitlength)*

*Defined in node_modules/@plugnet/types/codec/U8aFixed.d.ts:16*

*__description__*: Returns the number of bits in the value

**Returns:** `number`

___
<a id="copywithin"></a>

###  copyWithin

▸ **copyWithin**(target: *`number`*, start: *`number`*, end?: *`number`*): `this`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[copyWithin](../interfaces/_plugnet.ihash.md#copywithin)*

*Inherited from Uint8Array.copyWithin*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1972*

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

▸ **entries**(): `IterableIterator`<[`number`, `number`]>

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[entries](../interfaces/_plugnet.ihash.md#entries)*

*Inherited from Uint8Array.entries*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:271*

Returns an array of key, value pairs for every entry in the array

**Returns:** `IterableIterator`<[`number`, `number`]>

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[eq](../interfaces/_plugnet.ihash.md#eq)*

*Inherited from [U8a](_plugnet.u8a.md).[eq](_plugnet.u8a.md#eq)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:29*

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

*Inherited from Uint8Array.every*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1982*

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

▸ **fill**(value: *`number`*, start?: *`number`*, end?: *`number`*): `this`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[fill](../interfaces/_plugnet.ihash.md#fill)*

*Inherited from Uint8Array.fill*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1992*

Returns the this object after filling the section identified by start and end with value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `number` |  value to fill array section with |
| `Optional` start | `number` |  index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `Optional` end | `number` |  index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** `this`

___
<a id="filter"></a>

###  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Uint8Array`

*Inherited from Uint8Array.filter*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2001*

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `Uint8Array`

___
<a id="find"></a>

###  find

▸ **find**(predicate: *`function`*, thisArg?: *`any`*): `number` \| `undefined`

*Inherited from Uint8Array.find*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2012*

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `number` \| `undefined`

___
<a id="findindex"></a>

###  findIndex

▸ **findIndex**(predicate: *`function`*, thisArg?: *`any`*): `number`

*Inherited from Uint8Array.findIndex*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2023*

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

*Inherited from Uint8Array.forEach*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2032*

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

▸ **includes**(searchElement: *`number`*, fromIndex?: *`number`*): `boolean`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[includes](../interfaces/_plugnet.ihash.md#includes)*

*Inherited from Uint8Array.includes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:54*

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | `number` |  The element to search for. |
| `Optional` fromIndex | `number` |  The position in this array at which to begin searching for searchElement. |

**Returns:** `boolean`

___
<a id="indexof"></a>

###  indexOf

▸ **indexOf**(searchElement: *`number`*, fromIndex?: *`number`*): `number`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[indexOf](../interfaces/_plugnet.ihash.md#indexof)*

*Inherited from Uint8Array.indexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2040*

Returns the index of the first occurrence of a value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | `number` |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** `number`

___
<a id="join"></a>

###  join

▸ **join**(separator?: *`string`*): `string`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[join](../interfaces/_plugnet.ihash.md#join)*

*Inherited from Uint8Array.join*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2047*

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

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[keys](../interfaces/_plugnet.ihash.md#keys)*

*Inherited from Uint8Array.keys*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:275*

Returns an list of keys in the array

**Returns:** `IterableIterator`<`number`>

___
<a id="lastindexof"></a>

###  lastIndexOf

▸ **lastIndexOf**(searchElement: *`number`*, fromIndex?: *`number`*): `number`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[lastIndexOf](../interfaces/_plugnet.ihash.md#lastindexof)*

*Inherited from Uint8Array.lastIndexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2055*

Returns the index of the last occurrence of a value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | `number` |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** `number`

___
<a id="map"></a>

###  map

▸ **map**(callbackfn: *`function`*, thisArg?: *`any`*): `Uint8Array`

*Inherited from Uint8Array.map*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2070*

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `Uint8Array`

___
<a id="reduce"></a>

###  reduce

▸ **reduce**(callbackfn: *`function`*): `number`

▸ **reduce**(callbackfn: *`function`*, initialValue: *`number`*): `number`

▸ **reduce**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Uint8Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2082*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** `number`

*Inherited from Uint8Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2083*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | `number` |

**Returns:** `number`

*Inherited from Uint8Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2095*

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

▸ **reduceRight**(callbackfn: *`function`*): `number`

▸ **reduceRight**(callbackfn: *`function`*, initialValue: *`number`*): `number`

▸ **reduceRight**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Uint8Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2107*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** `number`

*Inherited from Uint8Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2108*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | `number` |

**Returns:** `number`

*Inherited from Uint8Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2120*

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

▸ **reverse**(): `Uint8Array`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[reverse](../interfaces/_plugnet.ihash.md#reverse)*

*Inherited from Uint8Array.reverse*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2125*

Reverses the elements in an Array.

**Returns:** `Uint8Array`

___
<a id="set"></a>

###  set

▸ **set**(array: *`ArrayLike`<`number`>*, offset?: *`number`*): `void`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[set](../interfaces/_plugnet.ihash.md#set)*

*Inherited from Uint8Array.set*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2132*

Sets a value or an array of values.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| array | `ArrayLike`<`number`> |  A typed or untyped array of values to set. |
| `Optional` offset | `number` |  The index in the current array at which the values are to be written. |

**Returns:** `void`

___
<a id="slice"></a>

###  slice

▸ **slice**(start?: *`number`*, end?: *`number`*): `Uint8Array`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[slice](../interfaces/_plugnet.ihash.md#slice)*

*Inherited from Uint8Array.slice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2139*

Returns a section of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `number` |  The beginning of the specified portion of the array. |
| `Optional` end | `number` |  The end of the specified portion of the array. |

**Returns:** `Uint8Array`

___
<a id="some"></a>

###  some

▸ **some**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Uint8Array.some*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2149*

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

*Inherited from Uint8Array.sort*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2156*

Sorts an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` compareFn | `function` |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

**Returns:** `this`

___
<a id="subarray"></a>

###  subarray

▸ **subarray**(begin: *`number`*, end?: *`number`*): `Uint8Array`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[subarray](../interfaces/_plugnet.ihash.md#subarray)*

*Inherited from [U8a](_plugnet.u8a.md).[subarray](_plugnet.u8a.md#subarray)*

*Overrides Uint8Array.subarray*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:35*

*__description__*: Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| begin | `number` |  The position to start at |
| `Optional` end | `number` |  The position to end at |

**Returns:** `Uint8Array`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[toHex](../interfaces/_plugnet.ihash.md#tohex)*

*Inherited from [U8a](_plugnet.u8a.md).[toHex](_plugnet.u8a.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:39*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[toJSON](../interfaces/_plugnet.ihash.md#tojson)*

*Inherited from [U8a](_plugnet.u8a.md).[toJSON](_plugnet.u8a.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:43*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tolocalestring"></a>

###  toLocaleString

▸ **toLocaleString**(): `string`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[toLocaleString](../interfaces/_plugnet.ihash.md#tolocalestring)*

*Inherited from Uint8Array.toLocaleString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2169*

Converts a number to a string by using the current locale.

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[toString](../interfaces/_plugnet.ihash.md#tostring)*

*Inherited from [U8a](_plugnet.u8a.md).[toString](_plugnet.u8a.md#tostring)*

*Overrides Uint8Array.toString*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:47*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[toU8a](../interfaces/_plugnet.ihash.md#tou8a)*

*Inherited from [U8a](_plugnet.u8a.md).[toU8a](_plugnet.u8a.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/U8a.d.ts:52*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<`number`>

*Implementation of [IHash](../interfaces/_plugnet.ihash.md).[values](../interfaces/_plugnet.ihash.md#values)*

*Inherited from Uint8Array.values*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:279*

Returns an list of values in the array

**Returns:** `IterableIterator`<`number`>

___

