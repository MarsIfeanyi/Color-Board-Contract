import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./constants/ColorBoardContract";

type Props = {};

const GetBoardColors = (props: Props) => {
  const CONTRACT_ADDRESS = "0xC1BA6C7bDa02477c8E42F0aCb037b78b60302103";

  const [x_Value, setX_Value] = useState<string>("");
  const [y_Value, setY_Value] = useState<string>("");

  //Mint Function
  const {
    data: getColorData,
    isLoading: isGetColor,
    isSuccess: isGettingColor,
    error: getColorError,
  } = useContractRead({
    address: "0xC1BA6C7bDa02477c8E42F0aCb037b78b60302103" as `0x ${string}`,
    abi: CONTRACT_ABI,
    functionName: "getBoardColor",
    args: [x_Value, y_Value],
  });

  useEffect(() => {
    console.log("getColorData:", getColorData);
    console.log(" isGetColor:", isGetColor);
    console.log("isGettingColor", isGettingColor);
    console.log("getColorError:", getColorError);
    console.log("___________");
  }, [getColorData, isGetColor, isGettingColor]);

  const getBoardColorTx = async (e: any) => {
    e.preventDefault();

    try {
      //getColor();
    } catch (error) {
      console.error("Error calling setBoardColor:", error);
    }
  };

  return (
    <div>
      <section className="flex flex-col space-y-6 md:space-x-4 mx-auto items-center justify-center -mt-6">
        {/* Individual Container */}
        <div className="space-y-2 flex flex-col">
          <section className="flex flex-row">
            <label htmlFor="recipient" className="text-[#7F56D9] mr-2">
              X-Values
            </label>
            <input
              type="text"
              value={x_Value}
              placeholder="Enter X-Values"
              required
              onChange={(e) => setX_Value(e.target.value)}
              className="outline-none text-sm w-40   rounded-lg p-2 border border-[#7F56D9]"
            />
          </section>

          <p>{x_Value}</p>

          <div className="flex flex-row">
            <label htmlFor="recipient" className="text-[#7F56D9] mr-2">
              Y-Values
            </label>
            <input
              type="text"
              value={y_Value}
              placeholder="Enter Y-Values"
              required
              onChange={(e) => setY_Value(e.target.value)}
              className=" outline-none text-sm w-40  rounded-lg p-2 border border-[#7F56D9]  "
            />
          </div>

          <span className=" ml-24">
            <button
              onClick={() => getBoardColorTx}
              type="submit"
              className="bg-[#7F56D9] rounded-xl py-2 px-4 text-white ml-2"
            >
              Get Color
            </button>
          </span>
        </div>
      </section>

      {isGetColor && <p className="mt-4">Getting Color</p>}
      {isGettingColor && (
        <button className="mt-4 text-[#7F56D9]">
          Transaction: {getColorData && parseInt(getColorData?.toString())}
        </button>
      )}
    </div>
  );
};

export default GetBoardColors;
