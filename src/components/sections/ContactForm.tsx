'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState('success');
  };

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 bg-[var(--color-cream-dark)] px-8"
      >
        <span className="text-4xl mb-6 block">✨</span>
        <h3 className="font-serif text-2xl mb-4">Inquiry Received</h3>
        <p className="opacity-70 mb-8 max-w-sm mx-auto">
          Thank you for reaching out. An Atelier consultant will be in touch with you shortly.
        </p>
        <Button onClick={() => setFormState('idle')} variant="text">Send another message</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[10px] uppercase tracking-widest opacity-50">Name</label>
          <input
            required
            type="text"
            id="name"
            className="w-full bg-transparent border-b border-[var(--color-gold)]/30 py-4 focus:border-[var(--color-gold)] outline-none transition-colors font-sans text-sm"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] uppercase tracking-widest opacity-50">Email</label>
          <input
            required
            type="email"
            id="email"
            className="w-full bg-transparent border-b border-[var(--color-gold)]/30 py-4 focus:border-[var(--color-gold)] outline-none transition-colors font-sans text-sm"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-[10px] uppercase tracking-widest opacity-50">Inquiry Type</label>
        <select
          id="subject"
          className="w-full bg-transparent border-b border-[var(--color-gold)]/30 py-4 focus:border-[var(--color-gold)] outline-none transition-colors font-sans text-sm appearance-none cursor-pointer"
        >
          <option value="general">General Inquiry</option>
          <option value="purchase">Purchase Request</option>
          <option value="private-view">Private Viewing</option>
          <option value="press">Press & Media</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest opacity-50">Message</label>
        <textarea
          required
          id="message"
          rows={4}
          className="w-full bg-transparent border-b border-[var(--color-gold)]/30 py-4 focus:border-[var(--color-gold)] outline-none transition-colors font-sans text-sm resize-none"
          placeholder="How can we assist you?"
        />
      </div>

      <div className="pt-4">
        <button
          disabled={formState === 'submitting'}
          type="submit"
          className="w-full bg-[var(--color-black)] text-[var(--color-cream)] py-6 uppercase tracking-[0.3em] text-xs hover:bg-[var(--color-gold)] transition-colors duration-500 disabled:opacity-50"
        >
          {formState === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
        </button>
      </div>
    </form>
  );
}
