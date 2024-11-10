"use client";

import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center m-4 md:mx-20 p-4 md:p-6 bg-gray-50 rounded-lg shadow-lg h-auto md:h-[300px] space-y-6 md:space-y-0">
      <div className="flex flex-col justify-center space-y-4 md:space-y-6 md:w-1/2 text-center md:text-left">
        <div>
          <h2 className="text-lg md:text-xl text-[#1E1F3A] font-semibold">
            Contact Us
          </h2>
          <h2 className="text-lg md:text-xl text-[#1E1F3A]">
            Let&apos;s see what we can create together
          </h2>
        </div>

        <div>
          <span className="text-3xl md:text-5xl text-[#1E1F3A] font-light">
            bhattaishan7@gmail.com
          </span>
        </div>
      </div>
      <div className="flex items-center h-full relative w-full md:w-1/2">
        <Image
          src="/html.svg"
          alt="HTML Icon"
          layout="fill"
          objectFit="contain"
          className="ml-auto"
        />
      </div>
    </div>
  );
};

export default Contact;
