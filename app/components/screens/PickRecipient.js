export default function PickRecipient() {
  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex items-center mb-4">
        <i className="fas fa-arrow-left text-white text-xl"></i>
        <h1 className="text-white text-xl font-bold mx-auto">Send</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Send To</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter recipient address"
              className="w-full bg-gray-800 text-white p-3 rounded-md"
            />
            <i className="fas fa-qrcode absolute right-3 top-3 text-green-500"></i>
          </div>
          <button className="text-green-500 mt-2">
            + Add this to your address book
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Address Book</label>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search recipient"
              className="w-full bg-gray-800 text-white p-3 rounded-md"
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of Bessie Cooper"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-white font-medium">Bessie Cooper</p>
                <p className="text-gray-500 text-sm">0xndhfhdrf...kjueu</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of Jerome Bell"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-white font-medium">Jerome Bell</p>
                <p className="text-gray-500 text-sm">0xndhfhdrf...kjueu</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of Marvin McKinney"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-white font-medium">Marvin McKinney</p>
                <p className="text-gray-500 text-sm">0xndhfhdrf...kjueu</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of Kathryn Murphy"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-white font-medium">Kathryn Murphy</p>
                <p className="text-gray-500 text-sm">0xndhfhdrf...kjueu</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of Ralph Edwards"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-white font-medium">Ralph Edwards</p>
                <p className="text-gray-500 text-sm">0xndhfhdrf...kjueu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-green-500 text-black py-3 rounded-md text-center font-medium">
          Next
        </button>
      </div>
    </div>
  );
}
