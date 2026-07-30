import AirlineChoice from "../components/Home/AirlineChoice";
import Banner from "../components/Crew360/Banner";
import PrecisionFeatures, {
  PurposeBuiltPlatform,
} from "../components/Crew360/PrecisionFeatures";

export default function Crew360() {
  return (
    <main>
      <Banner />
      <AirlineChoice />
      <PrecisionFeatures />
      <PurposeBuiltPlatform />
    </main>
  );
}
