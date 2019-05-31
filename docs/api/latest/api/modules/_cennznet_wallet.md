[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md)

# Package: @cennznet/wallet

`cennznet-wallet`
=================

> a wallet implement to use with cennznet-js

Usage
-----

### Create a Wallet with HD-Keyring

```
const {Wallet} = require('@cennznet/wallet')

```

## Index

### Classes

* [HDKeyring](../classes/_cennznet_wallet.hdkeyring.md)
* [HDKeyring](../classes/_cennznet_wallet.hdkeyring-1.md)
* [SimpleKeyring](../classes/_cennznet_wallet.simplekeyring-1.md)
* [SimpleKeyring](../classes/_cennznet_wallet.simplekeyring.md)
* [Wallet](../classes/_cennznet_wallet.wallet.md)
* [Wallet](../classes/_cennznet_wallet.wallet-1.md)

### Interfaces

* [Encryptor](../interfaces/_cennznet_wallet.encryptor-1.md)
* [Encryptor](../interfaces/_cennznet_wallet.encryptor.md)
* [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md)
* [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)
* [IWallet](../interfaces/_cennznet_wallet.iwallet-1.md)
* [IWallet](../interfaces/_cennznet_wallet.iwallet.md)
* [KeyringType](../interfaces/_cennznet_wallet.keyringtype.md)
* [KeyringType](../interfaces/_cennznet_wallet.keyringtype-1.md)
* [SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring-1.md)
* [SerializedHDKeyring](../interfaces/_cennznet_wallet.serializedhdkeyring.md)
* [WalletOption](../interfaces/_cennznet_wallet.walletoption-1.md)
* [WalletOption](../interfaces/_cennznet_wallet.walletoption.md)

### Type aliases

* [AccountKeyringMap](_cennznet_wallet.md#accountkeyringmap-1)
* [AccountKeyringMap](_cennznet_wallet.md#accountkeyringmap)
* [SerializedSimpleKeyring](_cennznet_wallet.md#serializedsimplekeyring)
* [SerializedSimpleKeyring](_cennznet_wallet.md#serializedsimplekeyring-1)
* [SerializedWallet](_cennznet_wallet.md#serializedwallet)
* [SerializedWallet](_cennznet_wallet.md#serializedwallet-1)

### Variables

* [DEFAULT_HD_PATH](_cennznet_wallet.md#default_hd_path)
* [DEFAULT_HD_PATH](_cennznet_wallet.md#default_hd_path-1)
* [DEFAULT_KEYRING_TYPE](_cennznet_wallet.md#default_keyring_type)
* [DEFAULT_KEYRING_TYPE](_cennznet_wallet.md#default_keyring_type-1)
* [GENESIS_HASH](_cennznet_wallet.md#genesis_hash)
* [GENESIS_HASH](_cennznet_wallet.md#genesis_hash-1)
* [PASS_STRENGTH](_cennznet_wallet.md#pass_strength)
* [PASS_STRENGTH](_cennznet_wallet.md#pass_strength-1)
* [TESTING_PAIRS](_cennznet_wallet.md#testing_pairs-2)
* [TESTING_PAIRS](_cennznet_wallet.md#testing_pairs)
* [TESTING_PAIRS](_cennznet_wallet.md#testing_pairs-3)
* [TESTING_PAIRS](_cennznet_wallet.md#testing_pairs-1)
* [id](_cennznet_wallet.md#id)
* [id](_cennznet_wallet.md#id-1)
* [mutexLocks](_cennznet_wallet.md#mutexlocks)
* [mutexLocks](_cennznet_wallet.md#mutexlocks-1)
* [privateKeyrings](_cennznet_wallet.md#privatekeyrings)
* [privateKeyrings](_cennznet_wallet.md#privatekeyrings-1)
* [privateMnemonic](_cennznet_wallet.md#privatemnemonic)
* [privateMnemonic](_cennznet_wallet.md#privatemnemonic-1)
* [privatePasswd](_cennznet_wallet.md#privatepasswd)
* [privatePasswd](_cennznet_wallet.md#privatepasswd-1)

### Functions

* [decrypt](_cennznet_wallet.md#decrypt)
* [decrypt](_cennznet_wallet.md#decrypt-1)
* [encrypt](_cennznet_wallet.md#encrypt)
* [encrypt](_cennznet_wallet.md#encrypt-1)
* [newNonce](_cennznet_wallet.md#newnonce)
* [newNonce](_cennznet_wallet.md#newnonce-1)

### Object literals

* [TEST_ACCOUNT](_cennznet_wallet.md#test_account)
* [TEST_ACCOUNT](_cennznet_wallet.md#test_account-1)
* [TEST_ACCOUNT_MNEMONIC](_cennznet_wallet.md#test_account_mnemonic)
* [TEST_ACCOUNT_MNEMONIC](_cennznet_wallet.md#test_account_mnemonic-1)
* [TEST_ACCOUNT_SEED](_cennznet_wallet.md#test_account_seed)
* [TEST_ACCOUNT_SEED](_cennznet_wallet.md#test_account_seed-1)

---

## Type aliases

<a id="accountkeyringmap-1"></a>

###  AccountKeyringMap

**Ƭ AccountKeyringMap**: *`object`*

*Defined in node_modules/@cennznet/wallet/src/Wallet.ts:29*

#### Type declaration

[address: `string`]: `number`

___
<a id="accountkeyringmap"></a>

###  AccountKeyringMap

**Ƭ AccountKeyringMap**: *`object`*

*Defined in packages/wallet/src/Wallet.ts:29*

#### Type declaration

[address: `string`]: `number`

___
<a id="serializedsimplekeyring"></a>

###  SerializedSimpleKeyring

**Ƭ SerializedSimpleKeyring**: *[KeyringPair$Json](_plugnet.md#keyringpair_json)[]*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.ts:22*

___
<a id="serializedsimplekeyring-1"></a>

###  SerializedSimpleKeyring

**Ƭ SerializedSimpleKeyring**: *[KeyringPair$Json](_plugnet.md#keyringpair_json)[]*

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.ts:22*

___
<a id="serializedwallet"></a>

###  SerializedWallet

**Ƭ SerializedWallet**: *`object`[]*

*Defined in packages/wallet/src/Wallet.ts:23*

___
<a id="serializedwallet-1"></a>

###  SerializedWallet

**Ƭ SerializedWallet**: *`object`[]*

*Defined in node_modules/@cennznet/wallet/src/Wallet.ts:23*

___

## Variables

<a id="default_hd_path"></a>

### `<Const>` DEFAULT_HD_PATH

**● DEFAULT_HD_PATH**: *"m/44&#x27;/392&#x27;/0&#x27;/0"* = "m/44'/392'/0'/0"

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:22*

___
<a id="default_hd_path-1"></a>

### `<Const>` DEFAULT_HD_PATH

**● DEFAULT_HD_PATH**: *"m/44&#x27;/392&#x27;/0&#x27;/0"* = "m/44'/392'/0'/0"

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:22*

___
<a id="default_keyring_type"></a>

### `<Const>` DEFAULT_KEYRING_TYPE

**● DEFAULT_KEYRING_TYPE**: *"sr25519"* = "sr25519"

*Defined in node_modules/@cennznet/wallet/src/constants.ts:15*

___
<a id="default_keyring_type-1"></a>

### `<Const>` DEFAULT_KEYRING_TYPE

**● DEFAULT_KEYRING_TYPE**: *"sr25519"* = "sr25519"

*Defined in packages/wallet/src/constants.ts:15*

___
<a id="genesis_hash"></a>

### `<Const>` GENESIS_HASH

**● GENESIS_HASH**: *"0x14ba3ad1bf42740e82a408d57955b0c026bfc268ee559ce9081ba7fb530de815"* = "0x14ba3ad1bf42740e82a408d57955b0c026bfc268ee559ce9081ba7fb530de815"

*Defined in packages/wallet/src/Wallet.spec.ts:31*

___
<a id="genesis_hash-1"></a>

### `<Const>` GENESIS_HASH

**● GENESIS_HASH**: *"0x14ba3ad1bf42740e82a408d57955b0c026bfc268ee559ce9081ba7fb530de815"* = "0x14ba3ad1bf42740e82a408d57955b0c026bfc268ee559ce9081ba7fb530de815"

*Defined in node_modules/@cennznet/wallet/src/Wallet.spec.ts:31*

___
<a id="pass_strength"></a>

### `<Const>` PASS_STRENGTH

**● PASS_STRENGTH**: *`256`* = 256

*Defined in packages/wallet/src/encryptors/naclEncryptor.ts:20*

___
<a id="pass_strength-1"></a>

### `<Const>` PASS_STRENGTH

**● PASS_STRENGTH**: *`256`* = 256

*Defined in node_modules/@cennznet/wallet/src/encryptors/naclEncryptor.ts:20*

___
<a id="testing_pairs-2"></a>

### `<Const>` TESTING_PAIRS

**● TESTING_PAIRS**: *`object`* =  TestingPairs()

*Defined in packages/wallet/src/Wallet.spec.ts:22*

#### Type declaration

[index: `string`]: [KeyringPair](../interfaces/_plugnet.keyringpair.md)

___
<a id="testing_pairs"></a>

### `<Const>` TESTING_PAIRS

**● TESTING_PAIRS**: *`object`* =  TestingPairs()

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:19*

#### Type declaration

[index: `string`]: [KeyringPair](../interfaces/_plugnet.keyringpair.md)

___
<a id="testing_pairs-3"></a>

### `<Const>` TESTING_PAIRS

**● TESTING_PAIRS**: *`object`* =  TestingPairs()

*Defined in node_modules/@cennznet/wallet/src/Wallet.spec.ts:22*

#### Type declaration

[index: `string`]: [KeyringPair](../interfaces/_plugnet.keyringpair.md)

___
<a id="testing_pairs-1"></a>

### `<Const>` TESTING_PAIRS

**● TESTING_PAIRS**: *`object`* =  TestingPairs()

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:19*

#### Type declaration

[index: `string`]: [KeyringPair](../interfaces/_plugnet.keyringpair.md)

___
<a id="id"></a>

### `<Let>` id

**● id**: *`number`* = 0

*Defined in node_modules/@cennznet/wallet/src/Wallet.ts:25*

___
<a id="id-1"></a>

### `<Let>` id

**● id**: *`number`* = 0

*Defined in packages/wallet/src/Wallet.ts:25*

___
<a id="mutexlocks"></a>

### `<Const>` mutexLocks

**● mutexLocks**: *`Map`<`Object`, `Promise`<`any`>>* =  new Map<Object, Promise<any>>()

*Defined in packages/wallet/src/decorators.ts:72*

___
<a id="mutexlocks-1"></a>

### `<Const>` mutexLocks

**● mutexLocks**: *`Map`<`Object`, `Promise`<`any`>>* =  new Map<Object, Promise<any>>()

*Defined in node_modules/@cennznet/wallet/src/decorators.ts:72*

___
<a id="privatekeyrings"></a>

### `<Const>` privateKeyrings

**● privateKeyrings**: *`WeakMap`<`object`, [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)<`any`>[]>* =  new WeakMap<object, IKeyring<any>[]>()

*Defined in packages/wallet/src/Wallet.ts:27*

___
<a id="privatekeyrings-1"></a>

### `<Const>` privateKeyrings

**● privateKeyrings**: *`WeakMap`<`object`, [IKeyring](../interfaces/_cennznet_wallet.ikeyring.md)<`any`>[]>* =  new WeakMap<object, IKeyring<any>[]>()

*Defined in node_modules/@cennznet/wallet/src/Wallet.ts:27*

___
<a id="privatemnemonic"></a>

### `<Const>` privateMnemonic

**● privateMnemonic**: *`WeakMap`<`object`, `string`>* =  new WeakMap<object, string>()

*Defined in packages/wallet/src/keyrings/HDKeyring.ts:30*

___
<a id="privatemnemonic-1"></a>

### `<Const>` privateMnemonic

**● privateMnemonic**: *`WeakMap`<`object`, `string`>* =  new WeakMap<object, string>()

*Defined in node_modules/@cennznet/wallet/src/keyrings/HDKeyring.ts:30*

___
<a id="privatepasswd"></a>

### `<Const>` privatePasswd

**● privatePasswd**: *`WeakMap`<`object`, `string`>* =  new WeakMap<object, string>()

*Defined in packages/wallet/src/Wallet.ts:28*

___
<a id="privatepasswd-1"></a>

### `<Const>` privatePasswd

**● privatePasswd**: *`WeakMap`<`object`, `string`>* =  new WeakMap<object, string>()

*Defined in node_modules/@cennznet/wallet/src/Wallet.ts:28*

___

## Functions

<a id="decrypt"></a>

### `<Const>` decrypt

▸ **decrypt**(passphrase: *`string`*, encoded: *`string`*): `Promise`<`object`>

*Defined in node_modules/@cennznet/wallet/src/encryptors/naclEncryptor.ts:36*

**Parameters:**

| Name | Type |
| ------ | ------ |
| passphrase | `string` |
| encoded | `string` |

**Returns:** `Promise`<`object`>

___
<a id="decrypt-1"></a>

### `<Const>` decrypt

▸ **decrypt**(passphrase: *`string`*, encoded: *`string`*): `Promise`<`object`>

*Defined in packages/wallet/src/encryptors/naclEncryptor.ts:36*

**Parameters:**

| Name | Type |
| ------ | ------ |
| passphrase | `string` |
| encoded | `string` |

**Returns:** `Promise`<`object`>

___
<a id="encrypt"></a>

### `<Const>` encrypt

▸ **encrypt**(passphrase: *`string`*, json: *`object`*): `Promise`<`string`>

*Defined in node_modules/@cennznet/wallet/src/encryptors/naclEncryptor.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| passphrase | `string` |
| json | `object` |

**Returns:** `Promise`<`string`>

___
<a id="encrypt-1"></a>

### `<Const>` encrypt

▸ **encrypt**(passphrase: *`string`*, json: *`object`*): `Promise`<`string`>

*Defined in packages/wallet/src/encryptors/naclEncryptor.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| passphrase | `string` |
| json | `object` |

**Returns:** `Promise`<`string`>

___
<a id="newnonce"></a>

### `<Const>` newNonce

▸ **newNonce**(): `Uint8Array`

*Defined in packages/wallet/src/encryptors/naclEncryptor.ts:18*

**Returns:** `Uint8Array`

___
<a id="newnonce-1"></a>

### `<Const>` newNonce

▸ **newNonce**(): `Uint8Array`

*Defined in node_modules/@cennznet/wallet/src/encryptors/naclEncryptor.ts:18*

**Returns:** `Uint8Array`

___

## Object literals

<a id="test_account"></a>

### `<Const>` TEST_ACCOUNT

**TEST_ACCOUNT**: *`object`*

*Defined in node_modules/@cennznet/wallet/src/Wallet.spec.ts:24*

<a id="test_account.address"></a>

####  address

**● address**: *`string`* = "5DHzypfuQH7FPhCsrqMxpxkBaPHe8QNhc5s1PwEMDc5p5Nb7"

*Defined in node_modules/@cennznet/wallet/src/Wallet.spec.ts:26*

___
<a id="test_account.mnemonic"></a>

####  mnemonic

**● mnemonic**: *`string`* = "insane push cradle toilet token gate chair trim spare blush rebuild top"

*Defined in node_modules/@cennznet/wallet/src/Wallet.spec.ts:28*

___
<a id="test_account.publickey"></a>

####  publicKey

**● publicKey**: *`string`* = "0x366010e706af618a6037731b07663d4b6f10eac201c7fdd5fb0bd4727742524d"

*Defined in node_modules/@cennznet/wallet/src/Wallet.spec.ts:27*

___
<a id="test_account.seed"></a>

####  seed

**● seed**: *`string`* = "0x3cf2ec6ffd26587529ab06c82ba9b33110198085f5c6b8d882653d056bf9e0d3"

*Defined in node_modules/@cennznet/wallet/src/Wallet.spec.ts:25*

___

___
<a id="test_account-1"></a>

### `<Const>` TEST_ACCOUNT

**TEST_ACCOUNT**: *`object`*

*Defined in packages/wallet/src/Wallet.spec.ts:24*

<a id="test_account-1.address-1"></a>

####  address

**● address**: *`string`* = "5DHzypfuQH7FPhCsrqMxpxkBaPHe8QNhc5s1PwEMDc5p5Nb7"

*Defined in packages/wallet/src/Wallet.spec.ts:26*

___
<a id="test_account-1.mnemonic-1"></a>

####  mnemonic

**● mnemonic**: *`string`* = "insane push cradle toilet token gate chair trim spare blush rebuild top"

*Defined in packages/wallet/src/Wallet.spec.ts:28*

___
<a id="test_account-1.publickey-1"></a>

####  publicKey

**● publicKey**: *`string`* = "0x366010e706af618a6037731b07663d4b6f10eac201c7fdd5fb0bd4727742524d"

*Defined in packages/wallet/src/Wallet.spec.ts:27*

___
<a id="test_account-1.seed-1"></a>

####  seed

**● seed**: *`string`* = "0x3cf2ec6ffd26587529ab06c82ba9b33110198085f5c6b8d882653d056bf9e0d3"

*Defined in packages/wallet/src/Wallet.spec.ts:25*

___

___
<a id="test_account_mnemonic"></a>

### `<Const>` TEST_ACCOUNT_MNEMONIC

**TEST_ACCOUNT_MNEMONIC**: *`object`*

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:31*

<a id="test_account_mnemonic.addressed"></a>

####  addressED

**● addressED**: *`string`* = "5CjYyitzVLkxJhoYi5mS8ALM7JrzKAqcz5rtXYpaAiLxEPnU"

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:33*

___
<a id="test_account_mnemonic.addresssr"></a>

####  addressSR

**● addressSR**: *`string`* = "5GRRiw6cCUJYHF2siie4smLvGcReyynk5Mxr7XYiR5rCthgf"

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:32*

___
<a id="test_account_mnemonic.mnemonic-2"></a>

####  mnemonic

**● mnemonic**: *`string`* = "insane push cradle toilet token gate chair trim spare blush rebuild top"

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:34*

___

___
<a id="test_account_mnemonic-1"></a>

### `<Const>` TEST_ACCOUNT_MNEMONIC

**TEST_ACCOUNT_MNEMONIC**: *`object`*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:31*

<a id="test_account_mnemonic-1.addressed-1"></a>

####  addressED

**● addressED**: *`string`* = "5CjYyitzVLkxJhoYi5mS8ALM7JrzKAqcz5rtXYpaAiLxEPnU"

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:33*

___
<a id="test_account_mnemonic-1.addresssr-1"></a>

####  addressSR

**● addressSR**: *`string`* = "5GRRiw6cCUJYHF2siie4smLvGcReyynk5Mxr7XYiR5rCthgf"

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:32*

___
<a id="test_account_mnemonic-1.mnemonic-3"></a>

####  mnemonic

**● mnemonic**: *`string`* = "insane push cradle toilet token gate chair trim spare blush rebuild top"

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:34*

___

___
<a id="test_account_seed"></a>

### `<Const>` TEST_ACCOUNT_SEED

**TEST_ACCOUNT_SEED**: *`object`*

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:21*

<a id="test_account_seed.address-2"></a>

####  address

**● address**: *`string`* = "5Gj98ssm6wbq3WHgjuXmoMCrZQurBb85EwfwoHAmJr7W4iE6"

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:23*

___
<a id="test_account_seed.publickey-2"></a>

####  publicKey

**● publicKey**: *`string`* = "0xce415b82522c8342768e165fceb76167334a903804f14aee214cae8284766c61"

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:24*

___
<a id="test_account_seed.seed-2"></a>

####  seed

**● seed**: *`string`* = "0x3cf2ec6ffd26587529ab06c82ba9b33110198085f5c6b8d882653d056bf9e0d3"

*Defined in node_modules/@cennznet/wallet/src/keyrings/SimpleKeyring.spec.ts:22*

___

___
<a id="test_account_seed-1"></a>

### `<Const>` TEST_ACCOUNT_SEED

**TEST_ACCOUNT_SEED**: *`object`*

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:21*

<a id="test_account_seed-1.address-3"></a>

####  address

**● address**: *`string`* = "5Gj98ssm6wbq3WHgjuXmoMCrZQurBb85EwfwoHAmJr7W4iE6"

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:23*

___
<a id="test_account_seed-1.publickey-3"></a>

####  publicKey

**● publicKey**: *`string`* = "0xce415b82522c8342768e165fceb76167334a903804f14aee214cae8284766c61"

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:24*

___
<a id="test_account_seed-1.seed-3"></a>

####  seed

**● seed**: *`string`* = "0x3cf2ec6ffd26587529ab06c82ba9b33110198085f5c6b8d882653d056bf9e0d3"

*Defined in packages/wallet/src/keyrings/SimpleKeyring.spec.ts:22*

___

___

