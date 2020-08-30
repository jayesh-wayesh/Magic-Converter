/**
 *    FOR LOCAL DEPLOYMENT YOU NEED TO FIRST CREATE AN ACCOUNT USING SERVICE ADDRESS TO DEPLOY CONTRACT
 */

import React from "react"
import * as fcl from "@onflow/fcl"
import { createAccount } from "../utils/create-account"
import { deployContract } from "../utils/deploy-code"
import { generateCode } from "../utils/utility.js"
import CreatureCode from "../contracts/Creature.cdc"



fcl
   .config()
   .put("SERVICE_ADDRESS",'f8d6e0586b0a20c7')
   .put("PRIVATE_KEY", process.env.REACT_APP_PRIVATE_KEY)



const deployCreatureContract = async (props) => {

    // Create an account using SERVICE_ADDRESS
    const account = await createAccount()
    console.log("account : ", { account })

    // Deploy contract using this address
    const code = await generateCode(CreatureCode)
    const deployTx = await deployContract(account, code)
    console.log("deploy : ",{ deployTx })



    /**
      *
      * save this address to localStorage and update const CREATURE_CONTRACT_ADDRESS in
      *       ./Mint.js
      *       ./Display.js
      *       ../utils/utility.js
      *
    **/

    localStorage.setItem("CREATURE_CONTRACT_ADDRESS",account)
}




// Add this component in App.js and hit 'Deploy Contract' button
export default function DeployContract(){

  const deployContract = async () => {

    const res = await deployCreatureContract()
    console.log("Creature Contract deployed on flow")
  }



  return (
    <div>
      <button style={{bottom:0, leftMargin:400}} onClick={deployContract}>Deploy Contract</button>
    </div>
  )
}
