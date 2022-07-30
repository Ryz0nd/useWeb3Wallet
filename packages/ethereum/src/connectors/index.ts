import { EthereumWallet } from "../constants";
import type { EthereumWalletType } from "../constants";

import { connectToMetamask } from "./metamask";
import { connectToWalletConnect } from "./walletconnect";

export const connectTo = (wallet: EthereumWalletType) => {
  switch (wallet) {
    case EthereumWallet.MetaMask:
      return connectToMetamask();
    case EthereumWallet.WalletConnect:
      return connectToWalletConnect();
    default:
      return connectToMetamask();
  }
};
