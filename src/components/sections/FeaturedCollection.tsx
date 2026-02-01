'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeadingSection, Button } from '@/components/ui';
import ProductCard from '@/components/ui/ProductCard';

interface Item {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price: string | null;
  imageUrl: string;
  featured: number | null;
  categoryName: string;
}

export default function FeaturedCollection() {
  const [featuredItems, setFeaturedItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await fetch('/api/items');
        const data = await response.json();
        
        // Filter for featured items and limit to 4
        const featured = data
          .filter((item: Item) => item.featured === 1)
          .slice(0, 4);
        
        setFeaturedItems(featured);
      } catch (error) {
        console.error('Failed to fetch featured items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  // Convert database items to Product format for ProductCard
  const products = featuredItems.map((item) => ({
    id: item.id.toString(),
    name: item.name,
    slug: item.slug,
    category: item.categoryName,
    price: item.price ? parseFloat(item.price) : undefined,
    description: item.description || '',
    shortDescription: item.description || '',
    image: item.imageUrl,
    images: [item.imageUrl], // Convert single image to array
    featured: true, // Already filtered for featured
    new: false, // Database doesn't track "new" status yet
  }));

  if (isLoading) {
    return (
      <section className="bg-[var(--color-cream)] section-padding">
        <div className="container-luxury">
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  // Don't render section if no featured items
  if (products.length === 0) {
    return null;
  }

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
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
