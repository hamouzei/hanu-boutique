'use client';

import { motion } from 'framer-motion';
import { LookbookGallery } from '@/components/sections';
import { HeadingSerif, BodyText } from '@/components/ui';

export default function LookbookClient() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-32 pb-20">
      <div className="container-luxury">
        <header className="mb-32 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4 block">
              Visual Stories
            </span>
            <HeadingSerif className="text-5xl md:text-7xl mb-8">
              Editorial Lookbook
            </HeadingSerif>
            <BodyText className="text-lg opacity-70 leading-relaxed italic border-x border-[var(--color-gold)]/20 px-8 py-4">
              "Capturing the intersection of structural precision and fluid elegance. A study in modern minimalism and the enduring beauty of handcrafted detail."
            </BodyText>
          </motion.div>
        </header>

        <LookbookGallery />
      </div>
    </main>
  );
}
