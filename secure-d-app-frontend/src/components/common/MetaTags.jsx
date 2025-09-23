/* Path: secure-d-app-frontend/src/components/common/MetaTags.jsx */

import { useEffect } from "react";

// This component mirrors the behavior of the Next.js MetaTags in a Vite/React app
export default function MetaTags({ data = {} }) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Helpers
    const ensureMeta = ({ name, property, content, id }) => {
      if (!content && content !== "") return null;
      let selector = id
        ? `meta[id="${id}"]`
        : name
        ? `meta[name="${name}"]`
        : property
        ? `meta[property="${property}"]`
        : null;
      let el = selector ? document.head.querySelector(selector) : null;
      if (!el) {
        el = document.createElement("meta");
        if (id) el.id = id;
        if (name) el.setAttribute("name", name);
        if (property) el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", String(content));
      created.push(el);
      return el;
    };

    const ensureLink = ({ rel, href, crossOrigin, type, id }) => {
      if (!href) return null;
      let selector = id ? `link[id="${id}"]` : `link[rel="${rel}"]`;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("link");
        if (id) el.id = id;
        if (rel) el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      if (type) el.setAttribute("type", type);
      if (crossOrigin) el.setAttribute("crossorigin", crossOrigin);
      created.push(el);
      return el;
    };

    const ensureScript = ({ id, type = "text/javascript", innerHTML }) => {
      let el = id ? document.head.querySelector(`script#${id}`) : null;
      if (!el) {
        el = document.createElement("script");
        if (id) el.id = id;
        document.head.appendChild(el);
      }
      el.setAttribute("type", type);
      if (innerHTML !== undefined) el.innerHTML = innerHTML;
      created.push(el);
      return el;
    };

    // Track created/updated elements to allow cleanup
    const created = [];

    // Compute URL and image like the Next.js version
    const url =
      data.url ||
      (typeof window !== "undefined" ? window.location.href : "https://securedapp.io");
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const fullPath = "https://securedapp.io" + path; // kept for parity if needed later

    const defaultImage = "/assets/images/Home.png";
    let imageUrl = data.image || defaultImage;
    if (imageUrl && !/^https?:\/\//i.test(imageUrl)) {
      imageUrl =
        "https://securedapp.io" + (imageUrl.startsWith("/") ? imageUrl : "/" + imageUrl);
    }

    // Title
    if (data.title) document.title = data.title;

    // Canonical
    ensureLink({ rel: "canonical", href: url, id: "link-canonical" });

    // Favicon & Apple touch icon
    ensureLink({
      rel: "icon",
      href: "https://securedapp.io/assets/images/logo.png",
      type: "image/x-icon",
      id: "link-favicon",
    });
    ensureLink({
      rel: "apple-touch-icon",
      href: "https://securedapp.io/assets/images/logo.png",
      id: "link-apple-touch",
    });

    // Basic meta
    ensureMeta({ name: "viewport", content: "width=device-width, initial-scale=1", id: "meta-viewport" });
    ensureMeta({ name: "author", content: "SecureDapp", id: "meta-author" });
    ensureMeta({ name: "theme-color", content: "#000000", id: "meta-theme-color" });
    ensureMeta({ name: "description", content: data.desc || "" });
    if (data.keywords) ensureMeta({ name: "keywords", content: data.keywords });
    if (data.relatedKeywords) ensureMeta({ name: "related-keywords", content: data.relatedKeywords });

    // Open Graph
    ensureMeta({ property: "og:title", content: data.title || "" });
    ensureMeta({ property: "og:description", content: data.desc || "" });
    ensureMeta({ property: "og:image", content: imageUrl });
    ensureMeta({ property: "og:url", content: url });
    ensureMeta({ property: "og:type", content: "article" });

    // Twitter
    ensureMeta({ name: "twitter:card", content: "summary_large_image" });
    ensureMeta({ name: "twitter:title", content: data.title || "" });
    ensureMeta({ name: "twitter:description", content: data.desc || "" });
    ensureMeta({ name: "twitter:image", content: imageUrl });

    // SEO bots
    ensureMeta({ name: "robots", content: "index, follow" });
    ensureMeta({ name: "googlebot", content: "index, follow" });

    // Fonts and external CSS (match Next.js version)
    ensureLink({ rel: "preconnect", href: "https://fonts.googleapis.com", id: "preconnect-gfonts" });
    ensureLink({ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true", id: "preconnect-gstatic" });
    ensureLink({
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      id: "link-google-fonts",
    });
    ensureLink({
      rel: "stylesheet",
      href: "https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css",
      id: "link-fontawesome",
    });

    // JSON-LD Schemas
    const orgSchema = {
      "@context": "https://schema.org/",
      "@type": "Organization",
      "@id": "#Organization",
      url: "https://securedapp.io/",
      legalName: "Vettedcode Technologies India Pvt. Ltd",
      name: "SecureDApp.io",
      description:
        "SecureDApp emerged from a united vision to secure the future of Web3. Founded by two dedicated innovators from India, the company recognized the urgent need for specialized blockchain security solutions.",
      image: "https://securedapp.io/assets/images/ProductPages/ss/hero.webp",
      logo: "https://securedapp.io/assets/images/securedapp-logo-dark.svg",
      telephone: "+919606015868",
      email: "hello@securedapp.in",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "235, 2nd and 3rd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar Bengaluru",
        addressLocality: "Bengaluru",
        addressRegion: "KARNATAKA",
        addressCountry: "IN",
        postalCode: "560038",
      },
      sameAs: [
        "https://www.linkedin.com/company/securedapp/",
        "https://x.com/secure_dapp",
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is SecureDApp ? ",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SecureDApp is a leading blockchain security firm specializing in smart contract audits, decentralized application (DApp) development, and comprehensive compliance solutions. We help businesses secure their blockchain operations, ensuring their projects are safe, reliable, and aligned with industry standards.",
          },
        },
        {
          "@type": "Question",
          name: "What blockchain platforms does SecureDApp support ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SecureDApp supports many blockchain platforms, including Ethereum, Algorand, Solana, Aptos, Hyperledger, Arbitrum, Binance Smart Chain, etc. We cater to both Layer 1 and Layer 2 chains and custodial and non-custodial wallets, offering extensive coverage for your blockchain security needs.",
          },
        },
      ],
    };

    const webSchema = {
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "@id": "#WebPage",
      url: "https://securedapp.io/",
      name: "securedapp.io",
    };

    ensureScript({
      id: "jsonld-org",
      type: "application/ld+json",
      innerHTML: JSON.stringify(orgSchema),
    });
    ensureScript({
      id: "jsonld-web",
      type: "application/ld+json",
      innerHTML: JSON.stringify(webSchema),
    });
    ensureScript({
      id: "jsonld-faq",
      type: "application/ld+json",
      innerHTML: JSON.stringify(faqSchema),
    });

    // Google Analytics (basic gtag init as in provided code)
    ensureScript({
      id: "ga-inline",
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'G-GXZX7PXY8D');
      `,
    });

    // Cleanup: remove elements we created on unmount to avoid duplicates across navigations
    return () => {
      created.forEach((el) => {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
    };
    // We re-run when data changes
  }, [data]);

  // This component only manipulates <head>, renders nothing
  return null;
}
