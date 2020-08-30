import React, {useState} from 'react'
import './App.css'
import { useContractLoader } from './ethereum/hooks'
import { Account, ProgressBar, NFTCollection, ConverterFrame, Escrow, Header, SideBarsTopBar } from './ethereum/components'
import { Config, FlowAccount, Mint, Display} from './flow/components'


export default function App() {


  const [injectedProvider, setInjectedProvider] = useState()
  const writeContracts = useContractLoader(injectedProvider)
  const [ethAddress, setEthAddress] = useState()
  const [nftSelected, setNftSelected] = useState(false)
  const [selectedNftId, setSelectedNftId] = useState()
  const [sentToEscrow, setSentToEscrow] = useState(false)
  const [flowAddress, setFlowAddress] = useState()
  const [flowReceiver, setFlowReceiver] = useState(false)
  const [minting, setMinting] = useState(false)
  const [minted, setMinted] = useState(false)
  const [flowId, setFlowId] = useState()



  return (
      <div>
        <Header/>
        <ConverterFrame
          ethAddress={ethAddress}
          nftSelected={nftSelected}
          selectedNftId={selectedNftId}
          sentToEscrow={sentToEscrow}
          flowAddress={flowAddress}
          flowId={flowId}
        />
        <ProgressBar
          ethAddress={ethAddress}
          sentToEscrow={sentToEscrow}
          flowAddress={flowAddress}
          flowId={flowId}
          nftSelected={nftSelected}
        />
        <Escrow
          address={ethAddress}
          nftSelected={nftSelected}
          writeContracts={writeContracts}
          selectedNftId={selectedNftId}
          setSentToEscrow={setSentToEscrow}
          sentToEscrow={sentToEscrow}
        />
        <FlowAccount
          flowAddress={flowAddress}
          setFlowAddress={setFlowAddress}
          sentToEscrow={sentToEscrow}
          flowReceiver={flowReceiver}
          setFlowReceiver={setFlowReceiver}
        />
        <Mint
          flowAddress={flowAddress}
          selectedNftId={selectedNftId}
          minting={minting}
          setMinted={setMinted}
          setMinting={setMinting}
          flowId={flowId}
        />
        <Display
          flowAddress={flowAddress}
          selectedNftId={selectedNftId}
          setFlowId={setFlowId}
          flowId={flowId}
          minted={minted}
        />
        {ethAddress && (!sentToEscrow) &&
         <div>
             <NFTCollection
               address={ethAddress}
               injectedProvider={injectedProvider}
               writeContracts={writeContracts}
               nftSelected={nftSelected}
               setNftSelected={setNftSelected}
               selectedNftId={selectedNftId}
               setSelectedNftId={setSelectedNftId}
             />
          </div>
        }
        <Account
          address={ethAddress}
          setAddress={setEthAddress}
          injectedProvider={injectedProvider}
          setInjectedProvider={setInjectedProvider}
          sentToEscrow={sentToEscrow}
          nftSelected={nftSelected}
        />
      <SideBarsTopBar/>
      </div>
  );
}
