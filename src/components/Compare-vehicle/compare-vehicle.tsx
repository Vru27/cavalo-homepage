"use client"
import { useState } from "react"
import { Truck } from 'lucide-react';
import { VehicleComparison } from "./compare-section";

export default function CompareVehicle() {
    const [activeCategory, setActiveCategory] = useState("Trucks")
    const categories = ["Trucks", "Pickup Trucks", "Tipper", "Trailer", "Machinery"]

    return (
        <section className="bg-gray-200 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="relative flex items-center justify-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Compare <span className="text-yellow-400">Vehicle</span>
                    </h2>
                </div>
                {/* Category Tabs */}
                <div className="flex justify-around mb-8 pb-2 mt-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`flex gap-2 items-center justify-center px-6 py-3 rounded-full transition-all duration-300 
        ${activeCategory === category
                                    ? "bg-gray-900 text-white shadow-md"
                                    : "text-gray-700 hover:bg-gray-900 hover:text-white"
                                }`}
                        >
                            <Truck
                                size={22}
                                className={`mb-1 transition-colors $? "text-white"
        : "text-gray-700 group-hover:text-white"
                                    }`}
                            />
                            <span className="text-sm font-medium">{category}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Compare Section */}

            <div className="flex justify-center">
                <VehicleComparison
                    vehicle1={{
                        name: "Ashok Leyland",
                        model: "Ashok Leyland ALI92042",
                        image: "/Trucks/truck3.avif",
                        year: 2020,
                        capacity: "12 Ton",
                        cargoType: "Cargo",
                        priceRange: "₹16.28 - 16.38 lakh"
                    }}
                    vehicle2={{
                        name: "Ashok Leyland",
                        model: "Ashok Leyland ALI92042",
                        image: "/Trucks/truck4.avif",
                        year: 2020,
                        capacity: "12 Ton",
                        cargoType: "Cargo",
                        priceRange: "₹16.28 - 16.38 lakh"
                    }}
                />
                <VehicleComparison
                    vehicle1={{
                        name: "Ashok Leyland",
                        model: "Ashok Leyland ALI92042",
                        image: "/Trucks/truck3.avif",
                        year: 2020,
                        capacity: "12 Ton",
                        cargoType: "Cargo",
                        priceRange: "₹16.28 - 16.38 lakh"
                    }}
                    vehicle2={{
                        name: "Ashok Leyland",
                        model: "Ashok Leyland ALI92042",
                        image: "/Trucks/truck2.avif",
                        year: 2020,
                        capacity: "12 Ton",
                        cargoType: "Cargo",
                        priceRange: "₹16.28 - 16.38 lakh"
                    }}
                />
                <VehicleComparison
                    vehicle1={{
                        name: "Ashok Leyland",
                        model: "Ashok Leyland ALI92042",
                        image: "/Trucks/truck1.avif",
                        year: 2020,
                        capacity: "12 Ton",
                        cargoType: "Cargo",
                        priceRange: "₹16.28 - 16.38 lakh"
                    }}
                    vehicle2={{
                        name: "Ashok Leyland",
                        model: "Ashok Leyland ALI92042",
                        image: "/Trucks/truck3.avif",
                        year: 2020,
                        capacity: "12 Ton",
                        cargoType: "Cargo",
                        priceRange: "₹16.28 - 16.38 lakh"
                    }}
                />
            </div>
        </section>
    )
}