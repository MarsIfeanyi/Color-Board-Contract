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
        <div className="  mx-14 font-bold mt-6 text-blue-600 ">
          <h1>ColorBoard</h1>
          <div className="flex justify-end">
            <ConnectButton showBalance />
          </div>

          <div className=" flex flex-row items-center justify-center gap-20">
            <div>
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
