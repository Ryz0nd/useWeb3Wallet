import { CosmosWallet, type CosmosWalletType } from "../constants";

import { connectToKeplr } from "./keplr";

export const connectTo = (wallet: CosmosWalletType) => {
  switch (wallet) {
    case CosmosWallet.Keplr:
      return connectToKeplr();
    default:
      return connectToKeplr();
  }
};
