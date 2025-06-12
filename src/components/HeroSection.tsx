"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [0, 1, 2]; // Represents 3 slides for the background

  const slideImages = [
    "/assets/hero.png",
    "/assets/hand_kitchen.png",
    "/assets/hero.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <section className="relative w-full h-[700px] lg:h-[902px] flex flex-col items-center justify-end overflow-hidden px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${slideImages.length * 100}vw`, // Set width based on number of slides
            transform: `translateX(-${currentSlide * 100}vw)`, // Slide to the left
          }}
        >
          {slideImages.map((image, index) => (
            <div key={index} className="w-full h-[700px] lg:h-[902px] flex-shrink-0"
            style={{ flex: "0 0 100vw" }}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main content - text and button */}
      <div className="z-20 h-full flex flex-col items-center justify-center mt-10 text-center w-full max-w-[686px] mx-auto ">
        <span
          className="text-[11px] sm:text-[13px] font-roboto text-white tracking-[3px] uppercase animate-fade-in-up font-normal mb-6 sm:mb-6 md:mb-3"
          style={{ textShadow: "0px 0px 4px #000000" }}
        >
          DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY
        </span>

        <h1
          className="text-lg md:text-2xl lg:text-[52px] font-helvetica font-bold text-white max-w-[686px] leading-[1.2] animate-fade-in-up animation-delay-200 tracking-[-1px] mb-[30px]"
          style={{ textShadow: "0px 0px 25px rgba(0, 0, 0, 0.5)" }}
        >
          Bespoke & Made to Measure Handmade Kitchen Design
        </h1>

        <div className="animate-fade-in-up animation-delay-400 mb-0">
          <button
            className="group relative bg-[#D4B254] hover:bg-[#C8A74B] hover:cursor-pointer text-white font-roboto px-[59px] py-[20px] text-xs sm:text-[15px] rounded-[30px] font-normal transition-all duration-300"
            style={{
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
              letterSpacing: "3px",
            }}
          >
            <span className="relative z-10 uppercase tracking-[3px]">
              ORDER NOW
            </span>
          </button>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 md:space-x-4 animate-fade-in animation-delay-600">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-8 sm:w-10 md:w-12 h-1 sm:h-[2px] md:h-[3px] rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlide ? "bg-[#D4B254]" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
