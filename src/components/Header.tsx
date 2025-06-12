"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-[30px] bottom-[31px] left-1/2 -translate-x-1/2 w-full max-w-[1300px] h-[81px] z-50 md:px-0 border-b-[1px] border-white/30">
      {/* Desktop Header - Visible on lg and larger screens */}
      <div className="hidden lg:flex justify-between align-center items-center w-full h-[50px] relative pl-4 pr-4 2xl:pl-0 2xl:pr-0 z-20">
        {/* Social Icons */}
        <div className="flex gap-4 pl-2">
          {/* Facebook Icon */}
          <a href="#" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          {/* Twitter Icon */}
          <a href="#" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.917 2.2-4.917 4.917 0 .386.045.763.127 1.124-4.083-.205-7.702-2.159-10.126-5.134-.423.725-.666 1.562-.666 2.457 0 1.697.865 3.194 2.181 4.073-.803-.026-1.56-.247-2.22-.616v.062c0 2.367 1.684 4.342 3.918 4.788-.41.111-.841.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.161-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"
              className="h-6 w-6 fill-white"
            >
              <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
            </svg>
          </a>
          {/* </div> */}
        </div>
        {/* Left Nav */}
        <nav className="flex gap-[3rem]">
          <a
            href="#"
            className="text-[13px] font-normal uppercase text-white opacity-100 tracking-[3px]"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-[13px] font-normal uppercase text-white opacity-100 tracking-[3px]"
          >
            Plan My Kitchen
          </a>
        </nav>
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={84}
            height={33}
            className="object-contain"
          />
        </div>
        {/* Right Nav */}
        <nav className="flex gap-[2.5rem]">
          <a
            href="#"
            className="text-[13px] font-normal uppercase text-white opacity-100 tracking-[3px]"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-[13px] font-normal uppercase text-white opacity-100 tracking-[3px]"
          >
            Gallery
          </a>
        </nav>
        {/* My Order Button */}
        <button className="border border-white rounded-[25px] px-6 py-4 text-white text-[13px] tracking-[3px] gap-3 uppercase flex items-center h-[50px]">
          My Order <i className="fas fa-shopping-cart text-[14px]" />
        </button>
      </div>

      {/* Mobile Header - Visible on screens smaller than lg */}
      <div className="lg:hidden flex items-center justify-between w-full h-[60px] px-4 relative">
        {/* Mobile Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={70}
            height={27}
            className="object-contain"
          />
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="z-10 text-white text-[20px] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
          <div className="absolute top-[60px] right-5 rounded-lg bg-black/75 w-[40%]  text-white flex flex-col items-center gap-4 py-4 z-30">
            <a
              href="#"
              className="text-[13px] font-normal uppercase text-white tracking-[3px]"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-[13px] font-normal uppercase text-white tracking-[3px]"
            >
              Plan My Kitchen
            </a>
            <a
              href="#"
              className="text-[13px] font-normal uppercase text-white tracking-[3px]"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[13px] font-normal uppercase text-white tracking-[3px]"
            >
              Gallery
            </a>
            <button className="border border-white rounded-[20px] px-3 py-1 text-white font-roboto text-[11px] tracking-tight uppercase flex items-center gap-1">
              Order <i className="fas fa-shopping-cart text-xs" />
            </button>
          </div>
        )
      }
    </header >
  );
};

export default Header;
