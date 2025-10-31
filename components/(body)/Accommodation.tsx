import HeadingComponent from "@/components/HeadingComponent";
import Link from "next/link";
import GalleryComponent from "../GalleryComponent";

const Accommodation = () => {
  const acd = [
    { iSrc: "/images/family_room.webp", title: "family room" },
    { iSrc: "/images/deluxe_king_room.webp", title: "deluxe king room " },
    { iSrc: "/images/deluxe_family_room.webp", title: "deluxe family room " },
    { iSrc: "/images/queen_room.webp", title: "queen  room " },
    {
      iSrc: "/images/queen_room_with_sofa_bed.webp",
      title: "queen room with sofa bed ",
    },
    { iSrc: "/images/twin_room.webp", title: "twin room " },
  ];

  return (
    <div
      id="accommodation"
      className="md:flex items-center justify-center w-full bg-white px-4 "
    >
      <div className=" lg:w-[1200px] md:w-[800px]">
        {/* ---------- ---- heading------------- */}
        <div className="py-5 ">
          <HeadingComponent title="accommodation" />
        </div>
        {/* --------- gallery --------- */}
        <GalleryComponent items={acd} view={false} />
      </div>
    </div>
  );
};

export default Accommodation;
