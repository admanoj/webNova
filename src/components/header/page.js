"use client";
import React from "react";
import App from "@/components/avatar/page";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bg-purple-200 h-16 flex items-center justify-between px-4 sticky">
        {/* Left space or content */}
        <div className="flex-grow"></div>

        {/* Right-aligned Avatar and Button */}
        <div className="flex items-center space-x-4">
          <div className="rounded-full overflow-hidden ">
            <App />
          </div>

          <Link
            className="px-4 py-2 rounded-md text-purple-600 pr-20 hover:brightness-50 text-md-text"
            href="/signIn"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
