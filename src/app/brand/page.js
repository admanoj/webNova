// import React from "react";

// const Brand = () => {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg space-y-4">
//       {/* <h2 className="text-gray-800 text-4xl font-sans font-normal  ">
//         Global Brands Trust WebNova AI. You Can Too.
//       </h2> */}
//       <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-tight leading-snug">
//         Global Brands Trust WebNova AI.{" "}
//         <span className="text-purple-600 font-bold">You Can Too.</span>
//       </h2>

//       <p className="text-gray-700 text-xl leading-relaxed  font-sans font-normal">
//         Your success is at the heart of everything we do. Explore the reputable
//         <br />
//         brands that have thrived alongside us with a shared growth mindset.
//       </p>

//       {/* brand images */}
//       <div className="flex flex-wrap m-5 p-10">
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/deer.jpeg"
//             alt="Image 1"
//           />
//         </div>
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/leapfrog.png"
//             alt="Image 2"
//           />
//         </div>
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/verisk.png"
//             alt="Image 3"
//           />
//         </div>
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/f1.png"
//             alt="Image 4"
//           />
//         </div>
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/esewa.webp"
//             alt="Image 5"
//           />
//         </div>
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/khalti.webp"
//             alt="Image 6"
//           />
//         </div>
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/cotiviti.jpeg"
//             alt="Image 7"
//           />
//         </div>
//         <div className="w-1/4 p-1">
//           <img
//             className="h-24 w-full object-contain"
//             src="/javra.png"
//             alt="Image 8"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brand;

import React from "react";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg space-y-4">
      {/* <h2 className="text-gray-800 text-4xl font-sans font-normal  ">
        Global Brands Trust WebNova AI. You Can Too.
      </h2> */}
      <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-tight leading-snug">
        Global Brands Trust WebNova AI.{" "}
        <span className="text-purple-600 font-bold">You Can Too.</span>
      </h2>

      <p className="text-gray-700 text-xl leading-relaxed  font-sans font-normal">
        Your success is at the heart of everything we do. Explore the reputable
        <br />
        brands that have thrived alongside us with a shared growth mindset.
      </p>

      {/* brand images */}
      <div className="flex flex-wrap m-5 p-10">
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/deer.jpeg"
            alt="Image 1"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/leapfrog.png"
            alt="Image 1"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/verisk.png"
            alt="verisk.png"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/f1.png"
            alt="Image 1"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/esewa.webp"
            alt="Image 1"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/khalti.webp"
            alt="Image 1"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/cotiviti.jpeg"
            alt="Image 1"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
        <div className="w-1/4 p-1">
          <Image
            className="h-24 w-full object-contain"
            src="/javra.png"
            alt="Image 1"
            width={300} // Adjust to match the original aspect ratio
            height={200}
            quality={100} // Set to a higher quality
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
