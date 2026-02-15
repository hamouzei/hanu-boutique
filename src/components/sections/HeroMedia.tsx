'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const HERO_SLIDES = [
  {
    id: 'perfume',
    image: '/images/perfume.png',
    alt: 'Masterpiece Fragrance'
  },
  {
    id: 'shoes',
    image: '/images/shoes.png',
    alt: 'Architectural Footwear'
  },
  {
    id: 'clothing',
    image: '/images/clothing.png',
    alt: 'Fine Tailoring'
  },
  {
    id: 'sunglasses',
    image: '/images/sunglasses.png',
    alt: 'Sculptural Eyewear'
  }
];

interface HeroMediaProps {
  activeSlide: number;
}

export default function HeroMedia({ activeSlide }: HeroMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax and scale down on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-[var(--color-smoked-stone)]">
      <AnimatePresence>
        <motion.div 
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ scale, opacity: opacityScroll, y }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={HERO_SLIDES[activeSlide].image}
            alt={HERO_SLIDES[activeSlide].alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          
          {/* Cinematic Overlays */}
          {/* Soft Radial Gradient for focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,var(--color-smoked-stone)_100%)] opacity-40" />
          
          {/* Depth Gradient (Bottom to Top) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-smoked-stone)] via-[var(--color-smoked-stone)]/40 to-transparent opacity-80" />
        </motion.div>
      </AnimatePresence>

      {/* Film Grain Texture Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-50" />
      </div>
    </div>
  );
}
