'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeadingSerif, BodyText, Button } from '@/components/ui';

interface Item {
  id: number;
  imageUrl: string;
  categoryName: string;
}

export default function CosmeticsSection() {
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedCosmetic = async () => {
      try {
        const response = await fetch('/api/items');
        const data = await response.json();
        
        // Get first featured cosmetic image
        const cosmetic = data.find((item: Item) => 
          item.categoryName === 'Cosmetics' && (item as any).featured === 1
        );
        
        if (cosmetic) {
          setFeaturedImage(cosmetic.imageUrl);
        }
      } catch (error) {
        console.error('Failed to fetch featured cosmetic:', error);
      }
    };

    fetchFeaturedCosmetic();
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-[var(--color-layer-a)] overflow-hidden border-t border-white/5">
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 w-full h-[500px] lg:h-[700px] relative order-2 lg:order-1 flex items-center justify-center"
          >
            {/* Background atmosphere/glow */}
            <div className="absolute inset-0 z-0 bg-[var(--color-gold)]/5 rounded-full blur-[120px] opacity-50" />
            
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {featuredImage ? (
                // Show featured product image
                <div className="relative w-full h-[80%]">
                  <Image
                    src={featuredImage}
                    alt="Featured Cosmetic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                // Fallback: Cosmetic bottle design
                <div className="relative">
                  <div className="w-24 h-64 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl relative border border-white/10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-10 bg-gradient-to-b from-[var(--color-gold)] to-amber-700 rounded-t-lg shadow-lg" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-20 h-24 flex items-center justify-center">
                      <div className="w-full h-px bg-white/10" />
                    </div>
                    <div className="absolute top-8 left-2 w-1 h-40 bg-white/20 blur-sm" />
                  </div>
                  {/* Internal glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-gold)]/10 blur-[80px] rounded-full -z-10 animate-pulse" />
                </div>
              )}
            </div>

            {/* Sharp geometric element (Overlay) */}
            <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-[var(--color-gold)] opacity-30 translate-y-[-40px] translate-x-[-20px]" />
            <div className="absolute bottom-0 right-0 h-32 w-[1px] bg-[var(--color-gold)] opacity-30 translate-y-[-20px] translate-x-[-40px]" />
          </motion.div>

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
            <BodyText className="text-lg md:text-xl text-white/70 max-w-md mb-12 leading-relaxed italic border-l-2 border-[var(--color-gold)]/30 pl-8">
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
