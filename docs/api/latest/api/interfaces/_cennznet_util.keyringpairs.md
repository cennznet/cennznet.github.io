[@cennznet/api](../README.md) > [@cennznet/util](../modules/_cennznet_util.md) > [KeyringPairs](../interfaces/_cennznet_util.keyringpairs.md)

# Interface: KeyringPairs

## Hierarchy

**KeyringPairs**

## Implemented by

* [Pairs](../classes/_cennznet_util.pairs.md)

## Index

### Properties

* [add](_cennznet_util.keyringpairs.md#add)
* [all](_cennznet_util.keyringpairs.md#all)
* [get](_cennznet_util.keyringpairs.md#get)
* [remove](_cennznet_util.keyringpairs.md#remove)

---

## Properties

<a id="add"></a>

###  add

**● add**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:37*

#### Type declaration
▸(pair: *[KeyringPair](_cennznet_util.keyringpair.md)*): [KeyringPair](_cennznet_util.keyringpair.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair](_cennznet_util.keyringpair.md) |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="all"></a>

###  all

**● all**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:38*

#### Type declaration
▸(): `Array`<[KeyringPair](_cennznet_util.keyringpair.md)>

**Returns:** `Array`<[KeyringPair](_cennznet_util.keyringpair.md)>

___
<a id="get"></a>

###  get

**● get**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:39*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): [KeyringPair](_cennznet_util.keyringpair.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringPair](_cennznet_util.keyringpair.md)

___
<a id="remove"></a>

###  remove

**● remove**: *`function`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:40*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `void`

___

