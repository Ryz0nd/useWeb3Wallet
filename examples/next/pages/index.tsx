import type { NextPage } from "next";
import { useEtherWallet } from "use-ether-wallet";

const Home: NextPage = () => {
  const { connectTo } = useEtherWallet();

  return (
    <>
      <button type="button" onClick={() => connectTo("MetaMask")}>
        MetaMask
      </button>
    </>
  );
};

export default Home;
