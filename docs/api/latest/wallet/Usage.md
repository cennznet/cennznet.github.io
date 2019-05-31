## Table of Contents
- [Create a Wallet](#create-a-wallet)
- [Generate Key Pair](#generate-key-pair)
- [Import Key Pair](#import-key-pair)
- [Backup and Recovery](#backup-and-recovery)
- [Persist and Reload](#highlights)
- [Lock and Unlock](#lock-and-unlock)

<a name="create-a-wallet"></a>
## Create a Wallet 

An [WalletOption](../api/interfaces/_cennznet_wallet.walletoption.md) is accepted when constructing the wallet instance. or don't pass it to use the default option.
```typescript
const {Wallet} = require('@cennznet/wallet')
const wallet = new Wallet();
await wallet.createNewVault('a passphrase');
```
<a name="generate-key-pair"></a>
## Generate Key Pair
addAccount() will generate a new key pair in the default keyring. But only return the address of it because of secure concerns.
```typescript
const address = await wallet.addAccount();
```
<a name="import-key-pair"></a>
## Import Key Pair
SimpleKeyring can be use to hold Key Pair individually.
```typescript
const {hexToU8a} = require('@cennznet/util')
const {SimpleKeyring, Wallet} = require('@cennznet/wallet')
const TEST_ACCOUNT = {
    seed: '0x3cf2ec6ffd26587529ab06c82ba9b33110198085f5c6b8d882653d056bf9e0d3',
    address: '5DHzypfuQH7FPhCsrqMxpxkBaPHe8QNhc5s1PwEMDc5p5Nb7',
    publicKey: '0x366010e706af618a6037731b07663d4b6f10eac201c7fdd5fb0bd4727742524d',
    mnemonic: 'insane push cradle toilet token gate chair trim spare blush rebuild top',
};
const TEST_ACCOUNT2 = {
    address: '5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP',
    uri: '//cennznet-js-test',
}
const keyring = new SimpleKeyring();
// alice is a key pair object.
await keyring.addPair(alice);
//or
keyring.addFromUri(TEST_ACCOUNT2.uri);
//or
keyring.addFromMnemonic(TEST_ACCOUNT.mnemonic);
await wallet.addKeyring(keyring);
```

A Wallet can have as many Keyings , (HD or Simple) as you like.

<a name="backup-and-recovery"></a>
## Backup and Recovery
Backing up wallet is achieved by serializing and backing up all keyrings in it.

Same to recover wallet, basically recovering keyrings and use them to create a new wallet instance.

A new passphrase will be asked to set on the recovered wallet.
```typescript
// two keyrings in the wallet
const backup = await wallet.export('passphrase');
// to recover it
const hdKeyring = new HDKeyring(backup[0]);
const simpleKeyring = new SimpleKeyring(backup[1]);
const wallet = new Wallet();
wallet.createNewVaultAndRestore('newpass', [hdKeyring]);
``` 

<a name="highlights"></a>  
## Persist and Reload
To develop a mobile wallet app, you probably need to persist the wallet and reload it every time user opens the app.

`wallet.vault` is the only thing you need. Every time a modification is made on the wallet, wallet.vault will be re-calculated and encrypted.

to reload with a given `vault`. 
```typescript
const wallet = new Wallet({vault});
``` 

Notes：
* The wallet is locked after reload, passphrase is needed to unlock the wallet.
* On different platforms developers are allowed to use different encryptor/decryptor, simply passing encryptor in WalletOption to override the default.

<a name="lock-and-unlock"></a>
## Lock and Unlock
To  provide a better security guarantee to the  user's accounts only the vault is accessible in memory and all read/write operations will return a reject Promise, when the wallet is locked.

## API Docs
[Here](../api/modules/_cennznet_wallet.md)
