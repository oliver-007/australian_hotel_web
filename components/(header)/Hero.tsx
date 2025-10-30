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
  Coffee,
  CookingPot,
  Facebook,
  Mail,
  Menu,
  Phone,
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
import useWindowSize from "@/app/hooks/useWindowSize";

const Hero = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();
  console.log(width);
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
    { icon: Coffee, name: "Coffee Machine" },
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
      href: "/photo_gallery",
    },
    { bg: "/images/caro4.jpg", titlle: "attractions", href: "#attractions" },
  ];

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  // for fixing hydration error , using directly usePathname() was the reason
  useEffect(() => setMounted(true), []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Accommodation", href: "#accommodation" },
  ];

  return (
    <div className=" lg:flex flex-col items-center justify-center ">
      <div className=" lg:max-w-[1000px] md:w-full  ">
        {/* ------------ large screen view ------------ */}
        {width >= 1024 ? (
          <div className="grid grid-cols-5 bg-black/50 text-white ">
            {/* -----logo , menu, icons---- */}
            <div className="col-span-2">
              <div className="">
                {/* -------- book now btn --------- */}

                <h3 className=" tracking-[0.7em]  uppercase text-center text-white font-bold bg-oliver py-2 flex items-center justify-center  ">
                  <Link href="https://book-directonline.com/properties/AussieRestMotelDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=AUD&checkInDate=2025-10-25&checkOutDate=2025-10-26&trackPage=yes">
                    <Button className=" border border-yellow-300 bg-transparent hover:bg-black/50 capitalize animate-pulse cursor-pointer  ">
                      book now
                    </Button>
                  </Link>
                </h3>
                <div className="py-10 flex items-center justify-center">
                  <Link href="/">
                    <Image
                      src="/images/aus-logo.png"
                      alt="logo"
                      width={300}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
              {/* menu */}
              <div className="space-y-1 px-4">
                {links.length > 0 &&
                  links.map(({ name, href }, index) => {
                    const isActive = mounted && pathname === href;
                    return (
                      <Link
                        scroll={true}
                        key={index}
                        href={href}
                        className={`flex flex-col items-center justify-center py-1  ${
                          isActive
                            ? "bg-oliver  "
                            : "hover:bg-yellow-500 hover:text-white"
                        }  `}
                      >
                        {name}
                      </Link>
                    );
                  })}
              </div>
              <div className="my-1">
                {/* contact info */}
                <div className="  flex flex-col items-center justify-between h-[55px] ">
                  <Link
                    href="tel:+0249914197"
                    className="flex items-center justify-center gap-x-2 text-base "
                  >
                    <Phone size={width >= 1024 ? 20 : 15} />
                    02 4991 4197
                  </Link>
                  <Link
                    href="mailto:enquiries@aussierest.com.au"
                    className="flex lg:items-center lg:justify-center gap-x-2 text-xs lg:text-base
             "
                  >
                    <Mail size={width >= 1024 ? 20 : 15} />
                    enquiries@aussierest.com.au
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* ___--------- facebook icon -------- */}
                <Link
                  href="https://www.facebook.com/Aussierestmotelcessnock"
                  target="_blank"
                >
                  <div className=" p-3 rounded-full bg-black ">
                    <Facebook size={20} />
                  </div>
                </Link>
              </div>

              {/* icons */}
              <div className="grid grid-cols-2 gap-0 place-items-center-safe mt-2 ">
                {features.length > 0 &&
                  features.map(({ icon: Icon, name }, index) => (
                    <div
                      key={index}
                      className={`w-50 h-20  flex flex-col items-center justify-center border-r border-b border-gray-300 ${
                        index % 2 === 1 ? "border-r-0 " : ""
                      } ${index >= features.length - 2 ? "border-b-0" : ""}`}
                    >
                      <Icon size={30} />
                      <p> {name} </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* ----- large scr carousel ---- */}
            <div className="col-span-3">
              <div className=" ">
                <CarouselComponent images={images} />
              </div>
              {/*--------- large scr photo gallery , selelct rooms, attractions -------*/}
              <div className=" my-1 md:grid grid-cols-3 gap-x-1 ">
                {menuFeatures.length > 0 &&
                  menuFeatures.map(({ bg, titlle, href }, index) => (
                    <Link href={href} key={index}>
                      <div
                        className=" h-[280px] w-full bg-cover bg-center group cursor-pointer "
                        style={{ backgroundImage: `url(${bg})` }}
                      >
                        <div
                          className=" h-[60px] flex items-center
                  justify-center text-white textbold
           capitalize text-2xl text-center my-1 bg-oliver/70 group-hover:bg-oliver duration-300 "
                        >
                          <p>{titlle} </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          // ----------- mobile screen view -------------
          <div className=" ">
            <h3 className=" py-2 uppercase text-center text-white font-bold bg-oliver ">
              <Link
                href="https://book-directonline.com/properties/AussieRestMotelDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=AUD&checkInDate=2025-10-25&checkOutDate=2025-10-26&trackPage=yes"
                target="_blank"
              >
                <Button className=" border border-yellow-300 bg-transparent hover:bg-black/50 capitalize animate-pulse cursor-pointer">
                  book now
                </Button>
              </Link>
            </h3>
            <div className=" py-2 grid place-items-center bg-zinc-600 ">
              <Link href="/">
                <Image
                  src="/images/aus-logo.png"
                  alt="logo"
                  width={200}
                  height={100}
                />
              </Link>
            </div>
          </div>
        )}

        {/* ------------- menu ---------------- */}
        <div className="flex items-center justify-between bg-oliver text-white ">
          {/* Burger menu (mobile) */}
          <div className="lg:hidden">
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
              <SheetContent side="top" className="w-full bg-oliver ">
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-4 ">
                  {links.map(({ name, href }, index) => {
                    const isActive = mounted && pathname === href;
                    return (
                      <Link
                        scroll={true}
                        key={index}
                        href={href}
                        className={` text-white text-lg transition-colors w-full text-center ${
                          isActive
                            ? " bg-zinc-400 font-semibold "
                            : " hover:bg-yellow-500 hover:text-white"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          {/* ___--------- facebook icon -------- */}
          <Link
            href="https://www.facebook.com/Aussierestmotelcessnock"
            target="_blank"
          >
            <div className="mr-3 lg:hidden">
              <Facebook size={20} />
            </div>
          </Link>
        </div>

        {/*-------------- carousel--------- */}
        <div className=" lg:hidden">
          <CarouselComponent images={images} />
        </div>

        {/*-------- icons----------- */}
        <div className="grid grid-cols-2 gap-1 py-2 bg-black/50 md:flex md:justify-around lg:hidden ">
          {features.length > 0 &&
            features.map(({ icon: Icon, name }, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-white text-white py-2 md:border-0 "
              >
                <Icon size={30} />
                <span className="text-xs"> {name} </span>
              </div>
            ))}
        </div>

        {/* photo gallery , selelct rooms, attractions */}
        <div className=" my-1 md:grid grid-cols-3 gap-x-1 lg:hidden ">
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
           capitalize text-2xl text-center my-1 bg-oliver "
                  >
                    <p>{titlle} </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* check-in, check-out, check availability */}
      <div className="w-full py-4 bg-oliver lg:flex items-center justify-center gap-x-10 ">
        <div className="flex flex-col gap-y-4  md:flex-row md:gap-x-10 lg:gap-x-5 items-center justify-center ">
          <DatePicker status="check-in" />
          <DatePicker status="check-out" />
        </div>

        <p className="text-white text-center font-bold py-5">1 Night Stay</p>
        <div className="text-center">
          <Link
            href="https://book-directonline.com/properties/AussieRestMotelDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=AUD&checkInDate=2025-10-25&checkOutDate=2025-10-26&trackPage=no"
            target="_blank"
          >
            <Button className="capitalize cursor-pointer">
              check availability
            </Button>
          </Link>
        </div>
      </div>
      <div className=" w-full bg-white  lg:flex lg:items-center lg:justify-center ">
        <div className="lg:w-[1200px] md:w-[800px] ">
          <Address_Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
