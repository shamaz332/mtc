import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  return (
    <section className="w-full text-center bg-white px-2 sm:px-4 md:px-8 3xl:px-[350px]">
      <h2 className="text-base sm:text-lg lg:text-[32px] font-helvetica font-bold text-[#222222] leading-tight mt-6 md:mt-24 tracking-normal">
        Customer Gallery
      </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-6 md:mb-10 mt-6 md:mt-9">
        {/* Gallery Image 1 */}
        <div className="w-[280px] sm:w-[calc(50%-10px)] lg:w-[310px] aspect-square">
          <Image 
            src="/assets/custom_gall_three.png"
            alt="Kitchen Gallery 1" 
            width={310} 
            height={310} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gallery Image 2 */}
        <div className="w-[280px] sm:w-[calc(50%-10px)] lg:w-[310px] aspect-square">
          <Image 
            src="/assets/custom_gall_three.png"
            alt="Kitchen Gallery 2" 
            width={310} 
            height={310} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gallery Image 3 */}
        <div className="w-[280px] sm:w-[calc(50%-10px)] lg:w-[310px] aspect-square">
          <Image 
            src="/assets/custom_gall_three.png"
            alt="Kitchen Gallery 3" 
            width={310} 
            height={310} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gallery Image 4 */}
        <div className="w-[280px] sm:w-[calc(50%-10px)] lg:w-[310px] aspect-square">
          <Image 
            src="/assets/custom_gall_four.png"
            alt="Kitchen Gallery 4" 
            width={310} 
            height={310} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <button className="bg-[#D4B254] text-white font-roboto text-xs sm:text-[15px] rounded-[30px] px-8 py-3 uppercase tracking-[3px] transition-all duration-300 hover:opacity-90 mb-16 md:mb-24 h-auto w-auto md:h-[60px] md:w-[184px]">
        VIEW MORE
      </button>
    </section>
  );
};

export default GallerySection; 