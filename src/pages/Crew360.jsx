import AirlineChoice from "../components/Home/AirlineChoice";
import Banner from "../components/Crew360/Banner";
import PrecisionFeatures, {
  PurposeBuiltPlatform,
} from "../components/Crew360/PrecisionFeatures";
import SEO from "../components/SEO";
import { Crew360PageStructuredData } from "../structured-data";

export default function Crew360() {
  return (
    <>
      <SEO
        title="Crew 360"
        description="Real-time cabin crew evaluation, flight performance analytics, and dynamic supervisor workflow management for modern airlines."
      />
      <Crew360PageStructuredData />
      <main>
        <Banner />
        <AirlineChoice />
        <PrecisionFeatures />
        <PurposeBuiltPlatform />
      </main>
    </>
  );
}
