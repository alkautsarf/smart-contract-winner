// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
require('dotenv').config();
const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory('ContractEmitter')
  const contract = await Contract.deploy();

  await contract.deployed()

  console.log(
    `Contract deployed to address: ${contract.address}`
  );

  await contract.emitTx(process.env.CA_ADDRESS);
}

// Contract Deployed : https://goerli.etherscan.io/address/0x8dea94d7be4ad6131cd459d0fba54b00b619dda8

// Winner TX : https://goerli.etherscan.io/tx/0x0f438533063d92fcfcaac61575a1a8369c66c9336e7881e8ab7608724c074310

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
