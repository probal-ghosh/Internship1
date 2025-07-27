import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { useEffect } from 'react';
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import RoomsSection from './Component/RoomSection/RoomSection';
import Services from './Component/Services/Services';
import Stats from './Component/Stats/Stats';
import Gallery from './Component/Gallery/Gallery';
import Contact from './Component/Contact/Contact';
import MapEmbed from './Component/Map/Map';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once on scroll
    });
  }, []);
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About/>
      <RoomsSection/>
      <Services/>
      <Stats/>
      <Gallery/>
      <Contact/>
      <MapEmbed/>
    </div>
  )
}

export default App
