// src/components/Testimonials.jsx
import React from 'react';

function Testimonials() {
  // A list of fake reviews you can update later!
  const reviews = [
    {
      name: "Rahul Sharma",
      quote: "The Dal Dhaba here is exactly what you get on the highways of Punjab. Absolutely unmatched flavor and the vibe is totally authentic!",
      rating: 5
    },
    {
      name: "Priya Kapoor",
      quote: "Loved the energetic atmosphere and the butter chicken was out of this world. It really feels like a premium yet rustic experience.",
      rating: 5
    },
    {
      name: "Amit Desai",
      quote: "Swaad Sirf Ik Click Door Ae! I ordered online and the packaging was great. The food arrived hot and fresh. Highly recommend the Tandoori platter.",
      rating: 4
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative border-b-4 border-gray-200">
      
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1c58a3_2px,transparent_2px)] [background-size:20px_20px] z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl font-dhaba text-dhaba-red mb-4 drop-shadow-sm">
          Why Customers Love Us
        </h2>
        <p className="text-2xl text-gray-500 mb-16 font-sans">
          Real stories from our amazing foodies.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-dhaba-light p-8 rounded-3xl shadow-lg border-t-8 border-dhaba-yellow hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative"
            >
              
              {/* Giant Quote Icon */}
              <div className="text-dhaba-blue text-6xl font-serif absolute -top-6 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                "
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-6 h-6 ${i < review.rating ? 'text-dhaba-yellow' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl text-gray-700 italic font-sans mb-8 flex-grow">
                {review.quote}
              </p>

              {/* Customer Name */}
              <h4 className="text-2xl text-dhaba-blue font-bold border-b-2 border-dhaba-red pb-1">
                - {review.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;