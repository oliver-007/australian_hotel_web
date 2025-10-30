"use client";

import CarouselComponent from "@/components/CarouselComponent";
import HeadingComponent from "@/components/HeadingComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Attractions = () => {
  const atcImgs = [
    "/images/hunter_valley_garden.webp",
    "/images/george_jeffery_park.jpg",
    "/images/mountain_view_park.jpg",
    "/images/cessnock_showground.jpeg",
  ];
  const atcList = [
    "» Cessnock Showground (400m)",
    "» East End Oval (1.8km)",
    "» Mount View Park (1.8km)",
    "» Baddeley Park (2.2km)",
    "» Bellbird Heights Park (4km)",
    "» George Jeffery Park (5km)",
    "» Sports Ground (9km)",
    "» Pokolbin Park (9km)",
    "» Jock Stewart Park (12km)",
    "» Hunter Valley Gardens (12km)",
  ];

  return (
    <div
      id="attractions"
      className="w-full md:flex justify-center items-center   px-4  bg-[#F8F9FA] "
    >
      <div className=" lg:w-[1200px] md:w-[800px] ">
        <div className="py-5">
          <HeadingComponent title="attractions" />
        </div>
        <div className="lg:flex lg:justify-around lg:items-center w-full">
          <div className="lg:w-[600px]  ">
            <CarouselComponent images={atcImgs} />
          </div>
          <div className="flex items-center flex-col">
            <h2 className="uppercase text-2xl text-oliver font-semibold pt-2">
              lsit of attractions
            </h2>
            <div className="pl-5 py-5 space-y-2">
              {atcList.length > 0 &&
                atcList.map((atc, index) => (
                  <ul key={index}>
                    <li> {atc} </li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
