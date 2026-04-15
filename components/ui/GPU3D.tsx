'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GPUChip() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z += 0.01;
    }
  });

  const amberColor = new THREE.Color('#F59E0B');
  const blueColor = new THREE.Color('#3B82F6');
  const dimAmber = new THREE.Color('#92400E');

  return (
    <group ref={groupRef}>
      {/* Main chip body — flat box */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 0.22, 2.8]} />
        <meshStandardMaterial
          color={dimAmber}
          wireframe={false}
          emissive={new THREE.Color('#1a0a00')}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh position={[0, 0.01, 0]}>
        <boxGeometry args={[2.82, 0.24, 2.82]} />
        <meshStandardMaterial
          color={amberColor}
          wireframe={true}
          emissive={amberColor}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Core die (center) */}
      <mesh ref={innerRef} position={[0, 0.18, 0]}>
        <boxGeometry args={[1.2, 0.08, 1.2]} />
        <meshStandardMaterial
          color={blueColor}
          emissive={blueColor}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Corner bumps (solder balls) */}
      {[
        [-1.1, -0.18, -1.1], [1.1, -0.18, -1.1],
        [-1.1, -0.18, 1.1], [1.1, -0.18, 1.1],
        [0, -0.18, -1.1], [0, -0.18, 1.1],
        [-1.1, -0.18, 0], [1.1, -0.18, 0],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial
            color={amberColor}
            emissive={amberColor}
            emissiveIntensity={0.6}
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}

      {/* Circuit trace lines on top */}
      {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
        <mesh key={`trace-h-${i}`} position={[x, 0.13, 0]}>
          <boxGeometry args={[0.02, 0.01, 2.4]} />
          <meshStandardMaterial
            color={amberColor}
            emissive={amberColor}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      {[-0.8, -0.4, 0, 0.4, 0.8].map((z, i) => (
        <mesh key={`trace-v-${i}`} position={[0, 0.13, z]}>
          <boxGeometry args={[2.4, 0.01, 0.02]} />
          <meshStandardMaterial
            color={blueColor}
            emissive={blueColor}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {/* Floating ring */}
      <mesh position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.03, 8, 60]} />
        <meshStandardMaterial
          color={amberColor}
          emissive={amberColor}
          emissiveIntensity={0.6}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function GPU3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 3, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#F59E0B" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3B82F6" />
        <spotLight
          position={[0, 8, 0]}
          angle={0.5}
          penumbra={1}
          intensity={1.5}
          color="#ffffff"
        />
        <GPUChip />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
