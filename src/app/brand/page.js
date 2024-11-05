"use client";
import React from "react";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg space-y-4">
      <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-tight leading-snug">
        Global Brands Trust WebNova AI.{" "}
        <span className="text-purple-600 font-bold">You Can Too.</span>
      </h2>

      <p className="text-gray-700 text-xl leading-relaxed font-sans font-normal">
        Your success is at the heart of everything we do. Explore the reputable
        brands that have thrived alongside us with a shared growth mindset.
      </p>

      {/* brand images */}
      <div className="grid grid-cols-4 gap-4 p-5">
        {[
          "/deer.jpeg",
          "/leapfrog.png",
          "/verisk.png",
          "/f1.png",
          "/esewa.webp",
          "/khalti.webp",
          "/cotiviti.jpeg",
          "/javra.png",
        ].map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              className="h-20 w-auto object-contain"
              src={src}
              alt={`Brand logo ${index + 1}`}
              width={300}
              height={200}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
