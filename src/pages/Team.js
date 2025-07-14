import React from 'react';
import TopHeader from '../components/topNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EndFooter from '../components/EndFooter';
import HeroSection from '../components/team/HeroSection';
import Process from '../components/Process';
import  Award  from '../components/Award';
import OurTeam from '../components/team/Ourteam';
import OurBlog from '../components/team/blog';
import Testimonials from '../components/team/testimonials';
const Team = () => {
  return (
    <div>
    <TopHeader/>
    <Navbar/>
    <HeroSection/>  
    <OurTeam/>
    <Process/>
    <Award/>
    <Testimonials/>
    <OurBlog/>
    <Footer/>
    <EndFooter/>
      
    </div>
  );
}

export default Team;
