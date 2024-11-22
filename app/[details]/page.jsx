import { TrendingUp, DollarSign, CircleDollarSign, ArrowUpDown } from 'lucide-react';
import CryptoChart from "../components/chart/chart";

export default function CoinPage({ params }) {
  const coinId = params.details;

  if (!coinId) {
    return (
      <div className="p-6 bg-gray-900 h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg font-semibold animate-pulse">
          Invalid cryptocurrency ID
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-6">
      <div className="max-w-4xl mx-auto mb-8 pt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/btc.png"
              alt={coinId}
              className="w-12 h-12 rounded-full border-2 border-indigo-500 shadow-lg shadow-indigo-500/20"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {coinId.toUpperCase()}
            </h1>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">Live</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl shadow-xl backdrop-blur-sm p-6 mb-8 border border-gray-700">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Price Chart</h2>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-green-400 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +2.4%
            </span>
            <span className="text-gray-400">Last 30 days</span>
          </div>
        </div>
        <CryptoChart
          coinId={coinId}
          days="30"
          currency="usd"
        />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <CircleDollarSign className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-400">Available Balance</span>
            </div>
            <div className="bg-indigo-500/10 rounded-full px-3 py-1">
              <span className="text-indigo-400 text-sm">BTC</span>
            </div>
          </div>
          <div className="text-3xl font-bold mb-2">0.1235 BTC</div>
          <div className="text-gray-400 text-sm">≈ $5,234.12 USD</div>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">Market Cap</span>
            </div>
            <span className="text-xl font-semibold">$250M</span>
          </div>
          <div className="h-px bg-gray-700"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">Circulating Supply</span>
            </div>
            <span className="text-xl font-semibold">19.2M BTC</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 flex justify-center">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5">
          <div className="flex items-center space-x-2">
            <ArrowUpDown className="w-5 h-5" />
            <span>Trade Now</span>
          </div>
          <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}