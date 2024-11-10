"use client";
import React from "react";
import { FaFolderOpen, FaThumbsUp, FaUsers } from "react-icons/fa";

const Card = () => {
  return (
    <div className="mt-5 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000" />

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto relative z-10 space-y-10 md:space-y-0">
        {/* Card Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-lg bg-opacity-80 backdrop-blur-lg rounded-3xl p-6 md:p-8 space-y-6">
            <span className="inline-block px-4 py-2 bg-purple-200 text-purple-800 text-sm font-semibold rounded-full shadow">
              Welcome to the Future
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 leading-tight">
              Leading Software & IT
              <br className="block md:hidden" />
              <span className="block md:inline"> Development Company</span>
            </h1>
            <p className="text-gray-600 text-xl font-medium">
              in Sacramento, California
            </p>

            <h2 className="text-lg text-gray-700 font-semibold">
              We are the Best{" "}
              <span className="text-purple-700 font-bold">
                Digital Service Provider
              </span>{" "}
              in Sacramento, California.
            </h2>

            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-3 pt-4">
              <button className="transform transition-transform duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
                Get in Touch
              </button>
              <button className="transform transition-transform duration-300 border-2 border-purple-600 text-purple-600 font-semibold py-2 px-6 rounded-lg hover:bg-purple-50 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-100 text-center">
              <div className="flex flex-col items-center">
                <FaFolderOpen className="w-8 h-8 text-purple-700 mb-2" />
                <div className="text-xl font-bold text-purple-700">150+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="flex flex-col items-center">
                <FaThumbsUp className="w-8 h-8 text-purple-700 mb-2" />
                <div className="text-xl font-bold text-purple-700">50+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="flex flex-col items-center">
                <FaUsers className="w-8 h-8 text-purple-700 mb-2" />
                <div className="text-xl font-bold text-purple-700">15+</div>
                <div className="text-xs text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section with Decorative Circles */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-lg">
            {/* Animated Circles */}
            <div className="absolute top-0 -left-8 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce" />
            <div className="absolute top-0 -right-8 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-2000" />
            <div className="absolute -bottom-10 left-24 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-4000" />

            <img
              src="/code.svg"
              alt="Coding illustration"
              className="relative w-full h-auto object-contain transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
