"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh, MeshStandardMaterial } from "three";

interface NeonPillarProps {
  position: [number, number, number];
  color?: string;
  height?: number;
}

export function NeonPillar({ position, color = "#a78bfa", height = 4 }: NeonPillarProps) {
  const mesh = useRef<Mesh>(null);
  const seed = (position[0] * 12.9898 + position[2] * 78.233) % (Math.PI * 2);

  useFrame((state) => {
    if (!mesh.current) return;
    const mat = mesh.current.material as MeshStandardMaterial;
    mat.emissiveIntensity = 1.1 + Math.sin(state.clock.elapsedTime * 2.2 + seed) * 0.5;
  });

  return (
    <group position={position}>
      <mesh ref={mesh} position={[0, height / 2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, height, 10]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05, 16]} />
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.4} />
      </mesh>
      <pointLight color={color} intensity={0.8} distance={5} position={[0, height * 0.6, 0]} />
    </group>
  );
}
