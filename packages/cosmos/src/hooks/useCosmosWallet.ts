import { isKeplrInstalled } from "../utils/isKeplrInstalled";
import { isMobile } from "../utils/isMobile";

export const useCosmosWallet = () => {
  const connect = () => {
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

  const disconnect = () => {};

  return {
    connect,
    disconnect,
  };
};
