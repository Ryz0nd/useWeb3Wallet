import type WalletConnectProvider from "@walletconnect/web3-provider";
import type { ProviderState } from "../store/providerStore";

export function isWalletConnectProvider(
  provider: ProviderState["provider"],
  currentWallet: ProviderState["currentWallet"]
): provider is WalletConnectProvider {
  return provider !== undefined && currentWallet === "WalletConnect";
}
