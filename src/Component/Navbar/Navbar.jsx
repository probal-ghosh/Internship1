import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white relative">
        
        {/* Logo */}
        <div>
          <h1 className="text-xl font-semibold text-indigo-700">Kingsukh</h1>
          <p className="text-sm -mt-1">Guest House</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {['Home', 'About', 'Services', 'Rooms', 'Gallery', 'Contact'].map((item) => (
            <li key={item} className="hover:text-indigo-400 cursor-pointer transition duration-200">
              {item}
            </li>
          ))}
        </ul>

        {/* Book Now Button (Desktop only) */}
        <div className="hidden md:block">
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded transition duration-200">
            BOOK NOW
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white text-gray-800 transition-all duration-300 shadow-lg ${
            menuOpen ? 'max-h-screen py-6' : 'max-h-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col items-center gap-4 font-medium">
            {['Home', 'About', 'Services', 'Rooms', 'Gallery', 'Contact'].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-600 transition duration-200"
              >
                {item}
              </li>
            ))}
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded transition duration-200">
              BOOK NOW
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
