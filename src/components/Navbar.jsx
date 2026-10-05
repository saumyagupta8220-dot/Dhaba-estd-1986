// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // We wrap everything in a fixed header so the banner and navbar stick together
    <header className="fixed top-0 w-full z-50">
      
      {/* PITCH WATERMARK BANNER */}
      <div className="w-full bg-black text-white text-center py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] uppercase shadow-sm">
        Demo Concept Only
      </div>

      {/* Your original Navbar (removed 'fixed top-0' since the wrapper handles it now) */}
      <nav className="navbar w-full px-6 py-4 flex justify-between items-center bg-white/95 backdrop-blur-md shadow-md border-b-4 border-dhaba-yellow">
        
        <div className="flex items-center cursor-pointer">
          <Link to="/" className="text-4xl font-dhaba text-dhaba-red tracking-wider hover:scale-105 transition-transform duration-300 drop-shadow-md">
            LOGO
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-dhaba-blue text-2xl tracking-wide">
          <Link to="/about" className="hover:text-dhaba-red hover:-translate-y-1 transition-all">
            About Dhaba
          </Link>
          
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-dhaba-red hover:-translate-y-1 transition-all">
              Locations <span>▼</span>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100">
              <Link to="/#delhi" className="block px-4 py-3 hover:bg-dhaba-yellow hover:text-dhaba-blue">Delhi NCR</Link>
              <Link to="/#mumbai" className="block px-4 py-3 hover:bg-dhaba-yellow hover:text-dhaba-blue">Mumbai</Link>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-dhaba-red hover:-translate-y-1 transition-all">
              Menu <span>▼</span>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100">
              <Link to="/#veg" className="block px-4 py-3 hover:bg-dhaba-yellow hover:text-dhaba-blue">Vegetarian</Link>
              <Link to="/#non-veg" className="block px-4 py-3 hover:bg-dhaba-yellow hover:text-dhaba-blue">Non-Vegetarian</Link>
            </div>
          </div>

          <Link to="/#awards" className="hover:text-dhaba-red hover:-translate-y-1 transition-all">Awards</Link>
          <Link to="/#contact" className="hover:text-dhaba-red hover:-translate-y-1 transition-all">Get in Touch</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-xl">
          <button className="bg-white text-dhaba-blue px-6 py-2 rounded-full shadow border-2 border-dhaba-blue hover:bg-dhaba-blue hover:text-white transition-colors duration-300">
            Book a Table
          </button>
          <button className="bg-dhaba-red text-white px-6 py-2 rounded-full shadow-lg hover:bg-dhaba-yellow hover:text-dhaba-blue transition-colors duration-300">
            Order Online
          </button>
        </div>
        
      </nav>
    </header>
  );
}

export default Navbar;