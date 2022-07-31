import { CosmosProvider, useCosmosWallet } from "@use-web3wallet/cosmos";

const Cosmos = () => {
  const {
    connectTo,
    disconnect,
    isLoading,
    isWalletConnected,
    currentWallet,
    provider,
  } = useCosmosWallet();

  return (
    <CosmosProvider>
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
