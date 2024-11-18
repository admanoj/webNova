"use client";

import { CrmSidebar } from "@/components/ui/crm-sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <div>
        <CrmSidebar />
      </div>
      <div className="w-3/4 overflow-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
