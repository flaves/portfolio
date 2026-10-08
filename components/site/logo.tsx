import Link from "next/link";

import { cn } from "@/lib/utils";

// The "F" drawn on a 4px dot grid: top bar, middle bar, stem.
const DOTS = [
  [2, 2],
  [6, 2],
  [10, 2],
  [14, 2],
  [18, 2],
  [2, 6],
  [2, 10],
  [2, 14],
  [6, 14],
  [10, 14],
  [14, 14],
  [2, 18],
  [2, 22],
  [2, 26],
] as const;

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 28"
      aria-hidden="true"
      className={cn("fill-primary", className)}
    >
      {DOTS.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={1.7} />
      ))}
    </svg>
  );
}

type LogoProps = {
  label: string;
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
};

export function Logo({
  label,
  className,
  markClassName,
  wordmarkClassName,
}: LogoProps) {
  return (
    <Link
      href="/#top"
      aria-label={label}
      className={cn("group flex items-center gap-2 md:gap-2.5", className)}
    >
      <LogoMark className={markClassName} />
      <span
        className={cn(
          "font-bold font-sans text-foreground tracking-[0.14em] transition-colors group-hover:text-primary",
          wordmarkClassName,
        )}
      >
        FLAVES
      </span>
    </Link>
  );
}
