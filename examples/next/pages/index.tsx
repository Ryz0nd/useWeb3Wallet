import type { NextPage } from "next";
import { useEtherWallet, EtherWalletProvider } from "use-ether-wallet";
import WalletConnectProvider from "@walletconnect/web3-provider";

const walletConnectProvider = new WalletConnectProvider({
  chainId: 80001,
  rpc: {
    80001:
      "https://rpc-mumbai.maticvigil.com/v1/f4d1d0396f0675278c5faf078d9fab48a08455e8",
  },
});

const Home: NextPage = () => {
  const {
    isLoading,
    connectTo,
    disconnect,
    provider,
    currentWallet,
    chainId,
    account,
    isWalletConnected,
  } = useEtherWallet();
  console.log("account:", account);
  console.log("chainId:", chainId);
  console.log("currentWallet", currentWallet);
  console.log("isWalletConnected:", isWalletConnected);
  console.log("isLoading", isLoading);
  console.log(provider)

  return (
    <EtherWalletProvider walletConnectProvider={walletConnectProvider}>
      {!isLoading && (
        <>
          {!isWalletConnected ? (
            <>
              <button type="button" onClick={() => connectTo("MetaMask")}>
                MetaMask
              </button>
              <button type="button" onClick={() => connectTo("WalletConnect")}>
                Wallet Connect
              </button>
            </>
          ) : (
            <button type="button" onClick={disconnect}>
              Disconnect
            </button>
          )}
        </>
      )}
    </EtherWalletProvider>
  );
};

export default Home;
