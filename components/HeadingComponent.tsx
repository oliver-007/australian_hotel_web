import React from "react";

const HeadingComponent = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center mb-8 bg-white">
      <div className="flex-1 border-t border-gray-300 border-2"></div>
      <span className="px-4 text-gray-700 text-3xl capitalize "> {title} </span>
      <div className="flex-1 border-t border-gray-300 border-2"></div>
    </div>
  );
};

export default HeadingComponent;
