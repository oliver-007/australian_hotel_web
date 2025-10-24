import HeadingComponent from "@/components/HeadingComponent";
import React from "react";

const Accommodation = () => {
  const acd = [
    { bg: "/images/caro1.jpg", title: "family room standard" },
    { bg: "/images/caro2.jpg", title: "twin room " },
    { bg: "/images/caro3.jpg", title: "king room " },
  ];

  return (
    <div className=" w-full bg-white px-4 py-8 ">
      {/* -------------- heading------------- */}
      <HeadingComponent title="accommodation" />

      {/* --------- gallery --------- */}

      <div className=" md:flex justify-around md:flex-wrap gap-x-1">
        {acd.length > 0 &&
          acd.map(({ bg, title }, index) => (
            <div
              key={index}
              className="my-2 h-[150px] md:h-[250px] md:w-[400px] bg-cover bg-center flex items-center  "
              style={{ backgroundImage: `url(${bg})` }}
            >
              <p className="bg-yellow-300 text-center capitalize  w-full ">
                {" "}
                {title}{" "}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accommodation;
