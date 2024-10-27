// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="flex flex-col items-center p-8 bg-gray-200 rounded-lg shadow-md  mx-auto">
//       <h2 className="text-3xl font-bold text-purple-700 mb-4">About Us</h2>
//       <h3 className="text-3xl text-purple-600 mb-2">
//         Welcome to The Webnova AI
//       </h3>
//       <p className="text-gray-700 text-center whitespace-nowrap">
//         We transform your digital vision into reality with professional digital
//         solutions.
//       </p>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
//         {/* Card 1 */}
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <h4 className="text-xl font-semibold mb-2 text-purple-700">
//             Who We Are
//           </h4>
//           <p className="text-gray-600 mb-4">
//             At WebNova AI, we are a team of passionate and dedicated software
//             engineers, designers, and innovators committed to transforming ideas
//             into cutting-edge digital solutions. Our company provides custom
//             software solutions, serving clients across various industries
//             worldwide.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white rounded-lg shadow-md p-4 text-purple-700">
//           <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
//           <p className="text-gray-600 mb-4">
//             Our mission is to empower businesses by delivering innovative and
//             reliable software products that drive efficiency, enhance user
//             experience, and foster growth. We believe in the power of technology
//             to solve complex problems and create opportunities for our clients.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-lg shadow-md p-4 text-purple-700">
//           <h4 className="text-xl font-semibold mb-2">What We Do</h4>
//           <p className="text-gray-600 mb-2">
//             We offer a range of services to meet your digital needs:
//           </p>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>Website Development</li>
//             <li>Marketing</li>
//             <li>Social Media Management</li>
//             <li>DevOps Services</li>
//             <li>Mobile App Development</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-200 rounded-lg shadow-md mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">About Us</h2>
      <h3 className="text-3xl text-purple-600 mb-2">
        Welcome to The Webnova AI
      </h3>
      <p className="text-gray-700 text-center whitespace-nowrap">
        We transform your digital vision into reality with professional digital
        solutions.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h4 className="text-xl font-semibold mb-2 text-purple-700">
            Who We Are
          </h4>
          <p className="text-gray-600 mb-4">
            At WebNova AI, we are a team of passionate and dedicated software
            engineers, designers, and innovators committed to transforming ideas
            into cutting-edge digital solutions. Our company provides custom
            software solutions, serving clients across various industries
            worldwide.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h4 className="text-xl font-semibold mb-2 text-purple-700">
            Our Mission
          </h4>
          <p className="text-gray-600 mb-4">
            Our mission is to empower businesses by delivering innovative and
            reliable software products that drive efficiency, enhance user
            experience, and foster growth. We believe in the power of technology
            to solve complex problems and create opportunities for our clients.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h4 className="text-xl font-semibold mb-2 text-purple-700">
            What We Do
          </h4>
          <p className="text-gray-600 mb-2">
            We offer a range of services to meet your digital needs:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Website Development</li>
            <li>Marketing</li>
            <li>Social Media Management</li>
            <li>DevOps Services</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
