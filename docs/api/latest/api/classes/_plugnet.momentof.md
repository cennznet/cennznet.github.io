[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [MomentOf](../classes/_plugnet.momentof.md)

# Class: MomentOf

*__name__*: MomentOf

*__description__*: The Substrate MomentOf representation as a [Moment](_plugnet.moment.md).

## Hierarchy

↳  [Moment](_plugnet.moment.md)

**↳ MomentOf**

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.momentof.md#constructor)

### Properties

* [encodedLength](_plugnet.momentof.md#encodedlength)
* [isEmpty](_plugnet.momentof.md#isempty)

### Methods

* [__@toPrimitive](_plugnet.momentof.md#___toprimitive)
* [bitLength](_plugnet.momentof.md#bitlength)
* [eq](_plugnet.momentof.md#eq)
* [getDate](_plugnet.momentof.md#getdate)
* [getDay](_plugnet.momentof.md#getday)
* [getFullYear](_plugnet.momentof.md#getfullyear)
* [getHours](_plugnet.momentof.md#gethours)
* [getMilliseconds](_plugnet.momentof.md#getmilliseconds)
* [getMinutes](_plugnet.momentof.md#getminutes)
* [getMonth](_plugnet.momentof.md#getmonth)
* [getSeconds](_plugnet.momentof.md#getseconds)
* [getTime](_plugnet.momentof.md#gettime)
* [getTimezoneOffset](_plugnet.momentof.md#gettimezoneoffset)
* [getUTCDate](_plugnet.momentof.md#getutcdate)
* [getUTCDay](_plugnet.momentof.md#getutcday)
* [getUTCFullYear](_plugnet.momentof.md#getutcfullyear)
* [getUTCHours](_plugnet.momentof.md#getutchours)
* [getUTCMilliseconds](_plugnet.momentof.md#getutcmilliseconds)
* [getUTCMinutes](_plugnet.momentof.md#getutcminutes)
* [getUTCMonth](_plugnet.momentof.md#getutcmonth)
* [getUTCSeconds](_plugnet.momentof.md#getutcseconds)
* [setDate](_plugnet.momentof.md#setdate)
* [setFullYear](_plugnet.momentof.md#setfullyear)
* [setHours](_plugnet.momentof.md#sethours)
* [setMilliseconds](_plugnet.momentof.md#setmilliseconds)
* [setMinutes](_plugnet.momentof.md#setminutes)
* [setMonth](_plugnet.momentof.md#setmonth)
* [setSeconds](_plugnet.momentof.md#setseconds)
* [setTime](_plugnet.momentof.md#settime)
* [setUTCDate](_plugnet.momentof.md#setutcdate)
* [setUTCFullYear](_plugnet.momentof.md#setutcfullyear)
* [setUTCHours](_plugnet.momentof.md#setutchours)
* [setUTCMilliseconds](_plugnet.momentof.md#setutcmilliseconds)
* [setUTCMinutes](_plugnet.momentof.md#setutcminutes)
* [setUTCMonth](_plugnet.momentof.md#setutcmonth)
* [setUTCSeconds](_plugnet.momentof.md#setutcseconds)
* [toBn](_plugnet.momentof.md#tobn)
* [toDateString](_plugnet.momentof.md#todatestring)
* [toHex](_plugnet.momentof.md#tohex)
* [toISOString](_plugnet.momentof.md#toisostring)
* [toJSON](_plugnet.momentof.md#tojson)
* [toLocaleDateString](_plugnet.momentof.md#tolocaledatestring)
* [toLocaleString](_plugnet.momentof.md#tolocalestring)
* [toLocaleTimeString](_plugnet.momentof.md#tolocaletimestring)
* [toNumber](_plugnet.momentof.md#tonumber)
* [toString](_plugnet.momentof.md#tostring)
* [toTimeString](_plugnet.momentof.md#totimestring)
* [toU8a](_plugnet.momentof.md#tou8a)
* [toUTCString](_plugnet.momentof.md#toutcstring)
* [valueOf](_plugnet.momentof.md#valueof)
* [decodeMoment](_plugnet.momentof.md#decodemoment)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MomentOf**(value?: *[Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber)*): [MomentOf](_plugnet.momentof.md)

*Inherited from [Moment](_plugnet.moment.md).[constructor](_plugnet.moment.md#constructor)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [MomentOf](_plugnet.momentof.md)

___

## Properties

<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Inherited from [Moment](_plugnet.moment.md).[encodedLength](_plugnet.moment.md#encodedlength)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:21*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Inherited from [Moment](_plugnet.moment.md).[isEmpty](_plugnet.moment.md#isempty)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:25*

*__description__*: Checks if the value is an empty value

___

## Methods

<a id="___toprimitive"></a>

###  __@toPrimitive

▸ **__@toPrimitive**(hint: *"default"*): `string`

▸ **__@toPrimitive**(hint: *"string"*): `string`

▸ **__@toPrimitive**(hint: *"number"*): `number`

▸ **__@toPrimitive**(hint: *`string`*): `string` \| `number`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:109*

Converts a Date object to a string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| hint | "default" |

**Returns:** `string`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:113*

Converts a Date object to a string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| hint | "string" |

**Returns:** `string`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:117*

Converts a Date object to a number.

**Parameters:**

| Name | Type |
| ------ | ------ |
| hint | "number" |

**Returns:** `number`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:126*

Converts a Date object to a string or number.

*__throws__*: {TypeError} If 'hint' was given something other than "number", "string", or "default".

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hint | `string` |  The strings "number", "string", or "default" to specify what primitive to return. |

**Returns:** `string` \| `number`
A number if 'hint' was "number", a string if 'hint' was "string" or "default".

___
<a id="bitlength"></a>

###  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_plugnet.md#uintbitlength)

*Inherited from [Moment](_plugnet.moment.md).[bitLength](_plugnet.moment.md#bitlength)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:33*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_plugnet.md#uintbitlength)

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Inherited from [Moment](_plugnet.moment.md).[eq](_plugnet.moment.md#eq)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:29*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="getdate"></a>

###  getDate

▸ **getDate**(): `number`

*Inherited from Date.getDate*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:745*

Gets the day-of-the-month, using local time.

**Returns:** `number`

___
<a id="getday"></a>

###  getDay

▸ **getDay**(): `number`

*Inherited from Date.getDay*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:749*

Gets the day of the week, using local time.

**Returns:** `number`

___
<a id="getfullyear"></a>

###  getFullYear

▸ **getFullYear**(): `number`

*Inherited from Date.getFullYear*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:737*

Gets the year, using local time.

**Returns:** `number`

___
<a id="gethours"></a>

###  getHours

▸ **getHours**(): `number`

*Inherited from Date.getHours*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:753*

Gets the hours in a date, using local time.

**Returns:** `number`

___
<a id="getmilliseconds"></a>

###  getMilliseconds

▸ **getMilliseconds**(): `number`

*Inherited from Date.getMilliseconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:765*

Gets the milliseconds of a Date, using local time.

**Returns:** `number`

___
<a id="getminutes"></a>

###  getMinutes

▸ **getMinutes**(): `number`

*Inherited from Date.getMinutes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:757*

Gets the minutes of a Date object, using local time.

**Returns:** `number`

___
<a id="getmonth"></a>

###  getMonth

▸ **getMonth**(): `number`

*Inherited from Date.getMonth*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:741*

Gets the month, using local time.

**Returns:** `number`

___
<a id="getseconds"></a>

###  getSeconds

▸ **getSeconds**(): `number`

*Inherited from Date.getSeconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:761*

Gets the seconds of a Date object, using local time.

**Returns:** `number`

___
<a id="gettime"></a>

###  getTime

▸ **getTime**(): `number`

*Inherited from Date.getTime*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:735*

Gets the time value in milliseconds.

**Returns:** `number`

___
<a id="gettimezoneoffset"></a>

###  getTimezoneOffset

▸ **getTimezoneOffset**(): `number`

*Inherited from Date.getTimezoneOffset*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:769*

Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcdate"></a>

###  getUTCDate

▸ **getUTCDate**(): `number`

*Inherited from Date.getUTCDate*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:747*

Gets the day-of-the-month, using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcday"></a>

###  getUTCDay

▸ **getUTCDay**(): `number`

*Inherited from Date.getUTCDay*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:751*

Gets the day of the week using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcfullyear"></a>

###  getUTCFullYear

▸ **getUTCFullYear**(): `number`

*Inherited from Date.getUTCFullYear*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:739*

Gets the year using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutchours"></a>

###  getUTCHours

▸ **getUTCHours**(): `number`

*Inherited from Date.getUTCHours*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:755*

Gets the hours value in a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcmilliseconds"></a>

###  getUTCMilliseconds

▸ **getUTCMilliseconds**(): `number`

*Inherited from Date.getUTCMilliseconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:767*

Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcminutes"></a>

###  getUTCMinutes

▸ **getUTCMinutes**(): `number`

*Inherited from Date.getUTCMinutes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:759*

Gets the minutes of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcmonth"></a>

###  getUTCMonth

▸ **getUTCMonth**(): `number`

*Inherited from Date.getUTCMonth*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:743*

Gets the month of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcseconds"></a>

###  getUTCSeconds

▸ **getUTCSeconds**(): `number`

*Inherited from Date.getUTCSeconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:763*

Gets the seconds of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="setdate"></a>

###  setDate

▸ **setDate**(date: *`number`*): `number`

*Inherited from Date.setDate*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:832*

Sets the numeric day-of-the-month value of the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| date | `number` |  A numeric value equal to the day of the month. |

**Returns:** `number`

___
<a id="setfullyear"></a>

###  setFullYear

▸ **setFullYear**(year: *`number`*, month?: *`number`*, date?: *`number`*): `number`

*Inherited from Date.setFullYear*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:856*

Sets the year of the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  A numeric value for the year. |
| `Optional` month | `number` |  A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified. |
| `Optional` date | `number` |  A numeric value equal for the day of the month. |

**Returns:** `number`

___
<a id="sethours"></a>

###  setHours

▸ **setHours**(hours: *`number`*, min?: *`number`*, sec?: *`number`*, ms?: *`number`*): `number`

*Inherited from Date.setHours*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:819*

Sets the hour value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hours | `number` |  A numeric value equal to the hours value. |
| `Optional` min | `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setmilliseconds"></a>

###  setMilliseconds

▸ **setMilliseconds**(ms: *`number`*): `number`

*Inherited from Date.setMilliseconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:779*

Sets the milliseconds value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ms | `number` |  A numeric value equal to the millisecond value. |

**Returns:** `number`

___
<a id="setminutes"></a>

###  setMinutes

▸ **setMinutes**(min: *`number`*, sec?: *`number`*, ms?: *`number`*): `number`

*Inherited from Date.setMinutes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:804*

Sets the minutes value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| min | `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setmonth"></a>

###  setMonth

▸ **setMonth**(month: *`number`*, date?: *`number`*): `number`

*Inherited from Date.setMonth*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:843*

Sets the month value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| month | `number` |  A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
| `Optional` date | `number` |  A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used. |

**Returns:** `number`

___
<a id="setseconds"></a>

###  setSeconds

▸ **setSeconds**(sec: *`number`*, ms?: *`number`*): `number`

*Inherited from Date.setSeconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:791*

Sets the seconds value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="settime"></a>

###  setTime

▸ **setTime**(time: *`number`*): `number`

*Inherited from Date.setTime*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:774*

Sets the date and time value in the Date object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| time | `number` |  A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT. |

**Returns:** `number`

___
<a id="setutcdate"></a>

###  setUTCDate

▸ **setUTCDate**(date: *`number`*): `number`

*Inherited from Date.setUTCDate*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:837*

Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| date | `number` |  A numeric value equal to the day of the month. |

**Returns:** `number`

___
<a id="setutcfullyear"></a>

###  setUTCFullYear

▸ **setUTCFullYear**(year: *`number`*, month?: *`number`*, date?: *`number`*): `number`

*Inherited from Date.setUTCFullYear*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:863*

Sets the year value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  A numeric value equal to the year. |
| `Optional` month | `number` |  A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied. |
| `Optional` date | `number` |  A numeric value equal to the day of the month. |

**Returns:** `number`

___
<a id="setutchours"></a>

###  setUTCHours

▸ **setUTCHours**(hours: *`number`*, min?: *`number`*, sec?: *`number`*, ms?: *`number`*): `number`

*Inherited from Date.setUTCHours*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:827*

Sets the hours value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hours | `number` |  A numeric value equal to the hours value. |
| `Optional` min | `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setutcmilliseconds"></a>

###  setUTCMilliseconds

▸ **setUTCMilliseconds**(ms: *`number`*): `number`

*Inherited from Date.setUTCMilliseconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:784*

Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ms | `number` |  A numeric value equal to the millisecond value. |

**Returns:** `number`

___
<a id="setutcminutes"></a>

###  setUTCMinutes

▸ **setUTCMinutes**(min: *`number`*, sec?: *`number`*, ms?: *`number`*): `number`

*Inherited from Date.setUTCMinutes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:811*

Sets the minutes value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| min | `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setutcmonth"></a>

###  setUTCMonth

▸ **setUTCMonth**(month: *`number`*, date?: *`number`*): `number`

*Inherited from Date.setUTCMonth*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:849*

Sets the month value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| month | `number` |  A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
| `Optional` date | `number` |  A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used. |

**Returns:** `number`

___
<a id="setutcseconds"></a>

###  setUTCSeconds

▸ **setUTCSeconds**(sec: *`number`*, ms?: *`number`*): `number`

*Inherited from Date.setUTCSeconds*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:797*

Sets the seconds value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="tobn"></a>

###  toBn

▸ **toBn**(): `BN`

*Inherited from [Moment](_plugnet.moment.md).[toBn](_plugnet.moment.md#tobn)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:37*

*__description__*: Returns the BN representation of the timestamp

**Returns:** `BN`

___
<a id="todatestring"></a>

###  toDateString

▸ **toDateString**(): `string`

*Inherited from Date.toDateString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:723*

Returns a date as a string value.

**Returns:** `string`

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Inherited from [Moment](_plugnet.moment.md).[toHex](_plugnet.moment.md#tohex)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:41*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="toisostring"></a>

###  toISOString

▸ **toISOString**(): `string`

*Inherited from Date.toISOString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:867*

Returns a date as a string value in ISO format.

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Inherited from [Moment](_plugnet.moment.md).[toJSON](_plugnet.moment.md#tojson)*

*Overrides Date.toJSON*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:45*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tolocaledatestring"></a>

###  toLocaleDateString

▸ **toLocaleDateString**(): `string`

*Inherited from Date.toLocaleDateString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:729*

Returns a date as a string value appropriate to the host environment's current locale.

**Returns:** `string`

___
<a id="tolocalestring"></a>

###  toLocaleString

▸ **toLocaleString**(): `string`

*Inherited from Date.toLocaleString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:727*

Returns a value as a string value appropriate to the host environment's current locale.

**Returns:** `string`

___
<a id="tolocaletimestring"></a>

###  toLocaleTimeString

▸ **toLocaleTimeString**(): `string`

*Inherited from Date.toLocaleTimeString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:731*

Returns a time as a string value appropriate to the host environment's current locale.

**Returns:** `string`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Inherited from [Moment](_plugnet.moment.md).[toNumber](_plugnet.moment.md#tonumber)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:49*

*__description__*: Returns the number representation for the timestamp

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Inherited from [Moment](_plugnet.moment.md).[toString](_plugnet.moment.md#tostring)*

*Overrides Date.toString*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:53*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="totimestring"></a>

###  toTimeString

▸ **toTimeString**(): `string`

*Inherited from Date.toTimeString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:725*

Returns a time as a string value.

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Inherited from [Moment](_plugnet.moment.md).[toU8a](_plugnet.moment.md#tou8a)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:58*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="toutcstring"></a>

###  toUTCString

▸ **toUTCString**(): `string`

*Inherited from Date.toUTCString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:865*

Returns a date converted to a string using Universal Coordinated Time (UTC).

**Returns:** `string`

___
<a id="valueof"></a>

###  valueOf

▸ **valueOf**(): `number`

*Inherited from Date.valueOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:733*

Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

**Returns:** `number`

___
<a id="decodemoment"></a>

### `<Static>` decodeMoment

▸ **decodeMoment**(value: *[Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber)*): `Date`

*Inherited from [Moment](_plugnet.moment.md).[decodeMoment](_plugnet.moment.md#decodemoment)*

*Defined in node_modules/@plugnet/types/primitive/Moment.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [Moment](_plugnet.moment.md) \| `Date` \| [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** `Date`

___

