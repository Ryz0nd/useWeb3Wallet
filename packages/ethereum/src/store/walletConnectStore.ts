import type WalletConnectProvider from "@walletconnect/web3-provider";
import create from "zustand";

type WalletConnect = {
  walletConnectProvider: WalletConnectProvider | undefined;
  setWalletConnectProvider: (
    state: WalletConnect["walletConnectProvider"]
  ) => void;
};

export const useWalletConnectStore = create<WalletConnect>((set) => ({
  walletConnectProvider: undefined,
  setWalletConnectProvider: (state) => set({ walletConnectProvider: state }),
}));
