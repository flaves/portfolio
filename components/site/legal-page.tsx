import { site } from "@/lib/site";
import { FadeIn } from "./motion";
import { Eyebrow } from "./primitives";

const updatedAt = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(site.legalUpdatedAt));

type LegalPageProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

/** Long-form layout shared by the legal notice and the cookie policy. */
export function LegalPage({ eyebrow, title, children }: LegalPageProps) {
  return (
    <article className="px-5 py-14 md:px-10 md:py-24">
      <FadeIn className="mx-auto flex max-w-7xl flex-col gap-12">
        <header className="flex max-w-3xl flex-col gap-4 md:gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-medium text-4xl leading-none tracking-[-0.035em] md:text-[56px]">
            {title}
          </h1>
          <p className="font-mono text-[11px] text-faint uppercase md:text-xs">
            Last updated ·{" "}
            <time dateTime={site.legalUpdatedAt}>{updatedAt}</time>
          </p>
        </header>
        <div className="flex max-w-3xl flex-col gap-10">{children}</div>
      </FadeIn>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 border-t pt-8">
      <h2 className="font-semibold text-xl tracking-[-0.02em] md:text-[22px]">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-base text-copy leading-[1.65] [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline">
        {children}
      </div>
    </section>
  );
}

/** Label/value pairs, e.g. the company identifiers. */
export function LegalDetails({
  items,
}: {
  items: { label: string; value: React.ReactNode }[];
}) {
  return (
    <dl className="flex flex-col gap-3 rounded-lg border border-line bg-card p-5 md:p-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col gap-1 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6"
        >
          <dt className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em] md:text-xs">
            {item.label}
          </dt>
          <dd className="text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
