// "use client";
// import React from "react";
// import Image from "next/image"; // Import Image from next/image

// const Card = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
//       <div className="h-full flex items-center justify-between max-w-7xl mx-auto">
//         {/* Card Section */}
//         <div className="w-full md:w-1/2 md:pr-8">
//           <div className="max-w-md bg-white rounded-xl shadow-lg p-5 md:p-6 ml-4 md:ml-16">
//             <div className="space-y-3">
//               <span className="block">
//                 <h1 className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
//                   Best Software, Web
//                   <br />
//                   Development & IT
//                   <br />
//                   Company in Sacramento California.
//                 </h1>
//               </span>

//               <span className="block">
//                 <h2 className="text-lg md:text-xl text-gray-600">
//                   We are the Best
//                   <p className="text-purple-600 font-semibold mt-1">
//                     Digital Service Provider
//                   </p>
//                   in Sac ramento California.
//                 </h2>
//               </span>

//               <button className="transform transition-all duration-300 bg-purple-600 hover:bg-purple-400 hover:scale-105 text-white font-bold py-2 px-6 rounded-md shadow hover:shadow-md">
//                 Get in touch
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="hidden md:block w-1/2">
//           <Image
//             src="/code.svg"
//             alt="Coding illustration"
//             className="w-full max-w-lg h-auto object-contain ml-auto"
//             width={500} // Set appropriate width
//             height={500} // Set appropriate height
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

"use client";
import React from "react";

const Card = () => {
  return (
    <div className="mt-5 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000" />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto relative z-10 space-y-10 md:space-y-0">
        {/* Card Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-lg bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-purple-100 space-y-6">
            <span className="inline-block px-4 py-2 bg-purple-200 text-purple-800 text-sm font-semibold rounded-full shadow">
              Welcome to the Future
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparentG">
              Best Software, Web
              <br />
              Development & IT
              <br />
              Company
            </h1>
            <p className="text-gray-500 text-2xl font-sans">
              in Sacramento, California
            </p>

            <h2 className="text-lg text-gray-700 ">
              We are the Best
              <span className="block text-purple-600 font-semibold mt-1 font-sans">
                Digital Service Provider
              </span>
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
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-100">
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600">150+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600">50+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600">15+</div>
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
