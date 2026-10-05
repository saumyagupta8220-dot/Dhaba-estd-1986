// src/components/Outlets.jsx
import React from 'react';

function Outlets() {
  // A quick list of locations so it's easy to add more later!
  const locations = [
    { city: "Delhi NCR", address: "Connaught Place, Saket, Gurgaon" },
    { city: "Mumbai", address: "Bandra Kurla Complex, Andheri West" },
    { city: "Pune", address: "Koregaon Park, Viman Nagar" },
    { city: "Bengaluru", address: "Indiranagar, Marathahalli" },
  ];

  return (
    <section id="locations" className="w-full py-24relative bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/outlets-bg.jpg')" }}>
         

     <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl text-white mb-16 underline decoration-dhaba-yellow decoration-4 underline-offset-8 drop-shadow-lg">
          Our Outlets
        </h2>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {locations.map((loc, index) => (
            <div 
              key={index} 
               className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-t-4 border-dhaba-red hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
            >
              <h3 className="text-4xl text-dhaba-blue group-hover:text-dhaba-red transition-colors mb-3">
                {loc.city}
              </h3>
              <p className="text-xl text-gray-700 font-sans">
                {loc.address}
              </p>
            </div>
          ))}
        </div>

        {/* Catchy Phrase & Book Button Area */}
        <div className="bg-dhaba-blue rounded-3xl p-12 shadow-2xl border-4 border-dhaba-yellow relative overflow-hidden">
          
          {/* Subtle background decoration inside the blue box */}
          {/* <div className="absolute top-0 right-0 text-[200px] text-white/5 font-dhaba leading-none pointer-events-none -mt-10 -mr-10">
            ढाबा
          </div> */}

          <div className="relative z-10 flex flex-col items-center">
           <h2 className="text-5xl md:text-7xl font-dhaba text-dhaba-yellow mb-10 tracking-wider drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Swaad Sirf Ik Click Door Ae!
            </h2>
            
            <button className="bg-dhaba-red text-white text-3xl px-12 py-5 rounded-full font-bold shadow-[0_0_20px_rgba(234,51,59,0.5)] hover:bg-white hover:text-dhaba-red hover:scale-105 transition-all duration-300">
              Book a Table
            </button>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default Outlets;