'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax and scale down on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-black">
      <motion.div 
        style={{ scale, opacity, y }}
        className="relative w-full h-full"
      >
        <Image
          src="/images/hero-editorial.png"
          alt="Cinematic Hero Product"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        
        {/* Cinematic Overlays */}
        {/* Soft Radial Gradient for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        
        {/* Depth Gradient (Bottom to Top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
      </motion.div>

      {/* Film Grain Texture Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-50" />
      </div>
    </div>
  );
}
