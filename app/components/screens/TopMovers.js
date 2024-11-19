"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const TopMovers = ({ searchQuery = "" }) => {
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "/api/placeholder/32/32",
      chart: "/api/placeholder/64/32",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "/api/placeholder/32/32",
      chart: "/api/placeholder/64/32",
    },
    {
      symbol: "BNB",
      name: "Binance",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "/api/placeholder/32/32",
      chart: "/api/placeholder/64/32",
    },
    {
      symbol: "MATIC",
      name: "Polygon",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "/api/placeholder/32/32",
      chart: "/api/placeholder/64/32",
    },
  ];

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  return (
    <div className="max-w-2xl mx-auto ">
      {/* Token List */}
      <div className="space-y-4 py-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Link
              key={index}
              href={`/${item.name.toLowerCase()}`}
              className="block"
            >
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                {/* Token Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={item.icon}
                    alt={item.symbol}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-white">{item.symbol}</h3>
                    <p className="text-sm text-gray-400">{item.name}</p>
                  </div>
                </div>

                {/* Price Info */}
                <div className="text-right">
                  <p className="text-white font-medium">{item.price}</p>
                  <p className="text-green-500 text-sm">{item.percentage}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-400">{`No tokens found matching "${searchQuery}"`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopMovers;