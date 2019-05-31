[@cennznet/api](../README.md) > [@cennznet/api](../modules/_cennznet_api.md) > [ApiOptions](../interfaces/_cennznet_api.apioptions-1.md)

# Interface: ApiOptions

## Hierarchy

 `object`

**↳ ApiOptions**

## Index

### Properties

* [plugins](_cennznet_api.apioptions-1.md#plugins)
* [provider](_cennznet_api.apioptions-1.md#provider)

---

## Properties

<a id="plugins"></a>

### `<Optional>` plugins

**● plugins**: *[IPlugin](_cennznet_api.iplugin.md)[]*

*Defined in packages/api/src/types.ts:31*

___
<a id="provider"></a>

### `<Optional>` provider

**● provider**: *[ProviderInterface](_plugnet.providerinterface.md) \| `string`*

*Defined in packages/api/src/types.ts:30*

provider implement ProviderInterface or string url for WsProvider. If not specified, it will default to connecting to the localhost with the default port, i.e. `ws://127.0.0.1:9944`

___

