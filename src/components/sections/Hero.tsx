'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ANIMATION } from '@/lib/constants';
import { HeadingSerif, BodyText } from '@/components/ui';

// Import data
import { BRAND_INFO } from '@/lib/data';


// Dynamically import Three.js scene (Client-side only)
const Scene = dynamic(() => import('@/components/three/Scene'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-[var(--color-cream)]" />
});

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--color-cream)]">
      {/* 3D Canvas Background - Hidden on small mobile for performance */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Scene />
      </div>

      {/* Mobile Fallback Background */}
      <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-tr from-[var(--color-cream)] via-[var(--color-gold-light)]/10 to-[var(--color-cream)]">
        {/* You can add a static high-end image here later */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[80%] h-[50%] border border-[var(--color-gold)] rounded-full blur-3xl" />
        </div>
      </div>


      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1], // Luxury ease
            delay: 0.5 
          }}
          className="container-luxury"
        >
          <h1 className="font-serif text-[clamp(3.5rem,15vw,10rem)] leading-[0.9] tracking-tighter text-[var(--color-black)] uppercase">
            {BRAND_INFO.name}
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase">
              {BRAND_INFO.tagline}
            </p>
            
            {/* Scroll Indicator */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-50">Discover</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-gold)] to-transparent relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, 64] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-cream)] opacity-50"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle overlay to improve legibility if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-cream)]/20 pointer-events-none" />
    </section>
  );
}
