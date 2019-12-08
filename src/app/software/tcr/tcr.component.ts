import { Component, Injectable, InjectionToken, OnInit, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contract } from 'ethers';
import { HttpClient } from '@angular/common/http';
import Big from 'big.js';
import { ethers, utils } from 'ethers';
import * as Web3 from 'web3';
// import { Promise } from 'q';
import { Subject } from 'rxjs';

declare let Web3: any;
declare let web3;
declare let require: any;
declare let window: any;

@Component({
  selector: 'app-tcr',
  templateUrl: './tcr.component.html',
  styleUrls: ['./tcr.component.scss']
})
export class TcrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  transfer = async () => {
    console.log("Transfering!");
    let amount: number;
    amount = 1;
    let provider = ethers.getDefaultProvider('rinkeby');
    const privateKey = "7DCD03EF7449D63A472DEECFDFE916942E43092329E190407C6C07F3D87A8703";
    let wallet = new ethers.Wallet(privateKey, provider);
        //Your wallet
        let walletWithProvider = new ethers.Wallet(privateKey, provider);
  
        //Contract
        const mintContract = "0x4ba4a0fbfcb3aae77d5c1c5e58c91e28dfee2b30";

          //Interface
    let abi = [
      'function transfer(address _to, uint256 _value) public returns (bool success)'
    ]

        // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(mintContract, abi, provider);
    console.log("Contract:" + contract);

        // Create a new instance of the Contract with a Signer, which allows
    // update methods
    // let contractWithSigner = contract.connect(walletWithProvider);
    // ... OR ...
    let contractWithSigner = new Contract(mintContract, abi, wallet)
    console.log("Contract w Signer:" + contractWithSigner);

    let account = "0xdbed4b80ccd377dd536fd4d4c86de9a8dbbc7bb9";

    let overrides = {
      gasLimit: 750000
    }
        // Set a new Value, which returns the transaction
        let tx = await contractWithSigner.transfer(account, amount, overrides);
        console.log(tx.hash);
      
        // The operation is NOT complete yet; we must wait until it is mined
        await tx.wait();
      
        // Call the Contract's balanceOf() method again
        // let newBalance = contractWithSigner.totalSupply();
      
        // console.log(newBalance);
        // Contract Amoung

  }

}
