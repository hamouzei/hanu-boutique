'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Lights from './Lights';
import Model from './Model';
import { THREE_CONFIG } from '@/lib/constants';

export default function Scene() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera
        makeDefault
        position={THREE_CONFIG.camera.position}
        fov={THREE_CONFIG.camera.fov}
      />
      <Suspense fallback={null}>
        <Lights />
        <Model />
        {/* Adds realistic reflections */}
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
