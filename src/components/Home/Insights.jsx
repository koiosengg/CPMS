import GridSection from './GridSection';
import img1 from '../../assets/Home/Insight/img1.webp';
import img2 from '../../assets/Home/Insight/img2.webp';
import img3 from '../../assets/Home/Insight/img3.webp';

const insightsData = [
  {
    image: img1,
    title:
      'Crew360 Revolutionizes Airline Crew Management with AI-Powered Scheduling',
  },
  {
    image: img2,
    title:
      "Airline Crew Management Reimagined with Crew360's Unified Platform",
  },
  {
    image: img3,
    title:
      "Next-Generation Crew Planning Powered by Crew360's Intelligent Platform",
  },
];

export default function Insights() {
  return (
    <GridSection
      id="insights"
      pill="LATEST NEWS"
      title={
        <>
          Insights &<br />
          Industry Updates
        </>
      }
      subtitle="Stay informed with the latest company news & developments"
      items={insightsData}
      columns={3}
    />
  );
}
