"use client";

import { useEffect, useState } from "react";
import Dashboard from "./components/screens/dashboard";
import TopMovers from "./components/screens/TopMovers";
import NavBar from "./components/ui/Navbar";
import ReceiveScreen from "./components/screens/ReceiveScreen";
import SwapScreen from "./components/screens/SwapScreen";
import Market from "./components/screens/market";
import Menu from "./components/screens/menu";
import Send from "./components/screens/transactions/send";
import Assets from "./components/screens/assets";
import { useWallet } from "./contexts/walletContext";
import getKeypair from "./actions/get-keypair";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Home = () => {
  const [uistate, setUistate] = useState("dashboard");
  const [publicKey, setPublicKey] = useState();
  const [keypair, setKeypair] = useState();
  const [balance, setBalance] = useState(0);
  const [tokens, setTokens] = useState([]);

  const router = useRouter();

  const { loadPrivateKey, savePrivateKey } = useWallet();

  // savePrivateKey(
  //   "4SHk1GSZjm9PymF3Q8jmv2GyGg9QwQWF1BEytdHJZCGFfHuZhne2JgEaGc7ryb1yUGA3deeu8H6qhRqY6Txr63me",
  //   "passcode"
  // );

  const changeUistate = (state) => {
    setUistate(state);
  };

  useEffect(() => {
    const keypair = getKeypair(loadPrivateKey());

    if (!keypair) {
      router.push("/welcome");
    }
    setKeypair(keypair);

    const publicKey = keypair?.publicKey?.toBase58();
    setPublicKey(publicKey);

    const fetchBalanceAndTokens = async () => {
      if (!publicKey) {
        toast.error("Public key is not available.");
        return;
      }

      try {
        const balanceResponse = await fetch("/api/wallet-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ publicKey }),
        });

        if (!balanceResponse.ok) {
          throw new Error("Failed to load balance");
        }

        const balanceData = await balanceResponse.json();
        setBalance(balanceData.balance);

        const tokensResponse = await fetch("/api/get-user-tokens", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ publicKey }),
        });

        if (!tokensResponse.ok) {
          throw new Error("Failed to load tokens");
        }

        const tokensData = await tokensResponse.json();
        setTokens(tokensData.tokens || []); // Ensure tokens is an array
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchBalanceAndTokens();
  }, [publicKey, uistate]); // Add publicKey to dependencies

  const renderContent = () => {
    switch (uistate) {
      case "dashboard":
        return (
          <Dashboard
            changeUistate={changeUistate}
            balance={balance}
            tokens={tokens}
          />
        );
      case "topmovers":
        return <TopMovers />;
      case "receive":
        return (
          <ReceiveScreen changeUistate={changeUistate} wallet={publicKey} />
        );
      case "trade":
        return <SwapScreen changeUistate={changeUistate} keypair={keypair} />;
      case "send":
        return <Send changeUistate={changeUistate} />;
      case "market":
        return <Market changeUistate={changeUistate} />;
      case "menu":
        return <Menu changeUistate={changeUistate} />;
      case "assets":
        return <Assets changeUistate={changeUistate} tokens={tokens} />;
      default:
        return <Dashboard changeUistate={changeUistate} />;
    }
  };

  return (
    <>
      {renderContent()}
      {(uistate === "dashboard" ||
        uistate === "assets" ||
        uistate === "menu" ||
        uistate === "market") && (
        <NavBar changeUistate={changeUistate} uistate={uistate} />
      )}
    </>
  );
};

export default Home;
