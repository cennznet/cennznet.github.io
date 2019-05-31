[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [KeyringPair](../interfaces/_plugnet.keyringpair.md)

# Interface: KeyringPair

## Hierarchy

**KeyringPair**

## Index

### Properties

* [address](_plugnet.keyringpair.md#address)
* [decodePkcs8](_plugnet.keyringpair.md#decodepkcs8)
* [encodePkcs8](_plugnet.keyringpair.md#encodepkcs8)
* [getMeta](_plugnet.keyringpair.md#getmeta)
* [isLocked](_plugnet.keyringpair.md#islocked)
* [lock](_plugnet.keyringpair.md#lock)
* [publicKey](_plugnet.keyringpair.md#publickey)
* [setMeta](_plugnet.keyringpair.md#setmeta)
* [type](_plugnet.keyringpair.md#type)

### Methods

* [sign](_plugnet.keyringpair.md#sign)
* [toJson](_plugnet.keyringpair.md#tojson)
* [verify](_plugnet.keyringpair.md#verify)

---

## Properties

<a id="address"></a>

###  address

**● address**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:24*

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="decodepkcs8"></a>

###  decodePkcs8

**● decodePkcs8**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:25*

#### Type declaration
▸(passphrase?: *`string`*, encoded?: *`Uint8Array`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` passphrase | `string` |
| `Optional` encoded | `Uint8Array` |

**Returns:** `void`

___
<a id="encodepkcs8"></a>

###  encodePkcs8

**● encodePkcs8**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:26*

#### Type declaration
▸(passphrase?: *`string`*): `Uint8Array`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` passphrase | `string` |

**Returns:** `Uint8Array`

___
<a id="getmeta"></a>

###  getMeta

**● getMeta**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:27*

#### Type declaration
▸(): [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)

**Returns:** [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)

___
<a id="islocked"></a>

###  isLocked

**● isLocked**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:28*

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="lock"></a>

###  lock

**● lock**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:29*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="publickey"></a>

###  publicKey

**● publicKey**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:30*

#### Type declaration
▸(): `Uint8Array`

**Returns:** `Uint8Array`

___
<a id="setmeta"></a>

###  setMeta

**● setMeta**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:31*

#### Type declaration
▸(meta: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |

**Returns:** `void`

___
<a id="type"></a>

###  type

**● type**: *[KeypairType](../modules/_plugnet.md#keypairtype)*

*Defined in node_modules/@plugnet/keyring/types.d.ts:23*

___

## Methods

<a id="sign"></a>

###  sign

▸ **sign**(message: *`Uint8Array`*): `Uint8Array`

*Defined in node_modules/@plugnet/keyring/types.d.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="tojson"></a>

###  toJson

▸ **toJson**(passphrase?: *`string`*): [KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)

*Defined in node_modules/@plugnet/keyring/types.d.ts:33*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` passphrase | `string` |

**Returns:** [KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)

___
<a id="verify"></a>

###  verify

▸ **verify**(message: *`Uint8Array`*, signature: *`Uint8Array`*): `boolean`

*Defined in node_modules/@plugnet/keyring/types.d.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |
| signature | `Uint8Array` |

**Returns:** `boolean`

___

