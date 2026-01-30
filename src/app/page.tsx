import { Hero, BrandStatement, FeaturedCollection, LookbookTeaser, CTA } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <Hero />
      <BrandStatement />
      <FeaturedCollection />
      <LookbookTeaser />
      <CTA />
    </main>
  );
}



