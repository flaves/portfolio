import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";

import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/site/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Every route is fully prerendered: the build fails if request-time
// rendering (cookies, headers, uncached data…) ever slips in.
export const ensureStatic = "navigation";

// Icons come from the file conventions (favicon.ico, icon.svg, apple-icon.png),
// the Open Graph image from opengraph-image.tsx, the manifest from manifest.ts.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI ad generator",
    "AI video ads",
    "brief to video",
    "ad creative automation",
    "performance marketing",
    "DTC ads",
  ],
  authors: [{ name: site.company.legalName, url: site.url }],
  creator: site.company.legalName,
  publisher: site.company.legalName,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Smooth scrolling for in-page anchors only: Next.js turns it off during
      // route changes so a new page always opens at the very top.
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${jetbrainsMono.variable} dark antialiased`}
    >
      <body className="min-h-dvh">
        <Providers>
          {/* biome-ignore lint/correctness/useUniqueElementIds: in-page anchor target (#top), rendered once */}
          <div id="top" className="flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
        <JsonLd />
      </body>
    </html>
  );
}
