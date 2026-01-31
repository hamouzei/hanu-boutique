'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment, ContactShadows } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeadingSerif, BodyText, Button } from '@/components/ui';
import * as THREE from 'three';

function PerfumeVisual() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color="#e5e7eb"
            speed={2}
            distort={0.3}
            radius={1}
            roughness={0.05}
            metalness={0.9}
            transparent
            opacity={0.8}
            envMapIntensity={2}
          />
        </Sphere>
      </Float>
      
      {/* Decorative inner element to simulate liquid/reflections */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#d4af37" 
          emissive="#d4af37" 
          emissiveIntensity={0.5}
          roughness={0} 
          metalness={1}
        />
      </Sphere>

      <Environment preset="studio" />
      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4.5} 
      />
    </>
  );
}

export default function PerfumesSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden py-24">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-amber-900/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-gray-900/20 to-transparent blur-[100px]" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-xs tracking-[0.5em] uppercase text-[var(--color-gold)] mb-6 block drop-shadow-sm">
              Fragrance
            </span>
            <HeadingSerif className="text-white text-5xl md:text-7xl mb-8 leading-tight">
              Essence de Nuit
            </HeadingSerif>
            <BodyText className="text-gray-400 text-lg md:text-xl max-w-md mb-12 leading-relaxed">
              An intimate blend of midnight jasmine, sandalwood, and a hint of smoke. A study in the invisible architecture of memory.
            </BodyText>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <Button href="/collection?category=perfumes" variant="primary" className="!bg-white !text-black border-none hover:!bg-gray-200">
                Explore Fragrances
              </Button>
            </div>
          </motion.div>

          {/* 3D Visual */}
          <div className="h-[500px] md:h-[600px] w-full relative cursor-default">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-[1px] bg-white animate-pulse" />
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#d4af37" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <PerfumeVisual />
              </Canvas>
            </Suspense>
            
            {/* Visual glow beneath the object */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -z-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
