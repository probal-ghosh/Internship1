import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center'>
            <div className="text-2xl font-bold text-gray-800">
          Kingsukh <span className="text-yellow-500">Guest House</span>
        </div>
            <div className='w-full flex justify-around'>
                <ul className='flex justify-around ml-7 w-full'>
                <li>Home</li>
                <li>About</li>
                <li>services</li>
                <li>Rooms</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
            <span className='bg-indigo-700 text-center mr-5'>Book Now</span>
            </div>

        </nav>
    </div>
  )
}

export default Navbar
