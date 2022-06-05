import WalletConnectProvider from "@walletconnect/web3-provider";
export declare type WalletOptions = {
    walletConnectProvider?: WalletConnectProvider;
};
declare type EtherWalletProviderProps = {
    walletOptions?: WalletOptions;
    children: React.ReactNode;
};
export declare const EtherWalletProvider: ({ walletOptions, children, }: EtherWalletProviderProps) => JSX.Element;
export {};
