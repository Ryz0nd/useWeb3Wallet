import {
  useEtherWallet,
  EtherWalletProvider,
  EtherWalletOptions,
} from "@use-web3wallet/ethereum";
import WalletConnectProvider from "@walletconnect/web3-provider";

const walletOptions: EtherWalletOptions = {
  walletConnectProvider: new WalletConnectProvider({
    chainId: 1,
    infuraId: "",
  }),
};

const Ethereum = () => {
  const {
    connectTo,
    disconnect,
    isLoading,
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
  console.log(provider);

  return (
    <EtherWalletProvider walletOptions={walletOptions}>
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

export default Ethereum;
