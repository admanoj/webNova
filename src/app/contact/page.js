// import React from "react";

// const Contact = () => {
//   return (
//     <div className="flex justify-between items-center m-4 ml-20 h-[300px]">
//       <div className="flex flex-col justify-center space-y-6">
//         <div>
//           <h2 className="text-lg text-[#1E1F3A]">Contact Us</h2>
//           <h2 className="text-lg text-[#1E1F3A]">
//             Let&apos;s see what we can create together
//           </h2>
//         </div>

//         <div>
//           <span className="text-6xl text-[#1E1F3A] font-sans font-light">
//             admanoj111@gmail.com
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center h-full">
//         <img
//           className="h-full object-contain ml-auto" // Adjusts height to fill container height
//           src="/html.svg"
//           alt="HTML Icon"
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;
"use client";

import React from "react";
import Image from "next/image"; // Import Image from next/image

const Contact = () => {
  return (
    <div className="flex justify-between items-center m-4 ml-20 h-[300px]">
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h2 className="text-lg text-[#1E1F3A]">Contact Us</h2>
          <h2 className="text-lg text-[#1E1F3A]">
            Let&apos;s see what we can create together
          </h2>
        </div>

        <div>
          <span className="text-6xl text-[#1E1F3A] font-sans font-light">
            bhattaishan7@gmail.com
          </span>
        </div>
      </div>
      <div className="flex items-center h-full relative w-1/2">
        {" "}
        {/* Specify width */}
        <Image
          src="/html.svg"
          alt="HTML Icon"
          layout="fill" // Allow the image to fill the container
          objectFit="contain" // Maintain the aspect ratio and fit in the container
          className="ml-auto" // Optional: if you want to add margin left to the image
        />
      </div>
    </div>
  );
};

export default Contact;
