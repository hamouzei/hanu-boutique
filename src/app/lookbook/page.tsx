import { Metadata } from 'next';
import LookbookClient from '@/components/sections/LookbookClient';

export const metadata: Metadata = {
  title: 'Lookbook | ATELIER',
  description: 'Journey through our visual stories and editorial collections.',
};

export default function LookbookPage() {
  return <LookbookClient />;
}
