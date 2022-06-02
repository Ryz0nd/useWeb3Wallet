import type { MetaMaskInpageProvider } from "@metamask/providers";
import type WalletConnectProvider from "@walletconnect/web3-provider";
import create from "zustand";
import { persist } from "zustand/middleware";

export type WalletState =
  | {
      currentWallet: "MetaMask";
      account: string;
      provider: MetaMaskInpageProvider;
    }
  | {
      currentWallet: "WalletConnect";
      account: string;
      provider: WalletConnectProvider;
    }
  | {
      currentWallet: undefined;
      account: undefined;
      provider: undefined;
    };

type WalletHelper = {
  isLoading: boolean;
  initializeStore: () => void;
  walletConnectProvider: WalletConnectProvider | undefined;
  setWalletConnectProvider: (state: WalletHelper['walletConnectProvider']) => void;
  setLoading: (state: boolean) => void;
  setWalletState: (state: Partial<WalletState>) => void;
};

export const useWalletStore = create<WalletState & WalletHelper>()(
  persist(
    (set) => ({
      isLoading: true,
      currentWallet: undefined,
      account: undefined,
      provider: undefined,
      walletConnectProvider: undefined,
      initializeStore: () =>
        set({
          currentWallet: undefined,
          account: undefined,
          provider: undefined,
        }),
      setWalletConnectProvider: (state) => set({walletConnectProvider: state}),
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
