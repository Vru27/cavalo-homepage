import { Search, MapPin, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">

      {/* Main Header */}
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <span className="text-yellow-500">CAVALO</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 items-center flex-1 ml-12">
          <a href="#" className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500">
            <span className="text-xl">🚛</span> Truck
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500">
            <span className="text-xl">🚌</span> Buses
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500">
            <span className="text-xl">🛺</span> 3Wheelers
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500">
            <span className="text-xl">🚜</span> Tractors
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500">
            <span className="text-xl">⚙️</span> Machinery
          </a>

          <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium hover:text-yellow-500 ml-auto">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Delhi NCR</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium hover:text-yellow-500">
            <Globe className="w-4 h-4" />
            <span className="text-sm">English</span>
          </label>
          <div className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500">
            <Phone className="w-4 h-4" />
            <span className="text-sm">24/7 Support</span>
          </div>
        </nav>
      </div>

      {/* Secondary Navigation */}
      <div className="border-t border-gray-200 px-6 py-3 flex gap-8 items-center">
        <a href="#" className="text-gray-700 font-medium hover:text-yellow-500">
          New Truck
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-yellow-500">
          Used Truck
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-yellow-500">
          Sell a Truck
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-yellow-500">
          Finance
        </a>

        {/* Search Bar and Auth Button */}
        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-yellow-500"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold whitespace-nowrap">
            Login / Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}
