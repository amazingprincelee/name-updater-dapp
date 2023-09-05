import React, { useState, useEffect } from "react";
import './App.css';
import { ethers } from "ethers";
import ABI from "./ABI"








function App() {
  const [nameChange, setNameChange]= useState("")
  const [name, setName] = useState("");
  const [walletBalance, setWalletBalance] = useState(0)
  const [dappName, setDappName] = useState("");
  const [nameList, setNameList] = useState([]);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractAddress = "0xdaBa94659Af7644e2e96b17Ab7F7ADD4595DCB02";

  const contract = new ethers.Contract(contractAddress, ABI, signer);

 
  


  useEffect(()=>{
    const connectWallet = async() => {
      await provider.send("eth_requestAccounts", []);

    }

    const updateDappName = async() => {
       const dappNamer = await contract.getDappName();

       setDappName(dappNamer);
    }

    const accountBalance = async() => {

      const balance = await provider.getBalance("0x246cc531a16103Cd883E1179ae880323D28b31C0");
      const formatedBalance = ethers.utils.formatEther(balance);
      const balanceRounded = parseFloat(formatedBalance).toFixed(2);
      setWalletBalance(balanceRounded)



    }

    const getNameArray =  async() => {

      const names = await contract.getNamesList();

      setNameList(names)

    }


    getNameArray()
    .catch(console.error)


    updateDappName()
    .catch(console.error)

    accountBalance()
    .catch(console.error);

    connectWallet()
    .catch(console.error);

    
  })


 

 

  const handleChange = (e) => {
    setNameChange(e.target.value)
    

  }

  const handleSubmit = async (e) => {
      e.preventDefault();
       await contract.addNames(nameChange);



  }

  


  return (
    <div>
      <h3>{dappName}</h3>
      <div className="container">
        <div className="namelist">
        <h3>{walletBalance} BNB</h3>
          <table>
            
            <thead>
              <tr>
                <th>NAMES</th>
              </tr>
            </thead>
            <tbody>
              {nameList.map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>{name}</p>
        </div>

        <div className="input-form">
          <form onSubmit={handleSubmit}>
          <p>{nameChange}</p>
            <input placeholder="Add name to list" onChange={handleChange}/>
            <button>Submit</button>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
