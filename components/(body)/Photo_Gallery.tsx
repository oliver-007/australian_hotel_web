"use client";

import HeadingComponent from "../HeadingComponent";
import GalleryComponent from "../GalleryComponent";

const Photo_Gallery = () => {
  const photoList = [
    { id: 1, iSrc: "/images/p1.jpg", title: "photo 1" },
    { id: 2, iSrc: "/images/p2.jpg", title: "photo 2" },
    { id: 3, iSrc: "/images/p3.jpg", title: "photo 3" },
    { id: 4, iSrc: "/images/p4.jpg", title: "photo 4" },
    { id: 5, iSrc: "/images/p5.jpg", title: "photo 5" },
    { id: 6, iSrc: "/images/p6.jpg", title: "photo 6" },
  ];

  return (
    <div
      id="photo_gallery"
      className="md:flex items-center justify-center w-full bg-white px-4 "
    >
      <div className=" lg:w-[1200px] md:w-[800px]">
        {/* ---------- ---- heading------------- */}
        <div className="py-5 ">
          <HeadingComponent title="Photo Gallery" />
        </div>
        {/* --------- gallery --------- */}
        <GalleryComponent items={photoList} view={true} />
      </div>
    </div>
  );
};

export default Photo_Gallery;
