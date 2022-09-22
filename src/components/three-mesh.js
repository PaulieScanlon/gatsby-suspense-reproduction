import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

import * as random from 'maath/random/dist/maath-random.cjs';

const ThreeMesh = () => {
  const mesh = useRef(null);

  const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 2 }));

  useFrame(() => {
    return (mesh.current.rotation.y += 0.004);
  });

  return (
    <mesh ref={mesh}>
      <Points positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent={true} color="#97907e" size={0.007} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </mesh>
  );
};

export default ThreeMesh;
