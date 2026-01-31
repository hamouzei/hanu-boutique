import { Metadata } from 'next';
import AboutClient from '@/components/sections/AboutClient';

export const metadata: Metadata = {
  title: 'About | ATELIER',
  description: 'Discover the philosophy and craftsmanship behind our luxury fashion house.',
};

export default function AboutPage() {
  return <AboutClient />;
}
