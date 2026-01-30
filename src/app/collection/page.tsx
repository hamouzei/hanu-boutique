'use client';

import { motion } from 'framer-motion';
import { CollectionGrid } from '@/components/sections';
import { HeadingSerif, BodyText } from '@/components/ui';

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-32 pb-20">
      <div className="container-luxury">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4 block">
              The Collection
            </span>
            <HeadingSerif className="text-4xl md:text-6xl mb-6">
              Curated Masterpieces
            </HeadingSerif>
            <BodyText className="text-lg opacity-70">
              Browse our selection of meticulously crafted pieces, designed to bring timeless elegance to your wardrobe. Each creation is a testament to our commitment to exceptional artistry.
            </BodyText>
          </motion.div>
        </div>

        {/* Collection Grid with Filtering */}
        <CollectionGrid />
      </div>
    </main>
  );
}
