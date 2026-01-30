'use client';

import { motion } from 'framer-motion';
import { LookbookGallery } from '@/components/sections';
import { HeadingSerif, BodyText } from '@/components/ui';

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-32 pb-20">
      <div className="container-luxury">
        {/* Page Header */}
        <div className="max-w-3xl mb-24 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4 block">
              Editorial
            </span>
            <HeadingSerif className="text-4xl md:text-6xl mb-6">
              Visual Stories
            </HeadingSerif>
            <BodyText className="text-lg opacity-70 max-w-2xl mx-auto">
              A curated journey through our most iconic collections. Explore the intersection of light, shadow, and timeless silhouette.
            </BodyText>
          </motion.div>
        </div>

        {/* Lookbook Gallery */}
        <LookbookGallery />
      </div>
    </main>
  );
}
