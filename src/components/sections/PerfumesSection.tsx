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

export default function PerfumesSection() {
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPerfume = async () => {
      try {
        const response = await fetch('/api/items');
        const data = await response.json();
        
        // Get first featured perfume image
        const perfume = data.find((item: Item) => 
          item.categoryName === 'Perfumes' && (item as any).featured === 1
        );
        
        if (perfume) {
          setFeaturedImage(perfume.imageUrl);
        }
      } catch (error) {
        console.error('Failed to fetch featured perfume:', error);
      }
    };

    fetchFeaturedPerfume();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden py-24">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-amber-900/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-gray-900/20 to-transparent blur-[100px]" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-xs tracking-[0.5em] uppercase text-[var(--color-gold)] mb-6 block drop-shadow-sm">
              Fragrance
            </span>
            <HeadingSerif className="text-white text-5xl md:text-7xl mb-8 leading-tight">
              Essence de Nuit
            </HeadingSerif>
            <BodyText className="text-gray-400 text-lg md:text-xl max-w-md mb-12 leading-relaxed">
              An intimate blend of midnight jasmine, sandalwood, and a hint of smoke. A study in the invisible architecture of memory.
            </BodyText>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <Button href="/collection?category=perfumes" variant="primary" className="!bg-white !text-black border-none hover:!bg-gray-200">
                Explore Fragrances
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="h-[500px] md:h-[600px] w-full relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full" />
            
            {featuredImage ? (
              // Show featured product image
              <div className="relative w-full h-full">
                <Image
                  src={featuredImage}
                  alt="Featured Perfume"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              // Fallback: Elegant perfume bottle silhouette
              <div className="relative w-64 h-96 flex items-center justify-center">
                <div className="w-32 h-64 relative">
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-amber-100/20 to-gray-100/10 backdrop-blur-sm border border-white/10 rounded-t-lg shadow-2xl" />
                  <div className="absolute inset-x-0 bottom-48 h-16 w-16 mx-auto bg-gradient-to-b from-gray-100/20 to-amber-100/20 backdrop-blur-sm border border-white/10 rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--color-gold)]/20 blur-xl rounded-full animate-pulse" />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
