[@cennznet/api](../README.md) > [@cennznet/crml-generic-asset](../modules/_cennznet_crml_generic_asset.md) > [GenericAssetRx](../classes/_cennznet_crml_generic_asset.genericassetrx.md)

# Class: GenericAssetRx

## Hierarchy

**GenericAssetRx**

## Index

### Constructors

* [constructor](_cennznet_crml_generic_asset.genericassetrx.md#constructor)

### Properties

* [api](_cennznet_crml_generic_asset.genericassetrx.md#api)
* [getFreeBalance](_cennznet_crml_generic_asset.genericassetrx.md#getfreebalance)
* [getNextAssetId](_cennznet_crml_generic_asset.genericassetrx.md#getnextassetid)
* [getReservedBalance](_cennznet_crml_generic_asset.genericassetrx.md#getreservedbalance)
* [getTotalBalance](_cennznet_crml_generic_asset.genericassetrx.md#gettotalbalance)
* [getTotalIssuance](_cennznet_crml_generic_asset.genericassetrx.md#gettotalissuance)

### Methods

* [create](_cennznet_crml_generic_asset.genericassetrx.md#create)
* [transfer](_cennznet_crml_generic_asset.genericassetrx.md#transfer)
* [create](_cennznet_crml_generic_asset.genericassetrx.md#create-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericAssetRx**(api: *[ApiRx](_cennznet_api.apirx.md)*): [GenericAssetRx](_cennznet_crml_generic_asset.genericassetrx.md)

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiRx](_cennznet_api.apirx.md) |

**Returns:** [GenericAssetRx](_cennznet_crml_generic_asset.genericassetrx.md)

___

## Properties

<a id="api"></a>

###  api

**● api**: *[ApiRx](_cennznet_api.apirx.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:13*

___
<a id="getfreebalance"></a>

###  getFreeBalance

**● getFreeBalance**: *[QueryableGetBalanceRx](../interfaces/_cennznet_crml_generic_asset.queryablegetbalancerx.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:41*

Query free balance of an asset for an account

*__param__*: The id or symbol (for reserved asset) of the asset

*__param__*: The address of the account

___
<a id="getnextassetid"></a>

###  getNextAssetId

**● getNextAssetId**: *[QueryableStorageFunction](../modules/_plugnet.md#queryablestoragefunction-1)<`Observable`<[EnhancedAssetId](_cennznet_crml_generic_asset.enhancedassetid.md)>, `__type`>*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:29*

Query the next available asset ID

___
<a id="getreservedbalance"></a>

###  getReservedBalance

**● getReservedBalance**: *[QueryableGetBalanceRx](../interfaces/_cennznet_crml_generic_asset.queryablegetbalancerx.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:47*

Query reserved balance of an asset for an account

*__param__*: The id or symbol (for reserved asset) of the asset

*__param__*: The address of the account

___
<a id="gettotalbalance"></a>

###  getTotalBalance

**● getTotalBalance**: *[QueryableGetBalance](../interfaces/_cennznet_crml_generic_asset.queryablegetbalance.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:53*

Query total balance of an asset for an account

*__param__*: The id or symbol (for reserved asset) of the asset

*__param__*: The address of the account

___
<a id="gettotalissuance"></a>

###  getTotalIssuance

**● getTotalIssuance**: *[QueryableStorageFunction](../modules/_plugnet.md#queryablestoragefunction-1)<`Observable`<`BN`>, `__type`>*

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:35*

Query the total issuance of an asset

*__returns__*: a QueryableStorageFunction that needs a argument assetId

*__param__*: id or symbol (for reserved asset) of the asset

___

## Methods

<a id="create"></a>

###  create

▸ **create**(options: *[IAssetOptions](../interfaces/_cennznet_crml_generic_asset.iassetoptions.md)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `Observable`<`__type`>>

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:18*

Create an asset

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [IAssetOptions](../interfaces/_cennznet_crml_generic_asset.iassetoptions.md) |  Initialization options of an asset |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `Observable`<`__type`>>

___
<a id="transfer"></a>

###  transfer

▸ **transfer**(assetId: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, dest: *[AnyAddress](../modules/_cennznet_crml_generic_asset.md#anyaddress)*, amount: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `Observable`<[Codec](../interfaces/_plugnet.codec.md)>>

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:25*

Transfer asset to the destination account

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetId | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The id or symbol (for reserved asset) of the transferred asset |
| dest | [AnyAddress](../modules/_cennznet_crml_generic_asset.md#anyaddress) |  The address of the destination account |
| amount | [AnyNumber](../modules/_plugnet.md#anynumber) |  The amount to be transferred |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `Observable`<[Codec](../interfaces/_plugnet.codec.md)>>

___
<a id="create-1"></a>

### `<Static>` create

▸ **create**(api: *[ApiRx](_cennznet_api.apirx.md)*): `Observable`<[GenericAssetRx](_cennznet_crml_generic_asset.genericassetrx.md)>

*Defined in node_modules/@cennznet/crml-generic-asset/GenericAssetRx.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiRx](_cennznet_api.apirx.md) |

**Returns:** `Observable`<[GenericAssetRx](_cennznet_crml_generic_asset.genericassetrx.md)>

___

