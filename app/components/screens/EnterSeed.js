import { useWallet } from "@/app/contexts/walletContext";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";

export default function EnterSeed({ changeState }) {
  const { savePrivateKey } = useWallet();
  const [seedPhrase, setSeedPhrase] = useState("");

  const handleWalletImport = async () => {
    try {
      console.log("Seed Phrase:", seedPhrase);

      // Convert seed phrase to seed buffer
      const seed = await bip39.mnemonicToSeed(seedPhrase);

      // Derive keypair using the standard Solana derivation path
      const path = "m/44'/501'/0'/0'";
      const derivedKey = derivePath(path, seed.toString("hex")).key;
      const keypair = Keypair.fromSeed(derivedKey);

      // Get the private key
      const privateKey = keypair.secretKey;

      // Log the public and private keys
      console.log("Public Key:", keypair.publicKey.toBase58());
      console.log("Private Key:", privateKey.toString());

      // Load the private key into the wallet context
      savePrivateKey(privateKey);
    } catch (error) {
      console.error("Error importing wallet:", error);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between p-4 text-white">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={() => changeState("welcome")}>
            <ArrowLeft />
          </button>
          <h1 className="text-center flex-grow dark:text-white font-semibold text-lg">
            Import Wallet
          </h1>
        </div>
        <h2 className="text-center dark:text-white font-semibold text-2xl mb-2">
          Secret Recovery Phrase
        </h2>
        <p className="text-center text-gray-400 mb-6">
          To access your wallet, please enter your secret phrase below. This is
          a secure and essential step to ensure that only you can access your
          funds.
        </p>
        <label className="block dark:text-white mb-2">Secret Phrase</label>
        <textarea
          value={seedPhrase}
          onChange={(e) => setSeedPhrase(e.target.value)}
          className="w-full h-32 p-4 bg-gray-800 text-gray-400 rounded-md mb-6 resize-none"
          placeholder="Enter your secret phrase here"
        />
      </div>
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={handleWalletImport}
          className="w-full py-3 bg-green-500 text-black font-semibold rounded-full"
        >
          Import Wallet
        </button>
      </div>
    </div>
  );
}
