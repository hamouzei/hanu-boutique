import { Metadata } from 'next';
import { ALL_PRODUCTS } from '@/lib/data';
import ProductDetailClient from '@/components/sections/ProductDetailClient';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Piece Not Found | ATELIER',
    };
  }

  return {
    title: `${product.name} | ATELIER`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ATELIER`,
      description: product.shortDescription,
      images: product.images,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  
  return <ProductDetailClient slug={slug} initialProduct={product} />;
}
