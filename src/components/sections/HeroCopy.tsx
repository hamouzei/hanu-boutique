'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HeadingSerif } from '@/components/ui';
import Link from 'next/link';

const COPY_SLIDES = [
  {
    category: 'The Fragrance',
    headline: <>Elegance <span className="italic block md:inline font-light">Redefined.</span></>,
    sublabel: 'Limited Selection'
  },
  {
    category: 'The Footwear',
    headline: <>Architectural <span className="italic block md:inline font-light">Steps.</span></>,
    sublabel: 'Master Crafted'
  },
  {
    category: 'The Collection',
    headline: <>Timeless <span className="italic block md:inline font-light">Tailoring.</span></>,
    sublabel: 'Quiet Luxury'
  },
  {
    category: 'The Eyewear',
    headline: <>Sculptural <span className="italic block md:inline font-light">Vision.</span></>,
    sublabel: 'Defined Detail'
  }
];

interface HeroCopyProps {
  activeSlide: number;
}

export default function HeroCopy({ activeSlide }: HeroCopyProps) {
  return (
    <div className="relative z-20 w-full h-full flex flex-col items-center justify-end md:justify-center text-center pb-24 md:pb-0 pointer-events-none">
      <div className="container-luxury flex flex-col items-center gap-8">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-col items-center"
          >
            {/* Category Tag */}
            <span className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[var(--color-gold)] mb-4 block">
              {COPY_SLIDES[activeSlide].category}
            </span>

            {/* Headline */}
            <HeadingSerif className="text-[clamp(2.5rem,8vw,5rem)] leading-tight text-white/95 drop-shadow-2xl mb-8">
              {COPY_SLIDES[activeSlide].headline}
            </HeadingSerif>

            {/* Sub-label for confidence */}
            <span className="text-[10px] tracking-[0.6em] uppercase text-white/40 font-sans hidden md:block mt-4">
              {COPY_SLIDES[activeSlide].sublabel}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* CTA (Persists or Animates) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-auto"
        >
          <Link 
            href="/collection" 
            className="group relative inline-flex flex-col items-center mt-4 overflow-hidden"
          >
            <span className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-white/60 group-hover:text-white transition-colors duration-500">
              Discover the Collection
            </span>
            <div className="mt-2 h-[1px] bg-white/30 w-full overflow-hidden">
              <motion.div 
                className="h-full bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "linear",
                  delay: 1
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
