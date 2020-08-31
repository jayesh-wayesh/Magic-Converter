
# Magic-Converter

### Table of contents

* Info
* Live demo
* [Ethereum rinkeby deployment]()
* [Flow devnet deployment]()
* [EThereum local deployment]()
* [Flow local deployment]()
* [References]()

**NOTE:** you'll need a Creature NFT first to convert it to flow. Reach out to us on discord `@Jayesh_Wayesh#6931` and we'll send you a cute NFT of your choice to convert it to Flow :wink: .


### Info

Magic Converter is a poc of ETH<->Flow bridge that converts a Creature NFT on rinkeby testnet to be converted to flow testnet. More info -

Contract Used | Repo link                                                 | Published link
--------------------------------------------------------------------------------------------------------------------------------------------
NFTescrow.sol | :link:[repo](src/ethereum/rinkeby/contracts/Creature.sol) |  :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x556B0560205E62c3F690d86C775138d1f9911FA3#tokentxnsErc721)
Creature.sol  | :link:[repo](src/ethereum/rinkeby/contracts/NFTescrow.sol) | :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x6e725769394A8821fCadD267a2DEf2e69acF666f)
Creature.cdc  | :link:[repo](src/flow/contracts/Creature.cdc) | :link:[view on devnet](https://view-source.surge.sh/testnet/account/0xb701d39c688efd5b)


**Ethereum** contracts are currently deployed on rinkeby
* NFTescrow.sol | :link:[repo](src/ethereum/rinkeby/contracts/Creature.sol)  | :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x556B0560205E62c3F690d86C775138d1f9911FA3#tokentxnsErc721)
* Creature.sol  | :link:[repo](src/ethereum/rinkeby/contracts/NFTescrow.sol) | :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x6e725769394A8821fCadD267a2DEf2e69acF666f)

**Flow** contract is deployed on flow devnet
* Creature.cdc  | :link:[repo](src/flow/contracts/Creature.cdc)  | :link:[view on devnet](https://view-source.surge.sh/testnet/account/0xb701d39c688efd5b)


### References

* Creature.sol and NFTescrow.sol are used by Creature NFT example of Opensea
* scaffoldeth was used to deploy ethereum contracts