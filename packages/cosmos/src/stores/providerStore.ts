import { Keplr } from "@keplr-wallet/types";
import create from "zustand";
import { persist } from "zustand/middleware";
import { CosmosWallet } from "../constants";

export type ProviderState =
  | {
      currentWallet: typeof CosmosWallet.Keplr;
      provider: Keplr;
    }
  | {
      currentWallet: undefined;
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
      provider: undefined,
      initializeStore: () =>
        set({
          currentWallet: undefined,
          provider: undefined,
        }),
      setLoading: (state) => set({ isLoading: state }),
      setWalletState: (state) => set({ ...state }),
    }),
    {
      name: "cosmos_wallet",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ["currentWallet"].includes(key)
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
