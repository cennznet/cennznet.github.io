## Submit Extrinsic & Storage Query


After connecting to CENNZNet, api will dynamically create queries and transaction methods.

These methods provides the ability to create a transaction; like chain state. 
This list is populated from a runtime query.

```
api.tx.<section>.<method>
```

With CRML(CENNZNet Runtime Module) sdks installed, they will inject themselves in api. api.genericAsset, api.cennzxSpot and api.attestation.

**Usage**
```
const tx = api.tx.section.method(mtdParams);
// signing and sending
tx.signAndSend(address);
// The result of signAndSend operation is a transaction hash
const receiver = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';
const sender = '5EKGZwAuwvVpVaGWZJ3hYDqTSxQCDDUgeMv36M4qLq7wtWLH';
const amount = 10;
const txHash = await api.tx.balances.transfer(receiver, amount).signAndSend(sender);

```

Here the address can either be string representing the public address when signer is set or KEY-PAIR required to sign the transaction.

Signer can be set to wallet as
```
api.setSigner(wallet);
```

The following snippet is useful  to check if an extrinsic is successful:

**Usage**
```
const receiver = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';
const sender = '5EKGZwAuwvVpVaGWZJ3hYDqTSxQCDDUgeMv36M4qLq7wtWLH';
const amount = 10;
api.tx.balances.transfer(receiver, amount).signAndSend(sender, ({events, status}) => {
    if (status.isFinalized && events !== undefined) {
        for (let i = 0; i < events.length; i += 1) {
            const event = events[i];
            if (event.event.method === 'ExtrinsicFailed') {
                // EXTRINSIC FAILS
            }
        }
    }
});

```

## Query Storage
The **Api Query** methods give access to chain state queries. These are dynamically populated based on the runtime, like:
```
api.query.section.method
```
The **Api Derive** methods gives access to build-in complex state queries which are combination of several basic state queries, like:
```
api.derive.section.method
```
```
const nonce = await api.query.system.accountNonce(toyKeyring.alice.address())
```

Both our CLI and SDK, can use the above way, to submit extrinsic and query storage.