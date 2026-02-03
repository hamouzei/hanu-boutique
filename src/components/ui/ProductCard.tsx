'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';
import { Caption, BodyText } from '@/components/ui';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <Link href={`/collection/${product.slug}`} className="block relative overflow-hidden bg-[var(--color-charcoal)] aspect-[3/4]">
        {/* Product Image */}
        <div className="w-full h-full relative transition-transform duration-1000 ease-[var(--transition-slow)] group-hover:scale-110">
          {/* Using a placeholder if actual images are missing, but following documentation plan */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-black)]/20 z-10" />
          {product.images?.[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[var(--color-cream)]/10 text-[var(--color-gold)] font-serif text-xl border border-[var(--color-gold)]/20">
              {product.name}
            </div>
          )}
        </div>

        {/* Info Reveal from Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full transition-transform duration-700 ease-[var(--transition-medium)] group-hover:translate-y-0 bg-[var(--color-deep-stone)]/90 backdrop-blur-sm">
          <Caption className="text-[10px] text-[var(--color-gold)] mb-1 block">
            {product.category}
          </Caption>
          <h4 className="font-serif text-lg text-white leading-tight mb-2">
            {product.name}
          </h4>
          <BodyText className="text-xs line-clamp-2 opacity-80 mb-4">
            {product.shortDescription}
          </BodyText>
          {product.price && (
            <p className="font-sans text-sm tracking-widest text-[var(--color-gold)]">
              ${product.price.toLocaleString()}
            </p>
          )}
        </div>
        
        {/* Subtle border overlay always visible */}
        <div className="absolute inset-0 border border-[var(--color-gold)]/0 transition-all duration-700 group-hover:border-[var(--color-gold)]/40 pointer-events-none z-30" />
      </Link>
    </motion.div>
  );
}
