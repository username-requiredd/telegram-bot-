export default function EnterSeed() {
  return (
    <div className="flex flex-col h-full justify-between p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <i className="fas fa-arrow-left text-white"></i>
          <h1 className="text-center flex-grow text-white font-semibold text-lg">
            Import Wallet
          </h1>
        </div>
        <h2 className="text-center text-white font-semibold text-2xl mb-2">
          Secret Recovery Phrase
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
        <label className="block text-white mb-2">Secret Phrase</label>
        <textarea
          className="w-full h-32 p-4 bg-gray-800 text-gray-400 rounded-md mb-6"
          placeholder="Enter your secret phrase here"
        ></textarea>
      </div>
      <div className="w-full max-w-md mx-auto">
        <button className="w-full py-3 bg-lime-500 text-black font-semibold rounded-full">
          Import Wallet
        </button>
      </div>
    </div>
  );
}
