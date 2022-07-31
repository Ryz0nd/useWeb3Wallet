import {
  CosmosProvider,
  useCosmosWallet,
  CosmosWalletOptions,
} from "@use-web3wallet/cosmos";
import { CHAIN } from "../chain";

const walletOptions: CosmosWalletOptions = {
  Keplr: {
    supportedChainIds: [CHAIN["Cosmos Hub"], CHAIN["Osmosis"], CHAIN["Juno"]],
  },
};

const Cosmos = () => {
  const {
    connectTo,
    disconnect,
    isLoading,
    isWalletConnected,
    currentWallet,
    provider,
    chainInfos,
  } = useCosmosWallet();
  console.log(currentWallet);
  console.log(chainInfos, chainInfos?.[CHAIN["Cosmos Hub"]]);

  return (
    <CosmosProvider walletOptions={walletOptions}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {isWalletConnected ? (
            <>
              <button onClick={() => disconnect()}>Disconnect</button>
            </>
          ) : (
            <>
              <button onClick={() => connectTo("Keplr")}>
                Connect to Keplr Wallet
              </button>
            </>
          )}
        </>
      )}
    </CosmosProvider>
  );
};

export default Cosmos;
