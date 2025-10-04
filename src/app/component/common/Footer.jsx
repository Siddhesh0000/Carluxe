"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-900/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">CL</span>
              </div>
              <div>
                <span className="text-white text-xl font-black">CAR</span>
                <span className="text-blue-500 text-xl font-black">LUXE</span>
              </div>
            </div>
            <p className="text-gray-400">Your trusted partner in luxury automotive excellence.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/inventory" className="hover:text-blue-400 transition">Inventory</Link></li>
              <li><Link href="/finance" className="hover:text-blue-400 transition">Finance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <p className="text-gray-400 mb-4">Follow us on social media</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition">
                <span className="text-white font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition">
                <span className="text-white font-bold">ig</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900/30 pt-8 text-center">
          <p className="text-gray-500">© 2025 CarLuxe. All rights reserved. | Designed with passion for automotive excellence</p>
        </div>
      </div>
    </footer>
  );
}
