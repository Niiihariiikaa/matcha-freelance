// About.jsx
import React from 'react';
import whiskingMatcha from '../assets/whisking matcha.png';

function About() {
  return (
    <section className="relative pt-26 pb-40 px-6 bg-[repeating-linear-gradient(
90deg,
#E8CFC7 0px,
#E8CFC7 35px,
#E1C2B8 35px,
#E1C2B8 70px
)]">
      <div className="relative max-w-6xl mx-auto bg-[#E3C3B7] rounded-[48px] px-10 pt-40 pb-24 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
        {/* Top image – attached to card */}
        <div className="absolute -top-[0px] left-1/2 -translate-x-1/2 z-10">
          <img
            src={whiskingMatcha}
            alt="Whisking matcha"
            className="max-w-1020 w-[320px] lg:w-[920px] h-auto"
          />
        </div>

        {/* Text content */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-paytone text-[#F6E7A6] mt-5 mb-10">
            About us
          </h2>

          <div className="space-y-6 text-base lg:text-lg text-[#3F3F3F] font-poppins leading-relaxed">
            <p>
              Yokō was created for people who love matcha – but don’t always have
              the time to make it the traditional way.
            </p>
            <p>
              We wanted something that tasted good every single time.
            </p>
            <p>
              Something smooth, comforting, and easy to come back to.
            </p>
            <p>
              So we made matcha that fits into your routine, not the other way
              around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
