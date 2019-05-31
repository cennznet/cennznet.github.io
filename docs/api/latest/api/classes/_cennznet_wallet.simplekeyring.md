[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md) > [SimpleKeyring](../classes/_cennznet_wallet.simplekeyring.md)

# Class: SimpleKeyring

a Simple Keyring implementation of ${IKeyring} can be used to manage individual key pairs

## Hierarchy

**SimpleKeyring**

## Implements

* [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)<[SerializedSimpleKeyring](../modules/_cennznet_wallet.md#serializedsimplekeyring-1)>

## Index

### Constructors

* [constructor](_cennznet_wallet.simplekeyring.md#constructor)

### Methods

* [addFromJson](_cennznet_wallet.simplekeyring.md#addfromjson)
* [addFromMnemonic](_cennznet_wallet.simplekeyring.md#addfrommnemonic)
* [addFromSeed](_cennznet_wallet.simplekeyring.md#addfromseed)
* [addFromUri](_cennznet_wallet.simplekeyring.md#addfromuri)
* [addPair](_cennznet_wallet.simplekeyring.md#addpair)
* [deserialize](_cennznet_wallet.simplekeyring.md#deserialize)
* [getAddresses](_cennznet_wallet.simplekeyring.md#getaddresses)
* [getPair](_cennznet_wallet.simplekeyring.md#getpair)
* [getPairs](_cennznet_wallet.simplekeyring.md#getpairs)
* [removePair](_cennznet_wallet.simplekeyring.md#removepair)
* [serialize](_cennznet_wallet.simplekeyring.md#serialize)
* [generate](_cennznet_wallet.simplekeyring.md#generate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SimpleKeyring**(opt?: *[SerializedSimpleKeyring](../modules/_cennznet_wallet.md#serializedsimplekeyring-1)*): [SimpleKeyring](_cennznet_wallet.simplekeyring.md)

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:31*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | [SerializedSimpleKeyring](../modules/_cennznet_wallet.md#serializedsimplekeyring-1) |

**Returns:** [SimpleKeyring](_cennznet_wallet.simplekeyring.md)

___

## Methods

<a id="addfromjson"></a>

###  addFromJson

▸ **addFromJson**(pair: *[KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)*, ignoreChecksum?: *`boolean`*, passphrase?: *`string`*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:75*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair$Json](../modules/_plugnet.md#keyringpair_json) |
| `Optional` ignoreChecksum | `boolean` |
| `Optional` passphrase | `string` |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addfrommnemonic"></a>

###  addFromMnemonic

▸ **addFromMnemonic**(mnemonic: *`string`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:91*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| mnemonic | `string` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |  {} |
| `Default value` type | [KeypairType](../modules/_plugnet.md#keypairtype) |  DEFAULT_KEYRING_TYPE |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addfromseed"></a>

###  addFromSeed

▸ **addFromSeed**(seed: *`Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:99*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| seed | `Uint8Array` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |  {} |
| `Default value` type | [KeypairType](../modules/_plugnet.md#keypairtype) |  DEFAULT_KEYRING_TYPE |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addfromuri"></a>

###  addFromUri

▸ **addFromUri**(suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_plugnet.md#keypairtype)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:103*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| suri | `string` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_plugnet.md#keyringpair_meta) |  {} |
| `Default value` type | [KeypairType](../modules/_plugnet.md#keypairtype) |  DEFAULT_KEYRING_TYPE |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addpair"></a>

###  addPair

▸ **addPair**(pair?: *[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)*): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` pair | [KeyringPair](../interfaces/_cennznet_util.keyringpair.md) |

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(data: *[SerializedSimpleKeyring](../modules/_cennznet_wallet.md#serializedsimplekeyring-1)*): `Promise`<`this`>

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:43*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | [SerializedSimpleKeyring](../modules/_cennznet_wallet.md#serializedsimplekeyring-1) |

**Returns:** `Promise`<`this`>

___
<a id="getaddresses"></a>

###  getAddresses

▸ **getAddresses**(): `Promise`<`string`[]>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[getAddresses](../interfaces/_cennznet_wallet.ikeyring-1.md#getaddresses)*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:59*

**Returns:** `Promise`<`string`[]>

___
<a id="getpair"></a>

###  getPair

▸ **getPair**(address: *`string`*): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[getPair](../interfaces/_cennznet_wallet.ikeyring-1.md#getpair)*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

___
<a id="getpairs"></a>

###  getPairs

▸ **getPairs**(): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)[]>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[getPairs](../interfaces/_cennznet_wallet.ikeyring-1.md#getpairs)*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:67*

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)[]>

___
<a id="removepair"></a>

###  removePair

▸ **removePair**(address: *`string`*): `Promise`<`void`>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[removePair](../interfaces/_cennznet_wallet.ikeyring-1.md#removepair)*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:71*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<`void`>

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<[SerializedSimpleKeyring](../modules/_cennznet_wallet.md#serializedsimplekeyring-1)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[serialize](../interfaces/_cennznet_wallet.ikeyring-1.md#serialize)*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:39*

**Returns:** `Promise`<[SerializedSimpleKeyring](../modules/_cennznet_wallet.md#serializedsimplekeyring-1)>

___
<a id="generate"></a>

### `<Static>` generate

▸ **generate**(): `Promise`<[SimpleKeyring](_cennznet_wallet.simplekeyring.md)>

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:28*

**Returns:** `Promise`<[SimpleKeyring](_cennznet_wallet.simplekeyring.md)>

___
