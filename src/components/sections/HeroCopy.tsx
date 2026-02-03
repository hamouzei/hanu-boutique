'use client';

import { motion } from 'framer-motion';
import { HeadingSerif } from '@/components/ui';
import Link from 'next/link';

export default function HeroCopy() {
  return (
    <div className="relative z-20 w-full h-full flex flex-col items-center justify-end md:justify-center text-center pb-24 md:pb-0 pointer-events-none">
      <div className="container-luxury flex flex-col items-center gap-8">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.8 
          }}
        >
          <HeadingSerif className="text-[clamp(2.5rem,8vw,5rem)] leading-tight text-white/90 drop-shadow-2xl">
            Elegance <span className="italic block md:inline font-light">Redefined.</span>
          </HeadingSerif>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="pointer-events-auto"
        >
          <Link 
            href="/collection" 
            className="group relative inline-flex flex-col items-center mt-4 overflow-hidden"
          >
            <span className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-white/60 group-hover:text-white transition-colors duration-500">
              Discover the Collection
            </span>
            <motion.div 
              className="mt-2 h-[1px] bg-white/30 w-full"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 2.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
        
        {/* Sub-label for confidence */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.6em] uppercase text-white font-sans hidden md:block"
        >
          Limited Selection
        </motion.span>
      </div>
    </div>
  );
}
