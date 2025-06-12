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
        <div className="mb-8 md:mb-12 flex items-center justify-center relative">
          {/* Flex container for Left and Right horizontal lines */}
          <div className="flex items-center justify-center w-full">
            {/* Left horizontal line */}
            <div className="flex-grow h-px bg-white opacity-30 mr-3 xs:mr-4"></div>

            {/* Logo */}
            <Image src="/assets/logo.svg" alt="MK Logo" width={84} height={33} />

            {/* Right horizontal line */}
            <div className="flex-grow h-px bg-white opacity-30 ml-3 xs:ml-4"></div>
          </div>
        </div>

        <div className="flex justify-center mt-[44px]">
          {/* Navigation Links - Horizontal Layout */}
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-10 lg:gap-20 2xl:gap-30">
            {/* About Column */}
            <div className="mb-6 xs:mb-8 lg:mb-12">
              <h3 className="font-helvetica text-base lg:text-lg tracking-[3px] mb-4 xs:mb-7 font-bold text-white">
                About
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
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
              <h3 className="font-helvetica text-base lg:text-lg tracking-[3px] mb-7 font-bold text-white">
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
              <h3 className="font-helvetica text-base lg:text-lg tracking-[3px] mb-7 font-bold text-white">
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
              <h3 className="font-helvetica text-base lg:text-lg tracking-[3px] mb-7 font-bold text-white">
                Follow
              </h3>
              <div className="flex gap-4">
                {/* Facebook Icon */}
                <a href="#" className="cursor-pointer bg-white p-2 rounded-full hover:bg-[#D4B254] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                {/* Twitter Icon */}
                <a href="#" className="cursor-pointer bg-white p-2 rounded-full hover:bg-[#D4B254] transition-colors">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.917 2.2-4.917 4.917 0 .386.045.763.127 1.124-4.083-.205-7.702-2.159-10.126-5.134-.423.725-.666 1.562-.666 2.457 0 1.697.865 3.194 2.181 4.073-.803-.026-1.56-.247-2.22-.616v.062c0 2.367 1.684 4.342 3.918 4.788-.41.111-.841.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.161-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                {/* Instagram Icon */}
                <a href="#" className="cursor-pointer bg-white p-2 rounded-full hover:bg-[#D4B254] transition-colors">

                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"
                    className="h-6 w-6 fill-black"
                  >
                    <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                  </svg>
                </a>
                {/* </div> */}
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
