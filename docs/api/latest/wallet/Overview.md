# @cennznet/wallet
A secured and full-featured wallet for CENNZnet. DApp developers are free to use it, extend it or modify it for their needs. 
  
## Features  
* Implements Signer Interface of @cennznet/api.
* Supports HD Keyring by default. follows BIP 34 and BIP 44 standard.
* Supports individual key pairs management via Seed.
* Stateful In-Memory Wallet. Allows user to lock/unlock in runtime.
* Supports ed25519 (default) and sr25519 algorithms.

## Concepts
### Wallet
Holds multiple Keyrings and provides all usability features. and also responsible to encrypt and decrypt the wallet as a whole.
### Keyring
Is responsible to generate and hold key pairs. Therefore the recovery of wallet is through the recovery of all keyrings in it.
### Default Keyring
Some operations on wallet like addAccount() is forwarded to the Default Keyring. which is the first keyring type when constructing the wallet instance. By default HD Keyring is the default.
### Key Pair
Is using signature schemes either ed25519 or sr25519, which will be used to sign all transactions on CENNZnet.
### Account
An alias for Key Pair

