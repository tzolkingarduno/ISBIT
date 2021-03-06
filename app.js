// FAUCET: https://faucet.kyber.network/

// Creating new accounts
// I typed the next command in the node console
// Account I
// > web3.eth.accounts.create()
//{ address: '0x564BDb11028AE6BCaC11116911320594b271016A',
//  privateKey: '0x5a28f9f009cc4c37ff360e3b7470a110193c60f5b31274664eb2e355f5e52e07',
//  signTransaction: [Function: signTransaction],
//  sign: [Function: sign],
//  encrypt: [Function: encrypt] }


//-----------------------------------------------------------

// Variables required for contract
const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/b941e563bb6b4b3bb1cfc67d48467ef0'
const web3 = new Web3(rpcURL)

// Variables required for App

var express = require('express');
var app = express();
const PORT = 3000


///-------------------------------------------------------


const account1 = '0x564BDb11028AE6BCaC11116911320594b271016A' 

// Printing the balance to console
//web3.eth.getBalance(account1, (err, wei) => {
//  balance = web3.utils.fromWei(wei, 'ether')
//}).then((balance)=>{console.log(balance);});

// Read the deployed contract - get the addresss from Etherscan
const contractAddress = '0xfe6388c019d1CFd705855bA86d6322166DB787C3'
const contractABI =[ {
    "constant": true,
    "inputs": [],
    "name": "GetHelloWorld",
    "outputs": [
	{
	    "name": "",
	    "type": "string"
	}
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}
		   ]

const contract = new web3.eth.Contract(contractABI, contractAddress)

    
const txObject = {
    to: contractAddress,
    data: contract.methods.GetHelloWorld().encodeABI()
}


var result =web3.eth.estimateGas(txObject).then(function(gas){
    // Home page
    app.get('', function(req, res) {
	res.json({ Gas: gas });
    });
    
  
    app.listen(PORT, function(req,res) {
	console.log('Escuchando en el puerto :'+PORT);
	//console.log(gas)
    });
    
    return gas
})


setTimeout(() => console.log(result), 1000);




