[@cennznet/api](../README.md) > [@cennznet/api](../modules/_cennznet_api.md) > [ICennznetExtrinsic](../interfaces/_cennznet_api.icennznetextrinsic.md)

# Interface: ICennznetExtrinsic

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

↳  [SubmittableExtrinsic](_plugnet.submittableextrinsic.md)<`CodecResult`, `SubscriptionResult`>

**↳ ICennznetExtrinsic**

## Index

### Properties

* [args](_cennznet_api.icennznetextrinsic.md#args)
* [argsDef](_cennznet_api.icennznetextrinsic.md#argsdef)
* [callIndex](_cennznet_api.icennznetextrinsic.md#callindex)
* [data](_cennznet_api.icennznetextrinsic.md#data)
* [encodedLength](_cennznet_api.icennznetextrinsic.md#encodedlength)
* [hasOrigin](_cennznet_api.icennznetextrinsic.md#hasorigin)
* [hash](_cennznet_api.icennznetextrinsic.md#hash)
* [isEmpty](_cennznet_api.icennznetextrinsic.md#isempty)
* [isSigned](_cennznet_api.icennznetextrinsic.md#issigned)
* [meta](_cennznet_api.icennznetextrinsic.md#meta)
* [method](_cennznet_api.icennznetextrinsic.md#method)
* [signature](_cennznet_api.icennznetextrinsic.md#signature)

### Methods

* [addDoughnut](_cennznet_api.icennznetextrinsic.md#adddoughnut)
* [addFeeExchangeOpt](_cennznet_api.icennznetextrinsic.md#addfeeexchangeopt)
* [addSignature](_cennznet_api.icennznetextrinsic.md#addsignature)
* [eq](_cennznet_api.icennznetextrinsic.md#eq)
* [send](_cennznet_api.icennznetextrinsic.md#send)
* [sign](_cennznet_api.icennznetextrinsic.md#sign)
* [signAndSend](_cennznet_api.icennznetextrinsic.md#signandsend)
* [toHex](_cennznet_api.icennznetextrinsic.md#tohex)
* [toJSON](_cennznet_api.icennznetextrinsic.md#tojson)
* [toString](_cennznet_api.icennznetextrinsic.md#tostring)
* [toU8a](_cennznet_api.icennznetextrinsic.md#tou8a)

---

## Properties

<a id="args"></a>

###  args

**● args**: *`Array`<[Codec](_plugnet.codec.md)>*

*Inherited from [IMethod](_plugnet.imethod.md).[args](_plugnet.imethod.md#args)*

*Defined in node_modules/@plugnet/types/types.d.ts:90*

___
<a id="argsdef"></a>

###  argsDef

**● argsDef**: *[ArgsDef](_plugnet.argsdef.md)*

*Inherited from [IMethod](_plugnet.imethod.md).[argsDef](_plugnet.imethod.md#argsdef)*

*Defined in node_modules/@plugnet/types/types.d.ts:91*

___
<a id="callindex"></a>

###  callIndex

**● callIndex**: *`Uint8Array`*

*Inherited from [IMethod](_plugnet.imethod.md).[callIndex](_plugnet.imethod.md#callindex)*

*Defined in node_modules/@plugnet/types/types.d.ts:92*

___
<a id="data"></a>

###  data

**● data**: *`Uint8Array`*

*Inherited from [IMethod](_plugnet.imethod.md).[data](_plugnet.imethod.md#data)*

*Defined in node_modules/@plugnet/types/types.d.ts:93*

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_plugnet.codec.md).[encodedLength](_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/types.d.ts:28*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

###  hasOrigin

**● hasOrigin**: *`boolean`*

*Inherited from [IMethod](_plugnet.imethod.md).[hasOrigin](_plugnet.imethod.md#hasorigin)*

*Defined in node_modules/@plugnet/types/types.d.ts:94*

___
<a id="hash"></a>

###  hash

**● hash**: *[IHash](_plugnet.ihash.md)*

*Inherited from [IExtrinsic](_plugnet.iextrinsic.md).[hash](_plugnet.iextrinsic.md#hash)*

*Defined in node_modules/@plugnet/types/types.d.ts:101*

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_plugnet.codec.md).[isEmpty](_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/types.d.ts:32*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

###  isSigned

**● isSigned**: *`boolean`*

*Inherited from [IExtrinsic](_plugnet.iextrinsic.md).[isSigned](_plugnet.iextrinsic.md#issigned)*

*Defined in node_modules/@plugnet/types/types.d.ts:102*

___
<a id="meta"></a>

###  meta

**● meta**: *[FunctionMetadata](../classes/_plugnet.functionmetadata.md)*

*Inherited from [IMethod](_plugnet.imethod.md).[meta](_plugnet.imethod.md#meta)*

*Defined in node_modules/@plugnet/types/types.d.ts:95*

___
<a id="method"></a>

###  method

**● method**: *[Method](../classes/_plugnet.method.md)*

*Inherited from [IExtrinsic](_plugnet.iextrinsic.md).[method](_plugnet.iextrinsic.md#method)*

*Defined in node_modules/@plugnet/types/types.d.ts:103*

___
<a id="signature"></a>

###  signature

**● signature**: *[IExtrinsicSignature](_plugnet.iextrinsicsignature.md)*

*Inherited from [IExtrinsic](_plugnet.iextrinsic.md).[signature](_plugnet.iextrinsic.md#signature)*

*Defined in node_modules/@plugnet/types/types.d.ts:104*

___

## Methods

<a id="adddoughnut"></a>

###  addDoughnut

▸ **addDoughnut**(doughnut: *[DoughnutValue](../modules/_cennznet_types.md#doughnutvalue-1)*): `this`

*Defined in packages/api/src/types.ts:38*

**Parameters:**

| Name | Type |
| ------ | ------ |
| doughnut | [DoughnutValue](../modules/_cennznet_types.md#doughnutvalue-1) |

**Returns:** `this`

___
<a id="addfeeexchangeopt"></a>

###  addFeeExchangeOpt

▸ **addFeeExchangeOpt**(feeExchangeOpt: *[FeeExchangeValue](../modules/_cennznet_types.md#feeexchangevalue-1)*): `this`

*Defined in packages/api/src/types.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| feeExchangeOpt | [FeeExchangeValue](../modules/_cennznet_types.md#feeexchangevalue-1) |

**Returns:** `this`

___
<a id="addsignature"></a>

###  addSignature

▸ **addSignature**(signer: *[Address](../classes/_plugnet.address.md) \| `Uint8Array`*, signature: *`Uint8Array`*, nonce: *[AnyNumber](../modules/_plugnet.md#anynumber)*, era?: *`Uint8Array`*): [IExtrinsic](_plugnet.iextrinsic.md)

*Inherited from [IExtrinsic](_plugnet.iextrinsic.md).[addSignature](_plugnet.iextrinsic.md#addsignature)*

*Defined in node_modules/@plugnet/types/types.d.ts:105*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Address](../classes/_plugnet.address.md) \| `Uint8Array` |
| signature | `Uint8Array` |
| nonce | [AnyNumber](../modules/_plugnet.md#anynumber) |
| `Optional` era | `Uint8Array` |

**Returns:** [IExtrinsic](_plugnet.iextrinsic.md)

___
<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [Codec](_plugnet.codec.md).[eq](_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/types.d.ts:36*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="send"></a>

###  send

▸ **send**(): [SumbitableResultResult](../modules/_plugnet.md#sumbitableresultresult)<`CodecResult`, `SubscriptionResult`>

▸ **send**(statusCb: *`function`*): [SumbitableResultSubscription](../modules/_plugnet.md#sumbitableresultsubscription)<`CodecResult`, `SubscriptionResult`>

*Inherited from [SubmittableExtrinsic](_plugnet.submittableextrinsic.md).[send](_plugnet.submittableextrinsic.md#send)*

*Defined in node_modules/@plugnet/api/SubmittableExtrinsic.d.ts:25*

**Returns:** [SumbitableResultResult](../modules/_plugnet.md#sumbitableresultresult)<`CodecResult`, `SubscriptionResult`>

*Inherited from [SubmittableExtrinsic](_plugnet.submittableextrinsic.md).[send](_plugnet.submittableextrinsic.md#send)*

*Defined in node_modules/@plugnet/api/SubmittableExtrinsic.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCb | `function` |

**Returns:** [SumbitableResultSubscription](../modules/_plugnet.md#sumbitableresultsubscription)<`CodecResult`, `SubscriptionResult`>

___
<a id="sign"></a>

###  sign

▸ **sign**(account: *[KeyringPair](_plugnet.keyringpair.md)*, _options: *`Partial`<[SignatureOptions](../modules/_plugnet.md#signatureoptions)>*): `this`

*Inherited from [SubmittableExtrinsic](_plugnet.submittableextrinsic.md).[sign](_plugnet.submittableextrinsic.md#sign)*

*Overrides [IExtrinsic](_plugnet.iextrinsic.md).[sign](_plugnet.iextrinsic.md#sign)*

*Defined in node_modules/@plugnet/api/SubmittableExtrinsic.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [KeyringPair](_plugnet.keyringpair.md) |
| _options | `Partial`<[SignatureOptions](../modules/_plugnet.md#signatureoptions)> |

**Returns:** `this`

___
<a id="signandsend"></a>

###  signAndSend

▸ **signAndSend**(account: *[KeyringPair](_plugnet.keyringpair.md) \| `string` \| [AccountId](../classes/_plugnet.accountid.md) \| [Address](../classes/_plugnet.address.md)*, options?: *`Partial`<`Partial`<[SignatureOptions](../modules/_plugnet.md#signatureoptions)>>*): [SumbitableResultResult](../modules/_plugnet.md#sumbitableresultresult)<`CodecResult`, `SubscriptionResult`>

▸ **signAndSend**(account: *[KeyringPair](_plugnet.keyringpair.md) \| `string` \| [AccountId](../classes/_plugnet.accountid.md) \| [Address](../classes/_plugnet.address.md)*, statusCb: *[StatusCb](../modules/_plugnet.md#statuscb)*): [SumbitableResultSubscription](../modules/_plugnet.md#sumbitableresultsubscription)<`CodecResult`, `SubscriptionResult`>

*Inherited from [SubmittableExtrinsic](_plugnet.submittableextrinsic.md).[signAndSend](_plugnet.submittableextrinsic.md#signandsend)*

*Defined in node_modules/@plugnet/api/SubmittableExtrinsic.d.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [KeyringPair](_plugnet.keyringpair.md) \| `string` \| [AccountId](../classes/_plugnet.accountid.md) \| [Address](../classes/_plugnet.address.md) |
| `Optional` options | `Partial`<`Partial`<[SignatureOptions](../modules/_plugnet.md#signatureoptions)>> |

**Returns:** [SumbitableResultResult](../modules/_plugnet.md#sumbitableresultresult)<`CodecResult`, `SubscriptionResult`>

*Inherited from [SubmittableExtrinsic](_plugnet.submittableextrinsic.md).[signAndSend](_plugnet.submittableextrinsic.md#signandsend)*

*Defined in node_modules/@plugnet/api/SubmittableExtrinsic.d.ts:29*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [KeyringPair](_plugnet.keyringpair.md) \| `string` \| [AccountId](../classes/_plugnet.accountid.md) \| [Address](../classes/_plugnet.address.md) |
| statusCb | [StatusCb](../modules/_plugnet.md#statuscb) |

**Returns:** [SumbitableResultSubscription](../modules/_plugnet.md#sumbitableresultsubscription)<`CodecResult`, `SubscriptionResult`>

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Inherited from [Codec](_plugnet.codec.md).[toHex](_plugnet.codec.md#tohex)*

*Defined in node_modules/@plugnet/types/types.d.ts:40*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Inherited from [Codec](_plugnet.codec.md).[toJSON](_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/types.d.ts:44*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Inherited from [Codec](_plugnet.codec.md).[toString](_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/types.d.ts:48*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Inherited from [Codec](_plugnet.codec.md).[toU8a](_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/types.d.ts:53*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

