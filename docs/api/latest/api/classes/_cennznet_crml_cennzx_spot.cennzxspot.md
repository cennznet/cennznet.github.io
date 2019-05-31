[@cennznet/api](../README.md) > [@cennznet/crml-cennzx-spot](../modules/_cennznet_crml_cennzx_spot.md) > [CennzxSpot](../classes/_cennznet_crml_cennzx_spot.cennzxspot.md)

# Class: CennzxSpot

## Hierarchy

**CennzxSpot**

## Index

### Constructors

* [constructor](_cennznet_crml_cennzx_spot.cennzxspot.md#constructor)

### Properties

* [api](_cennznet_crml_cennzx_spot.cennzxspot.md#api)
* [ga](_cennznet_crml_cennzx_spot.cennzxspot.md#ga)
* [getCoreAssetId](_cennznet_crml_cennzx_spot.cennzxspot.md#getcoreassetid)
* [getInputPrice](_cennznet_crml_cennzx_spot.cennzxspot.md#getinputprice)
* [getLiquidityBalance](_cennznet_crml_cennzx_spot.cennzxspot.md#getliquiditybalance)
* [getOutputPrice](_cennznet_crml_cennzx_spot.cennzxspot.md#getoutputprice)
* [getTotalLiquidity](_cennznet_crml_cennzx_spot.cennzxspot.md#gettotalliquidity)

### Methods

* [addLiquidity](_cennznet_crml_cennzx_spot.cennzxspot.md#addliquidity)
* [assetSwapInput](_cennznet_crml_cennzx_spot.cennzxspot.md#assetswapinput)
* [assetSwapOutput](_cennznet_crml_cennzx_spot.cennzxspot.md#assetswapoutput)
* [assetTransferInput](_cennznet_crml_cennzx_spot.cennzxspot.md#assettransferinput)
* [assetTransferOutput](_cennznet_crml_cennzx_spot.cennzxspot.md#assettransferoutput)
* [removeLiquidity](_cennznet_crml_cennzx_spot.cennzxspot.md#removeliquidity)
* [create](_cennznet_crml_cennzx_spot.cennzxspot.md#create)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CennzxSpot**(api: *[Api](_cennznet_api.api-1.md)*, ga?: *[GenericAsset](_cennznet_crml_generic_asset.genericasset.md)*): [CennzxSpot](_cennznet_crml_cennzx_spot.cennzxspot.md)

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [Api](_cennznet_api.api-1.md) |
| `Optional` ga | [GenericAsset](_cennznet_crml_generic_asset.genericasset.md) |

**Returns:** [CennzxSpot](_cennznet_crml_cennzx_spot.cennzxspot.md)

___

## Properties

<a id="api"></a>

###  api

**● api**: *[Api](_cennznet_api.api-1.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:13*

___
<a id="ga"></a>

###  ga

**● ga**: *[GenericAsset](_cennznet_crml_generic_asset.genericasset.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:14*

___
<a id="getcoreassetid"></a>

###  getCoreAssetId

**● getCoreAssetId**: *[QueryableStorageFunction](../modules/_plugnet.md#queryablestoragefunction-1)<`Promise`<`AssetId`>, `Promise`<`function`>>*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:87*

Query the core asset id

___
<a id="getinputprice"></a>

###  getInputPrice

**● getInputPrice**: *[QueryablePrice](../interfaces/_cennznet_crml_cennzx_spot.queryableprice.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:78*

query the price to sell asset of #amount

*__param__*: assetId to sell

*__param__*: assetId to buy

*__param__*: amount of assetSold to sell

___
<a id="getliquiditybalance"></a>

###  getLiquidityBalance

**● getLiquidityBalance**: *[QueryableGetLiquidityBalance](../interfaces/_cennznet_crml_cennzx_spot.queryablegetliquiditybalance.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:93*

Query liquidity balance for an account

*__param__*: The id of the asset

*__param__*: The address of the account

___
<a id="getoutputprice"></a>

###  getOutputPrice

**● getOutputPrice**: *[QueryablePrice](../interfaces/_cennznet_crml_cennzx_spot.queryableprice.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:71*

query the price to buy amountBought asset

*__param__*: assetId to sell

*__param__*: assetId to buy

*__param__*: amount of assetBought to buy

___
<a id="gettotalliquidity"></a>

###  getTotalLiquidity

**● getTotalLiquidity**: *[QueryableTotalLiquidityBalance](../interfaces/_cennznet_crml_cennzx_spot.queryabletotalliquiditybalance.md)*

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:83*

Query the total liquidity of an exchange pool

*__param__*: 

___

## Methods

<a id="addliquidity"></a>

###  addLiquidity

▸ **addLiquidity**(assetId: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, minLiquidity: *[AnyNumber](../modules/_plugnet.md#anynumber)*, maxAssetAmount: *[AnyNumber](../modules/_plugnet.md#anynumber)*, coreAmount: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:22*

add liquidity

**Parameters:**

| Name | Type |
| ------ | ------ |
| assetId | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| minLiquidity | [AnyNumber](../modules/_plugnet.md#anynumber) |
| maxAssetAmount | [AnyNumber](../modules/_plugnet.md#anynumber) |
| coreAmount | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

___
<a id="assetswapinput"></a>

###  assetSwapInput

▸ **assetSwapInput**(assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountSell: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minReceive: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:55*

Sell AssetSold and gain AssetBought as payback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to sell |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountSell | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount of trade asset 1 to sell |
| minReceive | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

___
<a id="assetswapoutput"></a>

###  assetSwapOutput

▸ **assetSwapOutput**(assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountBought: *[AnyNumber](../modules/_plugnet.md#anynumber)*, maxAmountSold: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:38*

Buy AssetBought using AssetSold

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to pay with |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountBought | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount to buy |
| maxAmountSold | [AnyNumber](../modules/_plugnet.md#anynumber) |  maximum amount to pay |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

___
<a id="assettransferinput"></a>

###  assetTransferInput

▸ **assetTransferInput**(recipient: *[AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress)*, assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountSell: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minReceive: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:64*

Sell AssetSold, gain AssetBought as payback then transfer to recipient

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| recipient | [AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress) |  The address that receives the output asset |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to sell |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountSell | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount of trade asset to sell |
| minReceive | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

___
<a id="assettransferoutput"></a>

###  assetTransferOutput

▸ **assetTransferOutput**(recipient: *[AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress)*, assetSold: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetBought: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, amountBought: *[AnyNumber](../modules/_plugnet.md#anynumber)*, maxAmountSold: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:47*

Buy AssetBought using AssetSold and transfer AssetBought to recipient

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| recipient | [AnyAddress](../modules/_cennznet_crml_cennzx_spot.md#anyaddress) |  The address that receives the output asset |
| assetSold | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to sell |
| assetBought | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |
| amountBought | [AnyNumber](../modules/_plugnet.md#anynumber) |  amount of asset 2 to buy |
| maxAmountSold | [AnyNumber](../modules/_plugnet.md#anynumber) |  maximum amount of asset allowed to sell |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

___
<a id="removeliquidity"></a>

###  removeLiquidity

▸ **removeLiquidity**(assetId: *[AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid)*, assetAmount: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minAssetWithdraw: *[AnyNumber](../modules/_plugnet.md#anynumber)*, minCoreAssetWithdraw: *[AnyNumber](../modules/_plugnet.md#anynumber)*): [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:30*

remove liquidity

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| assetId | [AnyAssetId](../modules/_cennznet_crml_generic_asset.md#anyassetid) |  The asset to remove |
| assetAmount | [AnyNumber](../modules/_plugnet.md#anynumber) |  Amount of exchange asset to burn |
| minAssetWithdraw | [AnyNumber](../modules/_plugnet.md#anynumber) |  The minimum trade asset withdrawn |
| minCoreAssetWithdraw | [AnyNumber](../modules/_plugnet.md#anynumber) |

**Returns:** [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)<`Promise`<[IHash](../interfaces/_plugnet.ihash.md)>, `Promise`<`function`>>

___
<a id="create"></a>

### `<Static>` create

▸ **create**(api: *[Api](_cennznet_api.api-1.md)*): `Promise`<[CennzxSpot](_cennznet_crml_cennzx_spot.cennzxspot.md)>

*Defined in node_modules/@cennznet/crml-cennzx-spot/CennzxSpot.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [Api](_cennznet_api.api-1.md) |

**Returns:** `Promise`<[CennzxSpot](_cennznet_crml_cennzx_spot.cennzxspot.md)>

___

