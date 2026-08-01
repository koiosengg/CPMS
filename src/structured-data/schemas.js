const BASE_URL = "https://www.crew360.ai";
const COMPANY_NAME = "CREW 360";
const LOGO_URL = `${BASE_URL}/Logo.png`;

// 1. ORGANIZATION SCHEMA
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "logo": LOGO_URL,
  "description": "Leading airline crew performance management and employee staff travel platform for modern aviation operations.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@crew360.ai",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/crew360"
  ]
};

// 2. WEBSITE SCHEMA
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL
    }
  }
};

// 3. SERVICE / PRODUCT SCHEMA - CREW 360
export const crew360ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Crew 360",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "description": "Real-time cabin crew performance management and flight evaluation platform designed for modern airlines.",
  "provider": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "url": BASE_URL
  },
  "url": `${BASE_URL}/product/crew-360`
};

// 4. SERVICE / PRODUCT SCHEMA - MYSTAFFTRAVEL
export const staffTravelServiceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MyStaffTravel",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "description": "Modern airline employee staff travel platform designed to digitize travel privileges, bookings, and approval workflows.",
  "provider": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "url": BASE_URL
  },
  "url": `${BASE_URL}/product/staff-travel`
};

// 5. CONTACT PAGE SCHEMA
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": `Contact ${COMPANY_NAME}`,
  "description": "Get in touch with CREW 360 team for airline crew management and staff travel software inquiries.",
  "url": `${BASE_URL}/contact`,
  "mainEntity": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "email": "info@crew360.ai"
  }
};

// 6. BREADCRUMB SCHEMA HELPER
export const getBreadcrumbSchema = (pageName, pagePath) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": BASE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `${BASE_URL}${pagePath}`
    }
  ]
});

export default {
  organization: organizationSchema,
  webSite: webSiteSchema,
  crew360Service: crew360ServiceSchema,
  staffTravelService: staffTravelServiceSchema,
  contactPage: contactPageSchema,
  getBreadcrumb: getBreadcrumbSchema
};
