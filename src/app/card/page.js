import React from "react";

const Card = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="h-full flex items-center justify-between max-w-7xl mx-auto">
        {/* Card Section */}
        <div className="w-full md:w-1/2 md:pr-8">
          <div className="max-w-md bg-white rounded-xl shadow-lg p-5 md:p-6 ml-4 md:ml-16">
            <div className="space-y-3">
              <span className="block">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Best Software, Web
                  <br />
                  Development & IT
                  <br />
                  Company in Nepal.
                </h1>
              </span>

              <span className="block">
                <h2 className="text-lg md:text-xl text-gray-600">
                  We are the Best
                  <p className="text-purple-600 font-semibold mt-1">
                    Digital Service Provider
                  </p>
                  in Nepal.
                </h2>
              </span>

              <button className="transform transition-all duration-300 bg-purple-600 hover:bg-purple-400 hover:scale-105 text-white font-bold py-2 px-6 rounded-md shadow hover:shadow-md">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src="/code.svg"
            alt="Coding illustration"
            className="w-full max-w-lg h-auto object-contain ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
