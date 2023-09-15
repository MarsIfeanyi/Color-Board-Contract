import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RainbowKitWagmiConfigs from "./RainbowkitWagmiConfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RainbowKitWagmiConfigs>
      <Component {...pageProps} />
    </RainbowKitWagmiConfigs>
  );
}
