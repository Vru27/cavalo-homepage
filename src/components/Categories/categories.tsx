"use client";

import { Truck } from "lucide-react"
import { useState } from "react"

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState("Trucks")
    const categories = ["Trucks", "Pickup Trucks", "Tipper", "Trailer", "Machinery"]

    return (
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
    )
}