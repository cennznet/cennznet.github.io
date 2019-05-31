[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [KeyringInstance](../interfaces/_plugnet.keyringinstance.md)

# Interface: KeyringInstance

## Hierarchy

**KeyringInstance**

## Implemented by

* [Keyring](../classes/_plugnet.keyring.md)

## Index

### Properties

* [pairs](_plugnet.keyringinstance.md#pairs)
* [publicKeys](_plugnet.keyringinstance.md#publickeys)
* [type](_plugnet.keyringinstance.md#type)

### Methods

* [addFromAddress](_plugnet.keyringinstance.md#addfromaddress)
* [addFromJson](_plugnet.keyringinstance.md#addfromjson)
* [addFromMnemonic](_plugnet.keyringinstance.md#addfrommnemonic)
* [addFromSeed](_plugnet.keyringinstance.md#addfromseed)
* [addFromUri](_plugnet.keyringinstance.md#addfromuri)
* [addPair](_plugnet.keyringinstance.md#addpair)
* [createFromUri](_plugnet.keyringinstance.md#createfromuri)
* [decodeAddress](_plugnet.keyringinstance.md#decodeaddress)
* [encodeAddress](_plugnet.keyringinstance.md#encodeaddress)
* [getPair](_plugnet.keyringinstance.md#getpair)
* [getPairs](_plugnet.keyringinstance.md#getpairs)
* [getPublicKeys](_plugnet.keyringinstance.md#getpublickeys)
* [removePair](_plugnet.keyringinstance.md#removepair)
* [setAddressPrefix](_plugnet.keyringinstance.md#setaddressprefix)
* [toJson](_plugnet.keyringinstance.md#tojson)

---

## Properties

<a id="pairs"></a>

###  pairs

**● pairs**: *`Array`<[KeyringPair](_plugnet.keyringpair.md)>*

*Defined in node_modules/@plugnet/keyring/types.d.ts:43*

___
<a id="publickeys"></a>

###  publicKeys

**● publicKeys**: *`Array`<`Uint8Array`>*

*Defined in node_modules/@plugnet/keyring/types.d.ts:44*

___
<a id="type"></a>

###  type

**● type**: *[KeypairType](../modules/_plugnet.md#keypairtype)*

*Defined in node_modules/@plugnet/keyring/types.d.ts:45*

___

## Methods

<a id="addfromaddress"></a>

###  addFromAddress

▸ **addFromAddress**(address: *`string` \| `Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, encoded?: *`Uint8Array` \| `null`*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*, ignoreChecksum?: *`boolean`*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:50*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| `Optional` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |
| `Optional` encoded | `Uint8Array` \| `null` |
| `Optional` type | [KeypairType](../modules/_plugnet.md#keypairtype) |
| `Optional` ignoreChecksum | `boolean` |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="addfromjson"></a>

###  addFromJson

▸ **addFromJson**(pair: *[KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)*, ignoreChecksum?: *`boolean`*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:51*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair$Json](../modules/_plugnet.md#keyringpair_json) |
| `Optional` ignoreChecksum | `boolean` |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="addfrommnemonic"></a>

###  addFromMnemonic

▸ **addFromMnemonic**(mnemonic: *`string`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:52*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mnemonic | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_plugnet.md#keypairtype) |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="addfromseed"></a>

###  addFromSeed

▸ **addFromSeed**(seed: *`Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:53*

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |
| `Optional` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_plugnet.md#keypairtype) |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="addfromuri"></a>

###  addFromUri

▸ **addFromUri**(suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:54*

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_plugnet.md#keypairtype) |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="addpair"></a>

###  addPair

▸ **addPair**(pair: *[KeyringPair](_plugnet.keyringpair.md)*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair](_plugnet.keyringpair.md) |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="createfromuri"></a>

###  createFromUri

▸ **createFromUri**(suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:55*

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_plugnet.md#keypairtype) |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="decodeaddress"></a>

###  decodeAddress

▸ **decodeAddress**(encoded: *`string` \| `Uint8Array`*, ignoreChecksum?: *`boolean`*): `Uint8Array`

*Defined in node_modules/@plugnet/keyring/types.d.ts:46*

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

*Defined in node_modules/@plugnet/keyring/types.d.ts:47*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` \| `string` |

**Returns:** `string`

___
<a id="getpair"></a>

###  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): [KeyringPair](_plugnet.keyringpair.md)

*Defined in node_modules/@plugnet/keyring/types.d.ts:56*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="getpairs"></a>

###  getPairs

▸ **getPairs**(): `Array`<[KeyringPair](_plugnet.keyringpair.md)>

*Defined in node_modules/@plugnet/keyring/types.d.ts:57*

**Returns:** `Array`<[KeyringPair](_plugnet.keyringpair.md)>

___
<a id="getpublickeys"></a>

###  getPublicKeys

▸ **getPublicKeys**(): `Array`<`Uint8Array`>

*Defined in node_modules/@plugnet/keyring/types.d.ts:58*

**Returns:** `Array`<`Uint8Array`>

___
<a id="removepair"></a>

###  removePair

▸ **removePair**(address: *`string` \| `Uint8Array`*): `void`

*Defined in node_modules/@plugnet/keyring/types.d.ts:59*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `void`

___
<a id="setaddressprefix"></a>

###  setAddressPrefix

▸ **setAddressPrefix**(prefix: *[Prefix](../modules/_plugnet.md#prefix)*): `void`

*Defined in node_modules/@plugnet/keyring/types.d.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | [Prefix](../modules/_plugnet.md#prefix) |

**Returns:** `void`

___
<a id="tojson"></a>

###  toJson

▸ **toJson**(address: *`string` \| `Uint8Array`*, passphrase?: *`string`*): [KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)

*Defined in node_modules/@plugnet/keyring/types.d.ts:60*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| `Optional` passphrase | `string` |

**Returns:** [KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)

___

