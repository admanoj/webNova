"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  const timeoutRef = React.useRef(null);

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true
  }, []);

  const showDropdown = (dropdownName) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(dropdownName);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <div className="bg-[#EFF0F4] rounded-full shadow-md p-4 flex items-center justify-between mt-4 h-24 ml-24 mr-24 sticky top-0 z-30 ">
      <div>
        <img
          src="web.svg"
          alt="Virtual Teammate"
          className="h-16 w-28 ml-4 rounded-full transform scale-150"
        />
      </div>
      <div className="flex space-x-8 relative">
        {isMounted && (
          <>
            {/* Home Link */}
            <Link
              href="#"
              className="text-xl hover:text-purple-400 font-bold text-purple-700"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => showDropdown("about")}
              onMouseLeave={hideDropdown}
            >
              <Link
                href="#"
                className="text-xl hover:text-purple-400 font-bold text-purple-700"
              >
                About Us
              </Link>
              {openDropdown === "about" && ( // Check if this dropdown is open
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md z-20">
                  <Link
                    href="#"
                    className="block px-4 py-2  hover:bg-gray-200 hover:text-purple-400 text-purple-700"
                  >
                    How We Work
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-400"
                  >
                    Testimonial
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-400"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            {/* Find Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => showDropdown("projects")}
              onMouseLeave={hideDropdown}
            >
              <Link
                href="#"
                className="text-xl hover:text-purple-400 font-bold text-purple-700"
              >
                Find Projects
              </Link>
              {openDropdown === "projects" && ( // Check if this dropdown is open
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md z-20">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Save Project
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Proposals
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Offers
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700 "
                  >
                    HomePage
                  </Link>
                </div>
              )}
            </div>

            {/* Join Our Team Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => showDropdown("team")}
              onMouseLeave={hideDropdown}
            >
              <Link
                href="#"
                className="text-xl hover:text-purple-400 font-bold text-purple-700"
              >
                Join Our Team
              </Link>
              {openDropdown === "team" && ( // Check if this dropdown is open
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md z-20">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Application Process
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Benefits
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Culture
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Open Positions
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => showDropdown("resources")}
              onMouseLeave={hideDropdown}
            >
              <Link
                href="#"
                className="text-xl hover:text-purple-400 font-bold text-purple-700"
              >
                Resources
              </Link>
              {openDropdown === "resources" && ( // Check if this dropdown is open
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md z-20">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    See All
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Articles
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Resources
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                  >
                    Use Cases
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <button className="bg-[#F7B945] hover:bg-yellow-600 hover:filter hover:brightness-110 text-white font-bold py-2 px-4 rounded-full">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
