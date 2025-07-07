import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopHeader from '../components/topNavbar';
import EndFooter from '../components/EndFooter';
import HeroSection from '../components/contactus/HeroSection';
import Contactus from '../components/contactus/contactus';
const Contact = () => {
  return (
    <div>


        <TopHeader/>
        <Navbar/>
        <HeroSection/>
        <Contactus/>
        <Footer/>
        <EndFooter/>

      

    </div>
  );
}

export default Contact;
