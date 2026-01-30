import { Playfair_Display, Inter } from 'next/font/google';

// Luxury serif font for headings - conveys elegance and sophistication
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

// Clean sans-serif for body text - modern and readable
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});
