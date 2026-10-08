import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "./motion";
import { StatusDot } from "./primitives";
import { ShotGrid } from "./shot-grid";

type StageState = "done" | "active" | "pending";

const PIPELINE: { label: string; state: StageState }[] = [
  { label: "BRIEF", state: "done" },
  { label: "SHOTS", state: "done" },
  { label: "STILLS", state: "done" },
  { label: "VIDEO", state: "active" },
  { label: "CUT", state: "pending" },
];

/** Mock of a running Flaves job: brief → pipeline → shots → output. */
export function JobCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-4 font-mono text-[11px] tracking-[0.04em] md:gap-5 md:p-6 md:text-xs">
      <div className="flex items-center justify-between gap-3 text-muted-foreground">
        <span>
          JOB 0417 · COLD BREW<span className="hidden md:inline"> LAUNCH</span>
        </span>
        <span className="flex items-center gap-2 text-primary">
          <StatusDot pulse />
          RUNNING
        </span>
      </div>

      <div className="flex flex-col gap-2 rounded-lg border border-line p-3.5 md:p-4">
        <span className="text-muted-foreground">BRIEF</span>
        <p className="font-sans text-foreground text-sm leading-normal tracking-normal md:text-[15px]">
          “30-second vertical ad for a cold brew launch. Morning energy, natural
          light, young professionals. End on the can and the price.”
        </p>
      </div>

      <Stagger
        as="ol"
        delay={0.6}
        step={0.1}
        aria-label="Pipeline"
        className="flex flex-wrap items-center gap-1.5 md:gap-2"
      >
        {PIPELINE.map((stage, index) => (
          <StaggerItem
            as="li"
            key={stage.label}
            className="flex items-center gap-1.5 md:gap-2"
          >
            {index > 0 ? (
              <span aria-hidden="true" className="text-dim">
                →
              </span>
            ) : null}
            <Stage {...stage} />
          </StaggerItem>
        ))}
      </Stagger>

      <ShotGrid />

      <div className="flex flex-col gap-1.5 border-line border-t pt-3.5 text-muted-foreground md:flex-row md:flex-wrap md:justify-between md:gap-3 md:pt-4">
        <span>OUTPUT · 9:16 · 1080×1920 · 30s · MP4</span>
        <span>CUT STARTS AFTER SHOT 04</span>
      </div>
    </div>
  );
}

function Stage({ label, state }: { label: string; state: StageState }) {
  return (
    <span
      aria-current={state === "active" ? "step" : undefined}
      className={cn(
        "inline-flex items-center gap-[5px] rounded-[3px] border px-2 py-[5px] md:gap-1.5 md:px-2.5 md:py-1.5",
        state === "done" && "border-line-strong text-foreground",
        state === "active" &&
          "border-primary bg-primary font-medium text-primary-foreground",
        state === "pending" && "border-line-dashed border-dashed text-faint",
      )}
    >
      {state === "done" ? (
        <svg viewBox="0 0 10 10" aria-hidden="true" className="size-2.5">
          <path
            d="M1.5 5.5l2.5 2.5 4.5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      ) : null}
      {label}
    </span>
  );
}
