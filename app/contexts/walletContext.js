"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import CryptoJS from "crypto-js";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [privateKey, setPrivateKey] = useState(null);
  const [passphrase, setPassphrase] = useState("");

  useEffect(() => {
    const storedPrivateKey = loadPrivateKey(passphrase);
    if (storedPrivateKey) {
      setPrivateKey(storedPrivateKey);
    }
  }, [passphrase]);

  const savePrivateKey = (key, passphrase) => {
    const encryptedKey = CryptoJS.AES.encrypt(key, passphrase).toString();
    localStorage.setItem("encryptedPrivateKey", encryptedKey);
    setPrivateKey(key);
  };

  const loadPrivateKey = (passphrase) => {
    const encrypted = localStorage.getItem("encryptedPrivateKey");
    if (encrypted) {
      const bytes = CryptoJS.AES.decrypt(encrypted, passphrase);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted || null;
    }
    return null;
  };

  return (
    <WalletContext.Provider value={{ privateKey, savePrivateKey }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
