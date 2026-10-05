// src/pages/Home.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Testimonials from '../components/Testimonials';
import OrderSection from '../components/OrderSection';
import Outlets from '../components/Outlets';

gsap.registerPlugin(useGSAP);

function Home() {
  const containerRef = useRef();

  // We keep the hero animation here!
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.accent-diamond', { y: -30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' }, 0.5);
    tl.from('.hero-title', { scale: 0.8, opacity: 0, duration: 1 }, 0.8);
    tl.from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, 1.2);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <main className="relative pt-20 pb-16 min-h-[90vh] flex flex-col items-center justify-center text-center px-4">
        
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 brightness-150 contrast-125 saturate-150">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        
   

        <div className="relative z-10 max-w-4xl mx-auto mt-8">
          <div className="flex justify-center gap-4 mb-6">
            <div className="accent-diamond w-4 h-4 bg-dhaba-yellow rotate-45 shadow-sm"></div>
            <div className="accent-diamond w-4 h-4 bg-dhaba-yellow rotate-45 shadow-sm"></div>
            <div className="accent-diamond w-4 h-4 bg-dhaba-yellow rotate-45 shadow-sm"></div>
          </div>

          <h1 className="hero-title text-6xl md:text-8xl font-dhaba tracking-wide mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
            <span className="text-white">DHABA</span>{' '}
            <span className="text-dhaba-red">ESTD 1986</span>
          </h1>

          <p className="hero-subtitle text-3xl md:text-4xl text-gray-200 mb-12 max-w-2xl mx-auto tracking-wide drop-shadow-md">
            Experience the authentic, vibrant, and unapologetic flavors of the great Indian highway. 
          </p>
        </div>
      </main>

      <Testimonials />
      <OrderSection />
      <Outlets />
    </div>
  );
}

export default Home;