export default function NavBar() {
    return (
        <div className="w-full dark:bg-gray-900 py-4 fixed bottom-0 border-t-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <i className="fas fa-home dark:text-gray-400"></i>
            <span className="text-gray-400 text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-chart-line dark:text-gray-400"></i>
            <span className="text-gray-400 text-xs">Market</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 px-4 py-2 rounded-xl">
              <i className="fas fa-exchange-alt text-black"></i>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-wallet dark:text-gray-400"></i>
            <span className="text-gray-400 text-xs">Assets</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-bars dark:text-gray-400"></i>
            <span className="text-gray-400 text-xs">Menu</span>
          </div>
        </div>
      </div>
    )
}