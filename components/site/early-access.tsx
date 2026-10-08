import { Stagger, StaggerItem } from "./motion";
import { DotGrid, Eyebrow } from "./primitives";
import { WaitlistForm } from "./waitlist";

export function EarlyAccess() {
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: in-page anchor target (#join), rendered once
    <section
      id="join"
      className="relative scroll-mt-4 overflow-hidden border-t px-5 py-14 md:px-10 md:py-24"
    >
      <DotGrid className="[mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_0%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_45%_80%_at_85%_50%,#000_0%,transparent_100%)]" />

      <Stagger
        inView
        className="relative mx-auto flex max-w-7xl flex-col items-start gap-5 md:gap-6"
      >
        <StaggerItem>
          <Eyebrow>EARLY ACCESS</Eyebrow>
        </StaggerItem>
        <StaggerItem>
          <h2 className="max-w-[720px] font-medium text-4xl leading-none tracking-[-0.035em] md:text-[56px]">
            Get in before the queue.
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="max-w-[560px] text-base text-copy leading-[1.55] md:text-lg">
            The private beta opens in waves. Leave your email and you&apos;ll be
            in the first one.
          </p>
        </StaggerItem>
        <StaggerItem className="w-full">
          <WaitlistForm />
        </StaggerItem>
        <StaggerItem>
          <p className="font-mono text-[11px] text-faint md:text-xs">
            One email when we open. Nothing else.
          </p>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
