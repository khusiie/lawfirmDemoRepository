// src/App.js
import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/services';
import Team from './pages/Team';
import Blog from './pages/Blog';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route  path= "/contact" element ={<Contact/>}></Route>
      <Route path= "/services" element={<Service/>}></Route>
      <Route path ="/team" element ={<Team/>}></Route>
      <Route path = "/blog" element ={<Blog/>}></Route>
    </Routes>
  );
}

export default App;
