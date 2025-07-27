import React from "react";

const MapEmbed = () => (
  <div className="w-full max-w-3xl mx-auto my-8 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden">

    <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800">📍 Kingsukh Guest House Location</h2>
    </div>

    <div className="aspect-video relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1753595776233!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0 rounded-b-xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kingsukh Guest House Map"
      ></iframe>
    </div>

    <div className="bg-gray-50 px-4 py-2 border-t border-gray-300 flex justify-between items-center">
      <span className="text-sm text-gray-600">View on Google Maps</span>
      <a
        href="https://maps.app.goo.gl/8fRqrQL8Hs8yxAja9"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        Open Map →
      </a>
    </div>
  </div>
);

export default MapEmbed;
