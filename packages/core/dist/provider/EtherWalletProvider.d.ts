import WalletConnectProvider from "@walletconnect/web3-provider";
declare type EtherWalletProviderProps = {
    walletConnectProvider?: WalletConnectProvider;
    children: React.ReactNode;
};
export declare const EtherWalletProvider: ({ walletConnectProvider, children, }: EtherWalletProviderProps) => JSX.Element;
export {};
