import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="absolute top-[30px] left-1/2 -translate-x-1/2 w-full max-w-[1300px] h-[81px] z-20 md:px-0">
      {/* Desktop Header - Visible on md and larger screens */}
      <div className="hidden md:flex items-center justify-between w-full h-full relative">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <i className="fab fa-facebook-f text-white text-[16px] hover:text-gold cursor-pointer" />
          <i className="fab fa-twitter text-white text-[16px] hover:text-gold cursor-pointer" />
          <i className="fab fa-instagram text-white text-[16px] hover:text-gold cursor-pointer" />
        </div>
        {/* Left Nav */}
        <nav className="flex items-center gap-[3rem]">
          <a href="#" className="font-roboto text-[12px] font-normal tracking-tight uppercase text-white opacity-100 hover:text-gold transition-colors whitespace-nowrap min-w-max">Shop</a>
          <a href="#" className="font-roboto text-[12px] font-normal tracking-tight uppercase text-white opacity-100 hover:text-gold transition-colors whitespace-nowrap min-w-max">Plan My Kitchen</a>
        </nav>
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image src="/assets/logo.svg" alt="Logo" width={84} height={33} className="object-contain" />
        </div>
        {/* Right Nav */}
        <nav className="flex items-center gap-[2.5rem]">
          <a href="#" className="font-roboto text-[12px] font-normal tracking-tight uppercase text-white opacity-100 hover:text-gold transition-colors whitespace-nowrap min-w-max">About Us</a>
          <a href="#" className="font-roboto text-[12px] font-normal tracking-tight uppercase text-white opacity-100 hover:text-gold transition-colors whitespace-nowrap min-w-max">Gallery</a>
        </nav>
        {/* My Order Button */}
        <button className="border border-white rounded-[25px] px-6 py-2 text-white font-roboto text-[12px] tracking-tight uppercase flex items-center gap-2 hover:bg-white hover:text-dark transition-colors h-[33px]">
          My Order <i className="fas fa-shopping-cart text-[14px]" />
        </button>
        {/* Bottom Border Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px]" style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', opacity: 0.3 }} />
      </div>

      {/* Mobile Header - Visible on screens smaller than md */}
      <div className="md:hidden flex items-center justify-between w-full h-[60px] px-4 relative">
        {/* Mobile Logo */}
        <div className="flex-shrink-0">
          <Image src="/assets/logo.svg" alt="Logo" width={70} height={27} className="object-contain" />
        </div>
        {/* Mobile My Order Button */}
        <button className="border border-white rounded-[20px] px-3 py-1 text-white font-roboto text-[11px] tracking-tight uppercase flex items-center gap-1">
          Order <i className="fas fa-shopping-cart text-xs" />
        </button>
        {/* Bottom Border Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px]" style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', opacity: 0.3 }} />
      </div>
    </header>
  );
};

export default Header;