'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeadingSerif, BodyText, Button } from '@/components/ui';

export default function CosmeticsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Pair */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4 h-[400px] md:h-[600px] relative order-2 lg:order-1">
            {/* Beauty image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-[var(--color-cream)] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d"
                alt="Intimate beauty detail"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* Elegant cosmetic bottle using CSS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
            >
              {/* Cosmetic bottle design */}
              <div className="relative">
                {/* Bottle body */}
                <div className="w-20 h-56 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl relative">
                  {/* Gold cap */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-[var(--color-gold)] to-amber-700 rounded-t-lg shadow-lg" />
                  
                  {/* Label area */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-16 h-20 flex items-center justify-center">
                    <div className="w-full h-px bg-white/20" />
                  </div>
                  
                  {/* Light reflection */}
                  <div className="absolute top-8 left-2 w-1 h-32 bg-white/30 blur-sm" />
                </div>
                
                {/* Soft glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--color-gold-light)]/20 blur-[60px] rounded-full -z-10" />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2"
          >
            <span className="font-sans text-xs tracking-[0.5em] uppercase text-[var(--color-gold)] mb-6 block">
              Beauty
            </span>
            <HeadingSerif className="text-5xl md:text-7xl mb-8 leading-tight">
              Luminous <br /> Refinement
            </HeadingSerif>
            <BodyText className="text-lg md:text-xl text-[var(--color-charcoal)] max-w-md mb-12 leading-relaxed italic border-l-2 border-[var(--color-gold)]/30 pl-8">
              "Beauty is not about addition, but the careful preservation of light."
            </BodyText>
            
            <BodyText className="text-gray-500 mb-12 max-w-sm">
              Explore our curated selection of silk-infused treatments and artisanal cosmetics designed for the discerning skin.
            </BodyText>
            
            <Button href="/collection?category=cosmetics" variant="secondary" className="group">
              Shop Cosmetics
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
