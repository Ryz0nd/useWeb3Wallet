import { CosmosWallet } from "../constants";
import { useProviderStore } from "../stores";
import { isKeplrInstalled, isMobile } from "../utils";

export const connectToKeplr = async () => {
  const initializeStore = useProviderStore.getState().initializeStore;
  const walletOptions = useProviderStore.getState().walletOptions;
  const keplrWalletOption = walletOptions?.Keplr;

  if (isKeplrInstalled) {
    try {
      const supportedChainIds = keplrWalletOption?.supportedChainIds ?? [];
      if (
        keplrWalletOption?.supportedChainIds &&
        supportedChainIds.length > 0
      ) {
        await Promise.all(supportedChainIds.map(async (id) => {
          await window.keplr!.enable(id);
        }))
      }

      useProviderStore.setState({
        currentWallet: CosmosWallet.Keplr,
        provider: window.keplr!,
      });
    } catch (e) {
      initializeStore();
      const error = new Error(e as string);
      if (!error.message.includes("Request rejected")) {
        console.error(error);
      }
    }
    return;
  }

  if (!isKeplrInstalled) {
    if (!isMobile) {
      window.open(
        "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap",
        "_blank",
        "noopener"
      );
    }
  }
};
