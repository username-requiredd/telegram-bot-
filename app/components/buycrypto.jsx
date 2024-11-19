"use client"
import { X } from "lucide-react"
import { useState } from "react"
const BuyCrypto = ()=>{
    const [isOpen,setIsOpen] = useState(true)
    return (
        <>

        <div className={`bg-white bg-opacity-5 shadow-sm mt-5 rounded-2xl mb-5 overflow-hidden relative backdrop-blur-lg w-full max-w-2xl ${
            isOpen ? "block" : "hidden"
          } px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12`}
        >
          <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer">
            <X size={20} onClick={() => setIsOpen(false)} />
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold text-2xl text-white mb-2 md:text-3xl lg:text-4xl">Buy Crypto</h4>
            <p className="text-gray-300 text-center mb-4 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 px-6 rounded-xl text-lg font-medium shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 md:text-xl lg:text-2xl">
              Buy now
            </button>
          </div>
        </div>


        </>
    )
}

export default BuyCrypto