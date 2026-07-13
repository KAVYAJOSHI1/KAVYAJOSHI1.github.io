"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { Text } from "@react-three/drei";

interface HologramProps {
  position: [number, number, number];
  color?: string;
  label?: string;
  scale?: number;
}

/** Floating rotating wireframe icosahedron used to represent AI/data concepts. */
export function Hologram({ position, color = "#06b6d4", label, scale = 1 }: HologramProps) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.5;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.2;
    group.current.position.y = position[1] + Math.sin(t * 1.1) * 0.15;
  });

  return (
    <group position={position}>
      <group ref={group} scale={scale}>
        <mesh>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.85} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.5} />
        </mesh>
      </group>
      <pointLight color={color} intensity={0.6} distance={3} />
      {label && (
        <Text
          position={[0, 1.05 * scale, 0]}
          fontSize={0.2}
          color="#f1f5f9"
          anchorX="center"
          anchorY="bottom"
          maxWidth={2}
          textAlign="center"
          outlineWidth={0.01}
          outlineColor="#060910"
        >
          {label}
        </Text>
      )}
    </group>
  );
}
