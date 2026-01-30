import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <Hero />
      
      {/* 
        Remaining Homepage Sections will be added here:
        - BrandStatement
        - FeaturedCollection
        - LookbookTeaser
        - CTA
      */}
      
      {/* Placeholder to enable scrolling for testing Navbar effect */}
      <section className="h-[100vh]" />
    </main>
  );
}
