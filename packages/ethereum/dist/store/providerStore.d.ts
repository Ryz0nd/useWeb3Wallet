import type { MetaMaskInpageProvider } from "@metamask/providers";
import type WalletConnectProvider from "@walletconnect/web3-provider";
export declare type ProviderState = {
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
declare type ProviderHelper = {
    isLoading: boolean;
    initializeStore: () => void;
    setLoading: (state: boolean) => void;
    setWalletState: (state: Partial<ProviderState>) => void;
};
export declare const useProviderStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ProviderState & ProviderHelper>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<ProviderState & ProviderHelper, {
            [k: string]: any;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ProviderState & ProviderHelper) => void) => () => void;
        onFinishHydration: (fn: (state: ProviderState & ProviderHelper) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<ProviderState & ProviderHelper, {
            [k: string]: any;
        }>>;
    };
}>;
export {};
