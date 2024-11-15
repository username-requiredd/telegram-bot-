"use client";

import { useState } from "react";

export default function TopMovers({ changeUistate }) {
  const [tokens, setTokens] = useState([
    {
      symbol: "ADA",
      name: "Cardano",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://ipfs.io/ipfs/QmRpRYk17jEQcpXWVcUgX3cuLvi9HpkiMdLtBQBrh769Xg",
      chart: "https://placehold.co/64x32?text=Chart",
    },
  ]);
  const url = "https://tokens.jup.ag/tokens_with_markets";

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url, {
  //       method: "GET",

  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",

  //         Referer: "https://yourwebsite.com",
  //       },
  //     });

  //     if (!response.ok) {
  //       console.error(`HTTP error! status: ${response.status}`);
  //       return;
  //     }

  //     const data = await response.json();

  //     console.log(data);
  //     setTokens(data);
  //   } catch (error) {
  //     console.error("Error fetching tradable tokens:", error);
  //   }
  // };

  // fetchData();

  return (
    <div className="relative mt-32">
      <div className="fixed top-0 w-full p-4 bg-gray-800 dark:text-white">
        <div className="flex items-center mb-4 ">
          <button onClick={() => changeUistate("dashboard")}>
            <i className="fas fa-arrow-left text-black dark:text-white mr-4"></i>
          </button>
          <h1 className="text-xl font-bold">Top movers</h1>
        </div>
        <div className="relative mb-4 w-full">
          <input
            type="text"
            placeholder="Search Token"
            className="w-full p-2 pl-10 dark:bg-gray-800 dark:text-white rounded-md"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
      </div>
      <div className="p-4 scroll-smooth focus:scroll-auto">
        {tokens.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 mb-2 border-b-2 dark:bg-gray-900 rounded-md"
          >
            <div className="flex items-center">
              <img
                src={item.icon}
                alt={`${item.symbol} icon`}
                className="w-8 h-8 mr-4"
              />
              <div>
                <div className="font-bold dark:text-gray-400">
                  {item.symbol}
                </div>
                <div className="dark:text-gray-400">{item.name}</div>
              </div>
            </div>
            <img
              src={item.chart}
              alt={`${item.symbol} chart`}
              className="w-16 h-8 mx-4"
            />
            <div className="text-right">
              <div className="font-bold dark:text-gray-400">{item.price}</div>
              <div className="text-gray-400">{item.change}</div>
              <div className="text-green-500">{item.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
