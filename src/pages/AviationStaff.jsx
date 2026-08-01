import Banner from "../components/AviationStaff/Banner";
import SystemOverview from "../components/AviationStaff/SystemOverview";
import PrecisionFeatures from "../components/AviationStaff/PrecisionFeatures";
import SEO from "../components/SEO";
import { StaffTravelPageStructuredData } from "../structured-data";

export default function AviationStaff() {
  return (
    <>
      <SEO
        title="MyStaffTravel"
        description="MyStaffTravel digitizes airline employee travel privileges, automated booking, approval workflows, and system integrations."
      />
      <StaffTravelPageStructuredData />
      <main>
        <Banner />
        <SystemOverview />
        <PrecisionFeatures />
      </main>
    </>
  );
}
