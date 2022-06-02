import { SupportedWallet } from "../constants";
export declare type SupportedWallet = typeof SupportedWallet.MetaMask | typeof SupportedWallet.WalletConnect;
export declare const connectTo: (wallet: SupportedWallet) => Promise<void>;
