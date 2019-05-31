[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ApiOptions](../interfaces/_plugnet.apioptions.md)

# Interface: ApiOptions

## Hierarchy

**ApiOptions**

## Index

### Properties

* [derives](_plugnet.apioptions.md#derives)
* [metadata](_plugnet.apioptions.md#metadata)
* [provider](_plugnet.apioptions.md#provider)
* [signer](_plugnet.apioptions.md#signer)
* [source](_plugnet.apioptions.md#source)
* [types](_plugnet.apioptions.md#types)

---

## Properties

<a id="derives"></a>

### `<Optional>` derives

**● derives**: *[DeriveCustom](_plugnet.derivecustom.md)*

*Defined in node_modules/@plugnet/api/types.d.ts:78*

*__description__*: Add custom derives to be injected

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`object`*

*Defined in node_modules/@plugnet/api/types.d.ts:83*

*__description__*: prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain

#### Type declaration

[key: `string`]: `string`

___
<a id="provider"></a>

### `<Optional>` provider

**● provider**: *[ProviderInterface](_plugnet.providerinterface.md)*

*Defined in node_modules/@plugnet/api/types.d.ts:90*

*__description__*: Transport Provider from rpc-provider. If not specified, it will default to connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___
<a id="signer"></a>

### `<Optional>` signer

**● signer**: *[Signer](_plugnet.signer.md)*

*Defined in node_modules/@plugnet/api/types.d.ts:94*

*__description__*: An external signer which will be used to sign extrinsic when account passed in is not KeyringPair

___
<a id="source"></a>

### `<Optional>` source

**● source**: *[ApiBase](../classes/_plugnet.apibase.md)<`any`, `any`>*

*Defined in node_modules/@plugnet/api/types.d.ts:98*

*__description__*: The source object to use for runtime information (only used when cloning)

___
<a id="types"></a>

### `<Optional>` types

**● types**: *[RegistryTypes](../modules/_plugnet.md#registrytypes)*

*Defined in node_modules/@plugnet/api/types.d.ts:103*

*__description__*: Additional types used by runtime modules. This is nessusary if the runtime modules uses types not available in the base Substrate runtime.

___

