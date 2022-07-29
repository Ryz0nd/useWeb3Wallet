import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWalletConnectStore, useProviderStore } from "../store";
import { isWalletConnectProvider } from "../utils";

let shouldForceModalOpen: boolean = false;

const getWalletConnector = (
  provider: WalletConnectProvider
): Promise<WalletConnectProvider["wc"]> => {
  return new Promise((resolve, reject) => {
    const wc = provider.wc;
    if (provider.isConnecting && !shouldForceModalOpen) {
      provider.onConnect((x: any) => resolve(x));
    } else if (!wc.connected) {
      provider.isConnecting = true;
      wc.on("modal_closed", () => {
        shouldForceModalOpen = true;
        provider.isConnecting = false;
      });
      if (shouldForceModalOpen) {
        provider.qrcodeModal.open(provider.connector.uri, false);
      }
      wc.createSession({ chainId: provider.chainId })
        .then(() => {
          wc.on("connect", (error, payload) => {
            if (error) {
              provider.isConnecting = false;
              return reject(error);
            }
            provider.isConnecting = false;
            provider.connected = true;
            if (payload) {
              provider.updateState(payload.params[0]);
            }
            provider.emit("connect");
            provider.triggerConnect(wc);
            resolve(wc);
          });
        })
        .catch((error) => {
          provider.isConnecting = false;
          reject(error);
        });
    } else {
      if (!provider.connected) {
        provider.connected = true;
        provider.updateState(wc.session);
      }
      resolve(wc);
    }
  });
};

const enable = async (provider: WalletConnectProvider): Promise<string[]> => {
  const wc = await getWalletConnector(provider);
  if (wc) {
    provider.start();
    provider.subscribeWalletConnector();
    return wc.accounts;
  } else {
    throw new Error("Failed to connect to WalletConnect");
  }
};

export const connectToWalletConnect = async () => {
  if (typeof window !== "undefined") {
    const provider = useWalletConnectStore.getState().walletConnectProvider;
    const initializeStore = useProviderStore.getState().initializeStore;

    if (isWalletConnectProvider(provider, "WalletConnect")) {
      try {
        const accounts = await enable(provider);
        useProviderStore.setState({
          currentWallet: "WalletConnect",
          account: accounts[0],
          provider,
        });
      } catch (error) {
        initializeStore();
        console.error(error);
      }
    } else {
      initializeStore();
    }
  }
};
