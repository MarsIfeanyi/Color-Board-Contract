import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Color Board</title>
      </Head>

      <main>
        <div className="flex  justify-between  mx-14 font-bold mt-10 text-blue-600">
          <h1>ColorBoard</h1>

          <ConnectButton />
        </div>
      </main>
    </>
  );
}
