[@cennznet/api](../README.md) > [@cennznet/util](../modules/_cennznet_util.md)

# Package: @cennznet/util

## Index

### Classes

* [DeriveJunction](../classes/_cennznet_util.derivejunction.md)
* [ExtError](../classes/_cennznet_util.exterror.md)
* [Keyring](../classes/_cennznet_util.keyring.md)
* [Pairs](../classes/_cennznet_util.pairs.md)

### Interfaces

* [BalanceFormatter](../interfaces/_cennznet_util.balanceformatter.md)
* [Compact](../interfaces/_cennznet_util.compact.md)
* [ExtErrorInterface](../interfaces/_cennznet_util.exterrorinterface.md)
* [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md)
* [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)
* [KeyringPairs](../interfaces/_cennznet_util.keyringpairs.md)
* [Options](../interfaces/_cennznet_util.options-1.md)
* [Options](../interfaces/_cennznet_util.options.md)
* [ToBnOptions](../interfaces/_cennznet_util.tobnoptions.md)

### Type aliases

* [BitLength](_cennznet_util.md#bitlength)
* [DecodeResult](_cennznet_util.md#decoderesult)
* [Defaults](_cennznet_util.md#defaults)
* [Encrypted](_cennznet_util.md#encrypted)
* [ExtractResult](_cennznet_util.md#extractresult)
* [ExtractResult](_cennznet_util.md#extractresult-1)
* [Falsy](_cennznet_util.md#falsy)
* [IpTypes](_cennznet_util.md#iptypes)
* [Keypair](_cennznet_util.md#keypair)
* [KeypairType](_cennznet_util.md#keypairtype)
* [KeyringOptions](_cennznet_util.md#keyringoptions)
* [KeyringPair$Json](_cennznet_util.md#keyringpair_json)
* [KeyringPair$JsonEncoding](_cennznet_util.md#keyringpair_jsonencoding)
* [KeyringPair$JsonVersion](_cennznet_util.md#keyringpair_jsonversion)
* [KeyringPair$Meta](_cennznet_util.md#keyringpair_meta)
* [Logger](_cennznet_util.md#logger)
* [Logger$Data](_cennznet_util.md#logger_data)
* [Logger$Data$Fn](_cennznet_util.md#logger_data_fn)
* [MessageFn](_cennznet_util.md#messagefn)
* [ObjectIndexed](_cennznet_util.md#objectindexed)
* [ObjectIndexed](_cennznet_util.md#objectindexed-1)
* [Observable](_cennznet_util.md#observable)
* [PairInfo](_cennznet_util.md#pairinfo)
* [PairStateJson](_cennznet_util.md#pairstatejson)
* [Prefix](_cennznet_util.md#prefix)
* [Seedpair](_cennznet_util.md#seedpair)
* [SiDef](_cennznet_util.md#sidef)
* [Test](_cennznet_util.md#test)
* [TestKeyringMap](_cennznet_util.md#testkeyringmap)
* [WordCount](_cennznet_util.md#wordcount)

### Variables

* [DEFAULT_BITLENGTH](_cennznet_util.md#default_bitlength)
* [DEV_PHRASE](_cennznet_util.md#dev_phrase)
* [DEV_SEED](_cennznet_util.md#dev_seed)
* [INTEGER](_cennznet_util.md#integer)
* [INTEGER](_cennznet_util.md#integer-1)
* [NONCE_LENGTH](_cennznet_util.md#nonce_length)
* [PKCS8_DIVIDER](_cennznet_util.md#pkcs8_divider)
* [PKCS8_HEADER](_cennznet_util.md#pkcs8_header)
* [PUB_LENGTH](_cennznet_util.md#pub_length)
* [SEC_LENGTH](_cennznet_util.md#sec_length)
* [SEED_LENGTH](_cennznet_util.md#seed_length)
* [SI](_cennznet_util.md#si)
* [SI_MID](_cennznet_util.md#si_mid)
* [STRIP_ZERO](_cennznet_util.md#strip_zero)
* [STRIP_ZERO](_cennznet_util.md#strip_zero-1)
* [defaults](_cennznet_util.md#defaults-1)
* [formatBalance](_cennznet_util.md#formatbalance)
* [tests](_cennznet_util.md#tests)

### Functions

* [arrayFilter](_cennznet_util.md#arrayfilter)
* [assert](_cennznet_util.md#assert)
* [assertSingletonPackage](_cennznet_util.md#assertsingletonpackage)
* [bip39Generate](_cennznet_util.md#bip39generate)
* [bip39ToEntropy](_cennznet_util.md#bip39toentropy)
* [bip39ToMiniSecret](_cennznet_util.md#bip39tominisecret)
* [bip39ToSeed](_cennznet_util.md#bip39toseed)
* [bip39Validate](_cennznet_util.md#bip39validate)
* [blake2AsHex](_cennznet_util.md#blake2ashex)
* [blake2AsU8a](_cennznet_util.md#blake2asu8a)
* [blake2b](_cennznet_util.md#blake2b)
* [bnToBn](_cennznet_util.md#bntobn)
* [bnToHex](_cennznet_util.md#bntohex)
* [bnToU8a](_cennznet_util.md#bntou8a)
* [bufferToU8a](_cennznet_util.md#buffertou8a)
* [calcSi](_cennznet_util.md#calcsi)
* [compactAddLength](_cennznet_util.md#compactaddlength)
* [compactFromU8a](_cennznet_util.md#compactfromu8a)
* [compactStripLength](_cennznet_util.md#compactstriplength)
* [compactToU8a](_cennznet_util.md#compacttou8a)
* [createPair](_cennznet_util.md#createpair)
* [cryptoWaitReady](_cennznet_util.md#cryptowaitready)
* [decode](_cennznet_util.md#decode)
* [decode](_cennznet_util.md#decode-1)
* [deriveHard](_cennznet_util.md#derivehard)
* [deriveHard](_cennznet_util.md#derivehard-1)
* [deriveSoft](_cennznet_util.md#derivesoft)
* [ed25519KeypairFromSeed](_cennznet_util.md#ed25519keypairfromseed)
* [ed25519Sign](_cennznet_util.md#ed25519sign)
* [ed25519Verify](_cennznet_util.md#ed25519verify)
* [encode](_cennznet_util.md#encode)
* [encode](_cennznet_util.md#encode-1)
* [everybody](_cennznet_util.md#everybody)
* [ext_bip39_generate](_cennznet_util.md#ext_bip39_generate)
* [ext_bip39_to_entropy](_cennznet_util.md#ext_bip39_to_entropy)
* [ext_bip39_to_mini_secret](_cennznet_util.md#ext_bip39_to_mini_secret)
* [ext_bip39_to_seed](_cennznet_util.md#ext_bip39_to_seed)
* [ext_bip39_validate](_cennznet_util.md#ext_bip39_validate)
* [ext_blake2b](_cennznet_util.md#ext_blake2b)
* [ext_ed_from_seed](_cennznet_util.md#ext_ed_from_seed)
* [ext_ed_sign](_cennznet_util.md#ext_ed_sign)
* [ext_ed_verify](_cennznet_util.md#ext_ed_verify)
* [ext_keccak256](_cennznet_util.md#ext_keccak256)
* [ext_pbkdf2](_cennznet_util.md#ext_pbkdf2)
* [ext_sha512](_cennznet_util.md#ext_sha512)
* [ext_sr_derive_keypair_hard](_cennznet_util.md#ext_sr_derive_keypair_hard)
* [ext_sr_derive_keypair_soft](_cennznet_util.md#ext_sr_derive_keypair_soft)
* [ext_sr_derive_public_soft](_cennznet_util.md#ext_sr_derive_public_soft)
* [ext_sr_from_seed](_cennznet_util.md#ext_sr_from_seed)
* [ext_sr_sign](_cennznet_util.md#ext_sr_sign)
* [ext_sr_verify](_cennznet_util.md#ext_sr_verify)
* [ext_twox](_cennznet_util.md#ext_twox)
* [findSi](_cennznet_util.md#findsi)
* [format](_cennznet_util.md#format)
* [formatDecimal](_cennznet_util.md#formatdecimal)
* [formatElapsed](_cennznet_util.md#formatelapsed)
* [formatNumber](_cennznet_util.md#formatnumber)
* [formatUnits](_cennznet_util.md#formatunits-1)
* [formatUnits](_cennznet_util.md#formatunits)
* [hash](_cennznet_util.md#hash)
* [hexAddPrefix](_cennznet_util.md#hexaddprefix)
* [hexFixLength](_cennznet_util.md#hexfixlength)
* [hexHasPrefix](_cennznet_util.md#hexhasprefix)
* [hexStripPrefix](_cennznet_util.md#hexstripprefix)
* [hexToBn](_cennznet_util.md#hextobn)
* [hexToNumber](_cennznet_util.md#hextonumber)
* [hexToU8a](_cennznet_util.md#hextou8a)
* [isBn](_cennznet_util.md#isbn)
* [isBoolean](_cennznet_util.md#isboolean)
* [isBuffer](_cennznet_util.md#isbuffer)
* [isError](_cennznet_util.md#iserror)
* [isFunction](_cennznet_util.md#isfunction)
* [isHex](_cennznet_util.md#ishex)
* [isInstanceOf](_cennznet_util.md#isinstanceof)
* [isIp](_cennznet_util.md#isip)
* [isJsonObject](_cennznet_util.md#isjsonobject)
* [isNull](_cennznet_util.md#isnull)
* [isNumber](_cennznet_util.md#isnumber)
* [isObject](_cennznet_util.md#isobject)
* [isObservable](_cennznet_util.md#isobservable)
* [isReady](_cennznet_util.md#isready-1)
* [isReady](_cennznet_util.md#isready)
* [isSafeInteger](_cennznet_util.md#issafeinteger-1)
* [isSafeInteger](_cennznet_util.md#issafeinteger)
* [isString](_cennznet_util.md#isstring)
* [isTestChain](_cennznet_util.md#istestchain)
* [isU8a](_cennznet_util.md#isu8a)
* [isUndefined](_cennznet_util.md#isundefined)
* [keccak256](_cennznet_util.md#keccak256)
* [keccakAsHex](_cennznet_util.md#keccakashex)
* [keccakAsU8a](_cennznet_util.md#keccakasu8a)
* [keyExtract](_cennznet_util.md#keyextract)
* [keyExtractPath](_cennznet_util.md#keyextractpath)
* [keyFromPath](_cennznet_util.md#keyfrompath)
* [keyHdkdEd25519](_cennznet_util.md#keyhdkded25519)
* [keyHdkdSr25519](_cennznet_util.md#keyhdkdsr25519)
* [logger](_cennznet_util.md#logger-1)
* [mnemonicGenerate](_cennznet_util.md#mnemonicgenerate)
* [mnemonicValidate](_cennznet_util.md#mnemonicvalidate)
* [naclDecrypt](_cennznet_util.md#nacldecrypt)
* [naclEncrypt](_cennznet_util.md#naclencrypt)
* [naclKeypairFromRandom](_cennznet_util.md#naclkeypairfromrandom)
* [naclKeypairFromSecret](_cennznet_util.md#naclkeypairfromsecret)
* [naclKeypairFromSeed](_cennznet_util.md#naclkeypairfromseed)
* [naclKeypairFromString](_cennznet_util.md#naclkeypairfromstring)
* [naclSign](_cennznet_util.md#naclsign)
* [naclVerify](_cennznet_util.md#naclverify)
* [numberToHex](_cennznet_util.md#numbertohex)
* [numberToU8a](_cennznet_util.md#numbertou8a)
* [parseUnits](_cennznet_util.md#parseunits-1)
* [parseUnits](_cennznet_util.md#parseunits)
* [pbkdf2](_cennznet_util.md#pbkdf2)
* [promisify](_cennznet_util.md#promisify)
* [randomAsHex](_cennznet_util.md#randomashex)
* [randomAsNumber](_cennznet_util.md#randomasnumber)
* [randomAsU8a](_cennznet_util.md#randomasu8a)
* [schnorrkelKeypairFromSeed](_cennznet_util.md#schnorrkelkeypairfromseed)
* [schnorrkelKeypairFromU8a](_cennznet_util.md#schnorrkelkeypairfromu8a)
* [schnorrkelKeypairToU8a](_cennznet_util.md#schnorrkelkeypairtou8a)
* [schnorrkelSign](_cennznet_util.md#schnorrkelsign)
* [schnorrkelVerify](_cennznet_util.md#schnorrkelverify)
* [secp256k1Recover](_cennznet_util.md#secp256k1recover)
* [setPrefix](_cennznet_util.md#setprefix)
* [sha512](_cennznet_util.md#sha512)
* [sha512AsU8a](_cennznet_util.md#sha512asu8a)
* [sr25519DeriveKeypairHard](_cennznet_util.md#sr25519derivekeypairhard)
* [sr25519DeriveKeypairSoft](_cennznet_util.md#sr25519derivekeypairsoft)
* [sr25519DerivePublicSoft](_cennznet_util.md#sr25519derivepublicsoft)
* [sr25519KeypairFromSeed](_cennznet_util.md#sr25519keypairfromseed)
* [sr25519Sign](_cennznet_util.md#sr25519sign)
* [sr25519Verify](_cennznet_util.md#sr25519verify)
* [stringLowerFirst](_cennznet_util.md#stringlowerfirst)
* [stringShorten](_cennznet_util.md#stringshorten)
* [stringToU8a](_cennznet_util.md#stringtou8a)
* [stringUpperFirst](_cennznet_util.md#stringupperfirst)
* [stripEndZero](_cennznet_util.md#stripendzero)
* [stripEndZero](_cennznet_util.md#stripendzero-1)
* [testKeyring](_cennznet_util.md#testkeyring)
* [testKeyringPairs](_cennznet_util.md#testkeyringpairs)
* [toEntropy](_cennznet_util.md#toentropy)
* [toFixed](_cennznet_util.md#tofixed)
* [toFixed](_cennznet_util.md#tofixed-1)
* [toJson](_cennznet_util.md#tojson)
* [toMiniSecret](_cennznet_util.md#tominisecret)
* [toSeed](_cennznet_util.md#toseed)
* [twox](_cennznet_util.md#twox)
* [u8aConcat](_cennznet_util.md#u8aconcat)
* [u8aFixLength](_cennznet_util.md#u8afixlength)
* [u8aToBn](_cennznet_util.md#u8atobn)
* [u8aToBuffer](_cennznet_util.md#u8atobuffer)
* [u8aToHex](_cennznet_util.md#u8atohex)
* [u8aToString](_cennznet_util.md#u8atostring)
* [u8aToU8a](_cennznet_util.md#u8atou8a)
* [waitReady](_cennznet_util.md#waitready)
* [waitReady](_cennznet_util.md#waitready-1)
* [xxhash64AsBn](_cennznet_util.md#xxhash64asbn)
* [xxhash64AsHex](_cennznet_util.md#xxhash64ashex)
* [xxhash64AsRaw](_cennznet_util.md#xxhash64asraw)
* [xxhash64AsValue](_cennznet_util.md#xxhash64asvalue)
* [xxhashAsHex](_cennznet_util.md#xxhashashex)
* [xxhashAsU8a](_cennznet_util.md#xxhashasu8a)

---

## Type aliases

<a id="bitlength"></a>

###  BitLength

**Ƭ BitLength**: *`8` \| `16` \| `32` \| `64` \| `128` \| `256`*

*Defined in packages/types/node_modules/@plugnet/util/compact/types.d.ts:1*

___
<a id="decoderesult"></a>

###  DecodeResult

**Ƭ DecodeResult**: *[PairInfo](_cennznet_util.md#pairinfo) & `object`*

*Defined in packages/util/node_modules/@plugnet/keyring/pair/decode.d.ts:2*

___
<a id="defaults"></a>

###  Defaults

**Ƭ Defaults**: *`object`*

*Defined in packages/util/node_modules/@plugnet/util/format/formatBalance.d.ts:3*

#### Type declaration

 decimals: `number`

 unit: `string`

___
<a id="encrypted"></a>

###  Encrypted

**Ƭ Encrypted**: *`object`*

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/encrypt.d.ts:1*

#### Type declaration

 encrypted: `Uint8Array`

 nonce: `Uint8Array`

___
<a id="extractresult"></a>

###  ExtractResult

**Ƭ ExtractResult**: *`object`*

*Defined in packages/util/node_modules/@plugnet/util-crypto/key/extractSuri.d.ts:2*

#### Type declaration

`Optional`  password: `string`

 path: `Array`<[DeriveJunction](../classes/_cennznet_util.derivejunction.md)>

 phrase: `string`

___
<a id="extractresult-1"></a>

###  ExtractResult

**Ƭ ExtractResult**: *`object`*

*Defined in packages/util/node_modules/@plugnet/util-crypto/key/extractPath.d.ts:2*

#### Type declaration

 parts: `null` \| `Array`<`string`>

 path: `Array`<[DeriveJunction](../classes/_cennznet_util.derivejunction.md)>

___
<a id="falsy"></a>

###  Falsy

**Ƭ Falsy**: *`null` \| `undefined` \| `false` \| `0` \| `""`*

*Defined in packages/util/node_modules/@plugnet/util/assert.d.ts:2*

___
<a id="iptypes"></a>

###  IpTypes

**Ƭ IpTypes**: *"v4" \| "v6"*

*Defined in packages/types/node_modules/@plugnet/util/is/ip.d.ts:1*

___
<a id="keypair"></a>

###  Keypair

**Ƭ Keypair**: *`object`*

*Defined in packages/util/node_modules/@plugnet/util-crypto/types.d.ts:1*

#### Type declaration

 publicKey: `Uint8Array`

 secretKey: `Uint8Array`

___
<a id="keypairtype"></a>

###  KeypairType

**Ƭ KeypairType**: *"ed25519" \| "sr25519"*

*Defined in packages/util/node_modules/@plugnet/util-crypto/types.d.ts:9*

___
<a id="keyringoptions"></a>

###  KeyringOptions

**Ƭ KeyringOptions**: *`object`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:3*

#### Type declaration

`Optional`  addressPrefix: [Prefix](_cennznet_util.md#prefix)

`Optional`  type: [KeypairType](_cennznet_util.md#keypairtype)

___
<a id="keyringpair_json"></a>

###  KeyringPair$Json

**Ƭ KeyringPair$Json**: *`object`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:16*

#### Type declaration

 address: `string`

 encoded: `string`

 encoding: [KeyringPair$JsonEncoding](_cennznet_util.md#keyringpair_jsonencoding)

 meta: [KeyringPair$Meta](_cennznet_util.md#keyringpair_meta)

___
<a id="keyringpair_jsonencoding"></a>

###  KeyringPair$JsonEncoding

**Ƭ KeyringPair$JsonEncoding**: *`object`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:11*

#### Type declaration

 content: ["pkcs8", [KeypairType](_cennznet_util.md#keypairtype)]

 type: "xsalsa20-poly1305" \| "none"

 version: [KeyringPair$JsonVersion](_cennznet_util.md#keyringpair_jsonversion)

___
<a id="keyringpair_jsonversion"></a>

###  KeyringPair$JsonVersion

**Ƭ KeyringPair$JsonVersion**: *"0" \| "1" \| "2"*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:10*

___
<a id="keyringpair_meta"></a>

###  KeyringPair$Meta

**Ƭ KeyringPair$Meta**: *`object`*

*Defined in packages/util/node_modules/@plugnet/keyring/types.d.ts:7*

#### Type declaration

[index: `string`]: `any`

___
<a id="logger"></a>

###  Logger

**Ƭ Logger**: *`object`*

*Defined in packages/types/node_modules/@plugnet/util/types.d.ts:9*

#### Type declaration

 debug: `function`

▸(...values: *[Logger$Data](_cennznet_util.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_cennznet_util.md#logger_data) |

**Returns:** `void`

 error: `function`

▸(...values: *[Logger$Data](_cennznet_util.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_cennznet_util.md#logger_data) |

**Returns:** `void`

 log: `function`

▸(...values: *[Logger$Data](_cennznet_util.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_cennznet_util.md#logger_data) |

**Returns:** `void`

 noop: `function`

▸(...values: *[Logger$Data](_cennznet_util.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_cennznet_util.md#logger_data) |

**Returns:** `void`

 warn: `function`

▸(...values: *[Logger$Data](_cennznet_util.md#logger_data)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [Logger$Data](_cennznet_util.md#logger_data) |

**Returns:** `void`

___
<a id="logger_data"></a>

###  Logger$Data

**Ƭ Logger$Data**: *`Array`<`any` \| [Logger$Data$Fn](_cennznet_util.md#logger_data_fn)>*

*Defined in packages/types/node_modules/@plugnet/util/types.d.ts:8*

___
<a id="logger_data_fn"></a>

###  Logger$Data$Fn

**Ƭ Logger$Data$Fn**: *`function`*

*Defined in packages/types/node_modules/@plugnet/util/types.d.ts:7*

#### Type declaration
▸(): `Array`<`any`>

**Returns:** `Array`<`any`>

___
<a id="messagefn"></a>

###  MessageFn

**Ƭ MessageFn**: *`function`*

*Defined in packages/util/node_modules/@plugnet/util/assert.d.ts:1*

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="objectindexed"></a>

###  ObjectIndexed

**Ƭ ObjectIndexed**: *`object`*

*Defined in packages/types/node_modules/@plugnet/util/is/object.d.ts:1*

#### Type declaration

[index: `string`]: `any`

___
<a id="objectindexed-1"></a>

###  ObjectIndexed

**Ƭ ObjectIndexed**: *`object`*

*Defined in packages/types/node_modules/@plugnet/util/is/jsonObject.d.ts:1*

#### Type declaration

[index: `string`]: `any`

___
<a id="observable"></a>

###  Observable

**Ƭ Observable**: *`object`*

*Defined in packages/types/node_modules/@plugnet/util/is/observable.d.ts:1*

#### Type declaration

 next: `function`

▸(...paarams: *`any`[]*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` paarams | `any`[] |

**Returns:** `any`

___
<a id="pairinfo"></a>

###  PairInfo

**Ƭ PairInfo**: *`object`*

*Defined in packages/util/node_modules/@plugnet/keyring/pair/types.d.ts:1*

#### Type declaration

 publicKey: `Uint8Array`

`Optional`  secretKey: `Uint8Array`

`Optional`  seed: `Uint8Array` \| `null`

___
<a id="pairstatejson"></a>

###  PairStateJson

**Ƭ PairStateJson**: *[KeyringPair$Meta](_cennznet_util.md#keyringpair_meta) & `object`*

*Defined in packages/util/node_modules/@plugnet/keyring/pair/toJson.d.ts:3*

___
<a id="prefix"></a>

###  Prefix

**Ƭ Prefix**: *`0` \| `1` \| `3` \| `42` \| `43` \| `68` \| `69`*

*Defined in packages/util/node_modules/@plugnet/keyring/address/types.d.ts:1*

___
<a id="seedpair"></a>

###  Seedpair

**Ƭ Seedpair**: *`object`*

*Defined in packages/util/node_modules/@plugnet/util-crypto/types.d.ts:5*

#### Type declaration

 publicKey: `Uint8Array`

 seed: `Uint8Array`

___
<a id="sidef"></a>

###  SiDef

**Ƭ SiDef**: *`object`*

*Defined in packages/types/node_modules/@plugnet/util/format/si.d.ts:1*

#### Type declaration

 power: `number`

 text: `string`

 value: `string`

___
<a id="test"></a>

###  Test

**Ƭ Test**: *[`string`, `string`, `string`, `string`]*

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/keypair/testing.d.ts:1*

___
<a id="testkeyringmap"></a>

###  TestKeyringMap

**Ƭ TestKeyringMap**: *`object`*

*Defined in packages/util/node_modules/@plugnet/keyring/testingPairs.d.ts:2*

#### Type declaration

[index: `string`]: [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="wordcount"></a>

###  WordCount

**Ƭ WordCount**: *`12` \| `15` \| `18` \| `21` \| `24`*

*Defined in packages/util/node_modules/@plugnet/util-crypto/mnemonic/generate.d.ts:2*

___

## Variables

<a id="default_bitlength"></a>

### `<Const>` DEFAULT_BITLENGTH

**● DEFAULT_BITLENGTH**: *[BitLength](_cennznet_util.md#bitlength)*

*Defined in packages/util/node_modules/@plugnet/util/compact/defaults.d.ts:2*

___
<a id="dev_phrase"></a>

### `<Const>` DEV_PHRASE

**● DEV_PHRASE**: *"bottom drive obey lake curtain smoke basket hold race lonely fit walk"* = "bottom drive obey lake curtain smoke basket hold race lonely fit walk"

*Defined in packages/util/node_modules/@plugnet/keyring/defaults.d.ts:1*

___
<a id="dev_seed"></a>

### `<Const>` DEV_SEED

**● DEV_SEED**: *"0xfac7959dbfe72f052e5a0c3c8d6530f202b02fd8f9f5ca3580ec8deb7797479e"* = "0xfac7959dbfe72f052e5a0c3c8d6530f202b02fd8f9f5ca3580ec8deb7797479e"

*Defined in packages/util/node_modules/@plugnet/keyring/defaults.d.ts:2*

___
<a id="integer"></a>

### `<Const>` INTEGER

**● INTEGER**: *`RegExp`* =  /^\d+$/

*Defined in packages/util/src/is/integer.ts:15*

___
<a id="integer-1"></a>

### `<Const>` INTEGER

**● INTEGER**: *`RegExp`* =  /^\d+$/

*Defined in node_modules/@cennznet/util/src/is/integer.ts:15*

___
<a id="nonce_length"></a>

### `<Const>` NONCE_LENGTH

**● NONCE_LENGTH**: *`24`* = 24

*Defined in packages/util/node_modules/@plugnet/keyring/pair/defaults.d.ts:1*

___
<a id="pkcs8_divider"></a>

### `<Const>` PKCS8_DIVIDER

**● PKCS8_DIVIDER**: *`Uint8Array`*

*Defined in packages/util/node_modules/@plugnet/keyring/pair/defaults.d.ts:2*

___
<a id="pkcs8_header"></a>

### `<Const>` PKCS8_HEADER

**● PKCS8_HEADER**: *`Uint8Array`*

*Defined in packages/util/node_modules/@plugnet/keyring/pair/defaults.d.ts:3*

___
<a id="pub_length"></a>

### `<Const>` PUB_LENGTH

**● PUB_LENGTH**: *`32`* = 32

*Defined in packages/util/node_modules/@plugnet/keyring/pair/defaults.d.ts:4*

___
<a id="sec_length"></a>

### `<Const>` SEC_LENGTH

**● SEC_LENGTH**: *`64`* = 64

*Defined in packages/util/node_modules/@plugnet/keyring/pair/defaults.d.ts:5*

___
<a id="seed_length"></a>

### `<Const>` SEED_LENGTH

**● SEED_LENGTH**: *`32`* = 32

*Defined in packages/util/node_modules/@plugnet/keyring/pair/defaults.d.ts:6*

___
<a id="si"></a>

### `<Const>` SI

**● SI**: *`Array`<[SiDef](_cennznet_util.md#sidef)>*

*Defined in packages/types/node_modules/@plugnet/util/format/si.d.ts:7*

___
<a id="si_mid"></a>

### `<Const>` SI_MID

**● SI_MID**: *`8`* = 8

*Defined in packages/types/node_modules/@plugnet/util/format/si.d.ts:6*

___
<a id="strip_zero"></a>

### `<Const>` STRIP_ZERO

**● STRIP_ZERO**: *`RegExp`* =  /^(.*?)(0*)$/

*Defined in packages/util/src/format/stripEndZero.ts:17*

___
<a id="strip_zero-1"></a>

### `<Const>` STRIP_ZERO

**● STRIP_ZERO**: *`RegExp`* =  /^(.*?)(0*)$/

*Defined in node_modules/@cennznet/util/src/format/stripEndZero.ts:17*

___
<a id="defaults-1"></a>

### `<Const>` defaults

**● defaults**: *`object`*

*Defined in packages/util/node_modules/@plugnet/keyring/address/defaults.d.ts:2*

#### Type declaration

 allowedDecodedLengths: `number`[]

 allowedEncodedLengths: `number`[]

 allowedPrefix: [Prefix](_cennznet_util.md#prefix)[]

 prefix: [Prefix](_cennznet_util.md#prefix)

___
<a id="formatbalance"></a>

### `<Const>` formatBalance

**● formatBalance**: *[BalanceFormatter](../interfaces/_cennznet_util.balanceformatter.md)*

*Defined in packages/util/node_modules/@plugnet/util/format/formatBalance.d.ts:15*

___
<a id="tests"></a>

### `<Const>` tests

**● tests**: *`Array`<[Test](_cennznet_util.md#test)>*

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/keypair/testing.d.ts:2*

___

## Functions

<a id="arrayfilter"></a>

###  arrayFilter

▸ **arrayFilter**(array: *`Array`<`any`>*, allowNulls?: *`boolean`*): `Array`<`any`>

*Defined in packages/util/node_modules/@plugnet/util/array/filter.d.ts:16*

*__name__*: arrayFilter

*__summary__*: Filters undefined and (optionally) null values from an array

*__description__*: Returns a new array with all `undefined` values removed. Optionally, when `allowNulls = false`, it removes the `null` values as well

*__example__*:   

```javascript
import { arrayFilter } from '@plugnet/util';

arrayFilter([0, void 0, true, null, false, '']); // [0, true, null, false, '']
arrayFilter([0, void 0, true, null, false, ''], false); // [0, true, false, '']
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| array | `Array`<`any`> |
| `Optional` allowNulls | `boolean` |

**Returns:** `Array`<`any`>

___
<a id="assert"></a>

###  assert

▸ **assert**<`T`>(test: *[Falsy](_cennznet_util.md#falsy) \| `T`*, message: *`string` \| [MessageFn](_cennznet_util.md#messagefn)*, code?: *`number`*, data?: *`any`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/util/assert.d.ts:19*

*__name__*: assert

*__summary__*: Checks for a valid test, if not ExtError is thrown.

*__description__*: Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an ExtError with the supplied `message` and an optional `code` and `data`. When `test` passes, `true` is returned.

*__example__*:   

```javascript
const { assert } from '@plugnet/util';

assert(true, 'True should be true'); // true returned
assert(false, 'False should not be true'); // ExtError thrown
assert(false, () => 'message'); // ExtError with 'message'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| test | [Falsy](_cennznet_util.md#falsy) \| `T` |
| message | `string` \| [MessageFn](_cennznet_util.md#messagefn) |
| `Optional` code | `number` |
| `Optional` data | `any` |

**Returns:** `boolean`

___
<a id="assertsingletonpackage"></a>

###  assertSingletonPackage

▸ **assertSingletonPackage**(name: *`string`*): `void`

*Defined in packages/util/node_modules/@plugnet/util/assertSingletonPackage.d.ts:5*

*__name__*: assertSingletonPackage

*__summary__*: Checks that a specific package is only imported once

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="bip39generate"></a>

###  bip39Generate

▸ **bip39Generate**(words: *`12` \| `15` \| `18` \| `21` \| `24`*): `string`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| words | `12` \| `15` \| `18` \| `21` \| `24` |

**Returns:** `string`

___
<a id="bip39toentropy"></a>

###  bip39ToEntropy

▸ **bip39ToEntropy**(phrase: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| phrase | `string` |

**Returns:** `Uint8Array`

___
<a id="bip39tominisecret"></a>

###  bip39ToMiniSecret

▸ **bip39ToMiniSecret**(phrase: *`string`*, password: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| phrase | `string` |
| password | `string` |

**Returns:** `Uint8Array`

___
<a id="bip39toseed"></a>

###  bip39ToSeed

▸ **bip39ToSeed**(phrase: *`string`*, password: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:8*

**Parameters:**

| Name | Type |
| ------ | ------ |
| phrase | `string` |
| password | `string` |

**Returns:** `Uint8Array`

___
<a id="bip39validate"></a>

###  bip39Validate

▸ **bip39Validate**(phrase: *`string`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| phrase | `string` |

**Returns:** `boolean`

___
<a id="blake2ashex"></a>

###  blake2AsHex

▸ **blake2AsHex**(data: *`Uint8Array` \| `string`*, bitLength?: *`number`*): `string`

*Defined in packages/util/node_modules/@plugnet/util-crypto/blake2/asHex.d.ts:15*

*__name__*: blake2AsHex

*__summary__*: Creates a blake2b hex from the input.

*__description__*: From a `Uint8Array` input, create the blake2b and return the result as a hex string with the specified `bitLength`.

*__example__*:   

```javascript
import { blake2AsHex } from '@plugnet/util-crypto';

blake2AsHex('abc'); // => 0xba80a53f981c4d0d
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` \| `string` |
| `Optional` bitLength | `number` |

**Returns:** `string`

___
<a id="blake2asu8a"></a>

###  blake2AsU8a

▸ **blake2AsU8a**(data: *`Uint8Array` \| `string`*, bitLength?: *`number`*, key?: *`Uint8Array` \| `null`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/blake2/asU8a.d.ts:15*

*__name__*: blake2AsU8a

*__summary__*: Creates a blake2b u8a from the input.

*__description__*: From a `Uint8Array` input, create the blake2b and return the result as a u8a with the specified `bitLength`.

*__example__*:   

```javascript
import { blake2AsU8a } from '@plugnet/util-crypto';

blake2AsU8a('abc'); // => [0xba, 0x80, 0xa53, 0xf98, 0x1c, 0x4d, 0x0d]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` \| `string` |
| `Optional` bitLength | `number` |
| `Optional` key | `Uint8Array` \| `null` |

**Returns:** `Uint8Array`

___
<a id="blake2b"></a>

###  blake2b

▸ **blake2b**(data: *`Uint8Array`*, key: *`Uint8Array`*, byteSize: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` |
| key | `Uint8Array` |
| byteSize | `number` |

**Returns:** `Uint8Array`

___
<a id="bntobn"></a>

###  bnToBn

▸ **bnToBn**(value?: *`BN` \| `number` \| `null`*): `BN`

*Defined in packages/types/node_modules/@plugnet/util/bn/toBn.d.ts:18*

*__name__*: bnToBn

*__summary__*: Creates a BN value from a BN.js bignumber or number input.

*__description__*: `null` inputs returns a `0x0` result, BN values returns the value, numnbers returns a BN representation.

*__example__*:   

```javascript
import BN from 'bn.js';
import { bnToBn } from '@plugnet/util';

bnToBn(0x1234); // => BN(0x1234)
bnToBn(new BN(0x1234)); // => BN(0x1234)
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `BN` \| `number` \| `null` |

**Returns:** `BN`

___
<a id="bntohex"></a>

###  bnToHex

▸ **bnToHex**(value?: *`BN` \| `number` \| `null`*, options?: *`number` \| [Options](../interfaces/_cennznet_types.options.md)*): `string`

*Defined in packages/types/node_modules/@plugnet/util/bn/toHex.d.ts:21*

*__name__*: bnToHex

*__summary__*: Creates a hex value from a BN.js bignumber object.

*__description__*: `null` inputs returns a `0x` result, BN values return the actual value as a `0x` prefixed hex value. Anything that is not a BN object throws an error. With `bitLength` set, it fixes the number to the specified length.

*__example__*:   

```javascript
import BN from 'bn.js';
import { bnToHex } from '@plugnet/util';

bnToHex(new BN(0x123456)); // => '0x123456'
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `BN` \| `number` \| `null` |
| `Optional` options | `number` \| [Options](../interfaces/_cennznet_types.options.md) |

**Returns:** `string`

___
<a id="bntou8a"></a>

###  bnToU8a

▸ **bnToU8a**(value: *`BN` \| `number` \| `null`*, options?: *[Options](../interfaces/_cennznet_types.options-1.md)*): `Uint8Array`

▸ **bnToU8a**(value: *`BN` \| `number` \| `null`*, bitLength?: *`number`*, isLe?: *`boolean`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/bn/toU8a.d.ts:20*

*__name__*: bnToU8a

*__summary__*: Creates a Uint8Array object from a BN.

*__description__*: `null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `BN` input values return the actual bytes value converted to a `Uint8Array`. Optionally convert using little-endian format if `isLE` is set.

*__example__*:   

```javascript
import { bnToU8a } from '@plugnet/util';

bnToU8a(new BN(0x1234)); // => [0x12, 0x34]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `BN` \| `number` \| `null` |
| `Optional` options | [Options](../interfaces/_cennznet_types.options-1.md) |

**Returns:** `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/bn/toU8a.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `BN` \| `number` \| `null` |
| `Optional` bitLength | `number` |
| `Optional` isLe | `boolean` |

**Returns:** `Uint8Array`

___
<a id="buffertou8a"></a>

###  bufferToU8a

▸ **bufferToU8a**(buffer?: *`Buffer` \| `number`[] \| `null`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/buffer/toU8a.d.ts:16*

*__name__*: bufferToU8a

*__summary__*: Creates a Uint8Array value from a Buffer object.

*__description__*: `null` inputs returns an empty result, `Buffer` values return the actual value as a `Uint8Array`. Anything that is not a `Buffer` object throws an error.

*__example__*:   

```javascript
import { bufferToU8a } from '@plugnet/util';

bufferToU8a(Buffer.from([1, 2, 3]));
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` buffer | `Buffer` \| `number`[] \| `null` |

**Returns:** `Uint8Array`

___
<a id="calcsi"></a>

###  calcSi

▸ **calcSi**(text: *`string`*, decimals: *`number`*): [SiDef](_cennznet_util.md#sidef)

*Defined in packages/types/node_modules/@plugnet/util/format/si.d.ts:8*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| decimals | `number` |

**Returns:** [SiDef](_cennznet_util.md#sidef)

___
<a id="compactaddlength"></a>

###  compactAddLength

▸ **compactAddLength**(input: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util/compact/addLength.d.ts:13*

*__name__*: compactAddLength

*__description__*: Adds a length prefix to the input value

*__example__*:   

```javascript
import { compactAddLength } from '@plugnet/util';

console.log(compactAddLength(new Uint8Array([0xde, 0xad, 0xbe, 0xef]))); // Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef])
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="compactfromu8a"></a>

###  compactFromU8a

▸ **compactFromU8a**(_input: *`Uint8Array` \| `string`*, bitLength?: *[BitLength](_cennznet_util.md#bitlength)*): [`number`, `BN`]

*Defined in packages/util/node_modules/@plugnet/util/compact/fromU8a.d.ts:17*

*__name__*: compactFromU8a

*__description__*: Retrievs the offset and encoded length from a compact-prefixed value

*__example__*:   

```javascript
import { compactFromU8a } from '@plugnet/util';

const [offset, length] = compactFromU8a(new Uint8Array([254, 255, 3, 0]), 32));

console.log('value offset=', offset, 'length=', length); // 4, 0xffff
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| _input | `Uint8Array` \| `string` |
| `Optional` bitLength | [BitLength](_cennznet_util.md#bitlength) |

**Returns:** [`number`, `BN`]

___
<a id="compactstriplength"></a>

###  compactStripLength

▸ **compactStripLength**(input: *`Uint8Array`*, bitLength?: *[BitLength](_cennznet_util.md#bitlength)*): [`number`, `Uint8Array`]

*Defined in packages/types/node_modules/@plugnet/util/compact/stripLength.d.ts:14*

*__name__*: compactStripLength

*__description__*: Removes the length prefix, returning both the total length (including the value + compact encoding) and the decoded value with the correct length

*__example__*:   

```javascript
import { compactStripLength } from '@plugnet/util';

console.log(compactStripLength(new Uint8Array([2 << 2, 0xde, 0xad]))); // [2, Uint8Array[0xde, 0xad]]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `Uint8Array` |
| `Optional` bitLength | [BitLength](_cennznet_util.md#bitlength) |

**Returns:** [`number`, `Uint8Array`]

___
<a id="compacttou8a"></a>

###  compactToU8a

▸ **compactToU8a**(_value: *`BN` \| `number`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/compact/toU8a.d.ts:14*

*__name__*: compactToU8a

*__description__*: Encodes a number into a compact representation

*__example__*:   

```javascript
import { compactToU8a } from '@plugnet/util';

console.log(compactToU8a(511, 32)); // Uint8Array([0b11111101, 0b00000111])
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| _value | `BN` \| `number` |

**Returns:** `Uint8Array`

___
<a id="createpair"></a>

###  createPair

▸ **createPair**(type: *[KeypairType](_cennznet_util.md#keypairtype)*, __namedParameters: *`object`*, meta?: *[KeyringPair$Meta](_cennznet_util.md#keyringpair_meta)*, encoded?: *`Uint8Array` \| `null`*): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/pair/index.d.ts:35*

*__name__*: pair

*__summary__*: Creates a keyring pair object

*__description__*: Creates a keyring pair object with provided account public key, metadata, and encoded arguments. The keyring pair stores the account state including the encoded address and associated metadata.

It has properties whose values are functions that may be called to perform account actions:

*   `address` function retrieves the address associated with the account.
*   `decodedPkcs8` function is called with the account passphrase and account encoded public key. It decodes the encoded public key using the passphrase provided to obtain the decoded account public key and associated secret key that are then available in memory, and changes the account address stored in the state of the pair to correspond to the address of the decoded public key.
*   `encodePkcs8` function when provided with the correct passphrase associated with the account pair and when the secret key is in memory (when the account pair is not locked) it returns an encoded public key of the account.
*   `getMeta` returns the metadata that is stored in the state of the pair, either when it was originally created or set via `setMeta`.
*   `publicKey` returns the public key stored in memory for the pair.
*   `sign` may be used to return a signature by signing a provided message with the secret key (if it is in memory) using Nacl.
*   `toJson` calls another `toJson` function and provides the state of the pair, it generates arguments to be passed to the other `toJson` function including an encoded public key of the account that it generates using the secret key from memory (if it has been made available in memory) and the optionally provided passphrase argument. It passes a third boolean argument to `toJson` indicating whether the public key has been encoded or not (if a passphrase argument was provided then it is encoded). The `toJson` function that it calls returns a JSON object with properties including the `address` and `meta` that are assigned with the values stored in the corresponding state variables of the account pair, an `encoded` property that is assigned with the encoded public key in hex format, and an `encoding` property that indicates whether the public key value of the `encoded` property is encoded or not.

**Parameters:**

**type: [KeypairType](_cennznet_util.md#keypairtype)**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| secretKey | `Uint8Array` |

**`Optional` meta: [KeyringPair$Meta](_cennznet_util.md#keyringpair_meta)**

**`Optional` encoded: `Uint8Array` \| `null`**

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="cryptowaitready"></a>

###  cryptoWaitReady

▸ **cryptoWaitReady**(): `Promise`<`boolean`>

*Defined in packages/util/node_modules/@plugnet/util-crypto/index.d.ts:12*

**Returns:** `Promise`<`boolean`>

___
<a id="decode"></a>

###  decode

▸ **decode**(passphrase?: *`string`*, _encrypted?: *`Uint8Array` \| `null`*): [DecodeResult](_cennznet_util.md#decoderesult)

*Defined in packages/util/node_modules/@plugnet/keyring/pair/decode.d.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` passphrase | `string` |
| `Optional` _encrypted | `Uint8Array` \| `null` |

**Returns:** [DecodeResult](_cennznet_util.md#decoderesult)

___
<a id="decode-1"></a>

###  decode

▸ **decode**(encoded: *`string` \| `Uint8Array`*, ignoreChecksum?: *`boolean`*, prefix?: *[Prefix](_cennznet_util.md#prefix)*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/keyring/address/decode.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoded | `string` \| `Uint8Array` |
| `Optional` ignoreChecksum | `boolean` |
| `Optional` prefix | [Prefix](_cennznet_util.md#prefix) |

**Returns:** `Uint8Array`

___
<a id="derivehard"></a>

###  deriveHard

▸ **deriveHard**(seed: *`Uint8Array`*, chainCode: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/deriveHard.d.ts:1*

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |
| chainCode | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="derivehard-1"></a>

###  deriveHard

▸ **deriveHard**(keypair: *[Keypair](_cennznet_util.md#keypair)*, chainCode: *`Uint8Array`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/deriveHard.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| keypair | [Keypair](_cennznet_util.md#keypair) |
| chainCode | `Uint8Array` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="derivesoft"></a>

###  deriveSoft

▸ **deriveSoft**(keypair: *[Keypair](_cennznet_util.md#keypair)*, chainCode: *`Uint8Array`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/deriveSoft.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| keypair | [Keypair](_cennznet_util.md#keypair) |
| chainCode | `Uint8Array` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="ed25519keypairfromseed"></a>

###  ed25519KeypairFromSeed

▸ **ed25519KeypairFromSeed**(seed: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="ed25519sign"></a>

###  ed25519Sign

▸ **ed25519Sign**(publicKey: *`Uint8Array`*, secretKey: *`Uint8Array`*, message: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:12*

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| secretKey | `Uint8Array` |
| message | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="ed25519verify"></a>

###  ed25519Verify

▸ **ed25519Verify**(signature: *`Uint8Array`*, message: *`Uint8Array`*, publicKey: *`Uint8Array`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signature | `Uint8Array` |
| message | `Uint8Array` |
| publicKey | `Uint8Array` |

**Returns:** `boolean`

___
<a id="encode"></a>

###  encode

▸ **encode**(_key: *`Uint8Array` \| `string`*, prefix?: *[Prefix](_cennznet_util.md#prefix)*): `string`

*Defined in packages/util/node_modules/@plugnet/keyring/address/encode.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _key | `Uint8Array` \| `string` |
| `Optional` prefix | [Prefix](_cennznet_util.md#prefix) |

**Returns:** `string`

___
<a id="encode-1"></a>

###  encode

▸ **encode**(__namedParameters: *`object`*, passphrase?: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/keyring/pair/encode.d.ts:2*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| secretKey | `Uint8Array` |

**`Optional` passphrase: `string`**

**Returns:** `Uint8Array`

___
<a id="everybody"></a>

###  everybody

▸ **everybody**(): [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

*Defined in packages/util/node_modules/@plugnet/keyring/pair/nobody.d.ts:2*

**Returns:** [KeyringPair](../interfaces/_cennznet_util.keyringpair.md)

___
<a id="ext_bip39_generate"></a>

###  ext_bip39_generate

▸ **ext_bip39_generate**(arg0: *`number`*): `string`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:146*

Generate a bip39 phrase

words: number of words, either 12, 15, 18 21 or 24

Returns the bip 39 phrase

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `number` |  \- |

**Returns:** `string`

___
<a id="ext_bip39_to_entropy"></a>

###  ext_bip39_to_entropy

▸ **ext_bip39_to_entropy**(arg0: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:156*

Create entropy from a bip39 phrase

*   phrase: mnemonic phrase

Returns the entropy

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `string` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_bip39_to_mini_secret"></a>

###  ext_bip39_to_mini_secret

▸ **ext_bip39_to_mini_secret**(arg0: *`string`*, arg1: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:167*

Create a mini-secret from a bip39 phrase

*   phrase: mnemonic phrase

Returns the 32-byte mini-secret via entropy

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `string` |  \- |
| arg1 | `string` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_bip39_to_seed"></a>

###  ext_bip39_to_seed

▸ **ext_bip39_to_seed**(arg0: *`string`*, arg1: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:178*

Creates a see from a bip-39 phrase

*__phrase:__*: mnemonic phrase

Returns a 32-byte seed

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `string` |  \- |
| arg1 | `string` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_bip39_validate"></a>

###  ext_bip39_validate

▸ **ext_bip39_validate**(arg0: *`string`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:188*

Validates a bip39 phrase

*   phrase: mnemonic phrase

Returns the true/false

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `string` |  \- |

**Returns:** `boolean`

___
<a id="ext_blake2b"></a>

###  ext_blake2b

▸ **ext_blake2b**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*, arg2: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:91*

blake2b hash for the specified input

*   data: Arbitrary data to be hashed
*   key: Key to add to the hashing (normally empty)
*   size: Size in bytes of the resulting output

Returns a vector with the hash result

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |
| arg2 | `number` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_ed_from_seed"></a>

###  ext_ed_from_seed

▸ **ext_ed_from_seed**(arg0: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:199*

Generate a key pair.

*   seed: UIntArray with 32 element

returned vector is the concatenation of first the private key (64 bytes) followed by the public key (32) bytes.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_ed_sign"></a>

###  ext_ed_sign

▸ **ext_ed_sign**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*, arg2: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:216*

Sign a message

The combination of both public and private key must be provided. This is effectively equivalent to a keypair.

*   public: UIntArray with 32 element
    
*   private: UIntArray with 64 element
    
*   message: Arbitrary length UIntArray
    
*   returned vector is the signature consisting of 64 bytes.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |
| arg2 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_ed_verify"></a>

###  ext_ed_verify

▸ **ext_ed_verify**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*, arg2: *`Uint8Array`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:228*

Verify a message and its corresponding against a public key;

*   signature: UIntArray with 64 element
*   message: Arbitrary length UIntArray
*   pubkey: UIntArray with 32 element

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |
| arg2 | `Uint8Array` |  \- |

**Returns:** `boolean`

___
<a id="ext_keccak256"></a>

###  ext_keccak256

▸ **ext_keccak256**(arg0: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:100*

Create a keccak256 hash for the specified input

Returns the hash as a vector

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_pbkdf2"></a>

###  ext_pbkdf2

▸ **ext_pbkdf2**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*, arg2: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:114*

pbkdf2 hash from an input, salt for the number of specified rounds

*   data: Arbitrary data to be hashed
*   salt: Salt for this hash
*   rounds: The number of rounds to perform

Returns a vecor with the hash result

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |
| arg2 | `number` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_sha512"></a>

###  ext_sha512

▸ **ext_sha512**(arg0: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:124*

sha512 hash for the specified input

*   data: Arbitrary data to be hashed

Returns a vecor with the hash result

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_sr_derive_keypair_hard"></a>

###  ext_sr_derive_keypair_hard

▸ **ext_sr_derive_keypair_hard**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:13*

Perform a derivation on a secret

*   secret: UIntArray with 64 bytes
*   cc: UIntArray with 32 bytes

returned vector the derived keypair as a array of 96 bytes

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_sr_derive_keypair_soft"></a>

###  ext_sr_derive_keypair_soft

▸ **ext_sr_derive_keypair_soft**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:25*

Perform a derivation on a secret

*   secret: UIntArray with 64 bytes
*   cc: UIntArray with 32 bytes

returned vector the derived keypair as a array of 96 bytes

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_sr_derive_public_soft"></a>

###  ext_sr_derive_public_soft

▸ **ext_sr_derive_public_soft**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:37*

Perform a derivation on a publicKey

*   pubkey: UIntArray with 32 bytes
*   cc: UIntArray with 32 bytes

returned vector is the derived publicKey as a array of 32 bytes

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_sr_from_seed"></a>

###  ext_sr_from_seed

▸ **ext_sr_from_seed**(arg0: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:48*

Generate a key pair.

*   seed: UIntArray with 32 element

returned vector is the concatenation of first the private key (64 bytes) followed by the public key (32) bytes.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_sr_sign"></a>

###  ext_sr_sign

▸ **ext_sr_sign**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*, arg2: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:65*

Sign a message

The combination of both public and private key must be provided. This is effectively equivalent to a keypair.

*   public: UIntArray with 32 element
    
*   private: UIntArray with 64 element
    
*   message: Arbitrary length UIntArray
    
*   returned vector is the signature consisting of 64 bytes.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |
| arg2 | `Uint8Array` |  \- |

**Returns:** `Uint8Array`

___
<a id="ext_sr_verify"></a>

###  ext_sr_verify

▸ **ext_sr_verify**(arg0: *`Uint8Array`*, arg1: *`Uint8Array`*, arg2: *`Uint8Array`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:77*

Verify a message and its corresponding against a public key;

*   signature: UIntArray with 64 element
*   message: Arbitrary length UIntArray
*   pubkey: UIntArray with 32 element

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `Uint8Array` |  \- |
| arg2 | `Uint8Array` |  \- |

**Returns:** `boolean`

___
<a id="ext_twox"></a>

###  ext_twox

▸ **ext_twox**(arg0: *`Uint8Array`*, arg1: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:136*

twox hash for the specified input and rounds

*   data: Arbitrary data to be hashed
*   rounds: Number of 8-byte rounds to add to the output

Returns a vecor with the hash result

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arg0 | `Uint8Array` |  \- |
| arg1 | `number` |  \- |

**Returns:** `Uint8Array`

___
<a id="findsi"></a>

###  findSi

▸ **findSi**(type: *`string`*): [SiDef](_cennznet_util.md#sidef)

*Defined in packages/types/node_modules/@plugnet/util/format/si.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [SiDef](_cennznet_util.md#sidef)

___
<a id="format"></a>

###  format

▸ **format**(value: *`any`*): `any`

*Defined in packages/types/node_modules/@plugnet/util/logger.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___
<a id="formatdecimal"></a>

###  formatDecimal

▸ **formatDecimal**(value: *`string`*): `string`

*Defined in packages/util/node_modules/@plugnet/util/format/formatDecimal.d.ts:1*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `string`

___
<a id="formatelapsed"></a>

###  formatElapsed

▸ **formatElapsed**(now?: *`Date` \| `null`*, value?: *`BN` \| [Compact](../interfaces/_cennznet_types.compact.md) \| `Date` \| `number` \| `null`*): `string`

*Defined in packages/util/node_modules/@plugnet/util/format/formatElapsed.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` now | `Date` \| `null` |
| `Optional` value | `BN` \| [Compact](../interfaces/_cennznet_types.compact.md) \| `Date` \| `number` \| `null` |

**Returns:** `string`

___
<a id="formatnumber"></a>

###  formatNumber

▸ **formatNumber**(_value?: *[Compact](../interfaces/_cennznet_types.compact.md) \| `BN` \| `number` \| `null`*): `string`

*Defined in packages/util/node_modules/@plugnet/util/format/formatNumber.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` _value | [Compact](../interfaces/_cennznet_types.compact.md) \| `BN` \| `number` \| `null` |

**Returns:** `string`

___
<a id="formatunits-1"></a>

###  formatUnits

▸ **formatUnits**(unValue: *`BN` \| `number` \| `string`*, decimals: *`number`*): `string`

*Defined in node_modules/@cennznet/util/src/unit/formatUnits.ts:25*

format a amount from unit `un` to decimals passed in.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| unValue | `BN` \| `number` \| `string` |  \- |
| decimals | `number` |   |

**Returns:** `string`

___
<a id="formatunits"></a>

###  formatUnits

▸ **formatUnits**(unValue: *`BN` \| `number` \| `string`*, decimals: *`number`*): `string`

*Defined in packages/util/src/unit/formatUnits.ts:25*

format a amount from unit `un` to decimals passed in.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| unValue | `BN` \| `number` \| `string` |  \- |
| decimals | `number` |   |

**Returns:** `string`

___
<a id="hash"></a>

###  hash

▸ **hash**(key: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/keyring/address/sshash.d.ts:1*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="hexaddprefix"></a>

###  hexAddPrefix

▸ **hexAddPrefix**(value?: *`string` \| `null`*): `string`

*Defined in packages/util/node_modules/@plugnet/util/hex/addPrefix.d.ts:15*

*__name__*: hexAddPrefix

*__summary__*: Adds the `0x` prefix to string values.

*__description__*: Returns a `0x` prefixed string from the input value. If the input is already prefixed, it is returned unchanged.

*__example__*:   

```javascript
import { hexAddPrefix } from '@plugnet/util';

console.log('With prefix', hexAddPrefix('0a0b12')); // => 0x0a0b12
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `null` |

**Returns:** `string`

___
<a id="hexfixlength"></a>

###  hexFixLength

▸ **hexFixLength**(value: *`string`*, bitLength?: *`number`*, withPadding?: *`boolean`*): `string`

*Defined in packages/util/node_modules/@plugnet/util/hex/fixLength.d.ts:17*

*__name__*: hexFixLength

*__summary__*: Shifts a hex string to a specific bitLength

*__description__*: Returns a `0x` prefixed string with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length. Input values with less bits are returned as-is by default. When `withPadding` is set, shorter values are padded with `0`.

*__example__*:   

```javascript
import { hexFixLength } from '@plugnet/util';

console.log('fixed', hexFixLength('0x12', 16)); // => 0x12
console.log('fixed', hexFixLength('0x12', 16, true)); // => 0x0012
console.log('fixed', hexFixLength('0x0012', 8)); // => 0x12
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |
| `Optional` bitLength | `number` |
| `Optional` withPadding | `boolean` |

**Returns:** `string`

___
<a id="hexhasprefix"></a>

###  hexHasPrefix

▸ **hexHasPrefix**(value?: *`string` \| `null`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/util/hex/hasPrefix.d.ts:15*

*__name__*: hexHasPrefix

*__summary__*: Tests for the existence of a `0x` prefix.

*__description__*: Checks for a valid hex input value and if the start matched `0x`

*__example__*:   

```javascript
import { hexHasPrefix } from '@plugnet/util';

console.log('has prefix', hexHasPrefix('0x1234')); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `null` |

**Returns:** `boolean`

___
<a id="hexstripprefix"></a>

###  hexStripPrefix

▸ **hexStripPrefix**(value?: *`string` \| `null`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/hex/stripPrefix.d.ts:15*

*__name__*: hexStripPrefix

*__summary__*: Strips any leading `0x` prefix.

*__description__*: Tests for the existence of a `0x` prefix, and returns the value without the prefix. Un-prefixed values are returned as-is.

*__example__*:   

```javascript
import { hexStripPrefix } from '@plugnet/util';

console.log('stripped', hexStripPrefix('0x1234')); // => 1234
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `null` |

**Returns:** `string`

___
<a id="hextobn"></a>

###  hexToBn

▸ **hexToBn**(value?: *`string` \| `number` \| `null`*, options?: *[ToBnOptions](../interfaces/_cennznet_types.tobnoptions.md) \| `boolean`*): `BN`

*Defined in packages/types/node_modules/@plugnet/util/hex/toBn.d.ts:21*

*__name__*: hexToBn

*__summary__*: Creates a BN.js bignumber object from a hex string.

*__description__*: `null` inputs returns a `BN(0)` result. Hex input values return the actual value converted to a BN. Anything that is not a hex string (including the `0x` prefix) throws an error.

*__example__*:   

```javascript
import { hexToBn } from '@plugnet/util';

hexToBn('0x123480001f'); // => BN(0x123480001f)
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `number` \| `null` |
| `Optional` options | [ToBnOptions](../interfaces/_cennznet_types.tobnoptions.md) \| `boolean` |

**Returns:** `BN`

___
<a id="hextonumber"></a>

###  hexToNumber

▸ **hexToNumber**(value?: *`string` \| `null`*): `number`

*Defined in packages/types/node_modules/@plugnet/util/hex/toNumber.d.ts:15*

*__name__*: hexToNumber

*__summary__*: Creates a Number value from a Buffer object.

*__description__*: `null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.

*__example__*:   

```javascript
import { hexToNumber } from '@plugnet/util';

hexToNumber('0x1234'); // => 0x1234
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `null` |

**Returns:** `number`

___
<a id="hextou8a"></a>

###  hexToU8a

▸ **hexToU8a**(_value?: *`string` \| `null`*, bitLength?: *`number`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/hex/toU8a.d.ts:16*

*__name__*: hexToU8a

*__summary__*: Creates a Buffer object from a hex string.

*__description__*: `null` inputs returns an empty `Uint8Array` result. Hex input values return the actual bytes value converted to a Uint8Array. Anything that is not a hex string (including the `0x` prefix) throws an error.

*__example__*:   

```javascript
import { hexToU8a } from '@plugnet/util';

hexToU8a('0x80001f'); // Uint8Array([0x80, 0x00, 0x1f])
hexToU8a('0x80001f', 32); // Uint8Array([0x00, 0x80, 0x00, 0x1f])
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` _value | `string` \| `null` |
| `Optional` bitLength | `number` |

**Returns:** `Uint8Array`

___
<a id="isbn"></a>

###  isBn

▸ **isBn**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/bn.d.ts:17*

*__name__*: isBn

*__summary__*: Tests for a `BN` object instance.

*__description__*: Checks to see if the input object is an instance of `BN` (bn.js).

*__example__*:   

```javascript
import BN from 'bn.js';
import { isBn } from '@plugnet/util';

console.log('isBn', isBn(new BN(1))); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isboolean"></a>

###  isBoolean

▸ **isBoolean**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/boolean.d.ts:15*

*__name__*: isBoolean

*__summary__*: Tests for a boolean value.

*__description__*: Checks to see if the input value is a JavaScript boolean.

*__example__*:   

```javascript
import { isBoolean } from '@plugnet/util';

isBoolean(false); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isbuffer"></a>

###  isBuffer

▸ **isBuffer**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/buffer.d.ts:16*

*__name__*: isBuffer

*__summary__*: Tests for a `Buffer` object instance.

*__description__*: Checks to see if the input object is an instance of `Buffer`.

*__example__*:   

```javascript
import { isBuffer } from '@plugnet/util';

console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="iserror"></a>

###  isError

▸ **isError**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/error.d.ts:15*

*__name__*: isError

*__summary__*: Tests for a `Error` object instance.

*__description__*: Checks to see if the input object is an instance of `Error`.

*__example__*:   

```javascript
import { isError } from '@plugnet/util';

console.log('isError', isError(new Error('message'))); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isfunction"></a>

###  isFunction

▸ **isFunction**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/function.d.ts:15*

*__name__*: isFunction

*__summary__*: Tests for a `function`.

*__description__*: Checks to see if the input value is a JavaScript function.

*__example__*:   

```javascript
import { isFunction } from '@plugnet/util';

isFunction(() => false); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="ishex"></a>

###  isHex

▸ **isHex**(value: *`any`*, bitLength?: *`number`*, ignoreLength?: *`boolean`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/hex.d.ts:16*

*__name__*: isHex

*__summary__*: Tests for a hex string.

*__description__*: Checks to see if the input value is a `0x` prefixed hex string. Optionally (`bitLength` !== -1) checks to see if the bitLength is correct.

*__example__*:   

```javascript
import { isHex } from '@plugnet/util';

isHex('0x1234'); // => true
isHex('0x1234', 8); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` bitLength | `number` |
| `Optional` ignoreLength | `boolean` |

**Returns:** `boolean`

___
<a id="isinstanceof"></a>

###  isInstanceOf

▸ **isInstanceOf**(value: *`any`*, clazz: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/instanceOf.d.ts:15*

*__name__*: isInstanceOf

*__summary__*: Tests for a instance of a class.

*__description__*: Checks to see if the input value is an instance of the test class.

*__example__*:   

```javascript
import { isInstanceOf } from '@plugnet/util';

console.log('isInstanceOf', isInstanceOf(new Array(0), Array)); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| clazz | `any` |

**Returns:** `boolean`

___
<a id="isip"></a>

###  isIp

▸ **isIp**(value: *`string`*, type?: *[IpTypes](_cennznet_util.md#iptypes)*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/ip.d.ts:19*

*__name__*: isIp

*__summary__*: Tests if the value is a valid IP address

*__description__*: Checks to see if the value is a valid IP address. Optionally check for either v4/v6

*__example__*:   

```javascript
import { isIp } from '@plugnet/util';

isIp('192.168.0.1')); // => true
isIp('1:2:3:4:5:6:7:8'); // => true
isIp('192.168.0.1', 'v6')); // => false
isIp('1:2:3:4:5:6:7:8', 'v4'); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |
| `Optional` type | [IpTypes](_cennznet_util.md#iptypes) |

**Returns:** `boolean`

___
<a id="isjsonobject"></a>

###  isJsonObject

▸ **isJsonObject**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/jsonObject.d.ts:28*

*__name__*: isJsonObject

*__summary__*: Tests for a valid JSON `object`.

*__description__*: Checks to see if the input value is a valid JSON object. It returns false if the input is JSON parsable, but not an Javascript object.

*__example__*:   

```javascript
import { isJsonObject } from '@plugnet/util';

isJsonObject({}); // => true
isJsonObject({
 "Test": "1234",
 "NestedTest": {
  "Test": "5678"
 }
}); // => true
isJsonObject(1234); // JSON parsable, but not an object =>  false
isJsonObject(null); // JSON parsable, but not an object => false
isJsonObject('not an object'); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isnull"></a>

###  isNull

▸ **isNull**(value?: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/null.d.ts:15*

*__name__*: isNull

*__summary__*: Tests for a `null` values.

*__description__*: Checks to see if the input value is `null`.

*__example__*:   

```javascript
import { isNull } from '@plugnet/util';

console.log('isNull', isNull(null)); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `boolean`

___
<a id="isnumber"></a>

###  isNumber

▸ **isNumber**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/number.d.ts:15*

*__name__*: isNumber

*__summary__*: Tests for a JavaScript number.

*__description__*: Checks to see if the input value is a valid number.

*__example__*:   

```javascript
import { isNumber } from '@plugnet/util';

console.log('isNumber', isNumber(1234)); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isobject"></a>

###  isObject

▸ **isObject**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/object.d.ts:19*

*__name__*: isObject

*__summary__*: Tests for an `object`.

*__description__*: Checks to see if the input value is a JavaScript object.

*__example__*:   

```javascript
import { isObject } from '@plugnet/util';

isObject({}); // => true
isObject('something'); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isobservable"></a>

###  isObservable

▸ **isObservable**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/observable.d.ts:18*

*__name__*: isBObservable

*__summary__*: Tests for a `Observable` object instance.

*__description__*: Checks to see if the input object is an instance of `BN` (bn.js).

*__example__*:   

```javascript
import { isObservable } from '@plugnet/util';

console.log('isObservable', isObservable(...));
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isready-1"></a>

###  isReady

▸ **isReady**(): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:230*

**Returns:** `boolean`

___
<a id="isready"></a>

###  isReady

▸ **isReady**(): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:30*

**Returns:** `boolean`

___
<a id="issafeinteger-1"></a>

###  isSafeInteger

▸ **isSafeInteger**(value: *`any`*): `boolean`

*Defined in packages/util/src/is/integer.ts:30*

Check if the input is a integer

*__example__*:   

```javascript
import { isInteger } from '@cennznet/util';

console.log('isInteger', isInteger(123)); // => true
console.log('isInteger', isInteger(123456789012345678)); // => false
console.log('isInteger', isInteger('123')); // => true
console.log('isInteger', isInteger('12.3')); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="issafeinteger"></a>

###  isSafeInteger

▸ **isSafeInteger**(value: *`any`*): `boolean`

*Defined in node_modules/@cennznet/util/src/is/integer.ts:30*

Check if the input is a integer

*__example__*:   

```javascript
import { isInteger } from '@cennznet/util';

console.log('isInteger', isInteger(123)); // => true
console.log('isInteger', isInteger(123456789012345678)); // => false
console.log('isInteger', isInteger('123')); // => true
console.log('isInteger', isInteger('12.3')); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="isstring"></a>

###  isString

▸ **isString**(value: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/string.d.ts:15*

*__name__*: isString

*__summary__*: Tests for a string.

*__description__*: Checks to see if the input value is a JavaScript string.

*__example__*:   

```javascript
import { isString } from '@plugnet/util';

console.log('isString', isString('test')); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="istestchain"></a>

###  isTestChain

▸ **isTestChain**(chain?: *`string` \| `null`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/testChain.d.ts:1*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` chain | `string` \| `null` |

**Returns:** `boolean`

___
<a id="isu8a"></a>

###  isU8a

▸ **isU8a**(value?: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/u8a.d.ts:15*

*__name__*: isU8a

*__summary__*: Tests for a `Uint8Array` object instance.

*__description__*: Checks to see if the input object is an instance of `Uint8Array`.

*__example__*:   

```javascript
import { isUint8Array } from '@plugnet/util';

console.log('isU8a', isU8a([])); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `boolean`

___
<a id="isundefined"></a>

###  isUndefined

▸ **isUndefined**(value?: *`any`*): `boolean`

*Defined in packages/types/node_modules/@plugnet/util/is/undefined.d.ts:15*

*__name__*: isUndefined

*__summary__*: Tests for a `undefined` values.

*__description__*: Checks to see if the input value is `undefined`.

*__example__*:   

```javascript
import { isUndefined } from '@plugnet/util';

console.log('isUndefined', isUndefined(void(0))); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `boolean`

___
<a id="keccak256"></a>

###  keccak256

▸ **keccak256**(data: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="keccakashex"></a>

###  keccakAsHex

▸ **keccakAsHex**(value: *`Buffer` \| `Uint8Array` \| `string`*): `string`

*Defined in packages/util/node_modules/@plugnet/util-crypto/keccak/asHex.d.ts:16*

*__name__*: keccakAsHex

*__summary__*: Creates a keccak hex string from the input.

*__description__*: From either a `string` or a `Buffer` input, create the keccak and return the result as a `0x` prefixed hex string.

*__example__*:   

```javascript
import { keccakAsHex } from '@plugnet/util-crypto';

keccakAsHex('123'); // => 0x...
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Buffer` \| `Uint8Array` \| `string` |

**Returns:** `string`

___
<a id="keccakasu8a"></a>

###  keccakAsU8a

▸ **keccakAsU8a**(value: *`Buffer` \| `Uint8Array` \| `string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/keccak/asU8a.d.ts:16*

*__name__*: keccakAsU8a

*__summary__*: Creates a keccak Uint8Array from the input.

*__description__*: From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.

*__example__*:   

```javascript
import { keccakAsU8a } from '@plugnet/util-crypto';

keccakAsU8a('123'); // => Uint8Array
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Buffer` \| `Uint8Array` \| `string` |

**Returns:** `Uint8Array`

___
<a id="keyextract"></a>

###  keyExtract

▸ **keyExtract**(suri: *`string`*): [ExtractResult](_cennznet_util.md#extractresult-1)

*Defined in packages/util/node_modules/@plugnet/util-crypto/key/extractSuri.d.ts:10*

*__description__*: Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |

**Returns:** [ExtractResult](_cennznet_util.md#extractresult-1)

___
<a id="keyextractpath"></a>

###  keyExtractPath

▸ **keyExtractPath**(derivePath: *`string`*): [ExtractResult](_cennznet_util.md#extractresult-1)

*Defined in packages/util/node_modules/@plugnet/util-crypto/key/extractPath.d.ts:9*

*__description__*: Extract derivation juntions from the supplied path

**Parameters:**

| Name | Type |
| ------ | ------ |
| derivePath | `string` |

**Returns:** [ExtractResult](_cennznet_util.md#extractresult-1)

___
<a id="keyfrompath"></a>

###  keyFromPath

▸ **keyFromPath**(pair: *[Keypair](_cennznet_util.md#keypair)*, path: *`Array`<[DeriveJunction](../classes/_cennznet_util.derivejunction.md)>*, type: *[KeypairType](_cennznet_util.md#keypairtype)*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/key/fromPath.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [Keypair](_cennznet_util.md#keypair) |
| path | `Array`<[DeriveJunction](../classes/_cennznet_util.derivejunction.md)> |
| type | [KeypairType](_cennznet_util.md#keypairtype) |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="keyhdkded25519"></a>

###  keyHdkdEd25519

▸ **keyHdkdEd25519**(keypair: *[Keypair](_cennznet_util.md#keypair)*, __namedParameters: *`object`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/key/hdkdEd25519.d.ts:3*

**Parameters:**

**keypair: [Keypair](_cennznet_util.md#keypair)**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| chainCode | `Uint8Array` |
| isHard | `boolean` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="keyhdkdsr25519"></a>

###  keyHdkdSr25519

▸ **keyHdkdSr25519**(keypair: *[Keypair](_cennznet_util.md#keypair)*, __namedParameters: *`object`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/key/hdkdSr25519.d.ts:3*

**Parameters:**

**keypair: [Keypair](_cennznet_util.md#keypair)**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| chainCode | `Uint8Array` |
| isSoft | `boolean` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="logger-1"></a>

###  logger

▸ **logger**(_type: *`string`*): [Logger](_cennznet_util.md#logger)

*Defined in packages/types/node_modules/@plugnet/util/logger.d.ts:17*

*__name__*: Logger

*__summary__*: Creates a consistent log interface for messages

*__description__*: Returns a `Logger` that has `.log`, `.error`, `.warn` and `.debug` (controlled with environment `DEBUG=typeA,typeB`) methods. Logging is done with a consistent prefix (type of logger, date) followed by the actual message using the underlying console.

*__example__*:   

```javascript
const l from '@plugnet/util/logger')('test');

l.log('blah'); // <date>     TEST: blah
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| _type | `string` |

**Returns:** [Logger](_cennznet_util.md#logger)

___
<a id="mnemonicgenerate"></a>

###  mnemonicGenerate

▸ **mnemonicGenerate**(numWords?: *[WordCount](_cennznet_util.md#wordcount)*): `string`

*Defined in packages/util/node_modules/@plugnet/util-crypto/mnemonic/generate.d.ts:15*

*__name__*: mnemonicGenerate

*__summary__*: Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

*__example__*:   

```javascript
import { mnemonicGenerate } from '@plugnet/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` numWords | [WordCount](_cennznet_util.md#wordcount) |

**Returns:** `string`

___
<a id="mnemonicvalidate"></a>

###  mnemonicValidate

▸ **mnemonicValidate**(mnemonic: *`string`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/util-crypto/mnemonic/validate.d.ts:15*

*__name__*: mnemonicValidate

*__summary__*: Validates a mnemonic input using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

*__example__*:   

```javascript
import { mnemonicGenerate, mnemonicValidate } from '@plugnet/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| mnemonic | `string` |

**Returns:** `boolean`

___
<a id="nacldecrypt"></a>

###  naclDecrypt

▸ **naclDecrypt**(encrypted: *`Uint8Array`*, nonce: *`Uint8Array`*, secret: *`Uint8Array`*): `Uint8Array` \| `null`

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/decrypt.d.ts:15*

*__name__*: naclDecrypt

*__summary__*: Decrypts a message using the supplied secretKey and nonce

*__description__*: Returns an decrypted message, using the `secret` and `nonce`.

*__example__*:   

```javascript
import { naclDecrypt } from '@plugnet/util-crypto';

naclDecrypt([...], [...], [...]); // => [...]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| encrypted | `Uint8Array` |
| nonce | `Uint8Array` |
| secret | `Uint8Array` |

**Returns:** `Uint8Array` \| `null`

___
<a id="naclencrypt"></a>

###  naclEncrypt

▸ **naclEncrypt**(message: *`Uint8Array`*, secret: *`Uint8Array`*, nonce?: *`Uint8Array`*): [Encrypted](_cennznet_util.md#encrypted)

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/encrypt.d.ts:19*

*__name__*: naclEncrypt

*__summary__*: Encrypts a message using the supplied secretKey and nonce

*__description__*: Returns an encrypted message, using the `secretKey` and `nonce`. If the `nonce` was not supplied, a random value is generated.

*__example__*:   

```javascript
import { naclEncrypt } from '@plugnet/util-crypto';

naclEncrypt([...], [...]); // => [...]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |
| secret | `Uint8Array` |
| `Optional` nonce | `Uint8Array` |

**Returns:** [Encrypted](_cennznet_util.md#encrypted)

___
<a id="naclkeypairfromrandom"></a>

###  naclKeypairFromRandom

▸ **naclKeypairFromRandom**(): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/keypair/fromRandom.d.ts:16*

*__name__*: naclKeypairFromRandom

*__summary__*: Creates a new public/secret keypair.

*__description__*: Returns a new generate object containing a `publicKey` & `secretKey`.

*__example__*:   

```javascript
import { naclKeypairFromRandom } from '@plugnet/util-crypto';

naclKeypairFromRandom(); // => { secretKey: [...], publicKey: [...] }
```

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="naclkeypairfromsecret"></a>

###  naclKeypairFromSecret

▸ **naclKeypairFromSecret**(secret: *`Uint8Array`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/keypair/fromSecret.d.ts:16*

*__name__*: naclKeypairFromSecret

*__summary__*: Creates a new public/secret keypair from a secret.

*__description__*: Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.

*__example__*:   

```javascript
import { naclKeypairFromSecret } from '@plugnet/util-crypto';

naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| secret | `Uint8Array` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="naclkeypairfromseed"></a>

###  naclKeypairFromSeed

▸ **naclKeypairFromSeed**(seed: *`Uint8Array`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/keypair/fromSeed.d.ts:16*

*__name__*: naclKeypairFromSeed

*__summary__*: Creates a new public/secret keypair from a seed.

*__description__*: Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.

*__example__*:   

```javascript
import { naclKeypairFromSeed } from '@plugnet/util-crypto';

naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="naclkeypairfromstring"></a>

###  naclKeypairFromString

▸ **naclKeypairFromString**(value: *`string`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/keypair/fromString.d.ts:16*

*__name__*: naclKeypairFromString

*__summary__*: Creates a new public/secret keypair from a string.

*__description__*: Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.

*__example__*:   

```javascript
import { naclKeypairFromString } from '@plugnet/util-crypto';

naclKeypairFromString('test'); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="naclsign"></a>

###  naclSign

▸ **naclSign**(message: *`Uint8Array`*, __namedParameters: *`object`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/sign.d.ts:16*

*__name__*: naclSign

*__summary__*: Signs a message using the supplied secretKey

*__description__*: Returns message signature of `message`, using the `secretKey`.

*__example__*:   

```javascript
import { naclSign } from '@plugnet/util-crypto';

naclSign([...], [...]); // => [...]
```

**Parameters:**

**message: `Uint8Array`**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| secretKey | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="naclverify"></a>

###  naclVerify

▸ **naclVerify**(message: *`Uint8Array`*, signature: *`Uint8Array`*, publicKey: *`Uint8Array`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/util-crypto/nacl/verify.d.ts:15*

*__name__*: naclSign

*__summary__*: Verifies the signature on the supplied message.

*__description__*: Verifies the `signature` on `message` with the supplied `plublicKey`. Returns `true` on sucess, `false` otherwise.

*__example__*:   

```javascript
import { naclVerify } from '@plugnet/util-crypto';

naclVerify([...], [...], [...]); // => true/false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |
| signature | `Uint8Array` |
| publicKey | `Uint8Array` |

**Returns:** `boolean`

___
<a id="numbertohex"></a>

###  numberToHex

▸ **numberToHex**(value?: *`number` \| `null`*, bitLength?: *`number`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/number/toHex.d.ts:16*

*__name__*: numberToHex

*__summary__*: Creates a hex value from a number.

*__description__*: `null`/`undefined`/`NaN` inputs returns an empty `0x` result. `number` input values return the actual bytes value converted to a `hex`. With `bitLength` set, it converts the number to the equivalent size.

*__example__*:   

```javascript
import { numberToHex } from '@plugnet/util';

numberToHex(0x1234); // => '0x1234'
numberToHex(0x1234, 32); // => 0x00001234
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `number` \| `null` |
| `Optional` bitLength | `number` |

**Returns:** `string`

___
<a id="numbertou8a"></a>

###  numberToU8a

▸ **numberToU8a**(value?: *`number` \| `null`*, bitLength?: *`number`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/number/toU8a.d.ts:15*

*__name__*: numberToU8a

*__summary__*: Creates a Uint8Array object from a number.

*__description__*: `null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `number` input values return the actual bytes value converted to a `Uint8Array`. With `bitLength`, it converts the value to the equivalent size.

*__example__*:   

```javascript
import { numberToU8a } from '@plugnet/util';

numberToU8a(0x1234); // => [0x12, 0x34]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `number` \| `null` |
| `Optional` bitLength | `number` |

**Returns:** `Uint8Array`

___
<a id="parseunits-1"></a>

###  parseUnits

▸ **parseUnits**(value: *`string` \| `number`*, decimals: *`number`*): `BN`

*Defined in node_modules/@cennznet/util/src/unit/parseUnits.ts:27*

format a amount from unit `un` to decimals passed in.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` \| `number` |
| decimals | `number` |   |

**Returns:** `BN`

___
<a id="parseunits"></a>

###  parseUnits

▸ **parseUnits**(value: *`string` \| `number`*, decimals: *`number`*): `BN`

*Defined in packages/util/src/unit/parseUnits.ts:27*

format a amount from unit `un` to decimals passed in.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` \| `number` |
| decimals | `number` |   |

**Returns:** `BN`

___
<a id="pbkdf2"></a>

###  pbkdf2

▸ **pbkdf2**(data: *`Uint8Array`*, salt: *`Uint8Array`*, rounds: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` |
| salt | `Uint8Array` |
| rounds | `number` |

**Returns:** `Uint8Array`

___
<a id="promisify"></a>

###  promisify

▸ **promisify**(self: *`any`*, fn: *`Function`*, ...params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in packages/types/node_modules/@plugnet/util/promisify.d.ts:16*

*__name__*: promisify

*__summary__*: Wraps an async callback into a `Promise`

*__description__*: Wraps the supplied async function `fn` that has a standard JS callback `(error: Error, result: any)` into a `Promise`, passing the supplied parameters. When `error` is set, the Promise is rejected, else the Promise resolves with the `result` value.

*__example__*:   

```javascript
const { promisify } from '@plugnet/util';

await promisify(null, ((a, cb) => cb(null, a), true); // resolves with `true`
await promisify(null, (cb) => cb(new Error('error!'))); // rejects with `error!`
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| self | `any` |
| fn | `Function` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="randomashex"></a>

###  randomAsHex

▸ **randomAsHex**(length?: *`number`*): `string`

*Defined in packages/util/node_modules/@plugnet/util-crypto/random/asHex.d.ts:15*

*__name__*: randomAsHex

*__summary__*: Creates a hex string filled with random bytes.

*__description__*: Returns a hex string with the specified (optional) length filled with random bytes.

*__example__*:   

```javascript
import { randomAsHex } from '@plugnet/util-crypto';

randomAsHex(); // => 0x...
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` length | `number` |

**Returns:** `string`

___
<a id="randomasnumber"></a>

###  randomAsNumber

▸ **randomAsNumber**(): `number`

*Defined in packages/util/node_modules/@plugnet/util-crypto/random/asNumber.d.ts:15*

*__name__*: randomAsNumber

*__summary__*: Creates a random number from random bytes.

*__description__*: Returns a random number generated from the secure bytes.

*__example__*:   

```javascript
import { randomAsNumber } from '@plugnet/util-crypto';

randomAsNumber(); // => <random number>
```

**Returns:** `number`

___
<a id="randomasu8a"></a>

###  randomAsU8a

▸ **randomAsU8a**(length?: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/random/asU8a.d.ts:15*

*__name__*: randomAsU8a

*__summary__*: Creates a Uint8Array filled with random bytes.

*__description__*: Returns a `Uint8Array` with the specified (optional) length filled with random bytes.

*__example__*:   

```javascript
import { randomAsU8a } from '@plugnet/util-crypto';

randomAsU8a(); // => Uint8Array([...])
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` length | `number` |

**Returns:** `Uint8Array`

___
<a id="schnorrkelkeypairfromseed"></a>

###  schnorrkelKeypairFromSeed

▸ **schnorrkelKeypairFromSeed**(seed: *`Uint8Array`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/keypair/fromSeed.d.ts:7*

*__name__*: schnorrkelKeypairFromSeed

*__description__*: Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="schnorrkelkeypairfromu8a"></a>

###  schnorrkelKeypairFromU8a

▸ **schnorrkelKeypairFromU8a**(full: *`Uint8Array`*): [Keypair](_cennznet_util.md#keypair)

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/keypair/fromU8a.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| full | `Uint8Array` |

**Returns:** [Keypair](_cennznet_util.md#keypair)

___
<a id="schnorrkelkeypairtou8a"></a>

###  schnorrkelKeypairToU8a

▸ **schnorrkelKeypairToU8a**(__namedParameters: *`object`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/keypair/toU8a.d.ts:2*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| secretKey | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="schnorrkelsign"></a>

###  schnorrkelSign

▸ **schnorrkelSign**(message: *`Uint8Array`*, __namedParameters: *`object`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/sign.d.ts:7*

*__name__*: schnorrkelSign

*__description__*: Returns message signature of `message`, using the supplied pair

**Parameters:**

**message: `Uint8Array`**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| secretKey | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="schnorrkelverify"></a>

###  schnorrkelVerify

▸ **schnorrkelVerify**(message: *`Uint8Array`*, signature: *`Uint8Array`*, publicKey: *`Uint8Array`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/util-crypto/schnorrkel/verify.d.ts:6*

*__name__*: schnorrkelVerify

*__description__*: Verifies the signature of `message`, using the supplied pair

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |
| signature | `Uint8Array` |
| publicKey | `Uint8Array` |

**Returns:** `boolean`

___
<a id="secp256k1recover"></a>

###  secp256k1Recover

▸ **secp256k1Recover**(message: *`Uint8Array`*, signature: *`Uint8Array`*, recovery: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/secp256k1/recover.d.ts:5*

*__name__*: secp256k1Recover

*__description__*: Recovers a publicKey from the supplied signature

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` |
| signature | `Uint8Array` |
| recovery | `number` |

**Returns:** `Uint8Array`

___
<a id="setprefix"></a>

###  setPrefix

▸ **setPrefix**(prefix: *[Prefix](_cennznet_util.md#prefix)*): `void`

*Defined in packages/util/node_modules/@plugnet/keyring/address/setPrefix.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | [Prefix](_cennznet_util.md#prefix) |

**Returns:** `void`

___
<a id="sha512"></a>

###  sha512

▸ **sha512**(data: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="sha512asu8a"></a>

###  sha512AsU8a

▸ **sha512AsU8a**(data: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/sha512/asU8a.d.ts:15*

*__name__*: sha512AsU8a

*__summary__*: Creates sha-512 hash of the input.

*__description__*: Returns a sha-512 `Uint8Array` from the supplied data.

*__example__*:   

```javascript
import { sha512AsU8a } from '@plugnet/util-crypto';

sha512AsU8a(Uint8Array.from([...])); // => Uint8Array([...])
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="sr25519derivekeypairhard"></a>

###  sr25519DeriveKeypairHard

▸ **sr25519DeriveKeypairHard**(pair: *`Uint8Array`*, chainCode: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `Uint8Array` |
| chainCode | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="sr25519derivekeypairsoft"></a>

###  sr25519DeriveKeypairSoft

▸ **sr25519DeriveKeypairSoft**(pair: *`Uint8Array`*, chainCode: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `Uint8Array` |
| chainCode | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="sr25519derivepublicsoft"></a>

###  sr25519DerivePublicSoft

▸ **sr25519DerivePublicSoft**(publicKey: *`Uint8Array`*, chainCode: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| chainCode | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="sr25519keypairfromseed"></a>

###  sr25519KeypairFromSeed

▸ **sr25519KeypairFromSeed**(seed: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="sr25519sign"></a>

###  sr25519Sign

▸ **sr25519Sign**(publicKey: *`Uint8Array`*, secretKey: *`Uint8Array`*, message: *`Uint8Array`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| secretKey | `Uint8Array` |
| message | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="sr25519verify"></a>

###  sr25519Verify

▸ **sr25519Verify**(signature: *`Uint8Array`*, message: *`Uint8Array`*, publicKey: *`Uint8Array`*): `boolean`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signature | `Uint8Array` |
| message | `Uint8Array` |
| publicKey | `Uint8Array` |

**Returns:** `boolean`

___
<a id="stringlowerfirst"></a>

###  stringLowerFirst

▸ **stringLowerFirst**(value?: *`string` \| `null`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/string/lowerFirst.d.ts:15*

*__name__*: stringLowerFirst

*__summary__*: Lowercase the first letter of a string

*__description__*: Lowercase the first letter of a string

*__example__*:   

```javascript
import { stringLowerFirst } from '@plugnet/util';

stringLowerFirst('ABC'); // => 'aBC'
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `null` |

**Returns:** `string`

___
<a id="stringshorten"></a>

###  stringShorten

▸ **stringShorten**(_value?: *`any`*, prefixLength?: *`number`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/string/shorten.d.ts:15*

*__name__*: stringShorten

*__summary__*: Returns a string with maximum length

*__description__*: Checks the string against the `prefixLength`, if longer than dopuble this, shortens it by placing `..` in the middle of it

*__example__*:   

```javascript
import { stringShorten } from '@plugnet/util';

stringShorten('1234567890', 2); // => 12..90
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` _value | `any` |
| `Optional` prefixLength | `number` |

**Returns:** `string`

___
<a id="stringtou8a"></a>

###  stringToU8a

▸ **stringToU8a**(value?: *`string`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/string/toU8a.d.ts:15*

*__name__*: stringToU8a

*__summary__*: Creates a Uint8Array object from a utf-8 string.

*__description__*: String input values return the actual encoded `UInt8Array`. `null` or `undefined` values returns an empty encoded array.

*__example__*:   

```javascript
import { stringToU8a } from '@plugnet/util';

stringToU8a('hello'); // [0x68, 0x65, 0x6c, 0x6c, 0x6f]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` |

**Returns:** `Uint8Array`

___
<a id="stringupperfirst"></a>

###  stringUpperFirst

▸ **stringUpperFirst**(value?: *`string` \| `null`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/string/upperFirst.d.ts:15*

*__name__*: stringUpperFirst

*__summary__*: Lowercase the first letter of a string

*__description__*: Lowercase the first letter of a string

*__example__*:   

```javascript
import { stringUpperFirst } from '@plugnet/util';

stringUpperFirst('abc'); // => 'Abc'
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `null` |

**Returns:** `string`

___
<a id="stripendzero"></a>

###  stripEndZero

▸ **stripEndZero**(value: *`string`*): `string`

*Defined in packages/util/src/format/stripEndZero.ts:23*

trim all trailing zeros. return '' if only zero is passed in.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |   |

**Returns:** `string`

___
<a id="stripendzero-1"></a>

###  stripEndZero

▸ **stripEndZero**(value: *`string`*): `string`

*Defined in node_modules/@cennznet/util/src/format/stripEndZero.ts:23*

trim all trailing zeros. return '' if only zero is passed in.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |   |

**Returns:** `string`

___
<a id="testkeyring"></a>

###  testKeyring

▸ **testKeyring**(options?: *[KeyringOptions](_cennznet_util.md#keyringoptions)*, isDerived?: *`boolean`*): [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md)

*Defined in packages/util/node_modules/@plugnet/keyring/testing.d.ts:8*

*__name__*: testKeyring

*__summary__*: Create an instance of Keyring pre-populated with locked test accounts

*__description__*: The test accounts (i.e. alice, bob, dave, eve, ferdie) are available on the dev chain and each test account is initialised with DOT funds.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [KeyringOptions](_cennznet_util.md#keyringoptions) |
| `Optional` isDerived | `boolean` |

**Returns:** [KeyringInstance](../interfaces/_cennznet_util.keyringinstance.md)

___
<a id="testkeyringpairs"></a>

###  testKeyringPairs

▸ **testKeyringPairs**(options?: *[KeyringOptions](_cennznet_util.md#keyringoptions)*, isDerived?: *`boolean`*): [TestKeyringMap](_cennznet_util.md#testkeyringmap)

*Defined in packages/util/node_modules/@plugnet/keyring/testingPairs.d.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [KeyringOptions](_cennznet_util.md#keyringoptions) |
| `Optional` isDerived | `boolean` |

**Returns:** [TestKeyringMap](_cennznet_util.md#testkeyringmap)

___
<a id="toentropy"></a>

###  toEntropy

▸ **toEntropy**(mnemonic: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/mnemonic/toEntropy.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mnemonic | `string` |

**Returns:** `Uint8Array`

___
<a id="tofixed"></a>

###  toFixed

▸ **toFixed**(x: *`number`*): `string`

*Defined in packages/util/src/number/toFixed.ts:19*

convert number to string, without science notion

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| x | `number` |   |

**Returns:** `string`

___
<a id="tofixed-1"></a>

###  toFixed

▸ **toFixed**(x: *`number`*): `string`

*Defined in node_modules/@cennznet/util/src/number/toFixed.ts:19*

convert number to string, without science notion

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| x | `number` |   |

**Returns:** `string`

___
<a id="tojson"></a>

###  toJson

▸ **toJson**(type: *[KeypairType](_cennznet_util.md#keypairtype)*, __namedParameters: *`object`*, encoded: *`Uint8Array`*, isEncrypted: *`boolean`*): [KeyringPair$Json](_cennznet_util.md#keyringpair_json)

*Defined in packages/util/node_modules/@plugnet/keyring/pair/toJson.d.ts:6*

**Parameters:**

**type: [KeypairType](_cennznet_util.md#keypairtype)**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| meta | `any` |
| publicKey | `Uint8Array` |

**encoded: `Uint8Array`**

**isEncrypted: `boolean`**

**Returns:** [KeyringPair$Json](_cennznet_util.md#keyringpair_json)

___
<a id="tominisecret"></a>

###  toMiniSecret

▸ **toMiniSecret**(mnemonic: *`string`*, password?: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/mnemonic/toMiniSecret.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mnemonic | `string` |
| `Optional` password | `string` |

**Returns:** `Uint8Array`

___
<a id="toseed"></a>

###  toSeed

▸ **toSeed**(mnemonic: *`string`*, password?: *`string`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/mnemonic/toSeed.d.ts:18*

*__name__*: toSeed

*__summary__*: Creates a valid seed from a mnemonic input

*__example__*:   

```javascript
import { mnemonicGenerate, mnemonicToSeed, mnemonicValidate } from '@plugnet/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean

if (isValidMnemonic) {
  console.log(`Seed generated from mnemonic: ${mnemonicToSeed(mnemonic)}`); => u8a
}
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| mnemonic | `string` |
| `Optional` password | `string` |

**Returns:** `Uint8Array`

___
<a id="twox"></a>

###  twox

▸ **twox**(data: *`Uint8Array`*, rounds: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` |
| rounds | `number` |

**Returns:** `Uint8Array`

___
<a id="u8aconcat"></a>

###  u8aConcat

▸ **u8aConcat**(..._list: *`Array`<`Uint8Array` \| `string`>*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/u8a/concat.d.ts:18*

*__name__*: u8aConcat

*__summary__*: Creates a concatenated Uint8Array from the inputs.

*__description__*: Concatenates the input arrays into a single `UInt8Array`.

*__example__*:   

```javascript
import { u8aConcat } from '@plugnet/util';

u8aConcat(
  new Uint8Array([1, 2, 3]),
  new Uint8Array([4, 5, 6])
); // [1, 2, 3, 4, 5, 6]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` _list | `Array`<`Uint8Array` \| `string`> |

**Returns:** `Uint8Array`

___
<a id="u8afixlength"></a>

###  u8aFixLength

▸ **u8aFixLength**(value: *`Uint8Array`*, bitLength?: *`number`*, atStart?: *`boolean`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/u8a/fixLength.d.ts:17*

*__name__*: u8aFixLength

*__summary__*: Shifts a Uint8Array to a specific bitLength

*__description__*: Returns a uint8Array with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length.

*__example__*:   

```javascript
import { u8aFixLength } from '@plugnet/util';

u8aFixLength('0x12') // => 0x12
u8aFixLength('0x12', 16) // => 0x0012
u8aFixLength('0x1234', 8) // => 0x12
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Uint8Array` |
| `Optional` bitLength | `number` |
| `Optional` atStart | `boolean` |

**Returns:** `Uint8Array`

___
<a id="u8atobn"></a>

###  u8aToBn

▸ **u8aToBn**(value: *`Uint8Array`*, options?: *[ToBnOptions](../interfaces/_cennznet_types.tobnoptions.md) \| `boolean`*): `BN`

*Defined in packages/types/node_modules/@plugnet/util/u8a/toBn.d.ts:21*

*__name__*: u8aToBn

*__summary__*: Creates a BN from a Uint8Array object.

*__description__*: `UInt8Array` input values return the actual BN. `null` or `undefined` values returns an `0x0` value.

*__example__*:   

```javascript
import { u8aToBn } from '@plugnet/util';

u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `Uint8Array` |  The value to convert |
| `Optional` options | [ToBnOptions](../interfaces/_cennznet_types.tobnoptions.md) \| `boolean` |  Options to pass while converting |

**Returns:** `BN`

___
<a id="u8atobuffer"></a>

###  u8aToBuffer

▸ **u8aToBuffer**(value?: *`Uint8Array` \| `null`*): `Buffer`

*Defined in packages/types/node_modules/@plugnet/util/u8a/toBuffer.d.ts:16*

*__name__*: u8aToBuffer

*__summary__*: Creates a Buffer object from a hex string.

*__description__*: `null` inputs returns an empty `Buffer` result. `UInt8Array` input values return the actual bytes value converted to a `Buffer`. Anything that is not a `UInt8Array` throws an error.

*__example__*:   

```javascript
import { u8aToBuffer } from '@plugnet/util';

console.log('Buffer', u8aToBuffer('0x123480001f'));
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` \| `null` |

**Returns:** `Buffer`

___
<a id="u8atohex"></a>

###  u8aToHex

▸ **u8aToHex**(value?: *`Uint8Array` \| `null`*, bitLength?: *`number`*, isPrefixed?: *`boolean`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/u8a/toHex.d.ts:15*

*__name__*: u8aToHex

*__summary__*: Creates a hex string from a Uint8Array object.

*__description__*: `UInt8Array` input values return the actual hex string. `null` or `undefined` values returns an `0x` string.

*__example__*:   

```javascript
import { u8aToHex } from '@plugnet/util';

u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` \| `null` |
| `Optional` bitLength | `number` |
| `Optional` isPrefixed | `boolean` |

**Returns:** `string`

___
<a id="u8atostring"></a>

###  u8aToString

▸ **u8aToString**(value?: *`Uint8Array` \| `null`*): `string`

*Defined in packages/types/node_modules/@plugnet/util/u8a/toString.d.ts:15*

*__name__*: u8aToString

*__summary__*: Creates a utf-8 string from a Uint8Array object.

*__description__*: `UInt8Array` input values return the actual decoded utf-8 string. `null` or `undefined` values returns an empty string.

*__example__*:   

```javascript
import { u8aToString } from '@plugnet/util';

u8aToString(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f])); // hello
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` \| `null` |

**Returns:** `string`

___
<a id="u8atou8a"></a>

###  u8aToU8a

▸ **u8aToU8a**(value?: *`Array`<`number`> \| `Buffer` \| `Uint8Array` \| `string` \| `null`*): `Uint8Array`

*Defined in packages/types/node_modules/@plugnet/util/u8a/toU8a.d.ts:17*

*__name__*: u8aToU8a

*__summary__*: Creates a Uint8Array value from a Uint8Array, Buffer, string or hex input.

*__description__*: `null` ior `undefined` nputs returns a `[]` result, Uint8Array values returns the value, hex strings returns a Uint8Array representation.

*__example__*:   

```javascript
import { u8aToU8a } from '@plugnet/util';

u8aToU8a(new Uint8Array([0x12, 0x34]); // => Uint8Array([0x12, 0x34])
u8aToU8a(0x1234); // => Uint8Array([0x12, 0x34])
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Array`<`number`> \| `Buffer` \| `Uint8Array` \| `string` \| `null` |

**Returns:** `Uint8Array`

___
<a id="waitready"></a>

###  waitReady

▸ **waitReady**(): `Promise`<`boolean`>

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/index.d.ts:31*

**Returns:** `Promise`<`boolean`>

___
<a id="waitready-1"></a>

###  waitReady

▸ **waitReady**(): `Promise`<`boolean`>

*Defined in packages/util/node_modules/@plugnet/wasm-crypto/wasm.d.ts:231*

**Returns:** `Promise`<`boolean`>

___
<a id="xxhash64asbn"></a>

###  xxhash64AsBn

▸ **xxhash64AsBn**(data: *`Buffer` \| `Uint8Array` \| `string`*, seed: *`number`*): `BN`

*Defined in packages/util/node_modules/@plugnet/util-crypto/xxhash/xxhash64/asBn.d.ts:17*

*__name__*: xxhash64AsBn

*__summary__*: Creates a xxhash BN from the input.

*__description__*: From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a BN.

*__example__*:   

```javascript
import { xxhash64AsNumber } from '@plugnet/util-crypto';

xxhash64AsBn('abcd', 0xabcd)); // => new BN(0xe29f70f8b8c96df7)
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Buffer` \| `Uint8Array` \| `string` |
| seed | `number` |

**Returns:** `BN`

___
<a id="xxhash64ashex"></a>

###  xxhash64AsHex

▸ **xxhash64AsHex**(data: *`Buffer` \| `Uint8Array` \| `string`*, seed: *`number`*): `string`

*Defined in packages/util/node_modules/@plugnet/util-crypto/xxhash/xxhash64/asHex.d.ts:16*

*__name__*: xxhash64AsHex

*__summary__*: Creates a xxhash hex from the input.

*__description__*: From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a hex string.

*__example__*:   

```javascript
import { xxhash64AsHex } from '@plugnet/util-crypto';

xxhash64AsHex('abcd', 0xabcd)); // => 0xe29f70f8b8c96df7
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Buffer` \| `Uint8Array` \| `string` |
| seed | `number` |

**Returns:** `string`

___
<a id="xxhash64asraw"></a>

###  xxhash64AsRaw

▸ **xxhash64AsRaw**(data: *`Buffer` \| `Uint8Array` \| `string`*, seed: *`number`*): `string`

*Defined in packages/util/node_modules/@plugnet/util-crypto/xxhash/xxhash64/asRaw.d.ts:16*

*__name__*: xxhash64AsRaw

*__summary__*: Creates a xxhash non-prefixed hex from the input.

*__description__*: From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a non-prefixed hex string.

*__example__*:   

```javascript
import { xxhash64AsRaw } from '@plugnet/util-crypto';

xxhash64AsRaw('abcd', 0xabcd)); // => e29f70f8b8c96df7
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Buffer` \| `Uint8Array` \| `string` |
| seed | `number` |

**Returns:** `string`

___
<a id="xxhash64asvalue"></a>

###  xxhash64AsValue

▸ **xxhash64AsValue**(data: *`Buffer` \| `Uint8Array` \| `string`*, seed: *`number`*): `number`

*Defined in packages/util/node_modules/@plugnet/util-crypto/xxhash/xxhash64/asValue.d.ts:16*

*__name__*: xxhash64AsValue

*__summary__*: Creates a hex number from the input.

*__description__*: From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a hex number

*__example__*:   

```javascript
import { xxhash64AsValue } from '@plugnet/util-crypto';

xxhash64AsValue('abcd', 0xabcd)); // => e29f70f8b8c96df7
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Buffer` \| `Uint8Array` \| `string` |
| seed | `number` |

**Returns:** `number`

___
<a id="xxhashashex"></a>

###  xxhashAsHex

▸ **xxhashAsHex**(data: *`Buffer` \| `Uint8Array` \| `string`*, bitLength?: *`number`*): `string`

*Defined in packages/util/node_modules/@plugnet/util-crypto/xxhash/asHex.d.ts:16*

*__name__*: xxhashAsHex

*__summary__*: Creates a xxhash64 hex from the input.

*__description__*: From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a hex string with the specified `bitLength`.

*__example__*:   

```javascript
import { xxhashAsHex } from '@plugnet/util-crypto';

xxhashAsHex('abc'); // => 0x44bc2cf5ad770999
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Buffer` \| `Uint8Array` \| `string` |
| `Optional` bitLength | `number` |

**Returns:** `string`

___
<a id="xxhashasu8a"></a>

###  xxhashAsU8a

▸ **xxhashAsU8a**(data: *`Buffer` \| `Uint8Array` \| `string`*, bitLength?: *`number`*): `Uint8Array`

*Defined in packages/util/node_modules/@plugnet/util-crypto/xxhash/asU8a.d.ts:16*

*__name__*: xxhashAsU8a

*__summary__*: Creates a xxhash64 u8a from the input.

*__description__*: From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a `Uint8Array` with the specified `bitLength`.

*__example__*:   

```javascript
import { xxhashAsU8a } from '@plugnet/util-crypto';

xxhashAsU8a('abc'); // => 0x44bc2cf5ad770999
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Buffer` \| `Uint8Array` \| `string` |
| `Optional` bitLength | `number` |

**Returns:** `Uint8Array`

___

