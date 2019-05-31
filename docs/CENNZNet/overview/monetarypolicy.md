# Monetary Policy
## Principles
Below are the principles for the CENNZnet economy design

1. **Reduce friction** for on-boarding dApps and users
   
2. Ensuring that it is **cost efficient** to run applications
   
3. CENNZ value **appreciates as network usage increases**
   
4. **Encourage and incentivise good applications** to grow on CENNZnet
   
5. **Governed by people** who have stake in CENNZnet

## Dual Token Economy
CENNZnet is designed to be a dual token economy with staking token (CENNZ) and spending token (CentraPay). Application builders and developers want predictable costs to understand how to make a profit. At the same time you want to optimise usage of the network and prevent attacks. CENNZNet's dual token economy attempts to achieve predictable costs and optimal usage. 

CENNZ (the staking token) is required as stake for participating in the proof of stake (PoS) consensus as a validator and governance of CENNZnet. It is a **store of value** token. The increase in the value of CENNZ would correlate with increase in network utilisation. Investors are incentivised to hold their CENNZ, and stake CENNZ to support network growth and earn block rewards at the same time.

CentraPay (the spending token) is the utility token that is used to pay for transaction fees and as reward to validators. It is a **medium of exchange** token. CentraPay is designed to be stable and predictable, with a goal to power activities on CENNZnet. Users are incentivised to use CentraPay within the network, increasing its velocity and helping with network growth.  

## Staking Token: CENNZ
In January 2018, 1,200,000,000 CENNZ were issued on Ethereum as ERC20 tokens through Centrality's token generating event. This number is finite and there will be no more CENNZ issued. Prior to the CENNZnet mainnet launch, a mechanism will be provided to transfer CENNZ in ERC20 token into CENNZnet. More details will be provided soon. 

### Denominations
| Unit          | CENNZ Value       | UN CENNZ Value            |     
| ------------- | ----------------- | ------------------------- |
| UN            | 1x10^-18 CENNZ    | 1                         |
| KiloUN        | 1x10^-15 CENNZ    | 1,000                     |
| MegaUN 	    | 1x10^-12 CENNZ    | 1,000,000                 |
| GigaUN        | 1x10^-9 CENNZ     | 1,000,000,000             |
| microCENNZ    | 1x10^-6 CENNZ     | 1,000,000,000,000         |
| milliCENNZ    | 1x10^-3 CENNZ     | 1,000,000,000,000,000     |
| CENNZ         | 1 CENNZ           | 1,000,000,000,000,000,000 |

## Spending Token: CentraPay (CPAY in short)
Validators will stake CENNZ to participate in CENNZNet consensus, and earn rewards in CentraPay token. CentraPay is also the utility/spending token for paying transaction fees on CENNZNet. The value of CENNZ is expeced to increase as network usage increases, while CentraPay is designed as medium of exchange and its value would be relatively stable with slight inflation and predicatable to support network growth. The CentraPay token is minted during each reward cycle and distributed to validators who have participated in the cycle. Issuance of CentraPay is not capped. It is designed to be stablised against in-chain purchasing power (measured in standard sized transaction) and off-chain purchaing power (measured in units of computing). New CentraPay tokens are minted based on a mint multiplier times the number of tokens burnt. This mint multiplier is dynamically adjusted for network activity while taking into account of number of validators in order to keep the value of CentraPay stable with slight inflation, while providing enough incentive for validators. 

This model is subject to community feedback and change proposal. 

Refer to the [Issuance of Spend Economics Paper](https://github.com/cennznet/economy) for more details.

#### Denominations
| Unit          | CPAY Value        | UN CPAY Value             |     
| ------------- |-------------------| ------------------------- |
| UN            | 1x10^-18 CPAY     | 1                         |
| KiloUN        | 1x10^-15 CPAY     | 1,000                     |
| MegaUN 	    | 1x10^-12 CPAY     | 1,000,000                 |
| GigaUN        | 1x10^-9 CPAY      | 1,000,000,000             |
| microCPAY     | 1x10^-6 CPAY      | 1,000,000,000,000         |
| milliCPAY     | 1x10^-3 CPAY      | 1,000,000,000,000,000     |
| CPAY          | 1 CPAY            | 1,000,000,000,000,000,000 |

## Reserve Tokens
Applications like Sylo and SingleSource have special permissions and token economy in our ecosystem, and is implemented at the core protocol runtime layer. Going forward our community would be able to choose and promote an application into this special domain. These applications may have their own tokens (as reserve token) to realise special previliages.

## User Tokens
Users can create their own token in ERC20 fashion. More details will be provided in this area later. 

Refer to [Generic Asset in the Protocols page](../overview/protocols.md) for implementation details of various tokens on CENNZNet. 