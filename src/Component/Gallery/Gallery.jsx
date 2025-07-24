import React from "react";

const images = [
  "../../assets/baranti.webp",
  "../../assets/large.jpg",
  "../../assets/mithonDam.webp",
  "../../assets/palash.webp",
  "../../assets/service.jpg",
  "../../assets/room1.jpg",
  "../../assets/ayodhya.webp",
];

const Gallery = () => {
  return (
    <section className="py-10 px-4 bg-white" id="gallery">
      <h2 className="text-3xl font-bold text-center mb-4">
        GALLERY <span className="text-red-500">__</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md group">
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
