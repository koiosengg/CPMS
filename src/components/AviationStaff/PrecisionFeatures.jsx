import {
  Plug,
  Zap,
  Sliders,
  CreditCard,
  ShieldCheck,
  Cloud,
  UserCheck,
  Sparkles,
} from "lucide-react";
import PrecisionFeatures from "../Crew360/PrecisionFeatures";

export const smarterStaffTravelFeatures = [
  {
    icon: Plug,
    tone: "blue",
    title: "Built-in Connectors",
    text: "Pre-integrated connectivity with airline operational and reservation systems for faster implementation and reduced integration effort.",
  },
  {
    icon: Zap,
    tone: "cyan",
    title: "Rapid Time to Market",
    text: "Accelerated deployment model enables airlines to realize benefits quickly with minimal disruption.",
  },
  {
    icon: Sliders,
    tone: "blue",
    title: "Tailored to Your Processes",
    text: "Flexible configuration supports your organization's unique staff travel policies, workflows, eligibility rules, and approval processes.",
  },
  {
    icon: CreditCard,
    tone: "cyan",
    title: "Multiple Payment Options",
    text: "Supports a variety of payment methods and settlement models to accommodate diverse employee and airline requirements.",
  },
  {
    icon: ShieldCheck,
    tone: "cyan",
    title: "Enterprise-Ready Security",
    text: "Seamless integration with corporate identity providers through Single Sign-On (SSO) and enterprise authentication frameworks.",
  },
  {
    icon: Cloud,
    tone: "blue",
    title: "Scalable & Cloud-Ready",
    text: "Designed to support airlines of all sizes while meeting modern enterprise architecture and security standards.",
  },
  {
    icon: UserCheck,
    tone: "cyan",
    title: "Enhanced Employee Experience",
    text: "Designed to support airlines of all sizes while meeting modern enterprise architecture and security standards.",
  },
  {
    icon: Sparkles,
    tone: "blue",
    title: "Reduced Administrative Effort",
    text: "Automation of travel requests, approvals, eligibility validation, and reporting processes.",
  },
];

export default function AviationPrecisionFeatures() {
  return (
    <PrecisionFeatures
      kicker="KEY HIGHLIGHTS"
      title={
        <>
          Smarter Staff
          <br />
          Travel Management
        </>
      }
      description="Digitize and manage end-to-end staff travel with configurable workflows built for modern airlines."
      bgWhite={true}
      features={smarterStaffTravelFeatures}
    />
  );
}
