import React from 'react';
import { FaShieldAlt, FaUtensils, FaMapMarkedAlt } from 'react-icons/fa';
import {Ri24HoursLine } from 'react-icons/ri';
import servicesImage from '../../assets/palash.webp';

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src={servicesImage}
          alt="Scenic view"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
        <p className="text-indigo-600 tracking-wide uppercase font-semibold mb-2">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
          Strive Only For The Best.
        </h2>
        <p className="text-gray-600 mb-6">
          At our property, we go beyond the basics to offer unmatched comfort, convenience, and care.
          Whether you're here to relax or explore, our premium services are designed to elevate every moment of your stay.
        </p>

        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaShieldAlt className="text-blue-500 text-xl" />
            </div>
            <span className="text-lg font-medium text-gray-700">High Class Security</span>
          </li>

          <li className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Ri24HoursLine  className="text-indigo-500 text-xl" />
            </div>
            <span className="text-lg font-medium text-gray-700">24 Hours Room Service</span>
          </li>

          <li className="flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaUtensils className="text-purple-500 text-xl" />
            </div>
            <span className="text-lg font-medium text-gray-700">In-House Restaurant</span>
          </li>

          <li className="flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-full">
              <FaMapMarkedAlt className="text-red-500 text-xl" />
            </div>
            <span className="text-lg font-medium text-gray-700">Tourist Guide Support</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
