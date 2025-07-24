import React from 'react';
import guesthouseImg from '../../assets/out.jpg';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Image with fade-up */}
        <img
          src={guesthouseImg}
          alt="Kingsukh Guest House"
          className="rounded-2xl shadow-xl mx-auto mb-10 w-full max-h-[500px] object-cover"
          data-aos="fade-up"
        />

        {/* Heading and text with fade */}
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-sm uppercase tracking-wider text-pink-600 font-semibold mb-2">
            About Us
          </p>
          <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
            The Best Holidays Start Here!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Escape to tranquility at <strong>Kingsukh Guest House</strong>, nestled amidst the scenic charm of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the enchanting Panchat Dam.
            Enjoy lush green surroundings, savor delicious local cuisine, and embrace unmatched hospitality in a peaceful garden setting.
          </p>
        </div>

        {/* Address block with fade-in and delay */}
        <div className="mb-6 text-blue-800 font-semibold" data-aos="fade-up" data-aos-delay="400">
          <p>
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </p>
          <p>
            Contact us: +91 9007062180
          </p>
        </div>

        {/* Button with zoom-in effect */}
        <div data-aos="zoom-in" data-aos-delay="600">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
