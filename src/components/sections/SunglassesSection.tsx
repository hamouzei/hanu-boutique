'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeadingSerif, HeadingSection, BodyText, Button } from '@/components/ui';

export default function SunglassesSection() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="font-sans text-xs tracking-[0.5em] uppercase text-[var(--color-gold)] mb-6 block">
              Eyewear
            </span>
            <HeadingSerif className="text-5xl md:text-7xl mb-8 leading-tight">
              Aviator <br /> Noir
            </HeadingSerif>
            <BodyText className="text-lg md:text-xl text-[var(--color-charcoal)] max-w-md mb-12 leading-relaxed">
              Classic frames reimagined with structural precision. For those who see the world through a lens of absolute clarity and refined confidence.
            </BodyText>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <Button href="/collection?category=sunglasses" variant="primary">
                View Sunglasses
              </Button>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative group"
          >
            {/* Main Visual Container */}
            <div className="aspect-[4/5] relative bg-[var(--color-cream-dark)] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f"
                alt="Luxury black aviator sunglasses with sharp geometric highlights"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Sharp geometric element (Overlay) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-black)]/10 to-transparent pointer-events-none" />
              
              {/* Decorative Accent */}
              <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-[var(--color-gold)] opacity-50 translate-y-[-40px] translate-x-[-20px]" />
              <div className="absolute bottom-0 right-0 h-32 w-[1px] bg-[var(--color-gold)] opacity-50 translate-y-[-20px] translate-x-[-40px]" />
            </div>

            {/* Geometric shadow effect */}
            <div className="absolute -bottom-10 -right-10 w-full h-full border border-[var(--color-gold)]/10 -z-1 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
