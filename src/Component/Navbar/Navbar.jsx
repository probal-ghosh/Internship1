import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const menuItems = ["home", "about", "services", "rooms", "gallery", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <div className="cursor-pointer">
          <h1 className="text-xl font-semibold text-indigo-400">Kingsukh</h1>
          <p className="text-sm -mt-1">Guest House</p>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-indigo-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">
            BOOK NOW
          </button>
        </div>

        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-white text-black transition-all duration-300 md:hidden shadow-lg ${
            menuOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={handleLinkClick}
                  className="cursor-pointer hover:text-indigo-600"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
            <button
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white"
              onClick={handleLinkClick}
            >
              BOOK NOW
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
