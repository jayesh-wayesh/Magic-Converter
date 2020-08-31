
### For local deployment 

#### Update Code

- Goto `/App.js` 

  * Add line
```
import { DeployContract } from './flow/components'  
```

  * Comment out this code 
```
  if( !localStorage.getItem('CREATURE_CONTRACT_ADDRESS') ){
    localStorage.setItem('CREATURE_CONTRACT_ADDRESS', '0xb701d39c688efd5b') 
    console.log("Creature contract address on flow devnet saved :)")
  }
```

  * Add component
```
<DeployContract/>
```
This component will display a button on screen which will allow you to deploy Creature contract on flow emulator.

- Go to `/flow/components/Config.js` and add
```
fcl.config()
      .put("challenge.handshake", "http://localhost:8701/flow/authenticate")
      .put("accessNode.api","http://localhost:8080")
```
  and comment out the other code being used for devent deployment

- Go to `/flow/components/index.js`

add line
```
export {default as DeployContract} from './DeployContract.js'
```



#### Start

