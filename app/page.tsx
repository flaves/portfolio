import { BuiltFor } from "@/components/site/built-for";
import { EarlyAccess } from "@/components/site/early-access";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { WaitlistProvider } from "@/components/site/waitlist";

export default function Home() {
  return (
    <WaitlistProvider>
      <Hero />
      <HowItWorks />
      <BuiltFor />
      <EarlyAccess />
    </WaitlistProvider>
  );
}
