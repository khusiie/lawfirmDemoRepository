import React from 'react';
import Navbar from '../components/Navbar';
import TopHeader from '../components/topNavbar';
import Footer from '../components/Footer';
import EndFooter from '../components/EndFooter';
import HeroSection from '../components/service/HeroSection';
import LawServicesPage from '../components/service/LawServices';
const service = () => {
  return (
    <div>
         <TopHeader/>
        <Navbar/>
       <HeroSection/>
       <LawServicesPage/>
        <Footer/>
        <EndFooter/>
      
    </div>
  );
}

export default service;
