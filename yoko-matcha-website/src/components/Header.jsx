// Header.jsx
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-6 left-0 w-full z-50 px-6">
      <nav
        className="
          max-w-8xl mx-auto px-8 py-4 
          flex justify-between items-center
          bg-black/20 backdrop-blur-xl
          rounded-3xl shadow-lg
        
        "
      >
        {/* Logo */}
        <div className="text-3xl font-paytone text-[#7EA400] drop-shadow-md">
          Yokō
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center font-poppins text-lg">
          <li>
            <a href="#about" className="text-white hover:text-[#97a046] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="text-white hover:text-[#97a046] transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#flavors" className="text-white hover:text-[#97a046] transition-colors">
              Flavors
            </a>
          </li>
          <li>
            <a href="#faq" className="text-white hover:text-[#97a046] transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <button
              className="
                bg-[#f69592] text-white 
                px-6 py-2 rounded-full 
                shadow-md hover:opacity-90 
                transition-all duration-200
              "
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#97a046]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden mt-4 mx-6 bg-white/50 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30">
          <ul className="px-6 py-6 space-y-4 font-poppins text-lg">
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#flavors">Flavors</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact" className="text-[#f69592] font-semibold">Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;