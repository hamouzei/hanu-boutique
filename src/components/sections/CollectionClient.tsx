'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CollectionGrid } from '@/components/sections';
import { HeadingSerif, BodyText } from '@/components/ui';

export default function CollectionClient() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-32 pb-20">
      <div className="container-luxury">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4 block">
              The Collections
            </span>
            <HeadingSerif className="text-5xl md:text-7xl mb-6">
              Essential Pieces
            </HeadingSerif>
            <BodyText className="max-w-xl mx-auto opacity-70">
              A meticulously curated selection of handcrafted garments, designed for those who seek uncompromising quality and timeless elegance.
            </BodyText>
          </motion.div>
        </header>

        <React.Suspense fallback={<div className="h-64 flex items-center justify-center font-serif italic opacity-50">Loading Collection...</div>}>
          <CollectionGrid />
        </React.Suspense>
      </div>
    </main>
  );
}
