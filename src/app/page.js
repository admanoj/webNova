"use client";

import Header from "@/components/header/page";
import Navbar from "@/components/navbar/page";
import React from "react";
import Card from "./card/page";

const Layout = () => {
  return (
    <div>
      {/* Ensure Header and Navbar components are client-compatible */}
      <Header />
      <Navbar />
      <Card />
    </div>
  );
};

export default Layout;
