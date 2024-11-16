"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import SwapScreen from "../components/screens/SwapScreen"
import PasswordScreen from "../components/screens/enterPassword"
import TopMovers from "../components/screens/TopMovers"
import ReceiveScreen from "../components/screens/ReceiveScreen"
import Intro from "../components/onboardingandintro/intro1.jsx"
import SearchBar from "../components/search"

export default function Test() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="p-4 space-y-6">
      {/* Top Movers Header */}
      <h1 className="text-xl  text-center font-bold text-white">
        Top Movers
      </h1>

      {/* Search Header */}
      <SearchBar/>
      {/* Content Area */}
      <div className="">
        <TopMovers/>
      </div>
    </div>
  )
}