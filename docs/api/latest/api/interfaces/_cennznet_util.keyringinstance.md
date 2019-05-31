[@cennznet/api](../README.md) > [@cennznet/util](../modules/_cennznet_util.md) > [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md)

# Interface: KeyringInstance

## Hierarchy

**KeyringInstance**

## Implemented by

* [Keyring](../classes/_cennznet_util.keyring.md)

## Index

### Properties

* [pairs](_cennznet_util.keyringinstance.md#pairs)
* [publicKeys](_cennznet_util.keyringinstance.md#publickeys)
* [type](_cennznet_util.keyringinstance.md#type)

### Methods

* [addFromAddress](_cennznet_util.keyringinstance.md#addfromaddress)
* [addFromJson](_cennznet_util.keyringinstance.md#addfromjson)
* [addFromMnemonic](_cennznet_util.keyringinstance.md#addfrommnemonic)
* [addFromSeed](_cennznet_util.keyringinstance.md#addfromseed)
* [addFromUri](_cennznet_util.keyringinstance.md#addfromuri)
* [addPair](_cennznet_util.keyringinstance.md#addpair)
* [createFromUri](_cennznet_util.keyringinstance.md#createfromuri)
* [decodeAddress](_cennznet_util.keyringinstance.md#decodeaddress)
* [encodeAddress](_cennznet_util.keyringinstance.md#encodeaddress)
* [getPair](_cennznet_util.keyringinstance.md#getpair)
* [getPairs](_cennznet_util.keyringinstance.md#getpairs)
* [getPublicKeys](_cennznet_util.keyringinstance.md#getpublickeys)
* [removePair](_cennznet_util.keyringinstance.md#removepair)
* [setAddressPrefix](_cennznet_util.keyringinstance.md#setaddressprefix)
* [toJson](_cennznet_util.keyringinstance.md#tojson)

---

## Properties

<a id="pairs"></a>

###  pairs

**● pairs**: *`Array`<[KeyringPair](_cennznet_util.keyringpair.md)>*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:43*

___
<a id="publickeys"></a>

###  publicKeys

**● publicKeys**: *`Array`<`Uint8Array`>*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:44*

___
<a id="type"></a>

###  type

**● type**: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:45*

___

## Methods

<a id="addfromaddress"></a>

###  addFromAddress

▸ **addFromAddress**(address: *`string` \| `Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, encoded?: *`Uint8Array` \| `null`*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*, ignoreChecksum?: *`boolean`*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:50*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` encoded | `Uint8Array` \| `null` |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |
| `Optional` ignoreChecksum | `boolean` |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="addfromjson"></a>

###  addFromJson

▸ **addFromJson**(pair: *[KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json)*, ignoreChecksum?: *`boolean`*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:51*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json) |
| `Optional` ignoreChecksum | `boolean` |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="addfrommnemonic"></a>

###  addFromMnemonic

▸ **addFromMnemonic**(mnemonic: *`string`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:52*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mnemonic | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="addfromseed"></a>

###  addFromSeed

▸ **addFromSeed**(seed: *`Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:53*

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="addfromuri"></a>

###  addFromUri

▸ **addFromUri**(suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:54*

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="addpair"></a>

###  addPair

▸ **addPair**(pair: *[KeyringPair](_cennznet_util.keyringpair.md)*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair](_cennznet_util.keyringpair.md) |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="createfromuri"></a>

###  createFromUri

▸ **createFromUri**(suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:55*

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="decodeaddress"></a>

###  decodeAddress

▸ **decodeAddress**(encoded: *`string` \| `Uint8Array`*, ignoreChecksum?: *`boolean`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:46*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoded | `string` \| `Uint8Array` |
| `Optional` ignoreChecksum | `boolean` |

**Returns:** `Uint8Array`

___
<a id="encodeaddress"></a>

###  encodeAddress

▸ **encodeAddress**(key: *`Uint8Array` \| `string`*): `string`

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:47*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` \| `string` |

**Returns:** `string`

___
<a id="getpair"></a>

###  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): [KeyringPair](_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:56*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="getpairs"></a>

###  getPairs

▸ **getPairs**(): `Array`<[KeyringPair](_cennznet_util.keyringpair.md)>

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:57*

**Returns:** `Array`<[KeyringPair](_cennznet_util.keyringpair.md)>

___
<a id="getpublickeys"></a>

###  getPublicKeys

▸ **getPublicKeys**(): `Array`<`Uint8Array`>

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:58*

**Returns:** `Array`<`Uint8Array`>

___
<a id="removepair"></a>

###  removePair

▸ **removePair**(address: *`string` \| `Uint8Array`*): `void`

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:59*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `void`

___
<a id="setaddressprefix"></a>

###  setAddressPrefix

▸ **setAddressPrefix**(prefix: *[Prefix](../modules/_cennznet_util.md#prefix)*): `void`

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | [Prefix](../modules/_cennznet_util.md#prefix) |

**Returns:** `void`

___
<a id="tojson"></a>

###  toJson

▸ **toJson**(address: *`string` \| `Uint8Array`*, passphrase?: *`string`*): [KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json)

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:60*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| `Optional` passphrase | `string` |

**Returns:** [KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json)

___

