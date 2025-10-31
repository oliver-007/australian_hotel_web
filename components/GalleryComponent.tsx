"use client";

import Link from "next/link";
import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import Image from "next/image";

interface IGalleryObject {
  id?: number;
  iSrc: string;
  title: string;
}

const GalleryComponent = ({
  items,
  view,
}: {
  items: IGalleryObject[];
  view?: boolean;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col gap-y-5 justify-center md:flex-row md:flex-wrap md:gap-5   ">
      {items.length > 0 &&
        items.map((item, index) => (
          <div
            key={index}
            className=" h-[200px] md:h-[250px] md:w-[380px] bg-cover bg-center "
            style={{ backgroundImage: `url(${item.iSrc})` }}
          >
            {" "}
            <div className="w-full relative h-full group flex flex-col items-center justify-center gap-y-5  ">
              <div className="bg-oliver/70 text-white  capitalize  w-full md:group-hover:-translate-y-[89px] lg:group-hover:-translate-y-[89px] md:mt-23 md:py-1.5 py-1 group-hover:transition-transform duration-500 ease-in-out flex items-center justify-center ">
                <p className=" flex items-center  justify-center">
                  {" "}
                  {item.title}{" "}
                </p>
              </div>

              {/* ------- book now & read more btn ------- */}
              <div className=" md:opacity-0 md:group-hover:opacity-100 md:scale-0 md:group-hover:scale-100 md:group-hover:transition-all duration-500 ease-in-out flex gap-x-3  md:flex-col md:gap-y-1 md:mb-8 md:origin-center text-sm   ">
                {view ? (
                  <div
                    onClick={() => setSelectedPhoto(item.iSrc)}
                    className="bg-black/70 hover:bg-black duration-500 px-6 py-2 cursor-pointer "
                  >
                    <p className="text-white capitalize">view</p>
                  </div>
                ) : (
                  <>
                    <Link href="https://book-directonline.com/properties/AussieRestMotelDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=AUD&checkInDate=2025-10-25&checkOutDate=2025-10-26&trackPage=yes">
                      <div className="bg-black/70 hover:bg-black duration-500 px-6 py-2 ">
                        <p className="text-white capitalize">book now</p>
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="bg-black/70 hover:bg-black duration-500 px-6 py-2">
                        <p className="text-white capitalize">read more</p>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      {/* --------- photo modal ---------- */}
      <ModalComponent
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      >
        {selectedPhoto && (
          <div className="w- ">
            <Image
              src={selectedPhoto}
              alt={selectedPhoto}
              width={800}
              height={400}
              className="  "
            />
          </div>
        )}
      </ModalComponent>
    </div>
  );
};

export default GalleryComponent;
