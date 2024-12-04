"use client";

import Link from "next/link";
import React from "react";

const Video = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover "
      >
        <source src="/ksva.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Decorative lines */}
          <p className="text-gray-200 font-semibold text-lg flex items-center justify-center mb-6">
            <span className="w-16 border-t border-blue-400"></span>
            <span className="mx-4 font-sans font-medium">
              Welcome to KSVA Tech Solutions
            </span>
            <span className="w-16 border-t border-blue-400"></span>
          </p>

          <h1 className="mb-6 text-3xl md:text-4xl font-extrabold text-white">
            Transforming Ideas into{" "}
            <span className="text-blue-400">Digital Excellence</span>
          </h1>

          <p className="mb-8 text-gray-200 text-xl font-normal font-sans max-w-2xl mx-auto">
            We deliver cutting-edge IT solutions and digital transformation to
            help your business thrive in the modern digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#section">
              <button className="px-8 py-3  bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Explore Services
              </button>
            </Link>
            <Link href="#contact">
              <button className="px-8 py-3 border-2 border-blue-400 text-white rounded-lg font-semibold hover:bg-blue-600 hover:text-black hover:border-blue-600 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Video;
