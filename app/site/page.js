"use client";
import { useWallet } from "../contexts/walletContext";
import getKeypair from "../actions/get-keypair";

export default function Test() {
  const { privateKey } = useWallet();

  const handleAction = () => {
    if (privateKey) {
      // Use the private key for signing or other operations
      console.log("Private Key:", privateKey);
      const keypair = getKeypair(privateKey);
      console.log(`Public Key: ${keypair.publicKey.toBase58()}`);
    } else {
      console.log("No private key available.");
    }
  };

  return (
    <div>
      <button onClick={handleAction}>Use Private Key</button>
    </div>
  );
}
