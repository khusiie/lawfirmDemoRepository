import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopNavbar from '../components/topNavbar';
import EndFooter from '../components/EndFooter';
import Abouttestimonial from '../components/Abouttestimonial';
import AboutHeroSec from '../components/AboutHeroSec';
import Aboutaboutus from '../components/Aboutaboutus';
import Aboutexperience from '../components/Aboutexperience';
const Aboutus = () => {

  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <AboutHeroSec/>
      <Aboutaboutus/>
      <Aboutexperience/>
      <Abouttestimonial/>
      <Footer/>
      <EndFooter />
    </div>
  );
}

export default Aboutus;
