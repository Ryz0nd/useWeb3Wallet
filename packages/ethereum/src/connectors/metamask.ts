import { useProviderStore } from "../store";

export const connectToMetamask = async () => {
  if (typeof window !== "undefined") {
    if (window.ethereum !== undefined) {
      try {
        const [account] = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as unknown as string[];
        useProviderStore.setState({
          currentWallet: "MetaMask",
          account,
          provider: window.ethereum,
        });
      } catch (error) {
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
