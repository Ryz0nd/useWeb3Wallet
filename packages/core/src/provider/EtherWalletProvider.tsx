import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect } from "react";
import { SupportedWallet } from "../constants";
import { useWalletStore } from "../store";
import { connectTo } from "../utils";

type EtherWalletProviderProps = {
  walletConnectProvider?: WalletConnectProvider;
  children: React.ReactNode;
};

export const EtherWalletProvider = ({
  walletConnectProvider,
  children,
}: EtherWalletProviderProps) => {
  const provider = useWalletStore((state) => state.provider);
  const currentWallet = useWalletStore((state) => state.currentWallet);
  const setWalletState = useWalletStore((state) => state.setWalletState);
  const setLoading = useWalletStore((state) => state.setLoading);
  const setWalletConnectProvider = useWalletStore(
    (state) => state.setWalletConnectProvider
  );

  useEffect(() => {
    setWalletConnectProvider(walletConnectProvider);
  }, [walletConnectProvider]);

  useEffect(() => {
    const isDisconnected = currentWallet === undefined;
    if (isDisconnected) {
      setLoading(false);
      return;
    }
  }, [currentWallet]);

  useEffect(() => {
    (async function isVisitAgain() {
      switch (currentWallet) {
        case SupportedWallet.MetaMask:
          setWalletState({ provider: window.ethereum });
          break;
        case SupportedWallet.WalletConnect:
          setWalletState({ provider: walletConnectProvider });
          break;
        default:
          setLoading(false);
          return;
      }
      await connectTo(currentWallet);
      setLoading(false);
    })();
  }, [currentWallet, walletConnectProvider]);

  useEffect(() => {
    if (provider !== undefined) {
      const handleAccountsChanged = (accounts: unknown) => {
        const account = (accounts as string[])[0];
        setWalletState({ account });
      };
      const handleDisconnect = () => {
        useWalletStore.persist.clearStorage();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        provider.removeListener("disconnect", handleDisconnect);
      };
    }
  }, [provider]);

  return <>{children}</>;
};
