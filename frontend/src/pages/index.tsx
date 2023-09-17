import dynamic from "next/dynamic";
import GetBoardColors from "@/components/GetBoardColors";
const NoSSRGET = dynamic(() => import("../components/GetBoardColors"), {
  ssr: false,
});
import SetBoardColors from "@/components/SetBoardColors";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Color Board</title>
      </Head>

      <main>
        <div className="  mx-14 font-bold mt-6 ">
          <h1 className="text-[#7F56D9] text-2xl ">ColorBoard</h1>
          <div className="flex justify-end">
            <ConnectButton showBalance />
          </div>

          <div className=" flex flex-col items-center justify-center gap-20">
            <div className="mt-4">
              <SetBoardColors />
            </div>
            <div>
              <NoSSRGET />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
