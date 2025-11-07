"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
export default function VehicleTypesSection() {
  const categories = [
    {
      id: 1,
      title: "Commercial Vehicles",
      items: [
        { name: "Box Trucks", code: "5162" },
        { name: "Car transporters", code: "5162" },
        { name: "Dump trucks", code: "5162" },
        { name: "Refrigerated trucks", code: "5162" },
        { name: "Tow trucks", code: "5162" },
      ],
    },
    {
      id: 2,
      title: "Commercial Vehicles",
      items: [
        { name: "Box Trucks", code: "5162" },
        { name: "Car transporters", code: "5162" },
        { name: "Dump trucks", code: "5162" },
        { name: "Refrigerated trucks", code: "5162" },
        { name: "Tow trucks", code: "5162" },
      ],
    },
    {
      id: 3,
      title: "Commercial Vehicles",
      items: [
        { name: "Box Trucks", code: "5162" },
        { name: "Car transporters", code: "5162" },
        { name: "Dump trucks", code: "5162" },
        { name: "Refrigerated trucks", code: "5162" },
        { name: "Tow trucks", code: "5162" },
      ],
    },
    {
      id: 4,
      title: "Commercial Vehicles",
      items: [
        { name: "Box Trucks", code: "5162" },
        { name: "Car transporters", code: "5162" },
        { name: "Dump trucks", code: "5162" },
        { name: "Refrigerated trucks", code: "5162" },
        { name: "Tow trucks", code: "5162" },
      ],
    },
  ]

  return (
    <section className=" bg-gray-200 mt-50 px-20 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Popular vehicle types organized <span className="text-yellow-400">by category</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-md hover:shadow-lg transition-shadow p-6">
            {/* Card Header */}
            <div className="flex items-center gap-2 mb-5">
              <h2 className="text-lg font-bold text-gray-900">{category.title}</h2>
              <Image src="/Icons/truck.png" alt="Truck Icon" width={50} height={50} />
            </div>

            {/* Items List */}
            <div className="space-y-4 mb-6">
              {category.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">{item.name}</span>
                  <span className="text-gray-400 text-sm font-medium">{item.code}</span>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <button className="flex items-center gap-1 text-gray-900 font-medium hover:gap-2 transition-all duration-200">
              View all <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
