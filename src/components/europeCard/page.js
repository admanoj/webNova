"use client";

import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const App = () => (
  <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-10 px-4 md:px-6">
    {/* Founder Card */}
    <Card
      hoverable
      className="w-full md:w-[240px] flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg border border-gray-200"
      cover={
        <div className="h-[280px] overflow-hidden rounded-t-lg">
          <img
            alt="Founder"
            src="/ishan.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta
        title={
          <span className="text-xl font-semibold text-gray-800">Founder</span>
        }
        description={
          <h2 className="text-base font-medium text-gray-700">Ishan Bhatta</h2>
        }
      />
    </Card>

    {/* Director Card */}
    <Card
      hoverable
      className="w-full md:w-[240px] flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg border border-gray-200"
      cover={
        <div className="h-[280px] overflow-hidden rounded-t-lg">
          <img
            alt="Director"
            src="/rajnish.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta
        title={
          <span className="text-xl font-semibold text-gray-800">Director</span>
        }
        description={
          <h2 className="text-base font-medium text-gray-700">
            Rajnish Adhikari
          </h2>
        }
      />
    </Card>

    {/* UI/UX Designer Card */}
    <Card
      hoverable
      className="w-full md:w-[240px] flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg border border-gray-200"
      cover={
        <div className="h-[280px] overflow-hidden rounded-t-lg">
          <img
            alt="UI/UX Designer"
            src="/sofiya.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta
        title={
          <span className="text-xl font-semibold text-gray-800">
            UI/UX Designer
          </span>
        }
        description={
          <h2 className="text-base font-medium text-gray-700">Sofiya Pandey</h2>
        }
      />
    </Card>
  </div>
);

export default App;
