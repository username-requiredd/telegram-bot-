"use client";
import { useState } from "react";
import { Plus, Scan, Search } from "lucide-react";
import TransactionSuccessModal from "../../transactions";
import AddressBook from "../../addressbook";

const Send = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-2xl mx-auto text-white p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Send</h1>
      </div>

      {/* Main Input Section */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl">
        <div className="p-6">
          <label className="block text-sm font-medium mb-2">Send to</label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter recipient's address"
              className="w-full bg-gray-800 text-white pl-4 pr-12 py-4 rounded-xl
                border border-gray-700 focus:border-green-500 focus:ring-2
                focus:ring-green-500/20 placeholder:text-gray-500 outline-none
                transition-all duration-200"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2
                hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Scan className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <button
            className="w-full mt-4 flex items-center justify-center gap-2 
              text-green-500 hover:text-green-400 py-3 rounded-lg
              hover:bg-green-500/10 transition-all duration-200"
          >
            <Plus size={16} className="stroke-2" />
            <span className="font-medium">Add to address book</span>
          </button>
        </div>
      </div>

      {/* Address Book Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Address Book</h2>
          <button className="text-sm text-gray-400 hover:text-white transition-colors">
            View All
          </button>
        </div>

        <div className="space-y-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search recipients..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg
                border border-gray-700 focus:border-green-500 focus:ring-2
                focus:ring-green-500/20 placeholder:text-gray-500 outline-none
                transition-all duration-200"
            />
          </div>
          <AddressBook />
          <button onClick={() => setIsModalOpen(true)}>
            Show Success Modal
          </button>

          <TransactionSuccessModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            txHash="0x1234...5678"
            amount="1.234"
            token="ETH"
            recipient="0xabcd...efgh"
          />
        </div>
      </div>
    </div>
  );
};

export default Send;
