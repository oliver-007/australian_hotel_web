"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Address_Contact from "../Address_Contact";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
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
      <div className=" text-white flex flex-col gap-y-4 items-center justify-center py-2">
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        <Button className="uppercase bg-yellow-300 hover:bg-black/50 hover:text-white text-zinc-800  ">
          {" "}
          book online{" "}
        </Button>
        <h1 className="capitalize  text-3xl font-bold"> vine valley inn </h1>
        {/* ---- address & contact info-----  */}
        <Address_Contact />
      </div>
      {/* -------all menu  ------ */}
      <div className="grid grid-cols-2 gap-y-3 place-items-center-safe">
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

      {/* ------ copy right ------ */}
      <div className="bg-yellow-300 text-zinc-700 text-center w-full py-3 capitalize ">
        &copy; copyright reserved by vine valley inn 2025
      </div>
    </div>
  );
};

export default Footer;
