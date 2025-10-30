import React from "react";
import HeadingComponent from "../HeadingComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LocationMap = () => {
  return (
    <div className="w-full bg-white px-4 md:flex md:items-center md:justify-center  ">
      <div className="lg:w-[1200px] md:w-[800px] ">
        {/* -------  heading ----------- */}
        <div className="py-5">
          <HeadingComponent title="location map" />
        </div>
        <div className=" lg:grid lg:grid-cols-3 lg:gap-x-10 lg:px-5 pb-10 ">
          <div className="py-2 flex flex-col justify-center gap-y-3">
            <h2 className="uppercase text-oliver text-2xl font-semibold ">
              {" "}
              location map{" "}
            </h2>
            <p className="text-justify ">
              Located on the first floor of the old United Services Hotel, each
              air-conditioned room offers quality furnishings, a flat-screen TV,
              a refrigerator and tea/coffee making facilities. All rooms include
              a private bathroom.
            </p>
          </div>

          {/* ----------- google map ----------- */}
          <div className="w-full h-[400px] py-2 lg:col-span-2 ">
            <iframe
              src="https://www.google.com/maps?q=-32.83572930196964, 151.34619463558235&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
