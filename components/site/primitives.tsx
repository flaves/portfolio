import { cn } from "@/lib/utils";

/** Mono, letter-spaced label above a heading. */
export function Eyebrow({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] text-muted-foreground tracking-[0.14em] md:text-xs",
        className,
      )}
      {...props}
    />
  );
}

/** 8px accent dot; `pulse` adds a slow ping around it. */
export function StatusDot({
  pulse = false,
  className,
}: {
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-flex size-2 shrink-0", className)}
    >
      {pulse ? (
        <span className="absolute inset-0 rounded-full bg-primary opacity-60 motion-safe:animate-ping-slow" />
      ) : null}
      <span className="relative size-2 rounded-full bg-primary" />
    </span>
  );
}

/** 16px dot grid, faded out by a radial mask passed through `className`. */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "dot-grid fade-in pointer-events-none absolute inset-0 animate-in duration-1000",
        className,
      )}
    />
  );
}
