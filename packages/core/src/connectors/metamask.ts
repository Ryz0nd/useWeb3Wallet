export const connectToMetamask = async () => {
    if (typeof window !== "undefined") {
      if (window.ethereum !== undefined) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          throw new Error("User Denied");
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