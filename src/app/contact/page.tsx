import { Metadata } from 'next';
import ContactClient from '@/components/sections/ContactClient';

export const metadata: Metadata = {
  title: 'Contact | ATELIER',
  description: 'Inquire about our collection, private viewings, or boutique appointments.',
};

export default function ContactPage() {
  return <ContactClient />;
}
