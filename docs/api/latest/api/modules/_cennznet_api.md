[@cennznet/api](../README.md) > [@cennznet/api](../modules/_cennznet_api.md)

# Package: @cennznet/api

CENNZNet Api
============

The CENNZNet JavaScript SDK for browsers, RN and Node.js.

Install
=======

`@cennznet/crml-*` are peer dependencies to `@cennznet/api`, they need to be installed together.

```
$> npm i --save @cennznet/api @cennznet/crml-generic-asset @cennznet/crml-cennzx-spot @cennznet/crml-attestation
```

**Do not put @plugnet/\* or @polkadot/\* in your package.json**

Usage
=====

Register an endpoint for your project
-------------------------------------

[https://unfrastructure.io/](https://unfrastructure.io/)

Connect to Rimu TestNet
-----------------------

`<Static>` [create(options?: ApiOptions \| ProviderInterface)](https://cennznetdocs.com/api/latest/api/classes/_cennznet_api.api.md#create)

```
//initialize Api and connect to dev network
const {Api} = require('@cennznet/api')
api = await Api.create({
    provider: 'wss://rimu.unfrastructure.io/ws?apikey=***'
});
// For Rxjs
const {ApiRx} = require('@cennznet/api')
api = await ApiRx.create({
    provider: 'wss://rimu.unfrastructure.io/ws?apikey=***'
}).toPromise();
```

if provider is a string url, sdk will chose Provider Class based on url protocol. Or you can initialize the provider Instance yourself.

```
const {WsProvicer, HttpProvider} = require('@cennznet/api');
```

Use SingleSource Extension as Signer
------------------------------------

```
api.setSigner(window.SingleSource.signer);
```

Use `@cennznet/wallet` as Signer
--------------------------------

`npm i --save @cennznet/wallet`

```
const {SimpleKeyring, Wallet} = require('@cennznet/wallet')

wallet = new Wallet();
await wallet.createNewVault('a passphrase');

```

## Index

### Classes

* [Api](../classes/_cennznet_api.api.md)
* [Api](../classes/_cennznet_api.api-1.md)
* [ApiRx](../classes/_cennznet_api.apirx-1.md)
* [ApiRx](../classes/_cennznet_api.apirx.md)

### Interfaces

* [ApiOptions](../interfaces/_cennznet_api.apioptions-1.md)
* [ApiOptions](../interfaces/_cennznet_api.apioptions.md)
* [ICennznetExtrinsic](../interfaces/_cennznet_api.icennznetextrinsic.md)
* [ICennznetExtrinsic](../interfaces/_cennznet_api.icennznetextrinsic-1.md)
* [IPlugin](../interfaces/_cennznet_api.iplugin.md)
* [IPlugin](../interfaces/_cennznet_api.iplugin-1.md)

### Type aliases

* [AnyAddress](_cennznet_api.md#anyaddress)
* [AnyAddress](_cennznet_api.md#anyaddress-1)

### Variables

* [SIGNED_VERSION](_cennznet_api.md#signed_version)
* [SIGNED_VERSION](_cennznet_api.md#signed_version-1)
* [Types](_cennznet_api.md#types)
* [Types](_cennznet_api.md#types-1)
* [Types](_cennznet_api.md#types-2)
* [Types](_cennznet_api.md#types-3)
* [fees](_cennznet_api.md#fees)
* [fees](_cennznet_api.md#fees-1)
* [l](_cennznet_api.md#l)
* [l](_cennznet_api.md#l-1)

### Functions

* [calcFee](_cennznet_api.md#calcfee)
* [calcFee](_cennznet_api.md#calcfee-1)
* [estimateFee](_cennznet_api.md#estimatefee)
* [estimateFee](_cennznet_api.md#estimatefee-1)
* [estimateFeeAt](_cennznet_api.md#estimatefeeat)
* [estimateFeeAt](_cennznet_api.md#estimatefeeat-1)
* [getPlugins](_cennznet_api.md#getplugins)
* [getPlugins](_cennznet_api.md#getplugins-1)
* [injectOption](_cennznet_api.md#injectoption)
* [injectOption](_cennznet_api.md#injectoption-1)
* [injectPlugins](_cennznet_api.md#injectplugins)
* [injectPlugins](_cennznet_api.md#injectplugins-1)
* [mergeDeriveOptions](_cennznet_api.md#mergederiveoptions)
* [mergeDeriveOptions](_cennznet_api.md#mergederiveoptions-1)
* [mergePlugins](_cennznet_api.md#mergeplugins)
* [mergePlugins](_cennznet_api.md#mergeplugins-1)

---

## Type aliases

<a id="anyaddress"></a>

###  AnyAddress

**Ƭ AnyAddress**: *`BN` \| [Address](../classes/_plugnet.address.md) \| [AccountId](../classes/_plugnet.accountid.md) \| `Array`<`number`> \| `Uint8Array` \| `number` \| `string`*

*Defined in node_modules/@cennznet/api/src/types.ts:34*

___
<a id="anyaddress-1"></a>

###  AnyAddress

**Ƭ AnyAddress**: *`BN` \| [Address](../classes/_plugnet.address.md) \| [AccountId](../classes/_plugnet.accountid.md) \| `Array`<`number`> \| `Uint8Array` \| `number` \| `string`*

*Defined in packages/api/src/types.ts:34*

___

## Variables

<a id="signed_version"></a>

### `<Const>` SIGNED_VERSION

**● SIGNED_VERSION**: *`129`* = 129

*Defined in node_modules/@cennznet/api/src/derives/fees/estimateFee.ts:49*

___
<a id="signed_version-1"></a>

### `<Const>` SIGNED_VERSION

**● SIGNED_VERSION**: *`129`* = 129

*Defined in packages/api/src/derives/fees/estimateFee.ts:49*

___
<a id="types"></a>

### `<Const>` Types

**● Types**: *`any`* =  require('@cennznet/types')

*Defined in packages/api/src/Api.ts:31*

___
<a id="types-1"></a>

### `<Const>` Types

**● Types**: *`any`* =  require('@cennznet/types')

*Defined in node_modules/@cennznet/api/src/Api.ts:31*

___
<a id="types-2"></a>

### `<Const>` Types

**● Types**: *`any`* =  require('@cennznet/types')

*Defined in packages/api/src/ApiRx.ts:31*

___
<a id="types-3"></a>

### `<Const>` Types

**● Types**: *`any`* =  require('@cennznet/types')

*Defined in node_modules/@cennznet/api/src/ApiRx.ts:31*

___
<a id="fees"></a>

### `<Const>` fees

**● fees**: *`"/Users/moge/Workspace/centrality/cennznet/cennznet-js/packages/api/src/derives/fees/index"`* =  feesDerives

*Defined in packages/api/src/derives/index.ts:16*

___
<a id="fees-1"></a>

### `<Const>` fees

**● fees**: *`"/Users/moge/Workspace/centrality/cennznet/cennznet-js/node_modules/@cennznet/api/src/derives/fees/index"`* =  feesDerives

*Defined in node_modules/@cennznet/api/src/derives/index.ts:16*

___
<a id="l"></a>

### `<Const>` l

**● l**: *`object`* =  logger('@cennznet/api')

*Defined in node_modules/@cennznet/api/src/util/logging.ts:21*

#### Type declaration

 debug: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 error: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 log: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 noop: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 warn: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

___
<a id="l-1"></a>

### `<Const>` l

**● l**: *`object`* =  logger('@cennznet/api')

*Defined in packages/api/src/util/logging.ts:21*

#### Type declaration

 debug: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 error: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 log: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 noop: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

 warn: `function`

▸(...values: *[Logger$Data](_plugnet.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_plugnet.md#logger_data) |

**Returns:** `void`

___

## Functions

<a id="calcfee"></a>

###  calcFee

▸ **calcFee**(baseFee: *`BN`*, byteFee: *`BN`*, nonce: *`Index`*, sender: *[Address](../classes/_plugnet.address.md)*, extrinsic: *[IExtrinsic](../interfaces/_plugnet.iextrinsic.md)*): `BN`

*Defined in node_modules/@cennznet/api/src/derives/fees/estimateFee.ts:50*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseFee | `BN` |
| byteFee | `BN` |
| nonce | `Index` |
| sender | [Address](../classes/_plugnet.address.md) |
| extrinsic | [IExtrinsic](../interfaces/_plugnet.iextrinsic.md) |

**Returns:** `BN`

___
<a id="calcfee-1"></a>

###  calcFee

▸ **calcFee**(baseFee: *`BN`*, byteFee: *`BN`*, nonce: *`Index`*, sender: *[Address](../classes/_plugnet.address.md)*, extrinsic: *[IExtrinsic](../interfaces/_plugnet.iextrinsic.md)*): `BN`

*Defined in packages/api/src/derives/fees/estimateFee.ts:50*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseFee | `BN` |
| byteFee | `BN` |
| nonce | `Index` |
| sender | [Address](../classes/_plugnet.address.md) |
| extrinsic | [IExtrinsic](../interfaces/_plugnet.iextrinsic.md) |

**Returns:** `BN`

___
<a id="estimatefee"></a>

###  estimateFee

▸ **estimateFee**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `(Anonymous function)`

*Defined in packages/api/src/derives/fees/estimateFee.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `(Anonymous function)`

___
<a id="estimatefee-1"></a>

###  estimateFee

▸ **estimateFee**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `(Anonymous function)`

*Defined in node_modules/@cennznet/api/src/derives/fees/estimateFee.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `(Anonymous function)`

___
<a id="estimatefeeat"></a>

###  estimateFeeAt

▸ **estimateFeeAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `(Anonymous function)`

*Defined in node_modules/@cennznet/api/src/derives/fees/estimateFee.ts:36*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `(Anonymous function)`

___
<a id="estimatefeeat-1"></a>

###  estimateFeeAt

▸ **estimateFeeAt**(api: *[ApiInterface$Rx](_plugnet.md#apiinterface_rx)*): `(Anonymous function)`

*Defined in packages/api/src/derives/fees/estimateFee.ts:36*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiInterface$Rx](_plugnet.md#apiinterface_rx) |

**Returns:** `(Anonymous function)`

___
<a id="getplugins"></a>

###  getPlugins

▸ **getPlugins**(): [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

*Defined in packages/api/src/plugins.ts:19*

**Returns:** [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

___
<a id="getplugins-1"></a>

###  getPlugins

▸ **getPlugins**(): [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

*Defined in node_modules/@cennznet/api/src/plugins.ts:19*

**Returns:** [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

___
<a id="injectoption"></a>

###  injectOption

▸ **injectOption**(options: *[ApiOptions](../interfaces/_cennznet_api.apioptions-1.md)*, plugins?: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*): `void`

*Defined in packages/api/src/util/injectPlugin.ts:23*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| options | [ApiOptions](../interfaces/_cennznet_api.apioptions-1.md) | - |
| `Default value` plugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |  [] |

**Returns:** `void`

___
<a id="injectoption-1"></a>

###  injectOption

▸ **injectOption**(options: *[ApiOptions](../interfaces/_cennznet_api.apioptions.md)*, plugins?: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*): `void`

*Defined in node_modules/@cennznet/api/src/util/injectPlugin.ts:23*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| options | [ApiOptions](../interfaces/_cennznet_api.apioptions.md) | - |
| `Default value` plugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |  [] |

**Returns:** `void`

___
<a id="injectplugins"></a>

###  injectPlugins

▸ **injectPlugins**(api: *[Api](../classes/_cennznet_api.api.md) \| [ApiRx](../classes/_cennznet_api.apirx-1.md)*, plugins?: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*): `void`

*Defined in node_modules/@cennznet/api/src/util/injectPlugin.ts:34*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| api | [Api](../classes/_cennznet_api.api.md) \| [ApiRx](../classes/_cennznet_api.apirx-1.md) | - |
| `Default value` plugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |  [] |

**Returns:** `void`

___
<a id="injectplugins-1"></a>

###  injectPlugins

▸ **injectPlugins**(api: *[Api](../classes/_cennznet_api.api-1.md) \| [ApiRx](../classes/_cennznet_api.apirx.md)*, plugins?: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*): `void`

*Defined in packages/api/src/util/injectPlugin.ts:34*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| api | [Api](../classes/_cennznet_api.api-1.md) \| [ApiRx](../classes/_cennznet_api.apirx.md) | - |
| `Default value` plugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |  [] |

**Returns:** `void`

___
<a id="mergederiveoptions"></a>

###  mergeDeriveOptions

▸ **mergeDeriveOptions**(deriveOrigin: *[DeriveCustom](../interfaces/_plugnet.derivecustom.md)*, deriveAppend?: *[DeriveCustom](../interfaces/_plugnet.derivecustom.md)*): [DeriveCustom](../interfaces/_plugnet.derivecustom.md)

*Defined in packages/api/src/util/derives.ts:17*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| deriveOrigin | [DeriveCustom](../interfaces/_plugnet.derivecustom.md) | - |
| `Default value` deriveAppend | [DeriveCustom](../interfaces/_plugnet.derivecustom.md) |  {} |

**Returns:** [DeriveCustom](../interfaces/_plugnet.derivecustom.md)

___
<a id="mergederiveoptions-1"></a>

###  mergeDeriveOptions

▸ **mergeDeriveOptions**(deriveOrigin: *[DeriveCustom](../interfaces/_plugnet.derivecustom.md)*, deriveAppend?: *[DeriveCustom](../interfaces/_plugnet.derivecustom.md)*): [DeriveCustom](../interfaces/_plugnet.derivecustom.md)

*Defined in node_modules/@cennznet/api/src/util/derives.ts:17*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| deriveOrigin | [DeriveCustom](../interfaces/_plugnet.derivecustom.md) | - |
| `Default value` deriveAppend | [DeriveCustom](../interfaces/_plugnet.derivecustom.md) |  {} |

**Returns:** [DeriveCustom](../interfaces/_plugnet.derivecustom.md)

___
<a id="mergeplugins"></a>

###  mergePlugins

▸ **mergePlugins**(originPlugins: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*, incomePlugins: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*): [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

*Defined in node_modules/@cennznet/api/src/util/injectPlugin.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| originPlugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |
| incomePlugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |

**Returns:** [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

___
<a id="mergeplugins-1"></a>

###  mergePlugins

▸ **mergePlugins**(originPlugins: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*, incomePlugins: *[IPlugin](../interfaces/_cennznet_api.iplugin.md)[]*): [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

*Defined in packages/api/src/util/injectPlugin.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| originPlugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |
| incomePlugins | [IPlugin](../interfaces/_cennznet_api.iplugin.md)[] |

**Returns:** [IPlugin](../interfaces/_cennznet_api.iplugin.md)[]

___

