### API Endpoints

For clarity we grouped all endpoints into 5 distinct categories. Each category represents certain type of data that you can retrieve. 

- [blocks ] (#blocks) 
- [transactions] (#transactions) 
- [addresses] (#address)
- [balances] (#balance)
- [assets] (#assets)

<a name="blocks"></a>

A **Block** is the basic element of any blockchain. It functions as an entry in a distributed ledger, recording a series of transactions or events together with a reference to the previous block. A block is chained to its preceding block by a cryptographic hash of its contents as a means of reference. Blocks contain an identifier for the final state after all transactions contained in it are validated. 



####  GET `/blocks`  

This endpoint allows you to retrieve a paginated response of all blocks from across the network. 
Records are sorted by block number in reverse chronological order (most recent first).

##### Parameters

| Name         | Default               | Description                                                  |
| ------------ | --------------------- | ------------------------------------------------------------ |
| `limit`      | 30                    | (Optional) Specifies the number of records to be displayed per page. Maximum records you can get is 200. |
| `page`       | 1                     | (Optional) Specifies the page to retrieve. Page numbering is based  on the value of `limit`. By default you will always get first page with 30 records. If you set `page=2` then you will get records from 31 to 60. |
| `start_time` | 0                     | (Optional) Represents the lower bound for time range. By default the value is set to zero but you can specify any historical, non-negative date & time. Make sure it has correct Unix time format (the number of seconds that have elapsed since midnight January 1, 1970 UTC), for example `1448928000` and is expressed in UTC time zone. |
| `end_time`   | current UTC timestamp | (Optional) Represents the upper bound for time range. Unlike the `start_time` the default value is set to current date & time but the other characteristics are the same. You can specify any future, non-negative date & time as long as the format is correct (Unix time) and the value is **not** before `start_time` . Of course, UTC time zone is expected. |

##### Example HTTP request

```
GET /v1/blocks HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/blocks 
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```


##### Example JSON response (200 OK)

```   
    {
        "params": { 
            "limit": 30,
            "page": 1,
            "start_time": 0,
            "end_time": 1554945924,
        },
        "result":  {
            "number": 158174,
            "hash": "0x9965008d9b0e6f3d07f0b274c0dfaff4bdc86f99a0f229c11f3b5dbb8ab00a68",
            "parentHash": "0xf710b4cd572c6f078f4b59405ee35dc3f40d58e76aeceb5beeae7b9d3f720c7a",
            "stateRoot": "0x71d488ad7d7d95a68d6b1445727890c3c54d1fdb9e8393d8cf94f30755eaf99c",
            "extrinscicsRoot": "0xc8d89314f6372c38e66292de1278970f93ea1b541aa401fa52aa4ce941fbcf7c",
            "timestamp": 1548384684,
            "transactionCount": 0,
            "baseFee": "1000000000000000",
            "byteFee": "5000000000000",
            "transferFee": "480000000000000",
            "author": "5DcS1HEPFaPJVwoU52HLZNkuikoP5Qey2eU5B26v6D7qjkiB",
            "extrinsicsCount": 1,
            "validators": [
                "5DcS1HEPFaPJVwoU52HLZNkuikoP5Qey2eU5B26v6D7qjkiB",
                "5G6tDRK9KSWLx3zL4gMnzh2K6QUNAb6EGCiyPMTAzCmt45A4",
                "5EKGZwAuwvVpVaGWZJ3hYDqTSxQCDDUgeMv36M4qLq7wtWLH"
            ]
        }
    }
```

##### Example JSON response (400 Bad Request)

```
    {
        "Code": "BadRequestError",
        "Message": "BadRequestError: The end time cannot be before the start time."
    }
```



-----



#### GET `/blocks/latest` 

This endpoint returns data for the latest block in the network. 

##### Example HTTP request

```
GET /v1/blocks/latest HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/blocks/latest 
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
    {
        "result": {
            "number": 158174,
            "hash": "0x9965008d9b0e6f3d07f0b274c0dfaff4bdc86f99a0f229c11f3b5dbb8ab00a68",
            "parentHash": "0xf710b4cd572c6f078f4b59405ee35dc3f40d58e76aeceb5beeae7b9d3f720c7a",
            "stateRoot": "0x71d488ad7d7d95a68d6b1445727890c3c54d1fdb9e8393d8cf94f30755eaf99c",
            "extrinscicsRoot": "0xc8d89314f6372c38e66292de1278970f93ea1b541aa401fa52aa4ce941fbcf7c",
            "timestamp": 1548384684,
            "transactionCount": 0,
            "baseFee": "1000000000000000",
            "byteFee": "5000000000000",
            "transferFee": "480000000000000",
            "author": "5DcS1HEPFaPJVwoU52HLZNkuikoP5Qey2eU5B26v6D7qjkiB",
            "extrinsicsCount": 1,
            "validators": [
                "5DcS1HEPFaPJVwoU52HLZNkuikoP5Qey2eU5B26v6D7qjkiB",
                "5G6tDRK9KSWLx3zL4gMnzh2K6QUNAb6EGCiyPMTAzCmt45A4",
                "5EKGZwAuwvVpVaGWZJ3hYDqTSxQCDDUgeMv36M4qLq7wtWLH"
            ]
        }
    }
```



-----




#### GET `/blocks/latest/number`

This endpoint returns the latest block number from the network.

##### Example HTTP request

```
GET /v1/blocks/latest/number HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/blocks/latest/number 
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
    {
        "latestBlockNumber": 158382
    }
```



----




#### GET `/blocks/{id}` 

This endpoint allows you to retrieve data for a particular block by specifying either its number or hash. 

##### Parameters

| Name | Default | Description                                             |
| ---- | ------- | ------------------------------------------------------- |
| `id` | -       | (Required) It can be either block number or block hash. |

##### Example HTTP request

```
GET /v1/blocks/158174 HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/blocks/158174 
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```
    {
        "result": {
            "number": 158174,
            "hash": "0x9965008d9b0e6f3d07f0b274c0dfaff4bdc86f99a0f229c11f3b5dbb8ab00a68",
            "parentHash": "0xf710b4cd572c6f078f4b59405ee35dc3f40d58e76aeceb5beeae7b9d3f720c7a",
            "stateRoot": "0x71d488ad7d7d95a68d6b1445727890c3c54d1fdb9e8393d8cf94f30755eaf99c",
            "extrinscicsRoot": "0xc8d89314f6372c38e66292de1278970f93ea1b541aa401fa52aa4ce941fbcf7c",
            "timestamp": 1548384684,
            "transactionCount": 0,
            "baseFee": "1000000000000000",
            "byteFee": "5000000000000",
            "transferFee": "480000000000000",
            "author": "5DcS1HEPFaPJVwoU52HLZNkuikoP5Qey2eU5B26v6D7qjkiB",
            "extrinsicsCount": 1,
            "validators": [
                "5DcS1HEPFaPJVwoU52HLZNkuikoP5Qey2eU5B26v6D7qjkiB",
                "5G6tDRK9KSWLx3zL4gMnzh2K6QUNAb6EGCiyPMTAzCmt45A4",
                "5EKGZwAuwvVpVaGWZJ3hYDqTSxQCDDUgeMv36M4qLq7wtWLH"
            ]
        }
    }
```

##### Example JSON response (400 Bad Request) 


```
    {
        "params": {
            "Code": "BadRequestError",
            "Message": "BadRequestError: Please specify either block number or block hash."
        }
    }
```



----



#### GET `/blocks/{id}/transactions`

This endpoint allows you to retrieve a paginated response of all transactions from given block from across the network. You need to specify block either by its number or hash, and transactions (if any) will be shown in an array. Records are ordered by transaction index in  chronological order.

##### Parameters

| Name       | Default                      | Description                                                  |
| ---------- | ---------------------------- | ------------------------------------------------------------ |
| `id`       | -                            | (Required) It can be either block number or block hash.      |
| `limit`    | 30                           | (Optional) Specifies the number of records to be displayed per page. Maximum records you can get is 200. |
| `page`     | 1                            | (Optional) Specifies the page to retrieve. Page numbering is based on the value of `limit`. By default you will always get first page with 30 records. If you set `page=2`then you will get records from 31 to 60. |
| `asset_id` | -                            | (Optional) Specifies an asset ID (or multiple assets IDs) to filter transactions with respect to that particular asset (or assets). <br />In case single asset ID is specified then JSON response returns a key-value pair, while multiple assets IDs are converted to an array.<br />Full list of assets is available via `/assets` endpoint. |
| `txn_type` | Standard, Contract, Internal | (Optional) Specifies a transaction type (or multiple types) to filter transactions with respect to that particular type(s). <br/>By default you get all types: <br/> <ul><li>Standard - indicates a transaction between two standard addresses </li><br /> <li>Contract - indicates a contract call where receiver is usually a smart contract</li> <br/> <li>Internal - indicates smart contract transactions (either between smart contracts or from a contract to standard address</li></ul> |


##### Example HTTP request

```
GET /v1/blocks/158174/transactions HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/blocks/158174/transactions
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
{
	"params": {
        "id": "211549",
        "limit": 30,
        "page": 1,
        "txn_type": [
            "Standard",
            "Contract",
            "Internal"
        ],
        "asset_id": [0, 10]  # (Optional, if single value --> "asset_id": 10 )
        "total": 1
	},
    "result": {
        "hash": "0x0f856bfdc78f572a65dbdc8b61afdf5fe4cc2cbc967083f449049347297b2266",
        "blockNumber": 5467903,
        "blockHash": "0x987678e70b1bb2dcb82b56bded6a6b1cc3bfa1994271b13ed532e995f743d032",
        "fromAddress": "0x6ef8831d3ea0b4ee6ea742906daff7c0199a7ce3",
        "fromAddressBalance": "999999001712289999999998000",
        "toAddress": "0x47a16e51bcc89c0015622fe83eb482a4522f6c5c",
        "toAddressBalance": "2000000000000000000",
        "value": "2000000000000000000",
        "fee": "2220000000000000",
        "nonce": 48,
        "size": 280,
        "status": true,
        "timestamp": 1548712836,
        "assetId": 0,
        "assetSymbol": "CENNZ",
        "gasLimit": null,
        "index": 1,
        "type": "Standard",
        "data": null
        }
}
```

##### Example JSON response (400 Bad Request) 

```
{
	"params": {
		"Code": "BadRequestError",
		"Message": "BadRequestError: Please specify either block number or block hash."
	}
}
```

------
****

#### <a name="transactions"></a> 

A **Transaction** is a message between two addresses that may transfer an asset, initiate a contract call or execute a contract (also called internal transaction). Asset transfer or contract transactions always originate from an external address that is controlled by an external actor by means of a private key.
Internal transactions are result of an execution chain originally triggered by an external address and typically are messages passed between a contract address and any other address (external or contract).



#### GET `/transactions` 

This endpoint allows you to retrieve a paginated response of all transactions from across the network. Records are sorted by block number in reverse chronological order (most recent first) and then by index in chronological order.

##### Parameters

| Name         | Default                      | Description                                                  |
| ------------ | ---------------------------- | ------------------------------------------------------------ |
| `limit`      | 30                           | (Optional) Specifies the number of records to be displayed per page.  Maximum records you can get is 200. |
| `page`       | 1                            | (Optional) Specifies the page to retrieve. Page numbering is based on the value of `limit`. By default you will always get first page with 30 records. If you set `page=2`then you will get records from 31 to 60. |
| `start_time` | 0                            | (Optional) Represents the lower bound for time range. By default the value is set to zero but you can specify any historical, non-negative date & time. Make sure it has correct Unix time format (the number of seconds that have elapsed since midnight January 1, 1970 UTC), for example `1448928000` and is expressed in UTC time zone. |
| `end_time`   | current UTC timestamp        | (Optional) Represents the upper bound for time range. Unlike the `start_time` the default value is set to current date & time but the other characteristics are the same. You can specify any future, non-negative date & time as long as the format is correct (Unix time) and the value is **not** before `start_time` . Of course, UTC time zone is expected. |
| `asset_id`   | -                            | (Optional) Specifies an asset ID (or multiple assets IDs) to filter transactions with respect to that particular asset (or assets). <br />In case single asset ID is specified then JSON response returns a key-value pair, while multiple assets IDs are converted to an array.<br />Full list of assets is available via `/assets` endpoint. |
| `txn_type`   | Standard, Contract, Internal | (Optional) Specifies a transaction type (or multiple types) to filter transactions with respect to that particular type(s). <br/>By default you get all types: <br/> <ul><li>Standard - indicates a transaction between two standard addresses </li><br /> <li>Contract - indicates a contract call where receiver is usually a smart contract</li> <br/> <li>Internal - indicates smart contract transactions (either between smart contracts or from a contract to standard address</li></ul> |

##### Example HTTP request

```
GET /v1/transactions HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: e43de674-0e3e-40a6-91f7-8cde00dac224
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/transactions
  -H 'Content-Type: application/json' 
  -H 'apikey: e43de674-0e3e-40a6-91f7-8cde00dac224' 
```

##### Example JSON response (200 OK)

```   
    {
        "params": {
            "limit": 30,
            "page": 1,
            "start_time": 0,
            "end_time": 1555036634,
            "txn_type": [
                "Standard",
                "Contract",
                "Internal"
            ],
            "total": 1352
        },
        "result":{
            "hash": "0x1c9da2c60b87e5caa14ed56ab6eba472b0dfd4f0ab542f945d94d5cd354899de",
            "blockNumber": 42964,
            "blockHash": "0x54ad842aa7b3e200ab50b4352161c1f9c24f80a5e60e6118fe64b0e4ed19eb94",
            "fromAddress": "5H1BWsGGE14RFy4rNw6J2mt8UhYofJkFwevCbfN57WUZ9Wra",
            "fromAddressBalance": "3999999916509999700",
            "toAddress": "5CM9nBr9aMRBbauTkKkafwL8e8w2uJ1KHvWRHNmSki6bxWxb",
            "toAddressBalance": "4000000080000000000",
            "value": "80000000000",
            "fee": "2200000000000000",
            "nonce": 2,
            "size": 144,
            "status": true,
            "timestamp": 1555035390,
            "assetId": 16000,
            "assetSymbol": "CENNZ-T",
            "gasLimit": null,
            "index": 2,
            "type": "Standard",
            "data": null
        }
    }
```

##### Example JSON response (400 Bad Request) 

```
    {
        "Code": "BadRequestError",
        "Message": "BadRequestError: Invalid start time type."
    }
```

****

#### GET `/transactions/{hash}` 

This endpoint allows you to retrieve transaction data by specifying its hash. You will get either standard or contract type of transactions.

##### Parameters

| Name   | Default | Description                                 |
| ------ | ------- | ------------------------------------------- |
| `hash` | -       | (Required) It needs to be transaction hash. |

##### Example HTTP request

```
GET /v1/transactions/0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10 HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/transactions/0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
    {
        "params": {
            "hash": "0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10",
            "limit": 30,
            "page": 1,
            "total": 30
        },
        "result": {
            "hash": "0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10",
            "blockNumber": 144697,
            "fromAddress": "5EH3en4d73enfC4ycVq6ntJH4dyDNTWXW6mdDuTA7HM9TgyW",
            "fromAddressBalance": "17999999999999765157",
            "toAddress": "5DwwdZJtojkD86hJ39RL5icVemRzexRQHe8vt5n4hJ2H9XHM",
            "toAddressBalance": "7494",
            "value": "7494",
            "timestamp": 1553130582,
            "assetId": 10,
            "assetSymbol": "CENTRAPAY",
            "index": 1
        }
    }
```

##### Example JSON response (400 Bad Request) 

```
    {
        "params": {
            "Code": "BadRequestError",
            "Message": "Wrong hash format. Please use only alphanumeric characters and `0x` prefix."
        }
    }
```
****

#### GET `/transactions/{hash}/internal` 

This endpoint allows you to retrieve all internal transactions by specifying parent transaction hash (i.e. contract transaction type). Note that both contract and internal transaction share the same `hash`. Result is sorted by index in chronological order.

##### Parameters

| Name   | Default | Description                                        |
| ------ | ------- | -------------------------------------------------- |
| `hash` | -       | (Required) It needs to be parent transaction hash. |

##### Example HTTP request

```
GET /v1/transactions/0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10/internal HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/transactions/0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10/internal
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
    {
        "params": {
            "hash": "0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10",
            "limit": 30,
            "page": 1,
            "total": 2
        },
        "result": [
            {
            "hash": "0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10",
            "blockNumber": 144697,
            "fromAddress": "5EH3en4d73enfC4ycVq6ntJH4dyDNTWXW6mdDuTA7HM9TgyW",
            "fromAddressBalance": "17999999999999765157",
            "toAddress": "5DwwdZJtojkD86hJ39RL5icVemRzexRQHe8vt5n4hJ2H9XHM",
            "toAddressBalance": "7494",
            "value": "7494",
            "timestamp": 1553130582,
            "assetId": 10,
            "assetSymbol": "CENTRAPAY",
            "index": 1
            },
            {
            "hash": "0x828ce40522575bffddef27186dbffdade8a5088a231ba574da4272d4cc52cf10",
            "blockNumber": 144697,
            "fromAddress": "5EH3en4d73enfC4ycVq6ntJH4dyDNTWXW6mdDuTA7HM9TgyW",
            "fromAddressBalance": "17999999999999762182",
            "toAddress": "5DwwdZJtojkD86hJ39RL5icVemRzexRQHe8vt5n4hJ2H9XHM",
            "toAddressBalance": "7494",
            "value": "7494",
            "timestamp": 1553130582,
            "assetId": 0,
            "assetSymbol": "CENNZ",
            "index": 2
            }
        ]
    }
```

##### Example JSON response (400 Bad Request) 

```
    {
        "params": {
            "Code": "BadRequestError",
            "Message": "BadRequestError": "Wrong hash format. Please use only alphanumeric characters and `0x` prefix."
        }
    }
```

****

#### <a name="address"></a> 

An **Address** is base-58 encoded value that can identify a specific account on the chain. It can be either external (controlled by an external actor by means of a private key) or contract address. 



#### GET `/addresses/{address}/transactions` 

This endpoint allows you to retrieve a paginated response with all transactions for a given address. You may include optional parameters like asset ID or transaction flow to narrow down your result set. Result is sorted by block number in reverse chronological order (most recent first) and then by transaction index in chronological order. 

##### Parameters

| Name         | Default                      | Description                                                  |
| ------------ | ---------------------------- | ------------------------------------------------------------ |
| `address`    | -                            | (Required) This can be either a standard or contract address as long as it's a valid address. |
| `limit`      | 30                           | (Optional) Specifies the number of records to be displayed per page.  Maximum records you can get is 200. |
| `page`       | 1                            | (Optional) Specifies the page to retrieve. Page numbering is based on the value of `limit`. By default you will always get first page with 30 records. If you set `page=2`then you will get records from 31 to 60. |
| `start_time` | 0                            | (Optional) Represents the lower bound for time range. By default the value is set to zero but you can specify any historical, non-negative date & time. Make sure it has correct Unix time format (the number of seconds that have elapsed since midnight January 1, 1970 UTC), for example `1448928000` and is expressed in UTC time zone. |
| `end_time`   | current UTC timestamp        | (Optional) Represents the upper bound for time range. Unlike the `start_time` the default value is set to current date & time but the other characteristics are the same. You can specify any future, non-negative date & time as long as the format is correct (Unix time) and the value is **not** before `start_time` . Of course, UTC time zone is expected. |
| `asset_id`   | -                            | (Optional) Specifies an asset ID (or multiple assets IDs) to filter transactions with respect to that particular asset (or assets). <br />In case single asset ID is specified then JSON response returns a key-value pair, while multiple assets IDs are converted to an array.<br />Full list of assets is available via `/assets` endpoint. |
| `txn_flow`   | Incoming, Outgoing           | (Optional) Specifies the transaction flow (or multiple flows) to filter the transactions with respect to that particular type(s). <br/>By default you get all types: <br/> <ul><li>Incoming - indicates a received transaction</li><li>Outgoing - indicates a sent transaction </li></ul> |
| `txn_type`   | Standard, Contract, Internal | (Optional) Specifies a transaction type (or multiple types) to filter transactions with respect to that particular type(s). <br/>By default you get all types: <br/> <ul><li>Standard - indicates a transaction between two standard addresses </li><br /> <li>Contract - indicates a contract call where receiver is usually a smart contract</li> <br/> <li>Internal - indicates smart contract transactions (either between smart contracts or from a contract to standard address</li></ul> |

##### Example HTTP request

```
GET /v1/addresses/5FLZUYmKfcH4hEQf9GK5ABJkSVSLVgy6u7vxUtXASFPGXYsp/transactions HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET https://api-rimu.uncoverexplorer.com/v1/addresses/5FLZUYmKfcH4hEQf9GK5ABJkSVSLVgy6u7vxUtXASFPGXYsp/transactions
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
    {
    "params": {
        "address": "5FLZUYmKfcH4hEQf9GK5ABJkSVSLVgy6u7vxUtXASFPGXYsp",
        "limit": 30,
        "page": 1,
        "start_time": 0,
        "end_time": 1555039058,
        "txn_flow": [
        "Outgoing",
        "Incoming"
        ],
        "txn_type": [
        "Standard",
        "Contract",
        "Internal"
        ],
        "total": 1
    },
    "result": 
        {
        "hash": "0xdb7fcb95fde56c59364d1e036dbb1fae3f5be6cf6ca8b902372a625b74e2baca",
        "blockNumber": 144917,
        "blockHash": "0x17c0f0aaa92c3c011624e6774fef70107e928625c54ed9f9278162d6a281621a",
        "fromAddress": "5FLZUYmKfcH4hEQf9GK5ABJkSVSLVgy6u7vxUtXASFPGXYsp",
        "fromAddressBalance": "1999999999879899000",
        "toAddress": "5GdC5LhqZUs3GhbtQdewrMepMgRUNdeH49mYocE3K9nX8jac",
        "toAddressBalance": "120000000",
        "value": "60000000",
        "fee": "151",
        "nonce": 5,
        "size": 141,
        "status": true,
        "timestamp": 1553131902,
        "assetId": 0,
        "transactionFlow": "Outgoing",
        "assetSymbol": "CENNZ",
        "gasLimit": null,
        "index": 1,
        "type": "Standard",
        "data": null
        }
    }
```

##### Example JSON response (400 Bad Request) 

```
    {
        "params": {
            "Code": "BadRequestError",
            "Message": "BadRequestError": "Please use only alphanumeric characters and ensure total length of 48."
        }
    }
```

****

#### <a name="balance"></a> 

A **Balance** is addresses' value of an asset at given block (point in time). It gets updated with any transaction or event associated with a given address. 



#### GET `/balances/{address}/latest` 

This endpoint allows you to retrieve the most recent balances for a given address, break down by asset ID and block number. Result is sorted by asset ID in chronological order.

##### Parameters

| Name       | Default | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| `address`  | -       | (Required) This can be either a standard or contract address as long as it's a valid address. |
| `asset_id` | -       | (Optional) Specifies an asset ID (or multiple assets IDs) to filter transactions with respect to that particular asset (or assets). <br />In case single asset ID is specified then JSON response returns a key-value pair, while multiple assets IDs are converted to an array.<br />Full list of assets is available via `/assets` endpoint. |

##### Example HTTP request

```
GET /v1/balance/5FLZUYmKfcH4hEQf9GK5ABJkSVSLVgy6u7vxUtXASFPGXYsp/latest HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
https://api-rimu.uncoverexplorer.com/v1/balance/5FLZUYmKfcH4hEQf9GK5ABJkSVSLVgy6u7vxUtXASFPGXYsp/latest
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
    {
        "params": {
            "address": "5FLZUYmKfcH4hEQf9GK5ABJkSVSLVgy6u7vxUtXASFPGXYsp"
        },
        "result": [
            {
            "balance": "1999999999879899000",
            "reservedBalance": "0",
            "blockNumber": 144917,
            "assetId": 0,
            "assetSymbol": "CENNZ"
            },
            {
            "balance": "1999999999999999098",
            "reservedBalance": "0",
            "blockNumber": 144917,
            "assetId": 10,
            "assetSymbol": "CENTRAPAY"
            }
        ]
    }

```

##### Example JSON response (400 Bad Request) 

```
    {
        "params": {
            "Code": "BadRequestError",
            "Message": "BadRequestError": "Please use only alphanumeric characters and ensure total length of 48."
        }
    }
```

#### <a name="assets"></a> 

An **Asset** is a digital token which can be transferred between addresses and has defined function within blockchain ecosystem (e.g. can serve as means of staking or paying transfer fees).



#### GET `/assets` 

This endpoint allows you to retrieve a paginated response with general asset information. 

##### Parameters

| Name         | Default                                             | Description                                                  |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------ |
| `limit`      | 30                                                  | (Optional) Specifies the number of records to be displayed per page.  Maximum records you can get is 200. |
| `page`       | 1                                                   | (Optional) Specifies the page to retrieve. Page numbering is based on the value of `limit`. By default you will always get first page with 30 records. If you set `page=2`then you will get records from 31 to 60. |
| `asset_type` | Staking, Spending, Reserved, Test or User-generated | Specifies an asset type (or multiple types) to filter assets with respect to that particular type(s). <br/>By default you get all types: <ul><li>Staking - network participation and validation </li> <li>Spending - transaction fees and rewards</li> <li>Reserved - core platform utility</li><li>Test - testing phase only</li><li>User-generated - DApp economy and community</li></ul> |

##### Example HTTP request

```
GET /v1/assets HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/assets
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

##### Example JSON response (200 OK)

```   
    {
        "params": {
            "limit": 30,
            "page": 1,
            "asset_type": [
            "Staking",
            "Spending",
            "Reserved",
            "Test",
            "User-generated"
            ],
            "total": 14
        },
        "result": [
            {
            "hash": "",
            "assetId": 0,
            "totalSupply": "565000000000000000000000000",
            "blockNumber": 0,
            "timestamp": 1552028272,
            "symbol": "CENNZ",
            "creator": "",
            "fee": null,
            "assetType": "Staking",
            "decimals": 18
        }
    }
```
