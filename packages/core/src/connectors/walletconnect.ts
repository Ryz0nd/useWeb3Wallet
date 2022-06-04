import { useWalletConnectStore, useProviderStore } from "../store";
import { isWalletConnectProvider } from "../utils";

export const connectToWalletConnect = async () => {
  if (typeof window !== "undefined") {
    const provider = useWalletConnectStore.getState().walletConnectProvider;
    const initializeStore = useProviderStore.getState().initializeStore;

    if (isWalletConnectProvider(provider, "WalletConnect")) {
      try {
        await provider.enable();
        useProviderStore.setState({
          currentWallet: "WalletConnect",
          account: provider.accounts[0],
          provider,
        });
      } catch (error) {
        initializeStore();
        console.error(error);
      }
    } else {
      initializeStore();
    }
  }
};
