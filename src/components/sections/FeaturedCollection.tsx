'use client';

import { motion } from 'framer-motion';
import { FEATURED_PRODUCTS } from '@/lib/data';
import { HeadingSection, Button } from '@/components/ui';
import ProductCard from '@/components/ui/ProductCard';

export default function FeaturedCollection() {
  return (
    <section className="bg-[var(--color-cream)] section-padding">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4 block">
              Curated Selection
            </span>
            <HeadingSection>
              Featured Collection
            </HeadingSection>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="/collection" variant="text" size="sm">
              View All Pieces
            </Button>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
