"use client";

import Header from "@/components/header/page";
import Navbar from "@/components/navbar/page";
import React from "react";
import Card from "./card/page";
import { BackgroundBoxesDemo } from "./background/page";
import AboutUs from "./aboutUs/page";

import { SparklesPreview } from "./sparkles/page";
import Teams from "./team/page";
import Contact from "./contact/page";

const Layout = () => {
  return (
    <div>
      {/* Ensure Header and Navbar components are client-compatible */}
      <Header />
      <Navbar />
      <Card />
      <BackgroundBoxesDemo />
      <AboutUs />

      <SparklesPreview />
      <Teams />
      <Contact />
    </div>
  );
};

export default Layout;