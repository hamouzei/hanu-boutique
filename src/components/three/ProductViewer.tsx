'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stage, Center } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Model'; // Using our abstract model as a placeholder for now

export default function ProductViewer() {
  return (
    <div className="w-full h-full min-h-[400px] lg:h-full bg-[var(--color-cream-dark)]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Suspense fallback={null}>
          <Stage environment="studio" intensity={0.5} shadows="contact">
            <Center>

              <Model />
            </Center>
          </Stage>
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
