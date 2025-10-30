import Accommodation from "@/components/(body)/Accommodation";
import About_Us from "@/components/(body)/About_Us";

import LocationMap from "@/components/(body)/Location_map";
import Policies from "@/components/(body)/Policies";
import Attractions from "@/components/(body)/Attractions";

export default function Home() {
  return (
    <div className=" ">
      <About_Us />
      <Policies />
      <Accommodation />
      <Attractions />
      <LocationMap />
    </div>
  );
}
