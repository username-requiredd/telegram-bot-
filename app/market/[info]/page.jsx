"use client";
import { TrendingUp, DollarSign, CircleDollarSign, ArrowUpDown } from 'lucide-react';
import CryptoChart from '@/app/components/chart/chart';
import { useState, useEffect, memo, useCallback } from 'react';

const formatUtils = {
  number: (num) => {
    if (!num) return '0';
    const absNum = Math.abs(Number(num));
    const formats = [
      { threshold: 1e12, suffix: 'T', divisor: 1e12 },
      { threshold: 1e9, suffix: 'B', divisor: 1e9 },
      { threshold: 1e6, suffix: 'M', divisor: 1e6 },
      { threshold: 1e3, suffix: 'K', divisor: 1e3 }
    ];

    const format = formats.find(f => absNum >= f.threshold);
    if (format) {
      return `${(absNum / format.divisor).toFixed(2)}${format.suffix}`;
    }
    return absNum.toFixed(2);
  },

  currency: (value, decimals = 2) => {
    if (!value) return '$0';
    const num = Number(value);
    return num < 1 ? `$${num.toFixed(6)}` : `$${formatUtils.number(num)}`;
  }
};

const ErrorBoundary = memo(({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="p-6 bg-gray-900 h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg font-semibold">
          Something went wrong. Please try refreshing the page.
        </div>
      </div>
    );
  }

  return children;
});

const LoadingState = memo(() => (
  <div className="p-6 bg-gray-900 h-screen flex items-center justify-center">
    <div className="text-white text-lg font-semibold animate-pulse">
      Loading...
    </div>
  </div>
));

const CoinHeader = memo(({ data, coinId }) => (
  <div className="max-w-4xl mx-auto mb-8 pt-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={data?.image.thumb || "/btc.png"}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/fallback-image.png';
          }}
          alt={`${coinId} logo`}
          className="w-12 h-12 rounded-full border-2 border-indigo-500 shadow-lg shadow-indigo-500/20"
        />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {data?.name || coinId.toUpperCase()}
        </h1>
      </div>
      <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium">Live</span>
      </div>
    </div>
  </div>
));

const ChartSection = memo(({ data, coinId }) => (
  <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl shadow-xl backdrop-blur-sm p-4 mb-8 border border-gray-700">
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-2">Price Chart</h2>
      <div className="flex items-center space-x-4 text-sm">
        <span className={`flex items-center ${data?.market_data?.price_change_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          <TrendingUp className="w-4 h-4 mr-1" />
          {data?.market_data?.price_change_24h.toFixed(2)}%
        </span>
        <span className="text-gray-400">Last 24 hours</span>
      </div>
    </div>
    <CryptoChart coinId={coinId} days="30" currency="usd" />
  </div>
));

const StatsGrid = memo(({ data, coinId }) => (
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <CircleDollarSign className="w-6 h-6 text-indigo-400" />
          <span className="text-gray-400">Current Price</span>
        </div>
        <div className="bg-indigo-500/10 rounded-full px-3 py-1">
          <span className="text-indigo-400 text-sm">{coinId.toUpperCase()}</span>
        </div>
      </div>
      <div className="text-3xl font-bold mb-2 truncate">
        {formatUtils.currency(data?.market_data?.current_price?.usd)}
      </div>
      <div className="text-gray-400 text-sm truncate">
        Volume: {formatUtils.currency(data?.market_data?.total_volume?.usd)}
      </div>
    </div>

    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Market Cap</span>
        </div>
        <span className="text-xl font-semibold truncate">
          {formatUtils.currency(data?.market_data?.market_cap?.usd)}
        </span>
      </div>
      <div className="h-px bg-gray-700" />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Circulating Supply</span>
        </div>
        <span className="text-xl font-semibold truncate">
          {formatUtils.number(data?.market_data?.circulating_supply)}
        </span>
      </div>
    </div>
  </div>
));

const TradeButton = memo(() => (
  <div className="max-w-4xl mx-auto mt-8 flex justify-center">
    <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-center space-x-2">
        <ArrowUpDown className="w-5 h-5" />
        <span>Trade Now</span>
      </div>
      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  </div>
));

const CoinPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const coinId = params.info;

  const fetchCoinData = useCallback(async (signal) => {
    try {
      setIsLoading(true);
      const request = await fetch(`/api/coins/info/${coinId}`, { signal });
      if (!request.ok) {
        throw new Error(`Failed to fetch data: ${request.status}`);
      }
      const info = await request.json();
      setData(info.data);
      console.log(info.data)
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch aborted');
        return;
      }
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [coinId]);

  useEffect(() => {
    if (!coinId) return;
    
    const controller = new AbortController();
    fetchCoinData(controller.signal);
    return () => controller.abort();
  }, [coinId, fetchCoinData]);

  if (!coinId) {
    return (
      <div className="p-6 bg-gray-900 h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg font-semibold animate-pulse">
          Invalid cryptocurrency ID
        </div>
      </div>
    );
  }

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorBoundary>{error}</ErrorBoundary>;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-6">
        <CoinHeader data={data} coinId={coinId} />
        <ChartSection data={data} coinId={coinId} />
        <StatsGrid data={data} coinId={coinId} />
        <TradeButton />
      </div>
    </ErrorBoundary>
  );
};

export default memo(CoinPage);