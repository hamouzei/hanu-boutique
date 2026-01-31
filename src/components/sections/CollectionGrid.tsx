'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { ALL_PRODUCTS, CATEGORIES, Product } from '@/lib/data';
import { ProductCard } from '@/components/ui';

export default function CollectionGrid() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Handle category from URL search params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Find matching category (case-insensitive or slug-based)
      const matchedCategory = CATEGORIES.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase() || 
               c.toLowerCase().replace(/\s+/g, '-') === categoryParam.toLowerCase()
      );
      if (matchedCategory) {
        setActiveCategory(matchedCategory);
      }
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((product: Product) => product.category === activeCategory);
  }, [activeCategory]);


  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
        {['All', ...CATEGORIES].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`font-sans text-xs tracking-[0.3em] uppercase transition-all duration-300 py-2 border-b-2 ${
              activeCategory === category
                ? 'text-[var(--color-black)] border-[var(--color-gold)]'
                : 'text-[var(--color-warm-gray)] border-transparent hover:text-[var(--color-black)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product: Product, index) => (
            <motion.div

              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} index={index % 4} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="font-serif text-xl opacity-50 italic">No pieces found in this category.</p>
        </div>
      )}
    </div>
  );
}
