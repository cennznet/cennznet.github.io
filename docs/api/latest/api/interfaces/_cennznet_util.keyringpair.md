[@cennznet/api](../README.md) > [@cennznet/util](../modules/_cennznet_util.md) > [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

# Interface: KeyringPair

## Hierarchy

**KeyringPair**

## Index

### Properties

* [address](_cennznet_util.keyringpair.md#address)
* [decodePkcs8](_cennznet_util.keyringpair.md#decodepkcs8)
* [encodePkcs8](_cennznet_util.keyringpair.md#encodepkcs8)
* [getMeta](_cennznet_util.keyringpair.md#getmeta)
* [isLocked](_cennznet_util.keyringpair.md#islocked)
* [lock](_cennznet_util.keyringpair.md#lock)
* [publicKey](_cennznet_util.keyringpair.md#publickey)
* [setMeta](_cennznet_util.keyringpair.md#setmeta)
* [type](_cennznet_util.keyringpair.md#type)

### Methods

* [sign](_cennznet_util.keyringpair.md#sign)
* [toJson](_cennznet_util.keyringpair.md#tojson)
* [verify](_cennznet_util.keyringpair.md#verify)

---

## Properties

<a id="address"></a>

###  address

**● address**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:24*

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="decodepkcs8"></a>

###  decodePkcs8

**● decodePkcs8**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:25*

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

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:26*

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

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:27*

#### Type declaration
▸(): [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)

**Returns:** [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)

___
<a id="islocked"></a>

###  isLocked

**● isLocked**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:28*

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="lock"></a>

###  lock

**● lock**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:29*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="publickey"></a>

###  publicKey

**● publicKey**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:30*

#### Type declaration
▸(): `Uint8Array`

**Returns:** `Uint8Array`

___
<a id="setmeta"></a>

###  setMeta

**● setMeta**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:31*

#### Type declaration
▸(meta: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |

**Returns:** `void`

___
<a id="type"></a>

###  type

**● type**: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:23*

___

## Methods

<a id="sign"></a>

###  sign

▸ **sign**(message: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="tojson"></a>

###  toJson

▸ **toJson**(passphrase?: *`string`*): [KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:33*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` passphrase | `string` |

**Returns:** [KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json)

___
<a id="verify"></a>

###  verify

▸ **verify**(message: *`Uint8Array`*, signature: *`Uint8Array`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |
| signature | `Uint8Array` |

**Returns:** `boolean`

___

