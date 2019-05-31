[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md) > [IKeyring](../interfaces/_cennznet_wallet.ikeyring-1.md)

# Interface: IKeyring

## Type parameters
#### S 
## Hierarchy

**IKeyring**

## Implemented by

* [HDKeyring](../classes/_cennznet_wallet.hdkeyring.md)
* [SimpleKeyring](../classes/_cennznet_wallet.simplekeyring.md)

## Index

### Methods

* [addPair](_cennznet_wallet.ikeyring-1.md#addpair)
* [deserialize](_cennznet_wallet.ikeyring-1.md#deserialize)
* [getAddresses](_cennznet_wallet.ikeyring-1.md#getaddresses)
* [getPair](_cennznet_wallet.ikeyring-1.md#getpair)
* [getPairs](_cennznet_wallet.ikeyring-1.md#getpairs)
* [removePair](_cennznet_wallet.ikeyring-1.md#removepair)
* [serialize](_cennznet_wallet.ikeyring-1.md#serialize)

---

## Methods

<a id="addpair"></a>

###  addPair

▸ **addPair**(): `Promise`<[KeyringPair](_cennznet_util.keyringpair.md)>

*Defined in packages/wallet/src/types.ts:44*

**Returns:** `Promise`<[KeyringPair](_cennznet_util.keyringpair.md)>

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(obj: *`S`*): `Promise`<`this`>

*Defined in packages/wallet/src/types.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `S` |

**Returns:** `Promise`<`this`>

___
<a id="getaddresses"></a>

###  getAddresses

▸ **getAddresses**(): `Promise`<`string`[]>

*Defined in packages/wallet/src/types.ts:40*

**Returns:** `Promise`<`string`[]>

___
<a id="getpair"></a>

###  getPair

▸ **getPair**(address: *`string`*): `Promise`<[KeyringPair](_cennznet_util.keyringpair.md)>

*Defined in packages/wallet/src/types.ts:36*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<[KeyringPair](_cennznet_util.keyringpair.md)>

___
<a id="getpairs"></a>

###  getPairs

▸ **getPairs**(): `Promise`<[KeyringPair](_cennznet_util.keyringpair.md)[]>

*Defined in packages/wallet/src/types.ts:38*

**Returns:** `Promise`<[KeyringPair](_cennznet_util.keyringpair.md)[]>

___
<a id="removepair"></a>

###  removePair

▸ **removePair**(address: *`string`*): `Promise`<`void`>

*Defined in packages/wallet/src/types.ts:42*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `Promise`<`void`>

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `Promise`<`S`>

*Defined in packages/wallet/src/types.ts:32*

**Returns:** `Promise`<`S`>

___

