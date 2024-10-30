// import React from "react";
// import { Card } from "antd";
// const { Meta } = Card;
// const App = () => (
//   <div className="flex space-x-6 mt-10">
//     <Card
//       hoverable
//       style={{
//         width: 240,
//       }}
//       cover={<img alt="example" src="/ishan.jpg" />}
//     >
//       <Meta title="Founder" description="www.instagram.com" />
//     </Card>
//     <Card
//       hoverable
//       style={{
//         width: 240,
//       }}
//       cover={<img alt="example" src="/rajnish.jpg" />}
//     >
//       <Meta title="Director" description="www.instagram.com" />
//     </Card>
//     <Card
//       hoverable
//       style={{
//         width: 240,
//       }}
//       cover={<img alt="example" src="sofiya.jpg" />}
//     >
//       <Meta title="UI/UX Designer" description="www.instagram.com" />
//     </Card>
//   </div>
// );
// export default App;

"use client";

import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const App = () => (
  <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-10 px-4 md:px-6">
    {/* Founder Card */}
    <Card
      hoverable
      className="w-full md:w-[240px] flex-shrink-0"
      cover={
        <div className="h-[280px] overflow-hidden">
          <img
            alt="Founder"
            src="/ishan.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta
        title={<span className="text-lg font-semibold">Founder</span>}
        description={
          <a
            href="https://www.instagram.com"
            className="text-blue-500 hover:text-blue-700"
          >
            www.instagram.com
          </a>
        }
      />
    </Card>

    {/* Director Card */}
    <Card
      hoverable
      className="w-full md:w-[240px] flex-shrink-0"
      cover={
        <div className="h-[280px] overflow-hidden">
          <img
            alt="Director"
            src="/rajnish.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta
        title={<span className="text-lg font-semibold">Director</span>}
        description={
          <a
            href="https://www.instagram.com"
            className="text-blue-500 hover:text-blue-700"
          >
            www.instagram.com
          </a>
        }
      />
    </Card>

    {/* UI/UX Designer Card */}
    <Card
      hoverable
      className="w-full md:w-[240px] flex-shrink-0"
      cover={
        <div className="h-[280px] overflow-hidden">
          <img
            alt="UI/UX Designer"
            src="/sofiya.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta
        title={<span className="text-lg font-semibold">UI/UX Designer</span>}
        description={
          <a
            href="https://www.instagram.com"
            className="text-blue-500 hover:text-blue-700"
          >
            www.instagram.com
          </a>
        }
      />
    </Card>
  </div>
);

export default App;
