"use client";

import Link from "next/link";
import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const CoinList = ({ data = [], loading = false, error = null, searchQuery = "" }) => {
  // Filter data based on the search query
  const filteredData =
    data?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-900 rounded-lg shadow-lg">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md"
        role="alert"
      >
        Unable to fetch market data. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-4xl rounded-2xl shadow-xl overflow-hidden">
      {/* List of Tokens */}
      {filteredData.length > 0 ? (
        <div className="divide-y divide-gray-800">
          {filteredData.map((item, index) => (
            <Link
              key={item.id || index}
              href={`/market/${item.name.toLowerCase()}`}
              className="block"
            >
              <div className="py-4 flex items-center justify-between bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-200 my-2">
                {/* Token Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.symbol.toUpperCase()}
                    className="w-12 h-12 rounded-full border-2 border-gray-700 group-hover:border-indigo-500 transition duration-300"
                  />
                  <div>
                    <h3 className="font-semibold text-white text-lg">{item.symbol.toUpperCase()}</h3>
                    <p className="text-gray-400 text-sm">{item.name}</p>
                  </div>
                </div>

                {/* Price and Percentage Info */}
                <div className="text-right">
                  <p className="text-white font-bold text-xl">
                    ${item.current_price.toLocaleString()}
                  </p>
                  <div className="flex items-center justify-end space-x-1">
                    {item.price_change_percentage_24h > 0 ? (
                      <TrendingUp className="text-green-500 w-5 h-5" />
                    ) : (
                      <TrendingDown className="text-red-500 w-5 h-5" />
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        item.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {Math.abs(item.price_change_percentage_24h).toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-850">
          <p className="text-gray-400 text-lg">No cryptocurrencies found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default CoinList;
