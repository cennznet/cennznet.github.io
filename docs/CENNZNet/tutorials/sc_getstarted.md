# Getting Started
This guide will help you setup a contract development environment.
It involves installing a rust nightly toolchain and a few other bells and whistles.


## Install the Things (Mac + Linux)
[RustUp](https://rustup.rs/) is the defacto version manager for the rust toolchain. We'll use it to setup and configure rust on our system.

In a terminal run:
```bash
curl https://sh.rustup.rs -sSf | sh
```

The installer will place `$HOME/.cargo/bin` onto your path environment variable. This will take affect on your next login but because you probably want to get going, you can prefix your current path by running:
```bash
export PATH=$HOME/.cargo/bin:$PATH
```

Add the web assembly compilation target
```bash
rustup target add wasm32-unknown-unknown --toolchain=nightly
```

We also need a special wasm processing tool ([wasm-build](https://github.com/paritytech/wasm-utils)).
It optimizes compiled wasm for running on Substrate based blockchains.
```bash
cargo install pwasm-utils-cli \
    --bin wasm-build
```

Next install `cargo generate`, a useful subcommand to make new cargo project's from existing git repositories.

☕ time! this may take ~10 mins
```bash
cargo install cargo-generate
```

That's it! you're all set to develop smart contracts for CENNZnet.

## Install the things (Windows)
The most straight forward option is to user docker to setup our development environment  

Download and install docker from [https://runnable.com/docker/install-docker-on-windows-10](https://runnable.com/docker/install-docker-on-windows-10)

Open docker settings, choose shared drives and select your `C:` drive as shared.

Run a rust nightly docker container
```
mkdir shared
docker run -d -v .\shared:/shared --name rust rustlang/rust:nightly tail -f /dev/null
```

Run a shell session in the container
```bash
docker exec -it rust bash

# Install contract build tools
rustup target add wasm32-unknown-unknown
cargo install pwasm-utils-cli --bin wasm-build
cargo install cargo-generate
```

Open the `/shared` folder in your IDE. We'll use this as the workspace for contract development.  
It is shared between the docker contrainer (build environment) and your host OS.  

All done :D  
This docker environment is capable of building contracts  
