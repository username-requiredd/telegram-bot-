import Image from "next/image";
export default function PickRecipient() {
  const users = [
    {
      name: "Bessie Cooper",
      address: "0xndhfhdrf...kjueu",
      imageUrl: "https://placehold.co/40x40",
    },
    {
      name: "Jerome Bell",
      address: "0xndhfhdrf...kjueu",
      imageUrl: "https://placehold.co/40x40",
    },
    {
      name: "Marvin McKinney",
      address: "0xndhfhdrf...kjueu",
      imageUrl: "https://placehold.co/40x40",
    },
    {
      name: "Kathryn Murphy",
      address: "0xndhfhdrf...kjueu",
      imageUrl: "https://placehold.co/40x40",
    },
    {
      name: "Ralph Edwards",
      address: "0xndhfhdrf...kjueu",
      imageUrl: "https://placehold.co/40x40",
    },
  ];
  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex items-center mb-4">
        <i className="fas fa-arrow-left text-white text-xl"></i>
        <h1 className="dark:text-white text-xl font-bold mx-auto">Send</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Send To</label>
          <div className="relative border-2">
            <input
              type="text"
              placeholder="Enter recipient address"
              className="w-full dark:bg-gray-800 text-white p-3 rounded-md"
            />
            <i className="fas fa-qrcode absolute right-3 top-3 text-green-500"></i>
          </div>
          <button className="text-green-500 mt-2">
            + Add this to your address book
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Address Book</label>
          <div className="relative border-2 mb-4">
            <input
              type="text"
              placeholder="Search recipient"
              className="w-full dark:bg-gray-800 text-white p-3 rounded-md"
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
          </div>
          <div className="space-y-4">
            {users.map((user, index) => (
              <div key={index} className="flex items-center mb-4">
                <Image
                  width={10}
                  src={user.imageUrl}
                  alt={`Profile picture of ${user.name}`}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="dark:text-white font-medium">{user.name}</p>
                  <p className="text-gray-500 text-sm">{user.address}</p>
                </div>
              </div>
            ))}
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
