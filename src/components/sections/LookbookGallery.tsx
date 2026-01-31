'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LOOKBOOK_ITEMS, LookbookItem } from '@/lib/data';
import { HeadingSerif, BodyText, Caption } from '@/components/ui';

export default function LookbookGallery() {
  return (
    <div className="space-y-32">
      {LOOKBOOK_ITEMS.map((item: LookbookItem, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col ${
            item.alignment === 'right' ? 'md:flex-row-reverse' : 
            item.alignment === 'left' ? 'md:flex-row' : 
            'items-center'
          } gap-12 md:gap-24`}
        >
          {/* Image Container */}
          <div className={`${item.alignment === 'center' ? 'w-full max-w-5xl' : 'w-full md:w-3/5'} aspect-[16/10] relative overflow-hidden bg-[var(--color-charcoal)]`}>
            <Image
              src={`https://images.unsplash.com/photo-${index === 0 ? '1445205170230-053b83016050' : index === 1 ? '1469334031218-e382a71b716b' : '1539109136881-3be0616acf4b'}`}
              alt={item.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/20 to-transparent" />
          </div>

          {/* Text Content */}
          <div className={`${item.alignment === 'center' ? 'text-center max-w-2xl' : 'md:w-2/5'} flex flex-col justify-center`}>
            <Caption className="text-[var(--color-gold)] mb-4 block">
              Story 0{index + 1}
            </Caption>
            <HeadingSerif className="text-3xl md:text-5xl mb-6">
              {item.title}
            </HeadingSerif>
            <BodyText className="text-lg opacity-70 leading-relaxed italic">
              "{item.description}"
            </BodyText>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className={`w-12 h-[1px] bg-[var(--color-gold)] mt-8 ${item.alignment === 'center' ? 'mx-auto' : ''}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
