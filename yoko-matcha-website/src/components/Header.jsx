// Header.jsx
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-paytone text-[#2E7D32]">
          Yokō
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center font-poppins text-lg">
          <li><a href="#about" className="text-gray-700 hover:text-[#2E7D32] transition-colors">About</a></li>
          <li><a href="#products" className="text-gray-700 hover:text-[#2E7D32] transition-colors">Products</a></li>
          <li><a href="#flavors" className="text-gray-700 hover:text-[#2E7D32] transition-colors">Flavors</a></li>
          <li><a href="#faq" className="text-gray-700 hover:text-[#2E7D32] transition-colors">FAQ</a></li>
          <li>
            <button className="bg-[#2E7D32] text-white px-6 py-2 rounded-full hover:bg-[#1B5E20] transition-colors">
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#2E7D32]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="px-8 py-4 space-y-4 font-poppins">
            <li><a href="#about" className="block text-gray-700 hover:text-[#2E7D32]">About</a></li>
            <li><a href="#products" className="block text-gray-700 hover:text-[#2E7D32]">Products</a></li>
            <li><a href="#flavors" className="block text-gray-700 hover:text-[#2E7D32]">Flavors</a></li>
            <li><a href="#faq" className="block text-gray-700 hover:text-[#2E7D32]">FAQ</a></li>
            <li><a href="#contact" className="block text-[#2E7D32] font-semibold">Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;