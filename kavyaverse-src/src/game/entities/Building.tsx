"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh, MeshStandardMaterial } from "three";
import { Text } from "@react-three/drei";
import { useRegisterInteractable } from "@/hooks/useRegisterInteractable";
import type { Project } from "@/data/projects";

interface BuildingProps {
  project: Project;
  position: [number, number, number];
  color: string;
  height?: number;
}

export function Building({ project, position, color, height = 3.4 }: BuildingProps) {
  const windowsRef = useRef<Mesh>(null);

  useRegisterInteractable(project.id, project.title, position, {
    kind: "project",
    data: project,
  });

  const seed = (position[0] * 12.9898 + position[2] * 78.233) % (Math.PI * 2);

  useFrame((state) => {
    if (!windowsRef.current) return;
    const mat = windowsRef.current.material;
    if (Array.isArray(mat)) return;
    const pulse = 0.55 + Math.sin(state.clock.elapsedTime * 1.2 + seed) * 0.25;
    (mat as MeshStandardMaterial).emissiveIntensity = pulse;
  });

  return (
    <group position={position}>
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, height, 2.4]} />
        <meshStandardMaterial color="#1e293b" metalness={0.35} roughness={0.55} />
      </mesh>
      <mesh ref={windowsRef} position={[0, height / 2, 1.21]}>
        <planeGeometry args={[1.9, height - 0.6]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} toneMapped={false} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, height + 0.15, 0]}>
        <boxGeometry args={[2.6, 0.3, 2.6]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.6} roughness={0.3} />
      </mesh>
      <Text
        position={[0, height + 0.9, 0]}
        fontSize={0.24}
        color="#f1f5f9"
        anchorX="center"
        anchorY="bottom"
        maxWidth={2.6}
        textAlign="center"
        outlineWidth={0.012}
        outlineColor="#060910"
      >
        {project.title}
      </Text>
    </group>
  );
}
