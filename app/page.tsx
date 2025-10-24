import LocationMap from "@/components/(body)/location/Location_map";
import Accommodation from "@/components/(body)/accommodation/Accommodation";
import Rules_Regulations from "@/components/(body)/Rules_Regulations";
import About_Us from "@/components/(body)/About_Us";
import Attractions from "@/components/(body)/attractions/Attractions";

export default function Home() {
  return (
    <div className="">
      <About_Us />
      <Rules_Regulations />
      <Accommodation />
      <Attractions />
      <LocationMap />
    </div>
  );
}
