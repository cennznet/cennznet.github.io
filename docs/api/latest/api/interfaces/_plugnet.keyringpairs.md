[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [KeyringPairs](../interfaces/_plugnet.keyringpairs.md)

# Interface: KeyringPairs

## Hierarchy

**KeyringPairs**

## Implemented by

* [Pairs](../classes/_plugnet.pairs.md)

## Index

### Properties

* [add](_plugnet.keyringpairs.md#add)
* [all](_plugnet.keyringpairs.md#all)
* [get](_plugnet.keyringpairs.md#get)
* [remove](_plugnet.keyringpairs.md#remove)

---

## Properties

<a id="add"></a>

###  add

**● add**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:37*

#### Type declaration
▸(pair: *[KeyringPair](_plugnet.keyringpair.md)*): [KeyringPair](_plugnet.keyringpair.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair](_plugnet.keyringpair.md) |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="all"></a>

###  all

**● all**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:38*

#### Type declaration
▸(): `Array`<[KeyringPair](_plugnet.keyringpair.md)>

**Returns:** `Array`<[KeyringPair](_plugnet.keyringpair.md)>

___
<a id="get"></a>

###  get

**● get**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:39*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): [KeyringPair](_plugnet.keyringpair.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringPair](_plugnet.keyringpair.md)

___
<a id="remove"></a>

###  remove

**● remove**: *`function`*

*Defined in node_modules/@plugnet/keyring/types.d.ts:40*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `void`

___

