// src/pages/About.jsx
import React from 'react';

function About() {
  return (
   
    <div 
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: '#F3E5C8',
        backgroundImage: 'url("/old-paper.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // 'backgroundAttachment: fixed' makes the texture stay in place while scrolling, which looks great!
        backgroundAttachment: 'fixed' 
      }}
    >
      
      {/* Header Banner */}
      <div className="w-full bg-dhaba-dark py-20 text-center border-b-8 border-dhaba-yellow relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ea333b_2px,transparent_2px)] [background-size:20px_20px]"></div>
        
        <h1 className="relative z-10 text-6xl md:text-8xl font-dhaba text-white tracking-widest drop-shadow-lg">
          Our <span className="text-dhaba-red">Story</span>
        </h1>
      </div>

      {/* Story Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl text-dhaba-blue mb-8 underline decoration-dhaba-yellow decoration-4 underline-offset-8">
            The Legacy of 1986
          </h2>
          <p className="text-2xl text-gray-800 leading-relaxed font-sans mb-6">
            Born on the bustling Aurangzeb Road in New Delhi, Dhaba Estd 1986 was created to capture the unapologetic, vibrant spirit of the great Indian highway. 
          </p>
          <p className="text-2xl text-gray-800 leading-relaxed font-sans">
            For decades, we have been serving authentic Punjabi cuisine, cooked with traditional spices and a whole lot of love. Our iconic Sardaar Ji logo represents the warmth, hospitality, and bold flavors that have made us a legend.
          </p>
        </div>

        {/* Owner Photo */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-dhaba-yellow rounded-xl rotate-3 scale-105 shadow-xl transition-transform duration-500 group-hover:rotate-6"></div>
          
          <img 
            src="/owner-photo.jpg" 
            alt="The Owner" 
            className="relative z-10 w-full h-[500px] object-cover shadow-2xl border-8 border-white border-b-[32px]"
          />
          
          <div className="absolute -bottom-6 -left-6 bg-dhaba-red text-white py-3 px-8 rounded-full shadow-lg z-20 font-dhaba text-3xl">
            The Visionary
          </div>
        </div>

      </div>

     
      <div className="relative z-10 w-full py-24 border-t-2 border-gray-400/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-5xl text-dhaba-blue mb-16">
            The <span className="text-dhaba-red">Dhaba</span> Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Gallery Images */}
            <div className="relative group">
              <img 
                src="/dhaba-photo-1.jpg" 
                alt="Dhaba Interior" 
                className="w-full h-80 object-cover shadow-xl border-8 border-white border-b-[32px] rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300"
              />
            </div>
            
            <div className="relative group mt-0 md:mt-8">
              <img 
                src="/dhaba-photo-2.jpg" 
                alt="Dhaba Food" 
                className="w-full h-80 object-cover shadow-xl border-8 border-white border-b-[32px] rotate-[3deg] group-hover:rotate-0 transition-transform duration-300"
              />
            </div>

            <div className="relative group">
              <img 
                src="/dhaba-photo-3.jpg" 
                alt="Dhaba Vibe" 
                className="w-full h-80 object-cover shadow-xl border-8 border-white border-b-[32px] rotate-[-4deg] group-hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;