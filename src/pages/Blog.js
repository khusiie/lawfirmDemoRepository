import React from 'react';
import TopHeader from '../components/topNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EndFooter from '../components/EndFooter';
import HeroSection from '../components/blog/HeroSection';
const Blog = () => {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <HeroSection/>
      <Footer/>
      <EndFooter/>
    </div>
  );
}

export default Blog;
