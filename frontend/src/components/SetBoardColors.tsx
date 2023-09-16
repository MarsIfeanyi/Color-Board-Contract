import React, { useEffect, useState } from "react";
import { useContractWrite, UseContractWriteConfig } from "wagmi";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./constants/ColorBoardContract";

type Props = {};

const SetBoardColors = (props: Props) => {
  const CONTRACT_ADDRESS = "0xC1BA6C7bDa02477c8E42F0aCb037b78b60302103";

  //Mint Function
  const {
    data: setBoardColorsData,
    write: setBoardColor,
    isLoading: isSetBoardColor,
    isSuccess: isSettedBoardColor,
    error: setBoardColorError,
  } = useContractWrite({
    address: "0xC1BA6C7bDa02477c8E42F0aCb037b78b60302103" as `0x ${string}`,
    abi: CONTRACT_ABI,
    functionName: "setBoardColors",
  });

  useEffect(() => {
    console.log("setBoardColorsData:", setBoardColorsData);
    console.log(" isSetBoardColor:", isSetBoardColor);
    console.log("isSettedBoardColor", isSettedBoardColor);
    console.log("setBoardColorError:", setBoardColorError);
    console.log("___________");
  }, [setBoardColorsData, isSetBoardColor, isSettedBoardColor]);

  const setBoardColorTx = async (e: any) => {
    e.preventDefault();

    try {
      setBoardColor();
    } catch (error) {
      console.error("Error calling setBoardColor:", error);
    }
  };

  return (
    <div>
      <span onClick={(e) => setBoardColorTx(e)}>Set Colors</span>
    </div>
  );
};

export default SetBoardColors;
