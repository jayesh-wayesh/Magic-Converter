
# Magic-Converter

Eth<->Flow Bridge that converts your etherum NFT to Flow.

Please check out live demo here.
But you'll need a Creature NFT first to convert it to flow. Reach out to me on discord and I'll send you a cute NFT of your choice to convert it to Flow ;)

**Ethereum** contracts are currently deployed on rinkeby
* NFTescrow.sol  :link:[repo](src/ethereum/rinkeby/contracts/Creature.sol)  :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x556B0560205E62c3F690d86C775138d1f9911FA3#tokentxnsErc721)
* Creature.sol   :link:[repo](src/ethereum/rinkeby/contracts/NFTescrow.sol)  :link:[view on etherscan](https://rinkeby.etherscan.io/address/0x6e725769394A8821fCadD267a2DEf2e69acF666f)

**Flow** contract is deployed on flow devnet
* Creature.cdc  :link:[repo](src/flow/contracts/Creature.cdc)  :link:[view on devnet](https://view-source.surge.sh/testnet/account/0xb701d39c688efd5b)



## For testnet deployment

### Prerequisites

- Generate keys using
  flow keys generate

- Get your account approved & deploy [Creature contract](src/flow/contracts/Creature.cdc) on flow devnet
  ```
  Reach out to flow team and they'll approve your account and deploy your contract on your behalf and provide you with contract address
  ```

- Update the following code
  ```
  const CREATURE_CONTRACT_ADDRESS = ** DEPLOYED_CONTRACT_ADDRESS **
  ```
  in each of these files

  * flow/components/Mint.js
  * flow/components/Display.js
  * flow/utils/utility.js

  NOTE: You can view your deployed contract on devnet using here - `https://view-source.surge.sh/testnet/account/DEPLOYED_CONTRACT_ADDRESS`
  similar to [Magic converter](https://view-source.surge.sh/testnet/account/0xb701d39c688efd5b)

### Steps to start

* Open terminal and provide env variable
  ```
  export REACT_APP_PRIVATE_KEY = "**PRIVATE KEY OF APPROVED ACCOUNT**"
  ```

* Downlaod modules and start frontend
  ```
  yarn && yarn start`
  ```
  view on http://localhost:3000/



## For local deployment

### Prerequisites

#### Install following
* [Flow CLI](https://docs.onflow.org/docs/cli)
* [VS Code extension](https://docs.onflow.org/docs/visual-studio-code-extension)

#### Update some code  

Don't worry code is already there, you just need to comment in.

- Go to /App.js and add

  ```
  import { DeployContract } from './ethereum/components'
  ```

  ```
  <DeployContract/>
  ```

  A button saying 'Deploy Contract' will appear on your screen. You'll need to press this button before starting this process.
  Deploy Contract button basically creates an account using service account and deploys the 'Creature.cdc' contract on local emulator for you and later saves that address to localstorage for minting any NFT to user.  

- Go to /components/Config.js
  ```
  fcl.config()
         .put("challenge.handshake", "http://localhost:8701/flow/authenticate")
         .put("accessNode.api","http://localhost:8080")
  ```


- Go to /components/index.js
  ```
  export {default as DeployContract} from './DeployContract.js'
  ```

- Add this line
  ```
  const CREATURE_CONTRACT_ADDRESS = localStorage.getItem("CREATURE_CONTRACT_ADDRESS")
  ```
  in each of these files

  * flow/components/Mint.js
  * flow/components/Display.js
  * flow/utils/utility.js


To test this conversion locally using flow emulator just follow the instructions

### Steps to start

* Open terminal and provide env variable
  ```
  export REACT_APP_PRIVATE_KEY=" **PRIVATE KEY OF SERVICE ADDRESS ** "`
  ```
  You can also import this key from flow.json.

* Downlaod modules and Start frontend
  ```
  yarn && yarn start
  ```

* New terminal. Start flow emulator
  ```
  yarn run dev:emulator
  ```

* New terminal. Start flow fcl-wallet
  ```
  yarn run dev:wallet
  ```
