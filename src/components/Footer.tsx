import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#222222] py-16 text-white px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
      <div className="mb-12 lg:mb-0 lg:mr-16 flex items-center justify-center relative">
  {/* Left horizontal line */}
  <div className="flex-grow h-px bg-gray-400 mr-4"></div>

  {/* Logo */}
  <Image src="/assets/logo.svg" alt="MK Logo" width={84} height={33} />

  {/* Right horizontal line */}
  <div className="flex-grow h-px bg-gray-400 ml-4"></div>
</div>

        <div className="flex justify-center mt-[44px]">


          {/* Navigation Links - Horizontal Layout */}
          <div className="flex flex-col sm:flex-row text-left gap-50">
            {/* About Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className="font-helvetica text-lg uppercase tracking-[3px] mb-6 font-bold text-white">ABOUT</h3>
              <ul className="space-y-3">
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">SHOP</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">PLAN MY KITCHEN</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">ABOUT US</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">GALLERY</a></li>
              </ul>
            </div>

            {/* Service Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className="font-helvetica text-lg uppercase tracking-[3px] mb-6 font-bold text-white">SERVICE</h3>
              <ul className="space-y-3">
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">FAQ</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">CONTACT</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">HOW TO BUY</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">DOWNLOADS</a></li>
              </ul>
            </div>

            {/* Info Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className="font-helvetica text-lg uppercase tracking-[3px] mb-6 font-bold text-white">INFO</h3>
              <ul className="space-y-3">
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">DELIVERY</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">TERMS</a></li>
                <li><a href="#" className="font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors">PRIVACY</a></li>
              </ul>
            </div>

            {/* Follow Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className="font-helvetica text-lg uppercase tracking-[3px] mb-6 font-bold text-white">FOLLOW</h3>
              <div className="flex gap-4">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <Image src="/assets/facebook.svg" alt="Facebook" width={20} height={20} className="invert" />
                </div>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <Image src="/assets/twitter.svg" alt="Twitter" width={20} height={20} className="invert" />
                </div>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <Image src="/assets/insta.svg" alt="Instagram" width={20} height={20} className="invert" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-sm font-roboto font-normal text-center">
          <p className="font-roboto text-xs font-normal text-white/50">Copyright Online MTC Home Kitchens 2018 - All rights reserved.</p>
          <p className="font-roboto text-xs font-normal text-white/50">Responsive website design, Development & Hosting by mtc.</p>
        </div>
        {/* Horizontal line after copyright text */}
        <div className="w-full h-[1px] bg-white opacity-30 mt-8" />
      </div>
    </footer>
  );
};

export default Footer;