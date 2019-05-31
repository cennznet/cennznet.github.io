[@cennznet/api](../README.md) > [@cennznet/util](../modules/_cennznet_util.md) > [Keyring](../classes/_cennznet_util.keyring.md)

# Class: Keyring

@polkadot/keyring
=================

Overview
--------

*__name__*: Keyring

*__summary__*: Keyring management of user accounts

*__description__*: Allows generation of keyring pairs from a variety of input combinations, such as json object containing account address or public key, account metadata, and account encoded using `addFromJson`, or by providing those values as arguments separately to `addFromAddress`, or by providing the mnemonic (seed phrase) and account metadata as arguments to `addFromMnemonic`. Stores the keyring pairs in a keyring pair dictionary. Removal of the keyring pairs from the keyring pair dictionary is achieved using `removePair`. Retrieval of all the stored pairs via `getPairs` or perform lookup of a pair for a given account address or public key using `getPair`. JSON metadata associated with an account may be obtained using `toJson` accompanied by the account passphrase.

## Hierarchy

**Keyring**

## Implements

* [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md)

## Index

### Constructors

* [constructor](_cennznet_util.keyring.md#constructor)

### Properties

* [decodeAddress](_cennznet_util.keyring.md#decodeaddress)
* [encodeAddress](_cennznet_util.keyring.md#encodeaddress)
* [pairs](_cennznet_util.keyring.md#pairs)
* [publicKeys](_cennznet_util.keyring.md#publickeys)
* [setAddressPrefix](_cennznet_util.keyring.md#setaddressprefix)
* [type](_cennznet_util.keyring.md#type)

### Methods

* [addFromAddress](_cennznet_util.keyring.md#addfromaddress)
* [addFromJson](_cennznet_util.keyring.md#addfromjson)
* [addFromMnemonic](_cennznet_util.keyring.md#addfrommnemonic)
* [addFromSeed](_cennznet_util.keyring.md#addfromseed)
* [addFromUri](_cennznet_util.keyring.md#addfromuri)
* [addPair](_cennznet_util.keyring.md#addpair)
* [createFromUri](_cennznet_util.keyring.md#createfromuri)
* [getPair](_cennznet_util.keyring.md#getpair)
* [getPairs](_cennznet_util.keyring.md#getpairs)
* [getPublicKeys](_cennznet_util.keyring.md#getpublickeys)
* [removePair](_cennznet_util.keyring.md#removepair)
* [toJson](_cennznet_util.keyring.md#tojson)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Keyring**(options?: *[KeyringOptions](../modules/_cennznet_util.md#keyringoptions)*): [Keyring](_cennznet_util.keyring.md)

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [KeyringOptions](../modules/_cennznet_util.md#keyringoptions) |

**Returns:** [Keyring](_cennznet_util.keyring.md)

___

## Properties

<a id="decodeaddress"></a>

###  decodeAddress

**● decodeAddress**: *[decode](../modules/_cennznet_util.md#decode-1)*

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[decodeAddress](../interfaces/_cennznet_util.keyringinstance.md#decodeaddress)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:24*

___
<a id="encodeaddress"></a>

###  encodeAddress

**● encodeAddress**: *[encode](../modules/_cennznet_util.md#encode)*

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[encodeAddress](../interfaces/_cennznet_util.keyringinstance.md#encodeaddress)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:25*

___
<a id="pairs"></a>

###  pairs

**● pairs**: *`Array`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>*

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[pairs](../interfaces/_cennznet_util.keyringinstance.md#pairs)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:30*

*__description__*: retrieve the pairs (alias for getPairs)

___
<a id="publickeys"></a>

###  publicKeys

**● publicKeys**: *`Array`<`Uint8Array`>*

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[publicKeys](../interfaces/_cennznet_util.keyringinstance.md#publickeys)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:34*

*__description__*: retrieve the publicKeys (alias for getPiblicKeys)

___
<a id="setaddressprefix"></a>

###  setAddressPrefix

**● setAddressPrefix**: *[setPrefix](../modules/_cennznet_util.md#setprefix)*

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[setAddressPrefix](../interfaces/_cennznet_util.keyringinstance.md#setaddressprefix)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:26*

___
<a id="type"></a>

###  type

**● type**: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[type](../interfaces/_cennznet_util.keyringinstance.md#type)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:38*

*__description__*: Returns the type of the keyring, either ed25519 of sr25519

___

## Methods

<a id="addfromaddress"></a>

###  addFromAddress

▸ **addFromAddress**(address: *`string` \| `Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, encoded?: *`Uint8Array` \| `null`*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*, ignoreChecksum?: *`boolean`*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[addFromAddress](../interfaces/_cennznet_util.keyringinstance.md#addfromaddress)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:52*

*__name__*: addFromAddress

*__summary__*: Stores an account, given an account address, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Allows user to explicitely provide separate inputs including account address or public key, and optionally the associated account metadata, and the default encoded value as arguments (that may be obtained from the json file of an account backup), and then generates a keyring pair from them that it passes to `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` encoded | `Uint8Array` \| `null` |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |
| `Optional` ignoreChecksum | `boolean` |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addfromjson"></a>

###  addFromJson

▸ **addFromJson**(__namedParameters: *`object`*, ignoreChecksum?: *`boolean`*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:60*

*__name__*: addFromJson

*__summary__*: Stores an account, given JSON data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Allows user to provide a json object argument that contains account information (that may be obtained from the json file of an account backup), and then generates a keyring pair from it that it passes to `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| address | `string` |
| encoded | `string` |
| encoding | `object` |
| meta | `object` |

**`Optional` ignoreChecksum: `boolean`**

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addfrommnemonic"></a>

###  addFromMnemonic

▸ **addFromMnemonic**(mnemonic: *`string`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[addFromMnemonic](../interfaces/_cennznet_util.keyringinstance.md#addfrommnemonic)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:69*

*__name__*: addFromMnemonic

*__summary__*: Stores an account, given a mnemonic, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Allows user to provide a mnemonic (seed phrase that is provided when account is originally created) argument and a metadata argument that contains account information (that may be obtained from the json file of an account backup), and then generates a keyring pair from it that it passes to `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| mnemonic | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addfromseed"></a>

###  addFromSeed

▸ **addFromSeed**(seed: *`Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[addFromSeed](../interfaces/_cennznet_util.keyringinstance.md#addfromseed)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:77*

*__name__*: addFromSeed

*__summary__*: Stores an account, given seed data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Stores in a keyring pair dictionary the public key of the pair as a key and the pair as the associated value. Allows user to provide the account seed as an argument, and then generates a keyring pair from it that it passes to `addPair` to store in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addfromuri"></a>

###  addFromUri

▸ **addFromUri**(suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[addFromUri](../interfaces/_cennznet_util.keyringinstance.md#addfromuri)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:83*

*__name__*: addFromUri

*__summary__*: Creates an account via an suri

*__description__*: Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed). The secret can be a hex string, mnemonic phrase or a string (to be padded)

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="addpair"></a>

###  addPair

▸ **addPair**(pair: *[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[addPair](../interfaces/_cennznet_util.keyringinstance.md#addpair)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:43*

*__name__*: addPair

*__summary__*: Stores an account, given a keyring pair, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair](../interfaces/_cennznet_util.keyringpair.md) |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="createfromuri"></a>

###  createFromUri

▸ **createFromUri**(_suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta)*, type?: *[KeypairType](../modules/_cennznet_util.md#keypairtype)*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[createFromUri](../interfaces/_cennznet_util.keyringinstance.md#createfromuri)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:89*

*__name__*: createFromUri

*__summry__*: Creates a Keypair from an suri

*__description__*: This creates a pair from the suri, but does not add it to the keyring

**Parameters:**

| Name | Type |
| ------ | ------ |
| _suri | `string` |
| `Optional` meta | [KeyringPair$Meta](../modules/_cennznet_util.md#keyringpair_meta) |
| `Optional` type | [KeypairType](../modules/_cennznet_util.md#keypairtype) |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="getpair"></a>

###  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[getPair](../interfaces/_cennznet_util.keyringinstance.md#getpair)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:96*

*__name__*: getPair

*__summary__*: Retrieves an account keyring pair from the Keyring Pair Dictionary, given an account address

*__description__*: Returns a keyring pair value from the keyring pair dictionary by performing a key lookup using the provided account address or public key (after decoding it).

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="getpairs"></a>

###  getPairs

▸ **getPairs**(): `Array`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[getPairs](../interfaces/_cennznet_util.keyringinstance.md#getpairs)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:102*

*__name__*: getPairs

*__summary__*: Retrieves all account keyring pairs from the Keyring Pair Dictionary

*__description__*: Returns an array list of all the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** `Array`<[KeyringPair](../interfaces/_cennznet_util.keyringpair.md)>

___
<a id="getpublickeys"></a>

###  getPublicKeys

▸ **getPublicKeys**(): `Array`<`Uint8Array`>

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[getPublicKeys](../interfaces/_cennznet_util.keyringinstance.md#getpublickeys)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:108*

*__name__*: getPublicKeys

*__summary__*: Retrieves Public Keys of all Keyring Pairs stored in the Keyring Pair Dictionary

*__description__*: Returns an array list of all the public keys associated with each of the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** `Array`<`Uint8Array`>

___
<a id="removepair"></a>

###  removePair

▸ **removePair**(address: *`string` \| `Uint8Array`*): `void`

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[removePair](../interfaces/_cennznet_util.keyringinstance.md#removepair)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:113*

*__name__*: removePair

*__description__*: Deletes the provided input address or public key from the stored Keyring Pair Dictionary.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `void`

___
<a id="tojson"></a>

###  toJson

▸ **toJson**(address: *`string` \| `Uint8Array`*, passphrase?: *`string`*): [KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json)

*Implementation of [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md).[toJson](../interfaces/_cennznet_util.keyringinstance.md#tojson)*

*Defined in packages/util/node_modules/@plugnet/keyring/index.d.ts:122*

*__name__*: toJson

*__summary__*: Returns a JSON object associated with the input argument that contains metadata assocated with an account

*__description__*: Returns a JSON object containing the metadata associated with an account when valid address or public key and when the account passphrase is provided if the account secret is not already unlocked and available in memory. Note that in [Polkadot-JS Apps](https://github.com/polkadot-js/apps) the user may backup their account to a JSON file that contains this information.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| `Optional` passphrase | `string` |

**Returns:** [KeyringPair$Json](../modules/_cennznet_util.md#keyringpair_json)

___

