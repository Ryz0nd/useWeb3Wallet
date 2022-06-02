import { useWalletStore } from "../store";
import { connectTo, isWalletConnectProvider } from "../utils";

export const useEtherWallet = () => {
  const currentWallet = useWalletStore((state) => state.currentWallet);
  const account = useWalletStore((state) => state.account);
  const provider = useWalletStore((state) => state.provider);
  const isLoading = useWalletStore((state) => state.isLoading);
  const initializeStore = useWalletStore((state) => state.initializeStore);

  const chainId = () => {
    if (provider !== undefined && provider.chainId !== null) {
      return parseInt(provider.chainId.toString(), 16);
    }
    return undefined;
  };

  const disconnect = async () => {
    initializeStore();
    if (isWalletConnectProvider(provider, currentWallet)) {
      await provider.disconnect();
    }
  };

  const isWalletConnected =
    provider !== undefined &&
    account !== undefined &&
    currentWallet !== undefined;

  return {
    connectTo,
    disconnect,
    isLoading,
    isWalletConnected,
    currentWallet,
    account,
    provider,
    chainId: chainId(),
  };
};
