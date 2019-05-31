[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md) > [HDKeyring](../classes/_cennznet_wallet.hdkeyring-1.md)

# Class: HDKeyring

a HD Keyring implementation of ${IKeyring} will use hd path "m/44'/392'/0'/0" (for CENNZ) by default

## Hierarchy

**HDKeyring**

## Implements

* [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md)<[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md)>

## Index

### Constructors

* [constructor](_cennznet_wallet.hdkeyring-1.md#constructor)

### Methods

* [addPair](_cennznet_wallet.hdkeyring-1.md#addpair)
* [deserialize](_cennznet_wallet.hdkeyring-1.md#deserialize)
* [getAddresses](_cennznet_wallet.hdkeyring-1.md#getaddresses)
* [getPair](_cennznet_wallet.hdkeyring-1.md#getpair)
* [getPairs](_cennznet_wallet.hdkeyring-1.md#getpairs)
* [removePair](_cennznet_wallet.hdkeyring-1.md#removepair)
* [serialize](_cennznet_wallet.hdkeyring-1.md#serialize)
* [generate](_cennznet_wallet.hdkeyring-1.md#generate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HDKeyring**(opt?: *[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md)*): [HDKeyring](_cennznet_wallet.hdkeyring-1.md)

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | [SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md) |

**Returns:** [HDKeyring](_cennznet_wallet.hdkeyring-1.md)

___

## Methods

<a id="addpair"></a>

###  addPair

▸ **addPair**(): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md).[addPair](../interfaces/_cennznet_wallet.ikeyring.md#addpair)*

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:70*

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(opt: *[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md)*): `Promise`<`this`>

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:57*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opt | [SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md) |

**Returns:** `Promise`<`this`>

___
<a id="getaddresses"></a>

###  getAddresses

▸ **getAddresses**(): `Promise`<`string`[]>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md).[getAddresses](../interfaces/_cennznet_wallet.ikeyring.md#getaddresses)*

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:80*

**Returns:** `Promise`<`string`[]>

___
<a id="getpair"></a>

###  getPair

▸ **getPair**(address: *`string`*): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md).[getPair](../interfaces/_cennznet_wallet.ikeyring.md#getpair)*

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:84*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

___
<a id="getpairs"></a>

###  getPairs

▸ **getPairs**(): `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)[]>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md).[getPairs](../interfaces/_cennznet_wallet.ikeyring.md#getpairs)*

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:92*

**Returns:** `Promise`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)[]>

___
<a id="removepair"></a>

###  removePair

▸ **removePair**(address: *`string`*): `Promise`<`void`>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md).[removePair](../interfaces/_cennznet_wallet.ikeyring.md#removepair)*

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:96*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<`void`>

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md)>

*Implementation of [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md).[serialize](../interfaces/_cennznet_wallet.ikeyring.md#serialize)*

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:62*

**Returns:** `Promise`<[SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md)>

___
<a id="generate"></a>

### `<Static>` generate

▸ **generate**(): `Promise`<[HDKeyring](_cennznet_wallet.hdkeyring-1.md)>

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:37*

**Returns:** `Promise`<[HDKeyring](_cennznet_wallet.hdkeyring-1.md)>

___

