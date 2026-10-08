import type { Metadata } from "next";

import {
  LegalDetails,
  LegalPage,
  LegalSection,
} from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const { company } = site;

export const metadata: Metadata = pageMetadata({
  title: "Cookie policy",
  description: `${site.name} uses no cookies and no trackers. How we handle personal data.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage eyebrow="COOKIES & PRIVACY" title="Cookie policy">
      <LegalSection title="We use no cookies">
        <p>
          This website does not place any cookies on your device, and uses no
          similar technology either: no local storage, no tracking pixels, no
          fingerprinting. That is why there is no cookie banner.
        </p>
      </LegalSection>

      <LegalSection title="No analytics, no third parties">
        <p>
          We use no analytics, advertising or social media tools. Fonts and all
          other files are served from our own domain: the pages load nothing
          from third-party services.
        </p>
        <p>
          Like any website, the server that delivers these pages processes
          technical data, such as your IP address and browser type, to serve
          them and protect the site against abuse. This data is not used to
          identify or track you.
        </p>
      </LegalSection>

      <LegalSection title="Personal data">
        <p>
          If you write to us or leave your email address to join the waitlist,{" "}
          {company.legalName} uses it only to reply to you or to let you know
          when the private beta opens. We do not sell it or share it with
          anyone, and we keep it no longer than needed for that purpose.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Under the General Data Protection Regulation (GDPR), you can ask at
          any time to access, correct or delete your data, or object to its use,
          by writing to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>
          You can also lodge a complaint with the Belgian Data Protection
          Authority:{" "}
          <a
            href="https://www.dataprotectionauthority.be"
            rel="noopener"
            target="_blank"
          >
            dataprotectionauthority.be
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Data controller">
        <LegalDetails
          items={[
            { label: "Company", value: company.legalName },
            {
              label: "Address",
              value: `${company.streetAddress}, ${company.postalCode} ${company.locality}, ${company.country}`,
            },
            {
              label: "Enterprise number (CBE)",
              value: company.enterpriseNumber,
            },
            {
              label: "Email",
              value: <a href={`mailto:${site.email}`}>{site.email}</a>,
            },
          ]}
        />
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If we ever add cookies or analytics, we will update this page first
          and ask for your consent whenever the law requires it.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
