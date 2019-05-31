[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [IExtrinsic](../interfaces/_plugnet.iextrinsic.md)

# Interface: IExtrinsic

## Hierarchy

↳  [IMethod](_plugnet.imethod.md)

**↳ IExtrinsic**

↳  [SubmittableExtrinsic](_plugnet.submittableextrinsic.md)

## Implemented by

* [Extrinsic](../classes/_plugnet.extrinsic.md)
* [Extrinsic](../classes/_cennznet_types.extrinsic-1.md)
* [Extrinsic](../classes/_cennznet_types.extrinsic.md)

## Index

### Properties

* [args](_plugnet.iextrinsic.md#args)
* [argsDef](_plugnet.iextrinsic.md#argsdef)
* [callIndex](_plugnet.iextrinsic.md#callindex)
* [data](_plugnet.iextrinsic.md#data)
* [encodedLength](_plugnet.iextrinsic.md#encodedlength)
* [hasOrigin](_plugnet.iextrinsic.md#hasorigin)
* [hash](_plugnet.iextrinsic.md#hash)
* [isEmpty](_plugnet.iextrinsic.md#isempty)
* [isSigned](_plugnet.iextrinsic.md#issigned)
* [meta](_plugnet.iextrinsic.md#meta)
* [method](_plugnet.iextrinsic.md#method)
* [signature](_plugnet.iextrinsic.md#signature)

### Methods

* [addSignature](_plugnet.iextrinsic.md#addsignature)
* [eq](_plugnet.iextrinsic.md#eq)
* [sign](_plugnet.iextrinsic.md#sign)
* [toHex](_plugnet.iextrinsic.md#tohex)
* [toJSON](_plugnet.iextrinsic.md#tojson)
* [toString](_plugnet.iextrinsic.md#tostring)
* [toU8a](_plugnet.iextrinsic.md#tou8a)

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

*Defined in node_modules/@plugnet/types/types.d.ts:103*

___
<a id="signature"></a>

###  signature

**● signature**: *[IExtrinsicSignature](_plugnet.iextrinsicsignature.md)*

*Defined in node_modules/@plugnet/types/types.d.ts:104*

___

## Methods

<a id="addsignature"></a>

###  addSignature

▸ **addSignature**(signer: *[Address](../classes/_plugnet.address.md) \| `Uint8Array`*, signature: *`Uint8Array`*, nonce: *[AnyNumber](../modules/_plugnet.md#anynumber)*, era?: *`Uint8Array`*): [IExtrinsic](_plugnet.iextrinsic.md)

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
<a id="sign"></a>

###  sign

▸ **sign**(account: *[KeyringPair](_plugnet.keyringpair.md)*, options: *[SignatureOptions](../modules/_plugnet.md#signatureoptions)*): [IExtrinsic](_plugnet.iextrinsic.md)

*Defined in node_modules/@plugnet/types/types.d.ts:106*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [KeyringPair](_plugnet.keyringpair.md) |
| options | [SignatureOptions](../modules/_plugnet.md#signatureoptions) |

**Returns:** [IExtrinsic](_plugnet.iextrinsic.md)

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

