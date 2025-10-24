"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

const About_Us = () => {
  const [expanded, setExpanded] = useState(false);
  const text =
    "The Vine Valley Inn is an award winning Inn located in Cessnock Hunter Valley. There's an abundance of vineyards to visit as well as breweries and distillers. Produce such as locally made cheese and chocolate are       open for tastings, as well as olives with tastings offered 7 days a week. The area also offers world class golf courses, excellent      restaurants, antique shops, galleries and concerts showcasing performers       from Australia and the world stage. Our 13 guest rooms are all unique and colourfully decorated with treasures, old, different and new. We offer 3 different room types catering for family, couples, friends and those away on business. The Vine Valley Inn has been operating in it's current form since early 2013. The old United Service Hotel was built in 1923 and operated as a pub until the mid 80's when the bars were        converted to retail shops. The accommodation remained and the once        shared bathrooms went and ensuites were added to each room. Cosy        friendly unique boutique accommodation retro vintage styling... we are        artists collectors designers inventors makers and merchants... lovers of        all things chlorophyll green living and producing oxygen... we have a        mid century modern eclectic madness for colour shape texture and visual        delight in the details... we aim to provide personable service for our        guests whilst they enjoy the optimal cleanliness and quality comfort we        provide... need anything just ask, we are not robots and the smiles are        real...";

  return (
    <div className="w-full bg-white text-justify py-4 md:px-28 px-5 ">
      {/*------- read more --------*/}

      <p>{expanded ? text : `${text.substring(0, 500)}....`}</p>
      <div className="text-center pt-4">
        <Button
          onClick={() => setExpanded(!expanded)}
          className=" text-black bg-yellow-400 hover:text-yellow-400 cursor-pointer   "
        >
          {expanded ? (
            <p className="flex items-center justify-center gap-x-2">
              Read Less{" "}
              <span>
                <ChevronUp />
              </span>{" "}
            </p>
          ) : (
            <p className="flex items-center justify-center gap-x-2">
              {" "}
              Read More{" "}
              <span>
                {" "}
                <ChevronDown />{" "}
              </span>{" "}
            </p>
          )}
        </Button>
      </div>
    </div>
  );
};

export default About_Us;
