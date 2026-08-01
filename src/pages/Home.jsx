import Banner from "../components/Home/Banner";
import ProductPreview from "../components/Home/ProductPreview";
import Insights from "../components/Home/Insights";
import SEO from "../components/SEO";
import { HomePageStructuredData } from "../structured-data";

export { default as Banner } from "../components/Home/Banner";

export default function Home() {
  return (
    <>
      <SEO
        title="CREW 360"
        description="CREW 360 empowers modern airlines with real-time cabin crew evaluation, flight insights, and digitized employee staff travel management."
      />
      <HomePageStructuredData />
      <main>
        <Banner />
        <ProductPreview />
        <Insights />
      </main>
    </>
  );
}
