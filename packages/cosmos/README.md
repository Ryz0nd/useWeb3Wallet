# useCosmosWallet

### Usage
1. Install `@use-web3wallet/cosmos`
```
yarn add @use-web3wallet/cosmos
// or
npm install --save @use-web3wallet/cosmos
```


2. Add `CosmosWalletProvider` to your DApp
```typescript
import { CosmosWalletProvider } from "@use-web3wallet/cosmos";

const walletOptions = {
  "Keplr": {
    // Please add chain IDs to support.
    supportedChainIds: [], // ex) ["osmosis-1", "cosmoshub-4", ...]
  }
};

const Index = () => {
  return(
    <CosmosWalletProvider walletOptions={walletOptions}>
      ...
    </CosmosWalletProvider>
  );
}
```

3. Use a `useCosmosWallet` hook
```typescript
import { useCosmosWallet } from "@use-web3wallet/cosmos";

const Page = () => {
 const {
    connectTo,
    disconnect,
    isLoading,
    isWalletConnected,
    currentWallet,
    provider,
    chainInfos,
  } = useCosmosWallet();

  return (
    <>
      {!isLoading && (
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
    </>
  );
};
```
