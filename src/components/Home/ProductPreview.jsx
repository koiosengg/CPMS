import GridSection from "./GridSection";
import aviation1 from "../../assets/Home/Aviation/1.webp";
import aviation2 from "../../assets/Home/Aviation/2.webp";
import aviation3 from "../../assets/Home/Aviation/3.webp";
import aviation4 from "../../assets/Home/Aviation/4.webp";

const solutions = [
  {
    image: aviation1,
    title: "MyCrew360",
    description:
      "Transform crew administration, performance management, disciplinary workflows, appraisals, and employee engagement into a single intelligent platform.",
  },
  {
    image: aviation2,
    title: "My Staff Travel",
    description:
      "Modern staff travel solution designed for airlines to digitize and simplify the end-to-end employee travel experience. Configurable to your policies and processes, empowering your people and operations.",
  },
  {
    image: aviation3,
    title: "Aviation Data Services",
    description:
      "Pre-built data model coupled with Intelligent and highly automated services to provide dynamic situational awareness and streamlined processes for optimized operations, crew, and disruption management.",
  },
  {
    image: aviation4,
    title: "System Integration Services ",
    description:
      "Team of experts coupled with pre-built connectors for common airline systems provide system integration services to help is any Airline system implementation projects.",
  },
];

export default function ProductPreview() {
  return (
    <GridSection
      id="features"
      pill="OUR SOLUTIONS"
      title="Smart Aviation Solutions"
      subtitle="A purpose-built platform that mirrors how your operations team actually works."
      items={solutions}
      columns={2}
    />
  );
}
