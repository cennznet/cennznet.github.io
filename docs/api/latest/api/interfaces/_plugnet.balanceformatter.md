[@cennznet/api](../README.md) > [@plugnet](../modules/_plugnet.md) > [BalanceFormatter](../interfaces/_plugnet.balanceformatter.md)

# Interface: BalanceFormatter

## Hierarchy

**BalanceFormatter**

## Callable
▸ **__call**(input?: *`number` \| `string` \| `BN`*, withSi?: *`boolean`*, decimals?: *`number`*): `string`

*Defined in node_modules/@plugnet/util/format/formatBalance.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` input | `number` \| `string` \| `BN` |
| `Optional` withSi | `boolean` |
| `Optional` decimals | `number` |

**Returns:** `string`

## Index

### Methods

* [calcSi](_plugnet.balanceformatter.md#calcsi)
* [findSi](_plugnet.balanceformatter.md#findsi)
* [getDefaults](_plugnet.balanceformatter.md#getdefaults)
* [getOptions](_plugnet.balanceformatter.md#getoptions)
* [setDefaults](_plugnet.balanceformatter.md#setdefaults)

---

## Methods

<a id="calcsi"></a>

###  calcSi

▸ **calcSi**(text: *`string`*, decimals?: *`number`*): [SiDef](../modules/_plugnet.md#sidef)

*Defined in node_modules/@plugnet/util/format/formatBalance.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` decimals | `number` |

**Returns:** [SiDef](../modules/_plugnet.md#sidef)

___
<a id="findsi"></a>

###  findSi

▸ **findSi**(type: *`string`*): [SiDef](../modules/_plugnet.md#sidef)

*Defined in node_modules/@plugnet/util/format/formatBalance.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [SiDef](../modules/_plugnet.md#sidef)

___
<a id="getdefaults"></a>

###  getDefaults

▸ **getDefaults**(): [Defaults](../modules/_plugnet.md#defaults)

*Defined in node_modules/@plugnet/util/format/formatBalance.d.ts:11*

**Returns:** [Defaults](../modules/_plugnet.md#defaults)

___
<a id="getoptions"></a>

###  getOptions

▸ **getOptions**(decimals?: *`number`*): `Array`<[SiDef](../modules/_plugnet.md#sidef)>

*Defined in node_modules/@plugnet/util/format/formatBalance.d.ts:12*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` decimals | `number` |

**Returns:** `Array`<[SiDef](../modules/_plugnet.md#sidef)>

___
<a id="setdefaults"></a>

###  setDefaults

▸ **setDefaults**(defaults: *`Partial`<[Defaults](../modules/_plugnet.md#defaults)>*): `void`

*Defined in node_modules/@plugnet/util/format/formatBalance.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| defaults | `Partial`<[Defaults](../modules/_plugnet.md#defaults)> |

**Returns:** `void`

___

