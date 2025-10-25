"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

const About_Us = () => {
  const [expanded, setExpanded] = useState(false);
  const text =
    "Aussie Rest Motel is located in Cessnock, just a 10-minute drive from Pokolbin wineries, and 2 minutes’ drive from Stonebridge Golf Course. It offers free WiFi and an outdoor swimming pool.Located in a peaceful residential area, all rooms are air-conditioned and offer a TV with cable channels. Towels, linen and tea and coffee making facilities are provided.The property features a guest laundry and free off-street parking. Yours hosts can provide local knowledge about the area, and arrange golf and wine tours.Couples in particular like the location – they rated it 8.1 for a two-person trip.";

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
