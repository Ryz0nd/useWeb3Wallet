# useWeb3Wallet

useWeb3Wallet is an easy-to-use wallet provider hook.
Our goal is to support all chains and we are currently supporting Cosmos and Ethereum.

## Packages

| Package | Version | Bundle Size | Info |
|---|---|---|---|
| [ `@use-web3wallet/cosmos` ]( packages/cosmos ) | [ ![npm](https://img.shields.io/npm/v/@use-web3wallet/cosmos.svg) ]( https://www.npmjs.com/package/@use-web3wallet/cosmos ) | [ ![minzip](https://img.shields.io/bundlephobia/minzip/@use-web3wallet/cosmos.svg) ]( https://bundlephobia.com/result?p=@use-web3wallet/cosmos ) |  |
| [ `@use-web3wallet/ethereum` ]( packages/ethereum ) | [ ![npm](https://img.shields.io/npm/v/@use-web3wallet/ethereum.svg) ]( https://www.npmjs.com/package/@use-web3wallet/ethereum ) | [ ![minzip](https://img.shields.io/bundlephobia/minzip/@use-web3wallet/ethereum.svg) ]( https://bundlephobia.com/result?p=@use-web3wallet/ethereum ) |  |
| @use-web3wallet/solana |  |  | 🚧 Under development |

### useCosmosWallet
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



### useEtherWallet
1. Install `@use-web3wallet/ethereum`
```
yarn add use-web3wallet

npm install --save use-web3wallet
```


2. Add `EtherWalletProvider` to your DApp
```typescript
import { EtherWalletProvider } from "@use-web3wallet/ethereum";
import WalletConnectProvider from "@walletconnect/web3-provider"; // optional 


const walletOptions = {
  walletConnectProvider: new WalletConnectProvider({ // optional
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

3. Use `useEtherWallet` hook
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
