import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import RoomsSection from "./Component/RoomSection/RoomSection";
import Services from "./Component/Services/Services";
import Stats from "./Component/Stats/Stats";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";
import MapEmbed from "./Component/Map/Map";
import Footer from "./Component/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rooms">
        <RoomsSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <MapEmbed />
      <Footer />
    </div>
  );
}

export default App;
