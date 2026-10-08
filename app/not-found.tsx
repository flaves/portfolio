import type { Metadata } from "next";
import Link from "next/link";

import { DotGrid, Eyebrow } from "@/components/site/primitives";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70dvh] flex-col justify-center overflow-hidden px-5 py-14 md:px-10 md:py-24">
      <DotGrid className="[mask-image:radial-gradient(ellipse_60%_60%_at_70%_50%,#000_0%,transparent_100%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-6">
        <Eyebrow>404 — PAGE NOT FOUND</Eyebrow>
        <h1 className="font-medium text-[42px] leading-none tracking-[-0.035em] md:text-7xl">
          Nothing here.
          <br />
          <span className="text-primary">Back to the brief.</span>
        </h1>
        <Link href="/" className={buttonVariants({ size: "xl" })}>
          Go to the homepage
        </Link>
      </div>
    </section>
  );
}
