import { ethers } from "hardhat";
import { COLORBOARD_ADDRESS } from "../addresses/address";

async function main() {
  const colorBoardContract = await ethers.getContractAt(
    "IColorBoard",
    COLORBOARD_ADDRESS
  );

  await colorBoardContract.setBoardColors();

  const cellNumber0 = await colorBoardContract.getBoardColor(0, 0);
  const cellNumber1 = await colorBoardContract.getBoardColor(1, 1);
  const cellNumber2 = await colorBoardContract.getBoardColor(2, 2);
  const cellNumber3 = await colorBoardContract.getBoardColor(3, 3);
  const cellNumber4 = await colorBoardContract.getBoardColor(1, 2);
  const cellNumber5 = await colorBoardContract.getBoardColor(3, 4);
  const cellNumber6 = await colorBoardContract.getBoardColor(4, 2);

  console.log({
    cellNumber0: Number(cellNumber0),
    cellNumber1: Number(cellNumber1),
    cellNumber2: Number(cellNumber2),
    cellNumber3: Number(cellNumber3),
    cellNumber4: Number(cellNumber4),
    cellNumber5: Number(cellNumber5),
    cellNumber6: Number(cellNumber6),
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
