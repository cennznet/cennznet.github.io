# `cennznet-js/crml-generic-asset`

A sdk providing additional features for generic asset runtime module.



# Install

It is peer dependency of `@cennznet/api`, should always be installed along with `@cennznet/api` and other `@cennznet/crml-` sdks.

```
$> npm i --save @cennznet/api @cennznet/crml-generic-asset @cennznet/crml-cennzx-spot @cennznet/crml-attestation
```



# Usage

`@cennznet/api` will create a instance of genericAsset after it finishes initialization.
```
// node --experimental-repl-await
// initialize Api and connect to dev network
const {Api} = require('@cennznet/api')
const api = await Api.create({provider: 'wss://rimu.unfrastructure.io/ws?apikey=***'});

const ga = api.genericAsset;

// for Rxjs
const {ApiRx} = require('@cennznet/api')
const apiRx = await ApiRx.create({provider: 'wss://rimu.unfrastructure.io/ws?apikey=***'});

const gaRx = apiRx.genericAsset;
```

# Derives for Generic Asset
All derives related to generic asset crml are defined in this library, which can be accessed from both GenericAsset instance and `api.derives.genericAsset.*`

* FreeBalance / freeBalanceAt
* ReservedBalance / reservedBalanceAt
* TotalBalance / totalBalanceAt

Check [API Docs](https://cennznetdocs.com/api/latest/api/classes/_cennznet_crml_generic_asset.genericasset.md) for more information

# Asset Registry
In CENNZNet we have different type of assets, [check here](https://cennznetdocs.com/CENNZNet/overview/protocols.md#GenericAsset).
Only AssetId is stored on chain, though for providing a similar UX as Ethereum, we defined an interface IAsset to describe an asset,
and this AssetRegistry to help query it.
Note: Unlike ERC20 in Ethereum, all assets have fixed decimals = 18.
```typescript
enum AssetType {
    STAKING = 'staking',
    SPENDING = 'spending',
    RESERVE = 'reserve',
    USER = 'user'
}

interface IAsset {
    id: number;
    symbol: string;
    decimals: number;
    type: AssetType;
}
```

```
const {assetRegistry} = require('@cennznet/crml-generic-asset');
// query all reserve assets
const assets = assetRegistry.reserveAssets();

const asset = assetRegistry.findAssetById(16000);
const asset = assetRegistry.findAssetBySymbol('CENNZ-T');
/* {
    id: 16000,
    symbol: 'CENNZ-T',
    decimals: 18,
    type: AssetType.STAKING
  }
*/
```

# EnhancedAssetId
With this library installed, for all places ask for AssetId user can also pass the symbol of asset.

To query
```
ga.getFreeBalance(16000, someAddress);
// is equal to 
ga.getFreeBalance('CENNZ-T', someAddress);
```
To transfer
```
ga.transfer('CENNZ-T', receiver.address, transferAmount);
```

If the symbol passed in is not a valid reserved/staking/spending asset, an error will be thrown.