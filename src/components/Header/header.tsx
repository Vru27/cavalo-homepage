import { Search, MapPin, Phone, ChevronDown, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Truck, Bus, Tractor } from 'lucide-react';
import { MdOutlineElectricRickshaw } from "react-icons/md";
import { GiMineTruck } from "react-icons/gi";


export default function Header() {
  
  
  return (
    <header className="bg-gray-100">
      {/* Main Header */}
      <div className="px-6 py-4 flex justify-between items-center border-b border-black">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Image
            src="/Logo/cavalo-logo.avif"
            alt="logo"
            width={128}
            height={46}
            className="w-32! h-[46px]! object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-1 items-center flex-1 ml-12">
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <Truck /> Truck
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <Bus /> Buses
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <MdOutlineElectricRickshaw size={20} /> 3Wheelers
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <Tractor /> Tractors
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <GiMineTruck size={25} /> Machinery
          </a>

          <div className="flex items-center gap-2 ml-auto">
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
          </div>
        </nav>
      </div>

      {/* Secondary Navigation */}
      <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200 bg-white">
        <nav className="flex items-center gap-8">
          {["New Truck", "Used Truck", "Sell a Truck", "Finance"].map((label) => (
            <button
              key={label}
              className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center gap-1 group"
            >
              {label}
              <ChevronDown
                size={14}
                className="mt-[1px] text-gray-500 group-hover:text-gray-800 transition-transform duration-200 group-hover:rotate-180"
              />
            </button>
          ))}
        </nav>

        {/* Search Bar and Auth Button */}
        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 w-64 px-4 py-2 rounded-full placeholder-gray-700 text-sm focus:outline-none focus:border-yellow-500"
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
