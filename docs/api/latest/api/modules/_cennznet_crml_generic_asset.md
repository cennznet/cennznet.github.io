[@cennznet/api](../README.md) > [@cennznet/crml-generic-asset](../modules/_cennznet_crml_generic_asset.md)

# Package: @cennznet/crml-generic-asset

## Index

### Enumerations

* [AssetType](../enums/_cennznet_crml_generic_asset.assettype.md)

### Classes

* [EnhancedAssetId](../classes/_cennznet_crml_generic_asset.enhancedassetid.md)
* [GenericAsset](../classes/_cennznet_crml_generic_asset.genericasset.md)
* [GenericAssetRx](../classes/_cennznet_crml_generic_asset.genericassetrx.md)

### Interfaces

* [CodecArgObject](../interfaces/_cennznet_crml_generic_asset.codecargobject.md)
* [IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md)
* [IAssetOptions](../interfaces/_cennznet_crml_generic_asset.iassetoptions.md)
* [QueryableGetBalance](../interfaces/_cennznet_crml_generic_asset.queryablegetbalance.md)
* [QueryableGetBalanceRx](../interfaces/_cennznet_crml_generic_asset.queryablegetbalancerx.md)

### Type aliases

* [AnyAddress](_cennznet_crml_generic_asset.md#anyaddress)
* [AnyAssetId](_cennznet_crml_generic_asset.md#anyassetid)

### Variables

* [ASSET_DECIMALS](_cennznet_crml_generic_asset.md#asset_decimals)
* [MAX_RESERVE_ID](_cennznet_crml_generic_asset.md#max_reserve_id)
* [_default](_cennznet_crml_generic_asset.md#_default)
* [assetRegistry](_cennznet_crml_generic_asset.md#assetregistry)
* [defaultAssets](_cennznet_crml_generic_asset.md#defaultassets)

### Functions

* [findAssetById](_cennznet_crml_generic_asset.md#findassetbyid)
* [findAssetBySymbol](_cennznet_crml_generic_asset.md#findassetbysymbol)
* [freeBalance](_cennznet_crml_generic_asset.md#freebalance)
* [freeBalanceAt](_cennznet_crml_generic_asset.md#freebalanceat)
* [generateStorageDoubleMapKey](_cennznet_crml_generic_asset.md#generatestoragedoublemapkey)
* [isAssetObj](_cennznet_crml_generic_asset.md#isassetobj)
* [isStringNumber](_cennznet_crml_generic_asset.md#isstringnumber)
* [reserveAssets](_cennznet_crml_generic_asset.md#reserveassets)
* [reservedBalance](_cennznet_crml_generic_asset.md#reservedbalance)
* [reservedBalanceAt](_cennznet_crml_generic_asset.md#reservedbalanceat)
* [totalBalance](_cennznet_crml_generic_asset.md#totalbalance)
* [totalBalanceAt](_cennznet_crml_generic_asset.md#totalbalanceat)

---

## Type aliases

<a id="anyaddress"></a>

###  AnyAddress

**Ƭ AnyAddress**: *`BN` \| [Address](../classes/_plugnet.address.md) \| [AccountId](../classes/_plugnet.accountid.md) \| [AccountIndex](../classes/_plugnet.accountindex.md) \| `Array`<`number`> \| `Uint8Array` \| `number` \| `string`*

*Defined in node_modules/@cennznet/crml-generic-asset/types.d.ts:7*

___
<a id="anyassetid"></a>

###  AnyAssetId

**Ƭ AnyAssetId**: *[AnyNumber](_plugnet.md#anynumber) \| `AssetId` \| [EnhancedAssetId](../classes/_cennznet_crml_generic_asset.enhancedassetid.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/types.d.ts:8*

___

## Variables

<a id="asset_decimals"></a>

### `<Const>` ASSET_DECIMALS

**● ASSET_DECIMALS**: *`18`* = 18

*Defined in node_modules/@cennznet/crml-generic-asset/constants.d.ts:2*

___
<a id="max_reserve_id"></a>

### `<Const>` MAX_RESERVE_ID

**● MAX_RESERVE_ID**: *`1000000`* = 1000000

*Defined in node_modules/@cennznet/crml-generic-asset/constants.d.ts:4*

___
<a id="_default"></a>

### `<Const>` _default

**● _default**: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)*

*Defined in node_modules/@cennznet/crml-generic-asset/plugin.d.ts:2*

___
<a id="assetregistry"></a>

### `<Const>` assetRegistry

**● assetRegistry**: *`"/Users/moge/Workspace/centrality/cennznet/cennznet-js/node_modules/@cennznet/crml-generic-asset/registry/assetRegistry"`*

*Defined in node_modules/@cennznet/crml-generic-asset/index.d.ts:6*

___
<a id="defaultassets"></a>

### `<Const>` defaultAssets

**● defaultAssets**: *[IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md)[]*

*Defined in node_modules/@cennznet/crml-generic-asset/constants.d.ts:3*

___

## Functions

<a id="findassetbyid"></a>

###  findAssetById

▸ **findAssetById**(assetId: *`number`*): [IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md) \| `undefined`

*Defined in node_modules/@cennznet/crml-generic-asset/registry/assetRegistry.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| assetId | `number` |

**Returns:** [IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md) \| `undefined`

___
<a id="findassetbysymbol"></a>

###  findAssetBySymbol

▸ **findAssetBySymbol**(symbol: *`string`*): [IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md) \| `undefined`

*Defined in node_modules/@cennznet/crml-generic-asset/registry/assetRegistry.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| symbol | `string` |

**Returns:** [IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md) \| `undefined`

___
<a id="freebalance"></a>

###  freeBalance

▸ **freeBalance**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-generic-asset/derives/freeBalance.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="freebalanceat"></a>

###  freeBalanceAt

▸ **freeBalanceAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-generic-asset/derives/freeBalance.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="generatestoragedoublemapkey"></a>

###  generateStorageDoubleMapKey

▸ **generateStorageDoubleMapKey**(prefixString: *`string`*, key1: *[Codec](../interfaces/_plugnet.codec.md)*, key2: *[Codec](../interfaces/_plugnet.codec.md)*): `string`

*Defined in node_modules/@cennznet/crml-generic-asset/utils/utils.d.ts:10*

Generate the key of a double map storage

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| prefixString | `string` |  \- |
| key1 | [Codec](../interfaces/_plugnet.codec.md) |  \- |
| key2 | [Codec](../interfaces/_plugnet.codec.md) |   |

**Returns:** `string`

___
<a id="isassetobj"></a>

###  isAssetObj

▸ **isAssetObj**(value: *`any`*): `boolean`

*Defined in node_modules/@cennznet/crml-generic-asset/utils/utils.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isstringnumber"></a>

###  isStringNumber

▸ **isStringNumber**(str: *`string`*): `boolean`

*Defined in node_modules/@cennznet/crml-generic-asset/utils/utils.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `boolean`

___
<a id="reserveassets"></a>

###  reserveAssets

▸ **reserveAssets**(): [IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md)[]

*Defined in node_modules/@cennznet/crml-generic-asset/registry/assetRegistry.d.ts:4*

**Returns:** [IAsset](../interfaces/_cennznet_crml_generic_asset.iasset.md)[]

___
<a id="reservedbalance"></a>

###  reservedBalance

▸ **reservedBalance**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-generic-asset/derives/reservedBalance.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="reservedbalanceat"></a>

###  reservedBalanceAt

▸ **reservedBalanceAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-generic-asset/derives/reservedBalance.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="totalbalance"></a>

###  totalBalance

▸ **totalBalance**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-generic-asset/derives/totalBalance.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___
<a id="totalbalanceat"></a>

###  totalBalanceAt

▸ **totalBalanceAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `function`

*Defined in node_modules/@cennznet/crml-generic-asset/derives/totalBalance.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `function`

___

