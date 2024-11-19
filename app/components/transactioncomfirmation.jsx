import { useState } from "react"
import { ArrowDown, ChevronDown, Clock, Flame, Info, Settings, X } from "lucide-react"

const TransactionModal = ({ isOpen, onClose, fromToken = "ETH", toToken = "USDC" }) => {
  const [amount, setAmount] = useState("")
  const [gasOption, setGasOption] = useState("standard")
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!isOpen) return null

  const gasOptions = {
    slow: {
      name: "Slow",
      time: "~5 min",
      price: "10",
      icon: <Clock className="w-4 h-4" />
    },
    standard: {
      name: "Standard",
      time: "~3 min",
      price: "12",
      icon: <Flame className="w-4 h-4" />
    },
    fast: {
      name: "Fast",
      time: "~1 min",
      price: "15",
      icon: <Flame className="w-4 h-4" />
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md transform transition-all">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-white">Review Transaction</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Settings size={20} className="text-gray-400" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Amount Input */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">You Pay</span>
                <span className="text-sm text-gray-400">Balance: 1.234 {fromToken}</span>
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                  className="bg-transparent text-2xl font-semibold text-white outline-none w-2/3"
                />
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 
                  px-3 py-2 rounded-xl transition-colors">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-semibold">Ξ</span>
                  </div>
                  <span className="text-white font-medium">{fromToken}</span>
                  <ChevronDown size={20} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Swap Arrow */}
            <div className="flex justify-center -my-2">
              <div className="bg-gray-800 p-2 rounded-xl">
                <ArrowDown size={20} className="text-gray-400" />
              </div>
            </div>

            {/* Output Amount */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">You Receive</span>
                <span className="text-sm text-gray-400">~$1,234.56</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-white">1,234.56</span>
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 
                  px-3 py-2 rounded-xl transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white font-semibold">$</span>
                  </div>
                  <span className="text-white font-medium">{toToken}</span>
                  <ChevronDown size={20} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Gas Options */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">Gas Fee</span>
                <div className="flex items-center gap-1">
                  <Info size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-400">Estimated</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(gasOptions).map(([key, option]) => (
                  <button
                    key={key}
                    onClick={() => setGasOption(key)}
                    className={`flex flex-col items-center p-3 rounded-xl border transition-all
                      ${gasOption === key 
                        ? 'bg-gray-800 border-green-500' 
                        : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      {option.icon}
                      <span className="text-sm font-medium text-white">{option.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{option.time}</span>
                    <span className="text-sm font-medium text-white">${option.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Transaction Details */}
            <div className="bg-gray-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Network Fee</span>
                <span className="text-sm text-white font-medium">$12.34</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Route</span>
                <span className="text-sm text-white font-medium">ETH → USDC</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Minimum Received</span>
                <span className="text-sm text-white font-medium">1,234.56 USDC</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-gray-800">
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold
                py-4 rounded-xl transition-colors"
            >
              Confirm Transaction
            </button>
          </div>
        </div>
      </div>

      <button onClick={() => setIsModalOpen(true)}>
        Open Transaction Modal
      </button>
      
      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fromToken="ETH"
        toToken="USDC"
      />
    </div>
  )
}

export default TransactionModal