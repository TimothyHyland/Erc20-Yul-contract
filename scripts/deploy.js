
const hre = require("hardhat");

async function main() {
	var abi = require("../build/erc20yul.abi.json");
	var bytecode = require("../build/erc20yul.bytecode.json");

	const  erc20yulContract = await hre.ethers.getContractFactory(abi, bytecode);

	const erc20yulInstance = await allyulContract.deploy();
	await  erc20yulInstance.waitForDeployment();

	console.log(`Erc20 Contract was deployed to ${allyulInstance.target}`);
}

main();