"use client"
import { useState } from "react";
import { Search } from "lucide-react";
import SearchBar from "../search";
import CoinList from "./cryptoList";
import { useMarketData } from "@/hooks/useFetch";
import Link from "next/link";

const Assets = () => {
  const currency = "usd";
  const [searchQuery,setSearchQuery] = useState("")

  const { data, loading, error } = useMarketData(currency);

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Select Token
          </h1>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
          <div className="p-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Search tokens
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tokens..."
          className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl 
           border border-gray-700 focus:border-green-500 focus:ring-1 
           focus:ring-green-500 placeholder:text-gray-500 outline-none transition-all"
        />
      </div>


            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
          <div className="p-6">
            <CoinList 
              data={data} 
              loading={loading} 
              error={error} 
              searchQuery={searchQuery} 
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Popular Tokens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="w-full group text-left">
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-lg hover:bg-gray-750 hover:border-gray-600">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <span className="text-blue-400 text-xl font-bold">Ξ</span>
                </div>
                <div>
                  <div className="font-medium text-white text-lg">ETH</div>
                  <div className="text-gray-400">Ethereum</div>
                </div>
              </div>
            </button>

            <Link 
              href="/market/bitcoin" 
              className="block group"
            >
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-lg hover:bg-gray-750 hover:border-gray-600">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                  <span className="text-yellow-400 text-xl font-bold">₿</span>
                </div>
                <div>
                  <div className="font-medium text-white text-lg">BTC</div>
                  <div className="text-gray-400">Bitcoin</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;