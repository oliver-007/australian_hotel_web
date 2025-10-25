"use client";

import CarouselComponent from "@/components/CarouselComponent";
import HeadingComponent from "@/components/HeadingComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Attractions = () => {
  const atcImgs = ["/images/atc1.jpg", "/images/atc2.jpg", "/images/atc3.jpg"];
  const atcList = [
    "» Great Northern Trading Post",
    "» The Sourdough Baker",
    "» Hunter Valley Zoo",
    "» Hunter Valley Gardens",
    "» Wollombi",
    "» Cessnock Regional Art Gallery",
    "» Baiame Cave",
    "» Watagans National Park",
    "» Werakata National Park",
  ];

  return (
    <div className="w-full  px-4 md:px-28 bg-[#F8F9FA] py-8 ">
      <HeadingComponent title="attractions" />
      <div className="lg:flex lg:justify-around lg:items-center w-full">
        <div className=" lg:h-[500px] lg:overflow-hidden lg:w-[700px] ">
          <CarouselComponent images={atcImgs} />
        </div>
        <div>
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
          <div className="text-center lg:text-start">
            <Link href="/attractions">
              <Button
                variant="default"
                className="hover:bg-amber-300 hover:text-zinc-700 m  "
                size="sm"
              >
                {" "}
                Read more...{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
