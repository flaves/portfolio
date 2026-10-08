import type { Metadata, Route } from "next";

import { site } from "./site";

// Same image as app/opengraph-image.tsx: a page-level `openGraph` replaces the
// one inherited from the file convention, images included.
const image = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: site.title,
};

/**
 * Metadata for a sub-page. Next.js merges `openGraph` and `twitter` shallowly,
 * so a page that only set `title` would inherit the home page's og:title/og:url.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: Route;
}): Metadata {
  const fullTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
