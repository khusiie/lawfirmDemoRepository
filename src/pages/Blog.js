import React from 'react';
import TopHeader from '../components/topNavbar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/blog/HeroSection';
import EndFooter from '../components/EndFooter';
import Footer from '../components/Footer';
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
