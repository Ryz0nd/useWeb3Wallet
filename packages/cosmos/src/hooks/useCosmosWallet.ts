import { connectTo } from "../connectors";
import { useProviderStore } from "../stores";
import { ProviderStore } from "../stores/providerStore";

type UseCosmosWallet = {
  connectTo: typeof connectTo;
  disconnect: () => void;
  isWalletConnected: boolean;
} & Pick<
  ProviderStore,
  "isLoading" | "chainInfos" | "provider" | "currentWallet"
>;
export const useCosmosWallet = (): UseCosmosWallet => {
  const currentWallet = useProviderStore((state) => state.currentWallet);
  const chainInfos = useProviderStore((state) => state.chainInfos);
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
    chainInfos,
  };
};
