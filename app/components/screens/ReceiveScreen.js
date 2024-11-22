"use client";
import React, { useState, useEffect } from "react";
import QrCode from "qrcode";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { Copy, ArrowLeft, Wallet, Info } from "lucide-react";

const ReceiveScreen = ({ changeUistate }) => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const SIZE = 250;

  const walletAddress = "J78ydsvvKnJuCSQLotuu3ScDKBfncb59cbFE461aTKYp";

  useEffect(() => {
    const generateQrCode = async () => {
      const qrCodeDataUrl = await QrCode.toDataURL(walletAddress, {
        width: SIZE,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff"
        }
      });
      setQrCodeData(qrCodeDataUrl);
    };

    generateQrCode();
  }, [walletAddress]);

  const sliceWalletAddress = (address) => {
    const start = address.slice(0, 8);
    const end = address.slice(-8);
    return `${start}...${end}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      toast.success("Wallet address copied!", {
        style: {
          background: '#4B5563',
          color: '#ffffff',
        }
      });
    } catch (error) {
      console.error("Error copying text: ", error);
      toast.error("Failed to copy address", {
        style: {
          background: '#B91C1C',
          color: '#ffffff',
        }
      });
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-full h-full flex flex-col items-center justify-between pb-20 py-4 space-y-6">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <button 
          onClick={() => changeUistate("dashboard")} 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="text-gray-600 dark:text-white" size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Receive Tokens</h1>
        <div className="w-10"></div>
      </div>

      <div className="w-11/12 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-800 flex items-center space-x-4 p-4 rounded-xl">
        <Info className="text-blue-500 shrink-0" size={24} />
        <p className="text-blue-800 dark:text-blue-200 text-sm">
          Scan the QR code or copy your wallet address to receive tokens.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        {qrCodeData && (
          <Image
            src={qrCodeData}
            alt="Wallet QR Code"
            width={SIZE}
            height={SIZE}
            className="rounded-xl"
            priority
          />
        )}
      </div>

      <div className="w-10/12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 flex items-center space-x-3">
        <Wallet className="text-gray-400" size={20} />
        <input
          type="text"
          value={sliceWalletAddress(walletAddress)}
          readOnly
          className="bg-transparent text-gray-700 dark:text-gray-300 w-full text-center outline-none"
        />
      </div>

      <button 
        onClick={handleCopy}
        className="w-10/12 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full flex items-center justify-center space-x-2 transition-colors"
      >
        <Copy size={20} />
        <span>Copy Wallet Address</span>
      </button>
    </div>
  );
};

export default ReceiveScreen;