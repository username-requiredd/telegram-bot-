// Assets.js
"use client"
import BuyCrypto from "../components/buycrypto"
import TopMovers from "../components/screens/TopMovers"
import SearchBar from "../components/search"
import { Wallet, TrendingUp, Search } from "lucide-react"

const Assets = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-green-500/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Your Assets
          </h1>
          <p className="text-gray-400 text-center">
            Manage and track your cryptocurrency portfolio
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {/* Search Section */}
        <div className="relative -mt-4">
          <div className="absolute inset-0 bg-green-500/5 blur-xl rounded-3xl"></div>
          <div className="relative bg-gray-800/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50">
            <SearchBar />
          </div>
        </div>

        {/* Buy Crypto Section */}
        <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-2 mb-4">
            <Wallet className="text-green-500 w-5 h-5" />
            <h2 className="text-lg font-semibold text-white">Quick Buy</h2>
          </div>
          <BuyCrypto />
        </div>

        {/* Top Movers Section */}
        <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="text-green-500 w-5 h-5" />
            <h2 className="text-lg font-semibold text-white">Top Movers</h2>
          </div>
          <TopMovers />
        </div>
      </div>
    </div>
  )
}

export default Assets