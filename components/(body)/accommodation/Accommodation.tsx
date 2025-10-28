import HeadingComponent from "@/components/HeadingComponent";
import Link from "next/link";

const Accommodation = () => {
  const acd = [
    { bg: "/images/caro1.jpg", title: "family room standard" },
    { bg: "/images/caro2.jpg", title: "twin room " },
    { bg: "/images/caro3.jpg", title: "king room " },
  ];

  return (
    <div className=" w-full bg-white px-4 py-8 lg:grid lg:grid-cols-10 ">
      <div className=""></div>
      <div className=" lg:w-full  lg:col-span-8 ">
        {/* ---------- ---- heading------------- */}
        <HeadingComponent title="accommodation" />

        {/* --------- gallery --------- */}

        <div className=" md:flex justify-around md:flex-wrap gap-x-1 lg:w-full  lg:grid lg:grid-cols-3 lg:h-[350px]  lg:gap-x-5 lg:p-3   ">
          {acd.length > 0 &&
            acd.map(({ bg, title }, index) => (
              <div
                key={index}
                className="my-2 h-[150px] md:h-[250px] md:w-[400px] bg-cover bg-center flex items-center lg:w-full lg:h-full lg:my-0 "
                style={{ backgroundImage: `url(${bg})` }}
              >
                {" "}
                <div className="w-full relative  h-full group flex flex-col items-center justify-center  ">
                  <div className="bg-yellow-300/80 lg:py-3 capitalize  w-full group-hover:-translate-y-[93px] mt-23 h-10 group-hover:transition-transform duration-500 ease-in-out flex items-center justify-center ">
                    <p className=" flex items-center  justify-center">
                      {" "}
                      {title}{" "}
                    </p>
                  </div>
                  <div className=" opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 group-hover:transition-all duration-500 ease-in-out flex flex-col gap-y-1 mb-8 origin-center  ">
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
