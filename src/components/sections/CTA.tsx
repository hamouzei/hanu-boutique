'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

export default function CTA() {
  return (
    <section className="bg-[var(--color-smoked-stone)] section-padding py-32 border-t border-white/5">
      <div className="container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white/90 mb-8 tracking-tight">
            Elevate Your Every Day
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <Button href="/collection" variant="primary">
              Shop The Collection
            </Button>
            <Button href="/contact" variant="text">
              Request Private View
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
