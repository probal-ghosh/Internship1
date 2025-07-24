import React from 'react';
import hero from '../../assets/ayodhya.webp';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] sm:h-[600px] md:h-[700px] flex justify-center items-center px-4"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Text */}
      <div
        className="relative z-10 text-center text-white space-y-4"
        data-aos="fade-down"
      >
        <p className="text-sm sm:text-base md:text-lg font-light tracking-wide">
          Simple - Unique - Friendly
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Make Yourself At Home <br />
          In Our <span className="text-indigo-300">Guest House</span>.
        </p>
      </div>

      {/* Floating Button */}
      <div
        className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 w-[90%] max-w-3xl z-20 px-4"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl flex justify-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
