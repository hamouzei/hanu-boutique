'use client';

import { motion } from 'framer-motion';
import { HeadingSerif, BodyText, Button } from '@/components/ui';

const MATERIAL_HIGHLIGHTS = [
  { title: "Italian Calfskin", desc: "Sourced from historic tanneries in Tuscany." },
  { title: "Hand-Molded Architecture", desc: "Structural integrity meets fluid movement." },
  { title: "Signature Hardware", desc: "Custom-cast accents in polished champagne gold." }
];

export default function ShoesSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-cream-dark)] py-24 overflow-hidden">
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 w-full h-[500px] lg:h-[700px] relative order-2 lg:order-1 flex items-center justify-center"
          >
            {/* Background glow */}
            <div className="absolute inset-0 z-0 bg-white/30 rounded-full blur-[120px] opacity-50 translate-y-10" />
            
            {/* Elegant shoe silhouette using CSS */}
            <div className="relative z-10">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Heel */}
                <div className="absolute left-1/4 bottom-1/3 w-12 h-32 bg-gradient-to-b from-gray-800 to-black rounded-sm transform -rotate-12 shadow-2xl">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-gold)] rounded-full" />
                </div>
                
                {/* Sole/footbed */}
                <div className="absolute bottom-1/3 left-1/3 w-48 h-24 bg-gradient-to-r from-black/90 to-gray-800 rounded-full transform rotate-12 shadow-2xl" />
                
                {/* Upper part */}
                <div className="absolute top-1/3 left-1/3 w-40 h-32 bg-gradient-to-br from-gray-700 to-black/90 rounded-3xl transform -rotate-6 shadow-xl">
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[var(--color-gold)] rounded-full opacity-80" />
                </div>

                {/* Decorative gold accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--color-gold)]/10 blur-2xl rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex-1 z-10 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs tracking-[0.5em] uppercase text-[var(--color-gold)] mb-6 block">
                Footwear
              </span>
              <HeadingSerif className="text-5xl md:text-7xl mb-8 leading-tight">
                Architectural <br /> Steps
              </HeadingSerif>
              <BodyText className="text-lg md:text-xl opacity-80 max-w-md mb-12">
                A definitive collection where ergonomic precision meets sculptural elegance. Crafted for the modern silhouette.
              </BodyText>
              
              {/* Material Highlights Grid */}
              <div className="grid grid-cols-1 gap-8 mb-16">
                {MATERIAL_HIGHLIGHTS.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start"
                  >
                    <span className="font-serif text-[var(--color-gold)] opacity-50 italic text-2xl pt-1">
                      0{i+1}
                    </span>
                    <div>
                      <h4 className="font-sans text-xs tracking-[0.2em] uppercase mb-2 font-bold">{item.title}</h4>
                      <p className="font-serif text-sm opacity-60 italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button href="/collection?category=shoes" variant="secondary" className="group">
                Discover the Collection
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
