import { connectToMetamask, connectToWalletConnect } from "../connectors";
import WalletConnectProvider from "@walletconnect/web3-provider";

export type SupportedWallet =
  | { name: "MetaMask" }
  | {
      name: "WalletConnect";
      provider: WalletConnectProvider;
    };

const connectTo = (wallet: SupportedWallet) => {
  switch (wallet.name) {
    case "MetaMask":
      return connectToMetamask();
    case "WalletConnect":
      return connectToWalletConnect(wallet.provider);
    default:
      return connectToMetamask();
  }
};

export const useEtherWallet = () => {
  return { connectTo };
};
