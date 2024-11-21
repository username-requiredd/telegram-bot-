import { HR } from "flowbite-react";
import { Coins, Wallet2Icon } from "lucide-react";

export default function DashTokens({ data }) {
  return (
    <div className="relative mt-2">
      <div className="flex items-center justify-center mb-2 ">
        <Wallet2Icon />
        <h1 className="text-md font-bold">Tokens</h1>
      </div>
      <HR className="p-0 m-0" />
      <div className="p-4 scroll-smooth focus:scroll-auto">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 mb-2 border-b dark:bg-gray-900 rounded-md"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={`${item.symbol} icon`}
                  className="w-8 h-8 mr-4 rounded-full"
                />
                <div>
                  <div className="font-bold">{item.symbol}</div>
                  <div className="text-gray-400">{item.name}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold">{item.tokenBalance}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center text-center px-2 py-4">
            No tokens, Buy or receive tokens to view!
          </div>
        )}
      </div>
    </div>
  );
}
