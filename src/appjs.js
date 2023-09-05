// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { ethers } from "ethers";
// import ABI from './ABI'
// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon, bscTestnet } from 'wagmi/chains'
// import { Web3Button } from '@web3modal/react'




// function App() {

//   const[balance, setBalance] = useState('');
//   const[username, setuserName] = useState('');
//   const[userNameValue, setUserNameValue] = useState("")



  


//   // const rpcUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545/'
//   // const rpcUrl = 'https://blue-sly-asphalt.bsc-testnet.discover.quiknode.pro/3e6a1315af4a14d0b57dab81e0a3cf16b6aa8bed/';



// // const provider = new ethers.providers.Web3Provider(rpc);
// const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();


//   // You can also use an ENS name for the contract address
//   const contractAddress = "0xb992bBE199cF01C595C0986431Cb66e81A000D84";
//   const contractAbi = ABI;

//   // The Contract object
//   const contract = new ethers.Contract(contractAddress, contractAbi, signer);

//   const chains = [arbitrum, mainnet, polygon, bscTestnet]
// const projectId = 'ca559485a535273ba70c435146722200'

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)


// useEffect(()=>{

// const getBalance = async () => {
//   const balance = await provider.getBalance(contractAddress);
//   const formatedBalance = ethers.utils.formatEther(balance);
//   setBalance(formatedBalance);  
// }

// const getUserName = async () => {
//   const ownerName = await contract.getUsersName();
//   setuserName(ownerName);
// }


// getUserName()
//   .catch(console.error)

// getBalance()
//   .catch(console.error);
// })


//  const handleConnect = async () => {

//   if(window.ethereum){

//     try{
//       await window.ethereum.request({method: 'eth_requestAccounts'});
//     } catch (error) {
//       console.error('Error connecting to Metamask Wallet', error)
//     }
//   }else{
//     console.error('Metamask Wallet or wallet extension not detected');
//   }
 

  
//  }


//  const handleChange = (e) => {
//   setUserNameValue(e.target.value)

//  }

//  const handleUserSubmit =  async (e) => {
//   e.preventDefault();
//   const userName = await contract.setOwnerName(userNameValue);
//    await userName.wait();
//    setUserNameValue(userNameValue)
//  }







// //  const handleConnect = async () => {
// //   if (window.ethereum) {
// //     try {
// //       // Request access to the user's MetaMask accounts
// //       await window.ethereum.request({ method: 'eth_requestAccounts' });
// //       // After enabling, you can use the MetaMask provider
// //       const provider = new ethers.providers.Web3Provider(window.ethereum, 'any'); // Use the 'any' network as it's a custom network.
// //       const signer = provider.getSigner();
// //       // Continue with your contract interactions using the MetaMask provider
// //     } catch (error) {
// //       console.error('Error connecting MetaMask wallet:', error);
// //     }
// //   } else {
// //     console.error('MetaMask wallet not detected. Please install and connect MetaMask.');
// //   }
// // };




//   return (
//     <div className="App">
//       <WagmiConfig config={wagmiConfig}>
//       <h1 className='text-center'>Simple Ethereum Wallet</h1>
//       <button className='connect-button' onClick={handleConnect}>Connect Wallet</button>
//       <div className='wallet-container'>
//       <div className=' row  main '>
//         <div className=' col wallet-details'>
//         <Web3Button />
//             <p>Balance:  {balance}</p>
//             <p>Wallet Owner: {username} </p>
            

//         </div>

//         <div className=' col wallet-details'>
         


//           <form onSubmit={handleUserSubmit} >
//           <input className='text-center' placeholder="Change name" onChange={handleChange} value={userNameValue} />
         
//               <button className='btn btn-dark '>Update User name</button>
//           </form>

            

            
//         </div>

//       </div>

//       </div>
//       </WagmiConfig>
//       <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      
      

//     </div>
//   );
// }

// export default App;
