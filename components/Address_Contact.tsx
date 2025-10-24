import useWindowSize from "@/app/hooks/useWindowSize";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Address_Contact = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="px-5 py-5 text-zinc-800 md:flex md:items-center md:justify-around lg:justify-between ">
        {/* address */}
        <div className="flex text-center md:w-1/2 ">
          <MapPin />
          <p>43 Shedden St Cessnock, NSW 2325, Australia</p>
        </div>
        {/* contact info */}
        <div className="  flex flex-col items-center justify-center md:w-1/2 lg:flex-row lg:gap-x-10 ">
          <Link
            href="tel:+0249914197"
            className="flex lg:items-center lg:justify-center my-3 gap-x-2 text-xs  lg:text-base "
          >
            <Phone size={width > 993 ? 20 : 15} />
            02 4991 4197
          </Link>
          <Link
            href="mailto:enquiries@aussierest.com.au"
            className="flex lg:items-center lg:justify-center my-3 gap-x-2 text-xs lg:text-base
             "
          >
            <Mail size={width > 993 ? 20 : 15} />
            enquiries@aussierest.com.au
          </Link>
        </div>
      </div>
    </>
  );
};

export default Address_Contact;
