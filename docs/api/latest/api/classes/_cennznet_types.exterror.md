[@cennznet/api](../README.md) > [@cennznet/types](../modules/_cennznet_types.md) > [ExtError](../classes/_cennznet_types.exterror.md)

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

* [ExtErrorInterface](../interfaces/_cennznet_types.exterrorinterface.md)

## Index

### Constructors

* [constructor](_cennznet_types.exterror.md#constructor)

### Properties

* [code](_cennznet_types.exterror.md#code)
* [data](_cennznet_types.exterror.md#data)
* [message](_cennznet_types.exterror.md#message)
* [name](_cennznet_types.exterror.md#name)
* [stack](_cennznet_types.exterror.md#stack)
* [CODES](_cennznet_types.exterror.md#codes)
* [Error](_cennznet_types.exterror.md#error)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtError**(message?: *`string`*, code?: *`number`*, data?: *`any`*): [ExtError](_cennznet_types.exterror.md)

*Defined in packages/types/node_modules/@plugnet/util/ext/error.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` code | `number` |
| `Optional` data | `any` |

**Returns:** [ExtError](_cennznet_types.exterror.md)

___

## Properties

<a id="code"></a>

###  code

**● code**: *`number`*

*Implementation of [ExtErrorInterface](../interfaces/_cennznet_types.exterrorinterface.md).[code](../interfaces/_cennznet_types.exterrorinterface.md#code)*

*Defined in packages/types/node_modules/@plugnet/util/ext/error.d.ts:17*

___
<a id="data"></a>

###  data

**● data**: *`any`*

*Implementation of [ExtErrorInterface](../interfaces/_cennznet_types.exterrorinterface.md).[data](../interfaces/_cennznet_types.exterrorinterface.md#data)*

*Defined in packages/types/node_modules/@plugnet/util/ext/error.d.ts:18*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Implementation of [ExtErrorInterface](../interfaces/_cennznet_types.exterrorinterface.md).[message](../interfaces/_cennznet_types.exterrorinterface.md#message)*

*Overrides Error.message*

*Defined in packages/types/node_modules/@plugnet/util/ext/error.d.ts:19*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Overrides Error.name*

*Defined in packages/types/node_modules/@plugnet/util/ext/error.d.ts:20*

___
<a id="stack"></a>

###  stack

**● stack**: *`string`*

*Implementation of [ExtErrorInterface](../interfaces/_cennznet_types.exterrorinterface.md).[stack](../interfaces/_cennznet_types.exterrorinterface.md#stack)*

*Overrides Error.stack*

*Defined in packages/types/node_modules/@plugnet/util/ext/error.d.ts:21*

___
<a id="codes"></a>

### `<Static>` CODES

**● CODES**: *`object`*

*Defined in packages/types/node_modules/@plugnet/util/ext/error.d.ts:23*

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

