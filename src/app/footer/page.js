// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faInstagram,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <div className="bg-gray-800 text-white py-8 px-20">
//       <div className="max-w-7xl mx-auto flex justify-between items-start">
//         {/* Left Side: Logo */}
//         <div className="flex items-center space-x-2">
//           <img
//             src="web.svg"
//             alt="Company Logo"
//             className="w-36 h-20 bg-gray-800"
//           />
//         </div>

//         {/* Center: Navigation Links */}
//         <div className="flex flex-col space-y-2 text-center">
//           <h3 className="text-3xl font-medium">Website</h3>
//           <a
//             href="#home"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out"
//           >
//             About
//           </a>
//           <a
//             href="#services"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out"
//           >
//             Our Services
//           </a>
//           <a
//             href="#blogs"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out"
//           >
//             Blogs
//           </a>
//         </div>

//         {/* Right Side: Contact Information */}
//         <div className="text-right">
//           <h3 className="text-3xl font-medium">Contact Us</h3>
//           <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out">
//             Bhaisepati, Lalitpur
//           </p>
//           <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out">
//             Email: admanoj111@gmail.com
//           </p>
//           <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out">
//             Phone: 9861439271
//           </p>
//         </div>
//       </div>
//       {/* Divider Line and Footer Text */}
//       <hr className="my-8 border-gray-700 " />
//       <p className="text-center text-gray-400 mt-10">
//         © 2024 WebNova AI @ California. All rights reserved.
//       </p>

//       <div className="flex justify-end space-x-6 mt-4 ">
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-purple-600 transition duration-300"
//         >
//           <FontAwesomeIcon icon={faLinkedin} size="2x" />
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-purple-600 transition duration-300"
//         >
//           <FontAwesomeIcon icon={faInstagram} size="2x" />
//         </a>
//         <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-purple-600 transition duration-300"
//         >
//           <FontAwesomeIcon icon={faFacebook} size="2x" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// "use client";

// import React from "react";
// import Image from "next/image"; // Importing Image from Next.js
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faInstagram,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <div className="bg-gray-800 text-white py-8 px-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
//         {/* Left Side: Logo */}
//         <div className="flex items-center space-x-2 mb-4 md:mb-0">
//           <Image
//             src="/web.svg" // Ensure the image path is correct
//             alt="Company Logo"
//             width={144} // Set width as per your design
//             height={80} // Set height as per your design
//             className="bg-gray-800"
//           />
//         </div>

//         {/* Center: Navigation Links */}
//         <div className="flex flex-col space-y-2 text-center">
//           <h3 className="text-3xl font-medium">Website</h3>
//           <a
//             href="#home"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out font-sans"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out font-sans"
//           >
//             About
//           </a>
//           <a
//             href="#services"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out font-sans"
//           >
//             Our Services
//           </a>
//           <a
//             href="#blogs"
//             className="hover:text-purple-600 text-xl transition duration-700 ease-in-out font-sans"
//           >
//             Blogs
//           </a>
//         </div>

//         {/* Right Side: Contact Information */}
//         <div className="text-right">
//           <h3 className="text-3xl font-medium">Contact Us</h3>
//           <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out font-sans">
//             Sacramento, California
//           </p>
//           <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out font-sans">
//             bhattaishan7@gmail.com
//           </p>
//           <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out font-sans">
//             +1 (562) 310-1189
//           </p>
//         </div>
//       </div>
//       {/* Divider Line and Footer Text */}
//       <hr className="my-8 border-gray-700 " />
//       <p className="text-center text-gray-400 mt-10">
//         © 2024 WebNova AI @ California. All rights reserved.
//       </p>

//       <div className="flex justify-end space-x-6 mt-4 ">
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-purple-600 transition duration-300"
//           aria-label="LinkedIn"
//         >
//           <FontAwesomeIcon icon={faLinkedin} size="2x" />
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-purple-600 transition duration-300"
//           aria-label="Instagram"
//         >
//           <FontAwesomeIcon icon={faInstagram} size="2x" />
//         </a>
//         <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-purple-600 transition duration-300"
//           aria-label="Facebook"
//         >
//           <FontAwesomeIcon icon={faFacebook} size="2x" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          {/* Left Side: Logo */}
          <div className="flex items-center space-x-2 w-full lg:w-auto">
            <Image
              src="/web.svg"
              alt="Company Logo"
              width={144}
              height={80}
              className="bg-gray-800"
            />
          </div>

          {/* Mobile: Website (Left) and Contact Us (Right) */}
          <div className="flex flex-row lg:hidden w-full justify-between">
            {/* Website Navigation Links */}
            <div className="flex flex-col space-y-2 text-left">
              <h3 className="text-2xl font-medium">Website</h3>
              {["Home", "About", "Our Services", "Blogs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-purple-600 text-lg transition duration-700 ease-in-out"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Contact Information */}
            <div className="text-right">
              <h3 className="text-2xl font-medium">Contact Us</h3>
              <p className="hover:text-purple-600 text-lg transition duration-700 ease-in-out">
                Sacramento, CA
              </p>
              <p className="hover:text-purple-600 text-lg transition duration-700 ease-in-out">
                bhattaishan7@gmail.com
              </p>
              <p className="hover:text-purple-600 text-lg transition duration-700 ease-in-out">
                +1 (562) 310-1189
              </p>
            </div>
          </div>

          {/* Desktop: Center Navigation Links */}
          <div className="hidden lg:flex flex-col space-y-2 text-center">
            <h3 className="text-3xl font-medium">Website</h3>
            {["Home", "About", "Our Services", "Blogs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-purple-600 text-xl transition duration-700 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop: Right Side Contact Information */}
          <div className="hidden lg:block text-right">
            <h3 className="text-3xl font-medium">Contact Us</h3>
            <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out">
              Sacramento, California
            </p>
            <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out">
              Email: bhattaishan7@gmail.com
            </p>
            <p className="hover:text-purple-600 text-xl transition duration-700 ease-in-out">
              Phone: +1 (562) 310-1189
            </p>
          </div>
        </div>

        {/* Divider Line and Footer Text */}
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-gray-400 mt-10">
          © 2024 WebNova AI @ California. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-end space-x-6 mt-4">
          {[
            {
              href: "https://linkedin.com",
              icon: faLinkedin,
              label: "LinkedIn",
            },
            {
              href: "https://instagram.com",
              icon: faInstagram,
              label: "Instagram",
            },
            {
              href: "https://facebook.com",
              icon: faFacebook,
              label: "Facebook",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-600 transition duration-300"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
