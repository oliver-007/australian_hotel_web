"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Address_Contact from "../Address_Contact";
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
    { name: "Home", href: "/" },
    { name: "Family Room Standard", href: "/family_room_standard" },
    { name: "Photo Gallery", href: "/photo_gallery" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Whats On", href: "/whats_on" },
    { name: "Twin Room Standard", href: "/twin_room_standard" },
    { name: "Contact Us", href: "/contact_us" },
    { name: "King Room Standard", href: "/king_room_standard" },
  ];

  return (
    <div className="bg-[#135482] w-full ">
      <div className="lg:flex lg:justify-center ">
        <div className=" text-white flex flex-col gap-y-4 items-center justify-center py-2 md:flex-row  md:px-28  md:py-12  ">
          {/* ------- logo,  btn ------- */}
          <div className=" md:w-1/2  py-3  flex flex-col gap-y-5 items-center justify-center ">
            <Image
              src="https://aussierest.com.au/wp-content/uploads/2025/07/Aussie-Rest-Motel-Logo-White.svg"
              alt="logo"
              width={200}
              height={100}
            />
            <Button className="uppercase bg-yellow-300 hover:bg-black/50 hover:text-white text-zinc-800  ">
              {" "}
              book online{" "}
            </Button>
          </div>
          {/* ---- address & contact info-----  */}
          <div className="md:w-1/2 px-5 md:px-0">
            <h1 className="capitalize text-center  text-2xl font-bold">
              {" "}
              the aussie rest{" "}
            </h1>
            <div className="">
              {/* address */}
              <div className="flex  justify-center gap-x-2 text-center  ">
                <MapPin />
                <p>43 Shedden St Cessnock, NSW 2325, Australia</p>
              </div>
              {/* contact info */}
              <div className=" flex flex-col items-center justify-center ">
                <Link
                  href="tel:+0249914197"
                  className="flex items-center justify-center my-3 gap-x-2 text-xs lg:text-base"
                >
                  <Phone size={width > 993 ? 20 : 15} />
                  0249914197
                </Link>
                <Link
                  href="mailto:enquiries@aussierest.com.au"
                  className="flex items-center justify-center my-3 gap-x-2 text-xs lg:text-base
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
        <div className="grid grid-cols-2 gap-y-3 place-items-center-safe py-3 md:py-12 ">
          {links.length > 0 &&
            links.map(({ name, href }, index) => {
              const isActive = mounted && pathname === href;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`w-fit text-white text-xs hover:bg-black/50 px-2 py-1 ${
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
        &copy; copyright reserved by vine valley inn 2025. website by oliver
        ahmed.
      </div>
    </div>
  );
};

export default Footer;
