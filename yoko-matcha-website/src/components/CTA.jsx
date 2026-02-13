// CTA.jsx
import React from 'react';
import productLineup from '../assets/branding.png';

function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-[#E8D5C4] to-[#D4C0AE]  px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-18 top-0">
          <img 
            src={productLineup} 
            alt="Yoko product lineup" 
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-5xl lg:text-7xl font-paytone text-[#4A5D3F] mb-12 leading-tight py-8">
          bring yokō into your everyday routine
        </h2>
        
        <button className="bg-[#6B8E4E] text-white font-poppins font-semibold text-xl px-16 py-5 rounded-full hover:bg-[#5A7A3F] transition-all duration-300 transform hover:scale-105 shadow-xl mb-16">
          Shop now
        </button>

        {/* Product lineup image */}
        
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 font-poppins">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="text-3xl font-paytone text-[#4A5D3F]">yoko</span>
        </div>
        <p className="mb-4 text-sm">© 2026 Yokō Matcha. Premium instant matcha for modern life.</p>
        <div className="flex justify-center gap-8 text-sm">
          <a href="#" className="hover:text-[#6B8E4E] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#6B8E4E] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#6B8E4E] transition-colors">Contact</a>
        </div>
      </footer>
    </section>
  );
}

export default CTA;
