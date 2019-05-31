# Getting Started

Singlesource provides you with a convenient way to manage your digital identity through their attestation service. Additionally they provide the facility to sign asset transfers from your mobile phone via a peer to peer connection with another mobile or web browser.

## Prerequisites

1. Install SingleSource [browser extension](https://github.com/cennznet/singlesource-extension)
2. Install the SingleSource mobile app

## React Web Dapp

Sample implementation can be found [Here](https://github.com/cennznet/singlesource-extension/tree/master/react-example)

## SingleSource Extension

SingleSource Extension injects a script on your browser window which you can access on window load.

```JavaScript
window.addEventListener('load', () => {
  if (SingleSource) {
    // do something
  } else {
    // SingleSource Extension is not installed
  }
});
```

### SingleSource injected script interface:

```JavaScript
type Environment = 'PRODUCTION' | 'RIMU' | 'KAURI';

type Account = {
  name: string;
  address: string;
  assets: Array<{ assetId: number }>;
};

type SingleSource = {
  // to sign transactions
  signer: Signer;
  // list of accounts, empty if not connected
  accounts$: Observable<Array<Account>>;
  // selected environment on SingleSource Extension
  environment$: Observable<Environment>;
};
```

### Subscribe to `environment$` stream:

```JavaScript
SingleSource.environment$.subscribe(environment => {
  // setup api
  const nodeUrl = 'wss://cennznet-node-0.centrality.cloud:9944';
  const provider = new WsProvider(nodeUrl);
  Api.create({ provider });
});
```

### Subscribe to `accounts$` stream

```JavaScript
SingleSource.accounts$.subscribe(accounts => {
  if (accounts.length === 0) {
    // SingleSource Extension is not connected
  } else {
    // do something
  }
});
```

### Send Transaction

```JavaScript
api.setSigner(SingleSource.signer);

// SingleSource Extension will prompt a QR code which you have
// to scan with mySingleSource app to complete signing
api.tx.genericAsset
  .transfer(0, receiver, amount)
  .signAndSend(sender, status => {
    console.log(status);
  });
```
