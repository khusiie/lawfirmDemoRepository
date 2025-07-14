// src/pages/Home.js

import React from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import TopNavbar from '../components/topNavbar';
import About from '../components/About';
import EndFooter from '../components/EndFooter';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Team from '../components/Team';
import Award from '../components/Award';

export default function Home() {
  return (
    <div>
      {/* Fixed nav wrapper */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopNavbar />
        <Navbar />
      </div>

      {/* Add top padding to avoid overlap */}
      <div className="pt-[120px] md:pt-53">
        <HeroSection />
        <About />
        <Services />
        <Experience />
        <Process />
        <Award />
        <Team />
        <Pricing />
        <Footer />
        <EndFooter />
      </div>
    </div>
  );
}
