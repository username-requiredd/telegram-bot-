
// Menu.js
"use client"
import { Bell, Bolt, ChevronRight, Copy, KeyRound, LogOut, Logs, MessageSquare, Settings, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Menu = () => {
  const links = [
    {
      link: "/payment",
      name: "Add payment method",
      icon: Wallet,
      description: "Manage your payment options"
    },
    {
      link: "/activitylog",
      name: "Activity log",
      icon: Logs,
      description: "View your recent transactions"
    },
    {
      link: "/general",
      name: "General",
      icon: Settings,
      description: "Basic account settings"
    },
    {
      link: "/preferences",
      name: "Preferences",
      icon: Bolt,
      description: "Customize your experience"
    },
    {
      link: "/security",
      name: "Security/Privacy",
      icon: KeyRound,
      description: "Protect your account"
    },
    {
      link: "/notifications",
      name: "Push notification",
      icon: Bell,
      description: "Manage your alerts"
    },
    {
      link: "/about",
      name: "About",
      icon: MessageSquare,
      description: "Learn more about us"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 space-y-6">
      {/* Profile Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-green-500/5 blur-xl rounded-2xl"></div>
        <div className="relative bg-gray-800/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full"></div>
                <Image 
                  src="/images/btc.png" 
                  className="relative rounded-full ring-2 ring-green-500/20" 
                  width={50} 
                  height={50} 
                  alt="profile pic"
                />
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">Wallet</p>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-400 text-sm font-mono">0xcc25...37377</p>
                  <button 
                    className="text-green-400 hover:text-green-300 transition-colors p-1.5 rounded-lg hover:bg-green-500/10"
                    onClick={() => navigator.clipboard.writeText('0xcc25y3ydii37377')}
                  >
                    <Copy size={16}/>
                  </button>
                </div>
              </div>
            </div>
            
            <button className="bg-green-500 hover:bg-green-400 py-2 px-6 rounded-xl text-white font-medium transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/30">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-y-3">
        {links.map((item, index) => {
          const Icon = item.icon
          return (
            <Link 
              key={index}
              href={item.link}
              className="block group"
            >
              <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-green-500/10 transition-colors">
                      <Icon className="text-green-400 group-hover:text-green-500" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-green-400 transition-colors">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-green-400 transition-colors" size={20} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Logout Button */}
      <button className="w-full bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-200 group">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-red-500/10 transition-colors">
            <LogOut className="text-gray-400 group-hover:text-red-400" size={20} />
          </div>
          <span className="font-medium text-gray-400 group-hover:text-red-400 transition-colors">Logout</span>
        </div>
      </button>
    </div>
  )
}

export default Menu