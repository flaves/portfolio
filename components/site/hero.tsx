import { JobCard } from "./job-card";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { DotGrid, Eyebrow, StatusDot } from "./primitives";
import { WaitlistForm } from "./waitlist";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-12 md:px-10 md:pt-24 md:pb-22">
      <DotGrid className="[mask-image:radial-gradient(ellipse_80%_40%_at_50%_15%,#000_0%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_50%_70%_at_78%_45%,#000_0%,transparent_100%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center gap-[38px] md:gap-16">
        <Stagger
          delay={0.1}
          className="flex min-w-0 grow basis-[480px] flex-col gap-[22px] md:gap-7"
        >
          <StaggerItem>
            <Eyebrow className="flex items-center gap-2.5">
              <StatusDot pulse />
              COMING SOON — PRIVATE BETA
            </Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-medium text-[42px] leading-none tracking-[-0.035em] md:text-6xl lg:text-7xl">
              One brief in.
              <br />
              <span className="text-primary">One finished ad out.</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[560px] text-base text-copy leading-[1.55] md:text-lg">
              Flaves reads your brief, splits it into shots, generates each shot
              as a still and then as video, cuts the edit and hands you a
              ready-to-run creative. End to end, no editor in the loop.
            </p>
          </StaggerItem>

          <StaggerItem>
            <WaitlistForm />
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-[11px] text-faint md:text-xs">
              One email when we open. Nothing else.
            </p>
          </StaggerItem>
        </Stagger>

        <FadeIn
          delay={0.35}
          x={24}
          y={0}
          className="min-w-0 grow basis-[480px]"
        >
          <JobCard />
        </FadeIn>
      </div>
    </section>
  );
}
