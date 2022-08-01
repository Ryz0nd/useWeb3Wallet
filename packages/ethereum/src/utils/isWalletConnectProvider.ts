import type WalletConnectProvider from "@walletconnect/web3-provider";
import type { ProviderState } from "../stores/providerStore";

export function isWalletConnectProvider(
  provider: ProviderState["provider"],
  currentWallet: ProviderState["currentWallet"]
): provider is WalletConnectProvider {
  return provider !== undefined && currentWallet === "WalletConnect";
}
