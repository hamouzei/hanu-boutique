'use client';

import { motion } from 'framer-motion';
import { BRAND_INFO } from '@/lib/data';
import { HeadingSection, BodyText, Caption } from '@/components/ui';

export default function BrandValues() {
  return (
    <section className="bg-[var(--color-cream)] section-padding">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {BRAND_INFO.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <Caption className="text-[var(--color-gold)] mb-6 block">
                0{index + 1}
              </Caption>
              <HeadingSection className="text-2xl mb-6">
                {value.title}
              </HeadingSection>
              <BodyText className="opacity-70 leading-relaxed">
                {value.description}
              </BodyText>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
