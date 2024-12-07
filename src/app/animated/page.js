"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      id: "1",
      quote:
        "KSVA Tech's AI solutions have revolutionized our customer service. We've seen a 40% increase in customer satisfaction scores since implementation.",
      name: "Ishan Bhatta",
      designation: "Head of Customer Experience at GlobalRetail",
      src: "/ishan.jpg?height=500&width=500",
    },
    {
      id: "2",
      quote:
        "The predictive maintenance system from KSVA Tech has reduced our downtime by 60%. It's been a game-changer for our manufacturing processes.",
      name: "Vasavi Thandu",
      designation: "Operations Director at IndustrialInnovations",
      src: "/vasavi.jpg?height=500&width=500",
    },
    {
      id: "3",
      quote:
        "KSVA Tech's data analytics platform provided insights that helped us increase our market share by 15% in just six months. Truly impressive results!",
      name: "Sofiya Pandey",
      designation: "Chief Strategy Officer at TechGrowth Inc.",
      src: "/sofiya.jpg?height=500&width=500",
    },
    {
      id: "4",
      quote:
        "The cybersecurity solutions from KSVA Tech have given us peace of mind. We've successfully prevented several potential breaches thanks to their advanced threat detection.",
      name: "Rajnish Adhikari",
      designation: "CIO at SecureFinance Ltd.",
      src: "/rajnish.jpg?height=500&width=500",
    },
    {
      id: "5",
      quote:
        "KSVA Tech's AI-driven supply chain optimization has cut our logistics costs by 30% and improved delivery times significantly. Our customers are thrilled!",
      name: "Manoj Adhikari",
      designation: "VP of Operations at GlobalLogistics",
      src: "/man.jpg?height=500&width=500",
    },
  ];

  return testimonials.length > 0 ? (
    <AnimatedTestimonials testimonials={testimonials} />
  ) : (
    <div>Loading testimonials...</div>
  );
}
