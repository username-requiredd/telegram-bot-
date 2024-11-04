export default function ReceiveeScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-8">
      <div className="flex items-center w-full px-4 py-2">
        <i className="fas fa-arrow-left text-white text-2xl"></i>
        <h1 className="text-white text-xl font-semibold ml-4">Receive</h1>
      </div>
      <div className="flex flex-col items-center w-full space-y-8">
        <div className="bg-gray-800 text-gray-400 text-center p-4 rounded-lg w-11/12">
          <i className="fas fa-info-circle text-green-500"></i>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            sit amet luctus
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <img
            src="https://placehold.co/200x200"
            alt="QR code"
            className="w-48 h-48"
          />
        </div>
        <div className="bg-gray-800 text-gray-400 text-center p-2 rounded-lg w-11/12 flex items-center">
          <input
            type="text"
            value="0xjdhyg6w...0w9dwdw"
            readOnly
            className="bg-transparent text-center w-full"
          />
          <i className="fas fa-search text-gray-400 ml-2"></i>
        </div>
      </div>
      <div className="flex justify-around w-11/12 mt-8">
        <button className="bg-transparent border border-green-500 text-green-500 py-2 px-8 rounded-full">
          Share
        </button>
        <button className="bg-green-500 text-black py-2 px-8 rounded-full">
          Confirm
        </button>
      </div>
    </div>
  );
}
