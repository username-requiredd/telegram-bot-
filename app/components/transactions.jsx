import { useState } from "react"
import { CheckCircle2, Copy, ExternalLink, X } from "lucide-react"

const TransactionSuccessModal = ({ 
  isOpen, 
  onClose,
  txHash = "0x1234...5678",
  amount = "1.234",
  token = "ETH",
  recipient = "0xabcd...efgh" 
}) => {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white
              rounded-lg p-2 hover:bg-gray-800 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Success Animation */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-500 animate-[ping_1s_ease-in-out]" />
            </div>
            <h3 className="text-xl font-bold text-white">Transaction Successful!</h3>
            <p className="text-gray-400 text-sm mt-1">Your transfer has been confirmed</p>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            {/* Amount */}
            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Amount Sent</p>
              <p className="text-lg font-semibold text-white">
                {amount} {token}
              </p>
            </div>

            {/* Recipient */}
            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Recipient Address</p>
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{recipient}</p>
                <button 
                  onClick={() => copyToClipboard(recipient)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Copy size={16} className={copied ? "text-green-500" : "text-gray-400"} />
                </button>
              </div>
            </div>

            {/* Transaction Hash */}
            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Transaction Hash</p>
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{txHash}</p>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => copyToClipboard(txHash)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Copy size={16} className={copied ? "text-green-500" : "text-gray-400"} />
                  </button>
                  <a 
                    href={`https://etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} className="text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium
                py-3 rounded-xl transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium
                py-3 rounded-xl transition-colors"
            >
              New Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSuccessModal