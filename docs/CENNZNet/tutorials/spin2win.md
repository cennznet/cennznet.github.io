# Spin2Win Contract

## Overview
In this tutorial you'll learn how to design, build, deploy and call a smart contract on a CENNZnet blockchain.

We make a few assumptions before getting started.  
* You're using macOS, GNU/Linux, or similar UNIX-based system  
* You have some programming experience  

The contract we'll be creating is a simple casino game _Spin2Win_.  

You know the game where you spin a wheel and win a prize
depending on where it stops?

<img width="200px" height="200px" src="/docs/CENNZNet/tutorials/img/wheel.png"/>

All we need is a player account to send winnings to and a random
value to simulate the wheel spin.

You can follow along with the final code [here](https://github.com/cennznet/spin2win).

## Getting Started
First check you have followed these guides:
- [Install rust and the contract build toolchain](../tutorials/sc_getstarted.md).

- Setup and run a [local CENNZnet node](https://hackmd.io/mDLtPP2vQdWxw84fiEWiIg?both)


Once all that is done we can create a new contract project using the template repo
```bash
cargo generate \
    --name spin2win \
    --git ssh://git@github.com/cennznet/contract-template

# Use rust nightly toolchain for contract dev.
cd spin2win && rustup override set nightly
```

The newly created project should have the following content in `src/lib.rs`
Go ahead and rename the struct `Demo` and its usages with `Spin2Win` instead.
```rust
//! src/lib.rs
#![no_std]
use ink_lang::contract;

contract! {
    // Define contract stored data
    struct Spin2Win {}

    // Define contract functions
    impl Spin2Win {}
    
    // Define contract instantiation logic
    impl Deploy for Spin2Win {
        fn deploy(&mut self) {}
    }
}
```

## Smart Contracts?
In a nut-shell a CENNZnet smart contract is some stored web assembly code with an associated account on chain.  
It can use blockchain storage and interact with runtime functionality.  

In general, any network user can invoke a smart contract provided they pay a fee (AKA gas) for the computational resources used e.g. CPU, storage, network, etc.  

CENNZnet contracts are written in rust and cross-compiled to wasm. Parity (Substrate) provide a DSL to make this simpler, [Ink](https://github.com/paritytech/ink).  

We'll be using Ink to bootstrap the majority of our contract code.
For reference it ships with 3 different APIs: core, model, and lang:  

_lang_ gives the highest level of abstraction and hides the most complexity.  

_core_ provides the least abstraction and requires more knowledge of the underlying workings of the contract virtual machine.  

_model_ is somewhere in between the two  

## Design
Before we get started with implementation, our contract at a glance should:  
1. Define a public function which receives an account ID of a player  
2. Generate a random value of winnings  
3. Transfer winnings to the player's account  

## Writing the Contract 📄
We'll use the `contract!` macro from the `ink_lang` crate to stub out the basic structure of the contract.
It requires us to define a `struct` for the contract's data and an `impl` block to define its available function calls.

In this case, our contract design doesn't require us to store any data so we can leave the definition empty (`{}`).
The interesting part of our contract will all be contained in a single public call, which users can invoke to play the game.
Let's add that in now.

```rust
//! src/lib.rs
#![no_std]
use ink_lang::contract;
use contract_sdk::{types::AccountId};

contract! {
    // Define contract data
    struct Spin2Win {}

    // Define contract functions
    impl Spin2Win {
        pub(external) fn spin(&self, player: AccountId) {
            // TODO: "spin" and transfer winnings to player
        }
    }

    // Define contract instantiation logic
    impl Deploy for Spin2Win {
        fn deploy(&mut self) {}
    }
}
```

You'll notice we imported the `contract_sdk` crate. It provides bindings for CENNZnet types and some other useful functions missing from ink.  

## Spinning the Wheel 🔁
IRL spinning a wheel and the value it stops on are seemingly unpredictable.  
To simulate this we need a random value to use when calculating how much our player should win.

The Substrate runtime provides a random 32 byte sequence derived from the previous block. This is accessible to contract's via the contract SDK with  `Context::random_seed()`.  

However, for our use case we want a single integer. The contract SDK provides a nice utility function for this exact case, wrapping `Context::random_seed()`.

We can ask for an integer in a given range, thereby setting a lower and upper limit on a player's potential winnings.

```rust
use contract_sdk::{types::AccountId, util};

// ...

/// A public call which spins the wheel transferring winnings to `player`
pub(external) fn spin(&self, player: AccountId) {
    let prize = util::random_in_range(1_000, 100_000);
}
```

## Paying the Player 💵
The last step is to transfer the winnings to the player.  
The functionality to do this directly is missing (read _complicated_) at the moment.  
However, we can accomplish it indirectly by executing a dummy call to the player's account, as a side affect transferring some value (prize money).  
We can invoke a call using the `contract_sdk` crate and it's provided `Runtime` binding.  

```rust
use contract_sdk::{prelude::*, types::AccountId, util};

// ...

pub(external) fn spin(&self, player: AccountId) {
    let prize = util::random_in_range(1_000, 100_000);
    /// `call` calls an account transferring some value
    Runtime::call(
		player,
		0,  // gas allocation, `0` means use current meter reading
		prize.into(),
		&vec![], // empty payload (we're not calling anything)
	);
}
```

That's the implementation finished. Check your contract matches up with [this one](https://github.com/cennznet/spin2win) before trying the next section.

## Building the Contract 🛠️
Run the following command to build the contract
```bash
./build.sh
```

This will output built artefacts in `./target`, primarily,  
- `spin2win.wasm`  
The ready to deploy contract binary  
- `Spin2Win.json`  
The contract's ABI metadata for client code generation  

The other files are various intermediate outputs and representations which maybe useful for debugging.

## Deploy the Contract
A contract is deployed in two steps, the first is a `putCode` operation where the binary is stored on chain.  
The second part is where the stored contract is instantiated, any one-time setup operations are performed and the contract's address is generated.  

Open a web browser to the [CENNZnet UI](https://cennznet-ui.centralityapp.com/#/settings) and check it's connected to your local node.  
`Local Node: (127.0.0.1:9944)` should be selected in the endpoints dropdown.   
<img src="/docs/CENNZNet/tutorials/img/settings-endpoint.png"/>

Hit "save & reload" to apply the changes.

With that configured we can go to the [contracts view](https://cennznet-ui.centralityapp.com/#/contracts).  
<img width="80px" height="160px" src="/docs/CENNZNet/tutorials/img/contracts-view.png"/>  
This is where we can deploy, instantiate, and call smart contracts.  
Recall that each of these operations requires some gas payment in exchange.  

To deploy the contract select a user account* from the dropdown and choose the `spin2win.wasm` and `Spin2Win.json` ABI files like so.   

*Note: On a development chain pre-created accounts are available e.g. `Alice, Bob, Charlie`  

<img width="80%" src="/docs/CENNZNet/tutorials/img/putCode.png"/>  


Click "Deploy" and follow the prompt to sign and submit the transaction.

You'll see the following events raised  
<img width="200px" src="/docs/CENNZNet/tutorials/img/putCode-events.png"/>  
This means the transaction was succesful and the contract code has been stored on the chain.  
Use the [explorer view](https://cennznet-ui.centralityapp.com/#/explorer) to see the block transactions and events in more detail.  
<br>

---

Next we'll instantiate the contract. The view should have automatically switched over to "Instance".

As part of this we can give the contract an initial _endowment_ balance,  
this will act as the prize pot for player winnings. It can be topped up anytime by transferring more balance into the contract.  

<img width="80%" src="/docs/CENNZNet/tutorials/img/instantiate.png"/>  


You should receive event notifications matching  
<img width="200px" src="/docs/CENNZNet/tutorials/img/instantiate-events.png"/>  


## Call the Contract 📞
After all that hard work we can call the contract!  
Notice the UI has used our contract's ABI and created a form with the 'spin' public function and correct data type, neat huh?  

All we need to do is select a player to spin the wheel, some `value` and gas fees to play.  
<img width="80%" src="/docs/CENNZNet/tutorials/img/call.png"/>  


If all goes well you'll see the following events  
<img width="200px" src="/docs/CENNZNet/tutorials/img/call-events.png"/>  


There are two `contract.Transfer` events. One is the entry fee from the player to the contract while the other is  
winnings going from the contract to the player.

You can dig into the block events through the explorer to see exactly how much was won.


## Epilogue 🎉
You just learned how to write a smart contract for CENNZnet end-to-end!


If you're interested in learning more, there are some changes that could be made to improve the contract:  

- Currently users can pay any amount to play (`value`). Add a check to ensure the value is above some reasonable amount say, `100`  

- We may want to rate limit how often people can call the contract e.g. per day or per _n_ blocks.  
  Try adding a `Map` structure in contract storage and use this to track callers

- You may have noticed that the RNG seed will be the same each block so if multiple people call the contract in a block they will win the same amount.  
  One way to fix this is to involve the player account ID (e.g. XOR) when calculating the random amount.  
  Try modifying the winnings amount use `Context::random_seed()` directly.  
