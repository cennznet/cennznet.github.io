[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [CodecArgArray](../interfaces/_plugnet.codecargarray.md)

# Interface: CodecArgArray

## Hierarchy

 `Array`<[CodecArg](../modules/_plugnet.md#codecarg)>

**↳ CodecArgArray**

## Indexable

\[n: `number`\]:&nbsp;[CodecArg](../modules/_plugnet.md#codecarg)
## Index

### Properties

* [Array](_plugnet.codecargarray.md#array)
* [length](_plugnet.codecargarray.md#length)

### Methods

* [__@iterator](_plugnet.codecargarray.md#___iterator)
* [__@unscopables](_plugnet.codecargarray.md#___unscopables)
* [concat](_plugnet.codecargarray.md#concat)
* [copyWithin](_plugnet.codecargarray.md#copywithin)
* [entries](_plugnet.codecargarray.md#entries)
* [every](_plugnet.codecargarray.md#every)
* [fill](_plugnet.codecargarray.md#fill)
* [filter](_plugnet.codecargarray.md#filter)
* [find](_plugnet.codecargarray.md#find)
* [findIndex](_plugnet.codecargarray.md#findindex)
* [forEach](_plugnet.codecargarray.md#foreach)
* [includes](_plugnet.codecargarray.md#includes)
* [indexOf](_plugnet.codecargarray.md#indexof)
* [join](_plugnet.codecargarray.md#join)
* [keys](_plugnet.codecargarray.md#keys)
* [lastIndexOf](_plugnet.codecargarray.md#lastindexof)
* [map](_plugnet.codecargarray.md#map)
* [pop](_plugnet.codecargarray.md#pop)
* [push](_plugnet.codecargarray.md#push)
* [reduce](_plugnet.codecargarray.md#reduce)
* [reduceRight](_plugnet.codecargarray.md#reduceright)
* [reverse](_plugnet.codecargarray.md#reverse)
* [shift](_plugnet.codecargarray.md#shift)
* [slice](_plugnet.codecargarray.md#slice)
* [some](_plugnet.codecargarray.md#some)
* [sort](_plugnet.codecargarray.md#sort)
* [splice](_plugnet.codecargarray.md#splice)
* [toLocaleString](_plugnet.codecargarray.md#tolocalestring)
* [toString](_plugnet.codecargarray.md#tostring)
* [unshift](_plugnet.codecargarray.md#unshift)
* [values](_plugnet.codecargarray.md#values)

---

## Properties

<a id="array"></a>

###  Array

**● Array**: *`ArrayConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1358*

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Inherited from Array.length*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1199*

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<[CodecArg](../modules/_plugnet.md#codecarg)>

*Inherited from Array.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:52*

Iterator

**Returns:** `IterableIterator`<[CodecArg](../modules/_plugnet.md#codecarg)>

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

▸ **concat**(...items: *`ConcatArray`<[CodecArg](../modules/_plugnet.md#codecarg)>[]*): [CodecArg](../modules/_plugnet.md#codecarg)[]

▸ **concat**(...items: *(`T` \| `ConcatArray`<`T`>)[]*): [CodecArg](../modules/_plugnet.md#codecarg)[]

*Inherited from Array.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1221*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | `ConcatArray`<[CodecArg](../modules/_plugnet.md#codecarg)>[] |  Additional items to add to the end of array1. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)[]

*Inherited from Array.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1226*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | (`T` \| `ConcatArray`<`T`>)[] |  Additional items to add to the end of array1. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)[]

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

▸ **entries**(): `IterableIterator`<[`number`, [CodecArg](../modules/_plugnet.md#codecarg)]>

*Inherited from Array.entries*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:57*

Returns an iterable of key, value pairs for every entry in the array

**Returns:** `IterableIterator`<[`number`, [CodecArg](../modules/_plugnet.md#codecarg)]>

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

▸ **fill**(value: *[CodecArg](../modules/_plugnet.md#codecarg)*, start?: *`number`*, end?: *`number`*): `this`

*Inherited from Array.fill*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:53*

Returns the this object after filling the section identified by start and end with value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | [CodecArg](../modules/_plugnet.md#codecarg) |  value to fill array section with |
| `Optional` start | `number` |  index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `Optional` end | `number` |  index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** `this`

___
<a id="filter"></a>

###  filter

▸ **filter**<`S`>(callbackfn: *`function`*, thisArg?: *`any`*): `S`[]

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): [CodecArg](../modules/_plugnet.md#codecarg)[]

*Inherited from Array.filter*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1310*

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

#### S :  [CodecArg](../modules/_plugnet.md#codecarg)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `S`[]

*Inherited from Array.filter*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1316*

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)[]

___
<a id="find"></a>

###  find

▸ **find**<`S`>(predicate: *`function`*, thisArg?: *`any`*): `S` \| `undefined`

▸ **find**(predicate: *`function`*, thisArg?: *`any`*): [CodecArg](../modules/_plugnet.md#codecarg) \| `undefined`

*Inherited from Array.find*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:31*

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

**Type parameters:**

#### S :  [CodecArg](../modules/_plugnet.md#codecarg)
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

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg) \| `undefined`

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

▸ **includes**(searchElement: *[CodecArg](../modules/_plugnet.md#codecarg)*, fromIndex?: *`number`*): `boolean`

*Inherited from Array.includes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:27*

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [CodecArg](../modules/_plugnet.md#codecarg) |  The element to search for. |
| `Optional` fromIndex | `number` |  The position in this array at which to begin searching for searchElement. |

**Returns:** `boolean`

___
<a id="indexof"></a>

###  indexOf

▸ **indexOf**(searchElement: *[CodecArg](../modules/_plugnet.md#codecarg)*, fromIndex?: *`number`*): `number`

*Inherited from Array.indexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1274*

Returns the index of the first occurrence of a value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [CodecArg](../modules/_plugnet.md#codecarg) |  The value to locate in the array. |
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

▸ **lastIndexOf**(searchElement: *[CodecArg](../modules/_plugnet.md#codecarg)*, fromIndex?: *`number`*): `number`

*Inherited from Array.lastIndexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1280*

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [CodecArg](../modules/_plugnet.md#codecarg) |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** `number`

___
<a id="map"></a>

###  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `U`[]

*Inherited from Array.map*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1304*

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `U`[]

___
<a id="pop"></a>

###  pop

▸ **pop**(): [CodecArg](../modules/_plugnet.md#codecarg) \| `undefined`

*Inherited from Array.pop*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1211*

Removes the last element from an array and returns it.

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg) \| `undefined`

___
<a id="push"></a>

###  push

▸ **push**(...items: *[CodecArg](../modules/_plugnet.md#codecarg)[]*): `number`

*Inherited from Array.push*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1216*

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [CodecArg](../modules/_plugnet.md#codecarg)[] |  New elements of the Array. |

**Returns:** `number`

___
<a id="reduce"></a>

###  reduce

▸ **reduce**(callbackfn: *`function`*): [CodecArg](../modules/_plugnet.md#codecarg)

▸ **reduce**(callbackfn: *`function`*, initialValue: *[CodecArg](../modules/_plugnet.md#codecarg)*): [CodecArg](../modules/_plugnet.md#codecarg)

▸ **reduce**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1322*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1323*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [CodecArg](../modules/_plugnet.md#codecarg) |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)

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

▸ **reduceRight**(callbackfn: *`function`*): [CodecArg](../modules/_plugnet.md#codecarg)

▸ **reduceRight**(callbackfn: *`function`*, initialValue: *[CodecArg](../modules/_plugnet.md#codecarg)*): [CodecArg](../modules/_plugnet.md#codecarg)

▸ **reduceRight**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1335*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1336*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [CodecArg](../modules/_plugnet.md#codecarg) |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)

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

▸ **reverse**(): [CodecArg](../modules/_plugnet.md#codecarg)[]

*Inherited from Array.reverse*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1235*

Reverses the elements in an Array.

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)[]

___
<a id="shift"></a>

###  shift

▸ **shift**(): [CodecArg](../modules/_plugnet.md#codecarg) \| `undefined`

*Inherited from Array.shift*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1239*

Removes the first element from an array and returns it.

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg) \| `undefined`

___
<a id="slice"></a>

###  slice

▸ **slice**(start?: *`number`*, end?: *`number`*): [CodecArg](../modules/_plugnet.md#codecarg)[]

*Inherited from Array.slice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1245*

Returns a section of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `number` |  The beginning of the specified portion of the array. |
| `Optional` end | `number` |  The end of the specified portion of the array. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)[]

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

▸ **splice**(start: *`number`*, deleteCount?: *`number`*): [CodecArg](../modules/_plugnet.md#codecarg)[]

▸ **splice**(start: *`number`*, deleteCount: *`number`*, ...items: *[CodecArg](../modules/_plugnet.md#codecarg)[]*): [CodecArg](../modules/_plugnet.md#codecarg)[]

*Inherited from Array.splice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1256*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| `Optional` deleteCount | `number` |  The number of elements to remove. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)[]

*Inherited from Array.splice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1263*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number` |  The number of elements to remove. |
| `Rest` items | [CodecArg](../modules/_plugnet.md#codecarg)[] |  Elements to insert into the array in place of the deleted elements. |

**Returns:** [CodecArg](../modules/_plugnet.md#codecarg)[]

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

*Inherited from Array.toString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1203*

Returns a string representation of an array.

**Returns:** `string`

___
<a id="unshift"></a>

###  unshift

▸ **unshift**(...items: *[CodecArg](../modules/_plugnet.md#codecarg)[]*): `number`

*Inherited from Array.unshift*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1268*

Inserts new elements at the start of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [CodecArg](../modules/_plugnet.md#codecarg)[] |  Elements to insert at the start of the Array. |

**Returns:** `number`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<[CodecArg](../modules/_plugnet.md#codecarg)>

*Inherited from Array.values*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:67*

Returns an iterable of values in the array

**Returns:** `IterableIterator`<[CodecArg](../modules/_plugnet.md#codecarg)>

___

