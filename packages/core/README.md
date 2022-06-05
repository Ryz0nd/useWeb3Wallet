# useWeb3Wallet

### Usage
1. Install `use-web3wallet`
```
yarn add use-web3wallet

npm install --save use-web3wallet
```


2. Add `EtherWalletProvider` to your DApp
```typescript
import { EtherWalletProvider } from "use-web3wallet";
import WalletConnectProvider from "@walletconnect/web3-provider"; // optional 


const walletOptions = {
  walletConnectProvider: new WalletConnectProvider({ // optional
    // https://docs.walletconnect.com/quick-start/dapps/web3-provider#required
  }),
};

const Index = () => {
  return(
    <EtherWalletProvider {...walletOptions}>
      ...
    </EtherWalletProvider />
  );
}
```

3. Use `useEtherWallet` hook
```typescript
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
              <button type="button" onClick={() => connectTo("WalletConnect")}> // Set walletConnectProvider in walletOptions
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
