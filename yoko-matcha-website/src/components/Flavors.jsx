import React from 'react';
import './Flavors.css';

import gingerPouch from '../assets/ginger.png';
import vanillaPouch from '../assets/vanilla.png';
import seasaltPouch from '../assets/seasaltpouch.png';

function Flavors() {
  const flavors = [
    {
      name: 'Ginger Spice Matcha',
      description: 'warming, zesty blend of comforting ginger',
      image: gingerPouch,
      imageClass: 'ginger-img'
    },
    {
      name: 'Vanilla Matcha',
      description: 'light sweetness with warm vanilla notes',
      image: vanillaPouch,
      imageClass: 'vanilla-img'
    },
    {
      name: 'Sea Salt Matcha',
      description: 'subtle savoury edge that enhances matcha',
      image: seasaltPouch,
      imageClass: 'seasalt-img'
    }
  ];

  return (
    <section className="flavors-section">
      <h2 className="flavors-title">our flavours</h2>

      <div className="flavors-grid">
        {flavors.map((flavor, index) => (
          <div key={index} className="flavor-card">

            <img
              src={flavor.image}
              alt={flavor.name}
              className={`flavor-image ${flavor.imageClass}`}
            />

            <div className="flavor-circle">
              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Flavors;