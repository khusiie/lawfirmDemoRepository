import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TopNavbar from './components/topNavbar';
import About from './components/About';
import EndFooter from './components/EndFooter';

function App() {
  return (
  <div>
   <TopNavbar/>
    <Navbar/>
    <HeroSection/>
    <About/>
    <EndFooter/>
  </div>
  );
}

export default App;
