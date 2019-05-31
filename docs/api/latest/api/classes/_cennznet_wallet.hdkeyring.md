[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md) > [HDKeyring](../classes/_cennznet_wallet.hdkeyring.md)

# Class: HDKeyring

a HD Keyring implementation of ${IKeyring} will use hd path "m/44'/392'/0'/0" (for CENNZ) by default

## Hierarchy

**HDKeyring**

## Implements

* [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)<[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md)>

## Index

### Constructors

* [constructor](_cennznet_wallet.hdkeyring.md#constructor)

### Methods

* [addPair](_cennznet_wallet.hdkeyring.md#addpair)
* [deserialize](_cennznet_wallet.hdkeyring.md#deserialize)
* [getAddresses](_cennznet_wallet.hdkeyring.md#getaddresses)
* [getPair](_cennznet_wallet.hdkeyring.md#getpair)
* [getPairs](_cennznet_wallet.hdkeyring.md#getpairs)
* [removePair](_cennznet_wallet.hdkeyring.md#removepair)
* [serialize](_cennznet_wallet.hdkeyring.md#serialize)
* [generate](_cennznet_wallet.hdkeyring.md#generate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HDKeyring**(opt?: *[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md)*): [HDKeyring](_cennznet_wallet.hdkeyring.md)

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | [SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md) |

**Returns:** [HDKeyring](_cennznet_wallet.hdkeyring.md)

___

## Methods

<a id="addpair"></a>

###  addPair

▸ **addPair**(): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[addPair](../interfaces/_cennznet_wallet.ikeyring-1.md#addpair)*

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:70*

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(opt: *[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md)*): `Promise`<`this`>

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:57*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opt | [SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md) |

**Returns:** `Promise`<`this`>

___
<a id="getaddresses"></a>

###  getAddresses

▸ **getAddresses**(): `Promise`<`string`[]>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[getAddresses](../interfaces/_cennznet_wallet.ikeyring-1.md#getaddresses)*

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:80*

**Returns:** `Promise`<`string`[]>

___
<a id="getpair"></a>

###  getPair

▸ **getPair**(address: *`string`*): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[getPair](../interfaces/_cennznet_wallet.ikeyring-1.md#getpair)*

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:84*

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

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:92*

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)[]>

___
<a id="removepair"></a>

###  removePair

▸ **removePair**(address: *`string`*): `Promise`<`void`>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[removePair](../interfaces/_cennznet_wallet.ikeyring-1.md#removepair)*

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:96*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<`void`>

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md).[serialize](../interfaces/_cennznet_wallet.ikeyring-1.md#serialize)*

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:62*

**Returns:** `Promise`<[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md)>

___
<a id="generate"></a>

### `<Static>` generate

▸ **generate**(): `Promise`<[HDKeyring](_cennznet_wallet.hdkeyring.md)>

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:37*

**Returns:** `Promise`<[HDKeyring](_cennznet_wallet.hdkeyring.md)>

___

