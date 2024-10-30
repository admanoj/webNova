// import App from "@/components/europeCard/page";
// import React from "react";

// const Teams = () => {
//   return (
//     <div className="flex flex-col items-center py-12 px-4 bg-gray-100 text-gray-800">
//       <h2 className="text-4xl font-bold text-purple-700 mb-4 text-center">
//         Meet Our Leadership
//       </h2>
//       <p className="text-lg text-gray-600 whitespace-nowrap g-purple-100b ">
//         It&apos;s important to have exceptional customer service that builds
//         strong connections and trust with our clients.
//       </p>
//       <App />
//     </div>
//   );
// };

// export default Teams;
"use client";
import App from "@/components/europeCard/page";
import React from "react";

const Teams = () => {
  return (
    <div className="flex flex-col items-center py-4 md:py-12 px-2 md:px-6 lg:px-8 bg-gray-100 text-gray-800">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-3 md:mb-4 text-center mt-2">
        Meet Our Leadership
      </h2>
      <p className="text-sm md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-4 md:mb-10 px-2 md:px-4">
        It's important to have exceptional customer service that builds strong
        connections and trust with our clients.
      </p>
      <App />
    </div>
  );
};

export default Teams;
