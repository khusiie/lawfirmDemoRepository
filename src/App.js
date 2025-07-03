import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TopNavbar from './components/topNavbar';
import About from './components/About';
import EndFooter from './components/EndFooter';
import Services from './components/Services';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Process from './components/Process';
function App() {
  return (
  <div>
   <TopNavbar/>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <Experience/>
     <Process/>
    <Pricing/>
    <Footer/>
    <EndFooter/>



  </div>
  );
}

export default App;
