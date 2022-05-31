import type WalletConnectProvider from "@walletconnect/web3-provider";

export const connectToWalletConnect = async (
  provider: WalletConnectProvider,
) => {
  if (typeof window !== "undefined") {
    try {
      await provider.enable();
    } catch (error) {
      console.error(error);
    }
  }
};
