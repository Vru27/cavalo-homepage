"use client"

import Image from "next/image"
import { Calendar, Zap, Package, ArrowRight } from "lucide-react"
import Link from "next/link"
interface Vehicle {
  name: string
  model: string
  image: string
  year: number
  capacity: string
  cargoType: string
  priceRange: string
}

interface VehicleComparisonProps {
  vehicle1: Vehicle
  vehicle2: Vehicle
}

export function VehicleComparison({ vehicle1, vehicle2 }: VehicleComparisonProps) {
  return (
    <div className="md:px-2 w-full inline-block">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Image Comparison Section */}
        <div className="relative grid grid-cols-2 items-center bg-gray-200 py-8">
          {/* Vehicle 1 Image */}
          <div className="flex justify-center px-4">
            <Image
              src={vehicle1.image}
              alt={`${vehicle1.name} ${vehicle1.model} image`}
              width={180}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          {/* Dashed Divider Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-300 -translate-x-1/2"></div>

          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-yellow-400 text-white font-bold text-sm w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              VS
            </div>
          </div>

          {/* Vehicle 2 Image */}
          <div className="flex justify-center px-4">
            <Image
              src={vehicle2.image}
              alt={`${vehicle2.name} ${vehicle2.model} image`}
              width={180}
              height={120}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Vehicle Details Section */}
        <div className="grid grid-cols-2 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 -translate-x-1/2"></div>
          {/* Vehicle 1 Details */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {vehicle1.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {vehicle1.model}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200">
              <div className="text-center">
                <Calendar className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">{vehicle1.year}</p>
              </div>
              <div className="text-center">
                <Zap className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">{vehicle1.capacity}</p>
              </div>
              <div className="text-center">
                <Package className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">{vehicle1.cargoType}</p>
              </div>
            </div>

            {/* Price */}
            <p className="text-lg font-bold text-gray-900 mb-3">
              {vehicle1.priceRange}
            </p>

            {/* Compare Button */}
            <Link href="/compare-vehicle" passHref>
            <button className="flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold text-sm transition-colors">
              Compare Vehicle
              <ArrowRight className="w-4 h-4" />
            </button>
            </Link>
          </div>

          {/* Vehicle 2 Details */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {vehicle2.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {vehicle2.model}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200">
              <div className="text-center">
                <Calendar className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">{vehicle2.year}</p>
              </div>
              <div className="text-center">
                <Zap className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">{vehicle2.capacity}</p>
              </div>
              <div className="text-center">
                <Package className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">{vehicle2.cargoType}</p>
              </div>
            </div>

            {/* Price */}
            <p className="text-lg font-bold text-gray-900 mb-3">
              {vehicle2.priceRange}
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
