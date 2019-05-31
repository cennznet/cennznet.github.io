## Account Creation
The SDK provides a communication protocol to interact with the blockchain’s core services. The basic requirement for this is; account creation and to get some funds to experiment with the functionality.


There are two ways to create an account.

### Using SDK

Please check [Generate Key Pair](/api/latest/wallet/Usage.md#generate-key-pair) in SDK Wallet for more details


### Using CLI
`cennz-cli wallet`

The CLI wallet command provides all usability features for creating a Wallet instance.

**Usage**
```
  $ cennz-cli wallet:COMMAND

COMMANDS
  wallet:add       Add new account by either seedHex or seedText
  wallet:create    Create a new wallet
  wallet:generate  Generate a new account and store it in wallet
  wallet:list      List all accounts addresses
  wallet:remove    Remove the specified address from wallet
```
**Protect Wallet**

**Create your wallet with a password (-p)**

`$ cennz-cli wallet:create -p`

**Generate an account in Wallet**

`$ cennz-cli wallet:generate [-p]`

**List all addresses managed by Wallet**

`$ cennz-cli wallet:list [-p]`

**Add an account by _seed_ in Wallet**

**Usage**
```
  $ cennz-cli wallet:add [-p] --seedText Alice
  $ cennz-cli wallet:add [-p] --seedHex 0x01234...
  OPTIONS
    -p, --passphrase, if a passphrase is needed
    --seedHex=seedHex    seed in hex form (start with 0x)
    --seedText=seedText  seed as a simple text (Alice)
```
**Remove account by address from Wallet**

**Usage**
```
  $ cennz-cli wallet:remove [-p] '5G8fco8mAT3hkprXGRGDYxACZrDsy63y96PATPo4dKcvGmFF'
  OPTIONS
    -p, --passphrase, if a passphrase is needed
```

## Funding the account created

In order to use the core services, we need to have some money, so navigate to the [CENNZNet Faucet](https://cennznet-faucet-ui.centrality.cloud) and transfer some money to your public address.
