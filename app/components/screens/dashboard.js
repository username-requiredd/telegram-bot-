"use client";
import { useEffect, useState } from "react";
import {
  ScanLine,
  Bell,
  Dot,
  DollarSign,
  Upload,
  Download,
  ArrowLeftRight,
  X,
} from "lucide-react";

import Header from "../header";
import DashTokens from "../dashTokens";
import toast from "react-hot-toast";
import { useWallet } from "@/app/contexts/walletContext";
import getKeypair from "@/app/actions/get-keypair";

const Dashboard = ({ changeUistate, balance, tokens }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { privateKey, loadPrivateKey } = useWallet();

  // if (!privateKey) {
  //   savePrivateKey(
  //     "4SHk1GSZjm9PymF3Q8jmv2GyGg9QwQWF1BEytdHJZCGFfHuZhne2JgEaGc7ryb1yUGA3deeu8H6qhRqY6Txr63me",
  //     "passion"
  //   );
  // }

  const keypair = getKeypair(loadPrivateKey());
  const publicKey = keypair?.publicKey.toBase58();

  return (
    <>
      <Header address={publicKey?.toString()} />
      <div className="min-h-screen flex flex-col px-4 mb-5 ">
        <div className="flex-1 flex flex-col items-center text-white">
          <div className=" bg-gray-800 mt-3 shadow-lg rounded-full p-5 mb-6">
            <DollarSign className="text-green-500 h-12 w-12" />
          </div>
          <h3 className="font-bold text-4xl mb-2 md:text-5xl lg:text-6xl">
            {balance}
          </h3>
          <p className="text-lg font-medium text-green-600 mb-8 md:text-xl lg:text-2xl">
            +4.5%
          </p>

          <div className="flex gap-8 flex-wrap justify-center">
            <button
              className="flex flex-col items-center"
              onClick={() => changeUistate("send")}
            >
              <Upload className="text-green-500 h-8 w-8 mb-2" />
              <p className="text-gray-400 font-medium">Send</p>
            </button>
            <button
              className="flex flex-col items-center"
              onClick={() => changeUistate("receive")}
            >
              <Download className="text-green-500 h-8 w-8 mb-2" />
              <p className="text-gray-400 font-medium">Receive</p>
            </button>
            <button
              className="flex flex-col items-center"
              onClick={() => changeUistate("trade")}
            >
              <ArrowLeftRight className="text-green-500 h-8 w-8 mb-2" />
              <p className="text-gray-400 font-medium">Swap</p>
            </button>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-2 mt-6 w-full">
            <DashTokens data={tokens} />
          </div>
        </div>

        <div
          className={`bg-white bg-opacity-5 shadow-sm mt-5  rounded-2xl mb-5 overflow-hidden relative backdrop-blur-lg w-full max-w-2xl ${
            isOpen ? "block" : "hidden"
          } px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12`}
        >
          {/* X Icon */}
          <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition-colors cursor-pointer">
            <X size={20} onClick={() => setIsOpen(false)} />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-2xl text-white mb-2 md:text-3xl lg:text-4xl">
              Buy Crypto
            </h4>
            <p className="text-gray-300 text-center mb-4 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 px-6 rounded-xl text-lg font-medium shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 md:text-xl lg:text-2xl">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
