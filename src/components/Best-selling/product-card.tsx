import Image from "next/image"
import { MapPin, Calendar, Zap, Package, CheckCircle } from "lucide-react"

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

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative bg-gray-300 h-64 flex items-center justify-center overflow-hidden group">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={350}
          height={300}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Location Badge */}
        <div className="absolute bottom-3 right-3 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {product.location}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Model */}
        <h3 className="font-bold text-gray-900 text-base mb-1">{product.name}</h3>
        <p className="text-xs text-gray-600 mb-4 line-clamp-2">{product.model}</p>

        {/* Specs Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4 pb-4 border-b border-gray-200">
          <div className="text-center">
            <Calendar className="w-4 h-4 text-gray-400 mx-auto mb-1" />
            <p className="text-xs font-medium text-gray-700">{product.year}</p>
          </div>
          <div className="text-center">
            <Zap className="w-4 h-4 text-gray-400 mx-auto mb-1" />
            <p className="text-xs font-medium text-gray-700">{product.capacity}</p>
          </div>
          <div className="text-center">
            <Package className="w-4 h-4 text-gray-400 mx-auto mb-1" />
            <p className="text-xs font-medium text-gray-700">{product.cargoType}</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-4 h-4 text-gray-400 mx-auto mb-1" />
            <p className="text-xs font-medium text-gray-700">{product.availability}</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">EMI Started from</p>
          <p className="text-[24px] font-bold text-yellow-500">
            ₹{product.price.toLocaleString()}
            <span className="text-xs text-gray-600 font-normal">/month</span>
          </p>
        </div>

        {/* See Details Link */}
        <a
          href="/see-details"
          className="text-lg font-semibold text-gray-900 hover:text-yellow-400 transition-colors inline-flex items-center gap-1"
        >
          See details →
        </a>
      </div>
      </div>
    </div>
  )
}
