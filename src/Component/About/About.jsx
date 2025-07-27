import React from 'react';
import guesthouseImg from '../../assets/out.jpg';

const About = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 bg-gradient-to-br from-white via-gray-50 to-white p-10 rounded-3xl shadow-xl border border-gray-200">

        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
        >
          <img
            src={guesthouseImg}
            alt="Kingsukh Guest House"
            className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
          />
        </div>

        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p className="text-sm uppercase font-semibold tracking-widest text-indigo-600 mb-3">
            About Us
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-snug text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-800 text-transparent bg-clip-text">
              The Best Holidays Start Here!
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to <strong>Kingsukh Guest House</strong>, your peaceful getaway nestled near Biharinath Hill, Baranti Hill, Joychandi Hill, Maithon Dam and more. Experience nature, comfort, and unforgettable hospitality all in one.
          </p>

          <div className="text-base font-medium text-indigo-800 mb-6 space-y-1">
            <p>📍 Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            <p>📞 Contact us: +91 9007062180</p>
          </div>

          <button
            data-aos="zoom-in"
            data-aos-delay="400"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:brightness-110 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
