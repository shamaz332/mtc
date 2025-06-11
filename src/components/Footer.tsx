import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full text-center px-4 md:px-8 3xl:px-[350px] py-10 text-white lg:px-16 relative overflow-hidden">
      {/* Background Black with Faint Image */}
      <div className="absolute inset-0 bg-black z-0">
        <Image 
          src="/assets/hero.png" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-20" // Make image faint
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="mb-12 flex items-center justify-center relative">
          {/* Flex container for Left and Right horizontal lines */}
          <div className="flex items-center justify-center w-full">
            {/* Left horizontal line */}
            <div className="flex-grow h-px bg-white opacity-30 mr-4"></div>

            {/* Logo */}
            <Image src="/assets/logo.svg" alt="MK Logo" width={84} height={33} />

            {/* Right horizontal line */}
            <div className="flex-grow h-px bg-white opacity-30 ml-4"></div>
          </div>
        </div>

        <div className="flex justify-center mt-[44px]">
          {/* Navigation Links - Horizontal Layout */}
          <div className="flex flex-col sm:flex-row text-left gap-10 lg:gap-20 2xl:gap-30">
            {/* About Column */}
            <div className="mb-8 lg:mb-12">
              <h3 className="font-helvetica text-lg lg:text-2xl tracking-[3px] mb-7 font-bold text-white">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    PLAN MY KITCHEN
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    GALLERY
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Column */}
            <div className="mb-8 sm:mb-12">
              <h3 className="font-helvetica text-lg lg:text-2xl tracking-[3px] mb-7 font-bold text-white">
                Service
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    CONTACT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    HOW TO BUY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    DOWNLOADS
                  </a>
                </li>
              </ul>
            </div>

            {/* Info Column */}
            <div className="mb-8 sm:mb-12">
              <h3 className="font-helvetica text-lg lg:text-2xl tracking-[3px] mb-7 font-bold text-white">
                Info
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    DELIVERY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    TERMS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors"
                  >
                    PRIVACY
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Column */}
            <div className="mb-8 sm:mb-12">
              <h3 className="font-helvetica text-lg lg:text-2xl tracking-[3px] mb-7 font-bold text-white">
                Follow
              </h3>
              <div className="flex gap-4">
                <i className="fab fa-facebook-f text-black bg-white text-[20px] pt-3 rounded-full w-10 h-10 text-center cursor-pointer" />
                <i className="fab fa-twitter text-black bg-white text-[20px] pt-3 rounded-full w-10 h-10 text-center cursor-pointer" />
                <i className="fab fa-instagram text-black bg-white text-[20px] pt-3 rounded-full w-10 h-10 text-center cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[13px] font-normal text-white/50">
            Copyright Online MTC Home Kitchens 2018 - All rights reserved.
          </p>
          <p className="text-[13px] font-normal text-white/50">
            Responsive website design, Development & Hosting by mtc.
          </p>
        </div>
        {/* Horizontal line after copyright text */}
        <div className="w-full h-[1px] bg-white opacity-30 mt-8 mb-6" />
      </div>
    </footer>
  );
};

export default Footer;
