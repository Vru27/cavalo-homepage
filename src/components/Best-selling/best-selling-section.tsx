"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { ProductCard } from "./product-card"
import Categories from "../Categories/categories";

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
        location: "Mumbai",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "/Trucks/truck1.avif",
    },
    {
        id: 2,
        name: "Ashok Leyland",
        model: "Ashok Leyland 1920 4X2 Tipper | ALI92042",
        location: "Mumbai",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "/Trucks/truck2.avif",
    },
    {
        id: 3,
        name: "Ashok Leyland",
        model: "Ashok Leyland 1920 4X2 Tipper | ALI92042",
        location: "Mumbai",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "/Trucks/truck3.avif",
    },
    {
        id: 4,
        name: "Ashok Leyland",
        model: "Ashok Leyland 1920 4X2 Tipper | ALI92042",
        location: "Mumbai",
        year: 2020,
        capacity: "12 Ton",
        cargoType: "Cargo",
        availability: "Available",
        price: 15000,
        image: "/Trucks/truck4.avif",
    },
]

export function BestSellingSection() {
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        checkScroll()
        window.addEventListener("resize", checkScroll)
        return () => window.removeEventListener("resize", checkScroll)
    }, [])

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
            setTimeout(checkScroll, 300)
        }
    }

    return (
        <section className="bg-gray-200 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="relative flex items-center justify-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Best <span className="text-yellow-400">Selling</span>
                    </h2>

                    <div className="flex items-center">
                        <a
                            href="#"
                            className="flex items-center gap-1 absolute right-0 text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            See All
                            <ArrowRight size={15} />
                        </a>
                    </div>
                </div>

                {/* Category Tabs */}
                <Categories />

                {/* Products Carousel */}
                <div className="relative group">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-6 overflow-x-auto scroll-smooth"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {products.map((product) => (
                            <div key={product.id} className="shrink-0 w-80">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>
        </section>
    )
}
