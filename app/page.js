"use client";
import ReceiveScreen from "./components/screens/ReceiveScreen";
import EnterSeed from "./components/screens/EnterSeed";
import SwapScreen from "./components/screens/SwapScreen";
import TopMovers from "./components/screens/TopMovers";

import { Keypair } from "@solana/web3.js";
import SaveKeys from "./components/tests/savekey";
import { useWallet } from "./contexts/walletContext";

const { privateKey } = useWallet();
const keypair = Keypair.fromSecretKey(
  Uint8Array.from([...Buffer.from(privateKey, "base58")])
);
const pubKey = keypair.publicKey.toBase58();

export default function Home() {
  // return <ReceiveScreen walletAddress={pubKey} />;
  return <SaveKeys />;
}
