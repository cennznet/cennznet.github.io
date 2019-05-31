[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [TypeRegistry](../classes/_plugnet.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

**TypeRegistry**

## Index

### Properties

* [defaultRegistry](_plugnet.typeregistry.md#defaultregistry)

### Methods

* [get](_plugnet.typeregistry.md#get)
* [getOrThrow](_plugnet.typeregistry.md#getorthrow)
* [register](_plugnet.typeregistry.md#register)

---

## Properties

<a id="defaultregistry"></a>

### `<Static>` defaultRegistry

**● defaultRegistry**: *[TypeRegistry](_plugnet.typeregistry.md)*

*Defined in node_modules/@plugnet/types/codec/typeRegistry.d.ts:3*

___

## Methods

<a id="get"></a>

###  get

▸ **get**(name: *`string`*): [Constructor](../interfaces/_plugnet.constructor.md) \| `undefined`

*Defined in node_modules/@plugnet/types/codec/typeRegistry.d.ts:8*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md) \| `undefined`

___
<a id="getorthrow"></a>

###  getOrThrow

▸ **getOrThrow**(name: *`string`*, msg?: *`string`*): [Constructor](../interfaces/_plugnet.constructor.md)

*Defined in node_modules/@plugnet/types/codec/typeRegistry.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| `Optional` msg | `string` |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md)

___
<a id="register"></a>

###  register

▸ **register**(type: *[Constructor](../interfaces/_plugnet.constructor.md) \| [RegistryTypes](../modules/_plugnet.md#registrytypes)*): `void`

▸ **register**(name: *`string`*, type: *[Constructor](../interfaces/_plugnet.constructor.md)*): `void`

*Defined in node_modules/@plugnet/types/codec/typeRegistry.d.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Constructor](../interfaces/_plugnet.constructor.md) \| [RegistryTypes](../modules/_plugnet.md#registrytypes) |

**Returns:** `void`

*Defined in node_modules/@plugnet/types/codec/typeRegistry.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| type | [Constructor](../interfaces/_plugnet.constructor.md) |

**Returns:** `void`

___

