import { connectTo } from "../connectors";
import { useProviderStore } from "../stores";
import { isWalletConnectProvider } from "../utils";

export const useEtherWallet = () => {
  const currentWallet = useProviderStore((state) => state.currentWallet);
  const account = useProviderStore((state) => state.account);
  const provider = useProviderStore((state) => state.provider);
  const isLoading = useProviderStore((state) => state.isLoading);
  const initializeStore = useProviderStore((state) => state.initializeStore);

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
