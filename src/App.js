// src/App.js
import './App.css'; // ✅ Import global styles
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
