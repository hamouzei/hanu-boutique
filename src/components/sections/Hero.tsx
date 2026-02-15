'use client';

import { useState, useEffect } from 'react';
import HeroMedia from './HeroMedia';
import HeroCopy from './HeroCopy';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Cinematic Media Layer */}
      <HeroMedia activeSlide={activeSlide} />

      {/* Cinematic Text Overlay Layer */}
      <HeroCopy activeSlide={activeSlide} />

      {/* Navigation Indicators */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-12 h-[2px] transition-all duration-700 ${
              activeSlide === i ? 'bg-white' : 'bg-white/20'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Final Vignette Finish */}
      <div className="absolute inset-0 z-15 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
    </section>
  );
}
