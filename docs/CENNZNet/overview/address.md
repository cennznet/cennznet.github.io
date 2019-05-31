# Addresses & Account Management

## Address Format

CENNZnet address format is based on [SS58](https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)).

```
base58encode ( concat ( <address-type>, <address>, <checksum> ) )
```

Currently the `Generic Substrate wildcard (SS58 checksum preimage)` format is used which means the `address-type` is always `0b00101010` (`42`).

Only the 35 bytes format with account public key is officially supported.

```
1 byte address-type, 32 bytes public key, 2 bytes checksum
```

CENNZNet currently uses the [ed25519](https://ed25519.cr.yp.to/) public key signature system. It plans to upgrade to the [schnorrkel](https://crates.parity.io/schnorrkel/index.html) an implementation of Schnorr signature on [Ristretto](https://ristretto.group/why_ristretto.html), which makes multi-signature simple and efficient, and provides a Verifiable Random Function [VRF](https://github.com/w3f/schnorrkel).

### Example address:

Private Key:

- Text format: `Alice                           `  (Pad to 32 characters with space)
- Hex Format: `0x416c696365202020202020202020202020202020202020202020202020202020`

Public Address:

- SS58 Format: `5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ`
- Hex Format: `2ad172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f5e26`
- Breakdown:
  - Address type: `0x2a` (42)
  - Public Key: `0xd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f`
  - Checksum: `0x5e26` (Full hash: `0x5e2600dcf27c16cfee87964ec3f88e51318f4631601c435bd81cbdef588334949a3a16ec38ccac1d4ff69c74241d945e08434a085654cfd055e9dc708d403e02`)

## Generate an Account
### Using mnemonic seed

TODO: use cli to generate or import mnemonic seed

### Using private key

TODO: use cli to generate or import private key

### Create new account with derived key

TODO: use cli to generate a new account with already imported seed

# Additional Notes

The address format is subject to change in the future release.

Possible changes includes:

- Upgrade public key generation algorithm from `ed25519` to `sr25519`
- Change `address-type` from generic substrate (`42`) to a different CENNZnet unique value
- Support index based address format for compact addresses