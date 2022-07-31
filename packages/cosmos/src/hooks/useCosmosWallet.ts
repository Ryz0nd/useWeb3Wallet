import { connectTo } from "../connectors";
import { useProviderStore } from "../stores";

export const useCosmosWallet = () => {
  const currentWallet = useProviderStore((state) => state.currentWallet);
  const provider = useProviderStore((state) => state.provider);
  const isLoading = useProviderStore((state) => state.isLoading);
  const initializeStore = useProviderStore((state) => state.initializeStore);

  const disconnect = () => {
    initializeStore();
  };

  const isWalletConnected =
    provider !== undefined && currentWallet !== undefined;

  return {
    connectTo,
    disconnect,
    isLoading,
    isWalletConnected,
    currentWallet,
    provider,
  };
};
