import { Fragment } from "react";

import { FadeIn } from "./motion";

const AUDIENCES = [
  "PERFORMANCE MARKETERS",
  "DTC BRANDS",
  "AGENCIES",
  "FOUNDERS SHIPPING ADS WEEKLY",
];

export function BuiltFor() {
  return (
    <section className="border-t px-5 py-6 md:px-10 md:py-7">
      <FadeIn
        inView
        y={8}
        className="mx-auto flex max-w-7xl flex-col gap-2.5 font-mono text-[11px] text-muted-foreground tracking-[0.1em] md:flex-row md:flex-wrap md:items-center md:gap-x-10 md:gap-y-4 md:text-xs"
      >
        <h2 className="text-primary">BUILT FOR</h2>
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 md:gap-x-10 md:gap-y-4">
          {AUDIENCES.map((audience, index) => (
            <Fragment key={audience}>
              {index > 0 ? (
                <li aria-hidden="true" className="text-dim">
                  ·
                </li>
              ) : null}
              <li>{audience}</li>
            </Fragment>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
