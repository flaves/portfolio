import { site } from "@/lib/site";

const { company } = site;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: company.legalName,
      url: site.url,
      logo: `${site.url}/icon-512.png`,
      email: site.email,
      foundingDate: company.foundingDate,
      vatID: company.vatNumber.replaceAll(/[\s.]/g, ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: company.streetAddress,
        postalCode: company.postalCode,
        addressLocality: company.locality,
        addressRegion: company.region,
        addressCountry: company.countryCode,
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "BCE/KBO enterprise number",
        value: company.enterpriseNumber,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

/** Organization + WebSite structured data, for search engines and AI crawlers. */
export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, `<` escaped as recommended by the Next.js docs
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
