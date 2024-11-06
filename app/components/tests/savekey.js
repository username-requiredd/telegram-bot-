"use client";

import { useWallet } from "@/app/contexts/walletContext";
import { useState } from "react";
// import { useWallet } from "../../walletContext";

export default function SaveKeys() {
  const { privateKey, savePrivateKey } = useWallet();
  const [inputKey, setInputKey] = useState("");
  const [passKey, setPassKey] = useState("");

  const handleSavePrivateKey = () => {
    if (passKey) {
      savePrivateKey(inputKey, passKey);
    }
  };

  return (
    <div>
      <h1>Manage Your Wallet</h1>
      <div>
        <label>
          Wallet Private Key:
          <input
            type="text"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="Enter your private key"
          />
        </label>
        <label>
          Wallet passphrase:
          <input
            type="text"
            value={passKey}
            onChange={(e) => setPassKey(e.target.value)}
            placeholder="Enter your pass key"
          />
        </label>
      </div>
      <button onClick={handleSavePrivateKey}>Save Private Key</button>
      <div>
        {privateKey ? (
          <p>Your private key has been securely stored!</p>
        ) : (
          <p>No private key stored yet.</p>
        )}
      </div>
    </div>
  );
}
