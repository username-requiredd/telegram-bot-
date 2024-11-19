// "use client";

export default function NavBar({ changeUistate }) {
  // console.log(changeUistate)
  return (
    <div className="w-full dark:bg-gray-900 py-4 fixed bottom-0 border-t-2">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center">
          <button
            className="flex flex-col items-center text-gray-400 text-xs"
            onClick={() => changeUistate("dashboard")}
            aria-label="Go to Dashboard"
          >
            <i className="fas fa-home dark:text-gray-400"></i>
            Home
          </button>
        </div>
        <button
          className="flex flex-col items-center"
          onClick={() => changeUistate("topmovers")}
          aria-label="View Top Movers"
        >
          <i className="fas fa-chart-line dark:text-gray-400"></i>
          <span className="text-gray-400 text-xs">Market</span>
        </button>
        <div className="flex flex-col items-center">
          <button
            className="bg-green-500 px-4 py-2 rounded-xl"
            onClick={() => {
              changeUistate("swap");
            }}
            aria-label="Exchange"
          >
            <i className="fas fa-exchange-alt text-black"></i>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="flex flex-col items-center"
            onClick={() => {
              /* Add functionality here if needed */
            }}
            aria-label="View Assets"
          >
            <i className="fas fa-wallet dark:text-gray-400"></i>
            <span className="text-gray-400 text-xs">Assets</span>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="flex flex-col items-center"
            onClick={() => {
              /* Add functionality here if needed */
            }}
            aria-label="Open Menu"
          >
            <i className="fas fa-bars dark:text-gray-400"></i>
            <span className="text-gray-400 text-xs">Menu</span>
          </button>
        </div>
      </div>
    </div>
  )
}
