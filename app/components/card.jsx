import Link from "next/link";

const CryptoCard = () => {
  const cryptoData = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$400",
      change: "400%",
      isPositive: true,
    },
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$400",
      change: "400%",
      isPositive: true,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {cryptoData.map((crypto, index) => (
        <Link
          key={index}
          href="#"
          className="block w-full md:w-72 transform transition-all duration-300 hover:scale-105"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="p-6 space-y-4">
              {/* Token Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full blur-md" />
                  <img
                    src="/images/btc.png"
                    alt={crypto.symbol}
                    className="w-12 h-12 rounded-full relative z-10"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {crypto.symbol}
                  </h3>
                  <p className="text-gray-400">{crypto.name}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 my-2" />

              {/* Price Info */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-400">Current Price</p>
                  <p className="text-xl font-bold text-white">{crypto.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">24h Change</p>
                  <p className={`text-lg font-semibold ${crypto.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CryptoCard;