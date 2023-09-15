import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  polygonMumbai,
  sepolia,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

interface RainbowKitWagmiConfigsProps {
  children: React.ReactNode;
}

const { chains, publicClient } = configureChains(
  [polygonMumbai, sepolia],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_APP_SEPOLIA_API_KEY as string,
    }),
    jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/gnosis" }) }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Color Board",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const RainbowKitWagmiConfigs: React.FC<RainbowKitWagmiConfigsProps> = ({
  children,
}) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={lightTheme({
          accentColor: "#7F56D9", // color of wallet  try #703844
          accentColorForeground: "white", // color of text
          borderRadius: "large", // rounded edges
          fontStack: "system",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowKitWagmiConfigs;
