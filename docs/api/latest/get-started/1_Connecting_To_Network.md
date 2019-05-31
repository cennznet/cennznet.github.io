# Get Started

## Connecting to Network

Before proceeding ensure you [install](/api/latest/tutorials/1_Installation.md) the required packages.

There are two ways to connect to the network, using the client tool cennz-cli or the SDK, in both cases you need to make an API key so you can connect to the endpoint, like: 

1. Register an account with [unfrastructure](https://unfrastructure.io/).
2. Log in and create a project.
3. Use the api key as the endpoint.

### Using CLI
`cennz-cli repl`

On the REPL start, an websocket connection would be established to the endpoint provided by -c, --endpoint flag.

**Usage**
```bash
  $ cennz-cli repl [SCRIPT] 
  Example: $ cennz-cli repl -c wss://rimu.unfrastructure.io/ws?apikey=***

OPTIONS
  -c, --endpoint=endpoint  [default: ws://localhost:9944] cennznet node endpoint
  -e, --evaluate=evaluate  evaluate script and print result
  -p, --passphrase if a passphrase is needed
  -f, --path path to the wallet's vault file [default: /home_directory/.cennz_cli/wallet.json] path to wallet.json
```

Use api in the REPL to interact with the node:

```bash
// check chain name
(cennz-cli)> api.rpc.system.chain().then(console.log)
(cennz-cli)> [String: 'CENNZnet DEV']
```

### Using SDK

#### Connect to Rimu TestNet
```
<Static> create(options?: ApiOptions | ProviderInterface)
```

```
// initialize Api and connect to DEV network
const {Api} = require('@cennznet/api')
api = await Api.create({
    provider: 'wss://rimu.unfrastructure.io/ws?apikey=***'
});
// for Rxjs
const {ApiRx} = require('@cennznet/api')
api = await ApiRx.create({
    provider: 'wss://rimu.unfrastructure.io/ws?apikey=***'
}).toPromise();
```

Provider created using the [endpoint](https://unfrastructure.io/) can either be a URL string or Provider class instance.

```
const {WsProvider, HttpProvider} = require('@cennznet/api');
```


