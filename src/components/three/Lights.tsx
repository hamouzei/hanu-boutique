'use client';

import { THREE_CONFIG } from '@/lib/constants';

export default function Lights() {
  return (
    <>
      <ambientLight intensity={THREE_CONFIG.lighting.ambient.intensity} />
      <directionalLight
        position={THREE_CONFIG.lighting.directional.position}
        intensity={THREE_CONFIG.lighting.directional.intensity}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
    </>
  );
}
