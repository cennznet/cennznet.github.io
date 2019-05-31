[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [Struct](../classes/_plugnet.struct.md)

# Class: Struct

*__name__*: Struct

*__description__*: A Struct defines an Object with key-value pairs - where the values are Codec values. It removes a lot of repetition from the actual coding, define a structure type, pass it the key/Codec values in the constructor and it manages the decoding. It is important that the constructor values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical, it needs to decoded in the specific defined order.

## Type parameters
#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
## Hierarchy

 `Map`<`keyof S`, [Codec](../interfaces/_plugnet.codec.md)>

**↳ Struct**

↳  [MapType](_plugnet.maptype-1.md)

↳  [StorageFunctionMetadata](_plugnet.storagefunctionmetadata.md)

↳  [DoubleMapType](_plugnet.doublemaptype-1.md)

↳  [StorageFunctionMetadata](_plugnet.storagefunctionmetadata-1.md)

↳  [MapType](_plugnet.maptype-2.md)

↳  [DoubleMapType](_plugnet.doublemaptype.md)

↳  [StorageFunctionMetadata](_plugnet.storagefunctionmetadata-2.md)

↳  [MapType](_plugnet.maptype.md)

↳  [StorageFunctionMetadata](_plugnet.storagefunctionmetadata-3.md)

↳  [StorageMetadata](_plugnet.storagemetadata.md)

↳  [FunctionArgumentMetadata](_plugnet.functionargumentmetadata.md)

↳  [FunctionMetadata](_plugnet.functionmetadata.md)

↳  [CallMetadata](_plugnet.callmetadata.md)

↳  [ModuleMetadata](_plugnet.modulemetadata.md)

↳  [RuntimeModuleMetadata](_plugnet.runtimemodulemetadata.md)

↳  [Method](_plugnet.method.md)

↳  [OuterDispatchCall](_plugnet.outerdispatchcall.md)

↳  [OuterDispatchMetadata](_plugnet.outerdispatchmetadata.md)

↳  [EventMetadata](_plugnet.eventmetadata.md)

↳  [OuterEventMetadata](_plugnet.outereventmetadata.md)

↳  [MetadataV0](_plugnet.metadatav0.md)

↳  [MetadataCallArg](_plugnet.metadatacallarg.md)

↳  [MetadataCall](_plugnet.metadatacall.md)

↳  [MetadataEvent](_plugnet.metadataevent.md)

↳  [MetadataModule](_plugnet.metadatamodule-1.md)

↳  [MetadataV1](_plugnet.metadatav1.md)

↳  [MetadataModule](_plugnet.metadatamodule.md)

↳  [MetadataV2](_plugnet.metadatav2.md)

↳  [MetadataModule](_plugnet.metadatamodule-2.md)

↳  [MetadataV3](_plugnet.metadatav3.md)

↳  [MetadataModule](_plugnet.metadatamodule-3.md)

↳  [MetadataV4](_plugnet.metadatav4.md)

↳  [MetadataVersioned](_plugnet.metadataversioned.md)

↳  [Health](_plugnet.health.md)

↳  [PeerInfo](_plugnet.peerinfo.md)

↳  [ExtrinsicSignature](_plugnet.extrinsicsignature.md)

↳  [Extrinsic](_plugnet.extrinsic.md)

↳  [RuntimeVersion](_plugnet.runtimeversion.md)

↳  [Digest](_plugnet.digest.md)

↳  [Header](_plugnet.header.md)

↳  [Block](_plugnet.block.md)

↳  [RhdJustification](_plugnet.rhdjustification.md)

↳  [SignedBlock](_plugnet.signedblock.md)

↳  [KeyValue](_plugnet.keyvalue.md)

↳  [StorageChangeSet](_plugnet.storagechangeset.md)

↳  [AccountInfo](_plugnet.accountinfo.md)

↳  [CandidateReceipt](_plugnet.candidatereceipt.md)

↳  [AttestedCandidate](_plugnet.attestedcandidate.md)

↳  [BalanceLock](_plugnet.balancelock.md)

↳  [AliveContractInfo](_plugnet.alivecontractinfo.md)

↳  [Event](_plugnet.event.md)

↳  [EventRecord](_plugnet.eventrecord.md)

↳  [IndividualExposure](_plugnet.individualexposure.md)

↳  [Exposure](_plugnet.exposure.md)

↳  [BftAtReport](_plugnet.bftatreport.md)

↳  [BftProposeOutOfTurn](_plugnet.bftproposeoutofturn.md)

↳  [MisbehaviorReport](_plugnet.misbehaviorreport.md)

↳  [PrefabWasmModule](_plugnet.prefabwasmmodule.md)

↳  [ReferendumInfo](_plugnet.referenduminfo.md)

↳  [Schedule](_plugnet.schedule.md)

↳  [UnlockChunk](_plugnet.unlockchunk.md)

↳  [StakingLedger](_plugnet.stakingledger.md)

↳  [StoredPendingChange](_plugnet.storedpendingchange.md)

↳  [TreasuryProposal](_plugnet.treasuryproposal.md)

↳  [ValidatorPrefs](_plugnet.validatorprefs.md)

↳  [VestingSchedule](_plugnet.vestingschedule.md)

↳  [SubmittableResult](_plugnet.submittableresult.md)

↳  [AssetOptions](_cennznet_types.assetoptions-1.md)

↳  [PermissionsV1](_cennznet_types.permissionsv1-1.md)

↳  [Group](_cennznet_types.group.md)

↳  [Member](_cennznet_types.member.md)

↳  [Invite](_cennznet_types.invite.md)

↳  [PendingInvite](_cennznet_types.pendinginvite.md)

↳  [AcceptPayload](_cennznet_types.acceptpayload.md)

↳  [Certificate](_cennznet_types.certificate.md)

↳  [Doughnut](_cennznet_types.doughnut.md)

↳  [FeeExchange](_cennznet_types.feeexchange-1.md)

↳  [SignaturePayload](_cennznet_types.signaturepayload-1.md)

↳  [ExtrinsicSignature](_cennznet_types.extrinsicsignature-1.md)

↳  [Extrinsic](_cennznet_types.extrinsic-1.md)

↳  [Certificate](_cennznet_types.certificate-1.md)

↳  [Doughnut](_cennznet_types.doughnut-1.md)

↳  [SignaturePayload](_cennznet_types.signaturepayload.md)

↳  [ExtrinsicSignature](_cennznet_types.extrinsicsignature.md)

↳  [Extrinsic](_cennznet_types.extrinsic.md)

↳  [FeeExchange](_cennznet_types.feeexchange.md)

↳  [AssetOptions](_cennznet_types.assetoptions.md)

↳  [PermissionsV1](_cennznet_types.permissionsv1.md)

↳  [Group](_cennznet_types.group-1.md)

↳  [Member](_cennznet_types.member-1.md)

↳  [Invite](_cennznet_types.invite-1.md)

↳  [PendingInvite](_cennznet_types.pendinginvite-1.md)

↳  [AcceptPayload](_cennznet_types.acceptpayload-1.md)

↳  [Linkage](_plugnet.linkage.md)

↳  [SignaturePayload](_plugnet.signaturepayload.md)

## Implements

* [Codec](../interfaces/_plugnet.codec.md)

## Index

### Constructors

* [constructor](_plugnet.struct.md#constructor)

### Properties

* [Type](_plugnet.struct.md#type)
* [encodedLength](_plugnet.struct.md#encodedlength)
* [isEmpty](_plugnet.struct.md#isempty)
* [Map](_plugnet.struct.md#map)

### Methods

* [eq](_plugnet.struct.md#eq)
* [get](_plugnet.struct.md#get)
* [getAtIndex](_plugnet.struct.md#getatindex)
* [toArray](_plugnet.struct.md#toarray)
* [toHex](_plugnet.struct.md#tohex)
* [toJSON](_plugnet.struct.md#tojson)
* [toString](_plugnet.struct.md#tostring)
* [toU8a](_plugnet.struct.md#tou8a)
* [with](_plugnet.struct.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Struct**(Types: *`S`*, value?: *`V` \| `Map`<`any`, `any`> \| `Array`<`any`>*, jsonMap?: *`Map`<`keyof S`, `string`>*): [Struct](_plugnet.struct.md)

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |
| `Optional` value | `V` \| `Map`<`any`, `any`> \| `Array`<`any`> |
| `Optional` jsonMap | `Map`<`keyof S`, `string`> |

**Returns:** [Struct](_plugnet.struct.md)

___

## Properties

<a id="type"></a>

###  Type

**● Type**: *`E`*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:53*

*__description__*: Returns the Type description to sthe structure

___
<a id="encodedlength"></a>

###  encodedLength

**● encodedLength**: *`number`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[encodedLength](../interfaces/_plugnet.codec.md#encodedlength)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:57*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

###  isEmpty

**● isEmpty**: *`boolean`*

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[isEmpty](../interfaces/_plugnet.codec.md#isempty)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:49*

*__description__*: Checks if the value is an empty value

___
<a id="map"></a>

### `<Static>` Map

**● Map**: *`MapConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:36*

___

## Methods

<a id="eq"></a>

###  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[eq](../interfaces/_plugnet.codec.md#eq)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:61*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

###  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

*Overrides Map.get*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:66*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_plugnet.codec.md) \| `undefined`

___
<a id="getatindex"></a>

###  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_plugnet.codec.md)

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:70*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_plugnet.codec.md)

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_plugnet.codec.md)>

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:74*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_plugnet.codec.md)>

___
<a id="tohex"></a>

###  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toHex](../interfaces/_plugnet.codec.md#tohex)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:78*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toJSON](../interfaces/_plugnet.codec.md#tojson)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:82*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toString](../interfaces/_plugnet.codec.md#tostring)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:86*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

###  toU8a

▸ **toU8a**(isBare?: *`boolean`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_plugnet.codec.md).[toU8a](../interfaces/_plugnet.codec.md#tou8a)*

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:91*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `boolean` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

### `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_plugnet.constructor.md)<[Struct](_plugnet.struct.md)<`S`>>

*Defined in node_modules/@plugnet/types/codec/Struct.d.ts:45*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_plugnet.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_plugnet.constructor.md)<[Struct](_plugnet.struct.md)<`S`>>

___

