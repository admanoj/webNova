"use client";

import Component from "@/components/sidebar/page";
import React from "react";

const CRM = ({ children }) => {
  return (
    <div className="flex gap-4 ">
      <Component />

      <div className="bg-[#fff8e6] w-[100vw] h-screen ">{children}</div>
    </div>
  );
};

export default CRM;
