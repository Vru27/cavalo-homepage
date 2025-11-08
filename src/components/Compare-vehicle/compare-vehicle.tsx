"use client"
import { useState } from "react"
import { VehicleComparison } from "./compare-section";
import Categories from "../Categories/categories";

export default function CompareVehicle() {

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
                <Categories />
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