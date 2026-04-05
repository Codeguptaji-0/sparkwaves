import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Sparkles, TorusKnot, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Central Core Object
const CoreGeometry = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1.5, 64, 64]} scale={1}>
        <MeshDistortMaterial 
          color="#0f766e" // brand-700
          attach="material" 
          distort={0.4} 
          speed={2} 
          roughness={0.2}
          metalness={0.8}
          emissive="#14b8a6" // brand-500
          emissiveIntensity={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

// Surrounding Orbital Rings
const Orbitals = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Ring */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <TorusKnot args={[3, 0.05, 128, 16]}>
          <meshStandardMaterial 
            color="#3b82f6" // blue-500
            emissive="#2563eb"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={1}
            wireframe
          />
        </TorusKnot>
      </Float>

      {/* Inner Accent Ring */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <TorusKnot args={[2, 0.02, 64, 8]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial 
            color="#a855f7" // purple-500
            emissive="#9333ea"
            emissiveIntensity={1}
            wireframe
          />
        </TorusKnot>
      </Float>
    </group>
  );
};

// Mouse Parallax Rig
const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Smoothly interpolate the group's rotation based on mouse coordinates
      const targetX = (pointer.x * Math.PI) / 8;
      const targetY = (pointer.y * Math.PI) / 8;
      
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]} // Optimize pixel ratio for performance/quality
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#14b8a6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />

        <CameraRig>
          <CoreGeometry />
          <Orbitals />
          <Sparkles count={300} scale={12} size={4} speed={0.4} opacity={0.4} color="#5eead4" />
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </CameraRig>
        
        {/* Soft studio lighting environment backing */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Scene3D;
