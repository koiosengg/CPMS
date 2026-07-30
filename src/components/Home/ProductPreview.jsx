import GridSection from './GridSection';
import aviation1 from '../../assets/Home/Aviation/1.png';
import aviation2 from '../../assets/Home/Aviation/2.png';
import aviation3 from '../../assets/Home/Aviation/3.png';
import aviation4 from '../../assets/Home/Aviation/4.png';

const solutions = [
  {
    image: aviation1,
    title: 'My Crew 360',
    description:
      "Co-developed with the world's leading cargo airlines and ground handlers, iCargo maximizes revenues, collaboration and cost-efficiencies across the value chain.",
  },
  {
    image: aviation2,
    title: 'My Staff Travel',
    description:
      'With native NDC and offer and order management capabilities, iFly maximizes personalized retail opportunities across channels and traveler touchpoints and end-to-end passenger processing.',
  },
  {
    image: aviation3,
    title: 'Aviation Data',
    description:
      'Intelligent and highly automated, iFlight provides dynamic situational awareness and streamlined processes for optimized operations, crew, and disruption management.',
  },
  {
    image: aviation4,
    title: 'System Integration',
    description:
      'Highly configurable, iLoyal maximizes member engagement revenues by accelerating value delivery through easy partner integration and agile offer deployment.',
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
