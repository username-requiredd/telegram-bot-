"use client"
import Image from "next/image"
import { useState } from "react"
import TransactionModal from "../components/transactioncomfirmation"
import { InfoIcon, ArrowRight, Copy } from "lucide-react"

const Transaction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to clipboard"))
      .catch((error) => console.error("Copy failed", error))
  }

  const TransactionInfo = () => {
    const details = [
      { 
        label: "From", 
        value: "0xc2463728922..",
        copyable: true 
      },
      { 
        label: "To", 
        value: "0xfcsgug...",
        copyable: true 
      },
      { 
        label: "Network fee", 
        value: "0.004 BTC",
        info: "Estimated network fee for processing transaction" 
      },
      { 
        label: "Total", 
        value: "0.1234 BTC",
        highlight: true 
      },
    ]

    return (
      <div className="mt-8  w-full space-y-6">
        <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl p-6 backdrop-blur-lg border border-gray-700/50 shadow-lg">
          <div className="space-y-5">
            {details.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/30 transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                      {item.label}
                    </p>
                    {item.info && (
                      <InfoIcon className="h-4 w-4 text-gray-500 hover:text-gray-300 cursor-help" />
                    )}
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <p className={`text-sm font-medium ${
                      item.highlight ? 'text-green-400 text-lg' : 'text-white'
                    }`}>
                      {item.value}
                    </p>
                    {item.copyable && (
                      <Copy
                        onClick={() => handleCopy(item.value)}
                        className="h-4 w-4 text-gray-500 hover:text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>
                </div>
                {index < details.length - 1 && (
                  <div className="border-t border-gray-700/50 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="flex flex-col items-center mt-6 justify-center">
        {/* Coin Header */}
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full animate-pulse" />
          <span className="text-gray-400 text-xl font-medium tracking-wider mb-6 backdrop-blur-sm px-4 py-1 rounded-full bg-gray-800/50 border border-gray-700/50">
            Confirm Transaction
          </span>
        </div>

        {/* Coin Image */}
        <div className="relative mt-8 group">
          <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full group-hover:bg-green-400/30 transition-colors" />
          <div className="relative bg-gradient-to-b from-gray-800/90 to-gray-900/90 rounded-full p-6 border border-gray-700/50 shadow-xl backdrop-blur-sm transform transition-transform group-hover:scale-105">
            <Image
              src="/images/btc.png"
              height={48}
              width={48}
              alt="Bitcoin"
              className="h-16 w-16 rounded-full"
            />
          </div>
        </div>

        {/* Amount Display */}
        <div className="mt-8 text-center space-y-3">
          <h3 className="font-bold text-4xl text-white tracking-tight group">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              0.126473
            </span>
            <span className="text-gray-400 text-3xl ml-2">BTC</span>
          </h3>
          
          <div className="flex items-center justify-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-gray-400 font-medium">$3,009.00</span>
            <span className="text-green-400 text-sm">≈ $23,795/BTC</span>
          </div>
        </div>

        {/* Transaction Details */}
        <TransactionInfo />

        {/* Footer */}
        <div className="mt-8 w-full space-y-4">
          <div className="flex items-center space-x-2 bg-gray-800/30 p-4 rounded-2xl backdrop-blur-sm">
            <InfoIcon className="h-5 w-5 text-yellow-500" />
            <p className="text-gray-300 text-sm">Transaction may take 10-30 minutes to complete</p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full group relative"
          >
            <div className="absolute inset-0 bg-green-500 blur-md rounded-2xl opacity-75" />
            <div className="relative bg-green-500 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <span>Send Transaction</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Transaction
