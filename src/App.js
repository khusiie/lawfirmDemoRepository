// src/App.js
import './App.css'; // ✅ Import global styles
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route  path= "/contact" element ={<Contact/>}></Route>
    </Routes>
  );
}

export default App;
