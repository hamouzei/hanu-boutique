'use client';

import { motion } from 'framer-motion';
import { HeadingSerif, HeadingSection, BodyText, Caption, Button } from '@/components/ui';
import { BRAND_INFO } from '@/lib/data';
import ContactForm from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-32 pb-20">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4 block">
              Contact
            </span>
            <HeadingSerif className="text-4xl md:text-5xl lg:text-6xl mb-8">
              Let's Create <br /> Something Exceptional
            </HeadingSerif>
            <BodyText className="text-lg opacity-70 mb-12 max-w-md">
              Whether you're inquiring about a specific piece, private tailoring, or a boutique appointment, our team is here to assist you.
            </BodyText>

            <div className="space-y-12">
              <div className="flex flex-col gap-2">
                <Caption className="opacity-50">General Inquiries</Caption>
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="text-lg hover:text-[var(--color-gold)] transition-colors">
                  {BRAND_INFO.contact.email}
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <Caption className="opacity-50">Private Viewing</Caption>
                <a href={`tel:${BRAND_INFO.contact.phone}`} className="text-lg hover:text-[var(--color-gold)] transition-colors">
                  {BRAND_INFO.contact.phone}
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <Caption className="opacity-50">Atelier Address</Caption>
                <p className="text-lg leading-relaxed max-w-[250px]">
                  {BRAND_INFO.contact.address}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Caption className="opacity-50">Digital Presence</Caption>
                <a href="#" className="text-lg hover:text-[var(--color-gold)] transition-colors">
                  Instagram — {BRAND_INFO.contact.instagram}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-[var(--color-cream-dark)] p-8 md:p-12 border border-[var(--color-gold)]/5"
          >
            <HeadingSection className="mb-12 text-center text-sm uppercase tracking-widest opacity-50">
              Inquiry Form
            </HeadingSection>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
