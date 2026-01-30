import { Hero, BrandStatement, FeaturedCollection } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <Hero />
      <BrandStatement />
      <FeaturedCollection />
      
      {/* 
        Remaining Homepage Sections will be added here:
        - LookbookTeaser
        - CTA
      */}
    </main>
  );
}


