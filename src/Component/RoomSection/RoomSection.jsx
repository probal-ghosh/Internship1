import React from 'react';
import room1 from '../../assets/room1.jpg';
import room2 from '../../assets/small.jpg';

const RoomCard = ({ image, title, description, price }) => (
  <div
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="px-5 py-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
      <p className="mt-2 text-gray-700 text-sm">
        Starting from <span className="font-semibold">Rs. {price}/night</span>
      </p>
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
        BOOK NOW
      </button>
    </div>
  </div>
);

const RoomsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="uppercase tracking-wider text-sm text-gray-600 relative inline-block after:block after:w-10 after:h-0.5 after:bg-indigo-500 after:mt-1 after:mx-auto">
          Our Living Room
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          The Most Memorable Rest Time Starts Here.
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <RoomCard
          image={room1}
          title="Cozy Haven Room"
          description="Escape to comfort in our Cozy Haven Room, a snug retreat thoughtfully designed for intimate relaxation. Whether you're seeking a peaceful night's sleep or a quiet moment away from the bustle."
          price="1000"
        />
        <RoomCard
          image={room2}
          title="Spacious Serenity Suite"
          description="Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance."
          price="1500"
        />
      </div>
    </section>
  );
};

export default RoomsSection;
