export default function SwapScreen() {
  const currencies = [
    { code: "BTC", name: "Bitcoin" },
    { code: "ETH", name: "Ethereum" },
    { code: "LTC", name: "Litecoin" },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-10">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold mb-6">Swap</h1>
        <div className="w-80 p-4 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">You Pay</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="text"
              className="bg-transparent text-2xl w-full focus:outline-none"
              value="0.0"
              readOnly
            />
            <div className="flex items-center relative">
              <select className="bg-transparent text-white focus:outline-none appearance-none pr-8">
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
              <i className="fas fa-chevron-down ml-2 absolute right-0 pr-4 pointer-events-none"></i>
            </div>
          </div>
          <div className="text-sm text-gray-400">Balance: 100 BTC</div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gray-700 p-2 rounded-full">
            <i className="fas fa-arrow-down text-green-500"></i>
          </div>
        </div>
        <div className="w-80 p-4 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">You Receive</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="text"
              className="bg-transparent text-2xl w-full focus:outline-none"
              value="0.0"
              readOnly
            />
            <div className="flex items-center relative">
              <select className="bg-transparent text-white focus:outline-none appearance-none pr-8">
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
              <i className="fas fa-chevron-down ml-2 absolute right-0 pr-4 pointer-events-none"></i>
            </div>
          </div>
          <div className="text-sm text-gray-400">Balance: 100 BTC</div>
        </div>
        <div className="text-sm text-gray-400 mb-8">1 BTC ≈ 1000 ETH</div>
        <button className="bg-green-500 text-black py-3 w-80 rounded-full text-lg mb-8">
          Swap
        </button>
      </div>
      <div className="w-full bg-gray-900 py-4 fixed bottom-0">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <i className="fas fa-home text-gray-400"></i>
            <span className="text-gray-400 text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-chart-line text-gray-400"></i>
            <span className="text-gray-400 text-xs">Market</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 p-3 rounded-full">
              <i className="fas fa-exchange-alt text-black"></i>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-wallet text-gray-400"></i>
            <span className="text-gray-400 text-xs">Assets</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-bars text-gray-400"></i>
            <span className="text-gray-400 text-xs">Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
