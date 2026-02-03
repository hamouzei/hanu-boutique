'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BrandValues } from '@/components/sections';
import { HeadingSerif, HeadingSection, BodyText, Quote, Button } from '@/components/ui';
import { BRAND_INFO } from '@/lib/data';

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-[var(--color-smoked-stone)] pt-32 pb-20">
      <div className="container-luxury">
        {/* Hero Section of About Page */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-sans text-xs tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4 block">
                Our Story
              </span>
              <HeadingSerif className="text-4xl md:text-6xl mb-8">
                {BRAND_INFO.name}
              </HeadingSerif>
              <Quote className="text-2xl md:text-3xl lg:text-4xl mb-8 not-italic border-l-4 border-[var(--color-gold)] pl-8">
                {BRAND_INFO.tagline}
              </Quote>
              <BodyText className="text-lg opacity-80 max-w-xl leading-relaxed">
                {BRAND_INFO.philosophy}
              </BodyText>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] bg-[var(--color-charcoal)] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1441984908796-9039c052e93b"
                alt="Atelier craftsmanship and philosophy"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="mb-32 py-20 bg-black/20 px-8 md:px-24 border-y border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <HeadingSection className="text-sm uppercase tracking-[0.3em] opacity-50 mb-12">
              The Manifesto
            </HeadingSection>
            <BodyText className="text-2xl md:text-3xl font-serif italic mb-12 leading-relaxed text-white/90">
              "{BRAND_INFO.manifesto}"
            </BodyText>
            <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />
          </motion.div>
        </section>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <HeadingSection className="mb-4">Our Principles</HeadingSection>
            <BodyText className="opacity-60 uppercase tracking-widest text-xs">How we define exceptional</BodyText>
          </div>
          <BrandValues />
        </div>

        {/* Contact/CTA Section */}
        <section className="text-center py-20 border-t border-[var(--color-gold)]/10">
          <HeadingSerif className="text-3xl md:text-5xl mb-12">Experience Atelier</HeadingSerif>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Button href="/collection" variant="primary">Shop Collection</Button>
            <Button href="/contact" variant="text">Get in Touch</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
