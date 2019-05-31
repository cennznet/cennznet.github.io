[@cennznet/api](../README.md) > [@cennznet/wallet](../modules/_cennznet_wallet.md) > [KeyringType](../interfaces/_cennznet_wallet.keyringtype-1.md)

# Interface: KeyringType

## Type parameters
#### T 
## Hierarchy

**KeyringType**

## Index

### Constructors

* [constructor](_cennznet_wallet.keyringtype-1.md#constructor)

### Properties

* [name](_cennznet_wallet.keyringtype-1.md#name)

### Methods

* [generate](_cennznet_wallet.keyringtype-1.md#generate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new KeyringType**(data?: *`T`*): [IKeyring](_cennznet_wallet.ikeyring-1.md)<`T`>

*Defined in packages/wallet/src/types.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `T` |

**Returns:** [IKeyring](_cennznet_wallet.ikeyring-1.md)<`T`>

___

## Properties

<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in packages/wallet/src/types.ts:48*

___

## Methods

<a id="generate"></a>

###  generate

▸ **generate**(): `Promise`<[IKeyring](_cennznet_wallet.ikeyring-1.md)<`T`>>

*Defined in packages/wallet/src/types.ts:50*

**Returns:** `Promise`<[IKeyring](_cennznet_wallet.ikeyring-1.md)<`T`>>

___

