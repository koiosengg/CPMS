import Banner from "../components/Home/Banner";
import ProductPreview from "../components/Home/ProductPreview";
import Insights from "../components/Home/Insights";

export { default as Banner } from "../components/Home/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductPreview />
      <Insights />
    </main>
  );
}
