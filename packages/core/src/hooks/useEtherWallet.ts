import { connectToMetamask, connectToWalletConnect } from "../connectors";
import type { IWalletConnectProviderOptions } from "@walletconnect/types";

export type SupportedWallet =
  | { name: "MetaMask" }
  | { name: "WalletConnect"; options: IWalletConnectProviderOptions };

const connectTo = (wallet: SupportedWallet) => {
  switch (wallet.name) {
    case "MetaMask":
      return connectToMetamask();
    case "WalletConnect":
      return connectToWalletConnect(wallet.options);
    default:
      return connectToMetamask();
  }
};

export const useEtherWallet = () => {
  return { connectTo };
};
