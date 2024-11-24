"use client"
import React, { useState, memo, useCallback } from "react";
import { useMarketData } from "@/hooks/useFetch";
import {
  ScanLine,
  Bell,
  DollarSign,
  Upload,
  Download,
  ArrowLeftRight,
  TrendingUp,
  Zap,
  ChevronRight,
  XCircle
} from "lucide-react";
import Header from "../header";
import CoinList from "./cryptoList";

const PortfolioOverview = memo(({ balance, percentageChange }) => (
  <div className="text-center mb-10 animate-fade-in">
    <div className="inline-block bg-gradient-to-br from-gray-800 to-gray-700 rounded-full p-6 mb-4 shadow-2xl">
      <DollarSign className="text-green-400 h-14 w-14 animate-pulse" />
    </div>
    
    <div className="space-y-3">
      <h3 className="font-extrabold text-6xl tracking-tighter background-animate bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        ${balance.toLocaleString()}
      </h3>
      <div className="flex items-center justify-center space-x-2">
        <TrendingUp className="text-green-400 h-6 w-6 animate-bounce" />
        <p className="text-xl font-semibold text-green-400">
          {percentageChange}% Today
        </p>
      </div>
    </div>
  </div>
));

const QuickActionButton = memo(({ icon: Icon, label, onClick, color, bgColor }) => (
  <button
    className="flex flex-col items-center group transform transition-transform hover:scale-105"
    onClick={onClick}
  >
    <div className={`p-4 rounded-2xl mb-2 ${bgColor} bg-opacity-10 group-hover:bg-opacity-20 shadow-md`}>
      <Icon className={`${color} h-7 w-7`} />
    </div>
    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{label}</p>
  </button>
));

const QuickActions = memo(({ changeUistate }) => (
  <div className="flex justify-center space-x-12 mb-12">
    <QuickActionButton 
      icon={Upload} 
      label="Send" 
      onClick={() => changeUistate("send")}
      color="text-green-400"
      bgColor="bg-green-500"
    />
    <QuickActionButton 
      icon={Download} 
      label="Receive" 
      onClick={() => changeUistate("receive")}
      color="text-blue-400"
      bgColor="bg-blue-500"
    />
    <QuickActionButton 
      icon={ArrowLeftRight} 
      label="Swap" 
      onClick={() => changeUistate("swap")}
      color="text-purple-400"
      bgColor="bg-purple-500"
    />
  </div>
));

const BuyPromo = memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="relative z-50 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 mb-12 overflow-hidden shadow-2xl border-2 border-white/10 animate-slide-in">
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors group"
        onClick={onClose}
      >
        <XCircle 
          className="h-8 w-8 text-white/50 group-hover:text-white/80 transition-colors" 
          strokeWidth={1.5} 
        />
      </button>
      
      <div className="relative z-10 text-center">
        <div className="inline-block bg-white bg-opacity-20 rounded-full p-4 mb-4 animate-spin-slow">
          <Zap className="text-yellow-300 h-10 w-10" />
        </div>
        
        <h4 className="text-5xl font-black mb-4 text-white background-animate bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          Buy Crypto Instantly
        </h4>
        
        <p className="text-white text-opacity-80 mb-6 max-w-xl mx-auto text-lg">
          Seamless cryptocurrency purchases with low fees and instant transactions.
        </p>
        
        <button className="group flex items-center justify-center mx-auto bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
          Get Started
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white bg-opacity-5 rounded-full animate-blob" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-white bg-opacity-5 rounded-full animate-blob animation-delay-2000" />
    </div>
  );
});

const TopMovers = memo(({ data, loading, error }) => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-black text-white">Top Movers</h2>
      <a 
        href="#" 
        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
      >
        View All
        <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    
    <CoinList data={data} loading={loading} error={error} />
  </div>
));

const DashboardStyles = () => (
  <style jsx>{`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slide-in {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes blob {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }
    .animate-fade-in { animation: fade-in 0.7s ease-out; }
    .animate-slide-in { animation: slide-in 0.7s ease-out; }
    .animate-blob { animation: blob 10s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animate-spin-slow { animation: spin 5s linear infinite; }
    .background-animate {
      background-size: 400%;
      animation: AnimationName 3s ease alternate infinite;
    }
    @keyframes AnimationName {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
);

const Dashboard = ({ changeUistate }) => {
  const [isOpen, setIsOpen] = useState(true);
  const currency = "usd";
  const { data, loading, error } = useMarketData(currency);
  
  const handleClosePromo = useCallback(() => setIsOpen(false), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PortfolioOverview balance={29393.27} percentageChange={4.5} />
        <QuickActions changeUistate={changeUistate} />
        <BuyPromo isOpen={isOpen} onClose={handleClosePromo} />
        <TopMovers data={data} loading={loading} error={error} />
      </div>

      <DashboardStyles />
    </div>
  );
};

export default memo(Dashboard);