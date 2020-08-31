
## Flow devnet deployment 



### Table of Contents

* [Prerequisites]()
* [Update Code]()
* [Installation]()



### Prerequisites

* Generate keys using
  ```
  flow keys generate
  ```

* Get your account approved & deploy [Creature contract](src/flow/contracts/Creature.cdc) on flow devnet.
  
  > Reach out to flow team and they'll approve your account
  

  **NOTE**: You can view your deployed contract on devnet using here - 
  ```
  https://view-source.surge.sh/testnet/account/DEPLOYED_CONTRACT_ADDRESS
  ```
  similar to [Magic converter](https://view-source.surge.sh/testnet/account/0xb701d39c688efd5b)



### Update Code

* Goto `/App.js` 

  Replace `0xb701d39c688efd5b` with your contract address in this code
  ```
    if( !localStorage.getItem('CREATURE_CONTRACT_ADDRESS') ){
       localStorage.setItem('CREATURE_CONTRACT_ADDRESS', '0xb701d39c688efd5b') 
       console.log("Creature contract address on flow devnet saved :)")
    }
  ```


### Installation

* Open terminal and provide env variable
  ```
  export REACT_APP_PRIVATE_KEY = "**PRIVATE KEY OF APPROVED ACCOUNT**"
  ```

* Downlaod modules and start frontend
  ```
  yarn && yarn start`
  ```
  view on http://localhost:3000/

