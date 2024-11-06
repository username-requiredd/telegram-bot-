export default function TopMovers() {
  const data = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=BTC",
      chart: "https://placehold.co/64x32?text=Chart",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=ETH",
      chart: "https://placehold.co/64x32?text=Chart",
    },
    {
      symbol: "BNB",
      name: "Binance",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=BNB",
      chart: "https://placehold.co/64x32?text=Chart",
    },
    {
      symbol: "MATIC",
      name: "Polygon",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=MATIC",
      chart: "https://placehold.co/64x32?text=Chart",
    },
    {
      symbol: "XRP",
      name: "Ripple",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=XRP",
      chart: "https://placehold.co/64x32?text=Chart",
    },
    {
      symbol: "USDT",
      name: "Tether",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=USDT",
      chart: "https://placehold.co/64x32?text=Chart",
    },
    {
      symbol: "UNI",
      name: "UNI",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=UNI",
      chart: "https://placehold.co/64x32?text=Chart",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      price: "3.00912",
      change: "($12.09)",
      percentage: "(+0.68%)",
      icon: "https://placehold.co/32x32?text=ADA",
      chart: "https://placehold.co/64x32?text=Chart",
    },
  ];
  return (
    <div className="relative mt-32">
      <div className="fixed top-0 w-full p-4 bg-gray-100">
      <div className="flex items-center mb-4 ">
        <i className="fas fa-arrow-left text-black mr-4"></i>
        <h1 className="text-xl font-bold">Top movers</h1>
      </div>
      <div className="relative mb-4 w-full">
        <input
          type="text"
          placeholder="Search Token"
          className="w-full p-2 pl-10 bg-gray-800 text-white rounded-md"
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>
      </div>
      <div className="p-4 scroll-smooth focus:scroll-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 mb-2 bg-gray-900 rounded-md"
          >
            <div className="flex items-center">
              <img
                src={item.icon}
                alt={`${item.symbol} icon`}
                className="w-8 h-8 mr-4"
              />
              <div>
                <div className="font-bold">{item.symbol}</div>
                <div className="text-gray-400">{item.name}</div>
              </div>
            </div>
            <img
              src={item.chart}
              alt={`${item.symbol} chart`}
              className="w-16 h-8 mx-4"
            />
            <div className="text-right">
              <div className="font-bold">{item.price}</div>
              <div className="text-gray-400">{item.change}</div>
              <div className="text-green-500">{item.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
