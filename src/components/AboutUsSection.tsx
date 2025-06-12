'use client'
import React, { useState } from "react";
import Image from "next/image";

const AboutUsSection = () => {
  const reviews = [
    {
      title: "Over 35 years experience designing handmade kitchens",
      text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
      author: "Jane, Dundee",
    },
    {
      title: "Exceptional craftsmanship and attention to detail",
      text: "The team at MTC Kitchens exceeded my expectations. The quality of the materials and the attention to detail in the design were outstanding. I couldn't be happier with my new kitchen.",
      author: "John, Edinburgh",
    },
    {
      title: "Highly recommended for bespoke kitchens",
      text: "From start to finish, the process was seamless. The team listened to my ideas and brought them to life. The end result is a kitchen that is both functional and beautiful.",
      author: "Sarah, Glasgow",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300); // Animation duration
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300); // Animation duration
  };

  return (
    <section className="bg-[#EEEEEE] text-center h-[600px] flex items-center">
      <div className="flex items-center justify-center w-full">
        {/* Left Arrow */}
        <Image
          src="/assets/left.svg"
          alt="Left Arrow"
          width={71}
          height={71}
          className="mr-[100px] 2xl:mr-[169px] hidden sm:block cursor-pointer"
          onClick={handlePrev} // Handle previous review
        />

        {/* Review Section */}
        <div
          className={`max-w-xl transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-[13px] font-roboto font-normal tracking-[3px] uppercase text-[#D4B254] mb-4 block">
            WHAT OUR CUSTOMERS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-helvetica font-bold text-[#222222] leading-tight mb-6">
            {reviews[currentReviewIndex].title}
          </h2>
          <p className="text-sm sm:text-base font-roboto font-normal text-[#777777] mb-[11px] max-w-2xl mx-auto">
            {reviews[currentReviewIndex].text}
          </p>
          <p className="text-sm sm:text-base font-roboto font-normal text-[#777777] pb-9">
            {reviews[currentReviewIndex].author}
          </p>
          <button
            className="group relative bg-[#D4B254] hover:bg-[#C8A74B] hover:cursor-pointer text-white font-roboto px-[59px] py-[20px] text-sm sm:text-[15px] rounded-[30px] font-normal transition-all duration-300"
          >
            FREQUENTLY ASKED QUESTIONS
          </button>
        </div>

        {/* Right Arrow */}
        <Image
          src="/assets/right.svg"
          alt="Right Arrow"
          width={71}
          height={71}
          className="ml-[100px] 2xl:ml-[169px] hidden sm:block cursor-pointer"
          onClick={handleNext} // Handle next review
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
