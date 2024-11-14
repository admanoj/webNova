"use client";
import { CrmSidebar } from "@/components/crm-sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-1/4">
        {" "}
        {/* Adjust width as needed */}
        <CrmSidebar />
      </div>
      <div className="w-3/4 overflow-auto p-4">
        {" "}
        {/* Adjust width and padding as needed */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
