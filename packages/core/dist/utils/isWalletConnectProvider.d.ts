import type WalletConnectProvider from "@walletconnect/web3-provider";
import type { WalletState } from "../store/walletStore";
export declare function isWalletConnectProvider(provider: WalletState["provider"], currentWallet: WalletState["currentWallet"]): provider is WalletConnectProvider;
