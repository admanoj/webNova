"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Vasavi Thandu",
    role: "Chief Executive Officer",
    image: "/vasavi.jpg",
    fallback: "VT",
    description:
      "Vasavi leads Ksva Tech with a vision for innovation and growth. With over 15 years of experience in the tech industry, she has been instrumental in driving the company's strategic direction and fostering a culture of excellence. Her leadership has been pivotal in establishing Ksva Tech as a leading force in delivering cutting-edge solutions to clients worldwide.",
  },
  {
    name: "Ishan Bhatta",
    role: "Chief Operating Officer",
    image: "/ishan.jpg",
    fallback: "IB",
    description:
      "Ishan oversees the day-to-day operations of Ksva Tech, ensuring seamless execution of projects and optimal resource allocation. His background in process optimization and team management has been crucial in scaling the company's operations while maintaining the highest standards of quality. Ishan's strategic approach has significantly improved operational efficiency across all departments.",
    linkedinUrl: "https://www.linkedin.com/in/ishan-bhatta-85aa31161/",
  },
  {
    name: "Shiva Prasad Kongari",
    role: "Chief Technical Officer",
    image: "/shiva-prasad-kongari.jpg",
    fallback: "SK",
    description:
      "Shiva spearheads Ksva Tech's technological innovations. With a deep understanding of emerging technologies and a track record of successful product developments, he guides our technical strategy and ensures that we remain at the forefront of the industry. His expertise in cloud architecture, AI, and data analytics has been key in developing our most groundbreaking solutions.",
  },
  {
    name: "Rajnish Adhikari",
    role: "Operations Manager",
    image: "/rajnish.jpg",
    fallback: "RA",
    description:
      "Rajnish plays a crucial role in streamlining Ksva Tech's operational processes. His expertise in project management and resource optimization has significantly enhanced our delivery capabilities. Rajnish's commitment to continuous improvement has led to the implementation of best practices that have elevated our operational standards and client satisfaction levels.",
  },
];

const AboutTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 space-y-24">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-blue-600 font-semibold tracking-wide">
              OUR STORY
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Innovating Tomorrow's
              <br />
              Tech Solutions Today
            </h2>
            <p className="text-xl text-gray-700">
              As your dedicated tech partner, we bring innovative solutions to
              life.
            </p>
            <p className="text-gray-600">
              At Ksva Tech, we've assembled a powerhouse team of 450+ industry
              veterans, including seasoned founders, CTOs, visionary product
              designers, and elite engineers. Our decade-long journey has seen
              us successfully deliver over 100 groundbreaking products. We've
              collaborated with a diverse array of forward-thinking startups and
              enterprises, crafting solutions that seamlessly blend intuitive
              user experiences with sophisticated data management, cloud
              infrastructure, and robust security measures.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/innovation.avif"
              alt="Innovation at Ksva Tech"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/team.avif"
              alt="Coding excellence"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Promise to You
            </h3>
            <p className="text-xl text-blue-600 font-semibold">
              Dedicated to Your Success
            </p>
            <p className="text-gray-600">
              At the heart of Ksva Tech is our unwavering focus on our clients'
              success. We're passionate about finding new ways to bring ideas to
              life, from concept to finished product. By using our expertise, we
              help our customers innovate faster and make their teams work
              better. The fact that over 90% of our business comes from happy
              clients referring us shows that we consistently deliver great
              results.
            </p>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Visionary Team
            </h2>
            <p className="text-xl text-gray-600">
              Exceptional individuals shaping the future of technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-100 to-white"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <Avatar className="w-24 h-24 border-4 border-blue-200">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-blue-800 font-bold text-sm uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{member.description}</p>
                  <a
                    href={
                      member.linkedinUrl ||
                      `https://www.linkedin.com/in/${member.name
                        .toLowerCase()
                        .replace(" ", "-")}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-1" />
                    LinkedIn
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutTeam;
