[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md) > [IWallet](../interfaces/_cennznet_wallet.iwallet-1.md)

# Interface: IWallet

## Hierarchy

**IWallet**

## Implemented by

* [Wallet](../classes/_cennznet_wallet.wallet.md)

## Index

### Methods

* [isLocked](_cennznet_wallet.iwallet-1.md#islocked)
* [lock](_cennznet_wallet.iwallet-1.md#lock)
* [unlock](_cennznet_wallet.iwallet-1.md#unlock)

---

## Methods

<a id="islocked"></a>

###  isLocked

▸ **isLocked**(): `boolean`

*Defined in packages/wallet/src/types.ts:22*

**Returns:** `boolean`

___
<a id="lock"></a>

###  lock

▸ **lock**(): `Promise`<`void`>

*Defined in packages/wallet/src/types.ts:18*

**Returns:** `Promise`<`void`>

___
<a id="unlock"></a>

###  unlock

▸ **unlock**(password?: *`string`*): `Promise`<`void`>

*Defined in packages/wallet/src/types.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` password | `string` |

**Returns:** `Promise`<`void`>

___

