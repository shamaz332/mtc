'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [0, 1, 2]; // Represents 3 slides for the background

  return (
    <section className="relative w-full min-h-[120vh] sm:min-h-[110vh] lg:h-[900px] flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16">
      <Image 
        src="/assets/hero.png" 
        alt="Luxury Kitchen Design" 
        layout="fill" 
        objectFit="cover" 
        className="z-0 transform scale-105 transition-transform duration-[2s] hover:scale-100"
        priority
      />
      
      {/* Main content - text and button */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center w-full px-4 max-w-7xl mx-auto py-24 sm:py-32 md:py-40">
        <span 
          className="text-[11px] sm:text-[13px] font-roboto text-white tracking-[3px] uppercase animate-fade-in-up font-normal mb-6 sm:mb-8 md:mb-10"
          style={{ textShadow: '0px 0px 4px #000000' }}
        >
          DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY
        </span>
        
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-helvetica font-bold text-white max-w-[580px] leading-[1.2] animate-fade-in-up animation-delay-200 tracking-[-1px] mb-8 sm:mb-10 md:mb-12"
          style={{ textShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)' }}
        >
          Bespoke & Made to Measure Handmade Kitchen Design
        </h1>
        
        <div className="animate-fade-in-up animation-delay-400 mb-20 sm:mb-24 md:mb-28 lg:mb-32">
          <button 
            className="group relative bg-[#D4B254] text-white font-roboto text-sm sm:text-[15px] rounded-[30px] px-8 sm:px-[50px] py-3 sm:py-[15px] font-normal transition-all duration-300"
            style={{ 
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
              letterSpacing: '3px'
            }}
          >
            <span className="relative z-10 uppercase tracking-[3px]">ORDER NOW</span>
          </button>
        </div>
      </div>
      
      {/* Slider indicators */}
      <div 
        className="absolute bottom-32 sm:bottom-36 md:bottom-40 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 md:space-x-4 animate-fade-in animation-delay-600"
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-8 sm:w-10 md:w-12 h-1 sm:h-[2px] md:h-[3px] rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlide ? 'bg-gold' : 'bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 