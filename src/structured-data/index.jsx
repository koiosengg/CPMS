import { useEffect } from "react";
import {
  organizationSchema,
  webSiteSchema,
  crew360ServiceSchema,
  staffTravelServiceSchema,
  contactPageSchema,
  getBreadcrumbSchema
} from "./schemas";

export const JsonLdScript = ({ data }) => {
  const json = JSON.stringify(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = json;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [json]);

  return null;
};

export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={webSiteSchema} />
  </>
);

export const Crew360PageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={crew360ServiceSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Crew 360", "/product/crew-360")} />
  </>
);

export const StaffTravelPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={staffTravelServiceSchema} />
    <JsonLdScript data={getBreadcrumbSchema("MyStaffTravel", "/product/staff-travel")} />
  </>
);

export const ContactPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Contact", "/contact")} />
  </>
);

export const PrivacyPolicyPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Privacy Policy", "/privacy-policy")} />
  </>
);
