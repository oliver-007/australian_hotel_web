import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Address_Contact = () => {
  return (
    <>
      <div className="px-5 py-5 text-white md:flex md:items-center md:justify-around ">
        {/* address */}
        <div className="flex text-center md:w-1/2 ">
          <MapPin />
          <p>163-167 Vincent Street, Cessnock, NSW, 2325, Australia</p>
        </div>
        {/* contact info */}
        <div className=" grid place-items-center md:w-1/2 ">
          <Link href="tel:+0249914712" className="flex my-3 gap-x-2 text-xs">
            <Phone size={15} />
            (02) 4991 4712
          </Link>
          <Link
            href="mailto:vinevalleyinn@yahoo.com "
            className="flex my-3 gap-x-2 text-xs
             "
          >
            <Mail size={15} />
            vinevalleyinn@yahoo.com
          </Link>
        </div>
      </div>
    </>
  );
};

export default Address_Contact;
