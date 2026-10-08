import Link from "next/link";

import { Logo } from "./logo";

const LINKS = [
  { href: "/legal-notice", label: "LEGAL NOTICE" },
  { href: "/cookies", label: "COOKIES" },
] as const;

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-[18px] border-t px-5 pt-7 pb-10 font-mono text-[11px] text-muted-foreground tracking-[0.06em] md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:gap-y-4 md:px-10 md:py-8 md:text-xs">
      <Logo
        label="Flaves — back to top"
        markClassName="h-5 w-3.5"
        wordmarkClassName="text-[13px]"
      />
      <p className="order-last md:order-none">
        © 2026 FLAVES. ALL RIGHTS RESERVED.
      </p>
      <nav aria-label="Footer" className="flex gap-5 md:gap-6">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
