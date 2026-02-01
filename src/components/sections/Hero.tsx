'use client';

import { motion } from 'framer-motion';
import { HeadingSerif, BodyText } from '@/components/ui';

// Import data
import { BRAND_INFO } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--color-cream)]">
      {/* Elegant Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-gold-light)]/5 to-[var(--color-cream)]">
          {/* Decorative element */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-[90%] h-[60%] border-2 border-[var(--color-gold)] rounded-full blur-3xl" />
          </div>
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

      {/* Subtle overlay to improve legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-cream)]/20 pointer-events-none" />
    </section>
  );
}
