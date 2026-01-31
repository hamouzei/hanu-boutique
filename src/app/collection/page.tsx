import { Metadata } from 'next';
import CollectionClient from '@/components/sections/CollectionClient';

export const metadata: Metadata = {
  title: 'Collection | ATELIER',
  description: 'Explore our curated selection of exclusive, handcrafted fashion pieces.',
};

export default function CollectionPage() {
  return <CollectionClient />;
}
