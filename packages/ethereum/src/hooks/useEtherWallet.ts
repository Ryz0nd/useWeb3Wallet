import { connectTo } from "../connectors";
import { useProviderStore } from "../stores";
import { ProviderStore } from "../stores/providerStore";
import { isWalletConnectProvider } from "../utils";

type UseEtherWallet = {
  connectTo: typeof connectTo;
  disconnect: () => void;
  chainId: number | undefined;
  isWalletConnected: boolean;
} & Pick<
  ProviderStore,
  "isLoading" | "account" | "provider" | "isLoading" | "currentWallet"
>;

export const useEtherWallet = (): UseEtherWallet => {
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

  const disconnect = () => {
    initializeStore();
    if (isWalletConnectProvider(provider, currentWallet)) {
      provider.disconnect();
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
