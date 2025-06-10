import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  return (
    <section className="w-full py-16 text-center bg-white px-4 md:px-8 lg:px-16">
      <h2 className="text-[32px] sm:text-4xl lg:text-[42px] font-helvetica font-bold text-[#222222] leading-tight mb-12 tracking-normal">
        Customer Gallery
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-20 max-w-7xl mx-auto">
        {/* Gallery Image 1 */}
        <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] p-4">
          <Image 
            src="/assets/custom_gall_three.png" // Replace with actual image path
            alt="Kitchen Gallery 1" 
            width={310} 
            height={310} 
            layout="responsive" 
            className="object-cover"
          />
        </div>
        {/* Gallery Image 2 */}
        <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] p-4">
          <Image 
            src="/assets/custom_gall_three.png" // Replace with actual image path
            alt="Kitchen Gallery 2" 
            width={310} 
            height={310} 
            layout="responsive" 
            className="object-cover"
          />
        </div>
        {/* Gallery Image 3 */}
        <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] p-4">
          <Image 
            src="/assets/custom_gall_three.png" // Replace with actual image path
            alt="Kitchen Gallery 3" 
            width={310} 
            height={310} 
            layout="responsive" 
            className="object-cover"
          />
        </div>
        {/* Gallery Image 4 */}
        <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] p-4">
          <Image 
            src="/assets/custom_gall_four.png" // Replace with actual image path
            alt="Kitchen Gallery 4" 
            width={310} 
            height={310} 
            layout="responsive" 
            className="object-cover"
          />
        </div>
      </div>
      <button className="bg-[#D4B254] text-white font-roboto text-[15px] rounded-[30px] px-8 py-3 uppercase tracking-[3px] transition-all duration-300 hover:opacity-90">
        VIEW MORE
      </button>
    </section>
  );
};

export default GallerySection; 