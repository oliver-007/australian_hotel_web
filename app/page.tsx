import Accommodation from "@/components/(body)/Accommodation";
import About_Us from "@/components/(body)/About_Us";
import Attractions from "@/components/(body)/Attractions";
import LocationMap from "@/components/(body)/Location_map";
import Policies from "@/components/(body)/Policies";

export default function Home() {
  return (
    <div className="">
      <About_Us />
      <Policies />
      <Accommodation />
      <Attractions />
      <LocationMap />
    </div>
  );
}
