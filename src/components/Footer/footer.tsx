'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#2d2d2d] text-white">
        {/* Newsletter Section */}
        <div className="bg-[#3a3a3a] py-4 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-white" />
              <div>
                <h3 className="font-bold text-lg">JOIN OUR NEWSLETTER</h3>
                <p className="text-sm text-gray-300">Get Exclusive Offers and News</p>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 md:w-80 px-4 py-2 rounded bg-white text-black placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gray-500"
              />
              <button className="bg-[#3a3a3a] text-white border border-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-white font-semibold px-6 py-2 rounded transition-colors whitespace-nowrap">
                SUBSCRIBE →
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Cavalo Logo and Description */}
            <div className="lg:col-span-1">
              <div className="bg-[#f59e0b] inline-block px-4 py-3 rounded mb-4">
                <Image src="/Logo/cavalo-logo.avif" alt="Logo" width={100} height={100}/>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Welcome to Cavalo, your go-to platform for buying and selling refurbished trucks. Find or sell trucks easily with our user-friendly site. Whether you're experienced or new, Cavalo makes it simple.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#f59e0b] font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Finance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-[#f59e0b] font-bold text-lg mb-4">Category</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Trucks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">3 Wheelers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tractors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cars</a></li>
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h3 className="text-[#f59e0b] font-bold text-lg mb-4">Other Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Become a Partner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RC Transfer Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vehicle Requirement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">EMI Calculator</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-[#f59e0b] font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 70303 70466</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@cavalo.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Location</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#f59e0b] hover:bg-[#d97706] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
}