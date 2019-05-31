# Staking
Staking is the process of locking up CENNZ (as the stake) to participate in maintaining the security and integrity of the network, and to gain reward as a result. There is also a risk of being slashed if you are found to be demonstrating malicious behaviour or not fulfilling the promise of a good and honest maintainer. 

There are two ways to participate in securing the network, as a validator or as a norminator. A **validator** runs a node, participates in producing blocks, validating transactions and guaranteeing finality of the chain. A **norminator** does not need to run a node, but stakes towards one or more of the **validators** at their choice. Essentially, **validators** have a pool of staking funds from themselves and from **norminators**. Both **validators** and **norminators** will earn rewards in CentraPay token proportional to their stake. Because **Validators** provide critical services to the network, they have certain privilege regarding payment preferences e.g. they can decide how much reward they would keep before distributed pro rata amongst all stakers in their pool. 

There are three accounts namely **Stash**, **Controller** and **Session** to manage funds in staking. Separate account management allows using cold wallet to manage funds to improve security, and enables switching between **validator**,  **norminator** and idle mode (not staking) easily.

## Stash Account (holds funds for staking)
Stash account is the primary account for holding funds for staking. This could be a cold wallet. Users could specify the amount in the Stash account used for staking, and this amount will be bonded meaning locked up as stake. This amount will then be under control of the associated Controller account for staking operations. Upon being unbonded, user needs to wait for a certain period of time (bonding duration) before the funds can be withdrawn.

## Controller Account
Controller account manages the staked (bonded) funds, and staking status e.g. switching from **validator** to **norminator** or **idle** (not staking). The Controller account will need to have enough balance when sending these transactions. 

## Session Account
The Session account is used for the node running by the **validator**. It is recommended to use a different keypair for Session account than the Controller account so that even if the node is compromised, the funds would not be stolen. The seed of the Session account is passed to the node using the `--key` parameter. No balance is required for this account.

## Reward
Reward is calculated each session, and distributed to validators upon a new era starts. A session is a set number of blocks; and an era is a set number of sessions. These numbers can be changed for performance reasons or other reasons via a gonvernance process. The reward is paid in spending tokens (CentraPay). The amount of CentraPay minted for reward is adjusted based on network activity with the goal to stablise and be reasonable for the cost of running the network. You can read more of the issuance mechanism in this [Issuance of Spend Economics Paper](https://github.com/cennznet/economy).  

**Validator** can choose to keep a certain amount of reward before paying out to its **norminators**. Both **validators** and **norminators** can choose from one of these reward destination: Controller account, Stash account and increase staked amount, and Stash account but not increase staked amount. 

## Slashing / Punishment
If a validator is reported to be offline, its bonded balance in Stash account would be reduced first, and if that runs out the norminator's balances would be reduced. The network allows for a grace period (`offline slash grace`). **Validators** can also set a threshold of the maximum number of times they are slashed before its validator status being removed (`unstake threshold`). Essentially a **validator** can be offline `offline slash grace` + `unstake threshold` number of times, before they are forced to unstake. 

## CENNZNet Validator Pool
For Prenet period, there is maximum number of validators allowed in the CENNZNet network, and there is a minimum number of validators required to ensure network security. If there are more validators intending to join the network than the maximum number allowed, then they will be on a wait list. Validators are re-selected every staking period (e.g. every era) - the top x number of validators based on staking amount would be selected into next round of staking period. In addition, there will be a minimum staking amount required to join the validator pool - it needs to be high enough to add another layer of security to the network, but low enough to promote participation on CENNZnet. Again these parameters can be changed later via governance process. 

