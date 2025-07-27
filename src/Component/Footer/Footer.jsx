import React from 'react';

const Footer = () => (
  <footer className="bg-black text-gray-200 py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <div className="text-white font-semibold text-lg mb-2 leading-tight">
          Kingsukh<br />Guest<br />House
        </div>
        <p className="text-gray-400 mb-5 text-sm">
          Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-7 rounded transition duration-200">BOOK NOW</button>
      </div>


      <div>
        <div className="font-semibold text-white text-base mb-2">QUICK LINKS</div>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li>Browse Destinations</li>
          <li>Special Offers & Packages</li>
          <li>Room Types & Amenities</li>
          <li>Customer Reviews & Ratings</li>
          <li>Travel Tips & Guides</li>
        </ul>
      </div>


      <div>
        <div className="font-semibold text-white text-base mb-2">OUR SERVICES</div>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li>Concierge Assistance</li>
          <li>Flexible Booking Options</li>
          <li>Airport Transfers</li>
          <li>Wellness & Recreation</li>
        </ul>
      </div>

      <div>
        <div className="font-semibold text-white text-base mb-2">CONTACT US</div>
        <p className="text-gray-400 text-sm mb-2">
          Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        </p>
        <p className="text-gray-400 text-sm mb-2">kkghosh0099@gmail.com</p>
        <p className="text-gray-400 text-sm mb-3">+91 9007062180</p>
        <div className="flex space-x-3">
          <a href="#" className="text-blue-400 hover:text-blue-600" title="Facebook">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="#" className="text-indigo-500 hover:text-indigo-700" title="Instagram">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-red-500 hover:text-red-700" title="YouTube">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800" title="Twitter">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center text-xs text-gray-500">
      Copyright © 2025 Kingsukh Guest House. All rights reserved.
    </div>
  </footer>
);

export default Footer;
