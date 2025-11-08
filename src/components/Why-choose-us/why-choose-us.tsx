"use client"

import type React from "react"

import { Award, Handshake, Users, DollarSign } from "lucide-react"

interface Card {
  icon: React.ReactNode
  title: string
  description: string
}

const cards: Card[] = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Unmatched Quality and Reliability",
    description:
      "Every vehicle in our inventory undergoes rigorous inspections to ensure top-notch performance and safety.",
  },
  {
    icon: (
      <div className="relative">
        <Award className="w-12 h-12" />
        <DollarSign className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    ),
    title: "Competitive Pricing",
    description:
      "We offer the best prices in the market, providing great value for your investment without compromising on quality.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Exceptional Customer Service",
    description:
      "Our friendly, knowledgeable team is dedicated to guiding you through every step of the purchasing process.",
  },
  {
    icon: <Handshake className="w-12 h-12" />,
    title: "Flexible Financing Options",
    description:
      "We provide a variety of financing solutions tailored to suit your budget, making vehicle ownership more accessible.",
  },
]

export function WhyChooseUs() {
  return (
    <section
      className="relative w-full h-[450px] py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.wallpapersden.com/image/download/mountains-hill-dark_ZmlqZ26UmZqaraWkpJRpaWtprWdsa2U.jpg)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why choose us to <span className="text-yellow-400">buy your vehicle?</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow min-h-[400px]"
            >
              {/* Icon */}
              <div className="mb-6 text-gray-800">{card.icon}</div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-gray-900 mb-4">{card.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{card.description}</p>

              {/* Yellow Accent Line */}
              <div className="w-12 h-1 bg-yellow-400 mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}