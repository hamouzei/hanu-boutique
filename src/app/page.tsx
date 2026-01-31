import { Hero, BrandStatement, FeaturedCollection, LookbookTeaser, CTA, PerfumesSection, SunglassesSection } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <Hero />
      <BrandStatement />
      <FeaturedCollection />
      <LookbookTeaser />
      <PerfumesSection />
      <SunglassesSection />
      <CTA />
    </main>
  );
}



