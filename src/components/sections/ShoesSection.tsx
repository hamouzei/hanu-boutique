'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeadingSerif, BodyText, Button } from '@/components/ui';
import * as THREE from 'three';

function ShoeSculpture() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;
  });

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Abstract "Heel" Form */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.5, 2.5, 0.5]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.8} />
        </mesh>
        
        {/* Footbed/Sole Shape */}
        <mesh position={[0.5, -0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <capsuleGeometry args={[0.4, 2, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Glossy Accents */}
        <mesh position={[1.2, -1.2, 0.2]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#C9A962" metalness={1} roughness={0} />
        </mesh>
      </Float>
      
      <Environment preset="city" />
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.6} 
        scale={10} 
        blur={2.5} 
        far={4} 
      />
    </group>
  );
}

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
          
          {/* Visual Side (3/4 angle sculpture) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 w-full h-[500px] lg:h-[700px] relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 z-0 bg-white/30 rounded-full blur-[120px] opacity-50 translate-y-10" />
            
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center font-serif italic opacity-30">Sculpting form...</div>}>
              <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[5, 10, 5]} angle={0.15} penumbra={1} intensity={1} />
                <PresentationControls
                  global
                  rotation={[0, 0.3, 0]}
                  polar={[-Math.PI / 3, Math.PI / 3]}
                  azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                >
                  <ShoeSculpture />
                </PresentationControls>
              </Canvas>
            </Suspense>
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
