"use client";
import { Search, MapPin, Phone, ChevronDown, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Truck, Bus, Tractor } from 'lucide-react';
import { MdOutlineElectricRickshaw } from "react-icons/md";
import { GiMineTruck } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Header() {
  const locations = [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Pune',
    'Ahmedabad'
  ];

  const languages = [
    'English',
    'Hindi',
    'Tamil',
    'Telugu',
    'Marathi',
    'Gujarati',
    'Kannada',
    'Malayalam'
  ];

  const [selectedLocation, setSelectedLocation] = useState('Delhi NCR');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const locationRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSupportClick = () => {
    // Open phone dialer or show contact modal
    window.location.href = 'tel:+917030370466';
  };

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
            href="/trucks"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <Truck /> Truck
          </a>
          <a
            href="/buses"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <Bus /> Buses
          </a>
          <a
            href="/3wheelers"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <MdOutlineElectricRickshaw size={20} /> 3Wheelers
          </a>
          <a
            href="/tractors"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <Tractor /> Tractors
          </a>
          <a
            href="/machinery"
            className="flex items-center gap-1 text-gray-700 font-medium hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <GiMineTruck size={25} /> Machinery
          </a>

          <div className="flex items-center gap-2 ml-auto">
            <div ref={locationRef} className="relative">
              <button
                onClick={() => {
                  setIsLocationOpen(!isLocationOpen);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center gap-2 cursor-pointer text-gray-700 border border-gray-400 rounded-full px-3 py-1 font-medium hover:bg-gray-200 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{selectedLocation}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLocationOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white border border-gray-300 rounded-lg shadow-lg py-2 w-48 z-50">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setIsLocationOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${selectedLocation === location ? 'bg-gray-100 font-semibold text-[#f59e0b]' : 'text-gray-700'
                        }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div ref={languageRef} className="relative">
              <button
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsLocationOpen(false);
                }}
                className="flex items-center gap-2 cursor-pointer text-gray-700 border border-gray-400 rounded-full px-3 py-1 font-medium hover:bg-gray-200 transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm">{selectedLanguage}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white border border-gray-300 rounded-lg shadow-lg py-2 w-48 z-50">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        setSelectedLanguage(language);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${selectedLanguage === language ? 'bg-gray-100 font-semibold text-[#f59e0b]' : 'text-gray-700'
                        }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleSupportClick}
              className="flex items-center gap-2 cursor-pointer text-gray-700 border border-gray-400 rounded-full px-3 py-1 font-medium hover:bg-gray-200 transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span className="text-sm">24/7 Support</span>
            </button>
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
                className="mt-px text-gray-500 group-hover:text-gray-800 transition-transform duration-200 group-hover:rotate-180"
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
              className="focus:placeholder-transparent bg-gray-100 w-64 px-4 py-2 rounded-full placeholder-gray-700 text-sm focus:outline-none focus:border-yellow-500"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-700" />
          </div>
          <Link href="/signup" passHref>
          <Button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold whitespace-nowrap">
            Login / Sign up
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
