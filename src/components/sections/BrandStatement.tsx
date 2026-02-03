'use client';

import { motion } from 'framer-motion';
import { BRAND_INFO } from '@/lib/data';
import { HeadingSection, Quote } from '@/components/ui';

export default function BrandStatement() {
  return (
    <section className="bg-[var(--color-smoked-stone)] section-padding flex items-center justify-center border-t border-white/5">
      <div className="container-luxury max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          <HeadingSection className="mb-8 uppercase tracking-widest text-sm opacity-60">
            Our Philosophy
          </HeadingSection>
          
          <Quote className="text-2xl md:text-4xl lg:text-5xl not-italic font-serif leading-tight text-white/90">
            {BRAND_INFO.manifesto}
          </Quote>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1px] bg-[var(--color-gold)] mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
