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

import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const App = () => (
  <div className="flex space-x-6 mt-10">
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <div className="h-70 overflow-hidden">
          <img
            alt="example"
            src="/ishan.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta title="Founder" description="www.instagram.com" />
    </Card>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <div className="h-[296px] overflow-hidden">
          <img
            alt="example"
            src="/rajnish.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta title="Director" description="www.instagram.com" />
    </Card>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <div className="h-70 overflow-hidden">
          <img
            alt="example"
            src="/sofiya.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      }
    >
      <Meta title="UI/UX Designer" description="www.instagram.com" />
    </Card>
  </div>
);

export default App;
