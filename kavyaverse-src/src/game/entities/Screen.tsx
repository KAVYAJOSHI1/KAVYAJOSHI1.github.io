"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh, MeshStandardMaterial } from "three";
import { Text } from "@react-three/drei";
import { useRegisterInteractable } from "@/hooks/useRegisterInteractable";
import type { PanelContent } from "@/game/store";

interface ScreenProps {
  id: string;
  position: [number, number, number];
  rotationY?: number;
  label: string;
  color?: string;
  content?: PanelContent;
}

/** A wall-mounted training/data screen. Interactive only when `content` is provided. */
export function Screen({ id, position, rotationY = 0, label, color = "#3b82f6", content }: ScreenProps) {
  const screenMesh = useRef<Mesh>(null);

  useRegisterInteractable(id, label, position, content);

  useFrame((state) => {
    if (!screenMesh.current) return;
    const mat = screenMesh.current.material as MeshStandardMaterial;
    mat.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
  });

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.3, 1, 0.1]} />
        <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh ref={screenMesh} position={[0, 0, 0.06]}>
        <planeGeometry args={[1.1, 0.8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} toneMapped={false} />
      </mesh>
      <Text
        position={[0, -0.7, 0.06]}
        fontSize={0.16}
        color="#f1f5f9"
        anchorX="center"
        anchorY="top"
        maxWidth={1.6}
        textAlign="center"
        outlineWidth={0.008}
        outlineColor="#060910"
      >
        {label}
      </Text>
    </group>
  );
}
