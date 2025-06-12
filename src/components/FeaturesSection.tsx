import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-0 bg-white py-0 my-0 max-h-[850px] lg:max-h[667px] ">
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
        <div className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-8 2xl:pl-16 pt-6 2xl:pb-0 flex flex-col justify-center items-center md:items-start">
          <span className="text-[13px] font-roboto font-normal tracking-[3px] uppercase text-[#D4B254] mb-1 2xl:mb-3 block">
            QUALITY CRAFTSMANSHIP FROM BUILD TO DELIVERY
          </span>
          <h2 className="text-lg md:text-xl 2xl:text-2xl flex font-helvetica font-bold text-[#222222] leading-tight mb-4 xl:mb-[33px] max-w-[520px]">
            Discover the beauty of a handmade kitchen
          </h2>
          <p className="text-xs sm:text-[15px] font-roboto font-normal text-[#777777] mb-4 md:mb-2 xl:mb-[27px] max-w-[630px] pr-0 sm-12 2xl:pr-0 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <button
            className="group relative bg-[#D4B254] hover:bg-[#C8A74B] hover:cursor-pointer tracking-[3px] text-white font-roboto px-[50px] py-[20px] text-sm sm:text-[15px] rounded-[30px] w-auto md:h-[60px] md:w-[211px] font-normal transition-all duration-300">
            ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
