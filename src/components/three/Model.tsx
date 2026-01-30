'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function Model() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow rotation
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;
    
    // Mouse parallax (subtle)
    const { x, y } = state.mouse;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 0.5, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 0.5, 0.1);
  });

  return (
    <Float
      speed={1.5} 
      rotationIntensity={1} 
      floatIntensity={2}
    >
      <mesh ref={meshRef}>
        {/* Abstract fashion-inspired shape */}
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#C9A962" // Gold accent
          speed={2}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}
