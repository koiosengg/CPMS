import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.crew360.ai";

function SEO({ title, description, image = `${BASE_URL}/Logo.png` }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Title Tag
    if (title) {
      document.title = title;
    }

    // 2. Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }

    // 3. Dynamic Canonical URL
    const canonicalHref = pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // 4. Open Graph Tags
    const updateOgMeta = (property, content) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute("property", property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute("content", content);
    };

    updateOgMeta("og:type", "website");
    updateOgMeta("og:url", canonicalHref);
    if (title) updateOgMeta("og:title", title);
    if (description) updateOgMeta("og:description", description);
    if (image) updateOgMeta("og:image", image);

  }, [title, description, image, pathname]);

  return null;
}

export default SEO;
