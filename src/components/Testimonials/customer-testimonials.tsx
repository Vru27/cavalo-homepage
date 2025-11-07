'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
  hasVideo?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Manish Thukral',
    location: 'Gujrat',
    text: 'I had a great experience buying a second-hand truck from this website. The website provided lots of helpful information about each truck, and I was able to find one that was exactly what I needed. The buying process was easy and the website helped me arrange the delivery of my new truck. Surely recommended!',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    hasVideo: true
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    text: 'Outstanding service and great selection of vehicles. The team was professional and helped me find the perfect truck for my business needs. The entire process was smooth and hassle-free.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    hasVideo: false
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'Very satisfied with my purchase! The vehicle quality exceeded my expectations and the pricing was competitive. The customer support team was always available to answer my questions.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    hasVideo: false
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#1a1a1a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Customer <span className="text-[#f59e0b]">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What our happy customers have to say about us!
          </p>
        </div>

        {/* Testimonial Card with Navigation */}
        <div className="relative max-w-6xl mx-auto px-16">
          {/* Navigation Buttons - Outside */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-[#2a2a2a] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-white order-2 md:order-1">
                <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                  {currentTestimonial.text}
                </p>
                <div>
                  <h3 className="text-[#f59e0b] text-2xl font-bold mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 md:order-2">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-[300px] md:h-[350px] object-cover"
                  />
                  {currentTestimonial.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all w-16 h-16 rounded-full flex items-center justify-center shadow-lg group">
                        <Play className="w-8 h-8 text-gray-800 ml-1 fill-gray-800" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#f59e0b] w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}