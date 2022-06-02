export declare const useEtherWallet: () => {
    connectTo: (wallet: import("../utils/connectTo").SupportedWallet) => Promise<void>;
    disconnect: () => Promise<void>;
    isLoading: boolean;
    isWalletConnected: boolean;
    currentWallet: "MetaMask" | "WalletConnect" | undefined;
    account: string | undefined;
    provider: import("@metamask/providers").MetaMaskInpageProvider | import("@walletconnect/web3-provider").default | undefined;
    chainId: number | undefined;
};
