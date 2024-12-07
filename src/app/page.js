"use client";

import React from "react";

import { BackgroundBoxesDemo } from "./background/page";
import AboutUs from "./aboutUs/page";

import { SparklesPreview } from "./sparkles/page";
import Teams from "./team/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Brand from "./brand/page";
import Role from "./role/page";
import Service from "./services/page";

import Video from "./video/page";
import Navbar from "./navbar/page";
import { AnimatedTestimonialsDemo } from "./animated/page";
import HowWeWork from "./howWeWork/page";

const Layout = () => {
  return (
    <div>
      {/* Add your components here */}
      {/* <div className="sticky top-0 z-50">
        {" "}
        
      </div> */}

      <Video />
      <Service />
      <BackgroundBoxesDemo />
      <AboutUs />
      <HowWeWork />

      {/* <Role /> */}
      {/* <Teams /> */}
      <Brand />
      <SparklesPreview />
      <Contact />
      <AnimatedTestimonialsDemo />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
