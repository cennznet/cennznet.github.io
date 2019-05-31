[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ExtError](../classes/_plugnet.exterror.md)

# Class: ExtError

*__name__*: ExtError

*__summary__*: Extension to the basic JS Error.

*__description__*: The built-in JavaScript Error class is extended by adding a code to allow for Error categorization. In addition to the normal `stack`, `message`, the numeric `code` and `data` (any types) parameters are available on the object.

*__example__*:   

```javascript
const { ExtError } from '@plugnet/util');

throw new ExtError('some message', ExtError.CODES.METHOD_NOT_FOUND); // => error.code = -32601
```

## Hierarchy

 `Error`

**↳ ExtError**

## Implements

* [ExtErrorInterface](../interfaces/_plugnet.exterrorinterface.md)

## Index

### Constructors

* [constructor](_plugnet.exterror.md#constructor)

### Properties

* [code](_plugnet.exterror.md#code)
* [data](_plugnet.exterror.md#data)
* [message](_plugnet.exterror.md#message)
* [name](_plugnet.exterror.md#name)
* [stack](_plugnet.exterror.md#stack)
* [CODES](_plugnet.exterror.md#codes)
* [Error](_plugnet.exterror.md#error)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtError**(message?: *`string`*, code?: *`number`*, data?: *`any`*): [ExtError](_plugnet.exterror.md)

*Defined in node_modules/@plugnet/util/ext/error.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` code | `number` |
| `Optional` data | `any` |

**Returns:** [ExtError](_plugnet.exterror.md)

___

## Properties

<a id="code"></a>

###  code

**● code**: *`number`*

*Implementation of [ExtErrorInterface](../interfaces/_plugnet.exterrorinterface.md).[code](../interfaces/_plugnet.exterrorinterface.md#code)*

*Defined in node_modules/@plugnet/util/ext/error.d.ts:17*

___
<a id="data"></a>

###  data

**● data**: *`any`*

*Implementation of [ExtErrorInterface](../interfaces/_plugnet.exterrorinterface.md).[data](../interfaces/_plugnet.exterrorinterface.md#data)*

*Defined in node_modules/@plugnet/util/ext/error.d.ts:18*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Implementation of [ExtErrorInterface](../interfaces/_plugnet.exterrorinterface.md).[message](../interfaces/_plugnet.exterrorinterface.md#message)*

*Overrides Error.message*

*Defined in node_modules/@plugnet/util/ext/error.d.ts:19*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Overrides Error.name*

*Defined in node_modules/@plugnet/util/ext/error.d.ts:20*

___
<a id="stack"></a>

###  stack

**● stack**: *`string`*

*Implementation of [ExtErrorInterface](../interfaces/_plugnet.exterrorinterface.md).[stack](../interfaces/_plugnet.exterrorinterface.md#stack)*

*Overrides Error.stack*

*Defined in node_modules/@plugnet/util/ext/error.d.ts:21*

___
<a id="codes"></a>

### `<Static>` CODES

**● CODES**: *`object`*

*Defined in node_modules/@plugnet/util/ext/error.d.ts:23*

#### Type declaration

 ASSERT: `number`

 INVALID_JSONRPC: `number`

 METHOD_NOT_FOUND: `number`

 UNKNOWN: `number`

___
<a id="error"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974*

___

