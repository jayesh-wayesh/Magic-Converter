
# Getting Started

Magic Converter is an ETh->Flow Converter in which a user sends us an eth NFT and we mint an equivalent NFT on flow for him. Behind the scenes, the ethereum NFT will be first transferred to our ethereum escrow and then a new NFT with same properties will be minted on Flow. Both the Flow token ID and ethereum token ID will be saved on flow blockchain.

For a working POC, our escrow contract is currently deployed on rinkeby to hold NFT's and Creature contract is deployed on Flow devnet to mint new equivalent NFT's. The NFT used was also minted on rinkeby using Creature NFT contract.

### Quick Links

> Ethereum Escrow | NFTescrow.sol | :link:[repo](src/ethereum/rinkeby/contracts/Creature.sol) | :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x556B0560205E62c3F690d86C775138d1f9911FA3#tokentxnsErc721)
> Ethereum NFT | Creature.sol |  :link:[repo](src/ethereum/rinkeby/contracts/NFTescrow.sol) | :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x6e725769394A8821fCadD267a2DEf2e69acF666f)
> Flow NFT | Creature.cdc  | :link:[repo](src/flow/contracts/Creature.cdc)  | :link:[view on devnet](https://view-source.surge.sh/testnet/account/0xb701d39c688efd5b)


### Start Converting etherum NFT's right away  

* [using Flow devnet](/flow-devnet-deployment.md)
* [using Flow emulator](/flow-local-deployment.md)



### In case you want to deploy a custom Escrow

* [on rinkeby](/ethereum-rinkeby-deployment.md)
* [on local node](/ethereum-local-deployment.md)
