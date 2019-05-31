[@cennznet/api](../README.md) > [@cennznet/crml-cennzx-spot](../modules/_cennznet_crml_cennzx_spot.md) > [CennzxSpotRx](../classes/_cennznet_crml_cennzx_spot.cennzxspotrx.md)

# Class: CennzxSpotRx

## Hierarchy

**CennzxSpotRx**

## Index

### Properties

* [api](_cennznet_crml_cennzx_spot.cennzxspotrx.md#api)
* [ga](_cennznet_crml_cennzx_spot.cennzxspotrx.md#ga)
* [getCoreAssetId](_cennznet_crml_cennzx_spot.cennzxspotrx.md#getcoreassetid)
* [getInputPrice](_cennznet_crml_cennzx_spot.cennzxspotrx.md#getinputprice)
* [getLiquidityBalance](_cennznet_crml_cennzx_spot.cennzxspotrx.md#getliquiditybalance)
* [getOutputPrice](_cennznet_crml_cennzx_spot.cennzxspotrx.md#getoutputprice)
* [getTotalLiquidity](_cennznet_crml_cennzx_spot.cennzxspotrx.md#gettotalliquidity)

### Methods

* [addLiquidity](_cennznet_crml_cennzx_spot.cennzxspotrx.md#addliquidity)
* [assetSwapInput](_cennznet_crml_cennzx_spot.cennzxspotrx.md#assetswapinput)
* [assetSwapOutput](_cennznet_crml_cennzx_spot.cennzxspotrx.md#assetswapoutput)
* [assetTransferInput](_cennznet_crml_cennzx_spot.cennzxspotrx.md#assettransferinput)
* [assetTransferOutput](_cennznet_crml_cennzx_spot.cennzxspotrx.md#assettransferoutput)
* [removeLiquidity](_cennznet_crml_cennzx_spot.cennzxspotrx.md#removeliquidity)
* [create](_cennznet_crml_cennzx_spot.cennzxspotrx.md#create)

---

## Properties

<a id="api"></a>

###  api

**● api**: *[ApiRx](_cennznet_api.apirx.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:15*

___
<a id="ga"></a>

###  ga

**● ga**: *[GenericAssetRx](_cennznet_crml_generic_asset.genericassetrx.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:16*

___
<a id="getcoreassetid"></a>

###  getCoreAssetId

**● getCoreAssetId**: *[QueryableStorageFunction](../modules/_plugnet.md#queryablestoragefunction-1)<`Observable`<`AssetId`>, `__type`>*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:75*

Query the core asset id

___
<a id="getinputprice"></a>

###  getInputPrice

**● getInputPrice**: *[QueryablePriceRx](../interfaces/_cennznet_crml_cennzx_spot.queryablepricerx.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:95*

query the price to sell asset of #amount

*__param__*: assetId to sell

*__param__*: assetId to buy

*__param__*: amount of assetSold to sell

___
<a id="getliquiditybalance"></a>

###  getLiquidityBalance

**● getLiquidityBalance**: *[QueryableGetLiquidityBalanceRx](../interfaces/_cennznet_crml_cennzx_spot.queryablegetliquiditybalancerx.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:81*

Query liquidity balance for an account

*__param__*: assetId The id of the asset

*__param__*: The address of the account

___
<a id="getoutputprice"></a>

###  getOutputPrice

**● getOutputPrice**: *[QueryablePriceRx](../interfaces/_cennznet_crml_cennzx_spot.queryablepricerx.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:88*

query the price to buy amountBought asset

*__param__*: assetId to sell

*__param__*: assetId to buy

*__param__*: amount of assetBought to buy

___
<a id="gettotalliquidity"></a>

###  getTotalLiquidity

**● getTotalLiquidity**: *[QueryableTotalLiquidityBalanceRx](../interfaces/_cennznet_crml_cennzx_spot.queryabletotalliquiditybalancerx.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:71*

Query the total liquidity of an exchange pool

*__param__*: 

___

## Methods

<a id="addliquidity"></a>

###  addLiquidity

▸ **addLiquidity**(assetId: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minLiquidity: *[AnyNumber](../modules/_plugnet.md#anynumber)*, maxAssetAmount: *[AnyNumber](../modules/_plugnet.md#anynumber)*, coreAmount: *[AnyNumber](../modules/_plugnet.md#anynumber)*, expire: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:24*

add liquidity

**Parameters:**

| Name | Type |
| ------ | ------ |
| assetId | [AnyNumber](../modules/_plugnet.md#anynumber) |
| minLiquidity | [AnyNumber](../modules/_plugnet.md#anynumber) |
| maxAssetAmount | [AnyNumber](../modules/_plugnet.md#anynumber) |
| coreAmount | [AnyNumber](../modules/_plugnet.md#anynumber) |
| expire | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

___
<a id="assetswapinput"></a>

###  assetSwapInput

▸ **assetSwapInput**(assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountSell: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minReceive: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:57*

Asset 1 to asset 2 swap input

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to sell |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountSell | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount of trade asset 1 to sell |
| minReceive | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

___
<a id="assetswapoutput"></a>

###  assetSwapOutput

▸ **assetSwapOutput**(assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountBought: *[AnyNumber](../modules/_plugnet.md#anynumber)*, maxAmountSold: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:40*

Asset 1 to asset 2 swap output

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to sell |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountBought | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount of asset 2 to buy |
| maxAmountSold | [AnyNumber](../modules/_plugnet.md#anynumber) |  maximum amount of asset 1 allowed to sell |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

___
<a id="assettransferinput"></a>

###  assetTransferInput

▸ **assetTransferInput**(recipient: *[AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress)*, assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountSell: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minReceive: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:66*

Asset 1 to asset 2 transfer input

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| recipient | [AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress) |  The address that receives the output asset |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to sell |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountSell | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount of trade asset to sell |
| minReceive | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

___
<a id="assettransferoutput"></a>

###  assetTransferOutput

▸ **assetTransferOutput**(recipient: *[AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress)*, assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountBought: *[AnyNumber](../modules/_plugnet.md#anynumber)*, maxAmountSold: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:49*

Asset 1 to asset 2 transfer output

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| recipient | [AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress) |  The address that receives the output asset |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to sell |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountBought | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount of asset 2 to buy |
| maxAmountSold | [AnyNumber](../modules/_plugnet.md#anynumber) |  maximum amount of asset allowed to sell |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

___
<a id="removeliquidity"></a>

###  removeLiquidity

▸ **removeLiquidity**(assetId: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetAmount: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minAssetWithdraw: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minCoreAssetWithdraw: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:32*

remove liquidity

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetId | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to remove |
| assetAmount | [AnyNumber](../modules/_plugnet.md#anynumber) |  Amount of exchange asset to burn |
| minAssetWithdraw | [AnyNumber](../modules/_plugnet.md#anynumber) |  The minimum trade asset withdrawn |
| minCoreAssetWithdraw | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Observable`<[SubmittableResult](_plugnet.submittableresult.md)>, `__type`>

___
<a id="create"></a>

### `<Static>` create

▸ **create**(api: *[ApiRx](_cennznet_api.apirx.md)*): `Observable`<[CennzxSpotRx](_cennznet_crml_cennzx_spot.cennzxspotrx.md)>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpotRx.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiRx](_cennznet_api.apirx.md) |

**Returns:** `Observable`<[CennzxSpotRx](_cennznet_crml_cennzx_spot.cennzxspotrx.md)>

___

