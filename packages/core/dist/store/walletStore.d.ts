import type { MetaMaskInpageProvider } from "@metamask/providers";
import type WalletConnectProvider from "@walletconnect/web3-provider";
export declare type WalletState = {
    currentWallet: "MetaMask";
    account: string;
    provider: MetaMaskInpageProvider;
} | {
    currentWallet: "WalletConnect";
    account: string;
    provider: WalletConnectProvider;
} | {
    currentWallet: undefined;
    account: undefined;
    provider: undefined;
};
declare type WalletHelper = {
    isLoading: boolean;
    initializeStore: () => void;
    walletConnectProvider: WalletConnectProvider | undefined;
    setWalletConnectProvider: (state: WalletHelper['walletConnectProvider']) => void;
    setLoading: (state: boolean) => void;
    setWalletState: (state: Partial<WalletState>) => void;
};
export declare const useWalletStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<WalletState & WalletHelper>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<WalletState & WalletHelper, {
            [k: string]: string | boolean | MetaMaskInpageProvider | WalletConnectProvider | (() => void) | ((state: WalletHelper['walletConnectProvider']) => void) | ((state: boolean) => void) | ((state: Partial<WalletState>) => void) | undefined;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: WalletState & WalletHelper) => void) => () => void;
        onFinishHydration: (fn: (state: WalletState & WalletHelper) => void) => () => void;
    };
}>;
export {};
