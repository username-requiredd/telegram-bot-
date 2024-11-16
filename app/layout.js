import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import "./globals.css";
// import { WalletProvider } from "./contexts/walletContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TG Wallet",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900">
        {/* <WalletProvider> */}
        <Toaster position="top-center" />
        <div className=" pb-24 ">
        {children}

        </div>
        
        <NavBar />
        {/* </WalletProvider> */}
      </body>
    </html>
  );
}
