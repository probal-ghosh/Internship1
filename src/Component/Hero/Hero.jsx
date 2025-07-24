import React from 'react'
import hero from '../../assets/ayodhya.webp'

const Hero = () => {
  return (
    <div className='relative bg-cover bg-center h-[500px] flex justify-center items-center'
    style={{ backgroundImage: `url(${hero})` }}>
    <div className='flex flex-col justify-center items-center'>
        <p className='text-xl'>Simple - Unique - Friendly</p>
      <p className='text-white font-bold text-3xl'>Make Yourself At Home
In Our <span>Guest House</span>.</p>
    </div>
    <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 w-[80%] max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-2xl flex justify-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
