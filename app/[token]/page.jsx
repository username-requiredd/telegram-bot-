"use client"
import { useState } from "react"
import { DollarSign, Upload, Download, ArrowLeftRight, Check, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Token = ({params}) => {
  // const {token} = params
  // console.log(token)
  const [isActive, setIsActive] = useState(false)

  const History = () => {
    return (
      <div className="mt-6 space-y-4">
        <h3 className="text-white text-lg font-semibold">Transaction History</h3>

        <div className="bg-gray-800/50 rounded-2xl p-4 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-colors">
          <div className="space-y-3">
            <div className="flex text-gray-400 items-center justify-between">
              <p className="text-sm font-medium">From 0xccs...</p>
              <p className="text-sm">07 November 2024</p>
            </div>
            <div className="flex text-white items-center justify-between">
              <p className="font-semibold text-lg">Received</p>
              <p className="text-lg font-semibold">0.638 BTC</p>
            </div>
            <div className="flex text-gray-400 items-center justify-between">
              <p className="text-sm flex items-center space-x-1">
                <Check size={16} className="text-green-500"/>
                <span>Confirmed</span>
              </p>
              <p className="text-sm">≈ $1,079</p>
            </div>
          </div>
        </div>

        <button className="w-full py-3 text-sm text-gray-400 hover:text-green-500 transition-colors">
          View All Transactions
        </button>
      </div>
    )
  }

  const Info = () => {
    return (
      <div className="mt-6 space-y-4">
        <h3 className="text-white text-lg font-semibold">Market Information</h3>

        <div className="bg-gray-800/50 rounded-2xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="space-y-4">
            {[
              { label: "Market Cap", value: "$250M" },
              { label: "Circulating Supply", value: "$150M" },
              { label: "Max Supply", value: "$250M" },
              { label: "All Time High", value: "$250M" },
              { label: "All Time Low", value: "$250M" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between group">
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">{item.label}</p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <Link 
            href="#" 
            className="flex items-center justify-center mt-4 text-sm text-gray-400 hover:text-green-500 transition-colors space-x-1"
          >
            <span>View More Details</span>
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex flex-col items-center justify-center">
        <span className="text-gray-400 text-2xl font-medium tracking-wider mb-4">
          BTC
        </span>

        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
          <div className="relative bg-gray-800/90 rounded-full p-5 border border-gray-700/50 shadow-xl backdrop-blur-sm">
            <Image
              src="/images/btc.png"
              height={48}
              width={48}
              alt="Bitcoin"
              className="h-12 w-12 rounded-full"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            0.126473 <span className="text-gray-400">BTC</span>
          </h3>
          
          <div className="mt-3 flex items-center justify-center space-x-3">
            <span className="text-gray-400 font-medium">$3,009.00</span>
            <div className="flex items-center px-2 py-1 bg-green-500/10 rounded-full">
              <span className="text-green-500 text-sm font-semibold">+4.5%</span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-12 justify-center">
          {[
            { icon: Upload, label: "Send" },
            { icon: Download, label: "Receive" },
            { icon: ArrowLeftRight, label: "Swap" }
          ].map((action, index) => (
            <button key={index} className="group flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full shadow-lg border border-gray-700/50 mb-2 
                            group-hover:bg-green-500/10 group-hover:border-green-500/50 transition-all duration-300">
                <action.icon className="text-green-500 h-6 w-6" />
              </div>
              <span className="text-gray-400 text-sm font-medium group-hover:text-green-500 transition-colors">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-gray-800/30 p-1 rounded-2xl backdrop-blur-sm">
          <div className="flex space-x-2">
            {[
              { label: "History", value: true },
              { label: "Info", value: false }
            ].map((tab, index) => (
              <button
                key={index}
                className={`
                  flex-1 py-3 px-6 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${isActive === tab.value
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                  }
                `}
                onClick={() => setIsActive(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {isActive ? <History /> : <Info />}
      </div>
    </div>
  )
}

export default Token