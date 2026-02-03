'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HeadingSection, Button } from '@/components/ui';

export default function LookbookTeaser() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section 
      ref={containerRef}
      className="relative h-[80vh] min-h-[600px] overflow-hidden bg-[var(--color-smoked-stone)]"
    >
      {/* Background Image Container with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          alt="Editorial fashion lookbook teaser"
          fill
          className="object-cover grayscale opacity-60 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-black)]/40 via-transparent to-[var(--color-black)]/60" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-6">
        <div className="container-luxury max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[var(--color-gold)] mb-6 block drop-shadow-sm">
              Visual Story
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] leading-tight text-[var(--color-cream)] mb-10 tracking-tight">
              The Art of <br /> Timeless Elegance
            </h2>
            <Button href="/lookbook" variant="secondary" className="border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-black)]">
              Explore Lookbook
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
