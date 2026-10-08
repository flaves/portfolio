"use client";

import { Loader2Icon } from "lucide-react";
import * as m from "motion/react-m";
import { createContext, use, useId, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { StatusDot } from "./primitives";

type Waitlist = { joined: boolean; join: () => void };

const WaitlistContext = createContext<Waitlist | null>(null);

/** Shares the "joined" state so both forms on the page switch together. */
export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [joined, setJoined] = useState(false);

  return (
    <WaitlistContext value={{ joined, join: () => setJoined(true) }}>
      {children}
    </WaitlistContext>
  );
}

function useWaitlist() {
  const waitlist = use(WaitlistContext);
  if (!waitlist) {
    throw new Error("useWaitlist must be used inside <WaitlistProvider>");
  }
  return waitlist;
}

// Demo only: nothing is sent anywhere, the request is simulated.
function fakeRequest() {
  return new Promise((resolve) => setTimeout(resolve, 700));
}

export function WaitlistForm({ className }: { className?: string }) {
  const { joined, join } = useWaitlist();
  const inputId = useId();

  async function submit(formData: FormData) {
    const email = String(formData.get("email") ?? "");
    await fakeRequest();
    join();
    toast.success("You're on the list", {
      description: `We'll email ${email} when the beta opens.`,
    });
  }

  return (
    <div className={cn("w-full max-w-[560px]", className)}>
      {joined ? (
        <m.div
          role="status"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="flex items-center gap-3 rounded-lg border border-primary p-4 font-mono text-xs md:px-5 md:text-[13px]"
        >
          <StatusDot />
          <span>
            You&apos;re on the list. We&apos;ll email you when the beta opens.
          </span>
        </m.div>
      ) : (
        // React resets the form once the action settles, so the form leaves
        // without an exit animation: no flash of an emptied field.
        <form
          action={submit}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end"
        >
          <Field className="min-w-0 gap-2 sm:flex-[1_1_260px]">
            <FieldLabel
              htmlFor={inputId}
              className="font-mono font-normal text-[11px] text-muted-foreground tracking-[0.12em] md:text-xs"
            >
              WORK EMAIL
            </FieldLabel>
            <Input
              id={inputId}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="h-13 rounded-lg border-line-strong bg-field px-4 font-mono text-sm placeholder:text-placeholder focus-visible:border-primary focus-visible:ring-primary/20 md:text-sm dark:bg-field"
            />
          </Field>
          <SubmitButton />
        </form>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="xl" disabled={pending}>
      {pending ? (
        <>
          <Loader2Icon className="animate-spin" aria-hidden="true" />
          Joining…
        </>
      ) : (
        "Get early access"
      )}
    </Button>
  );
}
