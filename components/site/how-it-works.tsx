import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "./motion";
import { Eyebrow } from "./primitives";

const STEPS = [
  {
    tag: "01 — BRIEF",
    title: "You write the brief",
    body: "Product, audience, tone, length, format. Plain words, no template to fill.",
  },
  {
    tag: "02 — SHOTS",
    title: "Flaves splits it into shots",
    body: "Scene, framing, duration, on-screen text. A shot list you can read and adjust.",
  },
  {
    tag: "03 — STILLS, THEN CLIPS",
    title: "Each shot is generated twice",
    body: "First as a still, so the look is locked. Then as a video clip from that still.",
  },
  {
    tag: "04 — CUT & DELIVER",
    title: "You download a finished ad",
    body: "Clips are assembled into the final cut. One file, ready to run.",
    highlight: true,
  },
];

export function HowItWorks() {
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: in-page anchor target (#how), rendered once
    <section
      id="how"
      className="scroll-mt-4 border-t px-5 py-14 md:px-10 md:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-7 md:gap-12">
        <Stagger inView className="flex max-w-[720px] flex-col gap-3 md:gap-4">
          <StaggerItem>
            <Eyebrow>HOW IT WORKS</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-medium text-[32px] leading-[1.05] tracking-[-0.03em] md:text-5xl md:leading-[1.05]">
              Four steps. No hand-offs.
            </h2>
          </StaggerItem>
        </Stagger>

        <Stagger
          as="ol"
          inView
          step={0.1}
          className="grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-4"
        >
          {STEPS.map((step) => (
            <StaggerItem
              as="li"
              key={step.tag}
              className={cn(
                "flex flex-col gap-5 p-6 md:min-h-[300px] md:justify-between md:gap-10 md:p-8",
                step.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-background",
              )}
            >
              <span
                className={cn(
                  "font-mono text-xs tracking-[0.1em] md:text-[13px]",
                  step.highlight ? "text-primary-foreground" : "text-primary",
                )}
              >
                {step.tag}
              </span>
              <div className="flex flex-col gap-2 md:gap-2.5">
                <h3 className="font-semibold text-xl tracking-[-0.02em] md:text-[22px]">
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-[1.55] md:text-[15px]",
                    step.highlight
                      ? "text-primary-foreground/72"
                      : "text-muted-foreground",
                  )}
                >
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
