export const EthereumWallet = {
  MetaMask: "MetaMask",
  WalletConnect: "WalletConnect",
} as const;

export type EthereumWalletType =
  typeof EthereumWallet[keyof typeof EthereumWallet];
