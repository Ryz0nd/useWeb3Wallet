import type { MetaMaskInpageProvider } from "@metamask/providers";
import type WalletConnectProvider from "@walletconnect/web3-provider";
import create from "zustand";
import { persist } from "zustand/middleware";
import { EthereumWallet } from "../constants";

export type ProviderState =
  | {
      currentWallet: typeof EthereumWallet.MetaMask;
      account: string;
      provider: MetaMaskInpageProvider;
    }
  | {
      currentWallet: typeof EthereumWallet.WalletConnect;
      account: string;
      provider: WalletConnectProvider;
    }
  | {
      currentWallet: undefined;
      account: undefined;
      provider: undefined;
    };

type ProviderHelper = {
  isLoading: boolean;
  initializeStore: () => void;
  setLoading: (state: boolean) => void;
  setWalletState: (state: Partial<ProviderState>) => void;
};

export const useProviderStore = create<ProviderState & ProviderHelper>()(
  persist(
    (set) => ({
      isLoading: true,
      currentWallet: undefined,
      account: undefined,
      provider: undefined,
      initializeStore: () =>
        set({
          currentWallet: undefined,
          account: undefined,
          provider: undefined,
        }),
      setLoading: (state) => set({ isLoading: state }),
      setWalletState: (state) => set({ ...state }),
    }),
    {
      name: "ether_wallet",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ["currentWallet", "account"].includes(key)
          )
        ),
      getStorage: () => ({
        setItem: (...args) => window.localStorage.setItem(...args),
        removeItem: (...args) => window.localStorage.removeItem(...args),
        getItem: async (...args) =>
          new Promise((resolve) => {
            if (typeof window === "undefined") {
              resolve(null);
            } else {
              setTimeout(() => {
                resolve(window.localStorage.getItem(...args));
              }, 0);
            }
          }),
      }),
    }
  )
);
