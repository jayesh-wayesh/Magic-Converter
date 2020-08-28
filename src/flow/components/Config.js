import React from "react"
import * as fcl from "@onflow/fcl"

// Testnet Deployment
fcl.config()
        .put("accessNode.api", "https://access-testnet.onflow.org")                                  // connect to Flow testnet
        .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn")                  // use Blocto testnet wall
        .put("PRIVATE_KEY", process.env.PRIVATE_KEY)


// Local Deployment
// fcl.config()
//         .put("challenge.handshake", "http://localhost:8701/flow/authenticate")
//         .put("accessNode.api","http://localhost:8080")




export default function Config(){}
