'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeadingSerif, BodyText, Button } from '@/components/ui';
import * as THREE from 'three';

function CosmeticObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.1;
    meshRef.current.rotation.y = t * 0.4;
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1.8, 32]} />
          <meshStandardMaterial 
            color="#222222" 
            roughness={0.05} 
            metalness={0.9} 
          />
          {/* Top cap detail */}
          <mesh position={[0, 0.95, 0]}>
            <cylinderGeometry args={[0.51, 0.51, 0.1, 32]} />
            <meshStandardMaterial color="#C9A962" metalness={1} roughness={0.1} />
          </mesh>
        </mesh>
      </Float>
      
      <Environment preset="studio" />
      <ContactShadows 
        position={[0, -1.5, 0]} 
        opacity={0.3} 
        scale={8} 
        blur={2} 
        far={3} 
      />
    </>
  );
}

export default function CosmeticsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Pair */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4 h-[400px] md:h-[600px] relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-[var(--color-cream)] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d"
                alt="Intimate beauty detail"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            <div className="relative aspect-[3/4] flex items-center justify-center">
              <Suspense fallback={<div className="font-serif italic opacity-30">Refining...</div>}>
                <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
                  <ambientLight intensity={0.7} />
                  <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} color="#C9A962" />
                  <CosmeticObject />
                </Canvas>
              </Suspense>
              
              {/* Soft aesthetic glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--color-gold-light)]/20 blur-[60px] rounded-full -z-1" />
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2"
          >
            <span className="font-sans text-xs tracking-[0.5em] uppercase text-[var(--color-gold)] mb-6 block">
              Beauty
            </span>
            <HeadingSerif className="text-5xl md:text-7xl mb-8 leading-tight">
              Luminous <br /> Refinement
            </HeadingSerif>
            <BodyText className="text-lg md:text-xl text-[var(--color-charcoal)] max-w-md mb-12 leading-relaxed italic border-l-2 border-[var(--color-gold)]/30 pl-8">
              "Beauty is not about addition, but the careful preservation of light."
            </BodyText>
            
            <BodyText className="text-gray-500 mb-12 max-w-sm">
              Explore our curated selection of silk-infused treatments and artisanal cosmetics designed for the discerning skin.
            </BodyText>
            
            <Button href="/collection?category=cosmetics" variant="secondary" className="group">
              Shop Cosmetics
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
