'use client';

import { use, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ALL_PRODUCTS, Product } from '@/lib/data';
import { HeadingSerif, BodyText, Caption, Button } from '@/components/ui';

// Dynamic import for 3D viewer (Client-side only)
const ProductViewer = dynamic(() => import('@/components/three/ProductViewer'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[var(--color-cream-dark)] animate-pulse" />
});

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = use(params);
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    const foundProduct = ALL_PRODUCTS.find((p) => p.slug === slug);
    setProduct(foundProduct);
  }, [slug]);

  if (!product) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center pt-32 pb-20">
        <div className="container-luxury text-center">
          <HeadingSerif className="text-3xl mb-8">Piece Not Found</HeadingSerif>
          <Button href="/collection" variant="primary">Return to Collection</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-32 pb-20">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: 3D Viewer / Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] lg:sticky lg:top-32"
          >
            <ProductViewer />
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[var(--color-black)] text-[var(--color-cream)] text-[10px] tracking-widest uppercase px-3 py-1">
                Interactive View
              </span>
            </div>
          </motion.div>

          {/* Right Side: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <nav className="mb-8">
                <Link href="/collection" className="text-[10px] tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                  <span>←</span> Back to Collection
                </Link>
              </nav>

              <Caption className="text-[var(--color-gold)] mb-4 block">
                {product.category}
              </Caption>
              <HeadingSerif className="text-4xl md:text-5xl lg:text-6xl mb-6">
                {product.name}
              </HeadingSerif>
              {product.price && (
                <p className="font-sans text-2xl tracking-widest text-[var(--color-black)] mb-8">
                  ${product.price.toLocaleString()}
                </p>
              )}
            </div>

            <div className="space-y-6">
              <div className="h-[1px] w-full bg-[var(--color-gold)] opacity-20" />
              <BodyText className="text-lg leading-relaxed text-[var(--color-charcoal)]">
                {product.description}
              </BodyText>
              <div className="h-[1px] w-full bg-[var(--color-gold)] opacity-20" />
            </div>

            <div className="grid grid-cols-2 gap-8 my-8">
              <div>
                <Caption className="mb-2 block opacity-50">Artisanship</Caption>
                <p className="text-xs uppercase tracking-widest">Hand-finished</p>
              </div>
              <div>
                <Caption className="mb-2 block opacity-50">Origin</Caption>
                <p className="text-xs uppercase tracking-widest">Italian Textiles</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Button href="/contact" variant="primary" className="flex-1">
                Inquire for Purchase
              </Button>
              <Button href="/contact" variant="secondary" className="flex-1">
                Request Private View
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
