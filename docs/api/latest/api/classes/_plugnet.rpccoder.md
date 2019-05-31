[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [RpcCoder](../classes/_plugnet.rpccoder.md)

# Class: RpcCoder

## Hierarchy

**RpcCoder**

## Index

### Methods

* [decodeResponse](_plugnet.rpccoder.md#decoderesponse)
* [encodeJson](_plugnet.rpccoder.md#encodejson)
* [encodeObject](_plugnet.rpccoder.md#encodeobject)
* [getId](_plugnet.rpccoder.md#getid)

---

## Methods

<a id="decoderesponse"></a>

###  decodeResponse

▸ **decodeResponse**(response: *[JsonRpcResponse](../modules/_plugnet.md#jsonrpcresponse)*): `any`

*Defined in node_modules/@plugnet/rpc-provider/coder/index.d.ts:4*

**Parameters:**

| Name | Type |
| ------ | ------ |
| response | [JsonRpcResponse](../modules/_plugnet.md#jsonrpcresponse) |

**Returns:** `any`

___
<a id="encodejson"></a>

###  encodeJson

▸ **encodeJson**(method: *`string`*, params: *`any` \| `Array`<`any`>*): `string`

*Defined in node_modules/@plugnet/rpc-provider/coder/index.d.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `any` \| `Array`<`any`> |

**Returns:** `string`

___
<a id="encodeobject"></a>

###  encodeObject

▸ **encodeObject**(method: *`string`*, params: *`any` \| `Array`<`any`>*): [JsonRpcRequest](../modules/_plugnet.md#jsonrpcrequest)

*Defined in node_modules/@plugnet/rpc-provider/coder/index.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `any` \| `Array`<`any`> |

**Returns:** [JsonRpcRequest](../modules/_plugnet.md#jsonrpcrequest)

___
<a id="getid"></a>

###  getId

▸ **getId**(): `number`

*Defined in node_modules/@plugnet/rpc-provider/coder/index.d.ts:7*

**Returns:** `number`

___

