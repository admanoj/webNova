"use client";

import React from "react";
import Card from "./card/page";
import { BackgroundBoxesDemo } from "./background/page";
import AboutUs from "./aboutUs/page";

import { SparklesPreview } from "./sparkles/page";
import Teams from "./team/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Brand from "./brand/page";
import Role from "./role/page";
import Service from "./services/page";

import Navbar from "../components/navbar/page";
import Video from "./video/page";

const Layout = () => {
  return (
    <div>
      {/* Ensure Header and Navbar components are client-compatible */}
      {/* <Header /> */}

      <Navbar />
      <Video />
      <Card />
      <BackgroundBoxesDemo />
      <AboutUs />
      <SparklesPreview />
      <Service />
      <Role />
      <Teams />

      <Brand />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
