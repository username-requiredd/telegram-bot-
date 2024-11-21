"use client";
import { Search } from "lucide-react";
import SearchBar from "../search";
import TopMovers from "./TopMovers";
import DashTokens from "../dashTokens";

const Assets = ({ tokens }) => {
  return (
    <div className="max-w-2xl mx-auto text-white p-6 mb-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Select Token</h1>
      </div>

      {/* Search Section */}
      <div className="space-y-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              Search tokens
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Top Movers Section */}
        <div className="space-y-4">
          {/* <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-200">Top Movers</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              View All
            </button>
          </div> */}

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-2 mt-2 w-full">
            <DashTokens data={tokens} />
          </div>
        </div>

        {/* Popular Tokens - Optional section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-200">
              Popular Tokens
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Quick select buttons for common tokens */}
            <button
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-750 
              border border-gray-700 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-semibold">Ξ</span>
              </div>
              <div className="text-left">
                <div className="font-medium">ETH</div>
                <div className="text-sm text-gray-400">Ethereum</div>
              </div>
            </button>

            <button
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-750 
              border border-gray-700 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-yellow-400 font-semibold">₿</span>
              </div>
              <div className="text-left">
                <div className="font-medium">BTC</div>
                <div className="text-sm text-gray-400">Bitcoin</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
