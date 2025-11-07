'use client';

import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
    product: {
        id: number;
        name: string;
        model: string;
        location: string;
        year: number;
        capacity: string;
        cargoType: string;
        availability: string;
        price: number;
        image: string;
    };
}

export function Blog({ product }: BlogCardProps) {
    return (
        <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            {/* Image */}
            <div className="relative h-64">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded">
                    {product.location}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center mb-3">
                    {/* Left side - Date */}
                    <div className="flex flex-col items-center pr-4 border-r-2 border-gray-200">
                        <span className="text-5xl font-bold text-[#f59e0b] leading-none">28</span>
                        <span className="text-[#f59e0b] font-bold text-sm">May</span>
                    </div>

                    {/* Right side - Title */}
                    <h3 className="pl-4 text-xl font-bold text-gray-900">
                        Lorem Ipsum is simply dummy text
                    </h3>
                </div>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...
                </p>

                {/* Read More Link */}
                <a
                    href="/see-details"
                    className="inline-flex items-center gap-2 text-[#f59e0b] font-semibold hover:gap-3 transition-all"
                >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </article>
    );
}