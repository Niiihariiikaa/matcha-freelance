// Hero.jsx
import React from 'react';
import heroBg from '../assets/Hero-matcha.png';
import icedMatcha from '../assets/iced-matcha.png';
import matchaSplash from '../assets/matcha powdersplash.png';

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background image - the forest/matcha field */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10 w-full">
        {/* Title - centered at top */}
        <div className="text-center mb-20">
          
        </div>

        {/* Iced matcha glass - centered */}
        
      </div>

      {/* Matcha powder splash - positioned at right side */}
      

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;