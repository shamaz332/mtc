import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 text-center h-[600px] flex items-center">
      <div className="flex items-center justify-center w-full">
        {/* Left Arrow */}
        <Image
          src="/assets/left.svg"
          alt="Left Arrow"
          width={71} // Adjust size as needed
          height={71} // Adjust size as needed
          className="mx-2 sm:mx-4 hidden sm:block cursor-pointer"
        />

        <div className="max-w-4xl">
          <span className="text-[13px] font-roboto font-normal tracking-[3px] uppercase text-[#D4B254] mb-4 block">
            WHAT OUR CUSTOMERS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-helvetica font-bold text-[#222222] leading-tight mb-6">
            Over 35 years experience designing handmade kitchens
          </h2>
          <p className="text-sm sm:text-base font-roboto font-normal text-[#777777] mb-8 max-w-2xl mx-auto">
            Since my first contact I have received a very high level of customer
            service and advice with my kitchen plans. Ben responded very quickly
            to all of my emails and delivery of the kitchen was as planned.
          </p>
          <p className="text-sm sm:text-base font-roboto font-normal text-[#777777] mb-12">
            Jane, Dundee
          </p>
          <button className="bg-[#D4B254] text-white font-roboto text-[15px] rounded-[30px] px-5 py-2 sm:px-8 sm:py-3 uppercase tracking-[3px] transition-all duration-300 hover:opacity-90">
            FREQUENTLY ASKED QUESTIONS
          </button>
        </div>

        {/* Right Arrow */}
        <Image
          src="/assets/right.svg"
          alt="Right Arrow"
          width={71} // Adjust size as needed
          height={71} // Adjust size as needed
          className="mx-2 hidden sm:block cursor-pointer"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
