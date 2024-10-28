// import React from "react";

// const Contact = () => {
//   return (
//     <div className="flex flex-col m-4 ml-20 h-[300px] justify-center space-y-6">
//       <div className="">
//         <div>
//           <h2 className="text-lg text-[#1E1F3A]">Contact Us</h2>
//           <h2 className="text-lg text-[#1E1F3A] ">
//             Let’s see what we can create together
//           </h2>
//         </div>

//         <div>
//           <span className="text-6xl text-[#1E1F3A] font-sans font-light  ">
//             admanoj111@gmail.com
//           </span>
//         </div>
//       </div>
//       <div>
//         <img
//           className="w-auto h-44 object-contain ml-auto" // Reduced width to make it smaller
//           src="/html.svg"
//           alt="HTML Icon"
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between items-center m-4 ml-20 h-[300px]">
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h2 className="text-lg text-[#1E1F3A]">Contact Us</h2>
          <h2 className="text-lg text-[#1E1F3A]">
            Let’s see what we can create together
          </h2>
        </div>

        <div>
          <span className="text-6xl text-[#1E1F3A] font-sans font-light">
            admanoj111@gmail.com
          </span>
        </div>
      </div>
      <div className="flex items-center h-full">
        <img
          className="h-full object-contain ml-auto" // Adjusts height to fill container height
          src="/html.svg"
          alt="HTML Icon"
        />
      </div>
    </div>
  );
};

export default Contact;
