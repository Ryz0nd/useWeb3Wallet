import { connectToMetamask, connectToWalletConnect } from "../connectors";
import { SupportedWallet } from "../constants";

export type SupportedWallet =
  | typeof SupportedWallet.MetaMask
  | typeof SupportedWallet.WalletConnect;

export const connectTo = (wallet: SupportedWallet) => {
  switch (wallet) {
    case SupportedWallet.MetaMask:
      return connectToMetamask();
    case SupportedWallet.WalletConnect:
      return connectToWalletConnect();
    default:
      return connectToMetamask();
  }
};
