"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import useWindowSize from "@/app/hooks/useWindowSize";

const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { width } = useWindowSize();
  // for fixing hydration error , using directly usePathname() was the reason
  useEffect(() => setMounted(true), []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Photo Gallery", href: "#photo_gallery" },
    { name: "Accommodation", href: "#accommodation" },
    { name: "Attractions", href: "#attractions" },
    { name: "Policies", href: "#policies" },
  ];

  return (
    <div className="bg-oliver w-full ">
      <div className="lg:flex lg:justify-around ">
        <div className=" text-white flex flex-col gap-y-4 items-center justify-center py-2 lg:py-5 md:flex-row  md:py-12  ">
          {/* ------- logo,  btn ------- */}
          <div className=" md:w-1/2  py-3  flex flex-col gap-y-5 items-center justify-center ">
            <Link href="/">
              <Image
                src="https://aussierest.com.au/wp-content/uploads/2025/07/Aussie-Rest-Motel-Logo-White.svg"
                alt="logo"
                width={200}
                height={100}
              />
            </Link>
            <Link
              href="https://book-directonline.com/properties/AussieRestMotelDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=AUD&checkInDate=2025-10-25&checkOutDate=2025-10-26&trackPage=no"
              target="_blank"
            >
              <Button className="uppercase bg-yellow-300 hover:bg-black/50 hover:text-white text-zinc-800 cursor-pointer ">
                {" "}
                book online{" "}
              </Button>
            </Link>
          </div>
          {/* ---- address & contact info-----  */}
          <div className="md:w-1/2 px-5 md:px-0 text-center ">
            <h1 className="capitalize text-center text-2xl font-bold">
              {" "}
              the aussie rest{" "}
            </h1>
            <div className="">
              {/* address */}
              <div className="flex  justify-center gap-x-2   ">
                <MapPin />
                <p>43 Shedden St Cessnock, NSW 2325, Australia</p>
              </div>
              {/* contact info */}
              <div className=" flex flex-col items-center justify-center my-5 space-y-2 ">
                <Link
                  href="tel:+0249914197"
                  className="flex items-center justify-center gap-x-2 text-xs lg:text-base"
                >
                  <Phone size={width > 993 ? 20 : 15} />
                  0249914197
                </Link>
                <Link
                  href="mailto:enquiries@aussierest.com.au"
                  className="flex items-center justify-center gap-x-2 text-xs lg:text-base
                "
                >
                  <Mail size={width > 993 ? 20 : 15} />
                  enquiries@aussierest.com.au
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* -------all menu  ------ */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-3 place-items-center-safe py-3 md:py-12 ">
          {links.length > 0 &&
            links.map(({ name, href }, index) => {
              const isActive = mounted && pathname === href;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`lg:w-full flex items-center justify-center text-white text-xs hover:bg-black/50 px-2 py-1 ${
                    isActive
                      ? " w-fit border border-white shadow-sm shadow-yellow-200  px-2 py-1  "
                      : ""
                  }  `}
                >
                  {" "}
                  {name}{" "}
                </Link>
              );
            })}
        </div>
      </div>

      {/* ------ copy right ------ */}
      <div className="bg-yellow-300 text-zinc-700 text-center w-full py-3 capitalize ">
        &copy; copyright reserved by the aussie rest 2025. created by Focuson
        Digital.
      </div>
    </div>
  );
};

export default Footer;
