import { CosmosWallet } from "../constants";
import { useProviderStore } from "../stores";
import { isKeplrInstalled, isMobile } from "../utils";

export const connectToKeplr = () => {
  const initializeStore = useProviderStore.getState().initializeStore;

  if (isKeplrInstalled) {
    try {
      useProviderStore.setState({
        currentWallet: CosmosWallet.Keplr,
        provider: window.keplr!,
      });
    } catch (error) {
      initializeStore();
      console.error(error);
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
