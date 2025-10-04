"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <span className="text-white font-black text-2xl">CL</span>
            </div>
            <div>
              <span className="text-white text-3xl font-black tracking-tight">CAR</span>
              <span className="text-blue-500 text-3xl font-black">LUXE</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white font-semibold hover:text-blue-400 transition">Home</Link>
            <Link href="/inventory" className="text-gray-300 font-semibold hover:text-blue-400 transition">Inventory</Link>
            <Link href="/sell" className="text-gray-300 font-semibold hover:text-blue-400 transition">Sell</Link>
            <Link href="/finance" className="text-gray-300 font-semibold hover:text-blue-400 transition">Finance</Link>
            <Link href="/get-started">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold">
                Get Started
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-blue-900/30">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-white font-semibold hover:text-blue-400 transition">Home</Link>
            <Link href="/inventory" className="block text-gray-300 font-semibold hover:text-blue-400 transition">Inventory</Link>
            <Link href="/sell" className="block text-gray-300 font-semibold hover:text-blue-400 transition">Sell</Link>
            <Link href="/finance" className="block text-gray-300 font-semibold hover:text-blue-400 transition">Finance</Link>
            <Link href="/get-started" className="w-full block">
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-bold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
