"use client"

import { ArrowRight } from "lucide-react"
import { Blog } from "./blog"

interface Product {
    id: number
    name: string
    model: string
    location: string
    year: number
    capacity: string
    cargoType: string
    availability: string
    price: number
    image: string
}

const products: Product[] = [
    {
        id: 1,
        name: "Ashok Leyland",
        model: "Ashok Leyland 1920 4X2 Tipper | ALI92042",
        location: "Trucks",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "https://c8.alamy.com/comp/W5GTWF/truck-driver-standing-at-a-truck-W5GTWF.jpg",
    },
    {
        id: 2,
        name: "Ashok Leyland",
        model: "Ashok Leyland 1920 4X2 Tipper | ALI92042",
        location: "Trucks",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "https://c8.alamy.com/comp/W5GTWF/truck-driver-standing-at-a-truck-W5GTWF.jpg",
    },
    {
        id: 3,
        name: "Ashok Leyland",
        model: "Ashok Leyland 1920 4X2 Tipper | ALI92042",
        location: "Trucks",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "https://c8.alamy.com/comp/W5GTWF/truck-driver-standing-at-a-truck-W5GTWF.jpg",
    },
    {
        id: 4,
        name: "Ashok Leyland",
        model: "Ashok Leyland 1920 4X2 Tipper | ALI92042",
        location: "Trucks",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "https://c8.alamy.com/comp/W5GTWF/truck-driver-standing-at-a-truck-W5GTWF.jpg",
    },
]

export function LatestBlog() {
    return (
        <section className="bg-gray-200 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="relative flex items-center justify-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Latest <span className="text-yellow-400">Blog</span>
                    </h2>

                    <div className="flex items-center">
                        <a
                            href="/see-details"
                            className="flex items-center gap-1 absolute right-0 text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            See All
                            <ArrowRight size={15} />
                        </a>
                    </div>
                </div>

                {/* Products Grid (no scroll) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id}>
                            <Blog product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
