import React from "react";
import HeadingComponent from "../../HeadingComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LocationMap = () => {
  return (
    <div className="w-full bg-white px-4 py-10  ">
      {/* -------  heading ----------- */}
      <HeadingComponent title="location map" />
      <div className=" lg:grid lg:grid-cols-3 lg:gap-x-5 lg:px-28">
        <div className="py-2 flex flex-col gap-y-3">
          <h2 className="uppercase text-oliver text-2xl font-semibold ">
            {" "}
            location map{" "}
          </h2>
          <p className="text-justify ">
            Located on the first floor of the old United Services Hotel, each
            air-conditioned room offers quality furnishings, a flat-screen TV, a
            refrigerator and tea/coffee making facilities. All rooms include a
            private bathroom.
          </p>
          {/* ----- contact us btn----- */}
          <Link href="/contact_us">
            <Button
              size="sm"
              className={`hover:bg-yellow-400, hover:text-zinc-700 capitalize`}
            >
              {" "}
              contact us{" "}
            </Button>
          </Link>
        </div>

        {/* ----------- google map ----------- */}
        <div className="w-full h-[400px] py-2 lg:col-span-2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1455013582595!2d90.4211498743286!3d23.81105657863532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b2b9bbf5f1%3A0x3fca8aee13f2efc9!2sBashundhara%20City!5e0!3m2!1sen!2sbd!4v1712367890123!5m2!1sen!2sbd"
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
  );
};

export default LocationMap;
