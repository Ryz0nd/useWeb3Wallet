import { EthereumWallet } from "../constants";
import { useProviderStore } from "../stores";

export const connectToMetamask = async () => {
  const initializeStore = useProviderStore.getState().initializeStore;

  if (typeof window !== "undefined") {
    if (window.ethereum !== undefined) {
      try {
        const [account] = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as unknown as string[];
        useProviderStore.setState({
          currentWallet: EthereumWallet.MetaMask,
          account,
          provider: window.ethereum,
        });
      } catch (error) {
        initializeStore();
        console.error(error);
      }
    } else {
      window.open(
        `https://metamask.app.link/dapp/${window.location.href.replace(
          `${window.location.protocol}//`,
          ""
        )}`,
        "_blank",
        "noopener"
      );
    }
  }
};
