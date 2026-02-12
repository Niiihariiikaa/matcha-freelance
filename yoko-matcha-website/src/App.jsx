import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import HowToMake from './components/HowToMake';
import Flavors from './components/Flavors';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

import icedHero from './assets/iced-matcha-hero.png';
import matchaSplash from './assets/matcha powdersplash.png';
import './App.css';

function App() {
  return (
    <div className="App bg-matcha-light min-h-screen overflow-x-hidden">
      
      <Header />

      {/* HERO + ABOUT WRAPPER */}
      <div className="relative min-h-[140vh] overflow-visible">

  {/* HERO */}
  <Hero />

  {/* PAUSE SECTION */}
<section className="relative py-40 px-6 bg-[#E5CAB1] overflow-hidden">

  {/* STRIPE OVERLAY */}
  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(232,207,199,0.25)_0px,rgba(232,207,199,0.25)_35px,rgba(225,194,184,0.25)_35px,rgba(225,194,184,0.25)_70px)] pointer-events-none"></div>

  {/* CONTENT */}
  <div className="max-w-5xl mx-auto relative z-10 pt-64 flex items-start gap-20">
    <p className="text-lg lg:text-xl text-[#3F3F3F] font-poppins leading-relaxed">
      Premium matcha powder blended with plant-based milk and subtle
      flavours — just add water.
      <br />
      10 café-style drinks in one pouch.
    </p>
  </div>

</section>

  {/* FLOATING HERO GLASS (covers both sections) */}
  <img
    src={icedHero}
    alt="Iced matcha hero"
    className="
      absolute
      left-1/2
      top-[60%]
      -translate-x-1/2
      -translate-y-1/2
      z-50
      w-[720px]
      lg:w-[1020px]
      drop-shadow-2xl
      pointer-events-none
    "
  />

  {/* FLOATING MATCHA SPLASH */}
  <img
    src={matchaSplash}
    alt="Matcha splash"
    className="
      absolute
      right-0
      top-[90%]
      -translate-y-1/2
      z-40
      w-[260px]
      lg:w-[720px]
      drop-shadow-2xl
      pointer-events-none
    "
  />

</div>
      <About />

      <Products />
      <HowToMake />
      <Flavors />
      <FAQ />
      <CTA />

    </div>
  );
}

export default App;