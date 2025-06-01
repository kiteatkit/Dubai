'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#050506]/95 backdrop-blur-sm z-50 shadow-sm border-b border-[#A58A5E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#A58A5E]">Rush Hour</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#EBEBED] hover:text-[#A58A5E] transition-colors">
              Home
            </Link>
            <Link href="/team" className="text-[#EBEBED] hover:text-[#A58A5E] transition-colors">
              Meet Our Team
            </Link>
            <Link href="/listings" className="text-[#EBEBED] hover:text-[#A58A5E] transition-colors">
              Listings
            </Link>
            <Link href="/news" className="text-[#EBEBED] hover:text-[#A58A5E] transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-[#EBEBED] hover:text-[#A58A5E] transition-colors">
              Contact Us
            </Link>
            <Link
              href="/login"
              className="bg-[#A58A5E] text-[#EBEBED] px-4 py-2 rounded-lg hover:bg-[#8B6F4A] transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#EBEBED] hover:text-[#A58A5E] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050506] border-t border-[#A58A5E]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-[#EBEBED] hover:text-[#A58A5E]">
              Home
            </Link>
            <Link href="/team" className="block px-3 py-2 text-[#EBEBED] hover:text-[#A58A5E]">
              Meet Our Team
            </Link>
            <Link href="/listings" className="block px-3 py-2 text-[#EBEBED] hover:text-[#A58A5E]">
              Listings
            </Link>
            <Link href="/news" className="block px-3 py-2 text-[#EBEBED] hover:text-[#A58A5E]">
              News
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-[#EBEBED] hover:text-[#A58A5E]">
              Contact Us
            </Link>
            <Link
              href="/login"
              className="block w-full mt-4 bg-[#A58A5E] text-[#EBEBED] px-4 py-2 rounded-lg hover:bg-[#8B6F4A] text-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 