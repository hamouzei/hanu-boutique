'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/ui';

interface Item {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price: string | null;
  imageUrl: string;
  featured: number | null;
  createdAt: string;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
}

export default function CollectionGrid() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch items and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsRes, categoriesRes] = await Promise.all([
          fetch('/api/items'),
          fetch('/api/categories'),
        ]);
        
        const itemsData = await itemsRes.json();
        const categoriesData = await categoriesRes.json();
        
        setItems(itemsData);
        setCategories(categoriesData.map((cat: any) => cat.name));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle category from URL search params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.length > 0) {
      const matchedCategory = categories.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase() || 
               c.toLowerCase().replace(/\s+/g, '-') === categoryParam.toLowerCase()
      );
      if (matchedCategory) {
        setActiveCategory(matchedCategory);
      }
    }
  }, [searchParams, categories]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((item) => item.categoryName === activeCategory);
  }, [activeCategory, items]);

  // Convert database items to Product format for ProductCard
  const products = filteredProducts.map((item) => ({
    id: item.id.toString(),
    name: item.name,
    slug: item.slug,
    category: item.categoryName,
    price: item.price ? parseFloat(item.price) : undefined,
    description: item.description || '',
    shortDescription: item.description || '',
    image: item.imageUrl,
    images: [item.imageUrl], // Convert single image to array
    featured: item.featured === 1,
    new: false, // Database doesn't track "new" status yet
  }));

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-serif italic opacity-50">Loading Collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
        {['All', ...categories].map((category) => (
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
          {products.map((product, index) => (
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
      {products.length === 0 && !isLoading && (
        <div className="text-center py-20">
          <p className="font-serif text-xl opacity-50 italic">No pieces found in this category.</p>
        </div>
      )}
    </div>
  );
}
