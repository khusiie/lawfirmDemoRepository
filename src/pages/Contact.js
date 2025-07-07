import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopHeader from '../components/topNavbar';
import EndFooter from '../components/EndFooter';
import HeroSection from '../components/contactus/HeroSection';
import Contactus from '../components/contactus/contactus';
import Testimonials from '../components/Abouttestimonial';
import BandSec from '../components/contactus/bandSec';
const Contact = () => {
  return (
    <div>


        <TopHeader/>
        <Navbar/>
        <HeroSection/>
        <Contactus/>
        <BandSec/>
        <Testimonials/>
        <Footer/>
        <EndFooter/>
        
      

    </div>
  );
}

export default Contact;
