import { ethers, network } from "hardhat";
const { verify } = require("../../utils/verify");
import {} from "../addresses/address";

async function main() {
  const colorBoardContract = await ethers.deployContract("ColorBoard");

  console.log("===========Deploying Contract=================");
  await colorBoardContract.waitForDeployment();

  console.log(`ColorBoard Contract Deployed at: ${colorBoardContract.target}
    `);

  if (
    network.config.chainId === 11155111 ||
    (5 && process.env.ETHERSCAN_API_KEY)
  ) {
    console.log("Waiting for block confirmations...");

    //wait for 10 block confirmations before verifying the transaction
    // @ts-ignore
    await colorBoardContract.waitForDeployment(10);
    await verify(colorBoardContract.target, []);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
