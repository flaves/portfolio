import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalDetails,
  LegalPage,
  LegalSection,
} from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const { company } = site;

export const metadata: Metadata = pageMetadata({
  title: "Legal notice",
  description: `Legal information about ${company.legalName}, publisher of ${site.name}.`,
  path: "/legal-notice",
});

// Required by the Belgian Code of Economic Law (art. III.74 and XII.6).
export default function LegalNoticePage() {
  return (
    <LegalPage eyebrow="LEGAL" title="Legal notice">
      <LegalSection title="Website publisher">
        <p>
          This website, flav.es, is published by {company.legalName}, a private
          limited company incorporated under Belgian law.
        </p>
        <LegalDetails
          items={[
            { label: "Company name", value: company.legalName },
            { label: "Legal form", value: company.legalForm },
            {
              label: "Registered office",
              value: `${company.streetAddress}, ${company.postalCode} ${company.locality}, ${company.country}`,
            },
            {
              label: "Enterprise number (CBE)",
              value: company.enterpriseNumber,
            },
            { label: "VAT number", value: company.vatNumber },
            {
              label: "Email",
              value: <a href={`mailto:${site.email}`}>{site.email}</a>,
            },
          ]}
        />
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The content of this website (text, visuals, logo, layout and code)
          belongs to {company.legalName} unless stated otherwise. Any
          reproduction, distribution or adaptation, in whole or in part,
          requires our prior written consent.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          We do our best to keep the information on this website accurate and up
          to date, but we cannot guarantee that it is complete or free of
          errors. It is provided for general information only.{" "}
          {company.legalName} cannot be held liable for any damage resulting
          from the use of this website or from its unavailability.
        </p>
      </LegalSection>

      <LegalSection title="External links">
        <p>
          This website may link to third-party websites. We have no control over
          their content or availability and accept no responsibility for them.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and personal data">
        <p>
          This website uses no cookies and no trackers. How we handle personal
          data is explained in our{" "}
          <Link href="/cookies">cookie and privacy policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Applicable law">
        <p>
          This legal notice is governed by Belgian law. Unless mandatory rules
          provide otherwise, the courts of Brussels have jurisdiction over any
          dispute.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
