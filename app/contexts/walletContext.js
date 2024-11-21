"use client"; // Ensure this file is treated as a client component

import React, { createContext, useState, useEffect, useContext } from "react";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie"; // Import the cookie library

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [privateKey, setPrivateKey] = useState("");
  const [passphrase, setPassphrase] = useState("");

  useEffect(() => {
    const storedPrivateKey = loadPrivateKey(passphrase);
    if (storedPrivateKey) {
      setPrivateKey(storedPrivateKey);
    }
  }, [passphrase]);

  const savePrivateKey = (key, passphrase) => {
    const encryptedKey = CryptoJS.AES.encrypt(key, passphrase).toString();

    // Set cookies with a far future expiration date
    const farFutureDate = 10 * 365 * 24 * 60 * 60; // December 31, 9999
    console.log(farFutureDate);

    Cookies.set("encryptedPrivateKey", encryptedKey, {
      expires: farFutureDate,
    });
    Cookies.set("passphrase", passphrase, { expires: farFutureDate });

    setPrivateKey(key);
    setPassphrase(passphrase);
  };

  const loadPrivateKey = () => {
    // Get cookies
    const encrypted = Cookies.get("encryptedPrivateKey");
    const key = Cookies.get("passphrase");

    if (encrypted) {
      const bytes = CryptoJS.AES.decrypt(encrypted, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setPrivateKey(decrypted);
      return decrypted;
    }
    return null;
  };

  return (
    <WalletContext.Provider
      value={{ privateKey, savePrivateKey, loadPrivateKey }}
    >
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
