import type WalletConnectProvider from "@walletconnect/web3-provider";
import type { ProviderState } from "../store/providerStore";
export declare function isWalletConnectProvider(provider: ProviderState["provider"], currentWallet: ProviderState["currentWallet"]): provider is WalletConnectProvider;
