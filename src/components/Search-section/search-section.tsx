"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";


export default function SearchSection() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="relative -mt-24 mx-auto max-w-6xl px-6 mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-bold mb-8">
          Search the <span className="text-yellow-500">Right Vehicle</span>
        </h2>

        {/* Search Form */}
        <div className="flex gap-4 items-end">
          {/* Brands Dropdown */}
          <div className="relative min-w-[270px] max-w-[280px]">
            <label
              htmlFor="brand"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-700 font-medium"
            >
              Brands
            </label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-400 focus:border-yellow-500 focus:outline-none"
            >
              <option value="">Select brands</option>
              <option value="tata">Tata</option>
              <option value="ashok">Ashok Leyland</option>
              <option value="mahindra">Mahindra</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Model Dropdown */}
          <div className="relative min-w-[270px] max-w-[280px]">
            <label
              htmlFor="model"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-700 font-medium"
            >
              Model
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-400 focus:border-yellow-500 focus:outline-none"

            >
              <option value="">Select model</option>
              <option value="model1">Model 1</option>
              <option value="model2">Model 2</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* State Dropdown */}
          <div className="relative min-w-[270px] max-w-[280px]">
            <label
              htmlFor="state"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-700 font-medium"
            >
              State
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-400 focus:border-yellow-500 focus:outline-none"
            >
              <option value="">Select States</option>
              <option value="delhi">Delhi</option>
              <option value="punjab">Punjab</option>
              <option value="haryana">Haryana</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Search Button */}
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3.5 h-auto w-45">
            <Search className="w-4 h-4" />
            Search Vehicle
          </Button>
        </div>
      </div>
    </div>
  );
}
