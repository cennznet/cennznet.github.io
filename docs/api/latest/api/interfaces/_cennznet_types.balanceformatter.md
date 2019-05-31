[@cennznet/api](../README.md) > [@cennznet/types](../modules/_cennznet_types.md) > [BalanceFormatter](../interfaces/_cennznet_types.balanceformatter.md)

# Interface: BalanceFormatter

## Hierarchy

**BalanceFormatter**

## Callable
▸ **__call**(input?: *`number` \| `string` \| `BN`*, withSi?: *`boolean`*, decimals?: *`number`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/format/formatBalance.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` input | `number` \| `string` \| `BN` |
| `Optional` withSi | `boolean` |
| `Optional` decimals | `number` |

**Returns:** `string`

## Index

### Methods

* [calcSi](_cennznet_types.balanceformatter.md#calcsi)
* [findSi](_cennznet_types.balanceformatter.md#findsi)
* [getDefaults](_cennznet_types.balanceformatter.md#getdefaults)
* [getOptions](_cennznet_types.balanceformatter.md#getoptions)
* [setDefaults](_cennznet_types.balanceformatter.md#setdefaults)

---

## Methods

<a id="calcsi"></a>

###  calcSi

▸ **calcSi**(text: *`string`*, decimals?: *`number`*): [SiDef](../modules/_cennznet_types.md#sidef)

*Defined in packages/types/node_modules/@plugnet/util/format/formatBalance.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` decimals | `number` |

**Returns:** [SiDef](../modules/_cennznet_types.md#sidef)

___
<a id="findsi"></a>

###  findSi

▸ **findSi**(type: *`string`*): [SiDef](../modules/_cennznet_types.md#sidef)

*Defined in packages/types/node_modules/@plugnet/util/format/formatBalance.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [SiDef](../modules/_cennznet_types.md#sidef)

___
<a id="getdefaults"></a>

###  getDefaults

▸ **getDefaults**(): [Defaults](../modules/_cennznet_types.md#defaults)

*Defined in packages/types/node_modules/@plugnet/util/format/formatBalance.d.ts:11*

**Returns:** [Defaults](../modules/_cennznet_types.md#defaults)

___
<a id="getoptions"></a>

###  getOptions

▸ **getOptions**(decimals?: *`number`*): `Array`<[SiDef](../modules/_cennznet_types.md#sidef)>

*Defined in packages/types/node_modules/@plugnet/util/format/formatBalance.d.ts:12*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` decimals | `number` |

**Returns:** `Array`<[SiDef](../modules/_cennznet_types.md#sidef)>

___
<a id="setdefaults"></a>

###  setDefaults

▸ **setDefaults**(defaults: *`Partial`<[Defaults](../modules/_cennznet_types.md#defaults)>*): `void`

*Defined in packages/types/node_modules/@plugnet/util/format/formatBalance.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| defaults | `Partial`<[Defaults](../modules/_cennznet_types.md#defaults)> |

**Returns:** `void`

___

