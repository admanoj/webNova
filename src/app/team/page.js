import App from "@/components/europeCard/page";
import React from "react";

const Teams = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-purple-700 mb-4 text-center">
        Meet Our Leadership
      </h2>
      <p className="text-lg text-gray-600 whitespace-nowrap g-purple-100b ">
        It's important to have exceptional customer service that builds strong
        connections and trust with our clients.
      </p>
      <App />
    </div>
  );
};

export default Teams;
