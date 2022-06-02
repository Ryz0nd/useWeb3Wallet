import { useWalletStore } from "../store";
import { isWalletConnectProvider } from "../utils";

export const connectToWalletConnect = async () => {
  if (typeof window !== "undefined") {    
    const provider = useWalletStore.getState().walletConnectProvider;
    const initializeStore = useWalletStore.getState().initializeStore;
    
    if (isWalletConnectProvider(provider, "WalletConnect")) {
      try {
        await provider.enable();
        useWalletStore.setState({
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
