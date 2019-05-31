[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md) > [Wallet](../classes/_cennznet_wallet.wallet.md)

# Class: Wallet

a Wallet implementation which can be used as signer in cennznet-api support multi-keyring and shipped with a HD Keyring as default keyring type.

## Hierarchy

**Wallet**

## Implements

* [Signer](../interfaces/_plugnet.signer.md)
* [IWallet](../interfaces/_cennznet_wallet.iwallet-1.md)

## Index

### Constructors

* [constructor](_cennznet_wallet.wallet.md#constructor)

### Properties

* [vault](_cennznet_wallet.wallet.md#vault)

### Accessors

* [defaultKeyringType](_cennznet_wallet.wallet.md#defaultkeyringtype)

### Methods

* [addAccount](_cennznet_wallet.wallet.md#addaccount)
* [addKeyring](_cennznet_wallet.wallet.md#addkeyring)
* [createNewVault](_cennznet_wallet.wallet.md#createnewvault)
* [createNewVaultAndRestore](_cennznet_wallet.wallet.md#createnewvaultandrestore)
* [export](_cennznet_wallet.wallet.md#export)
* [exportAccount](_cennznet_wallet.wallet.md#exportaccount)
* [getAddresses](_cennznet_wallet.wallet.md#getaddresses)
* [isLocked](_cennznet_wallet.wallet.md#islocked)
* [lock](_cennznet_wallet.wallet.md#lock)
* [removeAccount](_cennznet_wallet.wallet.md#removeaccount)
* [sign](_cennznet_wallet.wallet.md#sign)
* [unlock](_cennznet_wallet.wallet.md#unlock)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Wallet**(option?: *[WalletOption](../interfaces/_cennznet_wallet.walletoption.md)*): [Wallet](_cennznet_wallet.wallet.md)

*Defined in packages/wallet/src/Wallet.ts:71*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` option | [WalletOption](../interfaces/_cennznet_wallet.walletoption.md) |  {} |

**Returns:** [Wallet](_cennznet_wallet.wallet.md)

___

## Properties

<a id="vault"></a>

###  vault

**● vault**: *`string`*

*Defined in packages/wallet/src/Wallet.ts:60*

___

## Accessors

<a id="defaultkeyringtype"></a>

###  defaultKeyringType

**get defaultKeyringType**(): [KeyringType](../interfaces/_cennznet_wallet.keyringtype-1.md)<`any`>

*Defined in packages/wallet/src/Wallet.ts:69*

**Returns:** [KeyringType](../interfaces/_cennznet_wallet.keyringtype-1.md)<`any`>
the constructor of default keyring

___

## Methods

<a id="addaccount"></a>

###  addAccount

▸ **addAccount**(): `Promise`<`string`>

*Defined in packages/wallet/src/Wallet.ts:208*

generate a new account using default keyring and add it into wallet

*__requires__*: wallet unlocked

**Returns:** `Promise`<`string`>
address of the new generated account

___
<a id="addkeyring"></a>

###  addKeyring

▸ **addKeyring**(keyring: *[IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)<`any`>*): `Promise`<`void`>

*Defined in packages/wallet/src/Wallet.ts:249*

add a keyring instance along with all key pairs in it. addresses already exist in the wallet will be removed from the keyring before it's been added it will be cloned to lose reference to the original keyring

*__requires__*: wallet unlocked

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| keyring | [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)<`any`> |  \- |

**Returns:** `Promise`<`void`>

___
<a id="createnewvault"></a>

###  createNewVault

▸ **createNewVault**(passphrase: *`string`*): `Promise`<`void`>

*Defined in packages/wallet/src/Wallet.ts:103*

erase the current wallet instance and create a new one with default keyring.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| passphrase | `string` |  for the new created wallet. |

**Returns:** `Promise`<`void`>

___
<a id="createnewvaultandrestore"></a>

###  createNewVaultAndRestore

▸ **createNewVaultAndRestore**(passphrase: *`string`*, keyrings: *[IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)<`any`>[]*): `Promise`<`void`>

*Defined in packages/wallet/src/Wallet.ts:115*

erase the current wallet instance and create a new one with given keyrings.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| passphrase | `string` |  for the new created wallet. |
| keyrings | [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)<`any`>[] |

**Returns:** `Promise`<`void`>

___
<a id="export"></a>

###  export

▸ **export**(passphrase: *`string`*): `Promise`<[SerializedWallet](../modules/_cennznet_wallet.md#serializedwallet-1)>

*Defined in packages/wallet/src/Wallet.ts:169*

export all keyrings in the wallet

*__requires__*: wallet unlocked

*__throw__*: when passphrase is wrong

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| passphrase | `string` |  \- |

**Returns:** `Promise`<[SerializedWallet](../modules/_cennznet_wallet.md#serializedwallet-1)>

___
<a id="exportaccount"></a>

###  exportAccount

▸ **exportAccount**(address: *`string`*, passphrase: *`string`*): `Promise`<[KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)>

*Defined in packages/wallet/src/Wallet.ts:187*

export the specified account in a json format which can be re-imported via SimpleKeyring's addFromJson()

*__requires__*: wallet unlocked

*__throw__*: when passphrase is wrong

*__throw__*: when account doesn't exist

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  \- |
| passphrase | `string` |  \- |

**Returns:** `Promise`<[KeyringPair$Json](../modules/_plugnet.md#keyringpair_json)>

___
<a id="getaddresses"></a>

###  getAddresses

▸ **getAddresses**(): `Promise`<`string`[]>

*Defined in packages/wallet/src/Wallet.ts:235*

*__requires__*: wallet unlocked

**Returns:** `Promise`<`string`[]>
all addresses managed by this wallet

___
<a id="islocked"></a>

###  isLocked

▸ **isLocked**(): `boolean`

*Implementation of [IWallet](../interfaces/_cennznet_wallet.iwallet-1.md).[isLocked](../interfaces/_cennznet_wallet.iwallet-1.md#islocked)*

*Defined in packages/wallet/src/Wallet.ts:196*

**Returns:** `boolean`
the lock status

___
<a id="lock"></a>

###  lock

▸ **lock**(): `Promise`<`void`>

*Implementation of [IWallet](../interfaces/_cennznet_wallet.iwallet-1.md).[lock](../interfaces/_cennznet_wallet.iwallet-1.md#lock)*

*Defined in packages/wallet/src/Wallet.ts:127*

erase in-memory keyrings data and forbid any operation which read/write keyrings

**Returns:** `Promise`<`void`>

___
<a id="removeaccount"></a>

###  removeAccount

▸ **removeAccount**(address: *`string`*): `Promise`<`void`>

*Defined in packages/wallet/src/Wallet.ts:224*

remove the spedified account from wallet

*__requires__*: wallet unlocked

*__throws__*: when the account is not managed by this wallet

*__throws__*: when the account is managed by a hd keyring

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  \- |

**Returns:** `Promise`<`void`>

___
<a id="sign"></a>

###  sign

▸ **sign**(extrinsic: *[IExtrinsic](../interfaces/_plugnet.iextrinsic.md)*, address: *`string`*, options: *[SignatureOptions](../modules/_plugnet.md#signatureoptions)*): `Promise`<`number`>

*Implementation of [Signer](../interfaces/_plugnet.signer.md).[sign](../interfaces/_plugnet.signer.md#sign)*

*Defined in packages/wallet/src/Wallet.ts:90*

sign a extrinsic using the account specified by opt.from

*__requires__*: wallet unlocked

*__throws__*: when the account(opt.from) is not managed by the wallet.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| extrinsic | [IExtrinsic](../interfaces/_plugnet.iextrinsic.md) |  \- |
| address | `string` |
| options | [SignatureOptions](../modules/_plugnet.md#signatureoptions) |

**Returns:** `Promise`<`number`>

___
<a id="unlock"></a>

###  unlock

▸ **unlock**(passphrase: *`string`*): `Promise`<`void`>

*Implementation of [IWallet](../interfaces/_cennznet_wallet.iwallet-1.md).[unlock](../interfaces/_cennznet_wallet.iwallet-1.md#unlock)*

*Defined in packages/wallet/src/Wallet.ts:139*

unlock the wallet

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| passphrase | `string` |   |

**Returns:** `Promise`<`void`>

___

