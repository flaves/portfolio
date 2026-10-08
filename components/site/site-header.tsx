import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Logo } from "./logo";
import { FadeIn } from "./motion";

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/#join", label: "Early access" },
] as const;

export function SiteHeader() {
  return (
    <FadeIn
      as="header"
      y={-8}
      className="flex items-center justify-between gap-3 border-b px-5 py-3.5 md:gap-6 md:px-10 md:py-5"
    >
      <Logo
        label="Flaves — home"
        markClassName="h-[22px] w-4 md:h-[25px] md:w-[18px]"
        wordmarkClassName="text-sm md:text-[15px]"
      />
      <nav
        aria-label="Main"
        className="hidden gap-8 font-medium text-sm md:flex"
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/#join" className={buttonVariants({ size: "cta" })}>
        Join the waitlist
      </Link>
    </FadeIn>
  );
}
