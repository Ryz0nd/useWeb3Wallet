export const CosmosWallet = {
  Keplr: "Keplr",
} as const;
export type CosmosWalletType = typeof CosmosWallet[keyof typeof CosmosWallet];
