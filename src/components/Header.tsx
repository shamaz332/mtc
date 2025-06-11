import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute top-[30px] bottom-[31px] left-1/2 -translate-x-1/2 w-full max-w-[1300px] h-[81px] z-20 md:px-0 border-b-[1px] border-white/30">
      {/* Desktop Header - Visible on md and larger screens */}
      <div className="hidden lg:flex justify-between align-center items-center w-full h-[50px] relative pl-4 pr-4 2xl:pl-0 2xl:pr-0">
        {/* Social Icons */}
        <div className="flex gap-4 pl-2">
          <i className="fab fa-facebook-f text-white text-[16px] cursor-pointer" />
          <i className="fab fa-twitter text-white text-[16px] cursor-pointer" />
          <i className="fab fa-instagram text-white text-[16px] cursor-pointer" />
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
        {/* Bottom Border Line */}
      </div>

      {/* Mobile Header - Visible on screens smaller than md */}
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
        {/* Mobile My Order Button */}
        <button className="border border-white rounded-[20px] px-3 py-1 text-white font-roboto text-[11px] tracking-tight uppercase flex items-center gap-1">
          Order <i className="fas fa-shopping-cart text-xs" />
        </button>
      </div>
    </header>
  );
};

export default Header;
