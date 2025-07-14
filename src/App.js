// src/App.js
import './App.css'; // ✅ Import global styles
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/services';
import Team from './pages/Team';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route  path= "/contact" element ={<Contact/>}></Route>
      <Route path= "/services" element={<Service/>}></Route>
      <Route path ="/team" element ={<Team/>}></Route>
    </Routes>
  );
}

export default App;
