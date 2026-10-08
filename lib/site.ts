/** Single source for the site's identity: metadata, JSON-LD and legal pages. */
export const site = {
  name: "Flaves",
  url: "https://flav.es",
  title: "Flaves — One brief in. One finished ad out.",
  description:
    "Flaves reads your brief, splits it into shots, generates each shot as a still and then as video, cuts the edit and hands you a ready-to-run creative.",
  email: "hello@flav.es",
  locale: "en_US",
  /** Legal entity, as registered in the Belgian Crossroads Bank for Enterprises (BCE/KBO). */
  company: {
    legalName: "FLAVES SRL",
    legalForm: "Société à responsabilité limitée (SRL)",
    enterpriseNumber: "0737.552.960",
    /** Belgian VAT number: the enterprise number prefixed with BE. */
    vatNumber: "BE 0737.552.960",
    streetAddress: "Avenue Louise 163",
    postalCode: "1050",
    locality: "Ixelles",
    region: "Brussels-Capital Region",
    country: "Belgium",
    countryCode: "BE",
    foundingDate: "2019-11-08",
  },
  /** Date shown on the legal pages, ISO 8601. */
  legalUpdatedAt: "2026-10-08",
} as const;
