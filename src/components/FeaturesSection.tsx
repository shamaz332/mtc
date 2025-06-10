import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-0 bg-white py-0 my-0 min-h-[667px]">
      <div className="w-full flex flex-col md:flex-row items-center py-16 lg:py-0">
        {/* Image on the left */}
        <div className="w-full md:w-1/2 md:mb-0">
          <Image
            src="/assets/hand_kitchen.png"
            alt="Handmade Kitchen"
            width={1000}
            height={667}
            layout="responsive"
            className="object-cover"
          />
        </div>

        {/* Content on the right */}
        <div className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-8 lg:pl-16 pt-6 2xl:pt-0">
          <span className="text-[13px] font-roboto font-normal tracking-[3px] uppercase text-[#D4B254] mb-8 block">
            QUALITY CRAFTSMANSHIP FROM BUILD TO DELIVERY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-helvetica font-bold text-[#222222] leading-tight mb-6 max-w-[520px]">
            Discover the beauty of a handmade kitchen
          </h2>
          <p className="text-sm sm:text-base font-roboto font-normal text-[#777777] mb-8 max-w-[630px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <button className="bg-[#D4B254] text-white font-roboto text-[15px] rounded-[30px] px-8 py-3 uppercase tracking-[3px] transition-all duration-300 hover:opacity-90">
            ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
