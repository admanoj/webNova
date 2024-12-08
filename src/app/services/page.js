"use client";
import React from "react";

const Service = () => {
  return (
    <div id="section" className="px-6 py-12 bg-gray-50 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-gray-600 font-semibold text-lg flex items-center justify-center">
          <span className="w-16 border-t border-purple-600"></span>{" "}
          {/* Line on the left */}
          <span className="mx-4 font-sans font-medium">Our Services</span>
          <span className="w-16 border-t border-purple-600"></span>{" "}
          {/* Line on the right */}
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Exceptional Services For{" "}
          <span className="text-blue-600">Your Business Growth</span>
        </h2>
      </div>

      {/* Services Grid with 4 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card Components */}
        <div className=" p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/w.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Website
            <br /> Development
          </h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Crafting highly functional and visually appealing websites tailored
            <br />
            to your specific needs.
          </p>
        </div>

        <div className="p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/ui.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">UI/UX</h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Develop a compelling and memorable brand identity that connects with
            your audience.
          </p>
        </div>

        <div className="p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/brand.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">Branding</h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Create a strong, memorable brand identity that resonates with your
            audience.
          </p>
        </div>

        <div className="p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/seo.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Search Engine Optimization (SEO)
          </h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Tailored SEO strategies to boost search engine visibility and drive
            growth.
          </p>
        </div>

        <div className="p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/smm.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Social Media Marketing (SMM)
          </h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Build a strong online presence and engage with your targeted
            audience.
          </p>
        </div>

        <div className="p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/content.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Content Creation
          </h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Crafting impactful and engaging content to foster audience
            connection.
          </p>
        </div>

        <div className="p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/digital.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Digital Marketing
          </h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Enhance your brand's presence and engagement with precision-driven
            digital strategies.
          </p>
        </div>

        <div className="p-6 rounded-lg hover:bg-blue-200 ">
          <img src="/leads.svg" className="w-32 h-32" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Lead Generation
          </h3>
          <p className="mt-4 text-gray-700 text-xl font-normal font-sans">
            Attract, engage, and convert high-quality leads to drive business
            growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
