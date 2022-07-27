import type WalletConnectProvider from "@walletconnect/web3-provider";
declare type WalletConnect = {
    walletConnectProvider: WalletConnectProvider | undefined;
    setWalletConnectProvider: (state: WalletConnect["walletConnectProvider"]) => void;
};
export declare const useWalletConnectStore: import("zustand").UseBoundStore<import("zustand").StoreApi<WalletConnect>>;
export {};
