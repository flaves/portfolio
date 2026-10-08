"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        {children}
        <Toaster position="bottom-right" richColors />
      </MotionConfig>
    </LazyMotion>
  );
}
