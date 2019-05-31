[@cennznet/api](../README.md) > [@cennznet/crml-cennzx-spot](../modules/_cennznet_crml_cennzx_spot.md)

# Package: @cennznet/crml-cennzx-spot

## Index

### Classes

* [CennzxSpot](../classes/_cennznet_crml_cennzx_spot.cennzxspot.md)
* [CennzxSpotRx](../classes/_cennznet_crml_cennzx_spot.cennzxspotrx.md)

### Interfaces

* [QueryableGetLiquidityBalance](../interfaces/_cennznet_crml_cennzx_spot.queryablegetliquiditybalance.md)
* [QueryableGetLiquidityBalanceRx](../interfaces/_cennznet_crml_cennzx_spot.queryablegetliquiditybalancerx.md)
* [QueryablePrice](../interfaces/_cennznet_crml_cennzx_spot.queryableprice.md)
* [QueryablePriceRx](../interfaces/_cennznet_crml_cennzx_spot.queryablepricerx.md)
* [QueryableTotalLiquidityBalance](../interfaces/_cennznet_crml_cennzx_spot.queryabletotalliquiditybalance.md)
* [QueryableTotalLiquidityBalanceRx](../interfaces/_cennznet_crml_cennzx_spot.queryabletotalliquiditybalancerx.md)

### Type aliases

* [AnyAddress](_cennznet_crml_cennzx_spot.md#anyaddress)

### Variables

* [PERMILL_BASE](_cennznet_crml_cennzx_spot.md#permill_base)
* [_default](_cennznet_crml_cennzx_spot.md#_default)

### Functions

* [exchangeAddress](_cennznet_crml_cennzx_spot.md#exchangeaddress)
* [generateExchangeAddress](_cennznet_crml_cennzx_spot.md#generateexchangeaddress)
* [generateStorageDoubleMapKey](_cennznet_crml_cennzx_spot.md#generatestoragedoublemapkey)
* [getExchangeKey](_cennznet_crml_cennzx_spot.md#getexchangekey)
* [getInputPrice](_cennznet_crml_cennzx_spot.md#getinputprice)
* [getOutputPrice](_cennznet_crml_cennzx_spot.md#getoutputprice)
* [inputPrice](_cennznet_crml_cennzx_spot.md#inputprice)
* [inputPriceAt](_cennznet_crml_cennzx_spot.md#inputpriceat)
* [liquidityBalance](_cennznet_crml_cennzx_spot.md#liquiditybalance)
* [liquidityBalanceAt](_cennznet_crml_cennzx_spot.md#liquiditybalanceat)
* [outputPrice](_cennznet_crml_cennzx_spot.md#outputprice)
* [outputPriceAt](_cennznet_crml_cennzx_spot.md#outputpriceat)
* [totalLiquidity](_cennznet_crml_cennzx_spot.md#totalliquidity)
* [totalLiquidityAt](_cennznet_crml_cennzx_spot.md#totalliquidityat)

---

## Type aliases

<a id="anyaddress"></a>

###  AnyAddress

**Ƭ AnyAddress**: *`BN` \| [Address](../classes/_plugnet.address.md) \| [AccountId](../classes/_plugnet.accountid.md) \| [AccountIndex](../classes/_plugnet.accountindex.md) \| `Array`<`number`> \| `Uint8Array` \| `number` \| `string`*

*Defined in node_modules/@cennznet/crml-cennzx-spot/types.d.ts:6*

___

## Variables

<a id="permill_base"></a>

### `<Const>` PERMILL_BASE

**● PERMILL_BASE**: *`1000000`* = 1000000

*Defined in node_modules/@cennznet/crml-cennzx-spot/constants.d.ts:1*

___
<a id="_default"></a>

### `<Const>` _default

**● _default**: *`object`*

*Defined in node_modules/@cennznet/crml-cennzx-spot/plugin.d.ts:4*

#### Type declaration

 derives: `object`

 cennzxSpot: `"/Users/moge/Workspace/centrality/cennznet/cennznet-js/node_modules/@cennznet/crml-cennzx-spot/derives/index"`

 injectName: `string`

 sdkClass: [CennzxSpot](../classes/_cennznet_crml_cennzx_spot.cennzxspot.md)

 sdkRxClass: [CennzxSpotRx](../classes/_cennznet_crml_cennzx_spot.cennzxspotrx.md)

 types: `__type`

___

## Functions

<a id="exchangeaddress"></a>

###  exchangeAddress

▸ **exchangeAddress**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/exchangeAddress.d.ts:4*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="generateexchangeaddress"></a>

###  generateExchangeAddress

▸ **generateExchangeAddress**(coreAssetId: *[AnyNumber](_plugnet.md#anynumber) \| `AssetId`*, assetId: *[AnyNumber](_plugnet.md#anynumber) \| `AssetId`*): `string`

*Defined in node_modules/@cennznet/crml-cennzx-spot/utils/utils.d.ts:12*

Generate the key of the balance storage

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| coreAssetId | [AnyNumber](_plugnet.md#anynumber) \| `AssetId` |
| assetId | [AnyNumber](_plugnet.md#anynumber) \| `AssetId` |  \- |

**Returns:** `string`

___
<a id="generatestoragedoublemapkey"></a>

###  generateStorageDoubleMapKey

▸ **generateStorageDoubleMapKey**(prefixString: *`string`*, key1: *[Codec](../interfaces/_plugnet.codec.md)*, key2: *[Codec](../interfaces/_plugnet.codec.md)*): `string`

*Defined in node_modules/@cennznet/crml-cennzx-spot/utils/utils.d.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefixString | `string` |
| key1 | [Codec](../interfaces/_plugnet.codec.md) |
| key2 | [Codec](../interfaces/_plugnet.codec.md) |

**Returns:** `string`

___
<a id="getexchangekey"></a>

###  getExchangeKey

▸ **getExchangeKey**(coreAssetId: *[AnyAssetId](_cennznet_crml_generic_asset.md#anyassetid)*, assetId: *`AssetId` \| [AnyNumber](_plugnet.md#anynumber)*): [Codec](../interfaces/_plugnet.codec.md)

*Defined in node_modules/@cennznet/crml-cennzx-spot/utils/utils.d.ts:18*

create exchange key

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| coreAssetId | [AnyAssetId](_cennznet_crml_generic_asset.md#anyassetid) |  \- |
| assetId | `AssetId` \| [AnyNumber](_plugnet.md#anynumber) |   |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

___
<a id="getinputprice"></a>

###  getInputPrice

▸ **getInputPrice**(inputAmount: *`BN`*, inputReserve: *`BN`*, outputReserve: *`BN`*, feeRate: *[Permill](../classes/_plugnet.permill.md)*): `BN`

*Defined in node_modules/@cennznet/crml-cennzx-spot/utils/utils.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inputAmount | `BN` |
| inputReserve | `BN` |
| outputReserve | `BN` |
| feeRate | [Permill](../classes/_plugnet.permill.md) |

**Returns:** `BN`

___
<a id="getoutputprice"></a>

###  getOutputPrice

▸ **getOutputPrice**(outputAmount: *`BN`*, inputReserve: *`BN`*, outputReserve: *`BN`*, feeRate: *[Permill](../classes/_plugnet.permill.md)*): `BN`

*Defined in node_modules/@cennznet/crml-cennzx-spot/utils/utils.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| outputAmount | `BN` |
| inputReserve | `BN` |
| outputReserve | `BN` |
| feeRate | [Permill](../classes/_plugnet.permill.md) |

**Returns:** `BN`

___
<a id="inputprice"></a>

###  inputPrice

▸ **inputPrice**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/inputPrice.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="inputpriceat"></a>

###  inputPriceAt

▸ **inputPriceAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/inputPrice.d.ts:8*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="liquiditybalance"></a>

###  liquidityBalance

▸ **liquidityBalance**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/liquidityBalance.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="liquiditybalanceat"></a>

###  liquidityBalanceAt

▸ **liquidityBalanceAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/liquidityBalance.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="outputprice"></a>

###  outputPrice

▸ **outputPrice**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/outputPrice.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="outputpriceat"></a>

###  outputPriceAt

▸ **outputPriceAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/outputPrice.d.ts:8*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="totalliquidity"></a>

###  totalLiquidity

▸ **totalLiquidity**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/totalLiquidity.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="totalliquidityat"></a>

###  totalLiquidityAt

▸ **totalLiquidityAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-cennzx-spot/derives/totalLiquidity.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___

