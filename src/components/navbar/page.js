"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#EFF0F4] rounded-full shadow-md p-4 flex items-center justify-between mt-4 h-24 ml-4 mr-4 sticky top-0 z-30 flex-wrap">
      <div>
        <img
          src="logo.svg"
          alt="logo"
          className="h-16 w-40 rounded-full transform scale-150"
        />
      </div>
      <div className="hidden md:flex space-x-8 relative">
        {" "}
        {/* Hide on mobile */}
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
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-purple-400 text-purple-700"
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

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-purple-700">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-md rounded-md z-20 flex flex-col space-y-2 p-4">
          <Link
            href="#"
            className="block text-purple-700 hover:bg-gray-200 hover:text-purple-400"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => showDropdown("about")}
            onMouseLeave={hideDropdown}
          >
            <Link
              href="#"
              className="block text-purple-700 hover:bg-gray-200 hover:text-purple-400"
            >
              About Us
            </Link>
            {openDropdown === "about" && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md z-20">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-purple-400 text-purple-700"
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
          <div
            className="relative"
            onMouseEnter={() => showDropdown("projects")}
            onMouseLeave={hideDropdown}
          >
            <Link
              href="#"
              className="block text-purple-700 hover:bg-gray-200 hover:text-purple-400"
            >
              Find Projects
            </Link>
            {openDropdown === "projects" && (
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
                  className="block px-4 py-2 text-purple-700 hover:bg-gray-200 hover:text-purple-700"
                >
                  HomePage
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => showDropdown("team")}
            onMouseLeave={hideDropdown}
          >
            <Link
              href="#"
              className="block text-purple-700 hover:bg-gray-200 hover:text-purple-400"
            >
              Join Our Team
            </Link>
            {openDropdown === "team" && (
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
          <div
            className="relative"
            onMouseEnter={() => showDropdown("resources")}
            onMouseLeave={hideDropdown}
          >
            <Link
              href="#"
              className="block text-purple-700 hover:bg-gray-200 hover:text-purple-400"
            >
              Resources
            </Link>
            {openDropdown === "resources" && (
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
        </div>
      )}

      <button className="relative transform transition-transform duration-300 bg-purple-200 hover:bg-purple-500 text-purple-700 hover:text-white font-semibold py-2 px-6 rounded-full border-2 border-purple-500 shadow-md hover:shadow-lg hover:scale-105 font-sans flex items-center justify-center group">
        Quick Enquiry
      </button>
    </div>
  );
};

export default Navbar;
