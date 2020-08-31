## Ethereum Rinkeby deployment 

* Jump straight to [scaffoldeth](http://scaffoldeth.io/) .
* Clone it locally.
* In Magic-Converter's repo jump to `src/etherum/rinkeby` and paste the files in this directory in scaffoldeth's `packages/buidler` such that buidler package looks like this - 
    ```
    buidler
    - ~~contracts~~
    + rinkeby/contracts
    + rinkeby/Files
    + rinkeby/openzepelin-solidity
    - scripts
    - tests
    .
    .
    . 
    ```
* Follow the steps given in `scaffoldeth` to deploy it on rinkeby(or locally). 
* After contracts are deployed, replace the `src/ethereum/contracts` in Magic-Converter's repo with scaffoldeth's `packages/react-app/src/contracts` 
* Now you can start moving you Creature NFT's to your escrow :wink:


### Future additions

Adding [buidler](https://buidler.dev/) to deploy ethereum contracts directly from this repo. 
