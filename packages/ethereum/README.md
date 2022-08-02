# useEtherWallet

### Usage
1. Install `@use-web3wallet/ethereum`
```
yarn add @use-web3wallet/ethereum
// or
npm install --save @use-web3wallet/ethereum
```


2. Add `EtherWalletProvider` to your DApp
```typescript
import { EtherWalletProvider } from "@use-web3wallet/ethereum";

// If you don't use a WalletConnect, you don't need to import it.
import WalletConnectProvider from "@walletconnect/web3-provider"; 

const walletOptions = {
  // Similarly, if you don't use a WalletConnect, please ignore this option
  walletConnectProvider: new WalletConnectProvider({
    // https://docs.walletconnect.com/quick-start/dapps/web3-provider#required
  }),
};

const Index = () => {
  return(
    <EtherWalletProvider walletOptions={walletOptions}>
      ...
    </EtherWalletProvider>
  );
}
```

3. Use a `useEtherWallet` hook
```typescript
import { useEtherWallet } from "@use-web3wallet/ethereum";

const Page = () => {
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

  return (
    <>
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
    </>
  );
};
```
