import useWindowSize from "@/app/hooks/useWindowSize";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Address_Contact = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="px-5 text-zinc-800 md:flex md:items-center md:justify-around lg:justify-center py-2 lg:py-5 ">
        {/* address */}
        <div className="flex justify-center md:w-1/2  ">
          <MapPin />
          <p>43 Shedden St Cessnock, NSW 2325, Australia</p>
        </div>
        {/* contact info */}
        <div className="  flex flex-col items-center justify-center md:w-1/2 lg:flex-row lg:items-center lg:justify-center lg:gap-x-10  py-4 lg:py-0 space-y-2 ">
          <Link
            href="tel:+0249914197"
            className="flex items-center justify-center gap-x-2 text-xs  lg:text-base  "
          >
            <Phone size={width > 1024 ? 20 : 15} />
            02 4991 4197
          </Link>
          <Link
            href="mailto:enquiries@aussierest.com.au"
            className="flex items-center justify-center gap-x-2 text-xs lg:text-base 
             "
          >
            <Mail size={width > 1024 ? 20 : 15} />
            enquiries@aussierest.com.au
          </Link>
        </div>
      </div>
    </>
  );
};

export default Address_Contact;
