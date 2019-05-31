[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Signer](../interfaces/_plugnet.signer.md)

# Interface: Signer

## Hierarchy

**Signer**

## Implemented by

* [Wallet](../classes/_cennznet_wallet.wallet-1.md)
* [Wallet](../classes/_cennznet_wallet.wallet.md)

## Index

### Properties

* [update](_plugnet.signer.md#update)

### Methods

* [sign](_plugnet.signer.md#sign)

---

## Properties

<a id="update"></a>

### `<Optional>` update

**● update**: *`function`*

*Defined in node_modules/@plugnet/api/types.d.ts:132*

*__description__*: Receives an update for the extrinsic signed by a `signer.sign`

#### Type declaration
▸(id: *`number`*, status: *[Hash](../classes/_plugnet.hash.md) \| [SubmittableResult](../classes/_plugnet.submittableresult.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `number` |
| status | [Hash](../classes/_plugnet.hash.md) \| [SubmittableResult](../classes/_plugnet.submittableresult.md) |

**Returns:** `void`

___

## Methods

<a id="sign"></a>

###  sign

▸ **sign**(extrinsic: *[IExtrinsic](_plugnet.iextrinsic.md)*, address: *`string`*, options: *[SignatureOptions](../modules/_plugnet.md#signatureoptions)*): `Promise`<`number`>

*Defined in node_modules/@plugnet/api/types.d.ts:128*

*__description__*: Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsic | [IExtrinsic](_plugnet.iextrinsic.md) |
| address | `string` |
| options | [SignatureOptions](../modules/_plugnet.md#signatureoptions) |

**Returns:** `Promise`<`number`>

___

