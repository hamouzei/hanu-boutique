'use client';

import HeroMedia from './HeroMedia';
import HeroCopy from './HeroCopy';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Cinematic Media Layer */}
      <HeroMedia />

      {/* Cinematic Text Overlay Layer */}
      <HeroCopy />

      {/* Final Vignette Finish */}
      <div className="absolute inset-0 z-15 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
    </section>
  );
}
