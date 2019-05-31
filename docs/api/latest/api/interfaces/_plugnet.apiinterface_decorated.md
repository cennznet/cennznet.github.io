[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [ApiInterface$Decorated](../interfaces/_plugnet.apiinterface_decorated.md)

# Interface: ApiInterface$Decorated

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

**ApiInterface$Decorated**

## Index

### Properties

* [derive](_plugnet.apiinterface_decorated.md#derive)
* [genesisHash](_plugnet.apiinterface_decorated.md#genesishash)
* [hasSubscriptions](_plugnet.apiinterface_decorated.md#hassubscriptions)
* [query](_plugnet.apiinterface_decorated.md#query)
* [rpc](_plugnet.apiinterface_decorated.md#rpc)
* [runtimeMetadata](_plugnet.apiinterface_decorated.md#runtimemetadata)
* [runtimeVersion](_plugnet.apiinterface_decorated.md#runtimeversion)
* [signer](_plugnet.apiinterface_decorated.md#signer)
* [tx](_plugnet.apiinterface_decorated.md#tx)

---

## Properties

<a id="derive"></a>

###  derive

**● derive**: *[Derive](_plugnet.derive-1.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/types.d.ts:110*

___
<a id="genesishash"></a>

###  genesisHash

**● genesisHash**: *[Hash](../classes/_plugnet.hash.md)*

*Defined in node_modules/@plugnet/api/types.d.ts:106*

___
<a id="hassubscriptions"></a>

###  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Defined in node_modules/@plugnet/api/types.d.ts:107*

___
<a id="query"></a>

###  query

**● query**: *[QueryableStorage](_plugnet.queryablestorage.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/types.d.ts:111*

___
<a id="rpc"></a>

###  rpc

**● rpc**: *[DecoratedRpc](_plugnet.decoratedrpc.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/types.d.ts:112*

___
<a id="runtimemetadata"></a>

###  runtimeMetadata

**● runtimeMetadata**: *[Metadata](../classes/_plugnet.metadata.md)*

*Defined in node_modules/@plugnet/api/types.d.ts:108*

___
<a id="runtimeversion"></a>

###  runtimeVersion

**● runtimeVersion**: *[RuntimeVersion](../classes/_plugnet.runtimeversion.md)*

*Defined in node_modules/@plugnet/api/types.d.ts:109*

___
<a id="signer"></a>

### `<Optional>` signer

**● signer**: *[Signer](_plugnet.signer.md)*

*Defined in node_modules/@plugnet/api/types.d.ts:114*

___
<a id="tx"></a>

###  tx

**● tx**: *[SubmittableExtrinsics](_plugnet.submittableextrinsics.md)<`CodecResult`, `SubscriptionResult`>*

*Defined in node_modules/@plugnet/api/types.d.ts:113*

___

