import { Search, MapPin, Phone, ChevronDown, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">
      {/* Main Header */}
      <div className="px-6 py-4 flex justify-between items-center border-b border-black">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Image
            src="/Logo/cavalo-logo.jpeg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 items-center flex-1 ml-12">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500"
          >
            <span className="text-xl">🚛</span> Truck
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500"
          >
            <span className="text-xl">🚌</span> Buses
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500"
          >
            <span className="text-xl">🛺</span> 3Wheelers
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500"
          >
            <span className="text-xl">🚜</span> Tractors
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-500"
          >
            <span className="text-xl">⚙️</span> Machinery
          </a>

          <label className="flex items-center gap-2 cursor-pointer text-gray-700 border border-gray-400 rounded-full px-3 py-1 font-medium hover:text-yellow-500 ml-auto">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Delhi NCR</span>
            <ChevronDown className="w-4 h-4" />
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 border border-gray-400 rounded-full px-3 py-1 font-medium hover:text-yellow-500">
            <Languages className="w-4 h-4" />
            <span className="text-sm">English</span>
            <ChevronDown className="w-4 h-4" />
          </label>
          <div className="flex items-center gap-2 text-gray-700 border border-gray-400 rounded-full px-3 py-1 font-medium hover:text-yellow-500">
            <Phone className="w-4 h-4" />
            <span className="text-sm">24/7 Support</span>
          </div>
        </nav>
      </div>

      {/* Secondary Navigation */}
      <div className="border-t border-gray-200 px-6 py-3 flex gap-8 items-center">
        <nav className="flex items-center gap-8">
          <button className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center gap-1">
            New Truck
            <ChevronDown size={14} />
          </button>
          <button className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center gap-1">
            Used Truck
            <ChevronDown size={14} />
          </button>
          <button className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center gap-1">
            Sell a Truck
            <ChevronDown size={14} />
          </button>
          <button className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center gap-1">
            Finance
            <ChevronDown size={14} />
          </button>
        </nav>

        {/* Search Bar and Auth Button */}
        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 px-4 py-2 rounded-full placeholder-gray-700 text-sm focus:outline-none focus:border-yellow-500"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-700" />
          </div>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold whitespace-nowrap">
            Login / Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
