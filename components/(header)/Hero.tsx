"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AirVent,
  CigaretteOff,
  CircleParking,
  CookingPot,
  Facebook,
  Menu,
  WashingMachine,
  Wifi,
  X,
} from "lucide-react";
import Link from "next/link";
import DatePicker from "./DatePicker";
import { Button } from "../ui/button";
import CarouselComponent from "../CarouselComponent";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Address_Contact from "../Address_Contact";

const Hero = () => {
  const pathname = usePathname();

  const images = [
    "/images/caro1.jpg",
    "/images/caro2.jpg",
    "/images/caro3.jpg",
    "/images/caro4.jpg",
  ];

  const features = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: CircleParking, name: "Parking" },
    { icon: AirVent, name: "Air Condition" },
    { icon: CigaretteOff, name: "No Smoking" },
    { icon: WashingMachine, name: "Laundry" },
    { icon: CookingPot, name: "Kitchen" },
  ];

  const menuFeatures = [
    {
      bg: "/images/caro1.jpg",
      titlle: "selecet rooms",
      href: "#accommodation",
    },
    {
      bg: "/images/caro2.jpg",
      titlle: "photo gallery",
      href: "#accommodation",
    },
    { bg: "/images/caro4.jpg", titlle: "attractions", href: "#accommodation" },
  ];

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  // for fixing hydration error , using directly usePathname() was the reason
  useEffect(() => setMounted(true), []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Photo Gallery", href: "/photo_galery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <h3 className="uppercase text-center text-white font-bold bg-yellow-500">
        book now
      </h3>
      <div className="grid place-items-center">
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </div>

      {/* ------------- menu ---------------- */}
      <div className="flex items-center justify-between bg-[#135482] text-white ">
        {/* Burger menu (mobile) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full bg-[#135482] ">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4 ">
                {links.map((link) => {
                  const isActive = mounted && pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={` text-white text-lg transition-colors w-full text-center ${
                        isActive
                          ? " bg-zinc-400 font-semibold "
                          : " hover:bg-yellow-500 hover:text-white"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        {/* ___--------- facebook icon -------- */}
        <Link href="https://www.facebook.com" target="_blank">
          <div className="mr-3 md:hidden">
            <Facebook size={20} />
          </div>
        </Link>
      </div>

      {/*-------------- carousel--------- */}
      <CarouselComponent images={images} />

      {/*-------- icons----------- */}
      <div className="grid grid-cols-2 gap-1 py-2 bg-black/50">
        {features.length > 0 &&
          features.map(({ icon: Icon, name }, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-white text-white py-2 "
            >
              <Icon className="" />
              <span className=""> {name} </span>
            </div>
          ))}
      </div>

      {/* photo gallery , selelct rooms, attractions */}
      <div className=" my-1 ">
        {menuFeatures.length > 0 &&
          menuFeatures.map(({ bg, titlle, href }, index) => (
            <div
              key={index}
              className=" h-[200px] w-full bg-cover bg-center "
              style={{ backgroundImage: `url(${bg})` }}
            >
              <Link href={href}>
                <div
                  className=" h-[60px] flex items-center
                  justify-center opacity-70 text-white textbold
           capitalize text-2xl text-center my-1 "
                  style={{ backgroundColor: "#135482" }}
                >
                  <p>{titlle} </p>
                </div>
              </Link>
            </div>
          ))}
      </div>

      {/* check-in, check-out, check availability */}
      <div style={{ backgroundColor: "#135482" }} className="w-full py-4">
        <div className="px-2 space-y-5">
          <DatePicker status="check-in" />
          <DatePicker status="check-out" />
        </div>

        <p className="text-white text-center font-bold py-5">1 Night Stay</p>
        <div className="text-center">
          <Button className="capitalize">check availability</Button>
        </div>
      </div>

      <Address_Contact />
    </div>
  );
};

export default Hero;
