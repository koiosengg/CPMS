import SEO from "../components/SEO";
import { PrivacyPolicyPageStructuredData } from "../structured-data";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy" />
      <PrivacyPolicyPageStructuredData />
      <main className="privacy-policy-page" style={{ minHeight: "60vh" }} />
    </>
  );
}
