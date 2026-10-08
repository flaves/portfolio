"use client";

import { type HTMLMotionProps, stagger, type Variants } from "motion/react";
import * as m from "motion/react-m";

import { EASE_OUT } from "@/lib/motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const tags = { div: m.div, ol: m.ol, li: m.li, header: m.header };
type Tag = keyof typeof tags;

type MotionProps = Omit<HTMLMotionProps<"div">, "ref"> & {
  as?: Tag;
  /** Play when scrolled into view instead of on mount. */
  inView?: boolean;
};

function trigger(inView: boolean) {
  return inView
    ? { whileInView: "show", viewport: { once: true, amount: 0.25 } }
    : { animate: "show" };
}

type FadeInProps = MotionProps & {
  delay?: number;
  x?: number;
  y?: number;
};

/** Fades a block in, sliding it from `x`/`y` (px). */
export function FadeIn({
  as = "div",
  inView = false,
  delay = 0,
  x = 0,
  y = 16,
  ...props
}: FadeInProps) {
  const Comp = tags[as] as typeof m.div;
  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: EASE_OUT, delay },
    },
  };

  return (
    <Comp
      variants={variants}
      initial="hidden"
      {...trigger(inView)}
      {...props}
    />
  );
}

type StaggerProps = MotionProps & {
  /** Seconds before the first child starts. */
  delay?: number;
  /** Seconds between two children. */
  step?: number;
};

/** Plays its `StaggerItem` children one after the other. */
export function Stagger({
  as = "div",
  inView = false,
  delay = 0,
  step = 0.08,
  ...props
}: StaggerProps) {
  const Comp = tags[as] as typeof m.div;
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { delayChildren: stagger(step, { startDelay: delay }) },
    },
  };

  return (
    <Comp
      variants={variants}
      initial="hidden"
      {...trigger(inView)}
      {...props}
    />
  );
}

export function StaggerItem({
  as = "div",
  ...props
}: Omit<HTMLMotionProps<"div">, "ref"> & { as?: Tag }) {
  const Comp = tags[as] as typeof m.div;
  return <Comp variants={fadeUp} {...props} />;
}
