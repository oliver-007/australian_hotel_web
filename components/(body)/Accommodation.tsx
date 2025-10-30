import HeadingComponent from "@/components/HeadingComponent";
import Link from "next/link";

const Accommodation = () => {
  const acd = [
    { bg: "/images/family_room.webp", title: "family room" },
    { bg: "/images/deluxe_king_room.webp", title: "deluxe king room " },
    { bg: "/images/deluxe_family_room.webp", title: "deluxe family room " },
    { bg: "/images/queen_room.webp", title: "queen  room " },
    {
      bg: "/images/queen_room_with_sofa_bed.webp",
      title: "queen room with sofa bed ",
    },
    { bg: "/images/twin_room.webp", title: "twin room " },
  ];

  return (
    <div
      id="accommodation"
      className="md:flex items-center justify-center w-full bg-white px-4 "
    >
      <div className=" lg:w-[1200px] md:w-[800px]">
        {/* ---------- ---- heading------------- */}
        <div className="py-5">
          <HeadingComponent title="accommodation" />
        </div>

        {/* --------- gallery --------- */}

        <div className="w-full flex flex-col gap-y-5 justify-center md:flex-row md:flex-wrap md:gap-5   ">
          {acd.length > 0 &&
            acd.map(({ bg, title }, index) => (
              <div
                key={index}
                className=" h-[200px] md:h-[250px] md:w-[380px] bg-cover bg-center "
                style={{ backgroundImage: `url(${bg})` }}
              >
                {" "}
                <div className="w-full relative h-full group flex flex-col items-center justify-center gap-y-5  ">
                  <div className="bg-yellow-300/80  capitalize  w-full md:group-hover:-translate-y-[89px] lg:group-hover:-translate-y-[89px] md:mt-23 md:py-1.5 py-1 group-hover:transition-transform duration-500 ease-in-out flex items-center justify-center ">
                    <p className=" flex items-center  justify-center">
                      {" "}
                      {title}{" "}
                    </p>
                  </div>

                  {/* ------- book now & read more btn ------- */}
                  <div className=" md:opacity-0 md:group-hover:opacity-100 md:scale-0 md:group-hover:scale-100 md:group-hover:transition-all duration-500 ease-in-out flex gap-x-3  md:flex-col md:gap-y-1 md:mb-8 md:origin-center text-sm   ">
                    <Link href="https://book-directonline.com/properties/AussieRestMotelDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=AUD&checkInDate=2025-10-25&checkOutDate=2025-10-26&trackPage=yes">
                      <div className="bg-black/70 hover:bg-black duration-500 px-6 py-2 ">
                        <p className="text-white capitalize">book now</p>
                      </div>
                    </Link>
                    <Link href="/read_more">
                      <div className="bg-black/70 hover:bg-black duration-500 px-6 py-2">
                        <p className="text-white capitalize">read more</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
