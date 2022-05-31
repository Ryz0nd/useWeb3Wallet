import type { NextPage } from "next";
import { useEtherWallet } from "use-ether-wallet";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Home: NextPage = () => {
  const { connectTo } = useEtherWallet();

  return (
    <>
      <button type="button" onClick={() => connectTo({ name: "MetaMask" })}>
        MetaMask
      </button>
      <button
        type="button"
        onClick={() =>
          connectTo({
            name: "WalletConnect",
            provider: new WalletConnectProvider({
              rpc: {
                56: "https://bsc-dataseed.binance.org/",
              },
            }),
          })
        }
      >
        Wallet Connect
      </button>
    </>
  );
};

export default Home;
