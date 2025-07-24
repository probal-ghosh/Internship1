import React from 'react';

const Stats = () => {
  return (
    <div className="w-full flex justify-center px-4 py-12">
      <div className="bg-white shadow-xl rounded-xl flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl py-10 px-8 gap-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900">100+</h3>
          <p className="text-gray-500 mt-1">Bookings Completed</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900">150+</h3>
          <p className="text-gray-500 mt-1">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
