import { Hero, BrandStatement } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <Hero />
      <BrandStatement />
      
      {/* 
        Remaining Homepage Sections will be added here:
        - FeaturedCollection
        - LookbookTeaser
        - CTA
      */}
    </main>
  );
}

