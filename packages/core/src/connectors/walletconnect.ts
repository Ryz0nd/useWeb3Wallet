import WalletConnectProvider from "@walletconnect/web3-provider";
import type { IWalletConnectProviderOptions } from "@walletconnect/types";

export const connectToWalletConnect = async (
  options: IWalletConnectProviderOptions
) => {
  if (typeof window !== "undefined") {
    const provider = new WalletConnectProvider(options);
    try {
      await provider.enable();
    } catch (error) {
      console.error(error)
    }
  }
};
