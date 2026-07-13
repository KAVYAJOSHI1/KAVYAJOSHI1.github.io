"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

interface TreeProps {
  position: [number, number, number];
  scale?: number;
  color?: string;
}

export function Tree({ position, scale = 1, color = "#16a34a" }: TreeProps) {
  const group = useRef<Group>(null);
  const swaySeed = (position[0] * 12.9898 + position[2] * 78.233) % (Math.PI * 2);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8 + swaySeed) * 0.04;
  });

  return (
    <group position={position} scale={scale} ref={group}>
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.16, 1.2, 6]} />
        <meshStandardMaterial color="#78350f" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.4, 0]} castShadow>
        <coneGeometry args={[0.7, 1.1, 7]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.9, 0]} castShadow>
        <coneGeometry args={[0.5, 0.9, 7]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
    </group>
  );
}
