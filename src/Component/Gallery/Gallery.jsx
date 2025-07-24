import React from "react";
import Slider from "react-slick";

import img1 from "../../assets/baranti.webp";
import img2 from "../../assets/large.jpg";
import img3 from "../../assets/mithonDam.webp";
import img4 from "../../assets/palash.webp";
import img5 from "../../assets/service.jpg";
import img6 from "../../assets/room1.jpg";
import img7 from "../../assets/ayodhya.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 px-4 bg-white" id="gallery">
      <h2 className="text-3xl font-bold text-center mb-6">
        GALLERY 
      </h2>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={src}
                  alt={`gallery-${index}`}
                  className="w-full h-64 object-cover transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
