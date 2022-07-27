import WalletConnectProvider from "@walletconnect/web3-provider";
import { ReactNode } from "react";
export declare type WalletOptions = {
    walletConnectProvider?: WalletConnectProvider;
};
declare type EtherWalletProviderProps = {
    walletOptions?: WalletOptions;
    children: ReactNode;
};
export declare const EtherWalletProvider: ({ walletOptions, children, }: EtherWalletProviderProps) => JSX.Element;
export {};
