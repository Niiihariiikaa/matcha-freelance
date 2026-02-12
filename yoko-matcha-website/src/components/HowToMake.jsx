import React from 'react';

import pouch from '../assets/seasalt-yuzu-pouch.png';
import icedCloseup from '../assets/iced-matcha-closeup.png';
import pinkBowl from '../assets/pink-bowl-whisk.png';
import menuBg from '../assets/menu-background.png';

import './HowToMake.css';

const HowToMake = () => {
  return (
    <section className="howto">

      {/* FULL WIDTH POUCH */}
      <div className="howto-pouch">
        <img src={pouch} alt="Matcha pouch" />
      </div>

      {/* IMAGE ROW + FLOATING CARD */}
      <div className="howto-images">

        <img
          src={icedCloseup}
          alt="Iced matcha closeup"
          className="howto-img left"
        />

        <img
          src={pinkBowl}
          alt="Whisking matcha"
          className="howto-img right"
        />

        <div className="howto-card">
          <h2>Try our latest</h2>
          <h3>Classic oat matcha</h3>
          <ul>
            <li>Premium matcha powder</li>
            <li>Oat milk base</li>
            <li>Natural flavours</li>
            <li>No artificial colours</li>
            <li>No weird aftertaste</li>
          </ul>
        </div>

      </div>

      {/* MENU SECTION */}
      <div className="howto-menu">

        <div className="menu-bg">
          <img src={menuBg} alt="Menu background" />
        </div>

        <div className="menu-text">
          <h2>how to make</h2>
          <ol>
            <li>Add 1 scoop to a cup</li>
            <li>Pour hot or cold water</li>
            <li>Stir</li>
            <li>Enjoy</li>
          </ol>
          <p>That’s it.</p>
        </div>

      </div>

    </section>
  );
};

export default HowToMake;
