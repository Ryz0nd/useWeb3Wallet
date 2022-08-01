import create, {
  type Mutate,
  type StoreApi,
  type UseBoundStore,
} from "zustand";
import { persist } from "zustand/middleware";
import type { Keplr } from "@keplr-wallet/types";
import type { AccountData, OfflineSigner } from "@cosmjs/proto-signing";

import { CosmosWallet } from "../constants";
import { CosmosWalletOptions } from "../providers";

type ProviderState = {
  walletOptions: CosmosWalletOptions;
} & (
  | {
      currentWallet: typeof CosmosWallet.Keplr;
      chainInfos: Record<
        string,
        { accounts: AccountData[]; signer: OfflineSigner }
      >;
      provider: Keplr;
    }
  | {
      currentWallet: undefined;
      chainInfos: undefined;
      provider: undefined;
    }
);

type ProviderHelper = {
  isLoading: boolean;
  initializeStore: () => void;
  setLoading: (state: boolean) => void;
  setWalletState: (state: Partial<ProviderState>) => void;
};

export type ProviderStore = ProviderState & ProviderHelper;

export const useProviderStore: UseBoundStore<
  Mutate<StoreApi<ProviderStore>, []>
> = create<ProviderStore>()(
  persist(
    (set) => ({
      isLoading: true,
      currentWallet: undefined,
      walletOptions: {},
      chainInfos: undefined,
      provider: undefined,
      initializeStore: () =>
        set({
          currentWallet: undefined,
          provider: undefined,
          chainInfos: undefined,
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
