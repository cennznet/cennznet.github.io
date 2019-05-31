[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [PlainType](../classes/_plugnet.plaintype.md)

# Class: PlainType

## Hierarchy

↳  [Type](_plugnet.type.md)

**↳ PlainType**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Indexable

\[index: `number`\]:&nbsp;`string`
## Index

### Constructors

* [constructor](_plugnet.plaintype.md#constructor)

### Properties

* [encodedLength](_plugnet.plaintype.md#encodedlength)
* [isEmpty](_plugnet.plaintype.md#isempty)
* [length](_plugnet.plaintype.md#length)

### Methods

* [__@iterator](_plugnet.plaintype.md#___iterator)
* [anchor](_plugnet.plaintype.md#anchor)
* [big](_plugnet.plaintype.md#big)
* [blink](_plugnet.plaintype.md#blink)
* [bold](_plugnet.plaintype.md#bold)
* [charAt](_plugnet.plaintype.md#charat)
* [charCodeAt](_plugnet.plaintype.md#charcodeat)
* [codePointAt](_plugnet.plaintype.md#codepointat)
* [concat](_plugnet.plaintype.md#concat)
* [endsWith](_plugnet.plaintype.md#endswith)
* [eq](_plugnet.plaintype.md#eq)
* [fixed](_plugnet.plaintype.md#fixed)
* [fontcolor](_plugnet.plaintype.md#fontcolor)
* [fontsize](_plugnet.plaintype.md#fontsize)
* [includes](_plugnet.plaintype.md#includes)
* [indexOf](_plugnet.plaintype.md#indexof)
* [italics](_plugnet.plaintype.md#italics)
* [lastIndexOf](_plugnet.plaintype.md#lastindexof)
* [link](_plugnet.plaintype.md#link)
* [localeCompare](_plugnet.plaintype.md#localecompare)
* [match](_plugnet.plaintype.md#match)
* [normalize](_plugnet.plaintype.md#normalize)
* [padEnd](_plugnet.plaintype.md#padend)
* [padStart](_plugnet.plaintype.md#padstart)
* [repeat](_plugnet.plaintype.md#repeat)
* [replace](_plugnet.plaintype.md#replace)
* [search](_plugnet.plaintype.md#search)
* [slice](_plugnet.plaintype.md#slice)
* [small](_plugnet.plaintype.md#small)
* [split](_plugnet.plaintype.md#split)
* [startsWith](_plugnet.plaintype.md#startswith)
* [strike](_plugnet.plaintype.md#strike)
* [sub](_plugnet.plaintype.md#sub)
* [substr](_plugnet.plaintype.md#substr)
* [substring](_plugnet.plaintype.md#substring)
* [sup](_plugnet.plaintype.md#sup)
* [toHex](_plugnet.plaintype.md#tohex)
* [toJSON](_plugnet.plaintype.md#tojson)
* [toLocaleLowerCase](_plugnet.plaintype.md#tolocalelowercase)
* [toLocaleUpperCase](_plugnet.plaintype.md#tolocaleuppercase)
* [toLowerCase](_plugnet.plaintype.md#tolowercase)
* [toString](_plugnet.plaintype.md#tostring)
* [toU8a](_plugnet.plaintype.md#tou8a)
* [toUpperCase](_plugnet.plaintype.md#touppercase)
* [trim](_plugnet.plaintype.md#trim)
* [trimLeft](_plugnet.plaintype.md#trimleft)
* [trimRight](_plugnet.plaintype.md#trimright)
* [valueOf](_plugnet.plaintype.md#valueof)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PlainType**(value?: *[Text](_plugnet.text.md) \| `Uint8Array` \| `string`*): [PlainType](_plugnet.plaintype.md)

*Inherited from [Type](_plugnet.type.md).[constructor](_plugnet.type.md#constructor)*

*Overrides [Text](_plugnet.text.md).[constructor](_plugnet.text.md#constructor)*

*Defined in node_modules/@plugnet/types/primitive/Type.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Text](_plugnet.text.md) \| `Uint8Array` \| `string` |

**Returns:** [PlainType](_plugnet.plaintype.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Type](_plugnet.type.md).[encodedLength](_plugnet.type.md#encodedlength)*

*Overrides [Text](_plugnet.text.md).[encodedLength](_plugnet.text.md#encodedlength)*

*Defined in node_modules/@plugnet/types/primitive/Type.d.ts:16*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Text](_plugnet.text.md).[isEmpty](_plugnet.text.md#isempty)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:22*

*__description__*: Checks if the value is an empty value

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Inherited from [Text](_plugnet.text.md).[length](_plugnet.text.md#length)*

*Overrides String.length*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:26*

*__description__*: The length of the value

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`string`>

*Inherited from String.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:235*

Iterator

**Returns:** `IterableIterator`<`string`>

___
<a id="anchor"></a>

###  anchor

▸ **anchor**(name: *`string`*): `string`

*Inherited from String.anchor*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:454*

Returns an HTML anchor element and sets the name attribute to the text value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |   |

**Returns:** `string`

___
<a id="big"></a>

###  big

▸ **big**(): `string`

*Inherited from String.big*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:457*

Returns a HTML element

**Returns:** `string`

___
<a id="blink"></a>

###  blink

▸ **blink**(): `string`

*Inherited from String.blink*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:460*

Returns a HTML element

**Returns:** `string`

___
<a id="bold"></a>

###  bold

▸ **bold**(): `string`

*Inherited from String.bold*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:463*

Returns a **HTML element**

**Returns:** `string`

___
<a id="charat"></a>

###  charAt

▸ **charAt**(pos: *`number`*): `string`

*Inherited from String.charAt*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:392*

Returns the character at the specified index.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pos | `number` |  The zero-based index of the desired character. |

**Returns:** `string`

___
<a id="charcodeat"></a>

###  charCodeAt

▸ **charCodeAt**(index: *`number`*): `number`

*Inherited from String.charCodeAt*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:398*

Returns the Unicode value of the character at the specified location.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

**Returns:** `number`

___
<a id="codepointat"></a>

###  codePointAt

▸ **codePointAt**(pos: *`number`*): `number` \| `undefined`

*Inherited from String.codePointAt*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:402*

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String. If there is no element at that position, the result is undefined. If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

**Parameters:**

| Name | Type |
| ------ | ------ |
| pos | `number` |

**Returns:** `number` \| `undefined`

___
<a id="concat"></a>

###  concat

▸ **concat**(...strings: *`string`[]*): `string`

*Inherited from String.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:404*

Returns a string that contains the concatenation of two or more strings.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` strings | `string`[] |  The strings to append to the end of the string. |

**Returns:** `string`

___
<a id="endswith"></a>

###  endsWith

▸ **endsWith**(searchString: *`string`*, endPosition?: *`number`*): `boolean`

*Inherited from String.endsWith*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:418*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

**Parameters:**

| Name | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` endPosition | `number` |

**Returns:** `boolean`

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Text](_plugnet.text.md).[eq](_plugnet.text.md#eq)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:30*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="fixed"></a>

###  fixed

▸ **fixed**(): `string`

*Inherited from String.fixed*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:466*

Returns a HTML element

**Returns:** `string`

___
<a id="fontcolor"></a>

###  fontcolor

▸ **fontcolor**(color: *`string`*): `string`

*Inherited from String.fontcolor*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:469*

Returns a HTML element and sets the color attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `string`

___
<a id="fontsize"></a>

###  fontsize

▸ **fontsize**(size: *`number`*): `string`

▸ **fontsize**(size: *`string`*): `string`

*Inherited from String.fontsize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:472*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `string`

*Inherited from String.fontsize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:475*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `string` |

**Returns:** `string`

___
<a id="includes"></a>

###  includes

▸ **includes**(searchString: *`string`*, position?: *`number`*): `boolean`

*Inherited from String.includes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:411*

Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  search string |
| `Optional` position | `number` |  If position is undefined, 0 is assumed, so as to search all of the String. |

**Returns:** `boolean`

___
<a id="indexof"></a>

###  indexOf

▸ **indexOf**(searchString: *`string`*, position?: *`number`*): `number`

*Inherited from String.indexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:411*

Returns the position of the first occurrence of a substring.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for in the string |
| `Optional` position | `number` |  The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

**Returns:** `number`

___
<a id="italics"></a>

###  italics

▸ **italics**(): `string`

*Inherited from String.italics*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:478*

Returns an _HTML element_

**Returns:** `string`

___
<a id="lastindexof"></a>

###  lastIndexOf

▸ **lastIndexOf**(searchString: *`string`*, position?: *`number`*): `number`

*Inherited from String.lastIndexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:418*

Returns the last occurrence of a substring in the string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for. |
| `Optional` position | `number` |  The index at which to begin searching. If omitted, the search begins at the end of the string. |

**Returns:** `number`

___
<a id="link"></a>

###  link

▸ **link**(url: *`string`*): `string`

*Inherited from String.link*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:481*

Returns an HTML element and sets the href attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `string`

___
<a id="localecompare"></a>

###  localeCompare

▸ **localeCompare**(that: *`string`*): `number`

*Inherited from String.localeCompare*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:424*

Determines whether two strings are equivalent in the current locale.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| that | `string` |  String to compare to target string |

**Returns:** `number`

___
<a id="match"></a>

###  match

▸ **match**(regexp: *`string` \| `RegExp`*): `RegExpMatchArray` \| `null`

*Inherited from String.match*

*Overrides String.match*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:430*

Matches a string with a regular expression, and returns an array containing the results of that search.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| regexp | `string` \| `RegExp` |  A variable name or string literal containing the regular expression pattern and flags. |

**Returns:** `RegExpMatchArray` \| `null`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(form: *"NFC" \| "NFD" \| "NFKC" \| "NFKD"*): `string`

▸ **normalize**(form?: *`string`*): `string`

*Inherited from String.normalize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:426*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| form | "NFC" \| "NFD" \| "NFKC" \| "NFKD" |  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

*Inherited from String.normalize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:434*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` form | `string` |  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

___
<a id="padend"></a>

###  padEnd

▸ **padEnd**(maxLength: *`number`*, fillString?: *`string`*): `string`

*Inherited from String.padEnd*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:46*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString | `string` |  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="padstart"></a>

###  padStart

▸ **padStart**(maxLength: *`number`*, fillString?: *`string`*): `string`

*Inherited from String.padStart*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:33*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString | `string` |  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(count: *`number`*): `string`

*Inherited from String.repeat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:441*

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  number of copies to append |

**Returns:** `string`

___
<a id="replace"></a>

###  replace

▸ **replace**(searchValue: *`string` \| `RegExp`*, replaceValue: *`string`*): `string`

▸ **replace**(searchValue: *`string` \| `RegExp`*, replacer: *`function`*): `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:437*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchValue | `string` \| `RegExp` |  A string to search for. |
| replaceValue | `string` |  A string containing the text to replace for every successful match of searchValue in this string. |

**Returns:** `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:444*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchValue | `string` \| `RegExp` |  A string to search for. |
| replacer | `function` |  A function that returns the replacement text. |

**Returns:** `string`

___
<a id="search"></a>

###  search

▸ **search**(regexp: *`string` \| `RegExp`*): `number`

*Inherited from String.search*

*Overrides String.search*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:450*

Finds the first substring match in a regular expression search.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| regexp | `string` \| `RegExp` |  The regular expression pattern and applicable flags. |

**Returns:** `number`

___
<a id="slice"></a>

###  slice

▸ **slice**(start?: *`number`*, end?: *`number`*): `string`

*Inherited from String.slice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:458*

Returns a section of a string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `number` |  The index to the beginning of the specified portion of stringObj. |
| `Optional` end | `number` |  The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

**Returns:** `string`

___
<a id="small"></a>

###  small

▸ **small**(): `string`

*Inherited from String.small*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:484*

Returns a HTML element

**Returns:** `string`

___
<a id="split"></a>

###  split

▸ **split**(separator: *`string` \| `RegExp`*, limit?: *`number`*): `string`[]

*Inherited from String.split*

*Overrides String.split*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:465*

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| separator | `string` \| `RegExp` |  A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `Optional` limit | `number` |  A value used to limit the number of elements returned in the array. |

**Returns:** `string`[]

___
<a id="startswith"></a>

###  startsWith

▸ **startsWith**(searchString: *`string`*, position?: *`number`*): `boolean`

*Inherited from String.startsWith*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:448*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.

**Parameters:**

| Name | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` position | `number` |

**Returns:** `boolean`

___
<a id="strike"></a>

###  strike

▸ **strike**(): `string`

*Inherited from String.strike*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:487*

Returns a HTML element

**Returns:** `string`

___
<a id="sub"></a>

###  sub

▸ **sub**(): `string`

*Inherited from String.sub*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:490*

Returns a HTML element

**Returns:** `string`

___
<a id="substr"></a>

###  substr

▸ **substr**(from: *`number`*, length?: *`number`*): `string`

*Inherited from String.substr*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:499*

Gets a substring beginning at the specified location and having the specified length.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| from | `number` |  The starting position of the desired substring. The index of the first character in the string is zero. |
| `Optional` length | `number` |  The number of characters to include in the returned substring. |

**Returns:** `string`

___
<a id="substring"></a>

###  substring

▸ **substring**(start: *`number`*, end?: *`number`*): `string`

*Inherited from String.substring*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:473*

Returns the substring at the specified location within a String object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based index number indicating the beginning of the substring. |
| `Optional` end | `number` |  Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

**Returns:** `string`

___
<a id="sup"></a>

###  sup

▸ **sup**(): `string`

*Inherited from String.sup*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:493*

Returns a HTML element

**Returns:** `string`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Inherited from [Text](_plugnet.text.md).[toHex](_plugnet.text.md#tohex)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:34*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Text](_plugnet.text.md).[toJSON](_plugnet.text.md#tojson)*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:38*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tolocalelowercase"></a>

###  toLocaleLowerCase

▸ **toLocaleLowerCase**(): `string`

*Inherited from String.toLocaleLowerCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:479*

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolocaleuppercase"></a>

###  toLocaleUpperCase

▸ **toLocaleUpperCase**(): `string`

*Inherited from String.toLocaleUpperCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:485*

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolowercase"></a>

###  toLowerCase

▸ **toLowerCase**(): `string`

*Inherited from String.toLowerCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:476*

Converts all the alphabetic characters in a string to lowercase.

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Text](_plugnet.text.md).[toString](_plugnet.text.md#tostring)*

*Overrides String.toString*

*Defined in node_modules/@plugnet/types/primitive/Text.d.ts:42*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Type](_plugnet.type.md).[toU8a](_plugnet.type.md#tou8a)*

*Overrides [Text](_plugnet.text.md).[toU8a](_plugnet.text.md#tou8a)*

*Defined in node_modules/@plugnet/types/primitive/Type.d.ts:21*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="touppercase"></a>

###  toUpperCase

▸ **toUpperCase**(): `string`

*Inherited from String.toUpperCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:482*

Converts all the alphabetic characters in a string to uppercase.

**Returns:** `string`

___
<a id="trim"></a>

###  trim

▸ **trim**(): `string`

*Inherited from String.trim*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:488*

Removes the leading and trailing white space and line terminator characters from a string.

**Returns:** `string`

___
<a id="trimleft"></a>

###  trimLeft

▸ **trimLeft**(): `string`

*Inherited from String.trimLeft*

*Defined in node_modules/@types/node/globals.d.ts:152*

Removes whitespace from the left end of a string.

**Returns:** `string`

___
<a id="trimright"></a>

###  trimRight

▸ **trimRight**(): `string`

*Inherited from String.trimRight*

*Defined in node_modules/@types/node/globals.d.ts:154*

Removes whitespace from the right end of a string.

**Returns:** `string`

___
<a id="valueof"></a>

###  valueOf

▸ **valueOf**(): `string`

*Inherited from String.valueOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:502*

Returns the primitive value of the specified object.

**Returns:** `string`

___

