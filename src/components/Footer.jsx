// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-dhaba-dark text-gray-300 pt-8 pb-4 border-t-4 border-dhaba-red">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-6 text-center md:text-left">
          
          {/* Left Column: Socials & Order Action */}
          <div className="flex flex-col items-center md:items-start gap-4">
            
            {/* Socials */}
            <div>
              {/* Reduced heading size */}
              <h4 className="text-2xl text-dhaba-yellow font-dhaba tracking-wide mb-2">Follow Us</h4>
              <div className="flex gap-3 justify-center md:justify-start">
                
                {/* Shrunk the icon circles and SVGs */}
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-dhaba-red hover:-translate-y-1 transition-all">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-dhaba-blue hover:-translate-y-1 transition-all">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Order Action */}
            <div className="mt-2">
              <p className="text-xl text-dhaba-yellow font-dhaba tracking-widest mb-2 drop-shadow-sm">
                Order Swag Anusar!
              </p>
              {/* Shrunk the button size */}
              <button className="bg-dhaba-red text-white text-lg px-6 py-2 rounded-full font-bold shadow-lg hover:bg-white hover:text-dhaba-red transition-colors duration-300">
                Order Online
              </button>
            </div>
            
          </div>
          {/* Middle Column: Logo & Text */}
          <div className="flex flex-col items-center border-y border-gray-700 py-4 md:py-0 md:border-y-0 md:border-x">
            {/* Shrunk the logo significantly (w-32) */}
                        <div className="text-5xl md:text-6xl font-dhaba text-dhaba-red tracking-widest mb-4 hover:scale-105 transition-transform duration-500 drop-shadow-md">
              LOGO
            </div>
            {/* Shrunk the text size */}
            <p className="text-xs md:text-sm font-sans font-bold text-center leading-relaxed text-gray-400 uppercase tracking-widest px-4">
              The original Dhaba originated on <br />
              <span className="text-dhaba-yellow">Aurangzeb Road, New Delhi</span><br />
              in 1986.
            </p>
          </div>
          {/* Right Column: Sardaar Ji Floating Image */}
          <div className="flex justify-center md:justify-end items-end h-full">
            {/* Shrunk the floating image size (w-32) */}
            <img 
              src="/footer-image.png" 
              alt="Dhaba Feature" 
              className="w-60 md:w-70  drop-shadow-[0_6px_6px_rgba(0,0,0,0.8)] hover:scale-110 hover:-rotate-3 transition-transform duration-500 origin-bottom"
            />
          </div>
        </div>
        {/* BOTTOM SECTION: Links & Copyright */}
        {/* Shrunk the top margin and padding for the bottom links */}
        <div className="border-t border-gray-700 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Navigation Links - Shrunk text size to text-sm */}
          <div className="flex flex-wrap justify-center gap-4 text-sm tracking-wider text-gray-400">
            <a href="#" className="hover:text-dhaba-yellow transition-colors">Home</a>
            <a href="#about" className="hover:text-dhaba-yellow transition-colors">About Dhaba</a>
            <a href="#menu" className="hover:text-dhaba-yellow transition-colors">Menu</a>
            <a href="#awards" className="hover:text-dhaba-yellow transition-colors">Awards</a>
            <a href="#book" className="hover:text-dhaba-yellow transition-colors">Book A Table</a>
            <a href="#contact" className="hover:text-dhaba-yellow transition-colors">Get In Touch</a>
          </div>
          {/* Copyright - Shrunk to text-xs */}
          <div className="text-xs text-gray-500 font-sans tracking-widest">
            Copyright &copy; 2026 Dhaba 1986
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;