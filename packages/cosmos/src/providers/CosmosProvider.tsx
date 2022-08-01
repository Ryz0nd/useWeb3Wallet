import { useCallback, useEffect, type ReactNode } from "react";
import { connectTo } from "../connectors";
import { CosmosWallet } from "../constants";
import { useProviderStore } from "../stores";
import type { AccountData, OfflineSigner } from "@cosmjs/proto-signing";

export type CosmosWalletOptions = {
  [CosmosWallet.Keplr]?: {
    supportedChainIds?: string[];
  };
};

type CosmosProviderProps = {
  walletOptions?: CosmosWalletOptions;
  children: ReactNode;
};

export const CosmosProvider = ({
  walletOptions,
  children,
}: CosmosProviderProps) => {
  const provider = useProviderStore((state) => state.provider);
  const currentWallet = useProviderStore((state) => state.currentWallet);
  const isLoading = useProviderStore((state) => state.isLoading);
  const setLoading = useProviderStore((state) => state.setLoading);
  const setWalletState = useProviderStore((state) => state.setWalletState);

  useEffect(() => {
    setWalletState({ walletOptions });
  }, [walletOptions]);

  useEffect(() => {
    const isDisconnected = currentWallet === undefined;
    if (isDisconnected) {
      setLoading(false);
      return;
    }
  }, [currentWallet]);

  useEffect(() => {
    (async function isVisitAgain() {
      if (currentWallet !== undefined && isLoading) {
        await connectTo(currentWallet);
        setLoading(false);
      }
    })();
  }, [currentWallet, isLoading]);

  const getChainInfos = useCallback(async () => {
    const supportedChainIds =
      walletOptions?.[CosmosWallet.Keplr]?.supportedChainIds ?? [];
    if (supportedChainIds.length > 0 && provider) {
      const allChainInfos: Promise<
        Record<string, { signer: OfflineSigner; accounts: AccountData[] }>
      > = supportedChainIds.reduce(async (acc, cur) => {
        const otherChainInfo = await acc;
        const signer = provider.getOfflineSigner(cur);
        const accounts = await signer.getAccounts();
        const chainInfo = { [cur]: { signer, accounts } };
        return { ...otherChainInfo, ...chainInfo };
      }, Promise.resolve({}));

      const chainInfos = await allChainInfos;
      setWalletState({ chainInfos });
    }
  }, [walletOptions?.[CosmosWallet.Keplr]?.supportedChainIds, provider]);

  useEffect(() => {
    getChainInfos();
  }, [getChainInfos]);

  useEffect(() => {
    if (currentWallet === CosmosWallet.Keplr) {
      const refetchStore = () => {
        getChainInfos();
      };
      window.addEventListener("keplr_keystorechange", refetchStore);

      return () => {
        window.removeEventListener("keplr_keystorechange", refetchStore);
      };
    }
  }, [currentWallet, getChainInfos]);

  return <>{children}</>;
};
