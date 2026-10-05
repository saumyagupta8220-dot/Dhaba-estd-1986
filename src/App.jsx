// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our shared components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickySocials from './components/StickySocials';

// Import our Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dhaba-light overflow-hidden flex flex-col">
        {/* These always show at the top/side */}
        <Navbar />
        <StickySocials />
        
        {/* This area changes based on what page you are on */}
        <div className="flex-grow pt-[104px]"> {/* pt ensures content doesn't hide behind fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* This always shows at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;