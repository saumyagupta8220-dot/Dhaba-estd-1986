// src/components/OrderSection.jsx
import React from 'react';

function OrderSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-[#fef5e7]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ea333b_2px,transparent_2px)] [background-size:20px_20px] z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-7xl font-dhaba tracking-wider text-dhaba-red mb-12 drop-shadow-sm">
          Huney Hi Mangwa Lo!
        </h2>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-dhaba-yellow flex flex-col md:flex-row gap-6 justify-between items-end">
          <div className="w-full flex flex-col text-left">
            <label className="text-2xl text-dhaba-blue mb-2">Select your city</label>
            <select className="w-full bg-gray-50 border-2 border-gray-300 text-xl text-gray-700 py-3 px-4 rounded-xl focus:border-dhaba-red focus:outline-none cursor-pointer">
              <option value="" disabled>Choose a city...</option>
              <option value="delhi">Delhi NCR</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="bengaluru">Bengaluru</option>
            </select>
          </div>

          <div className="w-full flex flex-col text-left">
            <label className="text-2xl text-dhaba-blue mb-2">Nearest kitchen to you</label>
            <select className="w-full bg-gray-50 border-2 border-gray-300 text-xl text-gray-700 py-3 px-4 rounded-xl focus:border-dhaba-red focus:outline-none cursor-pointer">
              <option value="" disabled>Choose a kitchen...</option>
              <option value="cp">Connaught Place</option>
              <option value="saket">Saket</option>
              <option value="gurgaon">Gurgaon</option>
            </select>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-3xl text-dhaba-blue mb-6">Available on</p>
          <div className="flex justify-center items-center gap-8 md:gap-16">
            <div className="bg-red-500 text-white text-3xl font-bold italic px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer">ZOMATO</div>
            <div className="bg-orange-500 text-white text-3xl font-bold italic px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer">SWIGGY</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSection;