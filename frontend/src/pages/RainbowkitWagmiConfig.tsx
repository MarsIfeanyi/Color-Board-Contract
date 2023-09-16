import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

interface RainbowKitWagmiConfigsProps {
  children: React.ReactNode;
}

const alchemyApiKey = "Jqcdf8NmvPlt46xDNVTfHD7LTeirxXZ9" as string;

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({
      apiKey: alchemyApiKey,
    }),
    jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/gnosis" }) }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Color Board",
  projectId: "01",
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
        chains={chains}
        theme={darkTheme({
          accentColor: "#7F56D9", // color of wallet
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
