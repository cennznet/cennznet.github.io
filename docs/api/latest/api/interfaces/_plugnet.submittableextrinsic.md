[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [SubmittableExtrinsic](../interfaces/_plugnet.submittableextrinsic.md)

# Interface: SubmittableExtrinsic

## Type parameters
#### CodecResult 
#### SubscriptionResult 
## Hierarchy

↳  [IExtrinsic](_plugnet.iextrinsic.md)

**↳ SubmittableExtrinsic**

↳  [ICennznetExtrinsic](_cennznet_api.icennznetextrinsic.md)

↳  [ICennznetExtrinsic](_cennznet_api.icennznetextrinsic-1.md)

## Index

### Properties

* [args](_plugnet.submittableextrinsic.md#args)
* [argsDef](_plugnet.submittableextrinsic.md#argsdef)
* [callIndex](_plugnet.submittableextrinsic.md#callindex)
* [data](_plugnet.submittableextrinsic.md#data)
* [encodedLength](_plugnet.submittableextrinsic.md#encodedlength)
* [hasOrigin](_plugnet.submittableextrinsic.md#hasorigin)
* [hash](_plugnet.submittableextrinsic.md#hash)
* [isEmpty](_plugnet.submittableextrinsic.md#isempty)
* [isSigned](_plugnet.submittableextrinsic.md#issigned)
* [meta](_plugnet.submittableextrinsic.md#meta)
* [method](_plugnet.submittableextrinsic.md#method)
* [signature](_plugnet.submittableextrinsic.md#signature)

### Methods

* [addSignature](_plugnet.submittableextrinsic.md#addsignature)
* [eq](_plugnet.submittableextrinsic.md#eq)
* [send](_plugnet.submittableextrinsic.md#send)
* [sign](_plugnet.submittableextrinsic.md#sign)
* [signAndSend](_plugnet.submittableextrinsic.md#signandsend)
* [toHex](_plugnet.submittableextrinsic.md#tohex)
* [toJSON](_plugnet.submittableextrinsic.md#tojson)
* [toString](_plugnet.submittableextrinsic.md#tostring)
* [toU8a](_plugnet.submittableextrinsic.md#tou8a)

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

*Defined in node_modules/@plugnet/api/SubmittableExtrinsic.d.ts:25*

**Returns:** [SumbitableResultResult](../modules/_plugnet.md#sumbitableresultresult)<`CodecResult`, `SubscriptionResult`>

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

*Defined in node_modules/@plugnet/api/SubmittableExtrinsic.d.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [KeyringPair](_plugnet.keyringpair.md) \| `string` \| [AccountId](../classes/_plugnet.accountid.md) \| [Address](../classes/_plugnet.address.md) |
| `Optional` options | `Partial`<`Partial`<[SignatureOptions](../modules/_plugnet.md#signatureoptions)>> |

**Returns:** [SumbitableResultResult](../modules/_plugnet.md#sumbitableresultresult)<`CodecResult`, `SubscriptionResult`>

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

