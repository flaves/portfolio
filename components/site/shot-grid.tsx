"use client";

import { stagger, type Variants } from "motion/react";
import * as m from "motion/react-m";

import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Shot = {
  id: string;
  label: string;
  status: string;
  state: "done" | "rendering" | "queued";
  /** Ellipse of the accent dots that "light up" the generated frame. */
  glow?: string;
  progress?: number;
};

const SHOTS: Shot[] = [
  {
    id: "01",
    label: "Wake-up, window light",
    status: "STILL ✓ · CLIP ✓",
    state: "done",
    glow: "ellipse 42% 30% at 50% 58%",
  },
  {
    id: "02",
    label: "Pour over ice, close-up",
    status: "STILL ✓ · CLIP ✓",
    state: "done",
    glow: "ellipse 36% 48% at 62% 50%",
  },
  {
    id: "03",
    label: "First sip, street, handheld",
    status: "STILL ✓ · CLIP 62%",
    state: "rendering",
    glow: "ellipse 48% 26% at 45% 40%",
    progress: 62,
  },
  {
    id: "04",
    label: "Can + price card",
    status: "QUEUED",
    state: "queued",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { delayChildren: stagger(0.12, { startDelay: 0.8 }) } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const glowIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, delay: 0.3 } },
};

const progressBar: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.6, ease: EASE_OUT, delay: 0.4 },
  },
};

export function ShotGrid() {
  return (
    <m.ul
      variants={grid}
      initial="hidden"
      animate="show"
      aria-label="Shots"
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
    >
      {SHOTS.map((shot) => (
        <ShotCard key={shot.id} shot={shot} />
      ))}
    </m.ul>
  );
}

function ShotCard({ shot }: { shot: Shot }) {
  const queued = shot.state === "queued";

  return (
    <m.li variants={card} className="flex min-w-0 flex-col gap-2">
      <div
        className={cn(
          "relative aspect-9/16 overflow-hidden rounded-lg border bg-background",
          queued ? "border-line-dashed border-dashed" : "dot-fill border-line",
        )}
      >
        {shot.glow ? (
          <m.div
            aria-hidden="true"
            variants={glowIn}
            className="absolute inset-0"
          >
            <div
              className={cn(
                "dot-glow absolute inset-0 [mask-image:var(--glow)]",
                // A rendering shot keeps "breathing" until its clip is done.
                shot.state === "rendering" &&
                  "opacity-60 motion-safe:animate-breathe",
              )}
              style={
                {
                  "--glow": `radial-gradient(${shot.glow}, #000 20%, transparent 100%)`,
                } as React.CSSProperties
              }
            />
          </m.div>
        ) : null}
        <span className="absolute top-2 left-2 rounded-[2px] border border-line-strong bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
          {shot.id}
        </span>
        {shot.progress === undefined ? null : (
          <div className="absolute inset-x-2 bottom-2 h-[3px] rounded-[2px] bg-line-strong">
            <m.div
              variants={progressBar}
              className="h-full origin-left rounded-[2px] bg-primary"
              style={{ width: `${shot.progress}%` }}
            />
          </div>
        )}
      </div>
      <span
        className={cn(
          "font-sans text-xs leading-[1.35] tracking-normal",
          queued ? "text-muted-foreground" : "text-foreground",
        )}
      >
        {shot.label}
      </span>
      <span
        className={cn("text-[10px]", queued ? "text-faint" : "text-primary")}
      >
        {shot.status}
      </span>
    </m.li>
  );
}
