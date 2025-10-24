import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const CarouselComponent = ({ images }: { images: string[] }) => {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="">
          {images.length > 0 &&
            images.map((img, index) => {
              console.log(img);
              return (
                <CarouselItem key={index}>
                  {" "}
                  <div className="relative w-full h-[200px] md:h-[400px] lg:h-[800px]  ">
                    <Image
                      src={img}
                      alt={`slide ${index + 1}`}
                      fill
                      className="object-cover "
                    />
                  </div>{" "}
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="mx-15 opacity-50 hover:opacity-100 cursor-pointer" />
        <CarouselNext className="mx-15 opacity-50 hover:opacity-100 cursor-pointer" />
      </Carousel>
    </>
  );
};

export default CarouselComponent;
