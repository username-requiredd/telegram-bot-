"use client"
import { useState } from "react"
import { Search } from "lucide-react"
const SearchBar = ()=>{
    const [searchQuery,setSearchQuery] = useState("")
    return(
        <>
              <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tokens..."
          className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl 
           border border-gray-700 focus:border-green-500 focus:ring-1 
           focus:ring-green-500 placeholder:text-gray-500 outline-none transition-all"
        />
      </div>

        </>
    )
}

export default SearchBar