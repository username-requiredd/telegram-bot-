"use client"
import { useState } from 'react';
import { 
  ArrowDown, 
  ArrowUp, 
  RefreshCcw, 
  ChevronDown 
} from 'lucide-react';

export default function SwapScreen({ changeUistate }) {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('ETH');

  const currencies = [
    { 
      code: "BTC", 
      name: "Bitcoin", 
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
    },
    { 
      code: "ETH", 
      name: "Ethereum", 
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" 
    },
    { 
      code: "LTC", 
      name: "Litecoin", 
      logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png" 
    }
  ];

  const CurrencyDropdown = ({ selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedCurrency = currencies.find(c => c.code === selected);

    return (
      <div className="relative">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center bg-gray-700 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-600 transition-colors"
        >
          <img 
            src={selectedCurrency.logo} 
            alt={selectedCurrency.name} 
            className="w-6 h-6 mr-2 rounded-full" 
          />
          <span className="font-semibold mr-2">{selected}</span>
          <ChevronDown className="text-gray-300" size={16} />
        </div>
        
        {isOpen && (
          <div className="absolute z-10 top-full mt-2 bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 w-full">
            {currencies.map((currency) => (
              <div
                key={currency.code}
                onClick={() => {
                  onSelect(currency.code);
                  setIsOpen(false);
                }}
                className="flex items-center px-3 py-2 hover:bg-gray-700 cursor-pointer"
              >
                <img 
                  src={currency.logo} 
                  alt={currency.name} 
                  className="w-6 h-6 mr-2 rounded-full" 
                />
                <div>
                  <p className="font-semibold">{currency.code}</p>
                  <p className="text-xs text-gray-400">{currency.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-800 relative">
        <div className="absolute top-4 right-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <RefreshCcw size={20} />
          </button>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Cryptocurrency Swap
        </h1>

        {/* From Currency Block */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">You Pay</span>
            <span className="text-sm text-gray-400">Balance: 100 {fromCurrency}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <input
              type="number"
              placeholder="0.0"
              className="bg-transparent text-3xl text-white w-full focus:outline-none"
            />
            <CurrencyDropdown 
              selected={fromCurrency} 
              onSelect={setFromCurrency} 
            />
          </div>
        </div>

        {/* Swap Direction */}
        <div className="flex justify-center my-4">
          <div className="bg-gray-800 rounded-full p-2 inline-flex space-x-2">
            <ArrowDown className="text-green-500" />
            <ArrowUp className="text-red-500" />
          </div>
        </div>

        {/* To Currency Block */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">You Receive</span>
            <span className="text-sm text-gray-400">Balance: 100 {toCurrency}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <input
              type="number"
              placeholder="0.0"
              className="bg-transparent text-3xl text-white w-full focus:outline-none"
            />
            <CurrencyDropdown 
              selected={toCurrency} 
              onSelect={setToCurrency} 
            />
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="text-center text-sm text-gray-400 mb-6">
          1 {fromCurrency} ≈ 1000 {toCurrency}
        </div>

        {/* Swap Button */}
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:-translate-y-1 shadow-lg">
          Swap Now
        </button>
      </div>
    </div>
  );
}