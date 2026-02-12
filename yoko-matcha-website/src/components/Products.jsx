// Products.jsx
import React from 'react';
import pinkDrink from '../assets/pink-layered-drink.png';
import berryDrink from '../assets/berry-layered-drink.png';
import matchaDrink from '../assets/matcha-drink-glass.png';

function Products() {
  const products = [
    {
      name: 'Strawberry Cloud Matcha',
      description: 'Soft strawberry, slow sips, zero rush.',
      image: pinkDrink,
      badge: "Season's special"
    },
    {
      name: 'Midnight berry',
      description: 'Deep berry swirls. Calm, but bold.',
      image: berryDrink
    },
    {
      name: 'Matcha Swirl',
      description: 'Clean. Cold. Effortlessly smooth.',
      image: matchaDrink
    }
  ];

  return (
    <section id="products" className="relative py-24 px-8 overflow-hidden">
      {/* Pink tiled background */}
      <div className="absolute inset-0 bg-[#F4C5C5]">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 150px,
            rgba(255,255,255,0.3) 150px,
            rgba(255,255,255,0.3) 152px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 150px,
            rgba(255,255,255,0.3) 150px,
            rgba(255,255,255,0.3) 152px
          )`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl lg:text-6xl font-paytone text-[#4A5D3F] text-center mb-20">
          Featured
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="relative text-center">
              {product.badge && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-[#FF6B9D] text-white px-6 py-2 rounded-full text-sm font-poppins font-semibold shadow-lg">
                    {product.badge}
                  </span>
                </div>
              )}
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-96 flex items-center justify-center mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-auto object-contain drop-shadow-2xl"
                  />
                </div>
                
                <h3 className="text-2xl font-paytone text-[#4A5D3F] mb-3">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-700 font-poppins">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;