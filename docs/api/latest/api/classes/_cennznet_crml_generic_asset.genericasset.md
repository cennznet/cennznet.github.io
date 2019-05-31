[@cennznet/api](../README.md) > [@cennznet/crml-generic-asset](../modules/_cennznet_crml_generic_asset.md) > [GenericAsset](../classes/_cennznet_crml_generic_asset.genericasset.md)

# Class: GenericAsset

## Hierarchy

**GenericAsset**

## Index

### Constructors

* [constructor](_cennznet_crml_generic_asset.genericasset.md#constructor)

### Properties

* [api](_cennznet_crml_generic_asset.genericasset.md#api)
* [getFreeBalance](_cennznet_crml_generic_asset.genericasset.md#getfreebalance)
* [getNextAssetId](_cennznet_crml_generic_asset.genericasset.md#getnextassetid)
* [getReservedBalance](_cennznet_crml_generic_asset.genericasset.md#getreservedbalance)
* [getTotalBalance](_cennznet_crml_generic_asset.genericasset.md#gettotalbalance)
* [getTotalIssuance](_cennznet_crml_generic_asset.genericasset.md#gettotalissuance)

### Methods

* [create](_cennznet_crml_generic_asset.genericasset.md#create)
* [transfer](_cennznet_crml_generic_asset.genericasset.md#transfer)
* [create](_cennznet_crml_generic_asset.genericasset.md#create-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericAsset**(api: *[Api](_cennznet_api.api-1.md)*): [GenericAsset](_cennznet_crml_generic_asset.genericasset.md)

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [Api](_cennznet_api.api-1.md) |

**Returns:** [GenericAsset](_cennznet_crml_generic_asset.genericasset.md)

___

## Properties

<a id="api"></a>

###  api

**● api**: *[Api](_cennznet_api.api-1.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:12*

___
<a id="getfreebalance"></a>

###  getFreeBalance

**● getFreeBalance**: *[QueryableGetBalance](../interfaces/_cennznet_crml_generic_asset.queryablegetbalance.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:40*

Query free balance of an asset for an account

*__param__*: The id or symbol (for reserved asset) of the asset

*__param__*: The address of the account

___
<a id="getnextassetid"></a>

###  getNextAssetId

**● getNextAssetId**: *[QueryableStorageFunction](../modules/_plugnet.md#queryablestoragefunction-1)<`Promise`<[EnhancedAssetId](_cennznet_crml_generic_asset.enhancedassetid.md)>, `Promise`<`function`>>*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:28*

Query the next available asset ID

___
<a id="getreservedbalance"></a>

###  getReservedBalance

**● getReservedBalance**: *[QueryableGetBalance](../interfaces/_cennznet_crml_generic_asset.queryablegetbalance.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:46*

Query reserved balance of an asset for an account

*__param__*: The id or symbol (for reserved asset) of the asset

*__param__*: The address of the account

___
<a id="gettotalbalance"></a>

###  getTotalBalance

**● getTotalBalance**: *[QueryableGetBalance](../interfaces/_cennznet_crml_generic_asset.queryablegetbalance.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:52*

Query total balance of an asset for an account

*__param__*: The id or symbol (for reserved asset) of the asset

*__param__*: The address of the account

___
<a id="gettotalissuance"></a>

###  getTotalIssuance

**● getTotalIssuance**: *[QueryableStorageFunction](../modules/_plugnet.md#queryablestoragefunction-1)<`Promise`<`BN`>, `Promise`<`function`>>*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:34*

Query the total issuance of an asset

*__returns__*: a QueryableStorageFunction that needs a argument assetId

*__param__*: id or symbol (for reserved asset) of the asset

___

## Methods

<a id="create"></a>

###  create

▸ **create**(options: *[IAssetOptions](../interfaces/_cennznet_crml_generic_asset.iassetoptions.md)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[Hash](_plugnet.hash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:17*

Create an asset

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [IAssetOptions](../interfaces/_cennznet_crml_generic_asset.iassetoptions.md) |  Initialization options of an asset |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[Hash](_plugnet.hash.md)>, `Promise`<`function`>>

___
<a id="transfer"></a>

###  transfer

▸ **transfer**(assetId: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, dest: *[AnyAddress](../modules/_cennznet_crml_generic_asset.md#anyaddress)*, amount: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[Hash](_plugnet.hash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:24*

Transfer asset to the destination account

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetId | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The id or symbol (for reserved asset) of the transferred asset |
| dest | [AnyAddress](../modules/_cennznet_crml_generic_asset.md#anyaddress) |  The address of the destination account |
| amount | [AnyNumber](../modules/_plugnet.md#anynumber) |  The amount to be transferred |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[Hash](_plugnet.hash.md)>, `Promise`<`function`>>

___
<a id="create-1"></a>

### `<Static>` create

▸ **create**(api: *[Api](_cennznet_api.api-1.md)*): `Promise`<[GenericAsset](_cennznet_crml_generic_asset.genericasset.md)>

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAsset.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [Api](_cennznet_api.api-1.md) |

**Returns:** `Promise`<[GenericAsset](_cennznet_crml_generic_asset.genericasset.md)>

___

