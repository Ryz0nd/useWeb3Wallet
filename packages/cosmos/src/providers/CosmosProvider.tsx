import { ReactNode, useEffect } from "react";
import { connectTo } from "../connectors";
import { CosmosWallet } from "../constants";
import { useProviderStore } from "../stores";

export type WalletOptions = {
  [CosmosWallet.Keplr]: {
    autoinit?: boolean;
    supportedChainIds?: string[];
  }
};

type CosmosProviderProps = {
  walletOptions?: WalletOptions;
  children: ReactNode;
};

export const CosmosProvider = ({
  walletOptions,
  children,
}: CosmosProviderProps) => {
  const currentWallet = useProviderStore((state) => state.currentWallet);
  const isLoading = useProviderStore((state) => state.isLoading);
  const setLoading = useProviderStore((state) => state.setLoading);

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

  useEffect(() => {
    if (currentWallet === CosmosWallet.Keplr) {
      const refetchStore = () => {};
      window.addEventListener("keplr_keystorechange", refetchStore);

      return () => {
        window.removeEventListener("keplr_keystorechange", refetchStore);
      };
    }
  }, [currentWallet]);

  return <>{children}</>;
};
