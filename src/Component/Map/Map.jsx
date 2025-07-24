import React from 'react';

const GoogleMapIframe = () => {
  return (
    <div className="w-full h-[400px] mt-10 rounded-xl overflow-hidden shadow-lg border border-gray-300">
      <iframe
        title="Kingsukh Guest House Map"
        src="https://maps.app.goo.gl/7ZaYkFhHFerYS3AC9"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapIframe;
