import { Hero, BrandStatement, FeaturedCollection, LookbookTeaser, CTA, PerfumesSection, SunglassesSection, ShoesSection, CosmeticsSection } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-smoked-stone)]">
      <Hero />
      <BrandStatement />
      <FeaturedCollection />
      <LookbookTeaser />
      <PerfumesSection />
      <SunglassesSection />
      <ShoesSection />
      <CosmeticsSection />
      <CTA />
    </main>
  );
}



