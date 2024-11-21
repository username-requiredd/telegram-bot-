"use client";

import { WalletProvider } from "../contexts/walletContext";

export default function Providers({ children }) {
  return <WalletProvider>{children}</WalletProvider>;
}
