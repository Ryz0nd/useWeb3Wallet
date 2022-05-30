const connectToMetamask = async () => {
  if (typeof window !== "undefined") {
    if (window.ethereum !== undefined) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        throw new Error("User Rejected");
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

export type SupportedWallet = "MetaMask" | "WalletConnect";

const connectTo = (wallet: SupportedWallet) => {
  switch (wallet) {
    case "MetaMask":
      return connectToMetamask();
    case "WalletConnect":
      return () => {};
    default:
      return connectToMetamask();
  }
};

export const useEtherWallet = () => {
  return { connectTo };
};
