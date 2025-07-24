import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-white">
        <div>
          <h1 className="text-xl font-semibold text-indigo-700">Kingsukh</h1>
          <p className="text-sm -mt-1">Guest House</p>
        </div>

        <ul className="flex space-x-6 font-medium">
            <li className="hover:text-indigo-700 cursor-pointer">Home</li>
            <li className="hover:text-indigo-700 cursor-pointer">About</li>
            <li className="hover:text-indigo-700 cursor-pointer">Services</li>
            <li className="hover:text-indigo-700 cursor-pointer">Rooms</li>
            <li className="hover:text-indigo-700 cursor-pointer">Gallery</li>
            <li className="hover:text-indigo-700 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded ">
            BOOK NOW
        </button>
        </div>
    </nav>
    )
}

export default Navbar
